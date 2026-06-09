import { createContext, useContext, useState } from "react";


const PageContext = createContext();

export const usePage=() => {
    const context = useContext(PageContext);
    return context;
};

const PageProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(25);
    const [skip, setSkip] = useState(0)

    const [total, setTotal] = useState(0);

    return (
        <PageContext.Provider value={{ page, setPage, limit, setLimit, skip, setSkip, total, setTotal }}>
            {children}
        </PageContext.Provider>
    );
};

export default PageProvider;