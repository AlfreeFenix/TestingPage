import {createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [dataList, setDataList] = useState(new Array());

    return (
        <DataContext.Provider value = {{dataList, setDataList}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
