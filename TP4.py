
QUIZ_PASSING_SCORE = 7

firstName = input("Enter your first name: ") or "Unknown"
age = int(input("Enter your age: ") or 0) 
quizInput = input("Enter your quiz score (leave blank if not taken): ")


if quizInput.strip() == "":
    quiz04Score = None  
    status = None  
else:
    quiz04Score = float(quizInput)  
    status = True if quiz04Score >= QUIZ_PASSING_SCORE else False


dynamicScore = quiz04Score if quiz04Score is not None else "N/A"
if isinstance(dynamicScore, float):
    print(f"Initial Score: {dynamicScore} | Type: {type(dynamicScore)}")
    dynamicScore = int(dynamicScore)  
    print(f"Updated Score (converted to int): {dynamicScore} | Type: {type(dynamicScore)}")


output = f"""
Student Information
----------------------------
First Name: {firstName}
Age: {age}
Quiz Score: {quiz04Score if quiz04Score is not None else 'Not Taken'}
Status: {'Passed' if status is True else 'Failed' if status is False else 'Not Taken'}
"""
print(output)
