import React, {useCallback, useReducer} from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import './NewPlace.css';


const formReducer = (state, action) => {
        switch(action.type) {
            case 'INPUT_CHANGE':
                let formIsValid = true;
                for(const inputId in state.inputs) {
                    if(inputId === action.inputId) {
                        formIsValid = formIsValid && action.isValid;
                    } else {
                        formIsValid = formIsValid && state.inputs[inputId].isValid;
                    }
                }
                return {
                    ...state,
                    inputs: {
                        ...state.inputs,
                        [action.inputId]: {value: action.value, isValid: action.isValid}
                    },
                    isValid: formIsValid
                }
            default:
                return state;
        }
};

const NewPlace = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false

    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE', 
            value: value, 
            isValid: isValid, 
            inputId: id
        });
    }, []);

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend
    }


    return (
        <form className='place-form'>
            <Input 
            id="title"
            type='text' 
            label='Title' 
            element="input" 
            validators={[VALIDATOR_REQUIRE()]} 
            onInput={inputHandler}
            errorText='Please enter a valid title.' />
            <Input 
            id="description"
            label='Description' 
            element="textarea" 
            validators={[VALIDATOR_MINLENGTH(5)]} 
            onInput={inputHandler}
            errorText='Please enter a valid description with at least 5 characters.' />
            <Input 
            id="address"
            label='Address' 
            element="input" 
            validators={[VALIDATOR_REQUIRE()]} 
            onInput={inputHandler}
            errorText='Please enter a valid address.' />
            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
        );
};

export default NewPlace;