const actionCreator = type => Object.assign(
  payload => ({ type, payload }),
  { type }
);

export const update = actionCreator('UPDATE::USER::DATA');

export const changeName = name => update({ name });
export const changeAge = age => update({ age });
export const changeStudent = isStudent => update({ isStudent });
