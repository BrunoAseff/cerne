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
    label: "Nome do estudante",
    enabled: false,
  },
  teacherName: {
    id: "teacherName",
    label: "Nome do professor",
    enabled: false,
  },
  schoolName: { id: "schoolName", label: "School Name", enabled: false },
  date: { id: "date", label: "Data", enabled: false },
  class: { id: "class", label: "Turma", enabled: false },
  grade: { id: "grade", label: "Série/ano", enabled: false },
  subject: { id: "subject", label: "Matéria/Disciplina", enabled: false },
  score: { id: "score", label: "Nota", enabled: false },
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
