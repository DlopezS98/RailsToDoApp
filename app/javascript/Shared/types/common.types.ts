import { CSSProperties } from "react";

export type Styles<T> = {
    [key in keyof T]: CSSProperties
}