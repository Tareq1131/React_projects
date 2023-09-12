import React from 'react'

const Naver = ({filterItem, menuList}) => {
  return (
    <>
       <nav className='navbar'>
        <div className='btn-group'>

            {
                menuList.map((curElem)=>{
                    return(
                        <button className='btn-group__item' 
                        onClick={() => filterItem(curElem)}>
                            {curElem}
                        </button>
                    )
                })

            }
            {/* <button className='btn-group__item' 
            onClick={() => filterItem("breakfast")}>Breakfast</button>
            <button className='btn-group__item
            'onClick={() => filterItem("lunch")}>lunch</button>
            <button className='btn-group__item'
            onClick={() => filterItem("evening")}>Evining</button>
            <button className='btn-group__item'
            onClick={() => filterItem("dinner")}>Dinner</button> */}
            {/* <button className='btn-group__item'
            onClick={() => setMenuData(Menu)}>All</button> */}
        </div>
    </nav>
    </>
  )
}

export default Naver
