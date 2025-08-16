import { createContext, useState } from "react";

export const FormAndModalContext = createContext();

function FormAndModalProvider({ children }) {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(null);

  return (
    <FormAndModalContext.Provider
      value={{
        isAddFormOpen,
        setIsAddFormOpen,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
        isEditModalOpen,
        setIsEditModalOpen
      }}
    >
      {children}
    </FormAndModalContext.Provider>
  );
}

export default FormAndModalProvider;
