//your JS code here. If required.
const input = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  let num = Number(input.value);
  output.textContent = "";
  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          val = val * 2;
          output.textContent = `Result: ${val}`;
          resolve(val);
        }, 1000);
      });
    })
    
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          val = val - 3;
          output.textContent = `Result: ${val}`;
          resolve(val);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          val = val / 2;
          output.textContent = `Result: ${val}`;
          resolve(val);
        }, 1000);
      });
    })
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          val = val + 10;
          output.textContent = `Final Result: ${val}`;
          resolve(val);
        }, 1000);
      });
    });
});
