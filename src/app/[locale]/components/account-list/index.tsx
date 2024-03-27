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
          <div className="col-lg-4 p-4 border-end" >
            <h2 className={`${styles.form_Title} mb-3 text-center `}>Account List</h2>

            <div className=''>
              <Formik
                initialValues={{
                  id: 1,
                  name: '',
                  email: '',
                  phone: ''
                }}
                validate={validate}
                onSubmit={(values) => {
                  values.id = users.length === 0 ? 1 : users[users.length - 1].id + 1;
                  addUserToUserList(values)
                  console.log(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input type="text"
                        name='name'
                        id="floatingInput"
                        placeholder=''
                        className={`form-control ${errors.name && touched.name && 'is-invalid'} `}
                        value={values.name}
                        onChange={handleChange}></input>
                      {errors.name && touched.name ? (
                        <span className='text-danger ms-2'>{errors.name}</span>
                      ) : null}
                      <label htmlFor="floatingInput" >Full name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="text"
                        name='email'
                        id="floatingInput"
                        placeholder=''
                        className={`form-control ${errors.email && touched.email && 'is-invalid'} `}
                        value={values.email}
                        onChange={handleChange}></input>
                      {errors.email && touched.email ? (
                        <span className='text-danger ms-2'>{errors.email}</span>
                      ) : null}
                      <label htmlFor="floatingInput" >Email</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input type="tel"
                        name='phone'
                        id="floatingInput"
                        className={`form-control ${errors.phone && touched.phone && 'is-invalid'} `}
                        placeholder="(555)-555-5555"
                        value={values.phone}
                        onChange={(e) => {
                          const formattedPhone = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                          if (formattedPhone !== null) {
                            const formattedValue = !formattedPhone[2] ? formattedPhone[1] : `(${formattedPhone[1]}) ${formattedPhone[2]}${formattedPhone[3] ? '-' + formattedPhone[3] : ''}`;
                            setFieldValue('phone', formattedValue);
                          }
                        }}></input>
                      {errors.phone && touched.phone ? (
                        <span className='text-danger ms-2'>{errors.phone}</span>
                      ) : null}
                      <label htmlFor="floatingInput">Phone</label>
                    </div>
                    <button className='btn w-100 primary-btn' type="submit">Add list</button>


                  </form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-lg-8" id={styles.userList_Container}>
            {
              loading ?
                <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
                  <div className="spinner-border text-primary " role="status">

                    <span className="sr-only">Loading...</span>

                  </div>
                  <p className='mt-1'>Yükleniyor,lütfen bekleyiniz...</p>
                </div>

                : <table className="table p-4 mt-3">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Full name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.map((item, key) => {
                        return (
                          <tr key={key} >
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><Link onClick={() => removeUserFromUserList(item.id)} className='text-decoration-none' href={''} scroll={false}><p className='text-danger'>Sil</p></Link></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
            }
          </div>

        </div>
      </div>
    </div>
  );
}

export default AccountList;