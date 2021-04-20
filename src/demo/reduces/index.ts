const context = require.context('./', false, /\.(js|ts|tsx)$/)
const keys = context.keys().filter((item) => item !== './index.ts')
const [reducers, initState] = keys.reduce(
  (res, key) => {
    const nameSpace = key.match(/([^\\/]+).(ts)$/)[1]
    res[0][nameSpace] = context(key).reducer
    res[1][nameSpace] = context(key).initState
    return res
  },
  [{}, {}]
)

export { reducers, initState }
