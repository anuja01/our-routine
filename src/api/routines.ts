import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://66f5c631436827ced975191f.mockapi.io"
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleApiError = (error: any) => {
    //TODO: set errors based on specifice error codes
    if (error.response) {
      const { status, data } = error.response;
      return `Error: ${data.message || "Something went wrong"}. Status: ${status}`;
    } else if (error.request) {
      return "Error: No response from server. Please check your internet connection.";
    } else {
      return `Error: ${error.message}`;
    }
  };
  
  export const fetchRoutines = async () => {
    try {
      const response = await apiClient.get(`/schedules`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  };
  
  export const fetchRoutineData = async () => {
    try {
      const response = await apiClient.get(`/schedule-morning`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  };