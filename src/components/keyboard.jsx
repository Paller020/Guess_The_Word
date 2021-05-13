import React from 'react';
import Letter from './Letter.jsx';


function Keyboard({chosenWord,gameOver,played,setPlayed, correctLetters, setCorrectLetters}) {
    return (
        <div className ='tiles'>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"A"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"B"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"C"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"D"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"E"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"F"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"G"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"H"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"I"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"J"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"K"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"L"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"M"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"N"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"O"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"P"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"Q"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"R"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"S"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"T"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"U"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"V"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"W"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"X"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"Y"}/>
            <Letter chosenWord={chosenWord} gameOver={gameOver} played={played} setPlayed={setPlayed} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} letter={"Z"}/>
        </div>
    );
}

export default Keyboard;