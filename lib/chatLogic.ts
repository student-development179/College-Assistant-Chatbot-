import { commonReplies } from "@/data/common";
import { branches } from "@/data/branches";
import { holidays } from "@/data/holidays";
import { placements } from "@/data/placements";

export function getBotResponse(message: string) {
  const text = message.toLowerCase();

  // 1) COMMON CHAT
  for (const item of commonReplies) {
    if (item.keywords.some((k) => text.includes(k))) {
      return item.reply;
    }
  }

  // 2) HOLIDAYS
  if (text.includes("holiday")) {
    return holidays.join("\n");
  }

  // 3) PLACEMENTS
  if (text.includes("placement")) {
    return `Companies: ${placements.companies.join(", ")}.\nRoles: ${placements.roles.join(", ")}.\n${placements.info}`;
  }

  // 4) BRANCH DETAILS
  if (text.includes("ce")) {
    return `Branch: Computer Engineering\nHOD: ${branches.CE.hod}\nSem 4 Subjects: ${branches.CE.semesters[4].map((s) => s.subject).join(", ")}.\nFaculty: ${branches.CE.semesters[4].map((s) => s.faculty).join(", ")}.`;
  }

  if (text.includes("it")) {
    return `Branch: Information Technology\nHOD: ${branches.IT.hod}\nSem 4 Subjects: ${branches.IT.semesters[4].map((s) => s.subject).join(", ")}.\nFaculty: ${branches.IT.semesters[4].map((s) => s.faculty).join(", ")}.`;
  }

  // 5) TIMETABLE
  if (text.includes("time") || text.includes("timing")) {
    return "College timing is 10:45 AM to 5:30 PM. Alternate Saturdays are holidays.";
  }

  // 6) SAFE FALLBACK
  return "I’m not sure about that yet. You can ask me about branches, faculty, subjects, holidays, placements or GTU papers here: https://gtu.ac.in/Download1.aspx";
}
