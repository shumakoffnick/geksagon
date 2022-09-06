import React from "react";
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux";
import { createShortLink, selectLoading } from '../src/store/slices/linkSlice'
import { Shortens } from "Shortens";
const LinkPage = ()=>{
    const loading = useSelector(selectLoading)
    
    const dispatch = useDispatch()
    const {
        register,
        formState:{errors},
        handleSubmit,
        reset
    } = useForm({
        mode: 'onSubmit'
    });

    const onSubmit = ({Url}) =>{
        dispatch(createShortLink(Url))
        reset()
    }
    return(
        <>
        <div className="container">
            <form className="form"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}>
                <input
                type="url" placeholder="Shorten a link here" className="LinkPageInput" {...register('Url', {
                    required: 'Please add a link',
                    pattern:{
                        value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                        message: 'Please enter a valid url'
                    }
                })}
                
                disabled={loading === 'loading'}
                />
                <button className="linkBtn" variant="square" type="submit" size="medium" disabled={loading === 'loading'}>Shorten it!</button>
                {errors.Url && (
                    <div className="linkError">
                        {errors.Url.message}
                    </div>
                )}
            </form>
        </div>
        <Shortens/>
        </>
    )
}
export default LinkPage