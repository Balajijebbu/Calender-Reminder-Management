<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "calender_remainder";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $date = $_POST["date"];
    $month = $_POST["month"];
    $year = $_POST["year"];
    $time = $_POST["time"];
    $location = $_POST["location"];
    $event = $_POST["event"];

    $sql = "INSERT INTO remainder (date, month, year, time, location, event) VALUES ('$date', '$month', '$year', '$time', '$location', '$event')";

    if ($conn->query($sql) === TRUE) {
        $_SESSION['reminder_data'] = [
            'date' => $date,
            'month' => $month,
            'year' => $year,
            'time' => $time,
            'location' => $location,
            'event' => $event,
        ];

        $conn->close(); // Close the connection after successful insertion
        header("Location: success.php");
        exit();
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $sql . "<br>" . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
