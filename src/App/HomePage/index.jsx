import React, {useState} from 'react';
import AddTask from "../AddTask";
import TaskList from "../TaskList"
import {Typography} from 'antd';

const {Title} = Typography;

const Index = () => {
    const [tasks, setTask] = useState([]);

    const addTask = (task) => {
        setTask([...tasks, task])
    };

    const deleteTask = (index) => {
        console.log(tasks, "deleteeeeeeeeeeee")
        setTask(tasks.filter((task, i) => i !== index));
    }

    const EditTask = (index) => {
        console.log(tasks, "deleteeeeeeeeeeee")
        setTask(tasks.filter((task, i) => i !== index));
    }



    return <div>
        <div>

            <Title level={1}> To DO LIST</Title>
            <Title level={4}>{tasks.length} To Does</Title>
        </div>
        <AddTask addTask={addTask}/>
        <TaskList tasks={tasks}
                  deleteTask={deleteTask}
                  saveTask={EditTask}
        />
    </div>
};

export default Index;
