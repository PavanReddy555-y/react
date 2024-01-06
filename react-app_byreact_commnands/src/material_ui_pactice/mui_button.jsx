import { Button } from "@mui/material";

export default function ButtonCmpnt() {
  return (
    <div>
      <Button
        variant="contained"
        // disabled
        onClick={() => console.log("mui button clicked.")}
      >
        First Material Ui Component{" "}
      </Button>
    </div>
  );
}
