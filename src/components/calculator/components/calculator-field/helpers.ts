import { TActions, TFieldName } from "./models";

export const getContextActionName = (fieldName: TFieldName): TActions => {
    return `change${fieldName[0].toUpperCase() + fieldName.slice(1)}` as TActions;
}