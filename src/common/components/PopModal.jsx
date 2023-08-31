import { 
    Popover, 
    Typography 
} from "@mui/material";

import { 
    cellLocation 
} from "common/helpers/filterZones";

function PopModal({ open, anchorEl, hoverCell, handlePopoverClose, activity }) {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      sx={{
        pointerEvents: "none",
      }}
      onClose={handlePopoverClose}
      disableScrollLock={true}
      disableEnforceFocus
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "left",
      }}
    >
      <Typography sx={{ p: 2 }}>
        <Typography>
            Location: { open && hoverCell.row !== null && hoverCell.col !== null 
                ? cellLocation(hoverCell.row, hoverCell.col): ''}
        </Typography>
      </Typography>
    </Popover>
  );
}


export default PopModal;
