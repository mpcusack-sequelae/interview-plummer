# Database

The database of choice here seems to be that of a relational database (sql like), as apposed to a non-relation (mongodb like)

## Probable tables

### User
userId: GUID
created: Date
email: string
firstName: string
lastName: string
password: string - encrypted and best practices, etc.

### UserPermission
userId: GUID
created: Date
permission: 'admin' | 'user'

### Quiz - we may want to simply develop this depending on how sophisticated integration with LLM/Generative ML
quizId: GUID
userId: GUID - creator 
title: string
description: string
created: Date
enabledOn: Date
disabledOn: Date

### QuizControl
quizId: GUID
quizControlId: GUID
question: string
orderIndex: number
prompt: string
type: "SingleChoice" | "MultipleChoice" | "GenerativeSingleChoice" | "GenerativeMultipleChoice"

### QuizControlOption
quizControlOptionId: GUID
quizControlId: UID
optionIndex: number
value: string

### QuizEntry
userId: GUID
quizId: GUID
quizEntryId: GUID
created: Date

### QuizAnswer
quizEntryId: GUID
quizControlId: GUID
quizAnswerId: GUID
value: string


## Relationships
User---(quiz participant/user)---------------\
  |\                                          |
  | \--UserPermission                         |
  |                                           |
(creator/admin)                               |
  |                                           |
  |-Quiz---QuizControl--QuizControlOption     |
  |             |               |             |
QuizEntry---QuizAnswer---------/              |
     \---------------------------------------/