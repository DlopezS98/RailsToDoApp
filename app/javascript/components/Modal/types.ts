import { MouseEvent } from "react";
import { Styles } from "@Shared/types/common.types";

export interface IProps {
    title: string;
    message: string;
    show: boolean;
    handleClose(event: MouseEvent<HTMLButtonElement>): void;
}

export const styles: Styles<IStyleProps> = {
  AxisXEnd: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center"
  }
}

interface IStyleProps {
    AxisXEnd
}