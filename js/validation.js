$().ready(function() {
    $('#formSuccess').fadeOut()
    $("#signupForm").validate({
        // in 'rules' user have to specify all the constraints for respective fields
        rules: {
            username: {
                required: true
            },
            password: {
                required: true,
                minlength: 10
            },
            confirm_password: {
                required: true,
                minlength: 10,
                equalTo: "#password" //for checking both passwords are same or not
            },
            country: {
                required: true
            },
            agree: "required"
        },
        // in 'messages' user have to specify message as per rules
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 1 characters"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must be consist of at least 10 characters"
            },
            confirm_password: {
                required: "Please enter a password",
                minlength: "Your password must be consist of at least 10 characters",
                equalTo: "Please enter the same password as above"
            },
            country: {
              required: "Please select a country"
            },
            agree: "Please accept our terms of service"
        },
        submitHandler: function(form) {
          form.reset()
          var values = $(form).serializeArray();
          let country = values.find((item) => item.name == 'country')
          let message = 'Welcome amillerman! The country code you selected is ' + country.value
          $('#formSuccess').html(message)
          $('#formSuccess').fadeIn(300)
          // form.submit();
        }
    });
});