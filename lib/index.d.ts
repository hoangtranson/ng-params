import { PARAM_OPTIONS } from "./types/params.t";
export default class PARAMS {
    private _l;
    private _opt;
    constructor(_option?: PARAM_OPTIONS | {});
    get location(): string;
    get configuration(): PARAM_OPTIONS;
    get queries(): any;
    private parseValue;
}
