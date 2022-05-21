import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ u, index, refetch }) => {
    const { _id, email, role } = u;
    const makeAdmin = () => {
        fetch(`https://doctors-portal-server-site.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{_id}</th>
            <th>{email}</th>
            <th>{role !== 'admin' && <button className="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</th>
            <th><button className="btn btn-xs">Remove User</button></th>
        </tr>
    );
};

export default UserRow;