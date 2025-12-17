import React, { useContext } from 'react'
import { profileContext } from '../App'

function ViewPage() {
 const { profileData } = useContext(profileContext);
 console.log("profileData inside ViewPage : ", profileData);

 return (
  <div>

   {profileData.map((data) => {
    return (
     <div className='bg-white'>
      <div>
       <p>Name : </p>
       <h1>{(data.name)}</h1>
      </div>
     </div>
    )
   })}

  </div>
 )
}

export default ViewPage