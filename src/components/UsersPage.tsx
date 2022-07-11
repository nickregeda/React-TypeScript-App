import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import {useNavigate} from "react-router-dom";


const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchUsers()
    }, [])

    let fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            console.log('Error' + e)
        }
    }
    return (
        <List items={users}
              renderItem={(user: IUser) => <UserItem user={user} key={user.id}
                                                     onClick={(user) => navigate(`/users/${user.id}`)}/>}/>
    );
};

export default UsersPage;