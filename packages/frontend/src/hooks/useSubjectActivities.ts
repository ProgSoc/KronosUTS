import { useQuery } from "@tanstack/react-query";
import { Semester } from "../generated";
import api from "../services/api";

export default function useSubjectActivities(semester: Semester, code: string) {
  return useQuery({
    queryFn: () => api.subjects.getSubjectActivities(semester, code),
    queryKey: ["subject", semester, code, "activities"],
  });
}
