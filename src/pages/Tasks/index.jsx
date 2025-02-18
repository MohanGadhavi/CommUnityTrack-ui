import React, { Children, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import KanbanBoard from "../../components/KanbanBoard";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskList } from "../../../store/tasks";
import api from "../../utils/api";

const Tasks = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.taskList);

  useEffect(() => {
    try {
      api
        .get("/task/tasks")
        .then((res) => {
          console.log("ResTaskkkk ", res);
          dispatch(updateTaskList(res.data.tasks));
        })
        .catch(() => {
          console.log("error while fetching tasks");
        });
    } catch (error) {
      console.error("Invalid token:", error);
    } finally {
      console.log("TaskList::: ", taskList);
    }
  }, [dispatch]);

  return (
    <>
      {/* <div className="h-14 py-2 px-4 border-b flex items-center gap-2 bg-gray-50 sticky top-0">
        <FontAwesomeIcon icon={faCheckSquare} className="text-base" />
        <p className="pt-[2px]">Tasks</p>
      </div> */}
      <div className="p-3">
        <KanbanBoard taskList={taskList} />
      </div>
    </>
  );
};

export default Tasks;
