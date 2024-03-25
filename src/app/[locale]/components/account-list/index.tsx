'use client'
import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import {getTodos} from './service'
import {User} from './types/User'
import { Formik, Form, Field } from 'formik';

function AccountList() {
    const [loading, setLoading] = useState<boolean>(true); 
    const [users, setUsers] = useState<User[]>([]); 

    const fetchData = async () => {
        setLoading(true);
        try {
            const usersData: User[] = await getTodos(); 
            setUsers(usersData);
        } catch (error) {
            console.error('Veri alınırken bir hata oluştu:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 
    return (
        <div>
            <div className="main-container border rounded mt-5 px-3" style={{backgroundColor: 'white'}}>
                <div className="row">
                    <div className="col-md-4 p-4 border-end" >
                        <h2 className={`${styles.form_Title} mb-3 text-center p-3`}>Account List</h2>
                        <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
     //  validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
             <div className="form-floating mb-3">
                 <Field type="text" name="firstName" className="form-control" id="floatingInput" />
                 <label htmlFor="floatingInput">Name</label>
         
             </div>
          
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
                        {/* <form>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Name"></input>
                                    <label htmlFor="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingPassword" placeholder="Surname"></input>
                                    <label htmlFor="floatingPassword">Surname</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingPassword" placeholder="Email"></input>
                                    <label htmlFor="floatingPassword">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Phone"></input>
                                    <label htmlFor="floatingPassword">Phone</label>
                            </div>
                            <button type="button" className="btn btn-primary w-100">Add List</button>
                            </form> */}
                    </div>
                    <div className="col-md-8">
                    {
                        loading ?
                        <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
                            <div className="spinner-border text-primary " role="status">
                               
                        <span className="sr-only">Loading...</span>
                      
                      </div>
                      <p className='mt-1'>Yükleniyor,lütfen bekleyiniz...</p>
                            </div>
                        
                       : <table className="table p-4 mt-5">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(item=>{
                                    return (
                                        <tr key={item.id} >
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
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