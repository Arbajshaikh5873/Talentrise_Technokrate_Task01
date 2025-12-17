import React, { createContext, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import AddEdit from './components/AddEdit'
import ViewPage from './components/ViewPage';

export const profileContext = createContext();

function App() {
  const [profileData, setProfileData] = useState([]);

  const profileContextValue = useMemo(() => {
    return { profileData, setProfileData };
  }, [profileData])


  return (
    <profileContext.Provider value={profileContextValue}>
      <div className=' bg-slate-900 h-screen '>
        <Navbar />
        {profileData.length == 0 && <div className='text-center font-bold text-red-500'>
          <p>no data available....</p></div>}
        {profileData.length == 0 && <AddEdit />}

        {profileData.length > 0 && <ViewPage />}


      </div>
    </profileContext.Provider>
  )
}

export default App