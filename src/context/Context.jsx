import instance from "../utils/axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {

    const [user, setUser] = useState([])

    const [product, setProduct] = useState([])

    const getProducts = () => {
        const api = "products";

        instance.get(api)
        .then( (response) => setProduct(response.data) )
        .catch( (err) => console.log(err) )
    }

    const getUsers = ()=> {
        const api = "users";

        instance.get(api)
        .then( (response) => setUser(response.data) )
        .catch( (err) => console.log(err) )
    }

    useEffect( ()=> {
        getProducts();
        getUsers();
    }, [] )

    return (
        <UserContext.Provider value={{user, product}} > 
            {props.children}    
        </UserContext.Provider>
    );
}

export default Context