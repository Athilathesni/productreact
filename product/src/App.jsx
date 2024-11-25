import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Index from './component/Index'
import Details from './component/Details'
import Cart from './component/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const updatedCart = [...cart, product]
    setCart(updatedCart)
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index)
    setCart(updatedCart)
  };

  return (
    <>
      <BrowserRouter>
        <Navbar setSearch={setSearch} cartCount={cart.length} />
        <Routes>
          <Route path='/' element={<Index search={search} />} />
          <Route path='/details/:id' element={<Details addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App





// import { useState } from 'react'
// import './App.css'
// import Navbar from './component/Navbar'
// import Index from './component/Index'

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Details from './component/Details'

// function App() {
// const[search,setSearch]=useState("")
// console.log(search);

//   return (
//     <>
//       <BrowserRouter>
//       <Navbar setSearch={setSearch}/>
//       <Routes>
//         <Route path='/' element={<Index search={search}/>}/>
//         <Route path='/Details/:id' element={<Details/>}/>
//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App