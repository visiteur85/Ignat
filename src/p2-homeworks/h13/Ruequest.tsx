import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {HomeworkApi} from "./api";

export const Ruequest = () => {
    const [check, setCheckedd] = useState(false)
    const [answer, setAnswer] = useState("");
    const [loading, isLoading] = useState(false);

    const sendReq = () => {
        isLoading(true)
        HomeworkApi.firstRequest(check).then((res) => {
            setAnswer(res.data.errorText)
            isLoading(false)

        }).catch((error) => {
            setAnswer(error.response ? error.response.data.errorText : error.message)
            isLoading(false)
        })
    }

    const testOnChange = (chaeck: boolean) => {
        setCheckedd(chaeck)
    }

    return (
        <div>
            {loading ? <span>... Загрузка</span> :
                <span>{answer}</span>}
            <SuperButton onClick={sendReq}>Send</SuperButton>
            <SuperCheckbox onChangeChecked={testOnChange}
                           checked={check}
            />
        </div>
    );
};

