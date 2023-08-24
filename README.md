## Stash Tea

Stash is a tea manufacturing company that was brought to life
in Portland, Oregon in 1972 with an initiative of seeking a "tea
euphoria" and reinterpreting how people experience tea by
combining flavors in the most unique ways.

- The client-side for the eCommerce platform was developed
using <a href="https://nextjs.org">Next.js 13</a>, the React-based front-end web development framework. SASS and <a href="https://www.radix-ui.com">Radix UI</a> were used to create the UI elements. And, the global state management was achieved with the help of <a href="https://zustand-demo.pmnd.rs">Zustand</a>; a small, fast and scalable bearbones global state-management solution.

- The server was created using Node.js and the Express framework. All orders are created and stored in <a href="https://www.mongodb.com">MongoDB</a>, a No-SQL database. Payments are performed through interaction with the <a href="https://stripe.com">Stripe API</a>. User authentication and authorization are achieved with the help of <a href="https://clerk.com">Clerk</a>, an easy to implement user-authentication solution.

- Finally, the frontend was deployed onto the <a href="https://vercel.com">Vercel cloud platform</a> whereas the backend was deployed to <a href="https://cyclic.sh">Cyclic</a>.

To view the demo, <a href="https://stash-ead.vercel.app">click here</a>.
