import { useContext } from "react"
import { UserContext } from "../context/Context"

const Products = () => {

    const {product} = useContext(UserContext);

    console.log(product);
  return (
    <div 
    className="bg-blue-950 text-white min-h-[89.7%] mt-4 flex flex-col gap-3 pt-9">
        {product.map( (obj) => {
            return (
                <h1 
                    className="px-4 py-3 text-center bg-sky-600 w-[20%] mx-auto"
                    key={obj.id}
                >
                    {obj.name}
                </h1>
            )
        } )}
    </div>
  )
}

export default Products