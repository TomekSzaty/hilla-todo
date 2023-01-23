import {useEffect, useState} from "react";
import Todo from "Frontend/generated/com/example/application/Todo.js"
import {EndpointTodo} from "Frontend/generated/endpoints.js";
import {TextField} from "@hilla/react-components/TextField.js";
import {Button} from "@hilla/react-components/Button.js";
import {Checkbox} from "@hilla/react-components/Checkbox.js";


export function TodoView() {

const [todos, setTodos] = useState<Todo[]>([]);
const [task, setTask] = useState('');

useEffect(() => {
    EndpointTodo.findAll().then(setTodos);
}, []);

async function addTodo() {
    const saved = await EndpointTodo.add(task);
    if(saved) {
        setTodos([...todos, saved]);
        setTask('');
    }
}
async function updateTodo(todo: Todo, done: boolean) {
    const saved = await EndpointTodo.update({
        ...todo, done
    });
    if(saved) {
        setTodos(todos.map(existing => existing.id === saved.id ? saved : existing));
    }
}


    return (
        <div className="p-m">
            <h2>|| Vaadin and Hilla ToDoList ||</h2>
            <div className="flex gap-m">
                <TextField value={task} onChange={e => setTask(e.target.value)}/>
                <Button theme="primary" onClick={addTodo}>Add Task </Button>
            </div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <Checkbox checked={todo.done} onCheckedChanged={e => updateTodo(todo, e.detail.value)}/>
                    <span>{todo.task}</span>
                </div>
            ))}
        </div>
    );
}