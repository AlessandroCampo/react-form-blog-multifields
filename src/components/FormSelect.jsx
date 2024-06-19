import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormSelect({ options, cb, name }) {
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value)
        cb(event);
    };

    return (
        <div className=''>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="select" sx={{
                    color: 'white',
                    '&.Mui-focused': {
                        color: 'white',
                    },
                }}>Category</InputLabel>
                <Select
                    labelId="select"
                    id="select"
                    value={category}
                    onChange={handleChange}
                    autoWidth
                    name={name}
                    label="Category"
                    sx={{
                        color: 'white',
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'lightgray',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'lightgray',
                        },
                        '.MuiSvgIcon-root': {
                            color: 'white',
                        }
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        Array.isArray(options) &&
                        options.map((o, i) => {
                            return <MenuItem
                                value={o}
                                key={`option${i}`}
                            >
                                {o}
                            </MenuItem>

                        })
                    }
                </Select>
            </FormControl>
        </div >
    );
}
