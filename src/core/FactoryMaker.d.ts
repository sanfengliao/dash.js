
export type SingletonFactory<T extends (...args: any) => any> = (context: any) => ({
  getInstance(): (ReturnType<T> & { getClassName(): string });
})

export type ClassFactory<T extends (...args: any) => any> = (context: any) =>({
  create(): ReturnType<T>
})
interface FactoryMaker {
  getSingletonFactory<T extends (...args: any) => any>(classConstructor: T): SingletonFactory<T>;
  getClassFactory<T extends (...args: any) => any>(classConstructor: T): ClassFactory<T>;
}
declare type A = null

declare var factoryMaker: FactoryMaker;

export default factoryMaker;