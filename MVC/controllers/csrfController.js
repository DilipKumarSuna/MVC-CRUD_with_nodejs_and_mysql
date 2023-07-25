const express = require('express');

const app = express();

// Route to render the form
app.get('/form', function(req, res) {
  res.render('form', { csrfToken: req.csrfToken() });
});

// Route to handle form submissions
app.post('/submit-form', function(req, res) {
  // Verify the CSRF token
  if (!req.csrfToken()) {
    // Handle CSRF token verification failure
    res.status(403).send('CSRF token verification failed');
  } else {
    // Handle form submission
    // ...
  }
});

app.listen(3000);
