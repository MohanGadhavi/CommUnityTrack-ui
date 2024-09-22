import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLogin }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
    navigate("/home");
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-min mx-auto p-5 px-10 bg-gray-100 border-2 border-[#ED6D5A]/80 flex flex-col items-start drop-shadow-2xl "
    >
      <Typography variant="h4" color="blue-gray">
        Log in
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Welcome to CommUnity Track
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Username
          </Typography>
          <Input
            type="tel"
            size="lg"
            placeholder="+91 123456789"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          color="deep-orange"
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button
          type="submit"
          className="mt-6"
          color="deep-orange"
          variant="gradient"
          fullWidth
        >
          Log in
        </Button>
        {/* <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/registration" className="font-medium text-gray-900">
            Sign up
          </Link>
        </Typography> */}
      </form>
    </Card>
  );
}

export default Login;
