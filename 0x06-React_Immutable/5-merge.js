import { List, Map, merge } from 'immutable';

function concatElements(page1, page2) {
  const page1immut = List(page1);
  const page2immut = List(page2);
  const all = page1immut.concat(page2immut);
  return all;
}
function mergeElements(page1, page2) {
  if (page1 === page2) {
    const page2immut = Map(page2);
    return page2immut;
  }
  const page1immut = Map(page1);
  const page2immut = Map(page2);
  const all = merge(page1immut, page2immut);
  return all;
}
