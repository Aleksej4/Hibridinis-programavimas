import React, { createContext, useState, useEffect } from 'react';
import adsData from './ads.json'

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const fullName = "Aleksej Sinkevič"
  const contact = "+37066666666"

  useEffect(() => {
    setData(adsData);
  }, []);

  const addAd = (newAd) => {
    setData((prevData) => ({
      ...prevData,
      cars: [...prevData.cars, newAd],
    }));
  };

  const editAd = (editedAd) => {
    setData((prevData) => ({
      ...prevData,
      cars: prevData.cars.map((ad) =>
        ad.id === editedAd.id ? editedAd : ad
      ),
    }));
  };

  const deleteAd = (adId) => {
    setData((prevData) => ({
      ...prevData,
      cars: prevData.cars.filter((ad) => ad.id !== adId),
    }));
  };

  return (
    <DataContext.Provider value={{data, addAd, fullName, editAd, contact, deleteAd}}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
