import {dbConnection, closeConnection} from './config/mongoConnection.js';
import {create, getAll, get, remove, rename} from './data/bands.js';

async function main() {
    const db = await dbConnection();
    //await db.dropDatabase();
    let pinkFloyd = undefined;
    let linkinPark = undefined;
    let theBeatles = undefined;
    try {
        pinkFloyd = await create("Pink Floyd 123", ["Progressive Rock", "Psychedelic rock", "Classic Rock"], "http://www.pinkfloyd.com", "EMI", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright", "Sid Barrett" ], 1965, 'abc');
    } catch (e) {
        console.log(e);
    }

    try {
        const bandList = await getAll();
        console.log(bandList);
    } catch (e) {
        console.log(e);
    }
    await closeConnection();
}

main();