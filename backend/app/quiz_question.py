from pydantic import BaseModel, Field
from typing import Optional, Literal
from typing import Union
from datetime import datetime

class SingleChoice(BaseModel):
  id: Optional[str] = "NA"
  type: Literal["SingleChoice"] = "SingleChoice"
  question: str
  options: list[str]

class MultipleChoice(BaseModel):
  id: Optional[str] = "NA"
  type: Literal["MultipleChoice"] = "MultipleChoice"
  question: str
  options: list[str]

class GenerativeSingleChoice(BaseModel):
  id: Optional[str] = "NA"
  type: Literal["GenerativeSingleChoice"] = "GenerativeSingleChoice"
  question: str
  prompt: str
  options: list[str]
  
class GenerativeMultipleChoice(BaseModel): # POC, TODO: connect to "Generative AI". Perhaps LangChain?
  id: Optional[str] = "NA"
  prompt: str
  type: Literal["GenerativeMultipleChoice"] = "GenerativeMultipleChoice"
  question: str
  options: list[str]

class Quiz(BaseModel):
  quizId: str
  title: str
  description: str
  controls: list[Union[SingleChoice, MultipleChoice, GenerativeSingleChoice, GenerativeMultipleChoice]]

class NewQuizEntry(BaseModel):
  answers: list[list[int]]

class QuizEntry(BaseModel):
  userId: str
  quizId: str
  quizEntryId: str
  created: datetime
  email: str
  firstName: str
  lastName: str
  answers: list[list[int]]

class QuizParticipant(BaseModel):
  userId: str
  quizId: str
  quizEntryId: str
  email: str
  firstName: str
  lastName: str
