const promise1 = Promise.resolve('Eid');
const promise2 = Promise.resolve('Mubarak!');
const promise3 = Promise.resolve('And kolakoli should be');
const promise4 = new Promise((resolve, reject) => setTimeout(reject, 100, ''));
const promise5 = Promise.resolve('Stay Home and Stay Safe.');

const promises = [promise1, promise2, promise3, promise4, promise5];

(async () => {
    try {
        const result = await Promise.allSettled(promises);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();


