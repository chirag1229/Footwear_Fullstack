import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Cart() {
  return (
      <>
        <Navbar/>

        <div class="container mt-5">
    <h2 class="mb-4 text-center">Shopping Cart</h2>
    <table class="table table-bordered">
        <thead>
            <tr className='text-center'>
                <th scope="col">Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Remove</th>
            </tr>
        </thead>
        <tbody>
            <tr className='text-center'>
                <td><img src="https://via.placeholder.com/100" alt="Product 1" class="img-fluid" /></td>
                <td>Product 1</td>
                <td>$10.00</td>
                <td>$10.00</td>
                <td className='text-center'>
                    <button class="btn btn-danger btn-sm ">
                        <i class="bi bi-trash"></i> 
                    </button>
                </td>
            </tr>
          
         
        </tbody>
    </table>
</div>
          
          <Footer/>
      </>


  )
}

export default Cart
