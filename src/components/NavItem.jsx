import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ active, Icon, name, target }) {
  return (
    <Link to={target} style={{ textDecoration: "none" }}>
      <Box
        px={3}
        sx={{
          color: active ? "text.primary" : "text.secondary",
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          cursors: "pointer",
          fontSize: 14,
          "&:hover": { color: "text.primary" },
          transitions: "color 0.2s ease-in-out",
          fontSize: 14,
        }}
      >
        {Icon && <Icon sx={{ fontSize: 28, marginRight: 1 }} />}
        {name}
      </Box>
    </Link>
  );
}
