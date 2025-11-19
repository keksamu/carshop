import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type { Tcar } from '../Types';

type EditCarProps = {
    car: Tcar;
    handleEdit: (url: string, car: Tcar) => void;
    url: string;
}

export default function EditCar(props: EditCarProps) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState<Tcar>(props.car);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleEdit(props.url, car);
    handleClose();
  };

  return (
    <React.Fragment>
        <Button size="small" onClick={handleClickOpen}>
          Edit
        </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="edit-form">
            <TextField
              autoFocus
              required
              margin="dense"
              name="brand"
              label="Brand"
              type="text"
              fullWidth
              variant="standard"
              value={car.brand}
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              name="color"
              label="Color"
              type="text"
              fullWidth
              variant="standard"
              value={car.color}
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              name="fuel"
              label="Fuel"
              type="text"
              fullWidth
              variant="standard"
              value={car.fuel}
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              name="model"
              label="Model"
              type="text"
              fullWidth
              variant="standard"
              value={car.model}
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              name="modelYear"
              label="Model Year"
              type="number"
              fullWidth
              variant="standard"
              value={car.modelYear}
              onChange={handleChange}
            />
            <TextField
              required
              margin="dense"
              name="price"
              label="Price"
              type="number"
              fullWidth
              variant="standard"
              value={car.price}
              onChange={handleChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="edit-form">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}