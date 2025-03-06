export type Question = {
  statement: string;
  type: "multiple_choice" | "true_false" | "written" | "sketch";
};

export type Exam = {
  questions: Question[];
};
