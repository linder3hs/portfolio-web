import { useState } from "react";
import { Dialog, DialogContent, Button, Grid, TextField } from "@mui/material";
import { storeData } from "../../service/firebase";

const StoreBlog = ({ fetchData }) => {
  const [values, setValues] = useState({
    name: "",
    author: "",
    description: "",
  });

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(!open);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const fetchStoreData = async () => {
    storeData("/blogs", values);
    await fetchData();
    handleOpenDialog();
  };

  return (
    <>
      <Button onClick={handleOpenDialog} color="primary" variant="contained">
        Crear Blog
      </Button>
      <Dialog open={open} onClose={handleOpenDialog}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h4>Crear Blog</h4>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nombre del blog"
                fullWidth
                name="name"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Autor del blog"
                fullWidth
                name="author"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contenido del blog"
                fullWidth
                multiline
                rows={5}
                name="description"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={fetchStoreData}
                color="secondary"
                variant="contained"
              >
                Crear Blog
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StoreBlog;
