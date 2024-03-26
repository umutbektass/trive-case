'use client'
import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { getTodos } from './service'
import { User } from './types/User'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AccountList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async () => {
    setLoading(true);
    let users: User[]  = [];
    try {
      if (typeof window !== 'undefined') {
        const storedData = localStorage.getItem('account-list');
       storedData ?  users = JSON.parse(storedData) : users = await getTodos();
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
        typeof window !=='undefined' && localStorage.setItem('account-list', JSON.stringify(updatedUsers));
      return updatedUsers;
  });
  toast.success("Başarıyla eklendi" , {
    position:'bottom-right'
  })
}

function removeUserFromUserList(id: number) {
  setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== id);
      typeof window !=='undefined' && localStorage.setItem('account-list', JSON.stringify(updatedUsers));
      return updatedUsers;
  });
  toast.success("Başarıyla silindi" , {
    position:'bottom-right'
  })
}





  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Zorunlu Alan'),
    email: Yup.string().email('Lütfen geçerli email giriniz.').required('Zorunlu Alan'),
    phone: Yup.string()
    .required('Zorunlu Alan'),
  });

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.accontList_Container}>
              <ToastContainer />
      <div className={`main-container border rounded mt-5 px-3`} style={{ backgroundColor: 'white' }}>
        <div className="row">
          <div className="col-lg-4 p-4 border-end" >
            <h2 className={`${styles.form_Title} mb-3 text-center `}>Account List</h2>
            <div>
              <Formik
                initialValues={{
                  id:1,
                  name: '',
                  email: '',
                  phone:''
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                  values.id=users.length === 0 ? 1 : users[users.length - 1].id + 1;
                  addUserToUserList(values)
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-floating mb-3">
                      <Field name="name" type="text" className={`form-control ${errors.name && touched.name && 'is-invalid'} `} id="floatingInput" placeholder="(555) 555-5555"></Field>
                      {errors.name && touched.name ? (
                      <p className='text-danger ms-2'>{errors.name}</p>
                    ) : null}
                      <label htmlFor="floatingInput">Full name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <Field name='email' type="email" className={`form-control ${errors.email && touched.email && 'is-invalid'} `} id="floatingInput" placeholder="(555) 555-5555"></Field>
                      {errors.email && touched.email ? (
                      <p className='text-danger ms-2'>{errors.email}</p>
                    ) : null}
                      <label htmlFor="floatingInput">Email</label>
                    </div>

                        
                    <div className="form-floating mb-3">
                    <Field name='phone' type="tel" className={`form-control ${errors.phone && touched.phone && 'is-invalid'} `} id="floatingInput" placeholder="(555) 555-5555"></Field>
                      {errors.phone && touched.phone ? (
                      <p className='text-danger ms-2'>{errors.phone}</p>
                    ) : null}
                      <label htmlFor="floatingInput">Phone</label>
                    </div>




                    <button className='btn w-100 primary-btn' type="submit">Add list</button>
                  </Form>
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
                      users.map((item,key) => {
                        return (
                          <tr key={key} >
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><Link onClick={()=>removeUserFromUserList(item.id)} className='text-decoration-none' href={''} scroll={false}><p className='text-danger'>Sil</p></Link></td>
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