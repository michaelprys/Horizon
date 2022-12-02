import { deleteAsync } from "del"; // Deletes folders and files

export const reset = () => {
  return deleteAsync(app.path.clean);
};
