import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClick}
                style={{border:"1px solid",backgroundColor:"white"}}
                endIcon={<ExpandMoreOutlinedIcon>send</ExpandMoreOutlinedIcon>}>
                Assets
            </Button>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Assets1</MenuItem>
                <MenuItem onClick={handleClose}>Assets2</MenuItem>
                <MenuItem onClick={handleClose}>Assets3</MenuItem>
            </Menu>
        </div>
    );
}