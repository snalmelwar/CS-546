//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Movie data link: https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json

import  {getUsers, getMovies} from './helpers.js';

const findMoviesByDirector = async (directorName) => {
    if (!directorName) throw 'director name doesnt exist';
    if (typeof(directorName) != 'string') throw 'directorName parameter not a string';
    if (directorName.trim === '') throw 'directorName parameter is empty';
    const movies_arr = await getMovies();
    let return_arr = [];
    for (let i = 0; i < movies_arr.length; i++) {
        if (movies_arr[i]['director'] === directorName) {
            return_arr.push (movies_arr[i]);
        };
    };
    if (return_arr.length === 0) throw 'no movies found with director name';
    return(return_arr);
};

const findMoviesByCastMember = async (castMemberName) => {
    if (!castMemberName) throw 'cast member name doesnt exist';
    if (typeof(castMemberName) != 'string') throw 'castMemberName parameter not a string';
    if (castMemberName.trim === '') throw 'castMemberName parameter is empty';
    const movies_arr = await getMovies();
    let return_arr = [];
    for (let i = 0; i < movies_arr.length; i++) {
        if (movies_arr[i]['cast'].includes( castMemberName)) {
            return_arr.push (movies_arr[i]);
        };
    };
    if (return_arr.length === 0) throw 'no movies found with cast name';
    return(return_arr);
};

const getOverallRating = async (title) => {
    if (!title) throw 'title name doesnt exist';
    if (typeof(title) != 'string') throw 'title parameter not a string';
    if (title.trim === '') throw 'title parameter is empty';
    const movies_arr = await getMovies();
    let review_score = 0;
    let no_review = 0;
    for (let i = 0; i < movies_arr.length; i++) {
        if (movies_arr[i]['title'] === title) {
            for (let j = 0; j < movies_arr[i]['reviews'].length; j++) {
                review_score += movies_arr[i]['reviews'][j]['rating'];
                no_review += 1;
            }
        }
    }
    if (no_review === 0) throw 'movie not found with the given title';
    return (Math.floor(review_score*10/no_review)/10);
};

const getMovieById = async (id) => {
    if (!id) throw 'id parameter doesnt exist';
    if (typeof (id) != 'string') throw 'id not a string';
    if (id.trim() === '') throw 'id parameter is empty';
    const movies_arr = await getMovies();
    let return_obj = {};
    for (let i = 0; i < movies_arr.length; i++) {
        if (movies_arr[i]['id'] === id) {
            return_obj = movies_arr[i];
            break;
        };
    };
    if (Object.keys(return_obj).length === 0) throw 'movie id not found';
    return (return_obj);
};

export {findMoviesByDirector, findMoviesByCastMember, getOverallRating, getMovieById};