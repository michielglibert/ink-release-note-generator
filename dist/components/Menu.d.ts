import React from "react";
interface Props {
    menuOptions: string[];
    handleChange: (arg0: unknown) => void;
    manualInputEnabled?: boolean;
    defaultOption?: string;
}
declare const Menu: React.FC<Props>;
export default Menu;
