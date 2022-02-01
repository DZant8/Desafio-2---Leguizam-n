import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ItemCount = () => {

    const [counter, setCounter] = useState(0);

    const aumentarContador = () => {
        setCounter(counter + 1);
    };
    const disminuirContador = () => {
        setCounter(counter - 1);
    };

    return(
        <div className="contador">
            <h1> Contador: {counter}</h1>
            <div className='btn'>
                <div className='btn-section'>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success" onClick={aumentarContador}>Aumentar</Button>
                        <Button variant="outlined" color="error" onClick={disminuirContador}>Disminuir</Button>
                    </Stack>
                </div>
            </div>
        </div>
    );
}
export default ItemCount;