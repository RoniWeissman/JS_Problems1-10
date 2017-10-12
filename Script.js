/**
 * Created by h205p2 on 9/29/17.
 */
/*Roni Weissman
JavaScript Problems 1-10
10/12/17
 */
function sleep_in(weekday,vacation) {
    if(vacation == true || weekday == false){
        return true;
    }else{
        return false;
    }
}


function monkey_trouble(monkeyOne, monkeyTwo){
    if(monkeyOne == true && monkeyTwo == true){
        return true;
    }
    if(monkeyOne == false && monkeyTwo == false){
        return true;
    }
    if(monkeyOne == false && monkeyTwo == true){
        return false;
    }
    if(monkeyOne == true && monkeyTwo == false){
        return false;
    }
}

function string_times(str, n){
    var newString = "";
    for(var i = 0; i < n; i++){
        newString = newString + str;
    }
    return newString;
}



function front_times(str,n){
    var firstThree = str.substring(0,3);
    var printed = "";
    for(var i = 0; i < n; i++){
        printed += firstThree;
    }
    return printed;
}


function string_bits(word){
    var everyOther = "";
    for(var i = 0; i< word.length; i = i+2){
        everyOther += word[i];
    }
    return everyOther;
}


function caughtSpeeding(speed, birthday){
    var noTicket = 0;
    var smallTicket = 1;
    var bigTicket = 2;
    if(birthday == true){
        if(speed <= 65){
            return noTicket;
        }
    }
    if(birthday == true){
        if(speed >= 66 && speed <=85) {
            return smallTicket;
        }
    }
    if(birthday == true){
        if(speed >= 86){
            return bigTicket;
        }
    }
    if(birthday == false){
        if(speed <= 60){
            return noTicket;
        }
    }
    if(birthday == false){
        if(speed >= 61 && speed <= 80){
            return smallTicket;
        }
    }
    if(birthday == false){
        if(speed >= 81){
            return bigTicket;
        }
    }
}


function fizz_buzz(num){
    var printFizz = "Fizz";
    var printBuzz = "Buzz";
    if(num % 5 == 0 && num % 3 == 0){
        return printFizz + printBuzz;
    }
    if(num % 3 == 0){
    return printFizz;
    }
    if(num % 5 == 0){
        return printBuzz;
    }
    if(num % 5 != 0 && num % 3 != 0){
        return num + "!";
    }
}

function teaParty(tea, candy){
    var bad = 0;
    var good = 1;
    var great = 2;
    var teaTwo = tea * 2;
    var candyTwo = candy *2;

    if(tea < 5 || candy < 5){
        return bad;
    }
    if(tea >= candyTwo){
        return great;
    }
    if(candy >= teaTwo){
        return great;
    }
    if(tea >= 5 && candy >= 5){
        return good;
    }
}


function blackjack(firstint, secondint){
    var diffOne = 21 - firstint;
    var diffTwo = 21 - secondint;
    var bothOver = 0;
    if(secondint > 21 && firstint > 21){
        return bothOver;
    }
    if(firstint > 21){
        return secondint;
    }
    if(secondint > 21){
        return firstint;
    }
    if(firstint <= 21 && secondint <= 21){
        if(diffOne > diffTwo){
            return secondint;
        }
        if(diffTwo > diffOne){
            return firstint;
        }

    }

}

function loneSum(a, b, c){
    var addAll = a + b + c;
    var addAB = a + b;
    var addAC = a + c;
    var addBC = b + c;
    //console.log("add ab=" + addAB);
    var allEqual = 0;
    if(a !== b && b !== c && a !== c){
        return addAll;
    }
    if(a == c){
        if(a != b){
            return b;
        }else{
            return allEqual;
        }
    }
    if(b == c){
        if(a != b){
            return a;
        }else{
            return allEqual;
        }
    }
    if(a == b){
        if(a != c){
            return c;
        }else{
            return allEqual;
        }
    }
}

function tester() {

    document.getElementById("output").innerHTML = string_times('bro', 4);
}