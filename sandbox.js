const scores = [
    {player: 'kevin', score: 50},
    {player: 'penny', score: 30},
    {player: 'kevin', score: 70},
    {player: 'johnny', score: 60}
];

const x = scores.reduce((acc, curr) => {
    if(curr.player === 'kevin'){
        acc += curr.score
    } return acc
},0);

console.log(x);