import React, { Component } from 'react';

class Letter extends Component {
    constructor(props){
        super(props)
        this.click = false;
        this.isCorrect = this.props.chosenWord.includes(this.props.letter);
    }

    handleClick(){
        if (this.click) {
            return;
        }
        this.click=true;
        if(this.props.played == "Click a button to start"){
            this.props.updatePlayed(this.props.letter)
            return;
        }
        this.props.setPlayed(this.props.played + ", " + this.props.letter)
        
        if (this.isCorrect) {
            let copy = [...this.props.correctLetters];
            copy.push(this.props.letter);
            this.props.setCorrectLetters(copy);
        }

        console.log(this.props.correctLetters)
    }

    render() {
        if (this.props.played == "") {
            this.click = false;
        }
        
        const style = {
            backgroundColor: `${this.click? this.isCorrect? '#00ff00' : '#ff0000de' : ''}`
        }

        return (
            <div className="minContent">
                <button style={style} onClick={()=>{this.handleClick()}} className={`letter ${this.click || this.props.gameOver?'click': ''}`} >{this.props.letter}</button>
            </div>
        );
    }
}

export default Letter;