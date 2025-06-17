import { DialogContentText, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import React from "react";
import {
  POSSIBLE_NON_START_WITH_ZERO_NUMBER_FIELDS,
  POSSIBLE_TEXTAREA_FIELDS,
} from "../utils/constants";

const DataPreview = ({ open, data: dialogData, onClose }) => {
  if (!dialogData || !open) {
    return null;
  }

  POSSIBLE_NON_START_WITH_ZERO_NUMBER_FIELDS.map((numberField) => {
    if (!!dialogData[numberField] && dialogData[numberField].length) {
      dialogData[numberField] = Number(dialogData[numberField]).toString();
    }
  });

  POSSIBLE_TEXTAREA_FIELDS.map((textareaField) => {
    if (!!dialogData[textareaField]) {
      dialogData[textareaField] = dialogData[textareaField]?.includes("\n")
        ? dialogData[textareaField]?.replaceAll("\n", "<br />")
        : dialogData[textareaField];
    }
  });

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>Preview data</DialogTitle>
      <DialogContent>
        Formatted without new line or line break character
        <pre className="dialog-content-pre">
          <DialogContentText
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(dialogData, null, 2),
            }}
          ></DialogContentText>
        </pre>
      </DialogContent>
      <DialogContent>
        Unformatted as-is stringified json
        <pre className="dialog-content-pre">
          <DialogContentText>
            {JSON.stringify(dialogData, null, 2)}
          </DialogContentText>
        </pre>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>CLOSE</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DataPreview;
