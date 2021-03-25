import { PARAM_OPTIONS } from './types/params.t';
import splitOnFirst from './utils/splitOnFirst.helper';
export default class PARAMS {
    private _l: string;

    constructor(_option: PARAM_OPTIONS | {} = {}) {
        if (typeof window === 'undefined') {
            throw new Error('window is not defined yet!!!');
        }

        if (typeof window.location.search !== 'string' || !window.location.search) {
            throw new Error('location search is not string type!!!');
        }

        this._l = window.location.search.trim().replace(/^[?#&]/, '');
    }

    get location() {
        return this._l;
    }

    get queries() {
        return this._l
            .split('&')
            .filter((item) => item)
            .reduce((acc, current) => {
                let [key, value] = splitOnFirst(current, '=');
                acc[key] = value;
                return acc;
            }, Object.create(null));
    }

    public pick(list: string[]) {
        return list.reduce((acc, _key) => {
            if(this.queries && this.queries[_key]) {
                acc[_key] = this.queries[_key];
            }
            return acc;
        }, Object.create(null));
    }

    public exclude(list: string[]) {}

    public remake(object: Object) {}
}
