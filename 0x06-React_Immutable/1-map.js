import { Map } from 'immutable';

export default function getImmutableObject(object) {
  const newobj = Map(object);
  return newobj;
}
