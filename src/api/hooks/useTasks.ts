import {RootState} from '@/redux/store';
import {Task} from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const useTasks = () => {
  const userId = useSelector((state: RootState) => state.auth.user?.uid);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (userId) getTasks(userId);
  }, [userId]);

  const addTask = async (name: string) => {
    if (!userId) return;
    const key = `tasks:${userId}`;
    const stored = await AsyncStorage.getItem(key);
    const tasks = stored ? JSON.parse(stored) : [];

    const newTask: Task = {
      id: Date.now().toString(),
      name,
      isComplete: false,
      uid: userId,
    };

    const updated = [...tasks, newTask];
    await AsyncStorage.setItem(key, JSON.stringify(updated));
    setTasks(updated); // ✅ this is the key
  };
  const getTasks = async (uid: string): Promise<Task[]> => {
    const key = `tasks:${uid}`;
    const stored = await AsyncStorage.getItem(key);
    const parsed = stored ? JSON.parse(stored) : [];
    setTasks(parsed);
    return parsed;
  };
  const toggleTaskComplete = async (taskId: string) => {
    if (!userId) throw new Error('User ID is not available');

    const key = `tasks:${userId}`;
    const tasks = await getTasks(userId);

    const updated = tasks.map(task =>
      task.id === taskId ? {...task, isComplete: !task.isComplete} : task,
    );

    await AsyncStorage.setItem(key, JSON.stringify(updated));
    setTasks(updated);
  };

  const deleteTask = async (taskId: string) => {
    if (!userId) throw new Error('User ID is not available');
    const key = `tasks:${userId}`;
    const tasks = await getTasks(userId);
    const filtered = tasks.filter(t => t.id !== taskId);
    await AsyncStorage.setItem(key, JSON.stringify(filtered));
    setTasks(filtered);
  };

  return {addTask, deleteTask, toggleTaskComplete, tasks};
};
