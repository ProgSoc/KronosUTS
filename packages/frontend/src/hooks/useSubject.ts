import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { Semester } from "../generated";

export default function useSubject(semester: Semester, subjectId: string) {
  return useQuery({
    queryFn: () => api.subjects.getSubjectDetails(semester, subjectId),
    queryKey: ["subject", semester, subjectId],
  });
}
