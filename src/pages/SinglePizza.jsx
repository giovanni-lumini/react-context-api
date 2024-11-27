import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function SinglePizza() {

    const { id } = useParams();
    const url = `http://127.0.0.1:3000/pizze/${id}`
    console.log(url);
    const [pizza, setPizza] = useState(null)

    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setPizza(data.data)

                })
                .catch(err => {
                    console.log(err);
                })
        },
        [])

    return (
        <>
            <h1>Pizza id: {id}</h1>

            {
                pizza ? (
                    <div className="col" key={pizza.id}>
                        <div className="card-single-pizza text-center">
                            <img className="img" src={pizza.image} alt="" />
                            <p>
                                {pizza.name}
                            </p>

                            <p>
                                {pizza.price}
                            </p>

                            <p>
                                {pizza.ingredients}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>I don't found a pizza</div>
                )
            }
        </>
    )
}