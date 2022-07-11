import React from 'react';
import {FC} from "react";
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser
    onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 15, border: 'solid 1px gray'}}>
            <div>{user.id}. {user.name}</div>
            <div> City: {user.address.city}</div>
            <div> Street: {user.address.street}</div>
        </div>
    );
};

export default UserItem;