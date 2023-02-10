// def main():
    
//     print()

//     user_msg = input("Input OHK message to translate: ")
//     user_msg_list = convert_msg_to_list(user_msg)
//     translated_msg = translate_msg(user_msg_list)


const input = document.querySelector('#input');
// var msg = []
// msg = convertMessageToArray(input.value);


input.addEventListener('keydown', tracker);
input.addEventListener('keyup', updateInput);

const finger1 = document.querySelector('#finger-1').value
const finger2 = document.querySelector('#finger-2').value
const finger3 = document.querySelector('#finger-3').value
const finger4 = document.querySelector('#finger-4').value
const finger5 = document.querySelector('#finger-5').value



var msg = []
var numberMsg = []
var output = []

const acceptedKeys = [
    finger1, finger2, finger3, finger4, finger5
]
var numTracker = 0;

function tracker(event) {
    if (acceptedKeys.includes(event.key)) {
        numTracker += 1;
        console.log(event.key);
        console.log(numTracker);
    }
}

function updateInput(event){
    if (acceptedKeys.includes(event.key)) {
        numTracker -= 1
        console.log(numTracker);
        if (numTracker === 0){
            input.value += ' ';
            msg = convertMessageToArray(input.value);
            console.log(msg);
            numberMsg = convertMessageToNumbers(msg);
            console.log(numberMsg);
            const processing = combineNumbers(numberMsg);
            
            console.log(processing)
        }
    }
    else if (event.key === 'Control') {
        numTracker = 0;
    }
 }

function convertMessageToArray(userMsg) {
    const msgArray = Array.from(userMsg);
    msg = msgArray.filter(x => x !== ' ');
    return msgArray;
}

function convertMessageToNumbers(array) {
    const newArray = [];
    for(letter of array) {
        switch (letter) {
            case finger1:
                newArray.push(1)
                break
            case finger2:
                newArray.push(2)
                break
            case finger3:
                newArray.push(3)
                break
            case finger4:
                newArray.push(4)
                break
            case finger5:
                newArray.push(5)
                break
            case ' ':
                newArray.push(' ')
        }
    }
    return newArray;
}

function combineNumbers(array) {
    const numArray = []
    var newArray = [];
    for (element of array) {
        if (!(element === ' ')) {
            newArray.push(element);
            console.log(newArray)
        }
        else {
            newArray.sort()
            const string = newArray.join('')
            const number = parseInt(string)
            if (number > 0) {
                numArray.push(number)
            }
            newArray = []
        }
    }
    console.log(numArray)
    return numArray
}

// def translate_msg(user_msg_list):
//     # sorts out the numbers inputed from the OHK in ascending order
//     for letter in range(len(user_msg_list)):
//         if len(user_msg_list[letter]) > 1 :
//             letter_sort = list(user_msg_list[letter])
//             letter_sort.sort()
//             user_msg_list[letter] = "".join(letter_sort)
        
function translateMsg(msgArray) {
    
}


//         user_msg_list[letter] = int(user_msg_list[letter])
    
//         # Translates the users button inputs into letters
//         match user_msg_list[letter]:
//             case 1:
//                 user_msg_list[letter] = "a"
//             case 2:
//                 user_msg_list[letter] = "e"
//             case 3:
//                 user_msg_list[letter] = "i"
//             case 4:
//                 user_msg_list[letter] = "o"
//             case 5:
//                 user_msg_list[letter] = "u"
//             case 12:
//                 user_msg_list[letter] = "b"
//             case 13:
//                 user_msg_list[letter] = "c"
//             case 14:
//                 user_msg_list[letter] = "d"
//             case 15:
//                 user_msg_list[letter] = "f"
//             case 23:
//                 user_msg_list[letter] = "g"
//             case 24:
//                 user_msg_list[letter] = "h"
//             case 25:
//                 user_msg_list[letter] = "j"
//             case 34:
//                 user_msg_list[letter] = "k"
//             case 35:
//                 user_msg_list[letter] = "l"
//             case 45:
//                 user_msg_list[letter] = "m"
//             case 123:
//                 user_msg_list[letter] = "n"
//             case 124:
//                 user_msg_list[letter] = "p"
//             case 125:
//                 user_msg_list[letter] = "q"
//             case 134:
//                 user_msg_list[letter] = "r"
//             case 135:
//                 user_msg_list[letter] = "s"
//             case 145:
//                 user_msg_list[letter] = "t"
//             case 234:
//                 user_msg_list[letter] = "v"
//             case 235:
//                 user_msg_list[letter] = "w"
//             case 245:
//                 user_msg_list[letter] = "x"
//             case 345:
//                 user_msg_list[letter] = "y"
//             case 1234:
//                 user_msg_list[letter] = "z"
//             case 1235:
//                 user_msg_list[letter] = "!"
//             case 1245:
//                 user_msg_list[letter] = "?"
//             case 1345:
//                 user_msg_list[letter] = ","
//             case 2345:
//                 user_msg_list[letter] = "."
//             case 12345:
//                 user_msg_list[letter] = " "

//     return user_msg_list
    


// if __name__ == "__main__":
//     main()