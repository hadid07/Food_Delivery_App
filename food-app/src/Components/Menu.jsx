import React, { useEffect, useState } from 'react'
import chowmein from "../assets/images/chowmein.jpg"
import ItemCard from './ItemCard'
import axios from 'axios';

const Menu = () => {
    
        const [items, setItems] = useState([]);
    
        useEffect(() => {
            const Get_Items = async()=>{
    
                
                const response = await axios.get('http://localhost:3000/get_items');
                const fetched_items = response.data.items;
                console.log(response.data.items)
                if (fetched_items.length === 0) {
                    alert(response.data.message);
                }
                else {
                    setItems(fetched_items);
                    
                }
            }
            Get_Items();
        },[])
    return (
        <>
            <div id='Menu' style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h3 className="text-warning fs-1" style={{ fontFamily: "Karla , sans-serif", fontWeight: '900' }}>What We Serve</h3>
            </div>

            <div style={{textAlign:'center'}}>

            <div className='d-flex flex-wrap justify-content-center align-items-center gap-3  ' style={{ marginTop: '4rem' }}>


                {
                    items.map((item)=>(
                        <ItemCard key = {item._id} id = {item._id} name = {item.item_name} amount = {item.item_amount} image = {item.item_image} />

                    ))
                }

                
                
            </div>
            </div>
        </>
    )
}

export default Menu