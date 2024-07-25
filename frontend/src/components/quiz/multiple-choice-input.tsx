import { CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";
import { MultipleChoice } from "../../client";
import { mergeMultipleAnswer, QuizAnswers, SetAnswers } from "./quiz-utils";

export interface MultipleChoiceInputProps {
  control: MultipleChoice;
  index: number;
  answers: QuizAnswers;
  setAnswers: SetAnswers;
}

export const MultipleChoiceInput = ({ control, index, answers, setAnswers }: MultipleChoiceInputProps) => {
  const answer: number[] = answers?.[index] || [];
  return <CheckboxGroup
    value={answer}  
    onChange={(values: number[]) => setAnswers(mergeMultipleAnswer(answers, values, index))}
  >
    <Stack direction="column">
      {control.options.map((option, optionIndex) => (
        <Checkbox value={String(optionIndex)} key={String(optionIndex)}>
          {option}
        </Checkbox>
      ))}
    </Stack>
  </CheckboxGroup>;
};