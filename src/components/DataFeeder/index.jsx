import React, { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Select from "react-select";
import DatePicker from "../core/DatePicker";

const KKOptions = [
  { value: "kk1", label: "KK 1" },
  { value: "kk2", label: "KK 2" },
  { value: "kk3", label: "KK 3" },
  // Add more KK options as needed
];

const YuvakOptions = [
  { value: "yuvak1", label: "Yuvak 1" },
  { value: "yuvak2", label: "Yuvak 2" },
  { value: "yuvak3", label: "Yuvak 3" },
  // Add more Yuvak options as needed
];

const placeOptions = [
  { value: "home", label: "Home" },
  { value: "outside", label: "Outside" },
];

const timeSpentOptions = [
  { value: "30m", label: "30 minutes" },
  { value: "1hr", label: "1 hour" },
  { value: "1.5hr", label: "1.5 hours" },
  { value: "2hr", label: "2 hours" },
];

export default function DataFeeder() {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <Card
      color="transparent"
      shadow={false}
      className=" md:w-[50%] bg-white mx-auto p-5 "
    >
      <Typography variant="h4" color="blue-gray" className="text-xl font-bold">
        Data Feeder Form
      </Typography>
      <form onSubmit={() => console.log("submitedddddd")}>
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-bold">
            Seva Date
          </label>
          <input
            type="date"
            size="lg"
            className=" w-full px-2 py-1 border border-black/25 hover:border-black/30  rounded-[4px]"
          />
          {/* <DatePicker /> */}
          <label className="block text-gray-700 text-sm font-bold">
            KK Name (Multi-select)
          </label>
          <Select isMulti options={KKOptions} className="select" />
          <label className="block text-gray-700 text-sm font-bold">
            Yuvak Name (Multi-select)
          </label>
          <Select isMulti options={YuvakOptions} className="select" />
          <div className="flex items-center">
            <Checkbox
              checked={isNewUser}
              onChange={(e) => setIsNewUser(e.target.checked)}
              label="New User ?"
              containerProps={{ className: "checkbox-container mr-2" }}
            />
          </div>
          {isNewUser && (
            <>
              <label className="block text-gray-700 text-sm font-bold">
                New User Details
              </label>
              <Input size="lg" label="New User Name" className="input" />
              <Input size="lg" label="Referral Name" className="input" />
              <Input size="lg" label="User Designation" className="input" />
            </>
          )}
          <label className="block text-gray-700 text-sm font-bold">Place</label>
          <Select options={placeOptions} className="select" />
          <label className="block text-gray-700 text-sm font-bold">
            Total Time Spent
          </label>
          <Select options={timeSpentOptions} className="select" />
          <label className="block text-gray-700 text-sm font-bold">
            Comments
          </label>
          <Textarea label="Comments" className="input" />
          <Button type="submit" className="btn-primary" fullWidth>
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
}
