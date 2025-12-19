import React from "react";
import { createContext, useMemo, useState } from "react";
// Context
export const profileContext = createContext();
export const editIdContext = createContext();

// Container Component
function Container({ children }) {
  const [profileData, setProfileData] = useState([]);
  const [editId, setEditId] = useState(null);

  const profileContextValue = useMemo(() => {
    return { profileData, setProfileData };
  }, [profileData]);

  const editIdContextValue = useMemo(() => {
    return { editId, setEditId };
  }, [editId]);

  return (
    <profileContext.Provider value={profileContextValue}>
      <editIdContext.Provider value={editIdContextValue}>
        {children}
      </editIdContext.Provider>
    </profileContext.Provider>
  );
}

export default Container;
