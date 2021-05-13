import React, { useEffect, useState } from 'react';
import Keyboard from './keyboard';
import Img from './img';

import Tried from './tried';


let tiles = []
var words = require('an-array-of-english-words')
let word = words[Math.round(Math.random()* words.length - 1)].toUpperCase()



function Manager(props) {
    const [counter, setCounter] = useState(0);
    const [gameOver,setGameOver] = useState(false);
    const [played,setPlayed] = useState("");
    const [correctLetters, setCorrectLetters] = useState([]);
    const [incorrect, setIncorrect] = useState(0);
    const [correct, setCorrect] = useState(0);

    useEffect(()=>{
        makeGame();
        setCounter(counter + 1);
      
       
    })
    
    useEffect(()=>{
       // console.log(played)
        if (!word.includes(played[played.length-1])) {
            setIncorrect(incorrect + 1);
            console.log('Wrong');
        } 
        else{
            setCorrect(correct + 1);
        }

        if(incorrect >= 6){
            alert(word);
        }
        
        if(correct === word.length - getDupes(word)){
            alert("WINNER");
        }
    },[played])
    

    function getDupes(wordP) {
        let dupes = 0;
        let tried = [];
        for (let i = 0; i < wordP.length; i++) {
            if (tried.includes(wordP[i])) {
                //console.log(tried)
                break;
            }

           for (let j = 0; j < wordP.length; j++) {
                if (wordP[i] === wordP[j] && i !== j) {
                    dupes++;
                    tried.push(wordP[i]);

            } 
        }   
    }
 
    return dupes;
}

    function makeGame() {
        tiles = []
        for (let i = 0; i < word.length; i++) {
            if (correctLetters.includes(word[i])) {
                tiles.push(<div><h1>{word[i]}</h1></div>);
            } else {
                tiles.push(<div><h1>_</h1></div>);
            }
        }
    }

  //
    return (
        <div>
            <Tried/>
            <Img currentState={incorrect}/>
            <div className = 'tiles'>{tiles}</div>
            <Keyboard chosenWord = {word} gameOver = {gameOver} played = {played} setPlayed = {setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters}/> 
           
        </div>
    );
}



export default Manager;