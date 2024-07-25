import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { SingleChoice } from "../../client";
import { mergeSingleAnswer, QuizAnswers, SetAnswers } from "./quiz-utils";

export interface GenerativeSingleChoiceInputProps {
  control: SingleChoice;
  index: number;
  answers: QuizAnswers;
  setAnswers: SetAnswers;
}

export const GenerativeSingleChoiceInput = ({ control, index, answers, setAnswers }: GenerativeSingleChoiceInputProps) => {
  const answer = answers?.[index] || [];
  return <RadioGroup
    value={answer[0]?.toString() || ""}
    onChange={(value: string) => setAnswers(mergeSingleAnswer(answers, parseInt(value), index))}
  >
    <Stack direction="column">
      {control.options.map((option, optionIndex) => (
        <Radio value={String(optionIndex)} key={String(optionIndex)}>
          {option}
        </Radio>
      ))}
    </Stack>
  </RadioGroup>;
};