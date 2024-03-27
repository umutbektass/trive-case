import { User } from "../types/User";
import styles from '../styles.module.css'
import Link from "next/link";

function UserList({users,loading , removeUserFromUserList} : {users:User[] , loading:boolean , removeUserFromUserList:Function}) {
    return (
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
    );
}

export default UserList;