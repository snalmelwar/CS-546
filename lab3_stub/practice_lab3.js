const axios = require('axios');



async function getUsers(){
    const { data } = await axios.get('https://gist.githubusercontent.com/jdelrosa/381cbe8fae75b769a1ce6e71bdb249b5/raw/564a41f84ab00655524a8cbd9f30b0409836ee39/users.json');
    return data // this will be the array of user objects
}

async function getMovies(){
    const { data } = await axios.get('https://gist.githubusercontent.com/jdelrosa/78dfa36561d5c06f7e62d8cce868cf8e/raw/2292be808f74c9486d4085bdbc2025bab84d462b/movies.json');
    return data // this will be the array of user objects
}


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

getUserById("48fded55-37cd-4e6b-8f19-e78b481a14a4");
// getUserById('');

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

sameGenre('action');
//sameGenre('IMAX');


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

moviesReviewed('64035fad-a5b7-48c9-9317-3e31e22fe26c');

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

//referMovies('48fded55-37cd-4e6b-8f19-e78b481a14a4');
referMovies('5060fc9e-10c7-4f38-9f3d-47b7f477568b')

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

//findMoviesByDirector("Fernando Dollimore");
findMoviesByDirector("Kayley Goodding")

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

findMoviesByCastMember ("Huberto Snoddon");

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
    console.log (Math.floor(review_score*10/no_review)/10);
};

getOverallRating ('Amarcord');

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

getMovieById("38fd6885-0271-4650-8afd-6d09f3a890a2");