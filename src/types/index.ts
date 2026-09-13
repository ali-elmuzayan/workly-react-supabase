export type HowItWorksStep = {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type Note = {
  id: string;
  userId: string;
  title: string;
  content: string;
  summary: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateNoteDTO = {
  title: string;
  content: string;
};
