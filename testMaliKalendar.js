require("danimeseci3");


function nadjiMesec(xi)
{
    if(xi>=0 && xi <=11)
        return Meseci[xi];
    else
        return undefined;
}
mesec = (i) => nadjiMesec(i);

console.log(mesec(3));