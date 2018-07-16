var makeDate = function () {
    var d = new Date ();
    var formattedDate = "";
    formattedDate += (d.getMonth() +1) + "_";
    formattedDate += d.getDate() + "_";
    formattedDate += d.getFullYear() + "_";

    return formattedDate;

};

module.exports = makeDate;