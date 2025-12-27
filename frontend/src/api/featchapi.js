const API_BASE_URL = "http://localhost:4000/api";

const fetchData = async (user) => {
  if (!user) return null;

  try {
    const response = await fetch(`${API_BASE_URL}/${user}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch student data", err);
    return null;
  } finally {
    console.log("Fetch attempt finished");
  }
};

export { fetchData };
