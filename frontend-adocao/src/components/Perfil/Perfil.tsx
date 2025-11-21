import { useState } from "react";
import Menu from "../Menu/Menu";
import PerfilViewContent from "./PerfilView/PerfilView";
import PerfilEditContent from "./PerfilEdit/PerfilEdit";

export default function Perfil() {
  const [editMode, setEditMode] = useState(false); // controla view ou edit

  return (
    <div>
      <Menu></Menu>
      {editMode ? (
        <PerfilEditContent onCancel={() => setEditMode(false)} />
      ) : (
        <PerfilViewContent onEdit={() => setEditMode(true)} />
      )}
    </div>
  );
}
