export const BASE_URL = "http://127.0.0.1:8000"

// const token = sessionStorage.getItem("access"); // Replace with your actual Bearer token

export const commonHeaders = {
    'Authorization': `Bearer ${sessionStorage.getItem("access")}`,
    'Content-Type': 'application/json', // You can set other headers as needed
};