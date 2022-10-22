import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {changeLoadAC, InType} from "./bll/loadingReducer";

function HW10() {


    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
    let dispatch = useDispatch()

    const setLoading = () => {
        dispatch(changeLoadAC(true))
        setTimeout(() => {
            dispatch(changeLoadAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10


            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
