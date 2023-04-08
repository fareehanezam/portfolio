const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

 
  const data = {
    name: name,
    email: email,
    message: message
  };

  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      alert('Thank you for contacting us!');
    } else {
      throw new Error('There was a problem submitting the form.');
    }
  })
  .catch(error => {
    alert(error.message);
  });
});
