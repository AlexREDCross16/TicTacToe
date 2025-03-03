import {useState} from "react";

export const Player = ({initialName, symbol}) => {
    const [playerName, setPlayerName] = useState(initialName);

    const [isEditing, setIsEditing] = useState(false);

    function handleEditing() {
        setIsEditing(!isEditing)
    }

    function handleChange (event) {
        setPlayerName(event.target.value)
    }

    return (<li>
            <span className='player'>
                {isEditing
                    ? <input type='text' required value={playerName} onChange={handleChange}/>
                    : <span className='player-name' >{playerName}</span>}

                <span className='player-symbol'>{symbol}</span>
            </span>
        <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>);
}