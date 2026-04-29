import { createBrowserRouter } from "react-router";
import Splash from "./screens/Splash";
import Onboarding from "./screens/Onboarding";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import MainLayout from "./layouts/MainLayout";
import Home from "./screens/Home";
import Music from "./screens/Music";
import Community from "./screens/Community";
import Live from "./screens/Live";
import Profile from "./screens/Profile";
import NowPlaying from "./screens/NowPlaying";
import ExclusiveContent from "./screens/ExclusiveContent";
import Subscription from "./screens/Subscription";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/app",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "music", Component: Music },
      { path: "community", Component: Community },
      { path: "live", Component: Live },
      { path: "profile", Component: Profile },
    ],
  },
  {
    path: "/now-playing",
    Component: NowPlaying,
  },
  {
    path: "/exclusive",
    Component: ExclusiveContent,
  },
  {
    path: "/subscription",
    Component: Subscription,
  },
]);
