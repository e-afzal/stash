//! CLERK AUTH RELATED
//? Created for blocking pages that require AUTH e.g. dashboard
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  //? All routes that require PUBLIC access go in the below array
  publicRoutes: [
    "/",
    "/products(.*)",
    "/collections/tea",
    "/collections/teaware",
    "/search",
    "/cart",
    "/shipping",
    "/checkout",
    "/confirmation",
    //! VERY IMPORTANT: You MUST add stripe related APIs added here. Or you wont be able to make requests to these endpoints on your frontend
    //! These 2 endpoints are in the NextJS API file
    "/api/stripe",
    "/api/session",
    // SIGN IN ROUTE includes /sign-in/factor-one
    // "/sign-in(.*)",
    // "/sign-up",
  ],
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
