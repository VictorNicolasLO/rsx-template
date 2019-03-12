export function ServiceDecorator(Target) {
  return class Result extends Target {
    models = {};
    constructor(config) {
      super(config);
      for (let i in this) {
        this.models[i] = e => {
          this[i] = e.target.value;
        };
      }
    }
  };
}
