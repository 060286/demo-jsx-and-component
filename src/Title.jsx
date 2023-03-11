import React from 'react'

export default function Title() {
 const title = "Hello Các bạn";
    const isAccess = false;

if(isAccess) {
return (
    <h1 className='title' style={{color: "red"}}>
        {title}
    </h1>
  )
}

return (
    <h1 className='title' style={{color: "red"}}>
        Vui lòng đăng nhập
    </h1>
  ) 

  
}
