document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  if (Validate(e.target.elements)) {
    ShowSuccess();
  }
});

function Validate(data) {
  // check for empty fields
  if (!data.email.value.trim()) {
    ShowError('Please enter an email address.')
    return false;
  }

  if (!data.password.value.trim()) {
    ShowError('Please enter a password.')
    return false;
  }

  if (!data.confirm.value.trim()) {
    ShowError('Please confirm your password.')
    return false;
  }

  // check email address
  if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email.value)) {
    ShowError('Please enter a valid email address.');
    return false;
  }

  // check passwords match
  if (data.password.value !== data.confirm.value) {
    ShowError('Passwords don\'t match.');
    return false;
  }

  return true;
};

function ShowError(msg) {
  document.querySelector('.success-msg').innerHTML = 'INVALID';
  document.querySelector('.err-msg').innerHTML = msg;
  document.querySelector('.msg-wrap').classList.remove('hidden');
};

function ShowSuccess() {
  document.querySelector('.success-msg').innerHTML = 'VALID';
  document.querySelector('.err-msg').innerHTML = 'Tayieb, yalla.';
  document.querySelector('.msg-wrap').classList.remove('hidden');
};
