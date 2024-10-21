export const getItem = async ({ id, setData }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/products/${id}`
    );
    if (!response.ok) {
      console.log("Response doesn't seem to be ok");
    }
    const { title, image } = await response.json();
    setData({ title, image });
  } catch (error) {
    console.error("Fetching error:", error);
  }
};
