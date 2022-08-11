// Current state
let currentPiece = undefined;
let draggedPiece = undefined;

export const onTouchCancel = (e) => console.log('onTouchCancel', e)
export const onTouchEnd = (e) => console.log('onTouchEnd', e)
export const onTouchMove = (e) => console.log('onTouchMove', e)
export const onTouchStart = (e) => console.log('onTouchStart', e)
export const onClick = (e) => console.log('onClick', e)
export const onDoubleClick = (e) => console.log('onDoubleClick', e)

export const
onMouseDown = (e) => {
    console.log('onMouseDown', e)
    if (!currentPiece) return;
    console.log("Down inout/piece", currentPiece);
    const el = document.querySelector('[pid="' + currentPiece.square.value + currentPiece.piece.value + '"]');
    console.log("Down inout/piece", currentPiece, 'el', el);

    draggedPiece = {
        el,
        clientX: parseInt(e.clientX),
        clientY: parseInt(e.clientY),
        x: parseInt(el.getAttribute('x')),
        y: parseInt(el.getAttribute('y')),
    };
}

export const
onMouseMove = (e) => {
    console.log('onMouseMove', e);
    if (!draggedPiece) return;

    const x = draggedPiece.x - draggedPiece.clientX + e.clientX;
    const y = draggedPiece.y - draggedPiece.clientY + e.clientY;
    draggedPiece.el.setAttribute("x", x);
    draggedPiece.el.setAttribute("y", y);
    console.log("Move inout/piece x", x, "y", y);
}
export const
onMouseOut = (e) => {
    console.log('onMouseOut', e);
    const attributes = e.target.attributes;
    if (attributes.piece) {
        console.log("Leave inout/piece " + attributes.piece.value, currentPiece);
        currentPiece = undefined;
    }
}

export const
onMouseOver = (e) => {
    console.log('onMouseOver', e);
    const attributes = e.target.attributes;
    if (attributes.piece) {
        currentPiece = { piece: attributes.piece, square: attributes.square };
        console.log("Enter inout/piece " + attributes.piece.value);
    }
}

export const
onMouseUp = (e) => {
    console.log('onMouseUp', e);

    if (draggedPiece) {
        // snap back
        draggedPiece.el.setAttribute("x", draggedPiece.x);
        draggedPiece.el.setAttribute("y", draggedPiece.y);
        console.log("Drop inout/piece x", draggedPiece.x, "y", draggedPiece.y);

        draggedPiece = undefined;
    }
}
