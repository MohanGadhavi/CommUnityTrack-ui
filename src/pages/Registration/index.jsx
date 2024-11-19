import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function Registration() {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-min mx-auto p-5 px-8 bg-gray-200 mt-10 border-2 border-gray-500 flex flex-col items-start drop-shadow-[6px_6px_5px_rgba(0,0,0,0.2)]"
    >
      <Typography variant="h4" color="blue-gray">
        SIGN UP
      </Typography>
      <Typography color="gray" className="mt-1 font-normal"></Typography>
      <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Full Name
          </Typography>
          <Input
            size="lg"
            placeholder="John Doe"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Phone Number
          </Typography>
          <Input
            size="lg"
            placeholder="123-456-7890"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Date of Birth
          </Typography>
          <Input
            type="date"
            size="lg"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Address
          </Typography>
          <Input
            size="lg"
            placeholder="123 Main St, City, Country"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Reference Name
          </Typography>
          <Input
            size="lg"
            placeholder="Jane Doe"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            User Type
          </Typography>
          <select
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 bg-white py-2 px-3 rounded-md shadow-sm text-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Select User Type
            </option>
            <option value="KK">KK</option>
            <option value="Yuvak">Yuvak</option>
          </select>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            User Designation
          </Typography>
          <select
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 bg-white py-2 px-3 rounded-md shadow-sm text-sm"
            defaultValue=""
          >
            <option value="" disabled>
              Select User Designation
            </option>
            <option value="Student">Student</option>
            <option value="Working Prof">Working Prof</option>
          </select>
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to the
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
        <Button className="mt-6" fullWidth>
          Sign Up
        </Button>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account? Sign In
        </Typography>
      </form>
    </Card>
  );
}

export default Registration;
