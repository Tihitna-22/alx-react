import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const page1immut = Map(page1);
  const page2immut = Map(page2);
  const all = page1immut.mergeDeep(page2immut);
  return all;
}
