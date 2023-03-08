import {getUserById, sameGenre, moviesReviewed, referMovies} from "./users.js";
import {findMoviesByDirector, findMoviesByCastMember, getOverallRating, getMovieById} from "./movies.js"

async function main(){
    // getUserById pass test case
    try{
        const getUserByIdOne = await getUserById("48fded55-37cd-4e6b-8f19-e78b481a14a4");
        console.log(getUserByIdOne);
    }catch(e){
        console.error('getUserByIdOne failed test case');
    }
}

//console.log (getUserById("9dc9402d-980f-41b1-a0c3-65e277364c07"));