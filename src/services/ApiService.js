class ApiService {
  static async searchTransportation(fromCity, toCity, departureDate) {
    try {
      // Make a fetch request to the backend API endpoint for searching transportation
      const response = await fetch(`/api/transportation?fromCity=${fromCity}&toCity=${toCity}&departureDate=${departureDate}`);
      
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to fetch transportation data');
      }

      // Parse the response as JSON
      const data = await response.json();
      
      // Return the transportation data
      return data;
    } catch (error) {
      // Handle errors
      console.error('Error searching transportation:', error);
      throw error;
    }
  }
}

export default ApiService;
