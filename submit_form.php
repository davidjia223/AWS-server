<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect and sanitize POST data
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING) ?? "";
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL) ?? "";
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING) ?? "";

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit();
    }
    //Process data here, sending email/store etc
    // Redirect to a thank you page or display a success message
    header('Location: thank_you.html');
    exit();
} else {
    // Not a POST request, display a generic error or redirect
    echo "Error: Invalid request";
}
?>
