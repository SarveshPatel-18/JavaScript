let stdent = {
    name : "Sarvesh Patel",
    Class : "BCA",
    Sem : "6th",
    clg : "ITM",
    mob : 7234812124
}

console.log(stdent);

for (let key in stdent) {
    console.log("key =", key, "Value =", stdent[key]);
}

