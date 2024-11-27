import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

/* context */
import { useContext } from 'react';
import ApiContext from '../context/ApiContext';


export default function PizzaList() {

    /* context */
    const { url } = useContext(ApiContext);
    /* console.log({ url }); */


    /* creiamo una const con useSate vuoto */
    const [pizzeData, setPizzeData] = useState({});

    /* creiamo una funzione per la chiamata API fetch */
    function fetchData() {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setPizzeData(data)
            })
    }

    /* creiamo una funzione che richiama la chiamata API, da inserire nell'onClick del button */
    function handleClick(e) {
        fetchData()
    }
    /* con useEffect, la chiamata API avviene già all'apertura della pagina, senza cliccare sul button */
    useEffect(() => {
        fetchData(url);
    }, [url]);

    return (
        <>
            <div className="container">

                {/* <div className="text-center-p2">
                    <button type="button" onClick={handleClick} className="btnn" >Scopri le Pizze</button>
                </div> */}

                <div className="text-center-p2">
                    <h2>Le nostre Pizze</h2>
                </div>

                <section className="pizze">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                            {/* i dati sono in data (visto nel consolelog che l'array è in results), quindi mappiamo su data */}
                            {
                                pizzeData.data ?
                                    pizzeData.data.map(pizza => (
                                        <div className="col" key={pizza.id}>
                                            <div className="card text-center">

                                                <Link to={`/pizza-list/${pizza.id}`}>
                                                    <img className="img" src={pizza.image} alt="" />
                                                </Link>

                                                <p>
                                                    {pizza.name}
                                                </p>
                                            </div>
                                        </div>
                                    )) :
                                    <p>No results yet</p>
                            }
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}


