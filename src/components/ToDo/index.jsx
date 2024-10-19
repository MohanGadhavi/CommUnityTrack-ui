import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";

const toDoList = [
  "weakup",
  "freshup",
  "workout",
  "bath",
  "breakfast",
  "reading",
  "work",
  "lunch",
  "work",
  "break",
  "dinner",
  "walk",
];

const ToDo = () => {
  const [pendingList, setPendingList] = useState(toDoList);
  const [completedList, setCompletedList] = useState([]);

  const onCheck = (checkedItem) => {
    const updatedList = pendingList.filter((toDo) => toDo !== checkedItem);
    setPendingList(updatedList);
    setCompletedList((prev) => [...prev, checkedItem]);
  };

  const onUnCheck = (unCheckedItem) => {
    const updatedList = completedList.filter((toDo) => toDo !== unCheckedItem);
    setCompletedList(updatedList);
    setPendingList((prev) => [...prev, unCheckedItem]);
  };

  return (
    <div>
      <h1 className="text-2xl font-serif font-extrabold text-[hsl(20,50,10)] ">
        Hello from ToDo
      </h1>
      <div className="flex flex-col gap-5">
        {pendingList && pendingList.length > 0 && (
          <List className="">
            <h1>Pending Task</h1>
            {pendingList.map((toDo, i) => (
              <ListItem className="p-0 hover:bg-[hsl(20,50,10)]/10 " key={i}>
                <label
                  htmlFor={`pending-list-react-${i}`}
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id={`pending-list-react-${i}`}
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      color="brown"
                      onChange={() => onCheck(toDo)}
                      checked={false}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    {toDo}
                  </Typography>
                </label>
              </ListItem>
            ))}
          </List>
        )}

        {completedList.length > 0 && (
          <List className="">
            <h1>Completed Task</h1>

            {completedList.map((toDo, i) => (
              <ListItem className="p-0 hover:bg-[hsl(20,50,10)]/10 " key={i}>
                <label
                  htmlFor={`completed-list-react-${i}`}
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id={`completed-list-react-${i}`}
                      ripple={false}
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                      color="brown"
                      checked
                      onClick={() => onUnCheck(toDo)}
                    />
                  </ListItemPrefix>
                  <Typography
                    color="blue-gray"
                    className="font-medium line-through"
                  >
                    {toDo}
                  </Typography>
                </label>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
};

export default ToDo;
