let value = prompt("Ведіть 1 значення!");
    let user = prompt("Ведіть 2 значення!");
let isAnagram = function (test,original){
    const sortString = s => s.toLowerCase().split('').sort().join();
    return sortString(test) === sortString(original)


}
if(isAnagram(value,user))
{
    console.log("значення " + value + " і " + user + " є анаграмою")
} else console.log("значення " + value + " і " + user + " не є анаграмою");