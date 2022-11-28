import { useQuery } from "@tanstack/react-query";
import { ApiError } from "../../../generated";
import api from "../../../services/api";

export const useHelloWorld = () =>
  useQuery<string, ApiError>({
    queryKey: ["HelloWorld"],
    queryFn: () => api.default.appControllerGetHello(),
  });
