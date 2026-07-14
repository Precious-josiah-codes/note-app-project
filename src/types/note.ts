export type Note = {
  id: string;
  text: string;
  date: string;
  color: "yellow" | "red" | "orange" | "green" | "blue" | "purple";
  starred: boolean;
};
