function StrTo(string, str){

    var strF = string.substring("0").split(`${str}`);

return strF[0];

};

function StrFrom(string, str){

    var strF = string.substring("0").split(`${str}`);

    return strF[1];

};

function StrBetween(string, str1, str2){

    var strF = string.substring("0").split(`${str1}`);
    var strF2 = strF[1].substring("0").split(`${str2}`);

    return strF2[0];

};

function StrNumbers(string){

var fil = string.match(/\d/g);

return fil.join(" ");
    
};

function StrText(string){

    var fil = string.match(/[a-zA-Z]+/g);

    return fil.join(" ");
    
};


module.exports = { StrText, StrNumbers, StrBetween, StrFrom, StrTo };