function classes() {
  const Base = class {};
  const classPrototypes = [];

  const getObj = (classPrototype) => {
    const { constructor, ...obj } = Object.fromEntries(
      Object.getOwnPropertyNames(classPrototype).map((v) => [
        v,
        classPrototype[v],
      ])
    );
    return obj;
  };

  const objCombine = (classPrototypes) => {
    const targetObj = {};
    for (let i = 0, j = classPrototypes.length; i < j; ++i) {
      Object.assign(targetObj, classPrototypes[i]);
    }
    return targetObj;
  };

  for (let i = 0, j = arguments.length; i < j; ++i) {
    const obj = getObj(arguments[i].prototype);
    classPrototypes.push(obj);
  }

  const sourceObj = objCombine(classPrototypes);
  Object.assign(Base.prototype, sourceObj);
  return Base;
}

export default classes;
