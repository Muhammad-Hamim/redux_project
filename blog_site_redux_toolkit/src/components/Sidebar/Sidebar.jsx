import { useDispatch } from "react-redux";
import { setFilter, setSort } from "../../redux/features/filter/FilterSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  // handle sort on select change
  const handleSort = (e) => {
    dispatch(setSort(e.target.value));
  };

  // handle filter on radio change
  const handleFilter = (e) => {
    const isSaved = e.target.id === "lws-saved";
    dispatch(setFilter(isSaved ? true : false));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={handleSort}
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                className="radio"
                onChange={handleFilter}
                defaultChecked
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                onChange={handleFilter}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
