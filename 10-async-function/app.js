// manual Promise Function
function add(x, y) {
    return new Promise( (resolve, reject) => {
   if (typeof x !== 'number' || typeof y !== 'number') {
        reject('X & Y must be a number');
        }
        resolve(x + y);
    });
    
    
}

// async Function

async function add2(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw 'X & Y must be a number'
    }
    return x + y;
}

add(1, 2)
    .then( val => {
        console.log('PROMISE RESOVLED WITH: ' + val);
    })
    .catch( err => {
        console.log('PROMISE REJECTED WITH: ' + err); 
    })