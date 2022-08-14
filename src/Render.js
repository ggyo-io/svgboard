import { square2coord, coord2square } from './Utils';

export const renderPieces = (positionOrder, squareSize, orientation) =>
{
    return positionOrder.map(e => {
        const { square, piece } = e;
        const c = square2coord(square, orientation);
        const pid = square + piece;
        return (
            <use
                href={"#" + piece}
                piece={piece} square={square}
                key={square}
                pid={pid}
                x={c.x * squareSize}
                y={c.y * squareSize}
                width={squareSize}
                height={squareSize}
            />
        );
    });
}

const renderRow = (y, squareSize, orientation) =>
    [...Array(8).keys()].map((x) =>
    (
        <use
            href="#square"
            key={coord2square({ x, y }, orientation)}
            square={coord2square({ x, y }, orientation)}
            x={x * squareSize} y={y * squareSize} fill={x % 2 === y % 2 ? "#f0d9b5" : "#b58863"}
        />
    ))

export const renderSquares = (squareSize, orientation) =>
    [...Array(8).keys()].map((y) =>
        renderRow(y, squareSize, orientation)
    )

export const renderPieceOrder = (position, draggedPiece) => {
    if (!position) return [];
    if (!draggedPiece) return Object.keys(position).map((square) => ({ square, piece: position[square]}));
    const positionWithoutDragged = Object.keys(position).filter( square => square !== draggedPiece.square );
    return [
        ...positionWithoutDragged.map((square) => ({ square, piece: position[square]})),
        {square: draggedPiece.square, piece: draggedPiece.piece}
    ];
}
