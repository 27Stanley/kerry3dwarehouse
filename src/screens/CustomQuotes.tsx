type Props = {};

import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid } from '@mui/material';

const CustomQuotes: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState('');
  const [addtionalInfo, setAddtionalInfo] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    if (file) {
      formData.append('file', file);
    }
    formData.append('link', link);
    

    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Request submitted successfully!');
    } else {
      alert('Failed to submit request.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Request a Custom Quote
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                hidden
                accept=".zip"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Link to 3D Model"
              fullWidth
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit Request
            </Button>
          </Grid>
          <Grid item xs={12}>
          <TextField
              label="Additional Information?"
              fullWidth
              value={addtionalInfo}
              onChange={(e) => setAddtionalInfo(e.target.value)}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CustomQuotes;
