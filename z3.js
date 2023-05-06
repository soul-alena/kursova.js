alert("Кількість питань 15!\nТТХ АК-74 \n" +
    "Сума не сгоратиме на 5 і 10 питанні.\n" +
    "Якщо Ви відповісте на 7 питань і заробите $10000, а на 8-й відповісте неправильно, то гарантовано отримаєте $5000. ")
let games = [];
games[0] = "Питання 1 \n" +
    "\nКалібр?\n" +
    "a)5,45 мм \nb)10,2 \nc)3,4 ";
games[1] = "Питання 2 \n " +
    "\nПрицільна дальність ?\n" +
    "a)1000 мм \nb)500 мм  \nc)1300 мм ";
games[2] =  "Питання 3 \n " +
    "\nДальність ефективного вогню ?\n" +
    "a)600 мм \nb)400 мм  \nc)500 мм ";
games[3] = "Питання 4 \n " +
    "\nДальність прямого пострілу: по грудній фігурі ?\n" +
    "a)400 м \nb)440 м  \nc)360 м ";
games[4] = "Питання 5 \n " +
    "\nДальність прямого пострілу: по ростовій фігурі ?\n" +
    "a)625 м \nb)640 м  \nc)600 м ";
games[5] = "Питання 6 \n " +
    "\nДальність зосередженого вогню: по наземних цілях ?\n" +
    "a)до 800 м \nb)до 1100 м  \nc)до 1000 м ";
games[6] = "Питання 7 \n " +
    "\nДальність зосередженого вогню: по повітряних ціях ?\n" +
    "a)500 м \nb)1000 м  \nc)900 м ";
games[7] = "Питання 8 \n " +
    "\nТемп стрільби (постр./хв.) ?\n" +
    "a)650 \nb)600  \nc)700";
games[8] = "Питання 9 \n " +
    "\nБойова скорострільність (постр./хв.): автоматичним ?\n" +
    "a)150 \nb)100  \nc)200" ;
games[9] = "Питання 10 \n " +
    "\nБойова скорострільність (постр./хв.): одиночним вогнем ?\n" +
    "a)60 \nb)30  \nc)40" ;
games[10] = "Питання 11 \n " +
    "\nМаксимальна дальнісь польоту кулі ?\n" +
    "a)3150 м \nb)2900 м  \nc)1350 м ";
games[11] = "Питання 12 \n " +
    "\nДальність збереження убивчої кулі ?\n" +
    "a)3150 м \nb)2900 м  \nc)1350 м ";
games[12] = "Питання 13 \n " +
    "\nПочаткова швидкість польоту кулі ?\n" +
    "a)500 м/с \nb)900 м/с  \nc)734 м/с ";
games[13] = "Питання 14 \n " +
    "\nВага - з спорядженим магазином ?\n" +
    "a)3,6 кг \nb)3,3 кг  \nc)2,7 кг ";
games[14] = "Питання 14 \n " +
    "\nВага - без магазину ?\n" +
    "a)3,6 кг \nb)3,3 кг  \nc)2,7 кг ";

let answer = [];
answer[0] = "a";
answer[1] = "a";
answer[2] = "c";
answer[3] = "b";
answer[4] = "a";
answer[5] = "c";
answer[6] = "a";
answer[7] = "b";
answer[8] = "b";
answer[9] = "c";
answer[10] = "a";
answer[11] = "c";
answer[12] = "b";
answer[13] = "a";
answer[14] = "b";

let balans = [];
balans[0] = 50;
balans[1] = 1000;
balans[2] = 2000;
balans[3] = 3000;
balans[4] = 5000;
balans[5] = 8000;
balans[6] = 10000;
balans[7] = 13000;
balans[8] = 15000;
balans[9] = 25000;
balans[10] = 50000;
balans[11] = 100000;
balans[12] = 250000;
balans[13] = 500000;
balans[14] = 1000000;

let count = [];
myGame();
meLikeGame();

function myGame(){
    for(let i = 0; i < games.length; i++){
        const newGame = games[i];
        const answerA = answer[i];
        const moneyBalans = balans[i];
        let likeGame = prompt(newGame + "\n" + "Виграш $" + moneyBalans);
        if( likeGame !== answerA){
            return alert("Good by!")
        }
        if (confirm("Продолжаем?") !== true){
            return
        }

        if (isNaN(likeGame))
           likeGame = moneyBalans;

        count.push(moneyBalans);
        console.log( newGame + " = " + likeGame + ' = ' + moneyBalans)
    }
}

function meLikeGame() {
    max = Number.MIN_VALUE;
    for (let i = 0; i < count.length; i++) {
        const myCount = count[i];
        if(myCount > max){
            max = myCount
        }
     }
    if(max >= 5000 && max < 25000 ){
        alert("Вы проиграли! Сумма выграша 5000$")
    } else if (max >= 25000 && max < 1000000 ){
        alert("Вы проиграли! Сумма выграша 25000$")
    } else if (max === 1000000){
        alert("ВІТАЄМО! Ви виграли 1000000$!")
    }
    else  return alert("Вы проиграли!!")
}