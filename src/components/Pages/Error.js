import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  /**
   * useRouterError() hook is provided by the react-router-dom:
   * By using this , we can get the detailed error object.
   */
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong !!</h2>
      <h2>{err?.error?.message}</h2>
    </div>
  );
};

export default Error;
