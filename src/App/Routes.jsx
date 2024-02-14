import { Routes as ReactRoutes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Home from "./../pages/Home";
import Products from "./../pages/Products";

export default function Routes() {
  return (
    <ReactRoutes>
      {routes.map(({ id, path, Element }) => (
        <Route key={id} path={path} element={<Element />} />
      ))}
    </ReactRoutes>
  );
}

const routes = [
  { id: uuid(), path: "/", Element: Home },
  { id: uuid(), path: "/products", Element: Products },
];
