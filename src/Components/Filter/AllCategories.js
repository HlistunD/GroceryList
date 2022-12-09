import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div className="btn">
            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'All']
            .map(category => <Filter category={category}/>
            )}
        </div>
    )
};
export default AllCategories;