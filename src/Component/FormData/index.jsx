import React from "react";

class FormData extends React.Component{
    state = {
        inputValue:{
            valueFirst: null,
            valueSecond: null,
            valueThird: null,
            valueFourth: null,
            valueFifth: null,
        },
        buttonValue:{
            errorFirstName: false,
            errorSecondName: false,
            errorThirdName: false,
            errorFourthName: false,
            errorFifthName: false,
        },
        confirmErrorValue : false,
    }





    changeInputName = (e)=>{
        const {inputValue} = this.state
        // this.setState({targetNamePt: e.target.name})
        // const {userFormData} = this.state
        // userFormData[e.target.name] = e.target.value
        // this.setState({userFormData})
        inputValue.valueFirst = e.target.value
        this.setState({inputValue})
    }


    changeInputPassword = (e)=>{
        const {inputValue} = this.state
        inputValue.valueSecond = e.target.value
        this.setState({inputValue})
    }


    changeInputPasswordConfirm = (e)=>{
        const {inputValue} = this.state
        inputValue.valueThird = e.target.value
        this.setState({inputValue})
    }


    changeInputEmail = (e)=>{
        const {inputValue} = this.state
        inputValue.valueFourth = e.target.value
        this.setState({inputValue})
    }


    changeInputNumber = (e)=>{
        const {inputValue} = this.state
        inputValue.valueFifth = e.target.value
        this.setState({inputValue})
    }

    clickTakeInput = ()=>{
        const {buttonValue,inputValue} = this.state
        buttonValue.errorFirstName = !inputValue.valueFirst
        buttonValue.errorSecondName = !inputValue.valueSecond
        buttonValue.errorThirdName = !inputValue.valueThird
        buttonValue.errorFourthName = !inputValue.valueFourth
        buttonValue.errorFifthName = !inputValue.valueFifth
        if((this.state.inputValue.valueSecond !== this.state.inputValue.valueThird)
            &&
            (this.state.buttonValue.errorThirdName === false && this.state.buttonValue.errorSecondName === false)){
            this.setState({confirmErrorValue: true})
        }else{
            this.setState({confirmErrorValue: false})
        }
        this.setState({buttonValue,inputValue})
        //
        // if(this.state.value1){
        //     this.setState({errorFirstName: false})
        // }else {                                                 // nuyn banna inch verevi grac@
        //     this.setState({errorFirstName: true})
        // }

        // if(this.state.value1){
        //     this.setState({clickValue1: null})
        // }
        // else if(this.state.value1  !== null){
        //     this.setState({clickValue1: this.state.value1})     // im grac sxal dzevna
        // }else{
        //     this.setState({clickValue1: null})
        // }

    }


    render() {
        return <div className="form-main">
            {console.log(this.state.confirmErrorValue)}
            <div className="formData">
                <input
                    name={'name'}
                    className={this.state.buttonValue.errorFirstName? "name" : null}
                    placeholder="Name"
                    onChange={this.changeInputName}
                    type="text"/>
                {this.state.buttonValue.errorFirstName? <div className='nameeror'>Required field</div> : null}
                <input
                    name={'password'}
                    className={this.state.buttonValue.errorSecondName? "name" : null}
                    placeholder="Password"
                    onChange={this.changeInputPassword}
                    type="password"/>
                {this.state.buttonValue.errorSecondName? <div className='nameeror'>Required field</div> : null}
                <input
                    name={'confirm password'}
                    className={this.state.buttonValue.errorThirdName? "name" : null}
                    placeholder="confirm Password"
                    onChange={this.changeInputPasswordConfirm}
                    type="password"/>
                {this.state.buttonValue.errorThirdName? <div className='nameeror'>Required field</div> : null}
                {this.state.confirmErrorValue? <div className='nameerorpassword'>Passowrd values must be horny</div> : null}
                <input
                    name={'email'}
                    className={this.state.buttonValue.errorFourthName? "name" : null}
                    placeholder="email"
                    onChange={this.changeInputEmail}
                    type="email"/>
                {this.state.buttonValue.errorFourthName? <div className='nameeror'>Required field</div> : null}
                <input
                    name={'number'}
                    className={this.state.buttonValue.errorFifthName? "name" : null}
                    placeholder="number"
                    onChange={this.changeInputNumber}
                    type="number"/>
                {this.state.buttonValue.errorFifthName? <div className='nameeror'>Required field</div> : null}
                <button onClick={this.clickTakeInput}>Registration</button>
            </div>
        </div>
    }
}

export default FormData