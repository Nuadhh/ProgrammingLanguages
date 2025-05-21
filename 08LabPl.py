# Function to add new stock to inventory list
def add_to_stock(stock_list):
    stock_list.append(75)  # Append fixed value 75 to the list
    print("Inside function (stock):", stock_list)  # Show updated list

# Main inventory list
inventory = [100, 200, 150]
add_to_stock(inventory)  # Call function to modify inventory
print("Outside function (stock):", inventory)  # Verify list changed

# Function to calculate price with 10% markup
def update_price(price):
    new_price = price + (price * 0.10)  # Calculate 10% increase
    print("Inside function (price):", new_price)  # Show new price

# Original product price
base_price = 250.0
update_price(base_price)  # Calculate markup price
print("Outside function (price):", base_price)  # Show original unchanged