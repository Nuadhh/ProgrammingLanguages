# Task A
name = input("Enter your name: ")
age = input("Enter your age: ")
birth_year = input("Enter your birth year: ")
print("Hi", name + "! currently you are", age, "years old and you were born in", birth_year + ".")

# Task C
print("\nLog in using the password")
password = ""
while password != "default123":
    password = input("Enter the password: ")
print("Password is correct.")