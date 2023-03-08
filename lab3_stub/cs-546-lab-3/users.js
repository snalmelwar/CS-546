//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//User data link: https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json

import  {getUsers, getMovies} from './helpers.js';

const getUserById = async (id) => {
    if (!id) throw 'id parameter doesnt exist';
    if (typeof (id) != 'string') throw 'id not a string';
    if (id.trim() === '') throw 'id parameter is empty';
    const users_arr = await getUsers();
    let return_obj = {};
    for (let i = 0; i < users_arr.length; i++) {
        if (users_arr[i]['id'] === id) {
            return_obj = users_arr[i];
            break;
        };
    };
    if (Object.keys(return_obj).length === 0) throw 'user not found';
    return (return_obj);
};

const sameGenre = async (genre) => {
    if (!genre) throw 'id parameter doesnt exist';
    if (typeof (genre) != 'string') throw 'id not a string';
    if (genre.trim() === '') throw 'id parameter is empty';
    const users_arr = await getUsers();
    let return_arr = [];
    let genre_matches = 0;
    for (let i = 0; i < users_arr.length; i++) {
        if (users_arr[i]['favorite_genre'].toUpperCase() === genre.toUpperCase()) {
            return_arr.push(users_arr[i]['first_name'] + ' ' + users_arr[i]['last_name']);
            genre_matches += 1;
            if (genre_matches === 50) {
                break;
            };
        };
    };
    if (return_arr.length < 2) throw 'less than 2 users returned';
    return_arr.sort(function (a, b) {
        let lastNameA = a.split(' ')[1];
        let lastNameB = b.split(' ')[1];
        if (lastNameA > lastNameB) {
            return 1;
        } else if (lastNameA < lastNameB) {
            return -1;
        } else {
            return 0;
        };
    });
    return (return_arr);
};

const moviesReviewed = async (id) => {
    const UserId_obj = await getUserById(id);
    const username = UserId_obj['username'];
    const movies_arr = await getMovies();
    let return_arr = [];
    for (let i = 0; i < movies_arr.length; i++) {
        for (let j = 0; j < movies_arr[i]["reviews"].length; j++ ) {
            if (movies_arr[i]["reviews"][j]['username'] === username) {
                //const movie_obj = {};
                //movie_obj[] = ;
                return_arr.push({[movies_arr[i]['title']] : movies_arr[i]["reviews"][j]});
            };
        };
    };
    return(return_arr);
};

const referMovies = async (id) => {
    const UserId_obj = await getUserById(id);
    const username = UserId_obj['username'];
    const fav_genre = UserId_obj['favorite_genre'];
    const movies_arr = await getMovies();
    let return_movies = []
    for (let i = 0; i < movies_arr.length; i++) {
        if (movies_arr[i]['genre'].split('|').includes(fav_genre)) {
            let reviewer_found = 0;
            for (let j = 0; j < movies_arr[i]['reviews'].length; j++) {
                if (movies_arr[i]["reviews"][j]['username'] === username) {
                    reviewer_found += 1;
                };
            };
            if (reviewer_found === 0) {
                return_movies.push(movies_arr[i]['title']);
            };
        };
    };
    return(return_movies);
};

export {getUserById, sameGenre, moviesReviewed, referMovies};