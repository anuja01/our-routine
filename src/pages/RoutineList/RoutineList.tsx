import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  Typography,
  Box,
  Alert,
  CircularProgress,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import { fetchRoutineData } from "../../api/routines";
import { useFetchData } from "../../hooks/useFetchData";

interface RoutineData {
  id: string;
  title: string;
  marked: boolean;
}

const RoutineList: React.FC = () => {
  const navigate = useNavigate();

  const {
    data: routineItems,
    loading,
    error,
  } = useFetchData<RoutineData[]>(fetchRoutineData);

  const [localRoutineItems, setLocalRoutineItems] = useState<RoutineData[]>([]);
  const [showGoodJobPopup, setShowGoodJobPopup] = useState<boolean>(false); // State to control popup

  useEffect(() => {
    if (routineItems) {
      setLocalRoutineItems(routineItems);
    }
  }, [routineItems]);

  const toggleMark = (index: number) => {
    const updatedItems = localRoutineItems.map((item, i) =>
      i === index ? { ...item, marked: !item.marked } : item
    );
    setLocalRoutineItems(updatedItems);
  };

  const handleDoneClick = () => {
    setShowGoodJobPopup(true);
  };

  const handleClosePopup = () => {
    setShowGoodJobPopup(false);
    navigate("/");
  };

  return (
    <Box
      className="routine-list"
      sx={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#e3f2fd",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          color: "#ff5722",
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      >
        Let's do this! 🚀
      </Typography>

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
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            margin: "0 auto",
            paddingInlineStart: 0,
          }}
        >
          {localRoutineItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                padding: 0,
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: item.marked ? "#e1f5fe" : "#ffffff", // Light blue background when marked
                  transition: "background-color 0.3s",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#ffe0b2", // Light orange background on hover
                  },
                }}
                onClick={() => toggleMark(index)}
              >
                <ListItemIcon>
                  {item.marked ? (
                    <CheckCircleIcon fontSize="large" sx={{ color: "green" }} />
                  ) : (
                    <StarIcon fontSize="large" sx={{ color: "orange" }} />
                  )}
                </ListItemIcon>
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: item.marked ? "line-through" : "none",
                    color: item.marked ? "gray" : "#3e2723", // Dark brown color
                    fontWeight: "bold",
                    marginLeft: "12px",
                  }}
                >
                  {item.title}
                </Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      )}

      <Box className="navigation-button" sx={{ marginTop: "16px" }}>
        <Button onClick={handleDoneClick} variant="contained" color="primary" size="large">
          All done!
        </Button>
      </Box>

      {/* Dialog for "Good Job" Popup */}
      <Dialog open={showGoodJobPopup} onClose={handleClosePopup}>
        <DialogTitle>{"Good Job!"}</DialogTitle>
        <DialogContent>
          <Typography variant="h6" sx={{ textAlign: "center", color: "green" }}>
            You did a great job completing your routine! 🎉
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary" variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RoutineList;
