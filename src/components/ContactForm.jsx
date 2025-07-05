
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../styles/contacto.css";

const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [open, setOpen] = useState(false);

 
  const handleSubmit = (e) => {
    e.preventDefault();

   
    setOpen(true);

   
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
  };

  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <main className="formulario-container">
      <h2>¡Escribinos!</h2>
      <form className="contacto-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="asunto">Asunto</label>
        <input
          type="text"
          id="asunto"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          rows="5"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>

    
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          ¡Formulario enviado con éxito!
        </MuiAlert>
      </Snackbar>
    </main>
  );
};

export default ContactForm;

