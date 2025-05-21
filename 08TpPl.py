# Adrian Montanez
# 08 Task Performance 1

def session_counter():
    counter = 0
    counter += 1
    print("Session visits:", counter)

def kiosk_usage():
    if not hasattr(kiosk_usage, 'total_users'):
        kiosk_usage.total_users = 0
    kiosk_usage.total_users += 1
    print("Total users today:", kiosk_usage.total_users)

print("First customer:")
session_counter()
kiosk_usage()

print("\nSecond customer:")
session_counter()
kiosk_usage()

print("\nThird customer:")
session_counter()
kiosk_usage()

print("\nExtra calls to session_counter to show it resets:")
session_counter()
session_counter()
session_counter()