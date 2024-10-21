export const handleSaveAccessToken = (token) => {
  sessionStorage.setItem("accessToken", token);
};

export const handleDeleteAccessToken = () => {
  sessionStorage.removeItem("accessToken");
};
