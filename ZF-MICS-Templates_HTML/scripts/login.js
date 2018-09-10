// Example JavaScript and jQuery code to 
// handle the login form functionality 

$(document).ready(function() {

	// After a click on the dismiss (x) icon of the login failed message,
	// hide the error message with a slideUp
	$('#dismiss-login-failed-button').click(function(event) {
		$('#login-failed-div').slideUp();
	});

	// After click on login button
	// show a login failed message
	$('#login-form').submit(function(event) {
		event.stopPropagation();
		event.preventDefault();

		// Show loader, hide login button
		$('#login-failed-div').hide();
		$('#login-button').hide();
		$('#login-loader').show();

		// Do whatever is needed for authentication here

		// Show a login failed message if authentication failed
		// (now the message is shown after a delay as an example)
		setTimeout(function() {
			$('#login-failed-div').fadeIn();
			$('#login-button').fadeIn(500);
			$('#login-loader').hide();
			$('#input-password').val('');
			$('#input-email').focus();
		}, 1200);
	});
});