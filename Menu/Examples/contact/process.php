<?php include 'config.php'; ?>

<?php
	
	$alert        = '';
	$pass         = 0;
	
	function clean_var($variable) {
	$variable     = strip_tags(stripslashes(trim(rtrim($variable))));
	return $variable;
	}
	
	if ( empty($_REQUEST['name']) ) {
	$pass         = 1;
	$alert       .= "<p class='inav-cerror'>" . $emptyname . "</p>";
	} elseif ( preg_match( "/[][{}()*+?.\\^$|]/", $_REQUEST['name'] ) ) {
	$pass         = 1;
	$alert       .= "<p class='inav-cerror'>" . $alertname . "</p>";
	}
	if ( empty($_REQUEST['email']) ) {
	$pass         = 1;
	$alert       .= "<p class='inav-cerror'>" . $emptyemail . "</p>";
	} elseif ( !preg_match("/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/i", $_REQUEST['email']) ) {
	$pass         = 1;
	$alert       .= "<p class='inav-cerror'>" . $alertemail . "</p>";
	}
	if ( empty($_REQUEST['message']) ) {
	$pass         = 1;
	$alert       .= "<p class='inav-cerror'>" . $emptymessage . "</p>";
	}
	
	if ( $pass    ==1 ) {
	
	echo "<script>$(\".inav-cffb\").hide(\"slow\").show(\"slow\"); </script>";
	echo $alert;
	
	} elseif (isset($_REQUEST['message'])) {
	
	$message      = "From: " . clean_var($_REQUEST['name']) . "\n";
	$message     .= "Email: " . clean_var($_REQUEST['email']) . "\n";
	$message     .= "Message: \n" . clean_var($_REQUEST['message']);
	$header       = 'From:'. clean_var($_REQUEST['email']);
	
	mail($sendto, $subject, $message, $header);
	
	echo "<script>$(\".inav-cffb\").hide(\"slow\").show(\"slow\").animate({opacity: 1.0}, 4000).hide(\"slow\"); $(':input').clearForm() </script>";
	echo "<p class='inav-csucces'>" . $thanks . "</p>";
	
	die();
	
	}

?>