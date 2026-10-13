import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HomePage } from "@/heroes/pages/home/Home";
import { SearchPage } from "@/heroes/pages/search/Search";
import { HeroPage } from "@/heroes/pages/hero/Hero";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { AdminPage } from "@/admin/AdminPage";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: HeroesLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "heroes/1",
        Component: HeroPage,
      },
      {
        path: "search",
        Component: SearchPage,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: AdminPage,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
