
import React, { Component } from 'react'
import { useState } from "react";
import { useEffect } from "react";
import './Index.css'
import { Link } from 'react-router-dom';
function Index({search}) {
    const [cat,setCat]=useState([])
    const [filter,setFilter]=useState("")
    const [products, setProducts] = useState([])
    useEffect(() => {
      fetchData()
    }, [])
    const fetchData = async() => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((Data) => {
          ;
          setProducts([...Data.products])
        }).catch((error)=>{
            console.log(error);
          })
          const rescat= await fetch('https://dummyjson.com/products/categories')
          const cats=await rescat.json()
          setCat([...cats])

    }
    console.log(products);
    if (products.length == 0) {
      return <h1>Loading...</h1>
    }
    return (
      <>
      <div className="main">

      <div style={{display:'flex'}} className='cat'>
      <button onClick={()=>setFilter("")} style={{padding:"10px",margin:"20px"}}>all</button>
      {
        cat.map((ct)=><button onClick={()=>setFilter(ct.name)} style={{padding:"10px",margin:"20px"}}>{ct.name}</button>)
      }
    </div>

  <div className="smain">
  {products .filter((i)=>i.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).filter((i)=>i.category.includes(filter.toLocaleLowerCase())).map((product) => (
<Link className='link' to={`/details/${product.id}`}>
       <div key={product.id} className="item">
       <div className="image">
        <img src={product.thumbnail} alt={product.title} />
       </div>
      <div className="conte">
      <h3>{product.title}</h3>
      <p className='p1'>Price: ${product.price}</p>
      <p className='p2'>{product.description}</p>
      </div>
    </div>
</Link>

  ))}
</div>
</div>
      </>
    )
  }

export default Index