<?php
session_start();

if (isset($_SESSION['reminder_data'])) {
    $reminderData = $_SESSION['reminder_data'];
    unset($_SESSION['reminder_data']);
} else {
    header("Location: fet2.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar Reminder Management - Success</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <style>
        body {
            background: url('Calender.jpg') no-repeat center center fixed;
            background-size: cover;
            height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }


        .alert-success {
            background-color: #d4edda;
            border-color: #c3e6cb;
            color: #155724;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto mt-5">
                <div class="alert alert-success">
                    <h4 class="alert-heading">Success!</h4>
                    <p>Your reminder has been added successfully.</p>
                    <hr>
                    <p class="mb-0">Details:</p>
                    <ul>
                        <li>Date: <?php echo $reminderData['date']; ?></li>
                        <li>Month: <?php echo $reminderData['month']; ?></li>
                        <li>Year: <?php echo $reminderData['year']; ?></li>
                        <li>Time: <?php echo $reminderData['time']; ?></li>
                        <li>Location: <?php echo $reminderData['location']; ?></li>
                        <li>Event: <?php echo $reminderData['event']; ?></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
