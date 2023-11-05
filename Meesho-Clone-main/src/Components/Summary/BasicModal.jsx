import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import "./modal.css";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../Redux/action";

const style = {
  position: "absolute",
  top: "53%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const handleClose = () => {
    window.scrollTo(0, 0);
    navigate("/");
    dispatch(emptyCart([]));
  };
  window.scrollTo(0, 0);
  return (
    <div id="modal-box" onClick={handleClose}>
      <Box sx={style}>
        <img
          className="order-success"
          src="https://i.pinimg.com/originals/90/13/f7/9013f7b5eb6db0f41f4fd51d989491e7.gif"
          alt=""
        />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Your Order Has Been Placed Successfully
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Thank you for ordering from Meesho
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Order Id: #meesho1603200
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <Link className="continue" to="/products">
            Continue Shopping!!
          </Link>
        </Typography>
      </Box>
    </div>
  );
}
