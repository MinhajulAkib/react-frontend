const db ={};


const addToDb = item => {
    const db = getDb();
    if(item in db){
        db[item] = db[item] +1;
    }
    else{
        db[item] = 1;
    }
const getDb = () => {
    return db;
}