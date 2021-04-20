/**
 * 动态引入文件夹下多个文件
 * @context {Context} Webpack Require Context
 * @normalize {Function} 把context的key转换为想要的格式,返回falsy值则表示忽略该文件
 * @return {Object} 包含多个文件的引用的对象
 */
export const requireAll = (
  context: any,
  normalize = (v: string) => v.replace(/\.\/([\w./]+)\.\w+$/, '$1').replace(/\//g, '.')
): object =>
  context.keys().reduce((obj: object, key: string) => {
    const normalizedKey = normalize(key)
    if (!obj[normalizedKey]) {
      obj[normalizedKey] = context(key).default || context(key)
    }
    return obj
  }, {})

export const isFunction = (val: any) => Object.prototype.toString.apply(val) === '[object Function]'

export const isObject = (val: any) => Object.prototype.toString.apply(val) === '[object Object]'

export const isString = (val: any) => Object.prototype.toString.apply(val) === '[object String]'

export const isNullOrUndefined = (val: any) => val === null || val === undefined

export const isPromise = (val: any) => (isObject(val) || isFunction(val)) && isFunction(val.then)

export const assignState = (pre: object, now: any) => {
  if (isFunction(now) && isObject(now(pre))) {
    return { ...pre, ...now(pre) }
  }
  if (isObject(now)) {
    return { ...pre, ...now }
  }
  return pre
}

export const bindEvent = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void => {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>))
  }
}

export const removeEvent = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
): void => {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>))
  }
}

export const noop = () => {}
