import { useState } from "react"

type TaskArray = Task[]

type Task = {
  title: string,
  description: string,
  completed: boolean
}

const initialTasks: Task[] = [
  {
    title: "Dishwashing",
    description: "Wash and dry dishes, pots, pans, utensils",
    completed: true
  },
  {
    title: "Laundry",
    description: "Wash and dry dishes, pots, pans, utensils",
    completed: false
  },
  {
    title: "Vacuuming",
    description: "Wash and dry dishes, pots, pans, utensils",
    completed: false
  },
  {
    title: "Dusting",
    description: "Wash and dry dishes, pots, pans, utensils",
    completed: true
  }

]


const myStringLiteral = `hello world ${2 + 2} more string ${4 > 5 ? 'hello' : 'goodbye'}`


// component is a function that accepts one argument
// called props and returns a JSX element

type TaskProps = {
  task: Task
  onToggle: () => void;
}

const Task = ({ task }: TaskProps) => {
  return (
    { task }
  )


}

// oops



// NOTE: THIS COMPONENT MUST MUST MUST BE PASSED a TASK and a HELLO
const TaskComponent = ({ task, onToggle }: TaskProps, index: number) => {

  return (
    <div className={`${task.completed ? 'bg-green-500 border-green-500' : 'bg-white'} p-3 border border-solid flex flex-col`}>
      <div onClick={() => console.log(task.completed)}>

        {task.title}
      </div>
      <div onClick={onToggle}>
        {task.description}
      </div>

    </div >
  )
}





function TaskList() {

  const [tasks, setTasks] = useState(initialTasks);


  const mapTaskToTaskComponent = (task: Task, index: number) => {
    function updateTask(updateIdx: number) {
      const oldTask = tasks[updateIdx]
      debugger;
      const newTask = { ...oldTask, completed: !oldTask.completed }

      // create a new array to hold updated tasks
      const newTasks = tasks.map((task, taskIndex) => index === taskIndex ? newTask : task)

      // update state of the tasks arrray
      setTasks(newTasks)

    }
    return <TaskComponent task={task} onToggle={() => { updateTask(index) }} />
  }

  return (
    <div className="bg-red-500">
      {tasks.map(mapTaskToTaskComponent)}
    </div >
  )
}

export default TaskList;
