export const handleSaveAccessToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const handleDeleteAccessToken = () => {
  localStorage.removeItem("accessToken");
};
