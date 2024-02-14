import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 150,
        bgcolor: "inherit",
      }}
    >
      <Box>
        <Divider>
          <Typography color="grey.700" variant="h5">
            Built by Balivada Sai Karthik 20NU1A0505
          
          </Typography>
        </Divider>
      </Box>
    </Box>
  );
}
