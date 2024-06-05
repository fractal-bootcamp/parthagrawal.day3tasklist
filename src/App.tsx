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
  hello: string
}

const Task = ({ task }: TaskProps) => {
  return (
    { task }
  )


}

const mapTaskToTaskComponent = (task: Task) => <TaskComponent task={task} />;

// NOTE: THIS COMPONENT MUST MUST MUST BE PASSED a TASK and a HELLO
const TaskComponent = ({ task }: TaskProps) => {

  return (
    <div aria-label={myStringLiteral} className={`${task.completed ? 'bg-green-500 border-green-500' : 'bg-white'} p-3 border border-solid flex flex-col`}>
      <div>
        {task.title}
      </div>
      <div>
        {task.description}
      </div>

    </div >
  )
}





function TaskList() {


  return (
    <div className="bg-red-500">
      {initialTasks.map(mapTaskToTaskComponent)}
    </div >
  )
}

export default TaskList;
