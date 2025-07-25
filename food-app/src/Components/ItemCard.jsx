import React from 'react'
import chowmein from '../assets/images/chowmein.jpg'

const ItemCard = (props) => {
    return (
        <div>
            <div className="card" style={{ width: "15rem", margin: "1rem" }}>
                <img src= {`http://localhost:3000/uploads/${props.image}`} className="card-img-top" alt="..."  style={{height:"230px",objectFit:'cover'}} />
                <div className="card-body" style={{ textAlign: 'center', backgroundColor: 'rgba(33,37,41,0.6)', fontFamily: "Karla , sans-serif", fontWeight: '900' }}>
                    <h5 className="card-title text-warning">{props.name}</h5>
                    <p className="card-text text-white ">{props.amount}</p>

                    <div className='d-flex flex-row justify-content-evenly '>
                        <a href="#" className="btn btn-warning text-white" style={{ height: '38px' }}>Add to Cart</a>
                        <div className="mb-3">

                            <select className="form-select" id="quantitySelect">
                                {
                                    [...Array(12)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))
                                }

                            </select>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ItemCard