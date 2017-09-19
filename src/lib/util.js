
export const renderIf = (test, component) => test ? component : undefined;
export const renderEither = (test, componentOne, componentTwo) => test ? componentOne : componentTwo;
