export async function getStaticProps() {
    const rawdata = fs.readFileSync('/Users/aman/Desktop/word-app/src/app/barron800.json');
    const dictionary = JSON.parse(rawdata);
    console.log("dictionary",dictionary)
  
    const pageSize = 15;
    const pageNumber = 1;
    const paginatedDictionary = paginateDictionary(dictionary, pageSize, pageNumber);
    console.log("paginatedDictionary",paginatedDictionary)
    return {
      props: {
        paginatedDictionary,
      },
    };
  }
  