import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utilities/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.style.scss';
import Button from '../button/button.component';
const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  console.log(formFields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Sign In </h2>
      <span>Please enter the email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password
          }}
        />
        <div className="buttons-container">
          <Button type="sumit">Sign In</Button>
          <Button
            type="button"
            buttonType={'google'}
            onClick={signInWithGooglePopup}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
