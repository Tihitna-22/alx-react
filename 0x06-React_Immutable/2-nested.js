import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immut = Map(object);
  const name = immut.getIn(array);
  return name;
}
