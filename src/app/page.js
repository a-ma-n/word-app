// File: src/app/page.js
import Image from 'next/image';

export default function Home({ paginatedDictionary }) {
    const fs = require('fs');

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
       console.log(paginatedDictionary)
        return {
          totalPages,
          currentPage: pageNumber,
          words: paginatedDictionary,
        };
      }
      var rawdata = fs.readFileSync('/Users/aman/Desktop/word-app/src/app/api/baron800.json');
      var dictionary = JSON.parse(rawdata);
      console.log("dictionary",dictionary)
    
      var pageSize = 15;
      var pageNumber = 1;
      var paginatedDictionary = paginateDictionary(dictionary, pageSize, pageNumber);    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Word App</h1>
      <div className="relative flex place-items-center ...">
        {/* {console.log("aman")} */}
      {
        
      }
        {
        paginatedDictionary &&
        paginatedDictionary.words &&
        (
            <ul>
            {Object.entries(paginatedDictionary.words).map(([word, meaning]) => (
                <li key={word}>
                <p> {word} - {meaning}</p>
                </li>
            ))}
    </ul>
  )
}

      </div>
    </main>
  );
}
