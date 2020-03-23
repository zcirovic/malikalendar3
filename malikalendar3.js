var dm = require("./node_modules/danimeseci3");

exports.vikendDani = () => {
    return [dm.Dani[5], dm.Dani[6]];
}

exports.dan = function nadjiDan(xi){
    if(xi>=0 && xi<=6)
        return dm.Dani[xi];
    else
        return undefined;
}

function nadjiMesec(xi)
{
     if(xi>=0 && xi <=11)
         return dm.Meseci[xi];
     else
         return undefined;
}

exports.mesec = (i) => nadjiMesec(i);