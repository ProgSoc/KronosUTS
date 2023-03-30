import { createBrowserRouter } from "react-router-dom";
import HelloWorld from "./pages/HelloWorld";
import Timetable from "./pages/Timetable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Timetable />,
  },
]);

export default router;
