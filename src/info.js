import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value,
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    });
    const { name, nickname } = state;
    const onChnage = (e) => {
        dispatch(e.target);
    };

    return (
        <div>
            <h1> 이름과 닉네임을 적어보지 않으련?</h1>
            <div>
                이름 : <input name="name" value={name} onChange={onChnage} />
                <br />
                닉네임 : <input name="nickname" value={nickname} onChange={onChnage} />
            </div>
            <br />
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div>
    );
};

export default Info;
