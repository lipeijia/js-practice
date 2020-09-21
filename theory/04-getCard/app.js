// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// function getCard() {
//     const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

//     function getRandomInt(max) {
//         return Math.floor(Math.random() * Math.floor(max));
//     }

//     let card = {
//         value: values[getRandomInt(values.length)],
//         suit: suits[getRandomInt(suits.length)]
//     }
//     return card;
// }

function getCard() {
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    let card = {
        value: getRandom(values),
        suit: getRandom(suits),

    }
    return card;
}