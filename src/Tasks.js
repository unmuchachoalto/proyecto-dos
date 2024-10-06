import React from "react";

const Tasks = ({ tasks, onDelete, showForm, setShowForm, handleUpdate, setChangeFlag, changeFlag, setOwner, setTaskTitle, taskTitle, setId }) => {

    // console.log(tasks)
    return <>
        {!showForm && < table >
            <tr>
                <th>Id</th>
                <th>Task title</th>
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
                <td><button onClick={() => {
                    onDelete(task.id)
                }}>Delete</button> </td>
                <td><button onClick={() => {
                    setShowForm(true)
                    setChangeFlag("update")
                    setOwner(task.owner)
                    setTaskTitle(task.title)
                    setId(task.id)
                }}>
                    Update
                </button></td>
            </tr>)}
        </table >
        }</>
}

export default Tasks;