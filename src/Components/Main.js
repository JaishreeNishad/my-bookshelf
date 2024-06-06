import React, { useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    try {
      const response = await fetch(
        "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1"
      );
      const jsonData = await response.json();
      setData(jsonData.docs);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div className="mt-5 ">
      <div className="ml-10 mr-10 grid grid-cols-4 gap-5">
        {data.map((book, index) => (
          <div
            className="bg-white flex flex-col justify-start items-start ml-5 mt-5  border border-black"
            key={index}
          >
            <h1 className="p-5 text-base font-medium">
              Book Title : <span>{book.title}</span>
            </h1>
            <h1 className="mt-10 p-5 text-base font-medium">
              Edition Count : <span>{book.edition_count}</span>
            </h1>
            <div className="flex justify-center items-centers">
              <button className="bg-green-400 text-white ml-36 mb-5 p-2 rounded-md">
                Add to Bookshelf
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
