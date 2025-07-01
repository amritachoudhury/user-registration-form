import { DialogContentText, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import React from "react";
import { handleNewLineInTextArea } from "../utils/dynamic-render-helper";

const DataPreview = ({ open, data: dialogData, onClose }) => {
  if (!dialogData || !open) {
    return null;
  }

  const stringifiedJson = JSON.stringify(handleNewLineInTextArea(dialogData), null, 2);

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>Preview data</DialogTitle>
      <DialogContent>
        Using innerHTML to show \n as new lines
        <pre className="dialog-content-pre">
          <DialogContentText
            dangerouslySetInnerHTML={{
              __html: stringifiedJson,
            }}
          ></DialogContentText>
        </pre>
      </DialogContent>
      <DialogContent>
        Without using innerHTML
        <pre className="dialog-content-pre">
          <DialogContentText>{stringifiedJson}</DialogContentText>
        </pre>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>CLOSE</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DataPreview;
