import FullCalendar from "@fullcalendar/react";
import { Semester } from "../generated";
import useSubject from "../hooks/useSubject";
import useSubjectActivities from "../hooks/useSubjectActivities";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useMemo } from "react";
import { DateRangeInput, EventInput } from "@fullcalendar/core";
import { DateTime } from "luxon";
import timeGridPlugin from "@fullcalendar/timegrid";
import useMultiSubjectActivities from "../hooks/useMultiSubjectActivities";

interface TimetableProps {}

export default function Timetable(props: TimetableProps) {
  const activitiesQuery = useMultiSubjectActivities(Semester.SPR, [
    "41113",
    "48433",
  ]);

  const transformedActivities = useMemo((): EventInput[] => {
    if (!activitiesQuery.data) return [];

    const dates = activitiesQuery.data.flatMap((activity) =>
      activity.activitiesDays.map((day) => {
        const date = DateTime.fromFormat(day, "d/M/yyyy");
        const start24HourTime = activity.start_time.split(":");
        const durationInMinutes = activity.duration;
        const startDateTime = date.set({
          hour: parseInt(start24HourTime[0]),
          minute: parseInt(start24HourTime[1]),
        });

        const endDateTime = startDateTime.plus({
          minutes: parseInt(durationInMinutes),
        });

        console.log({ startDateTime, endDateTime });

        return {
          start: startDateTime.toISO() ?? undefined,
          end: endDateTime.toISO() ?? undefined,
          title: activity.activity_group_code,
          // color: activity.color,
          groupId: activity.id,
        } satisfies EventInput;
      })
    );
    return dates;
  }, [activitiesQuery.data]);

  console.log(transformedActivities);

  return (
    <FullCalendar
      plugins={[timeGridPlugin, dayGridPlugin]}
      firstDay={1}
      initialView={"timeGridWeek"}
      events={transformedActivities}
    />
  );
}
