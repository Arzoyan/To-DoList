import React from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import '../index.scss'
import AddTask from "../../AddTask";

const Task = (props) => {
    const {iseEdit, saveTask, edited,index} = props;
    return <div key={index} className={'task'}>
        {edited[index] ? <form>
                <AddTask iseEdit={iseEdit} saveTask={saveTask}/>
            </form> :
            <>
                <form> {props.task}</form>
                < Button type="primary" icon="edit" size="default" onClick={() => {
                    props.edit(props.index)
                }}/>
                <Button type="danger" icon="delete" size="default" onClick={() => {
                    props.deleteTask(props.index)
                }}/>
            </>
        }
    </div>
};
export default Task;