import jwtDecode from 'jwt-decode';

/**
 * Decode the JWT token to extract the user ID.
 * @returns {string|null} userId if token is valid; otherwise, null.
 */
export const getUserIdFromToken = () => {
    const token = localStorage.getItem('token'); // Replace with your token storage mechanism
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        return decoded.id; // Ensure `id` is part of the token payload
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};
