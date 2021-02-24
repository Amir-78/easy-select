
const { StrBetween, StrFrom, StrNumbers, StrText, StrTo } = require('./functions/functions');

function SelectTo(string, str){

return StrTo(string, str);

};

function SelectFrom(string, str){

    return StrFrom(string, str);

};

function SelectBetween(string, str1, str2){

    return StrBetween(string, str1, str2);

};

function SelectNumbers(string){

    return StrNumbers(string);
    
};

function SelectText(string){

    return StrText(string);
    
};

module.exports = { SelectBetween, SelectFrom, SelectText, SelectNumbers, SelectTo };

