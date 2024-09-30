export class FetchService {
  async fetchData(url: RequestInfo | URL, options = {}) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_HOST}${url}`,
        options
      );
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new FetchService();
