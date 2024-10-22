export const getItemsByIds = async ({ items, setData }) => {
  let itemsList = [];

  for (const item of items) {
    try {
      const { id: itemId, amount } = item;
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${itemId}`
      );
      const data = await response.json();
      itemsList.push({ ...data, amount });
    } catch (error) {
      console.error("Fetching error:", error);
    }
  }
  setData(itemsList);
};
