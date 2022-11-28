import { ApiClient } from "../generated";

const api = new ApiClient({
  BASE: import.meta.env.VITE_BASE_URL,
});
export default api;
