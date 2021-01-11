import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const MyRadioButton = ({ radioButton, handleClick, labelText1, labelText2, disabledButton1, disabledButton2 }) => {

    return (
        <FormControl component="fieldset">
            <RadioGroup row={true} defaultValue='radio-button1' onChange={() => handleClick(radioButton)}>
                <FormControlLabel value='radio-button1' control={<Radio color="primary" />} label={labelText1} disabled={disabledButton1} />
                <FormControlLabel value='radio-button2' control={<Radio color="primary" />} label={labelText2} disabled={disabledButton2} />
            </RadioGroup>
        </FormControl>
    );
}

export default MyRadioButton;
