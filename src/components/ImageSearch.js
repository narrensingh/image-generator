import react from 'react';
import { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, settext] = useState('');
  const search = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="relative w-80 min-w-[200px] h-10 m-auto mt-10 mb-10 flex items-end justify-center">
      <form className="w-full max-w-sm" onSubmit={search}>
        <div className="flex items-center border-b border-purple-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image"
            aria-label="search"
            onChange={(e) => settext(e.currentTarget.value)}
          />
          <button
            className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
