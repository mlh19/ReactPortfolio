import React, { useState } from 'react';
import '../componets/styles/formstyle.css';

// Here we import a helper function that will check if the email is valid
import { validateContactName, validateEmail, validateInput, validateName } from '../componets/utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [contactBox, setContactBox] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setName(inputValue);
    } else {
      setContactBox(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!email || !validateEmail(email)) {
      setErrorMessage('Please enter an email address');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!Name || !validateName(Name)) {
      setErrorMessage(
        `Please provide your name.`
      );
      return;
    }
    if (!contactBox) {
      setErrorMessage(
        `Please leave a message no longer than 250 characters.`
      );
      return;
    }
    alert(`Hello ${Name}, Thank you for contacting me!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setContactBox('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div>
      <p>Hello {Name}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <textarea
          value={contactBox}
          name="contactBox"
          onChange={handleInputChange}
          type="text"
          placeholder="Message Me"
          maxLength="250"
          
        ></textarea>
        <p>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
        </p>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;