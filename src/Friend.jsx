export default function Friend ({friend}) {

    console.log(friend);
    const {name, email, username, phone } = friend

    return (
        <div className="card">
            <h4>Name: {name}</h4>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    )
}