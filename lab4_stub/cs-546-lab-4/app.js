/*

1. Create a band of your choice.
2. Log the newly created band. (Just that band, not all bands)
3. Create another band of your choice.
4. Query all bands, and log them all
5. Create the 3rd band of your choice.
6. Log the newly created 3rd band. (Just that band, not all bands)
7. Rename the first band
8. Log the first band with the updated name. 
9. Remove the second band you created.
10. Query all bands, and log them all
11. Try to create a band with bad input parameters to make sure it throws errors.
12. Try to remove a band that does not exist to make sure it throws errors.
13. Try to rename a band that does not exist to make sure it throws errors.
14. Try to rename a band passing in invalid data for the newName parameter to make sure it throws errors.
15. Try getting a band by ID that does not exist to make sure it throws errors.

*/

import {dbConnection, closeConnection} from './config/mongoConnection.js';
import {create, getAll, get, remove, rename} from './data/bands.js';

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();
    let pinkFloyd = undefined;
    let linkinPark = undefined;
    let theBeatles = undefined;
    try {
        pinkFloyd = await create("Pink Floyd", ["Progressive Rock", "Psychedelic rock", "Classic Rock"], "http://www.pinkfloyd.com", "EMI", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright", "Sid Barrett" ], 1965);
    } catch (e) {
        console.log(e);
    }

    try {
        const pinkFloyd_log = await get(pinkFloyd._id.toString());
        console.log(pinkFloyd_log);
    } catch (e) {
        console.log(e);
    }

    try {
        linkinPark = await create("Linkin Park", ["Alternative Rock", "Pop Rock", "Alternative Metal"], "http://www.linkinpark.com", "Warner", ["Chester Bennington", "Rob Bourdon", "Brad Delson", "Mike Shinoda", "Dave Farrell", "Joe Hahn" ], 1996);
    } catch (e) {
        console.log(e);
    }

    try {
        const bandList = await getAll();
        console.log(bandList);
    } catch (e) {
        console.log(e);
    }

    try {
        theBeatles = await create("The Beatles", ["Rock", "Pop", "Psychedelia"], "http://www.thebeatles.com", "Parlophone", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], 1960);
    } catch (e) {
        console.log(e);
    }

    try {
        const theBeatles_log = await get(theBeatles._id.toString());
        console.log(theBeatles_log);
    } catch (e) {
        console.log(e);
    }

    try {
        pinkFloyd = await rename(pinkFloyd._id.toString(), 'Floyd Pink');
        console.log(pinkFloyd);
    } catch (e) {
        console.log(e);
    }

    try {
        const deleted = await remove(linkinPark._id.toString());
        console.log(deleted);
    } catch (e) {
        console.log(e);
    }

    try {
        const bandList = await getAll();
        console.log(bandList);
    } catch (e) {
        console.log(e);
    }

    try {
        const badParameters = await create("Pink Floyd", ["Progressive Rock", "Psychedelic rock", "Classic Rock"], "https://www.pinkfloyd.com", "EMI", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright", "Sid Barrett" ], 1965);
    } catch (e) {
        console.log(e);
    }

    try {
        const bad_deleted = await remove('Linkin Park');
        console.log(bad_deleted);
    } catch (e) {
        console.log(e);
    }

    try {
        pinkFloyd = await rename('507f1f77bcf86cd799439012', 'Floyd Pink');
        console.log(pinkFloyd);
    } catch (e) {
        console.log(e);
    }

    try {
        pinkFloyd = await rename(pinkFloyd._id.toString(), 'Floyd Pink');
        console.log(pinkFloyd);
    } catch (e) {
        console.log(e);
    }

    try {
        const pinkFloyd_log = await get('507f1f77bcf86cd799439012');
        console.log(pinkFloyd_log);
    } catch (e) {
        console.log(e);
    }
    
    await closeConnection();
}

main();