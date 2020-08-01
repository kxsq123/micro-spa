
import { NOT_LOADED } from './lifecycle'
import { reroute } from '../navigation/reroute'
const apps = [] // 所有的应用

export function registerApp(appName, lifecycle, activeFn, customOpts) {
  apps.push({
    appName,
    lifecycle,
    activeFn,
    customOpts,
    status: NOT_LOADED // 应用当前的状态
  })
  console.log(apps)
  reroute() // 加载应用
}