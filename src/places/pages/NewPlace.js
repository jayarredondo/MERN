import React from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/form-hook';
import './PlaceForm.css';



const NewPlace = () => {
    const [formState, inputHandler] = useForm({
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        false
    );

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