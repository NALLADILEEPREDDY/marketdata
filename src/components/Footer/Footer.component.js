import { Divider, Typography } from "@material-ui/core";
import React from "react";
import Link from "@material-ui/core/Link";
import "./footer.css";
export default function Footer(props) {
  return (
    <div className="jss6">
      <Divider component="hr" />
      <div className="jss7">
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://material-ui.com/">
            Market Price
          </Link>
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </div>
    </div>
  );
}
