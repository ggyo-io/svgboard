import React, { useState, useRef } from "react";
import bB from './chesspieces/merida/bB';
import bK from './chesspieces/merida/bK';
import bQ from './chesspieces/merida/bQ';
import bN from './chesspieces/merida/bN';
import bR from './chesspieces/merida/bR';
import bP from './chesspieces/merida/bP';
import wP from './chesspieces/merida/wP';
import wR from './chesspieces/merida/wR';
import wN from './chesspieces/merida/wN';
import wB from './chesspieces/merida/wB';
import wQ from './chesspieces/merida/wQ';
import wK from './chesspieces/merida/wK';
import { renderSquares, renderPieceOrder, renderPieces, } from './Render';

function Board(props) {
    const svgRef = useRef();
    const [mouseOverPiece, setMouseOverPiece] = useState(null)
    const [draggedPiece, setDraggedPiece] = useState(null)

    const onMouseDown = (e) => {
        if (!mouseOverPiece) return;
        const el = svgRef.current.querySelector('[pid="' + mouseOverPiece.square.value + mouseOverPiece.piece.value + '"]');

        setDraggedPiece({
            el,
            clientX: parseInt(e.clientX),
            clientY: parseInt(e.clientY),
            x: parseInt(el.getAttribute('x')),
            y: parseInt(el.getAttribute('y')),
            square: mouseOverPiece.square.value,
            piece: mouseOverPiece.piece.value,
        });
    }

    const onMouseMove = (e) => {
        if (!draggedPiece) return;

        const x = draggedPiece.x - draggedPiece.clientX + e.clientX;
        const y = draggedPiece.y - draggedPiece.clientY + e.clientY;
        draggedPiece.el.setAttribute("x", x);
        draggedPiece.el.setAttribute("y", y);
    }

    const onMouseOut = (e) => {
        const attributes = e.target.attributes;
        if (attributes.piece) setMouseOverPiece(null);
    }

    const onMouseOver = (e) => {
        const attributes = e.target.attributes;
        if (attributes.piece) setMouseOverPiece({ piece: attributes.piece, square: attributes.square });
    }

    const onMouseUp = (e) => {
        if (!draggedPiece) return;

        // snap back
        draggedPiece.el.setAttribute("x", draggedPiece.x);
        draggedPiece.el.setAttribute("y", draggedPiece.y);

        setDraggedPiece(null);
    }

    const { width, position, orientation } = props;
    const squareSize = width / 8;
    const pieces = renderPieceOrder(position, draggedPiece);

    return (
        <svg ref={svgRef} width={width} height={width}
            onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseOut={onMouseOut} onMouseOver={onMouseOver}
            onClick={onMouseUp} onMouseLeave={onMouseUp} onMouseUp={onMouseUp}
        >
            <defs>
                <rect id="square" width={squareSize} height={squareSize} rx={squareSize / 8} />
                {bP()}{bR()}{bN()}{bB()}{bQ()}{bK()}
                {wP()}{wR()}{wN()}{wB()}{wQ()}{wK()}
            </defs>
            {renderSquares(squareSize, orientation)}
            {renderPieces(pieces, squareSize, orientation)}
        </svg>
    );
}

export default Board;