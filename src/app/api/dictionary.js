function paginateDictionary(dictionary, pageSize, pageNumber) {
    const words = Object.keys(dictionary);
    const totalWords = words.length;
    const totalPages = Math.ceil(totalWords / pageSize);
  
    if (pageNumber < 1 || pageNumber > totalPages) {
      return { error: "Invalid page number" };
    }
  
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const slicedWords = words.slice(startIndex, endIndex);
  
    const paginatedDictionary = {};
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
  