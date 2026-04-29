// numeric enum
enum RequestType {
    readData = 1,
    saveData = 3,
    deleteData,
}
console.log(RequestType);

// string enum
enum RequestType2 {
    ReadData = "READ_DATA",
    SaveData = "SAVE_DATA",
    DeleteData = "DELETE_DATA",
}
console.log(RequestType2.ReadData);
console.log(RequestType2['SaveData']);
