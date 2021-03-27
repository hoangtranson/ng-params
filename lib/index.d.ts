import { PARAM_OPTIONS } from './types/params.t';
export default class PARAMS {
    private _l;
    constructor(_option?: PARAM_OPTIONS | {});
    get location(): string;
    get queries(): any;
    pick(list: string[]): any;
    exclude(list: string[]): any;
    remake(object: Object): void;
}
