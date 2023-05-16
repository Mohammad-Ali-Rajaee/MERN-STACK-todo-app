import { useEffect, useState } from "react";
import { getAllTodos } from "../Api/apiHandler";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = getAllTodos();
        setTodos(result);
        setIsLoading(false);
      } catch (error) {
        setErr(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { isLoading, err, todos };
};

export default useFetch;
