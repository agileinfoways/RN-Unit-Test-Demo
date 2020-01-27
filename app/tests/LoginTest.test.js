import React, { Component } from 'react';
import renderer from 'react-test-renderer'
import LoginScreen from '../LoginScreen'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findById } from '../utils';


configure({ adapter: new Adapter() });

describe('Login', () => {

    let component;
    let textInput;

    const defaultState = { text: '' }

    beforeEach(function () {
        component = shallow(<LoginScreen />)
        textInput = component.find('TextInput')
    });

    // it('has default state', function () {
    //     expect(component.state()).to.eql(defaultState)
    // })

    it('should change state if email is entered', () => {
        const instance = renderer.create(<LoginScreen />).getInstance();

        instance.handleUsernameChange('abc')
        expect(instance.state.email).toEqual('abc')

        instance.handlePasswordChange("123")
        expect(instance.state.password).toEqual('123')

    })

    it('check button click', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<LoginScreen handleLoginPress={mockCallBack} />));
        // console.log(button.debug());

        expect(button.state('email')).toEqual('');
        expect(button.state('password')).toEqual('');

        let email = button.find('[testID="email"]')
        expect(email).toHaveLength(1);
        email.first().props().onChangeText('abc@gmail.com');

        // button.instance().state.email = "abc"
        // button.state('email').value = "abc";
        // email.find('TextInput').first().props().onChangeText('waffles');
        // email.simulate('change', { target: { value: "abc" } })

        let password = button.find('[testID="password"]')
        expect(password).toHaveLength(1);
        password.first().props().onChangeText('123');

        let loginButton = button.find('[testID="loginButton"]')
        expect(loginButton).toHaveLength(1);
        loginButton.first().props().onPress()
        // loginButton.simulate('onPress', { target: { email: "abc", password: 123 } })

        // expect(button.state('email')).toEqual('abc');
        // expect(button.state().email).toEqual('abc')
        // expect(button.state().password).toEqual('123')

        // expect(button.instance().onChange).toBeCalledWith(true);
        // button.find('button').at(0).simulate('click');
        // button.dive().simulate('press')
        // expect(mockCallBack).toHaveBeenCalled();
        // expect(mockCallBack.mock.calls.length).toEqual(1);
    })


})

// describe('a button', () => {
//     it('should be present', () => {
//         let tree = renderer.create(
//             <LoginScreen />
//         ).toJSON()
//         console.log(tree)
//     })
// })

// it('should render email input', () => {
//     let tree = renderer.create(<LoginScreen />).toJSON()

//     let handleLoginMock = jest.fn()
//     // expect(findById(tree, 'email')).toBeDefined()
//     // expect(findById(tree, 'password')).toBeDefined()
//     // expect(findById(tree, 'loginButton')).toBeDefined()

//     let loginComponent = renderer.create(<LoginScreen handleLoginPress={handleLoginMock} />).getInstance()
//     loginComponent.handleLoginPress()

//     loginComponent.handlePasswordChange("123")
//     loginComponent.handleUsernameChange("abc")
//     // expect(loginComponent.state.password).toEqual('123')

//     expect(handleLoginMock).toBeCalled()

// })