import { SignIn } from '@clerk/nextjs';

/**
 * reference: https://clerk.com/docs/references/nextjs/custom-signup-signin-pages#build-your-sign-in-page
 * @returns
 */
export default function Page() {
  return <SignIn />;
}
