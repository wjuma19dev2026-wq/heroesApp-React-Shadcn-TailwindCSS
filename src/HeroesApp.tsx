import { RouterProvider } from "react-router-dom";
import { router } from "./router/app.route";

export const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
