import React, { PureComponent } from 'react';

class SecondNumber extends PureComponent {

    // Firstnumber componenti her degistiginde
    // Secondnumber componenti degismemesine ragmen
    // Tekrar yukleniyor gereksiz maliyetin
    // Onune gecmek icin bu yapiyi kullandik
    // Pure component ayni islevi goruyor
    //shouldComponentUpdate(nextProps, nextState) {
    //    return nextProps.secondNumber !== this.props.secondNumber;
    //}

    render() {
        return (
            <div>
                { this.props.secondNumber}
            </div>
        );
    }
}

export default SecondNumber;

