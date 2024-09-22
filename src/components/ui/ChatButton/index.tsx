"use client";
// components/ChatButton.tsx
import React, { useState } from "react";
import {
  Box,
  Fab,
  Paper,
  IconButton,
  TextField,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

const FloatingChat: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 80,
        right: 16,
        width: 300,
        height: 400,
        zIndex: 1000,
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>Chat en Vivo</Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Avatar sx={{ mr: 1 }} />
        <Typography variant="body2" color="text.secondary">
          <strong>Soporte</strong>
          Bryan Navarrete
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: "auto", mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Hola, ¿en qué puedo ayudarte?
        </Typography>{" "}
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField
          autoFocus
          margin="dense"
          id="message"
          label="Escribe tu mensaje"
          type="text"
          fullWidth
          variant="standard"
        />
        <Button variant="contained" sx={{ mt: 1, width: "100%" }}>
          Enviar
        </Button>
      </Box>
    </Paper>
  );
};

const ChatButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Botón flotante */}
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <Fab color="primary" onClick={handleClickOpen}>
          <ChatIcon />
        </Fab>
      </Box>

      {/* Componente flotante del chat */}
      {open && <FloatingChat onClose={handleClose} />}
    </>
  );
};

export default ChatButton;
