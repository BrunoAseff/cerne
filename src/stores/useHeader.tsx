import { create } from "zustand";
import truncate from "html-truncate";

type HeaderField = {
  id: string;
  label: string;
  enabled: boolean;
};

type HeaderFields = {
  studentName: HeaderField;
  teacherName: HeaderField;
  schoolName: HeaderField;
  date: HeaderField;
  class: HeaderField;
  grade: HeaderField;
  subject: HeaderField;
  score: HeaderField;
};

type HeaderStore = {
  title: string;
  titleLength: number;
  fields: HeaderFields;
  setTitle: (title: string) => void;
  toggleField: (fieldId: keyof HeaderFields) => void;
};

const defaultFields: HeaderFields = {
  studentName: {
    id: "studentName",
    label: "Estudante",
    enabled: true,
  },
  teacherName: {
    id: "teacherName",
    label: "Professor",
    enabled: true,
  },
  schoolName: { id: "schoolName", label: "Escola", enabled: true },
  date: { id: "date", label: "Data", enabled: true },
  class: { id: "class", label: "Turma", enabled: true },
  grade: { id: "grade", label: "Série", enabled: true },
  subject: { id: "subject", label: "Disciplina", enabled: true },
  score: { id: "score", label: "Nota", enabled: true },
};

function getVisibleTextLength(html: string): number {
  if (typeof window === "undefined") return 0;
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent?.length ?? 0;
}

export const useHeader = create<HeaderStore>((set) => ({
  title: "",
  titleLength: 0,
  fields: defaultFields,
  setTitle: (title) => {
    const trimmedTitle = truncate(title, 30, { ellipsis: "" });
    const visibleLength = getVisibleTextLength(trimmedTitle);
    set({
      title: trimmedTitle,
      titleLength: visibleLength,
    });
  },

  toggleField: (fieldId) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [fieldId]: {
          ...state.fields[fieldId],
          enabled: !state.fields[fieldId].enabled,
        },
      },
    })),
}));
