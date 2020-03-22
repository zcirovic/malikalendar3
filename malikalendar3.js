require("danimeseci3");

vikendDani = () => {
    return [Dani[5], Dani[6]];
}

exports.dan = function nadjiDan(xi){
    if(xi>=0 && xi<=6)
        return this.Dani[xi];
    else
        return undefined;
}

function nadjiMesec(xi)
{
    if(xi>=0 && xi <=11)
        return Meseci[xi];
    else
        return undefined;
}

exports.mesec = (i) => nadjiMesec(i);