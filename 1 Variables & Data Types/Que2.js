const profile = {
    UserName : "@shardhakhapra",
    Isfollow : true,
    posts : "195 posts",
    followers : "569K",
    following : 4,
    Fullname : "shardha Khapra",
    Bio : "Apna College | Ex-Microsoft, DRDO To educate someone is the highest privilege",
}
console.log(profile);
console.log(typeof(profile["Isfollow"]));
console.log(typeof(profile["UserName"]));
console.log(typeof(profile));
profile["UserName"] = "Sarvesh";
console.log(profile);