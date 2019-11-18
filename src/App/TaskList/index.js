import React, {useState} from 'react';
import Task from './Task'

const TaskList = (props) => {

    const [iseEdit, setIseEdit] = useState({"-1": 0});

    const editTask = (index) => {

        console.log(index, "editTask")
        console.log(tasks[index], "editTask")
        setIseEdit({[index]: true});

    }

    const {deleteTask, tasks, saveTask} = props;


    return <div className={"task-list"}>
        {
            tasks && tasks.map((task, index) => {
                return <Task key={index}
                             index={index} task={task}
                             edit={editTask}
                             deleteTask={deleteTask}
                             edited={iseEdit}
                             saveTask={saveTask}
                />
            })
        }
    </div>
};
export default TaskList;