//? Clerk Sign Up Component with CUSTOM STYLES
import styles from "@/public/styles/components/signup/signup.module.scss";

// CLERK
import { SignIn } from "@clerk/nextjs";

const SignUpComp = () => {
  return (
    <div className={styles.signup_container}>
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        redirectUrl={`${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}`}
      />
    </div>
  );
};

export default SignUpComp;
