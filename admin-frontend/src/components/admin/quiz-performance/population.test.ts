import { QuizEntry } from "../../../client";
import { countAnswer, countMultiAnswer } from "./population";

describe("Quiz Performance Population Functions", () => {
  const quizEntries: QuizEntry[] = [
    {
      userId: "123",
      quizId: "111",
      quizEntryId: "1",
      email: "",
      firstName: "",
      lastName: "",
      created: (new Date()).toDateString(),
      answers: [
        [0],
        [1, 2],
      ],
    },
    {
      userId: "123",
      quizId: "111",
      quizEntryId: "2",
      email: "",
      firstName: "",
      lastName: "",
      created: (new Date()).toDateString(),
      answers: [
        [1],
        [2, 3],
      ],
    },
    {
      userId: "123",
      quizId: "111",
      quizEntryId: "3",
      email: "",
      firstName: "",
      lastName: "",
      created: (new Date()).toDateString(),
      answers: [
        [0],
        [0, 1],
      ],
    },
  ];
  describe(countAnswer, () => {
    it("returns count of 2 for single answer at index 0 with answer of 0", () => {
      expect(countAnswer(quizEntries, 0, 0)).toEqual(2);
    });
  });
  describe(countMultiAnswer, () => {
    it("returns count of 1 for multi answer at index 1 with answer of 0", () => {
      expect(countMultiAnswer(quizEntries, 1, 0)).toEqual(1);
    });
    it("returns count of 2 for multi answer at index 1 with answer of 1", () => {
      expect(countMultiAnswer(quizEntries, 1, 1)).toEqual(2);
    });
    it("returns count of 2 for multi answer at index 1 with answer of 2", () => {
      expect(countMultiAnswer(quizEntries, 1, 2)).toEqual(2);
    });
    it("returns count of 1 for multi answer at index 1 with answer of 3", () => {
      expect(countMultiAnswer(quizEntries, 1, 3)).toEqual(1);
    });
  });
});