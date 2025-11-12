import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Profile from "./routes/Profile";

/*const router = createBrowserRouter([
  {
    path: "/github-finder",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);*/

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/github-finder">
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
