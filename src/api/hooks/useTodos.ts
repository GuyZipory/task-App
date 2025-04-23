import {Task, Todo} from '@/types';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {useState, useEffect} from 'react';

const fetchTodos = async (): Promise<Todo[]> => {
  const {data} = await axios.get<Todo[]>(
    'https://jsonplaceholder.typicode.com/todos',
  );

  return data;
};

type UseTodosProps = {
  filter: string;
};
export const useTodos = ({filter}: UseTodosProps) => {
  const query = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  const [filteredTodos, setFilteredTodos] = useState<Task[]>([]);

  useEffect(() => {
    if (query.data) {
      const lower = filter.toLowerCase();
      setFilteredTodos(
        query.data
          .filter(todo => todo.title?.toLowerCase().includes(lower))
          .map(
            todo =>
              ({
                id: todo.id.toString(),
                name: todo.title,
                isComplete: todo.completed,
                uid: todo.userId.toString(),
              } as Task),
          ),
      );
    } else {
      setFilteredTodos([]);
    }
  }, [query.data, filter]);

  return {
    ...query,
    data: filteredTodos,
  };
};
