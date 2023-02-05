import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./contactuscss.css";

const Contact = () => {
  const [email, setemail] = useState("");
  const [body, setbody] = useState("");

  const handlesubmit = () => {
    window.open(`mailto:vermaditi2020@gmail.com?subject=Sample&body=${body}`);
  };
  return (
    <div className="contactUs">
      <title>Contact</title>

      <div className="headerContact">
        <img
          className="imageContact"
          src="https://i.imgur.com/7rwaigw.jpg"
          alt="contactImage"
        />
        <div className="text">
          <h2>Contact</h2>
        </div>
      </div>

      <div className="card-contact">
        <div className="sendMsg">
          <h4>Send Us A Message</h4>
          <div className="inputContact">
            {/* <InputGroup width="450px">
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon className="envolope" color="gray.300" />}
              /> */}

            <TextField
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              placeholder="Your Email Address"
            />
            {/* </InputGroup> */}
          </div>
          <div className="textAreaCnt">
            <TextField
              value={body}
              onChange={(e) => setbody(e.target.value)}
              placeholder="How Can We Help"
              multiline
              rows={4}
            />
          </div>
          <br></br>
          <br></br>
          <div className="contentContact">
            <Button
              onClick={handlesubmit}
              variant="contained"
              size="180px"
              className="contactBtn"
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="showAdrss">
          <div className="box">
            <div className="iconCtn">
              {/* <GiPositionMarker opacity="0.8" /> */}
            </div>
            <div className="adressCtn">
              <h3> Address</h3>
              <p>
                Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                US
              </p>
            </div>
          </div>
          <div className="box">
            <div className="iconCtn">
              {/* <HiOutlinePhone opacity="0.8" /> */}
            </div>
            <div className="adressCtn">
              <h3>Lets Talk</h3>
              <p className="infoCtn">0657964665</p>
            </div>
          </div>
          <div className="box">
            <div className="iconCtn">{/* <EmailIcon opacity="0.8" /> */}</div>
            <div className="adressCtn">
              <h3>Sale Support</h3>
              <p className="infoCtn">Store@gmail.com</p>
            </div>
          </div>
          {/* <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <EmailIcon opacity="0.8" />
              </Grid>
              <Grid item xs={10}>
                <h3>Sale Support</h3>
              </Grid>
            </Grid>
          </Box> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
