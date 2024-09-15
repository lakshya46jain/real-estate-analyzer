import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Button, TextField, Grid, Paper, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom theme for the real estate analyzer
const theme = createTheme({
    palette: {
        primary: {
            main: '#003366', // Deep blue for primary theme
        },
        secondary: {
            main: '#175156', // Light green for secondary buttons and accents
        },
        background: {
            default: '#f4f6f9', // Light grey background
        },
    },
    typography: {
        h2: {
            fontSize: '2.2rem',
            fontWeight: 700,
            color: '#003366', // Dark blue for headings
        },
        h5: {
            fontSize: '1.4rem',
            fontWeight: 500,
            color: '#003366',
        },
        body1: {
            fontSize: '1rem',
            color: '#555',
        },
    },
    spacing: 8,
});

function RealEstateApp() {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and register

    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    position: 'relative', // Ensures the background opacity doesn't affect the content
                    minHeight: '100vh',
                    display: 'flex', // Use flexbox
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center', // Center vertically
                    overflow: 'hidden',
                }}
            >
                {/* Pseudo-element for background with opacity */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url("/real-estate-bg.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.25, // Adjust opacity here
                        zIndex: -1, // Ensure it stays in the background
                    }}
                />

                <Container maxWidth="sm">
                    <Paper
                        elevation={6}
                        style={{
                            padding: `${theme.spacing * 4}px ${theme.spacing * 4}px`,
                            borderRadius: '20px',
                            paddingLeft: theme.spacing * 6,
                            paddingRight: theme.spacing * 6,
                        }}
                    >
                        <div style={{ padding: '25px 0' }}>
                            <Typography variant="h2" align="center" gutterBottom>
                                {isLogin ? 'Login' : 'Register'}
                            </Typography>

                            {isLogin ? <LoginForm /> : <RegisterForm />}

                            <Grid container justifyContent="center" style={{ marginTop: theme.spacing * 2 }}>
                                <Button onClick={toggleForm} color="secondary">
                                    {isLogin ? "Don't have an account? Register here!" : 'Already have an account? Login here!'}
                                </Button>
                            </Grid>
                        </div>
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider >
    );
}

// Login Form Component
function LoginForm() {
    return (
        <div style={{ padding: '0 25px' }}>
            <form>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ style: { borderRadius: '10px' } }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ style: { borderRadius: '10px' } }}
                />
                <div style={{ padding: '15px 0' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: theme.spacing * 2, padding: '10px 0', borderRadius: '10px' }}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
}

// Register Form Component
function RegisterForm() {
    return (
        <div style={{ padding: '0 25px' }}>
            <form>
                <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ style: { borderRadius: '10px' } }}
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ style: { borderRadius: '10px' } }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ style: { borderRadius: '10px' } }}
                />
                <TextField
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    InputProps={{ style: { borderRadius: '10px' } }}
                />
                <div style={{ padding: '15px 0' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: theme.spacing * 2, padding: '10px 0', borderRadius: '10px' }}
                    >
                        Register
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default RealEstateApp;