import React from 'react';
import './Products.css';
import Product from './Product.jsx';
export default function Products() {

const products=[
{ id:1,title:'product one',desc:'this is product one' ,price:1000},
{ id:2,title:'product tow',desc:'this is product tow',price:2000},
{ id:3,title:'product three',desc:'this is product three',price:3000},
{ id:4,title:'product four',desc:'this is product four',price:4000},


];

  return (
<>
    <div className='products row'>

{ products.map((ele)=>{
return <Product {...ele} key={ele.id} />
})
}

  
    </div>
    </>
  )
}
