import classes from './input.module.css';

function Input({ value, onChange, label}) {
    return (
        <div className='converter-input-wrapper'>
            {label && <label>{label}</label>}
            <input
                type='number'
                value={value}
                onChange={e => onChange(e.target.value)}
                className={classes.converterInput}
            />
        </div>
    );
}

export default Input;