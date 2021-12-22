import React from 'react'

const Navbar = ({filterItem, menuList}) => {
    return (
        <>
         <nav className='navbar'>
            <div className='btn-group'>
                {
                    menuList.map((val)=>{
                        return(
                            <button className='btn-group__item' onClick={()=>
                                filterItem(val)
                            }>{val}</button>
                        )
                    })
                }
            </div>
        </nav>
        </>
    )
}

export default Navbar
