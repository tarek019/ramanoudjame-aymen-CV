<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['subject']);
  $website = htmlspecialchars($_POST['website']);
  $message = htmlspecialchars($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "info@tbr.design"; //enter that email address where you want to receive all messages
      $subject = "From: $name <$email>";
      $body = "Name: $name\nEmail: $email\nSubject: $subject\nWebsite: $website\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Your message has been sent";
      }else{
         echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Please! Enter a valid email address!";
    }
  }else{
    echo "Email and Message field is required!";
  }
?>