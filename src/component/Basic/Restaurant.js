import React ,{useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './menuCard'
import Navbar from './Navbar'
const uniqueList = [...new Set(Menu.map((val)=>{
    return val.category
})),'All']
console.log(uniqueList)

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)
    const filterItem = (category)=>{
        if(category==='All'){
            setMenuData(Menu)
        return
        }
        const updateData = Menu.filter((val)=>{
            return val.category === category
        })
        setMenuData(updateData)
    }
    
    return (
        <>
        <Navbar filterItem = {filterItem} menuList = {menuList}/>
        <MenuCard menuData = {menuData} />
        </>
    )
}

export default Restaurant
