import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";

const projects = [
  {
    id: 1,
    name: "StudioSpace",
    title: "StudioSpace - Creative Workspace & Studio Booking Marketplace",
    subtitle: "Hourly Studio Booking Marketplace",
    image: project1,
    category: "Full Stack Web Application",
    short:
      "A booking platform where creators reserve photo studios, sound stages, podcast lounges, and music suites by the hour, and hosts list and manage their own creative spaces.",
    points: [
      "Hourly booking system with real-time double-booking prevention",
      "Firebase user authentication with verified server-side JWT requests (JWKS/jose)",
      "Dedicated host portal with full space listing and booking management (CRUD)",
      "Interactive category filters, search indexing, and customer ratings & reviews"
    ],
    technologies: [
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Swiper",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Vercel"
    ],
    description:
      "StudioSpace is a full-stack marketplace designed for the creative community. Creators can discover and reserve professional photography studios, sound stages, podcast lounges, and recording suites by the hour. Hosts can list their spaces, set hourly rates, manage incoming reservation schedules, and review customer feedback. The frontend is built with React, Vite, and Tailwind CSS, authenticated with Firebase Authentication, and powered by an Express.js and MongoDB Atlas REST API deployed seamlessly on Vercel.",
    live: "https://studiospace-client-mu.vercel.app",
    github: "https://github.com/kazolroy/studiospace-client",
    challenges: [
      "Double Booking Prevention: When multiple users attempted to book the same studio simultaneously, race conditions occurred. Solved by implementing an overlap validation check on the Express server that returns an HTTP 409 conflict, coupled with real-time UI disabling of booked hourly slots on the client.",
      "Token Verification Without Service Account: Securing protected API routes required authenticating Firebase ID tokens on the backend without storing long-lived service account secrets. Implemented token validation using the jose library verified against Google's public JSON Web Key Sets (JWKS), enforcing strict ownership checks on update and delete operations.",
      "Session Hydration & Reload Glitches: Private routes initially caused unwanted redirects on page refresh before Firebase restored auth persistence. Fixed by adding an explicit loading state inside the PrivateRoute wrapper that waits for auth hydration to resolve.",
      "Vercel Serverless Deployment & CORS: Hosting an Express API as a Vercel serverless function required a tailored vercel.json rewrite rule and dynamic CORS origin validation to safely accept client requests from multiple environments."
    ],
    future: [
      "Integrate online payment gateways (Stripe and bKash) for instant automated checkout and invoice generation.",
      "Add a user wishlist and downloadable PDF receipt generator for completed studio bookings.",
      "Implement a sleek Dark / Light theme mode toggle with user preference persistence in localStorage.",
      "Build an interactive visual calendar timeline for hosts with real-time booking push notifications."
    ]
  },
  {
    id: 2,
    name: "BazarDor",
    title: "BazarDor (বাজার দর) - Daily Market Price Tracker",
    subtitle: "Daily Essential Commodity Price Tracker",
    image: project2,
    category: "Full Stack Web Application",
    short:
      "A real-time market tracker showing daily prices of rice, lentils, oil, vegetables, fish, meat, eggs, milk, and spices across Bangladesh, complete with price fluctuation trends.",
    points: [
      "Real-time price trend indicators with automated percentage calculation",
      "Top 6 daily price increases and decreases highlighted in dedicated sections",
      "Multi-category filtering combined with low-to-high and high-to-low price sorting",
      "Protected product detail views with user session management via BetterAuth"
    ],
    technologies: [
      "Next.js (App Router)",
      "Tailwind CSS",
      "DaisyUI",
      "BetterAuth",
      "MongoDB",
      "react-hot-toast"
    ],
    description:
      "BazarDor (বাজার দর) is a modern web application dedicated to transparency in everyday grocery shopping. It tracks and presents daily market rates for essential household commodities across Bangladesh. Each item indicates whether its price has risen or fallen along with calculated percentage shifts. The application highlights the top six price increases and decreases each day, offers multi-criteria category filtering, and protects detailed product insights for authenticated users. Built using the Next.js App Router, Tailwind CSS, DaisyUI, BetterAuth, and MongoDB.",
    live: "https://b14-a7-bazar-dor-792d.vercel.app/",
    github: "https://github.com/kazolroy/B14-A7-Bazar-Dor",
    challenges: [
      "Authentication & Route Protection: Restricting comprehensive product pricing history to logged-in users required implementing protected routes with BetterAuth on the Next.js App Router, handling session redirects cleanly without hydration mismatches.",
      "Price Trend Algorithm: Dynamically calculating whether a product price has risen or dropped with accurate percentage delta, and dynamically ranking the top 6 daily price hikes and reductions via server queries.",
      "Continuous Smooth Price Ticker: Developing a zero-lag, continuous horizontal ticker running directly below the navigation bar displaying live price alerts without causing layout shifts.",
      "Synchronized Filtering & Sorting: Ensuring category selection and ascending/descending price sorting functioned smoothly together without unnecessary re-fetching."
    ],
    future: [
      "Add interactive historical price chart visualizations using Chart.js to observe monthly trends.",
      "Introduce a user favorites watchlist with automated price drop email and browser notifications.",
      "Incorporate district-wise regional market price breakdowns across all 64 districts in Bangladesh.",
      "Add a native bilingual toggle supporting both Bangla (বাংলা) and English interfaces."
    ]
  }
];

export default projects;
