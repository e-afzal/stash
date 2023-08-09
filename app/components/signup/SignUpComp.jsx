//? Clerk Sign Up Component with CUSTOM STYLES
import styles from "@/public/styles/components/signup/signup.module.scss";

// CLERK
import { SignUp } from "@clerk/nextjs";

const SignUpComp = () => {
  return (
    <div className={styles.signup_container}>
      <SignUp
        path="/sign-up"
        signInUrl="/sign-in"
        routing="path"
        redirectUrl={`${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}`}
      />
    </div>
  );
};

export default SignUpComp;
