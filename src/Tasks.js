import React from "react";
import { Button, ButtonGroup, Paper } from "@mui/material";

const Tasks = ({ tasks, onDelete, showForm, setShowForm, handleUpdate, setChangeFlag, changeFlag, setOwner, setTaskTitle, taskTitle, setId }) => {

    // console.log(tasks)
    return <>
        {!showForm && < table >
            <Paper sx={{ height: 50, width: '100%' }}>
                <tr>
                   <th>Id</th>
                    <th >Task title </th>
                    <th>Owner</th>
                    <th>Created at</th>
                    <th>Uptated at</th>
                    <th>action</th>
                </tr>
                


                {tasks.map((task) => <tr>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.owner}</td>
                    <td>{task.createdAt}</td>
                    <td>{task.updatedAt}</td>
                    <td><ButtonGroup variant="contained" size="small" color="secondary" aria-label="add">
                        <Button color = "secondary" onClick={() => {
                            onDelete(task.id)
                        }}>Delete</Button>
                        <Button color = "secondary" onClick={() => {
                            setShowForm(true)
                            setChangeFlag("update")
                            setOwner(task.owner)
                            setTaskTitle(task.title)
                            setId(task.id)
                        }}>
                            Update
                        </Button></ButtonGroup>

                    </td>

                </tr>)
                } </Paper>
        </table >
        }</>
}
export default Tasks;

