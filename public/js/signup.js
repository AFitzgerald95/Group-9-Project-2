const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (name && email && password) {
    const response = await fetch('/api/signup/newuser', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(await response.json())
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  } else {
    console.log(err)
  }
};
document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);