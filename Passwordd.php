<?php



$letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
$numbers = "0123456789";
$symbols = "!@#$%^&*()";


echo "Enter the desired password length: ";
$length = trim(fgets(STDIN)); 


if (!is_numeric($length) || $length < 4 || $length > 100) {
    echo "Invalid input! Please enter a number between 4 and 100.\n";
    exit;
}


$all_characters = $letters . $numbers . $symbols;
$password = "";


for ($i = 0; $i < $length; $i++) {
    $random_index = rand(0, strlen($all_characters) - 1);
    $password .= $all_characters[$random_index];
}


echo "Generated Password: " . $password . "\n";
?>
