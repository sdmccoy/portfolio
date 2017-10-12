
export default (state=[], action) => {
  const {payload, type} = action;
  switch (type) {
  case 'PROJECT_SET':
    return payload;

  default: return state;

  }
};
