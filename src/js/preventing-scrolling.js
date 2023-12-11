document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const box = document.querySelector(".box");
  const parentScrollStatus = document.querySelector(
    ".status__parent"
  );
  const childScrollStatus = document.querySelector(
    ".status__child"
  );
  let childScrolled = false;
  const updateParentScrollStatus = () => {
    const isOverscrollNone =
      window.getComputedStyle(box).overscrollBehaviorY ===
      "none";
    parentScrollStatus.innerHTML = `<span>Scrolling from the Parent</span> ${
      childScrolled && isOverscrollNone ? "❌" : "✅"
    }`;
  };

  container.addEventListener(
    "scroll",
    updateParentScrollStatus
  );

  box.addEventListener("scroll", () => {
    childScrolled = true;
    childScrollStatus.innerHTML =
      "<span>Scrolling from the Child</span> ✅";
    setTimeout(() => {
      childScrolled = false;
    }, 1000);
  });
});
