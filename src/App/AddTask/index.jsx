import React, {useState} from 'react';
import {Input, Button, Icon} from 'antd';
import 'antd/dist/antd.css';
import './index.scss'

const AddTask = (props) => {
    const [task, setTask] = useState("");
    return <div>
        <div className={"add-task-form"}>
            <Input size="large" placeholder="large size" onChange={(e) => setTask(e.target.value)}/>
            <Button type="primary" size="large" onClick={() => {
                props.addTask(task)
            }}>
                <Icon type="plus-circle"/> Add</Button>
        </div>
    </div>
};
export default AddTask;