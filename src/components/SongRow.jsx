import React from "react";
import { Grid, Box, Typography, Avatar, Skeleton } from "@mui/material";
import { formatTime } from "../utils/formatTime";
import { playSongFromList } from "../store/playerSlice";
import { useDispatch } from "react-redux";

export default function SongRow({
  title,
  image,
  spotifyApi,
  contextUri,
  artist,
  position,
  album,
  seconds,
  duration,
  loading,
}) {
  const dispatch = useDispatch();

  const onRowClick = () => {
    const song = {
      context_uri: contextUri,
      offset: { position },
      position_ms: 0,
      title,
      image: image ? image : {},
      artist,
      duration,
      position,
    };
    dispatch(playSongFromList({ spotifyApi, song }));
  };

  return (
    <Grid
      container
      px={2}
      py={1}
      sx={{
        width: "100%",
        color: "text.secondary",
        fontSize: 14,
        cursor: "pointer",
        "&:hover": { bgcolor: "#f0790030" },
      }}
      onClick={onRowClick}
    >
      <Grid
        item
        sx={{ width: 35, display: "flex", alignItems: "center", fontSize: 16 }}
      >
        {loading ? (
          <Skeleton variant="text" width={14} height={24} />
        ) : (
          position
        )}
      </Grid>
      <Grid
        item
        sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}
      >
        {loading ? (
          <Skeleton variant="rectangular" width={40} height={40} />
        ) : (
          <Avatar variant="square" src={image} />
        )}
        <Box>
          <Typography sx={{ fontSize: 16, color: "text.primary" }}>
            {loading ? (
              <Skeleton variant="text" width={130} height={24} />
            ) : (
              title
            )}
          </Typography>
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
            {loading ? (
              <Skeleton variant="text" width={50} height={24} />
            ) : (
              artist
            )}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
        {loading ? <Skeleton variant="text" width={50} height={24} /> : album}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {loading ? (
          <Skeleton variant="text" width={50} height={24} />
        ) : (
          formatTime(seconds)
        )}
      </Grid>
    </Grid>
  );
}
