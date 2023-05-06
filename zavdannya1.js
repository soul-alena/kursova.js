function palindrome() {
    let result = prompt("Ведіть значення!");
    let stringArr = result.split("").reverse().join("");

    if (result === stringArr) {
        console.log("Значення є паліндром");
    } else {
        console.log("Значення не є паліндром");
    }
}
palindrome();