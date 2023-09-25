
const direction = document.getElementById('direction');
const justify = document.getElementById('justify');
const align = document.getElementById('align');
const wrap = document.getElementById('wrap');

const flex = document.querySelector('.flex');

let isResizing = false;
let startX;

flex.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;
  
    const newWidth = flex.offsetWidth + (e.clientX - startX);
    flex.style.width = newWidth + "px";
    startX = e.clientX;
  });
  
  document.addEventListener("mouseup", () => {
    isResizing = false;
  });

direction.addEventListener('change',()=>{
    flex.style.flexDirection = direction.value;
});

justify.addEventListener('change',()=>{
    flex.style.justifyContent = justify.value;
});

align.addEventListener('change',()=>{
    flex.style.alignItems = align.value;
});

wrap.addEventListener('change',()=>{
    flex.style.flexWrap = wrap.value;
})