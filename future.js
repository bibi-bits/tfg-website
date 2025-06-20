function openHelp() {
  const width = 350;
  const height = 170;

  const left = (window.screen.width / 2) - (width / 2);
  const top = (window.screen.height / 2) - (height / 2);

  window.open(
    "help.html",
    "_blank",
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
  );
}

  
  
  function closeHelp() {
    const popup = document.getElementById("helpPopup");
    popup.style.display = "none";
  }
  
  // Dragging functionality
  dragElement(document.getElementById("helpPopup"));
  
  function dragElement(elmnt) {
    const header = document.getElementById("dragHeader");
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
    if (header) {
      header.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
  