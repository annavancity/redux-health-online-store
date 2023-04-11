import Filter from "./Filter";

const AllCategories = () => {
    return(<div>
        <h1>Shop by category</h1>
        {['OIL', 'TEA', 'SPICES', 'ALL'].map(category => <Filter category={category} key={category}/>
        )}
        
    </div>)
}

export default AllCategories;