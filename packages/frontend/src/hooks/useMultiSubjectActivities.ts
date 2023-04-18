import { useQuery } from "@tanstack/react-query";
import { Semester } from "../generated";
import api from "../services/api";

export default function useMultiSubjectActivities(
  semester: Semester = Semester.ALL,
  subjects: string[] = []
) {
  return useQuery({
    queryFn: () => api.default.getSubjectActivities(subjects, semester),
    queryKey: ["subjects", semester, subjects, "activities"],
  });
}
