import { mergeMultipleAnswer, mergeSingleAnswer, QuizAnswers } from "./quiz-utils";

describe("QuizUtils", () => {
  describe(mergeMultipleAnswer, () => {
    it("copies answers and merges values at index", () => {
      const answers: QuizAnswers = [[1,2,3], [0,1]];
      expect(mergeMultipleAnswer(answers, [1,2], 1)).toEqual([[1,2,3], [1,2]]);
    });
  });
  describe(mergeSingleAnswer, () => {
    it("copies answers and merges value at index", () => {
      const answers: QuizAnswers = [[1,2,3], [0]];
      expect(mergeSingleAnswer(answers, 1, 1)).toEqual([[1,2,3], [1]]);
    });
  });
});