const booksCatalogReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CATALOG":
            if (state.length === 0) {
                return state = action.data;
            } else return state;
        default:
            return state;
    }
}
export default booksCatalogReducer;