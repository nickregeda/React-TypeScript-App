import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {NavLink, useNavigate, useParams} from "react-router-dom";

type UserItemPageParams = {
    id: string
}


const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)

    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser(Number(params.id))
    }, [])

    let fetchUser = async (id: number) => {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(response.data)
        } catch (e) {
            console.log('Error' + e)
        }
    }
    return (
        <>
            <button onClick={() => navigate('/users')}>Back</button>
            {user !== null ?
                <div style={{padding: 15, border: 'solid 1px gray'}}>
                    <div>{user.id}. {user.name}</div>
                    <div> City: {user.address.city}</div>
                    <div> Street: {user.address.street}</div>
                </div>
                :
                <div>Loading</div>
            }
        </>
    );
};

export default UserItemPage;