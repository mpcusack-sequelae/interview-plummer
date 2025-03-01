// This file is auto-generated by @hey-api/openapi-ts

export type GenerativeMultipleChoice = {
    id?: string | null;
    prompt: string;
    type?: 'GenerativeMultipleChoice';
    question: string;
    options: Array<(string)>;
};

export type type = 'GenerativeMultipleChoice';

export type GenerativeSingleChoice = {
    id?: string | null;
    type?: 'GenerativeSingleChoice';
    question: string;
    prompt: string;
    options: Array<(string)>;
};

export type type2 = 'GenerativeSingleChoice';

export type HTTPValidationError = {
    detail?: Array<ValidationError>;
};

export type MultipleChoice = {
    id?: string | null;
    type?: 'MultipleChoice';
    question: string;
    options: Array<(string)>;
};

export type type3 = 'MultipleChoice';

export type NewQuizEntry = {
    answers: Array<Array<(number)>>;
};

export type Quiz = {
    quizId: string;
    title: string;
    description: string;
    controls: Array<(SingleChoice | MultipleChoice | GenerativeSingleChoice | GenerativeMultipleChoice)>;
};

export type QuizEntry = {
    userId: string;
    quizId: string;
    quizEntryId: string;
    created: string;
    email: string;
    firstName: string;
    lastName: string;
    answers: Array<Array<(number)>>;
};

export type QuizParticipant = {
    userId: string;
    quizId: string;
    quizEntryId: string;
    email: string;
    firstName: string;
    lastName: string;
};

export type SingleChoice = {
    id?: string | null;
    type?: 'SingleChoice';
    question: string;
    options: Array<(string)>;
};

export type type4 = 'SingleChoice';

export type ValidationError = {
    loc: Array<(string | number)>;
    msg: string;
    type: string;
};

export type ReadRootGetResponse = {
    [key: string]: unknown;
};

export type GetQuizQuizGetResponse = Quiz;

export type PutQuizEntryQuizEntryPostData = {
    requestBody: NewQuizEntry;
};

export type PutQuizEntryQuizEntryPostResponse = unknown;

export type GetAdminQuizEntriesAdminQuizEntriesGetResponse = Array<QuizEntry>;

export type GetAdminQuizParticipantsAdminQuizParticipantsGetResponse = Array<QuizParticipant>;

export type GetAdminQuizEntryAdminQuizEntryGetResponse = QuizEntry;

export type $OpenApiTs = {
    '/': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: {
                    [key: string]: unknown;
                };
            };
        };
    };
    '/quiz': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: Quiz;
            };
        };
    };
    '/quiz-entry': {
        post: {
            req: PutQuizEntryQuizEntryPostData;
            res: {
                /**
                 * Successful Response
                 */
                200: unknown;
                /**
                 * Validation Error
                 */
                422: HTTPValidationError;
            };
        };
    };
    '/admin/quiz/entries': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: Array<QuizEntry>;
            };
        };
    };
    '/admin/quiz/participants': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: Array<QuizParticipant>;
            };
        };
    };
    '/admin/quiz/entry': {
        get: {
            res: {
                /**
                 * Successful Response
                 */
                200: QuizEntry;
            };
        };
    };
};