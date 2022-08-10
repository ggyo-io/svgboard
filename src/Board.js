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
import {square2coord, coord2square} from './Utils';

const renderPosition = (position, squareSize, orientation) => {
    return position ? 
    (
        Object.keys(position).map( (square) => {
            const piece = position[square];
            const c = square2coord(square, orientation);
            return (
                <use
                    href={"#" + piece}
                    key={square}
                    x={c.x*squareSize}
                    y={c.y*squareSize}
                    width={squareSize}
                    height={squareSize}
                />
            );
        })
    ) : null;
};           

const renderRow = ( y, squareSize, orientation ) =>
    [...Array(8).keys()].map( (x) =>
    (
        <use
            href="#square"
            key={coord2square({x, y}, orientation)}
            square={coord2square({x, y}, orientation)}
            x={x*squareSize} y={y*squareSize} fill={ x % 2 === y % 2 ? "#f0d9b5" : "#b58863" }
        />
    ))

const renderSquares = (squareSize, orientation) => 
    [...Array(8).keys()].map( (y) => 
        renderRow(y, squareSize, orientation)
    )

function Board(props) {
    const {width, position, orientation} = props;
    console.log("width", width, "orientation", orientation, "position", position);
    const squareSize = width / 8;

    const onClick = (e) => console.log('onclick', e)

    return (
        <svg width={width} height={width} onClick={onClick}>
            <defs>
                <rect id="square" width={squareSize} height={squareSize} rx={squareSize/8}/>
                {bP()}{bR()}{bN()}{bB()}{bQ()}{bK()}
                {wP()}{wR()}{wN()}{wB()}{wQ()}{wK()}
            </defs>
            {renderSquares(squareSize, orientation)}
            {renderPosition(position, squareSize, orientation)}
        </svg>
    );
}

export default Board;