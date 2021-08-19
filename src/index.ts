window.addEventListener("load", () => {
  let buttonState: "start" | "pause" = "start";
  let animID: number;
  let startTime = 0;
  let pauseTime = 0;
  const button = document.querySelector("button");
  const input = document.querySelector("input");
  const startFunc = () => {
    const hw = input?.value ?? 0;
    startTime = startTime + (performance.now() - pauseTime);
    const big = document.querySelector("#big");
    const small = document.querySelector("#small");
    if (!big || !small) return;
    const func = () => {
      animID = requestAnimationFrame(func);
      const now = performance.now();
      const wage = (+hw * (now - startTime)) / (1000 * 60 * 60);
      const nowString = wage.toFixed(2);
      if (nowString.split(".")[0] != big.innerHTML)
        big.innerHTML = `${nowString.split(".")[0]}`;
      if (`.${nowString.split(".")[1]}` != small.innerHTML)
        small.innerHTML = `.${nowString.split(".")[1]}`;
    };
    func();
  };
  const pauseFunc = () => {
    cancelAnimationFrame(animID);
    pauseTime = performance.now();
  };
  button?.addEventListener("click", () => {
    switch (buttonState) {
      case "start":
        startFunc();
        buttonState = "pause";
        break;
      case "pause":
        pauseFunc();
        buttonState = "start";
        break;
    }
    button.innerText = buttonState;
    if (input) input.disabled = buttonState == "pause";
  });
});
