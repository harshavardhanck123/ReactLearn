import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons";


// make the data available to the component
export async function loader() {
    const todos = await axios.get('https://66339eeef7d50bbd9b4a170f.mockapi.io/todos');
    return { todos: todos.data };
}

const Todos = () => {

    const { todos } = useLoaderData();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [todo, setTodo] = useState(null);

    const handleAddClick = (e) => {
        e.preventDefault();

        // create a new todo object
        const newTodo = {
            title,
            description,
            completed: completed === 'completed' ? true : false
        }

        // add the new todo to the list of todos
        axios.post(`https://66339eeef7d50bbd9b4a170f.mockapi.io/todos`, newTodo)
            .then((reponse) => {
                alert('Todo added successfully!')

                // reload the page to see the new todo
                window.location.reload();
            })
            .catch((error) => {
                alert('Failed to add todo!')
            });

        // clear the form 
        setTitle('');
        setDescription('');
    }

    const handleEdit = (todo) => {
        setIsEditing(true);
        setTitle(todo.title);
        setDescription(todo.description);
        setCompleted(todo.completed);
        setTodo(todo);
    }

    const handleDelete = (todo) => {
        axios.delete(`https://66339eeef7d50bbd9b4a170f.mockapi.io/todos/${todo.id}`)
            .then((response) => {
                alert('Todo deleted successfully!');
                window.location.reload();
                const updatedTodos = todos.filter((t) => t.id !== todo.id);
                setTodo(updatedTodos);
            })
            .catch((error) => {
                alert('Failed to delete todo!');
            });
    }   

    const handleUpdateClick = (e) => {
        e.preventDefault();

        const updatedTodo = {
            title,
            description,
            completed: completed === 'completed' ? true : false
        }

        axios.put(`https://66339eeef7d50bbd9b4a170f.mockapi.io/todos/${todo.id}`, updatedTodo)
            .then((response) => {
                alert('Todo updated successfully!');
                setIsEditing(false);
                window.location.reload();
            })
            .catch((error) => {
                alert('Failed to update todo!');
            });

   
    }

    return (
        <div>
            <h1>Todos</h1>
            <ul style={{ listStyleType: 'none', fontSize: '18px' }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginBottom: '20px' }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={(e) => {

                            }}
                        />
                        <Link
                            to={`/todos/${todo.id}`}
                            style={{
                                marginRight: '20px', textDecoration: 'none', color: todo.completed ? 'gray' : 'black'
                            }}
                        >{todo.title}</Link>
                        <FontAwesomeIcon
                            icon={faEdit}
                            onClick={() => handleEdit(todo)}
                            style={{ cursor: 'pointer', marginRight: '20px' }}
                        />
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            onClick={() => handleDelete(todo)}
                            style={{ cursor: 'pointer' }}
                        />
                    </li>
                ))}
            </ul>

            <form>
                <input
                    type="text"
                    placeholder="Enter todo title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter todo description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select
                    value={completed ? 'completed' : 'not completed'}
                    onChange={(e) => setCompleted(e.target.value)}
                >
                    <option>not completed</option>
                    <option>completed</option>
                </select>
                {
                    isEditing ? (
                        <button
                            onClick={handleUpdateClick}
                        >Update Todo</button>
                    ) : (
                        <button onClick={handleAddClick}>Add Todo</button>
                    )}
            </form>
        </div>
    )
}

export default Todos;