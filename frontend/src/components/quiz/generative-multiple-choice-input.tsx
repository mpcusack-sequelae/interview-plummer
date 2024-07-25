import { CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";
import { GenerativeMultipleChoice } from "../../client";
import { mergeMultipleAnswer, QuizAnswers, SetAnswers } from "./quiz-utils";

export interface GenerativeMultipleChoiceInputProps {
  control: GenerativeMultipleChoice;
  index: number;
  answers: QuizAnswers;
  setAnswers: SetAnswers;
}

export const GenerativeMultipleChoiceInput = ({ control, index, answers, setAnswers }: GenerativeMultipleChoiceInputProps) => {
  const answer: number[] = answers?.[index] || [];
  return <CheckboxGroup
    value={answer}
    onChange={(values: number[]) => setAnswers(mergeMultipleAnswer(answers, values, index))}
  >
    <Stack direction="column">
      {control.options.map((option, optionIndex) => (
        <Checkbox
          value={String(optionIndex)}
          key={String(optionIndex)}
          isChecked={Boolean(answer?.find((value) => value === optionIndex))}
        >
          {option}
        </Checkbox>
      ))}
    </Stack>
  </CheckboxGroup>;
};