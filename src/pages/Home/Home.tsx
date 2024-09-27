import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Alert, Box, CircularProgress, styled, Typography, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // Import the Add icon
import { fetchRoutines } from "../../api/routines";
import { useFetchData } from "../../hooks/useFetchData";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 100,
  lineHeight: '100px',
  width: "90%",
  margin: "12px auto",
  fontSize: "36px",
  padding: "auto",
  background: "linear-gradient(45deg, #FFB74D, #FF9800)",
  borderRadius: "16px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s, box-shadow 0.2s",

  '&:hover': {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
  },
}));

interface Routine {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [kidName, setKidName] = useState<string>("");

  useEffect(() => {
    const savedName = localStorage.getItem("kidName");
    if (savedName) {
      setKidName(savedName);
    }
  }, []);

  const { data: routines, loading, error } = useFetchData<Routine[]>(fetchRoutines);

  return (
    <div>
      <Typography variant="h3">Hello {kidName ? kidName : "Kiddo"}!</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {routines?.map((routine) => (
            <Item
              key={routine.id}
              elevation={3}
              onClick={() => navigate(`/routine/${routine.id}`)}
            >
              {routine.name}
            </Item>
          ))}
        </>
      )}
      
      <Fab 
        color="primary" 
        aria-label="add" 
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={() => navigate('/add-routine')}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Home;
