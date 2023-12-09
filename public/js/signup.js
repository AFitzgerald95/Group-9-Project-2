

document.getElementById("signup-form").addEventListener("submit", function(event) {
      event.preventDefault(); // prevent form submission

      // Get input values
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      // Store data in the database
      // Replace the following code with your database integration logic
      // fetch API to send the data to a server-side script that handles database operations

      console.log('Name: ' + name);
      console.log('Email: ' + email);
      console.log('Password: ' + password);

      // Reset form values
      document.getElementById("signup-form").reset();
    });

    //template code temporary()