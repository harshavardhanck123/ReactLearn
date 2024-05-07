import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";

export async function loader({ params: { id } }) {

  // fetch the todo with the given id
  const { data } = await axios.get(`https://66339eeef7d50bbd9b4a170f.mockapi.io/todos/${id}`);

  // return the todo object
  return data;
}

const Todo = () => {
  
  // get the todo object from the loader
  const todo = useLoaderData();

  return (
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p> 
        <p>{todo.createdAt}</p>
    </div>
  )
}

export default Todo;