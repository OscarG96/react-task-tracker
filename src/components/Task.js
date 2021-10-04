import React from 'react'

export default function Task({task, onDelete, onToggle}) {
    return (
        <div onDoubleClick={() => onToggle(task.id)} className={`task ${task.reminder ? "reminder" : ""}`}>
            <h3>{task.text}<span onClick={() => onDelete(task.id)} style={{color: "red", cursor: "pointer"}}>&times;</span></h3>
            <p>{task.day}</p>
        </div>
    )
}