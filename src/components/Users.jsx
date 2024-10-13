import { useContext } from "react"
import { UserContext } from "../context/Context"

const Users = () => {

    const {user} = useContext(UserContext);
    console.log(user);
  return (
    <div 
    className="bg-blue-950 text-white min-h-[89.7%] mt-4 flex flex-col gap-3 pt-9 pb-9">
        {
            user.map( (obj) => <h1 
                                    className="px-4 py-3 text-center bg-sky-600 w-[20%] mx-auto"
                                    key={obj.id}
                                >
                                   {obj.username} 
                                </h1> 
                    )
        }
    </div>
  )
}

export default Users