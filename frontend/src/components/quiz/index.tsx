import { useState, useEffect } from "react";
import { Container, Card, CardHeader, CardBody, Heading, Button, Divider, Box, ButtonGroup, useControllableState, Spinner } from "@chakra-ui/react";
import { getQuizQuizGet, GetQuizQuizGetResponse, putQuizEntryQuizEntryPost } from "../../client/index";
import { QuizAnswers, Control, InputProps } from "./quiz-utils";
import { MultipleChoiceInput, MultipleChoiceInputProps } from "./multiple-choice-input";
import { SingleChoiceInput, SingleChoiceInputProps } from "./single-choice-input";
import { GenerativeMultipleChoiceInput, GenerativeMultipleChoiceInputProps } from "./generative-multiple-choice-input";
import { GenerativeSingleChoiceInput, GenerativeSingleChoiceInputProps } from "./generative-single-choice-input";

function RenderQuestionInput(props: { control: Control } & InputProps) {
  switch (props.control.type) {
    case "MultipleChoice": return <MultipleChoiceInput {...props as MultipleChoiceInputProps} />;
    case "SingleChoice": return <SingleChoiceInput {...props as SingleChoiceInputProps} />;
    case "GenerativeSingleChoice": return <GenerativeSingleChoiceInput {...props as GenerativeSingleChoiceInputProps} />;
    case "GenerativeMultipleChoice": return <GenerativeMultipleChoiceInput {...props as GenerativeMultipleChoiceInputProps} />;
  }
  throw new Error(`Unrecognized control ${JSON.stringify(props.control)}`);
}

export const Quiz = () => {
  const [quiz, setQuiz] = useState<GetQuizQuizGetResponse>();
  const [answers, setAnswers] = useState<number[][]>([]);
  const [activeIndex, setActiveIndex] = useControllableState({ defaultValue: 0 });
  const [isSaving, setIsSaving] = useState(false);
  const [isFinished, setIsFinished] = useControllableState({ defaultValue: false });

  useEffect(() => {
    const getData = async () => {
      setQuiz(await getQuizQuizGet());
      setAnswers(new Array(quiz?.controls.length));
    };
    getData().catch(console.error);
  }, []);

  if (answers.length === 0) {
    return null;
  }

  function isFirst(index: number): boolean {
    return index === 0;
  }

  function isLast(index: number): boolean {
    return index === (quiz && quiz.controls.length - 1);
  }

  function save() {
    setIsSaving(true);
    putQuizEntryQuizEntryPost({
      requestBody: {
        answers,
      }
    })
      .finally(() => setIsSaving(false));
  }

  const index = (quiz && quiz.controls.map((question, index) => index).find((index) => index === activeIndex));
  if (typeof index !== "number") {
    return null;
  }
  const control = (quiz && quiz.controls[index]);
  if (!control) {
    return null;
  }
  const answer = Boolean(answers?.[index]);

  return (
    <Container>
      { isFinished
        ? <Card><CardHeader>Quiz Saved!</CardHeader></Card>
        : <Card>
            <CardHeader><Heading size="sm">{control.question}</Heading></CardHeader>
            <CardBody>
              <RenderQuestionInput
                key={String(0)}
                control={control}
                index={index}
                answers={answers}
                setAnswers={setAnswers}
              />
              <Box padding="5">
                <Divider />
              </Box>
              <ButtonGroup gap="5">
                { !isFirst(index) && <Button size='sm' onClick={() => setActiveIndex(activeIndex - 1)}>Back</Button> }
                { !isLast(index) && <Button size='sm' onClick={() => setActiveIndex(activeIndex + 1)} isDisabled={!answer}>Next</Button> }
                { isLast(index) && <Button size='sm' onClick={() => {
                  save();
                  setIsFinished(true);
                }} isDisabled={!answer}>Save</Button> }
                { isSaving && <Spinner /> }
              </ButtonGroup>
            </CardBody>
          </Card>
      }
    </Container>
  );
};
