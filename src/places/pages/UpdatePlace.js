import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';
import {useForm} from '../../shared/hooks/form-hook'
import './PlaceForm.css'


const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description: 'One of the most famous skyscrapers in the world.',
        imageUrl: 'https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9856644
        },
        creator: 'u1'
    },    
    {
        id:'p2',
        title:'Empire State Building',
        description: 'One of the most famous skyscrapers in the world.',
        imageUrl: 'https://newyorkyimby.com/wp-content/uploads/2020/09/DSCN0762-777x1036.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9856644
        },
        creator: 'u2'
    }
]

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true)

    const placeId = useParams().placeId;


    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        if(identifiedPlace) {
            setFormData({        
                title: {
                value: identifiedPlace.title,
                isValid: true
                },
            description: {
                value: identifiedPlace.description,
                isValid: true
                }
            }, 
            true
        );
    }
    setIsLoading(false);
    }, [setFormData, identifiedPlace]
    );


    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    if (!identifiedPlace) {
        return (
            <div className='center'>
                <Card>
                    <h2>Could not find place!</h2>
                </Card>
            </div>
        )
    }

    if(isLoading) {
        return (
            <div className='centerß'>
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input 
        id='title' 
        element='input' 
        type='text' 
        label='Title' 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText='Please enter a valid title.' 
        onInput={inputHandler} 
        initialValue={formState.inputs.title.value} 
        initialValid={formState.inputs.title.isValid} />
        <Input 
        id='description' 
        element='textarea' 
        label='Description' 
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText='Please enter a valid description at least 5 characters long.' 
        onInput={inputHandler} 
        initialValue={formState.inputs.description.value} 
        initialValid={formState.inputs.description.isValid} />
        <Button type='submit' disabled={!formState.isValid}>
            UPDATE PLACE
        </Button>
    </form>
    )};

export default UpdatePlace;