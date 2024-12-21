import { Dialog, DialogBody } from "@material-tailwind/react";
import TaskCard from "../TaskCard";

import React from "react";

export default function TaskDialog({
  title,
  openDialog,
  handleOpenDialog,
  createMode = true,
}) {
  return (
    <Dialog open={openDialog} handler={handleOpenDialog} size="xl">
      <DialogBody className="p-0">
        <TaskCard
          title={title}
          createMode={createMode}
          handleOpenDialog={handleOpenDialog}
        />
      </DialogBody>
    </Dialog>
  );
}
