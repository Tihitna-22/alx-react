import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  const newobj = fromJS(object);
  return newobj;
}
