import React, { useEffect, useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { v4 as uuidv4 } from 'uuid';

function App() {




  const [tasks, setTasks] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [owner, setOwner] = useState("")
  const [taskTitle, setTaskTitle] = useState("")
  const [id, setId] = useState("")
  const [changeFlag, setChangeFlag] = useState("add") //, useState("update") // cambio de estado para los botones add & Update


  function addCreate() {
    setShowForm(false)

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      owner: owner,
      createdAt: Date(),
      updatedAt: Date(),
    }

    const tempTasks = [...tasks]
    tempTasks.push(newTask)
    setTasks(tempTasks)
    setOwner("")
    setTaskTitle("")

    console.log(setChangeFlag)
  }

  function handleDelete(taskId) {
    console.log(taskId)
    const result = tasks.filter((task) => taskId !== task.id)
    console.log(result)
    setTasks(result)
  }

  function handleSubmit() {
    if (changeFlag === "add") {
      addCreate()
    } else if (changeFlag === "update") {
      handleUpdate(id)
    }
    setShowForm(false)
    setChangeFlag("add")
    setOwner("")
    setTaskTitle("")
  }
  function handleUpdate(taskId) {

    const result = tasks.map((task) => {
      if (taskId === task.id) {
        const updatedTask = {
          id: task.id,
          title: taskTitle !== "" ? taskTitle : task.title,
          owner: owner !== "" ? owner : task.Owner,
          createdAt: task.createdAt,
          updatedAt: Date(),
        }
        return updatedTask
      } else {
        return task
      }
    })

    setTasks(result)

  }

  return (
    <div>
      <h1>Task lists</h1>
      {!showForm && <button onClick={() => {
        setChangeFlag("add")
        setShowForm(true)
      }}>add</button>}
      {showForm && <form>
        <label for="tasktitle">tasktitle</label>
        <input type="text" id="tasktitle" value={taskTitle} onChange={(event) => {
          setTaskTitle(event.target.value)
        }
        } /><br />
        <label for="owner"> owner</label>
        <input type="text" id="owner" value={owner} onChange={(event) => {
          setOwner(event.target.value)
        }} /><br />
        <button type="submit" onClick={(e) => {
          e.preventDefault();
          handleSubmit()
        }}>Save</button>
      </form>
      }

      <Tasks
        tasks={tasks}
        onDelete={handleDelete}
        showForm={showForm}
        setShowForm={setShowForm}
        handleUpdate={handleUpdate}
        changeFlag={changeFlag}
        setChangeFlag={setChangeFlag}
        setOwner={setOwner}
        setTaskTitle={setTaskTitle}
        setId={setId}
      />


    </div >
  )

}

export default App


