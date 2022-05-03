import { useState, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utilities/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.style.scss';
import Button from '../button/button.component';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  conformPassword: ''
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, conformPassword } = formFields;
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
    if (password !== conformPassword) {
      alert('password does not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName: displayName });
      resetForm();
    } catch (error) {
      console.log('user creation error', error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: 'text',
            required: true,
            onChange: handleChange,
            name: 'displayName',
            value: displayName
          }}
        />
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
        <FormInput
          label="Conform password"
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'conformPassword',
            value: conformPassword
          }}
        />
        <Button type="sumit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
