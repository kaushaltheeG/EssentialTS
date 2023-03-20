var container = document.getElementById('container');

interface Task {
    id: TaskId,
    name: TaskName, 
    completed: boolean
}

const todo: Task = {
    id: 123,
    name: "Pick up drycleaning",
    completed: true
}


type TaskId = number
type TaskName = string 