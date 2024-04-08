const imageDivs = document.querySelectorAll(".image");
imageDivs.forEach((div) => {
  div.addEventListener("dragstart", handleDragStart);
  div.addEventListener("dragover", handleDragOver);
  div.addEventListener("drop", handleDrop);
  div.setAttribute("draggable", true);
})


function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
	event.preventDefault();
	const draggedId = event.dataTransfer.getData("text/plain");
	const droppedId = event.target.id;

	const draggedElement = document.getElementById(draggedId);
	const droppedElement = document.getElementById(droppedId);

	draggedElement.id = droppedId;
	droppedElement.id = draggedId;

	let tempText = draggedElement.innerText
	draggedElement.innerText = droppedElement.innerText
	droppedElement.innerText = tempText
	
	
}
