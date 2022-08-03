import { List, Map, merge } from 'immutable';

export function concatElements(page1, page2) {
    const page1immut = List(page1);
    const page2immut = List(page2);
    const all = page1immut.concat(page2immut);
    return all;
}
export function mergeElements(page1, page2) {

    const page1immut = Map(page1);
    const page2immut = Map(page2);
    const all = page1immut.merge(page2immut);
    return all;
}
