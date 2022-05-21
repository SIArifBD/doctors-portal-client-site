import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;
    const handleConfirmDelete = () => {
        fetch(`https://doctors-portal-server-site.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted!!`)
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id='delete-confirm-modal' className='modal-toggle' />
            <div className='modal modal-bottom sm:modal-middle'>
                <div className='modal-box'>
                    <h3 className='font-bold text-lg text-red-500'>Are you sure you want to delete ${name}!</h3>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos ex odio enim rerum corrupti aspernatur deleniti perspiciatis et voluptas.</p>
                    <div className='modal-action'>
                        <label onClick={() => handleConfirmDelete()} htmlFor="delete-confirm-modal" className='btn btn-xs btn-error'>Delete</label>
                        <label htmlFor="delete-confirm-modal" className='btn btn-xs'>Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;