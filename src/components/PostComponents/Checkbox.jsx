import { Checkbox } from "@mui/material";

const TagCheckbox = ({ t, cb, selected }) => {
    const label = { inputProps: { 'aria-label': t.label } };

    const handleChange = (e) => {
        cb(e);
    };

    return (
        <Checkbox
            {...label}
            icon={t.icon}
            checkedIcon={t.checkedIcon}
            sx={{
                '&.Mui-checked': {
                    color: "#DAA520",
                },
            }}
            value={t.label}
            checked={selected}
            onChange={handleChange}
            name="tags"
        />
    );
};

export default TagCheckbox;
