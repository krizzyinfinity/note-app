import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
export const Header = ({handleSearchNote}) => {
  return (
      <>
    <h1 className='myHeader'>Notes</h1>
    <div className='search'>
        
        <SearchIcon  className='searchIcon' size='1.3em'/>
        <input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
       
    </div>
    </>
  )
}
