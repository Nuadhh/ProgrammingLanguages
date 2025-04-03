package main

import (
	"fmt"
	"math/rand"
	"time"
)

func makePassword(length int) string {
	letters := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
	rand.Seed(time.Now().UnixNano())
	password := ""

	for i := 0; i < length; i++ {
		randomIndex := rand.Intn(len(letters))
		password += string(letters[randomIndex])
	}

	return password
}

func main() {
	fmt.Println("Adrian Montanez, Password Generator using GO!")
	fmt.Print("Enter password length: ")

	var length int
	fmt.Scan(&length)

	if length <= 0 {
		fmt.Println("Length should be more than 0...")
		return
	}

	password := makePassword(length)
	fmt.Println("Your new password is:", password)
}
