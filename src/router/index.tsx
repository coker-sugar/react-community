import { createBrowserRouter, RouteObject } from "react-router-dom";
/**
 * TODO: 路由配置
 */
import Layout from "../layout";
// 首页
import HomePage from "../pages//HomePage";
// 文章详情页
import Article from "../pages/Article";
import Activity from "../pages/Activity";
import Question from "../pages/Question";
import Course from "../pages/Course";
import TextPage from '../pages/Text'
// 404页面
import NotFoundPage from "../components/404";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        // path: "",
        element: <HomePage />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },
      {
        path: "/textpage",
        element: <TextPage />,
      },
      {
        path: "/course",
        element: <Course />,
      },
      {
        path: "/question",
        element: <Question />,
      },
      {
        path: "/activity",
        element: <Activity />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
