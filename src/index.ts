window.addEventListener("load", () => {
  const button = document.querySelector("button");
  button?.addEventListener("click", () => {
    button.disabled = true;
    const hw = document.querySelector("input")?.value ?? 0;
    const startTime = performance.now();
    const big = document.querySelector("#big");
    const small = document.querySelector("#small");
    if (!big || !small) return;
    const func = () => {
      requestAnimationFrame(func);
      const now = performance.now();
      const wage = (+hw * (now - startTime)) / (1000 * 60 * 60);
      const nowString = wage.toFixed(2);
      if (nowString.split(".")[0] != big.innerHTML)
        big.innerHTML = `${nowString.split(".")[0]}`;
      if (`.${nowString.split(".")[1]}` != small.innerHTML)
        small.innerHTML = `.${nowString.split(".")[1]}`;
    };
    func();
  });
});
