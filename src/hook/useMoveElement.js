export default function useMoveElement(useRef) {
  let mouseDown = false;
  let grabPointX;
  let grabPointY;

  const onDrag = (e) => {
    const posX = e.clientX + grabPointX;
    const posY = e.clientY + grabPointY;
    const ref = useRef;

    if (mouseDown) {
      ref.current.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
    }
  };

  const onDragStart = (e) => {
    mouseDown = true;

    const getBounding = useRef.current.getBoundingClientRect();
    grabPointX = getBounding.left - e.clientX;
    grabPointY = getBounding.top - e.clientY;

    document.addEventListener("mousemove", onDrag);
  };

  const onDragEnd = () => {
    if (mouseDown) mouseDown = false;
    document.removeEventListener("mousemove", onDrag);
  };

  document.addEventListener("mouseup", onDragEnd);

  return onDragStart;
}
