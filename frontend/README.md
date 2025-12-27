Frontend --- Overview
===================

This folder contains the **frontend app** for the Assignment project.\
It is a small **React + Vite** app that fetches student assessment data by username and displays scores using progress bars.

* * * * *

Tech Used
---------

-   React (hooks, functional components)

-   Vite

-   TypeScript

-   Tailwind CSS

-   `@radix-ui/react-progress`

* * * * *

How It Works
------------

1.  The app uses a route `/:user`.

2.  Opening `http://localhost:5173/rahul` loads the `Home` component.

3.  `Home` reads the `user` from the URL.

4.  It calls `fetchData(user)` to get data from the backend.

5.  The response is rendered as:

    -   Student name & overall score

    -   Individual skill scores with progress bars

**Backend response format expected:**

`{
  "data": {
    "name": "rahul",
    "Overall_score": "8/9",
    "Score": [{ "Pronunciation": "9/9" }]
  }
}`

Each `"X/Y"` score is converted to a percentage for the progress bar.

* * * * *

Important Files
---------------

-   `src/home.tsx` -- Main page, fetches and displays data

-   `src/api/featchapi.js` -- API fetch helper

-   `src/components/Progress.tsx` -- Progress bar component

* * * * *

Run Frontend Locally
--------------------

`cd frontend
npm install
npm run dev`

Open:

`http://localhost:5173/rahul`

(Backend must be running.)

* * * * *

API Base URL
------------

Current API URL in `featchapi.js`:

`http://localhost:4000/api`

Make sure:

-   Backend runs on **port 4000**, or

-   Update the URL to match backend port (e.g. `3000`)

### Recommended (optional)

Use environment variable:

`VITE_API_BASE_URL=http://localhost:4000/api`

Then in code:

`const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;`