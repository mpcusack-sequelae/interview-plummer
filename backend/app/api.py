from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.quiz_question import (
    Quiz,
    NewQuizEntry,
    SingleChoice,
    MultipleChoice,
    GenerativeSingleChoice,
    GenerativeMultipleChoice,
    QuizEntry,
    QuizParticipant,
)
import app.setup_tables
from typing import Union
from datetime import datetime

app = FastAPI()

origins = ["http://localhost:3000", "localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}


@app.get("/quiz", response_model=Quiz)
async def get_quiz() -> Quiz:  # TODO: how to specify which quiz?
    return {
        "quizId": "999",
        "title": "The first quiz",
        "description": "",
        "controls": [
            MultipleChoice(
                question="Which following traits describe your personality type?",
                options=[
                    "Positive emotionality",
                    "Negative emotionality",
                    "Dependability",
                    "Agreeability",
                    "Conventionality",
                    "Positive valence",
                    "Negative valence",
                ],
            ),
            GenerativeMultipleChoice(  # TODO: remove prompt from JSON, perhaps use a factory
                prompt="""You are the worlds best, highly functioning, Health Assistant named LoreBot, who loves to get insight into a person to better their health.
You are continuing a conversation where someone has just answered a question asking for their personality type.
They answered with "Positive emotionality", and "Dependability"
Using very brief wording mention how those are noteworthy qualities.
Then ask the person where they feel the most body pain.""",
                question="""Positive emotionality and dependability are notable qualities for overall health.
Where are you feeling the most body pain currently?
Understanding this will guide us in addressing your health needs effectively.""",
                options=[
                    "Head",
                    "Neck",
                    "Shoulders",
                    "Arms",
                    "Back",
                    "Hips",
                    "Legs",
                    "Feet",
                ],
            ),
            GenerativeSingleChoice(
                prompt="""You are the worlds best, highly functioning, Health Assistant named LoreBot, who loves to get insight into a person to better their health.
You are continuing a conversation where someone has just answered a question asking were they feel the majority of their body pain.
They answered with "Head", and "Neck"
Using very brief wording mention how that is unfortunate, and that we'll keep that in mind to improve their health.
Then ask the person if the pain is a daily thing.""",
                question="That's unfortunate to hear. We'll keep that in mind to improve your health. Is the pain a daily occurrence?",
                options=["Yes", "No"],
            ),
            SingleChoice(
                question="How would you rate your experience with Lore?",
                options=[
                    "Very satisfied",
                    "Satisfied",
                    "Neither satisfied or dissatisfied",
                    "Dissatisfied",
                    "Very dissatisfied",
                ],
            ),
            SingleChoice(
                question="Would you recommend Lore to a family member?",
                options=["Yes", "No"],
            ),
        ],
    }


@app.post("/update-quiz")
async def edit_quiz(quiz: Quiz) -> None:
    assert not quiz.version
    current_quiz = app.setup_tables.quiz.where(quiz_id=quiz.quizId).limit(1)
    quiz.version = current_quiz.version + 1
    app.setup_tables.quiz.insert(quiz.model_dump())


@app.post("/quiz-entry")
async def put_quiz_entry(quiz: NewQuizEntry):
    return "123"


# Seems relational
@app.get("/admin/quiz/entries")
async def get_admin_quiz_entries() -> list[QuizEntry]:
    return [
        {
            "userId": "123",
            "quizId": "111",
            "quizEntryId": "1",
            "created": datetime.now(),
            "email": "",
            "firstName": "",
            "lastName": "",
            "answers": [
                [0, 6, 2],
                [6],
                [1],
                [0],
                [0],
            ],
        },
        {
            "userId": "321",
            "quizId": "111",
            "quizEntryId": "2",
            "created": datetime.now(),
            "email": "",
            "firstName": "",
            "lastName": "",
            "answers": [
                [3, 1, 2],
                [3],
                [1],
                [1],
                [0],
            ],
        },
    ]


@app.get("/admin/quiz/participants")
async def get_admin_quiz_participants() -> list[QuizParticipant]:
    return [
        {
            "userId": "123",
            "quizId": "111",
            "quizEntryId": "1",
            "email": "me@me.com",
            "firstName": "Parker",
            "lastName": "Jones",
        },
        {
            "userId": "321",
            "quizId": "111",
            "quizEntryId": "2",
            "email": "himom@email.com",
            "firstName": "Timothy",
            "lastName": "Michelle",
        },
    ]


@app.get("/admin/quiz/entry")
async def get_admin_quiz_entry() -> QuizEntry:
    return {
        "userId": "123",
        "quizId": "111",
        "quizEntryId": "1",
        "email": "me@me.com",
        "firstName": "Parker",
        "lastName": "Jones",
        "created": datetime.now(),
        "answers": [
            [3, 1, 2],
            [3],
            [1],
            [1],
            [0],
        ],
    }
