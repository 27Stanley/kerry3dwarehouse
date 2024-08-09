import React, { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  IconButton,
  Switch,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Product = {
  id: number;
  image: string;
  cost: number;
  description: string;
  disabled: boolean;
};

type Props = {};

const schema = yup.object().shape({
  image: yup.string().required("Image URL is required"),
  cost: yup
    .number()
    .positive("Cost must be a positive number")
    .required("Cost is required"),
  description: yup.string().required("Description is required"),
});

const AdminDashboard: React.FC<Props> = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const { control, handleSubmit, reset, setValue } = useForm<Product>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Product) => {
    if (isEditing && editId !== null) {
      setProducts(
        products.map((product) =>
          product.id === editId ? { ...data, id: editId } : product
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      const newProduct = { ...data, id: Date.now(), disabled: false };
      setProducts([...products, newProduct]);
    }
    reset();
  };

  const handleEdit = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setValue("image", product.image);
      setValue("cost", product.cost);
      setValue("description", product.description);
      setIsEditing(true);
      setEditId(id);
    }
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleDisable = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, disabled: !product.disabled }
          : product
      )
    );
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "image", headerName: "Image", width: 150 },
    { field: "cost", headerName: "Cost", type: "number", width: 110 },
    { field: "description", headerName: "Description", width: 160 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleEdit(params.row.id)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
          <Switch
            checked={!params.row.disabled}
            onChange={() => handleDisable(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="image"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Image URL"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="cost"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Cost"
                    type="number"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Description"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                {isEditing ? "Update" : "Add"} Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Paper elevation={3} style={{ height: 400 }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
