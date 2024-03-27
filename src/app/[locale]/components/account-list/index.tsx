'use client'
import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { getTodos } from './service'
import { User } from './types/User'
import { Formik } from 'formik';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validate from './validation'
import AddList from './add-list';
import UserList from './user-list';
function AccountList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async () => {
    setLoading(true);
    let users: User[] = [];
    try {
      if (typeof window !== 'undefined') {
        const storedData = localStorage.getItem('account-list');
        storedData ? users = JSON.parse(storedData) : users = await getTodos();
      }
      setUsers(users);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };

  function addUserToUserList(value: User) {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers, value];
      typeof window !== 'undefined' && localStorage.setItem('account-list', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
    toast.success("Başarıyla eklendi", {
      position: 'bottom-right'
    })
  }

  function removeUserFromUserList(id: number) {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== id);
      typeof window !== 'undefined' && localStorage.setItem('account-list', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
    toast.success("Başarıyla silindi", {
      position: 'bottom-right'
    })
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={`${styles.accontList_Container} main-container`}>
      <ToastContainer />
      <div className={` border rounded mt-5 px-3`} style={{ backgroundColor: 'white' }}>
        <div className="row">
          <AddList addUserToUserList={addUserToUserList} users={users} />
          <UserList removeUserFromUserList={removeUserFromUserList} loading={loading} users={users} />
        </div>
      </div>
    </div>
  );
}

export default AccountList;