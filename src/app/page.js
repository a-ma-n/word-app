// File: src/app/page.js
import Image from "next/image";

export default function Home({ paginatedDictionary }) {
  const fs = require("fs");

  function paginateDictionary(dictionary, pageSize, pageNumber) {
    var words = Object.keys(dictionary);
    var totalWords = words.length;
    var totalPages = Math.ceil(totalWords / pageSize);

    if (pageNumber < 1 || pageNumber > totalPages) {
      return { error: "Invalid page number" };
    }

    var startIndex = (pageNumber - 1) * pageSize;
    var endIndex = startIndex + pageSize;
    var slicedWords = words.slice(startIndex, endIndex);

    var paginatedDictionary = {};
    slicedWords.forEach((word) => {
      paginatedDictionary[word] = dictionary[word];
    });

    return {
      totalPages,
      currentPage: pageNumber,
      words: paginatedDictionary,
    };
  }
  var rawdata = fs.readFileSync(
    "/Users/aman/Desktop/word-app/src/app/api/baron800.json"
  );
  var dictionary = JSON.parse(rawdata);
  console.log("dictionary", dictionary);

  var pageSize = 15;
  var pageNumber = 1;
  var paginatedDictionary = paginateDictionary(
    dictionary,
    pageSize,
    pageNumber
  );
  //   console.log("paginated",paginateDictionary)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Word App</h1>
      <div className="relative flex flex-col place-items-center ...">
        {paginatedDictionary && paginatedDictionary.words && (
          <ul>
            {Object.entries(paginatedDictionary.words).map(
              ([word, meaning]) => (
                <li key={word}>
                  <p>
                    {" "}
                    {word} - {meaning}
                  </p>
                </li>
              )
            )}
          </ul>
        )}

        <div className="flex flex-row space-x-4 ">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back</button>

        {paginatedDictionary && paginatedDictionary.currentPage && (
          <p>
             Page: {paginatedDictionary.currentPage} 
            <br></br>
          </p>
        )}
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Forward</button>

        </div>

      </div>
    </main>
  );
}
