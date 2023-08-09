//! CLERK AUTH RELATED
//? Created for blocking pages that require AUTH e.g. dashboard
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  //? All routes that require PUBLIC access go in the below array
  publicRoutes: [
    "/",
    "/products",
    "/collections/tea",
    "/collections/teaware",
    "/search",
    "/cart",
    "/shipping",
    "/checkout",
    "/confirmation",
    "/sign-in",
    "/sign-up",
  ],
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
