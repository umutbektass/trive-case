'use client'
import styles from '../styles.module.css'
import { User } from '../types/User'
import { Formik } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import validate from '../validation'
function AddList({addUserToUserList , users} : {addUserToUserList:Function , users :User[]}) {
    return (
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
                <button className='border-0 w-100 primary-btn' type="submit">Add list</button>


              </form>
            )}
          </Formik>
        </div>
      </div>
    );
}

export default AddList;