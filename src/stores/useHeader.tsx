import { create } from "zustand";

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

export const useHeader = create<HeaderStore>((set) => ({
  title: "",
  fields: defaultFields,
  setTitle: (title) => set({ title }),
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
