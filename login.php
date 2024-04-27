<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "calender_remainder";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$username = $_POST['username'];
$password = $_POST['password'];

// SQL to validate login credentials
$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Login successful
    header("Location: fet2.html");
    exit(); 
} else {
    // Login failed
    echo "Invalid username or password";
}

// Close connection
$conn->close();
?>
