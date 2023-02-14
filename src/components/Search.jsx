import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Find a user'/>
        </div>
        <div className="userChat">
            <img src='https://www.devop.pro/wp-content/uploads/2020/02/image-professionnelle-identite.jpg' alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search