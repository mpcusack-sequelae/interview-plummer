import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { SingleChoice } from "../../client";
import { mergeSingleAnswer, QuizAnswers, SetAnswers } from "./quiz-utils";

export interface SingleChoiceInputProps {
  control: SingleChoice;
  index: number;
  answers: QuizAnswers;
  setAnswers: SetAnswers;
}

export const SingleChoiceInput = ({ control, index, answers, setAnswers }: SingleChoiceInputProps) => {
  const answer = answers?.[index];
  return <RadioGroup value={String(answer)} onChange={(value) => setAnswers(mergeSingleAnswer(answers, parseInt(value), index))}>
    <Stack direction="column">
      {control.options.map((option, optionIndex) => (
        <Radio value={String(optionIndex)} key={String(optionIndex)}>
          {option}
        </Radio>
      ))}
    </Stack>
  </RadioGroup>;
};