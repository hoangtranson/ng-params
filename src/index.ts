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
        const that = this;
        return list.reduce((acc, _key) => {
            if(that.queries && that.queries[_key]) {
                acc[_key] = that.queries[_key];
            }
            return acc;
        }, Object.create(null));
    }

    public exclude(list: string[]) {
        const that = this;
        return Object.keys(this.queries).reduce((acc, _key) => {
            if(!list.includes(_key)) {
                acc[_key] = that.queries[_key];
            }
            return acc;
        }, Object.create(null));
    }

    public remake(object: Object) {}
}
