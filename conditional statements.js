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

number_inp = 42;
type_num = typeof number_inp;
switch (type_num){
    case "number":
        console.log(`${number_inp} число`);
        break;
    case "string":
        console.log(`${number_inp} строка`);
        break;
    case "boolean":
        console.log(`${number_inp} Булев тип`);
        break;
    default:
        console.log(`${number_inp} Не понятно`);

}
