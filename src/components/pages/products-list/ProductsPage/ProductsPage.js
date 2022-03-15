import { useState, useEffect } from "react";

import ProductsGrid from "../ProductsGrid";
import Sidebar from "../Sidebar";
import Pagination from "../Pagination";

export function ProductsPage() {

    const [activeFilters, setActiveFilter] = useState({})

    const handleChange = (event) => {
        setActiveFilter({...activeFilters, [event.target.name] : event.target.checked})
    }

    useEffect(() => {
        console.log(`ActiveFilters: ${activeFilters}`, [activeFilters])
    })

    return <div className='row'>
    <Sidebar handleChange={handleChange} activeFilters={activeFilters}/>
    <ProductsGrid activeFilters={activeFilters}/>
    <Pagination />
    </div>
}