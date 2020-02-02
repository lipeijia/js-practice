function changeColor(color, delay) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      document.body.style.background = color;
      resolve();
    }, delay);
  });
}

// async function lightShow() {
//   await changeColor('#8080ff', 1000);
//   await changeColor('#80ffc0', 1000);
//   await changeColor('#ffc080', 1000);
//   await changeColor('#ff80c0', 1000);
// }

// lightShow();


async function parallelShow() {

  const p1 = changeColor('#8080ff', 1000);
  const p2 = changeColor('#80ffc0', 1000);
  const p3 = changeColor('#ffc080', 1000);
  const p4 = changeColor('#ff80c0', 1000);
  console.log(p1);

  await p1;
  await p2;
  await p3;
  await p4;
  console.log(p1);
  
}

parallelShow();