import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setInfoUpdate, setIsDisable}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }
 
    const handleEdit = () => {
        setInfoUpdate(user)
        setIsDisable(false)

    }
    
  return (

    <article className='user__article'>
        <h3 className='user__h3'>{user.first_name} {user.last_name}</h3>
        <ul>
            <li><span>Email: <span></span>{user.email}</span></li>
            <li><span>Birthday: <span></span>{user.birthday}</span></li>
        </ul>
        <div className='user__container'>
        <button  className='user__btn1' onClick={handleDelete}><i className='bx bxs-trash'></i></button>
        <button className='user__btn2' onClick={handleEdit}><i className='bx bxs-edit-alt'></i></button>
        </div>
    </article>
  )
}

export default UserCard