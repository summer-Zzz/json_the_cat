const request = require('request');
// const fs = require ('fs');
// const breed = process.argv[2];
const fetchBreedDescription = function(breedName, callback) {
  // const sliceBreed = breedName.slice(0, 4);
  const link = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(link, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      const desc = data[0];
      // const desc = breed.description;
      // console.log(breed)
      if (desc) {
        callback(null, desc.description);
      // console.log(desc)
      } else {
        callback("Breed doesn't exist", null);
      }
    }
  });
};







// const breedFetcher = function(breed) {
//   const sliceBreed = breed.slice(0, 4);
//   const link = `https://api.thecatapi.com/v1/images/search?breed_id=${sliceBreed}`;
//   request(link, (error, response, body) =>{
//     if (error) {
//       console.log('Fail to fetch', error);
//       return;
//     }
//     // fs.readFile (breed, body, (error) => {
//     let data = JSON.parse(body);
//     if (data[0] === undefined) {
//       console.log(`Breed: ${breed} not found`);
//     } else {
//       console.log(data[0]);
//     }
//   });
// };


module.exports = { fetchBreedDescription };