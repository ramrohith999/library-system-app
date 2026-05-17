import { Link, useLocation } from "react-router-dom";

const NotFound=()=> {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">
        404 Page Not Found
      </h1>

      <p className="mt-3">
        Invalid Route:
        {location.pathname}
      </p>

      <Link
        to="/"
        className="mt-5 text-blue-500"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;