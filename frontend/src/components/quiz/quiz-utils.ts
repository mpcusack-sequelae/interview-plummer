import { SingleChoice, MultipleChoice, GenerativeSingleChoice, GenerativeMultipleChoice } from "../../client/types.gen";

export type QuizAnswer = number;

export type QuizAnswers = Array<QuizAnswer[]>;

export type SetAnswers = React.Dispatch<React.SetStateAction<QuizAnswers>>;

export interface InputProps {
  index: number;
  answers: QuizAnswers;
  setAnswers: SetAnswers;
}

export type Control = SingleChoice | MultipleChoice | GenerativeSingleChoice | GenerativeMultipleChoice;

export function mergeMultipleAnswer(answers: QuizAnswers, values: QuizAnswer[], index: number) {
  const newAnswers = [...answers];
  newAnswers[index] = values;
  return newAnswers;
}

export function mergeSingleAnswer(answers: QuizAnswers, value: QuizAnswer, index: number) {
  const newAnswers = [...answers];
  newAnswers[index] = [value];
  return newAnswers;
}
