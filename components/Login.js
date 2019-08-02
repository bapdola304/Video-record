import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, CheckBox } from 'react-native'
import logo from '../assets/iwfa.png'
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TextField } from 'react-native-material-textfield';
import Reinput from 'reinput'

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";
class Login extends Component {
    state = {
        account : null,
        password : null
    };


    handleBlur = event => {
        // this.setState({ isFocused: !this.state.isFocused });
        // if (this.props.onBlur) {
        //     this.props.onBlur(event);
        // }
    };
    render() {
        const { isFocused } = this.state;
        const { onFocus, onBlur, ...otherProps } = this.props;
        return (
            <View>
                <Image source={logo} style={styles.img} />

                <View style={styles.container}>
                    {/* <Text style = {styles.text}>Account</Text>
                <TextInput
                    numberOfLines={4}
                    maxLength={40}
                    multiline={true}
                    selectionColor={LIGHT_GRAY}
                    underlineColorAndroid={
                        isFocused ? BLUE : LIGHT_GRAY
                    }
                    placeholder="Account"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={styles.textInput}
                    {...otherProps}
                />
                 <Text style = {styles.text}>Password</Text>
                <TextInput
                    numberOfLines={4}
                    maxLength={40}
                    multiline={true}
                    selectionColor={LIGHT_GRAY}
                    underlineColorAndroid={
                        isFocused ? BLUE : LIGHT_GRAY
                    }
                    placeholder="Password"
                    onFocus={this.handleFocus2}
                    onBlur={this.handleBlur}
                    style={styles.textInput}
                    {...otherProps}
                /> */}
                    <Reinput
                        label='Account'
                        height={200}
                        fontSize={20}
                        maxHeight={500}
                        underlineActiveColor='#48d9d9'
                        labelActiveColor='#48d9d9'
                        onChangeText = {this.onChangeText}

                    />
                    <Reinput
                        label='Password'
                        height={200}
                        fontSize={20}
                        maxHeight={500}
                        underlineActiveColor='#48d9d9'
                        labelActiveColor='#48d9d9'
                        style={styles.textInput}

                    />
                    <Sae
                    label={'Email Address'}
                    iconClass={'none'}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                    <View style = {styles.wrap}>
                        <View style = {styles.wrapcheckbox}>
                            <CheckBox />
                            <Text style={styles.text}>Keep me signed in</Text>
                        </View>
                        <View style = {styles.forgotpass}>
                            <Text style={styles.text}>Forgot password</Text>
                        </View>
                    </View>
                    <Button
                        onPress={() => alert('submit')}
                        title="Login"
                        color="#48d9d9"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }

    // return (
    //     <View>
    //         <Text>Account</Text>
    //         <TextInput 
    //         style = {styles.input} 
    //         maxLength = {40}  
    //         multiline = {true}
    //         numberOfLines = {4}
    //         onFocus = {() => alert(1)}
    //         />
    //          <Text>Password</Text>
    //         <TextInput 
    //         style = {styles.input} 
    //         maxLength = {40}  
    //         multiline = {true}
    //         numberOfLines = {4}
    //         onFocus = {() => alert(1)}
    //         />
    //   </View>
    // )

}
const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,

    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        width: 300
    },
    textInput: {
        // height: 60,
        // paddingLeft: 6,
        // width: 300,
        marginTop: 10,
        marginBottom: 20
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold'
    },
    img: {
        width: '100%'
    },
    wrap : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom : 20

    },
    wrapcheckbox : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
    },
    forgotpass : {
        marginRight : 0,
        alignItems : 'center',
        color : '#48d9d9'
    }
})

export default Login;