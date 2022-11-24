import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface GetUserData {
  users: User[];
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get<GetUserData>('users'); 
  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        dateStyle: 'medium'
      })
    }
  });
  return users;
}

export function useUsers() {
  return useQuery({
  queryKey: ['users'], 
  queryFn: getUsers,
  staleTime: 5000
})
}