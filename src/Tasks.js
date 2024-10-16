import React from "react";
import { Button, ButtonGroup,  } from "@mui/material";

const Tasks = ({ 
    tasks, 
    onDelete, 
    showForm, 
    setShowForm, 
    setChangeFlag, 
    setOwner, 
    setTaskTitle, 
    setId 
}) => {
    return (
        <>
            {!showForm && (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Task Title</th>
                            <th>Owner</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.owner}</td>
                                <td>{new Date(task.createdAt).toLocaleString()}</td> {/* Convierte a cadena */}
                                <td>{new Date(task.updatedAt).toLocaleString()}</td> {/* Convierte a cadena */}
                                <td>
                                    <ButtonGroup variant="contained" size="small" aria-label="add">
                                        <Button color="tertiary" onClick={() => onDelete(task.id)}>Delete</Button>
                                        <Button color="primary" onClick={() => {
                                            setShowForm(true);
                                            setChangeFlag("update");
                                            setOwner(task.owner);
                                            setTaskTitle(task.title);
                                            setId(task.id);
                                        }}>
                                            Update
                                        </Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Tasks;
