from littletable import Table
import uuid
from datetime import datetime

user = Table('User')
user.create_index('userId', unique=True)
user_id1 = uuid.uuid4()
user_id2 = uuid.uuid4()
user_id3 = uuid.uuid4()
# Note on passwords, never EVER store them like this.  This is just for demonstration purposes of a just in time sql store
user.insert({'userId': user_id1, 'email': 'me@me.com', 'firstName': 'Parker', 'lastName': 'Jones', 'password': '1234', 'permissions': 'user'})
user.insert({'userId': user_id2, 'email': 'himom@email.com', 'firstName': 'Timothy', 'lastName': 'Michelle', 'password': '1111', 'permissions': 'user'})
user.insert({'userId': user_id3, 'email': 'admin@lore.com', 'firstName': 'PJ', 'lastName': 'Majestic', 'password': '', 'permissions': 'admin,user'})

user_permission = Table('UserPermission')
user_permission.create_index('userId')
user_permission.create_index('userPermissionId', unique=True)
user_permission.insert({'userId': user_id1, 'userPermissionId': uuid.uuid4(), 'created': datetime.now(), 'permission': 'user'})
user_permission.insert({'userId': user_id2, 'userPermissionId': uuid.uuid4(), 'created': datetime.now(), 'permission': 'user'})
user_permission.insert({'userId': user_id3, 'userPermissionId': uuid.uuid4(), 'created': datetime.now(), 'permission': 'user'})
user_permission.insert({'userId': user_id3, 'userPermissionId': uuid.uuid4(), 'created': datetime.now(), 'permission': 'admin'})

quiz = Table('Quiz')
quiz.create_index('quizId', unique=True)
quiz_id = uuid.uuid4()
quiz.insert({'quizId': quiz_id, 'userId': user_id3, 'title': 'The first quiz', 'description': 'A demonstration quiz, for POC', 'created': datetime.now(), 'enabledOn': datetime.now(), 'disabledOn': None })

quiz_control = Table('QuizControl')
quiz_control.create_index('quizId')
quiz_control.create_index('quizControlId', unique=True)
quiz_control_id1 = uuid.uuid4()
quiz_control_id2 = uuid.uuid4()
quiz_control_id3 = uuid.uuid4()
quiz_control_id4 = uuid.uuid4()
quiz_control_id5 = uuid.uuid4()
quiz_control.insert({'quizId': quiz_id, 'quizControlId': quiz_control_id1, 'question': 'Which following traits describe your personality type?', 'prompt': '', 'type': 'MultipleChoice', 'orderIndex': 0 })
quiz_control.insert({'quizId': quiz_id, 'quizControlId': quiz_control_id2, 'question': """Positive emotionality and dependability are notable qualities for overall health.
Where are you feeling the most body pain currently?
Understanding this will guide us in addressing your health needs effectively.""", 'prompt': """You are the worlds best, highly functioning, Health Assistant named LoreBot, who loves to get insight into a person to better their health.
You are continuing a conversation where someone has just answered a question asking for their personality type.
They answered with "Positive emotionality", and "Dependability"
Using very brief wording mention how those are noteworthy qualities.
Then ask the person where they feel the most body pain.""", 'type': 'GenerativeMultipleChoice', 'orderIndex': 1 })
quiz_control.insert({'quizId': quiz_id, 'quizControlId': quiz_control_id3, 'question': 'That\'s unfortunate to hear. We\'ll keep that in mind to improve your health. Is the pain a daily occurrence?', 'prompt': """You are the worlds best, highly functioning, Health Assistant named LoreBot, who loves to get insight into a person to better their health.
You are continuing a conversation where someone has just answered a question asking were they feel the majority of their body pain.
They answered with "Head", and "Neck"
Using very brief wording mention how that is unfortunate, and that we'll keep that in mind to improve their health.
Then ask the person if the pain is a daily thing.""", 'type': 'GenerativeSingleChoice', 'orderIndex': 2})
quiz_control.insert({'quizId': quiz_id, 'quizControlId': quiz_control_id4, 'question': 'How would you rate your experience with Lore?', 'type': 'SingleChoice', 'orderIndex': 3})
quiz_control.insert({'quizId': quiz_id, 'quizControlId': quiz_control_id5, 'question': 'Would you recommend Lore to a family member?', 'type': 'SingleChoice', 'orderIndex': 4})

quiz_control_option = Table('QuizControlOption')
quiz_control_option.create_index('quizControlId')
quiz_control_option.create_index('quizControlOptionId', unique=True)

quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id1, 'optionIndex': 0, 'value': 'Positive emotionality'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id1, 'optionIndex': 1, 'value': 'Negative emotionality'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id1, 'optionIndex': 2, 'value': 'Dependability'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id1, 'optionIndex': 3, 'value': 'Agreeability'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id1, 'optionIndex': 4, 'value': 'Conventionality'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id1, 'optionIndex': 5, 'value': 'Positive valence'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id1, 'optionIndex': 6, 'value': 'Negative valence'})

quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id2, 'optionIndex': 0, 'value': 'Head',})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id2, 'optionIndex': 1, 'value': 'Neck'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id2, 'optionIndex': 2, 'value': 'Shoulders'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id2, 'optionIndex': 3, 'value': 'Arms'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id2, 'optionIndex': 4, 'value': 'Back'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id2, 'optionIndex': 5, 'value': 'Hips'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id2, 'optionIndex': 6, 'value': 'Legs'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id2, 'optionIndex': 7, 'value': 'Feet'})

quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id3, 'optionIndex': 0, 'value': 'Yes'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id3, 'optionIndex': 1, 'value': 'No'})

quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id4, 'optionIndex': 0, 'value': 'Very satisfied'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id4, 'optionIndex': 1, 'value': 'Satisfied'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id4, 'optionIndex': 2, 'value': 'Neither satisfied or dissatisfied'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id4, 'optionIndex': 3, 'value': 'Dissatisfied'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id4, 'optionIndex': 4, 'value': 'Very dissatisfied'})

quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id5, 'optionIndex': 0, 'value': 'Yes'})
quiz_control_option.insert({'quizControlOptionId': uuid.uuid4(), 'quizControlId': quiz_control_id5, 'optionIndex': 1, 'value': 'No'})


quiz_entry = Table('QuizEntry')
quiz_entry.create_index('quizEntryId', unique=True)
quiz_entry_id = uuid.uuid4()
quiz_entry.insert({'userId': user_id1, 'quizId': quiz_id, 'quizEntryId': quiz_entry_id, 'created': datetime.now()})

quiz_answer = Table('QuizAnswer')
quiz_answer.create_index('quizEntryId')
quiz_answer.create_index('quizAnswerId', unique=True)
quiz_answer_id = uuid.uuid4()
quiz_answer.insert({'quizEntryId': quiz_entry_id, 'quizControlId': quiz_control_id1, 'quizAnswerId': quiz_answer_id, 'value': 0})

# Joining everything up
user_with_user_permission = user.join_on('userId') + user_permission.join_on('userId')

quiz_with_quiz_control = quiz.join_on('quizId') + quiz_control.join_on('quizId')
quiz_with_quiz_control_and_quiz_control_option = quiz_with_quiz_control.join_on('quizControlId') + quiz_control_option.join_on('quizControlId')

quiz_entry_with_quiz_answer = quiz_entry.join_on('quizEntryId') + quiz_answer.join_on('quizEntryId')
