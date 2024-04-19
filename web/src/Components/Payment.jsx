import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-contnet-center">
          <h3>Category List</h3>    
      </div>    
      <Link to = "/dashboard/add_category" className='btn btn-success'>Add Category</Link>
    </div>
  )
}

export default Payment