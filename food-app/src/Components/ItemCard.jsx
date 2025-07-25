import React from 'react'
import chowmein from '../assets/images/chowmein.jpg'
import axios from 'axios'

const ItemCard = (props) => {


    const AddToCart = async(id,name)=>{
        // alert(`${name} is added to cart`);
        try{
            const response = await axios.post('http://localhost:3000/addtocart',{itemid:id},{
                withCredentials:true
                
            }
            )
            alert(response.data.message);
        }catch(err){
            alert(`Failed to add ${name} to cart`)
        }
    }
    return (
        <div>
            <div className="card" style={{ width: "15rem", margin: "1rem" }}>
                <img src= {`http://localhost:3000/uploads/${props.image}`} className="card-img-top" alt="..."  style={{height:"230px",objectFit:'cover'}} />
                <div className="card-body" style={{ textAlign: 'center', backgroundColor: 'rgba(33,37,41,0.6)', fontFamily: "Karla , sans-serif", fontWeight: '900' }}>
                    <h5 className="card-title text-warning">{props.name}</h5>
                    <p className="card-text text-white ">{props.amount}</p>

                    <div className='d-flex flex-row justify-content-evenly '>
                        <button  className="btn btn-warning text-white" style={{ height: '38px' }} onClick={()=>AddToCart(props.id,props.name)} >Add to Cart</button>
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