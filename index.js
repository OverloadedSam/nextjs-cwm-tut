// console.log('Initial');

// setTimeout(() => {
//   console.log('LOL..');
// }, 1);

// const getUserData = () => {
//   const promise = new Promise(async (resolve, reject) => {
//     console.log('Inside promise body');

//     setTimeout(() => {
//       console.log('Generating random number and getting user data');
//       const data = Math.random() > 0.5 ? 1 : 0;
//       if (data)
//         return resolve({
//           success: true,
//           message: 'Promise resulted in success',
//           data: { user: { name: 'Sam', designation: 'Sr. Software Engineer' } },
//         });

//       reject({
//         success: false,
//         message: 'Promise resulted in failure!',
//         error: { meta: null, trace: 'qwea097ryfq87yif' },
//       });
//     }, 2000);

//     console.log('End of Promise body');
//   });

//   return promise;
// };

// (async () => {
//   console.log('Start');
//   const userData = await getUserData();
//   // getData()
//   //   .then((d) => console.log(d))
//   //   .catch((d) => console.log(d));
//   console.log('A console statement...');
//   console.log(userData);
//   console.log('End');
// })();
// console.log('Edn..');
// console.log('endl..');

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('P1 success'), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('P2 success'), 3000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('P3 success'), 2000);
// });

// (async () => {
//   try {
//     const promiseResult = await Promise.any([p1, p2, p3]);
//     console.log(promiseResult);
//   } catch (error) {
//     console.log(error instanceof SyntaxError);
//   }

// })();
function a() {
  var x = 7;
  c();
  function c() {
    console.log(x);
  }
}

a();
