import React from 'react'

const MenuCard = ({menuData}) => {
    //console.log(menuData)
    return (
        <>
        <section className='main-card--cointainer'>
        {menuData.map((val)=>{
            return(
                <>
                <div className='card-container' key={val.id}>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number card-circle subtle'>{val.id}</span>
                    <span className='card-author subtle' style={{color:"red"}}>{val.name}</span>
                    <h2 className='card-title'>{val.name}</h2>
                    <span className='card-description subtle'>
                        {val.description} 
                    </span>
                    <div className='card-read'>Read</div>
                </div>
                <img src={val.image} alt='images' className='card-media' /> 
                <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>
                </>
            )
        })}
            </section>
        </>
    )
}

export default MenuCard
