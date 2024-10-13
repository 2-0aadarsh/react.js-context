import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {

    const [user, setUser] = useState([
        {id:1, name : "Rahul"},
        {id:2, name : "Aman"},
        {id:3, name : "Shivam"},
    ])

    const [product, setProduct] = useState([
        {id:1, name : "TV"},
        {id:2, name : "Phone"},
        {id:3, name : "Tablet"},
    ])

    return (
        <UserContext.Provider value={{user, product}} > 
            {props.children}    
        </UserContext.Provider>
    );
}

export default Context