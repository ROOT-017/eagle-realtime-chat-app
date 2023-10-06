import { BiSearch } from "react-icons/bi";

const Search = ({ setTerm }) => {
  return (
    <div className=" p-2 lg:p-0 lg:pb-2">
      <div className="flex p-2 justify-between items-center bg-white rounded-lg">
        <input
          type="text"
          name=""
          placeholder="Search a github user"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          className="w-full focus:outline-none h-10 "
        />
        <label htmlFor="search">
          <BiSearch size={`2em`} className="ml-2v  text-oxford-blue" />
        </label>
      </div>
    </div>
  );
};

export default Search;
