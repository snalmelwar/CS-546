import {getUserById, sameGenre, moviesReviewed, referMovies} from "./users.js";
import {findMoviesByDirector, findMoviesByCastMember, getOverallRating, getMovieById} from "./movies.js"

async function main(){
    // getUserById pass test case
    try{
        const getUserByIdOne = await getUserById("48fded55-37cd-4e6b-8f19-e78b481a14a4");
        console.log('getUserByIdOne passed successfully');
    }catch(e){
        console.error('getUserByIdOne failed test case');
    }
    // getUserById fail test case
    try{
        const getUserByIdTwo = await getUserById("48fde19-e78b481a14a4");
        console.error('getUserByIdTwo did not error');
    }catch(e){
        console.log('getUserByIdTwo failed successfully');
    }

    // sameGenre pass test case
    try{
        const sameGenreOne = await sameGenre("Action");
        console.log('sameGenreOne passed successfully');
    }catch(e){
        console.error('sameGenreOne failed test case');
    }
    // sameGenre fail test case
    try{
        const sameGenreTwo = await sameGenre("IMAX");
        console.error('sameGenreTwo did not error');
    }catch(e){
        console.log('sameGenreTwo failed successfully');
    }

    // moviesReviewed pass test case
    try{
        const moviesReviewedOne = await moviesReviewed("64035fad-a5b7-48c9-9317-3e31e22fe26c");
        console.log('moviesReviewedOne passed successfully');
    }catch(e){
        console.error('moviesReviewedOne failed test case');
    }
    // moviesReviewed fail test case
    try{
        const moviesReviewedTwo = await moviesReviewed("1001");
        console.error('moviesReviewedTwo did not error');
    }catch(e){
        console.log('moviesReviewedTwo failed successfully');
    }

    // referMovies pass test case
    try{
        const referMoviesOne = await referMovies("5060fc9e-10c7-4f38-9f3d-47b7f477568b");
        console.log('referMoviesOne passed successfully');
    }catch(e){
        console.error('referMoviesOne failed test case');
    }
    // referMovies fail test case
    try{
        const referMoviesTwo = await referMovies("");
        console.error('referMoviesTwo did not error');
    }catch(e){
        console.log('referMoviesTwo failed successfully');
    }

    // findMoviesByDirector pass test case
    try{
        const findMoviesByDirectorOne = await findMoviesByDirector("Fernando Dollimore");
        console.log('findMoviesByDirectorOne passed successfully');
    }catch(e){
        console.error('findMoviesByDirectorOne failed test case');
    }
    // findMoviesByDirector fail test case
    try{
        const findMoviesByDirectorTwo = await findMoviesByDirector("   ");
        console.error('findMoviesByDirectorTwo did not error');
    }catch(e){
        console.log('findMoviesByDirectorTwo failed successfully');
    }

    // findMoviesByCastMember pass test case
    try{
        const findMoviesByCastMemberOne = await findMoviesByCastMember("Iver Hubbucks");
        console.log('findMoviesByCastMemberOne passed successfully');
    }catch(e){
        console.error('findMoviesByCastMemberOne failed test case');
    }
    // findMoviesByCastMember fail test case
    try{
        const findMoviesByCastMemberTwo = await findMoviesByCastMember("Starbucks");
        console.error('findMoviesByCastMemberTwo did not error');
    }catch(e){
        console.log('findMoviesByCastMemberTwo failed successfully');
    }

    // getOverallRating pass test case
    try{
        const getOverallRatingOne = await getOverallRating("Asterix and the Vikings (Astérix et les Vikings)");
        console.log('getOverallRatingOne passed successfully');
    }catch(e){
        console.error('getOverallRatingOne failed test case');
    }
    // getOverallRating fail test case
    try{
        const getOverallRatingTwo = await getOverallRating("Mamma Mia");
        console.error('getOverallRatingTwo did not error');
    }catch(e){
        console.log('getOverallRatingTwo failed successfully');
    }

    // getMovieById pass test case
    try{
        const getMovieByIdOne = await getMovieById("38fd6885-0271-4650-8afd-6d09f3a890a2");
        console.log('getMovieByIdOne passed successfully');
    }catch(e){
        console.error('getMovieByIdOne failed test case');
    }
    // getMovieById fail test case
    try{
        const getMovieByIdTwo = await getMovieById("-1");
        console.error('getMovieByIdTwo did not error');
    }catch(e){
        console.log('getMovieByIdTwo failed successfully');
    }
}

//call main
main();