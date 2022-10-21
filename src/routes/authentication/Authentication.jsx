import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/SignUpForm';
import SignInForm from '../../components/sign-in-form/SignInForm';

const Authentication = () => {
  return (
    <div>
      <h1>Sign in Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
