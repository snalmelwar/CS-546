//Todo You can use this file for any helper functions you may need. This file is optional and you don't have to use it if you do not want to.
async function getMovies(url){
    const { data } = await axios.get(url);
    return data // this will be the array of user objects
}

