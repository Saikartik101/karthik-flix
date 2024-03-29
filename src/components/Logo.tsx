import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/routes/paths";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={MAIN_PATH.browse}>
      <Box
        component="img"
        alt="Netflix Logo"
        src="/assets/netflix-logo.png"
        width={130}
        height={40}
        sx={{
          ...sx,
        }}
      />
    </RouterLink>
  );
}
