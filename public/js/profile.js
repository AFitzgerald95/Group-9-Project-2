const logout = async () => {
  const apiURL = `${window.origin}/api/userRoutes/login`
  console.log(apiURL)
  const response = await fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('testtest')
  if (response.ok) {
    document.location.replace('/');
  } else {
    // console.log(response.statusText);
    console.log("hello")
  }
};

document.querySelector('#logout').addEventListener('click', logout);
