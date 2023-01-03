import React, {useState} from "react";
import './Form.css';

export function Form({onAdd}) {
    const [name, setName] = useState("");
    const [zone, setZone] = useState("");

    const nameValue = (e) => {
        const {value} = e.target;
        setName(value);
    }
    const zoneValue = (e) => {
        const {value} = e.target;
        setZone(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newObject = {name, zone};
        onAdd(newObject);
        setName('');
        setZone('');
    }
    return (
        <form className="cap" onSubmit={handleSubmit}>
            <div className="title column">
                <label htmlFor="name" className="title-cap">Название</label>
                <input 
                type="text" 
                value = {name}
                name="name"
                onChange={nameValue}
                className="field"
                required />
            </div>
            <div className="title column">
                <label htmlFor="timezone" className="title-cap">Временная зона</label>
                <input 
                type="number" 
                value = {zone}
                name="zone"
                onChange={zoneValue}
                max='14'
                min='-12'
                className="field"
                required />
            </div>
            <button className="field" type="submit">Добавить</button>
        </form>

    )
}

  