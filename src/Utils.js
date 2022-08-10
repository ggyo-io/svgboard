export const start = () => ({
    "a1" : "wR",
    "b1" : "wN",
    "c1" : "wB",
    "d1" : "wQ",
    "e1" : "wK",
    "f1" : "wB",
    "g1" : "wN",
    "h1" : "wR",

    "a2" : "wP",
    "b2" : "wP",
    "c2" : "wP",
    "d2" : "wP",
    "e2" : "wP",
    "f2" : "wP",
    "g2" : "wP",
    "h2" : "wP",

    "a7" : "bP",
    "b7" : "bP",
    "c7" : "bP",
    "d7" : "bP",
    "e7" : "bP",
    "f7" : "bP",
    "g7" : "bP",
    "h7" : "bP",

    "a8" : "bR",
    "b8" : "bN",
    "c8" : "bB",
    "d8" : "bQ",
    "e8" : "bK",
    "f8" : "bB",
    "g8" : "bN",
    "h8" : "bR",
});

export const square2coord = (square, orientation) => {
    const x = orientation ? 
        square.charCodeAt(0) - 'a'.charCodeAt(0) :
        7 + 'a'.charCodeAt(0) - square.charCodeAt(0);
    const y = orientation ? 
        square.charCodeAt(1) - '1'.charCodeAt(0) :
        7 + '1'.charCodeAt(0) - square.charCodeAt(1);
    return { x, y };
};

export const coord2square = (c, orientation) =>
orientation ?
    String.fromCharCode('a'.charCodeAt(0) + 7 - c.x) +
    String.fromCharCode('1'.charCodeAt(0) + 7 - c.y)
:
    String.fromCharCode('a'.charCodeAt(0) + c.x) +
    String.fromCharCode('1'.charCodeAt(0) + 7 - c.y)