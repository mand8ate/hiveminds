<?php
// email.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Sanitize and validate the input
	$name = htmlspecialchars(trim($_POST['name']), ENT_QUOTES, 'UTF-8');
	$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
	$subject = htmlspecialchars(trim($_POST['subject']), ENT_QUOTES, 'UTF-8');
	$message = htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8');

	// Validate inputs
	if (empty($name)) {
		die(json_encode(['success' => false, 'message' => 'Name is required.']));
	}
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		die(json_encode(['success' => false, 'message' => 'Invalid email address.']));
	}
	if (empty($subject)) {
		die(json_encode(['success' => false, 'message' => 'Subject is required.']));
	}
	if (empty($message)) {
		die(json_encode(['success' => false, 'message' => 'Message is required.']));
	}

	// Encode the subject to handle UTF-8 characters
	$encoded_subject = mb_encode_mimeheader($subject, 'UTF-8', 'B', "\r\n");

	// Assuming you're sending an email
	$to = 'info@hiveminds.co.jp'; // Specify your email address

	// Build the email content
	$emailContent = "Name: $name\n";
	$emailContent .= "Email: $email\n";
	$emailContent .= "Message:\n$message\n";

	// Build the email headers with UTF-8 support
	$headers = "From: $email\r\n";
	$headers .= "Reply-To: $email\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

	if (mail($to, $encoded_subject, $emailContent, $headers)) {
		echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
	} else {
		echo json_encode(['success' => false, 'message' => 'Email sending failed']);
	}
} else {
	// Not a POST request
	http_response_code(405);
	echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
