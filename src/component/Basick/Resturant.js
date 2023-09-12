import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Naver from '../Naver'


const uiqueList = [
    ...new Set(Menu.map((curElm)=>{
    return curElm.category;
})
   
),
"All",
]
//console.log(uiqueList);

const Resturant = () => {
  
    const [menuData, setMenuData]=useState(Menu)
    const [menuList, setMenuList]=useState(uiqueList)
   // console.log(menuData);
   const filterItem=(catagory)=>{

    if(catagory==="All"){
        setMenuData(Menu);
        return;
    }
        const updatedList = Menu.filter((curElem) =>{

            return curElem.category===catagory;
        })
        setMenuData(updatedList);
   }

  return (
    <>
     <Naver filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData ={menuData} />
    </>
  )
}

export default Resturant
