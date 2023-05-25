a = prompt("введите число");
b = +a
if (typeof b == "number" && !isNaN(b)) {
    if ((b % 2) == 0)
    {
        console.log("It is chet a number")
    } else {
        console.log("It is nechet a number")
    }
}
else
{
        console.log("Упс, кажется, вы ошиблись")
}



