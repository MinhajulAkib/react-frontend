const db ={};


const addToDb = item => {
    const db = getDb();
    db[item] = 1;
    console.log(db);

const getDb = () => {
    return db;
}