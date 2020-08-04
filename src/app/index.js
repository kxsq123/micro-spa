
import { NOT_LOADED, LOADING_SOURCE_CODE, NOT_BOOTSTRAPPED, NOT_MOUNTED, MOUNTED, BOOTSTRAPPING, shouldBeActive } from './lifecycle'
import { reroute } from '../navigation/reroute'
const apps = [] // 所有的应用

export function getAppChange() {
  const unmountApps = [] // 要卸载的app
  const loadApps = [] // 要加载的app
  const mountApps = [] // 要挂载的app
  apps.forEach(app => {
    switch (app.status) {
      case NOT_LOADED:
      case LOADING_SOURCE_CODE:
        if (shouldBeActive(app)) {
          loadApps.push(app)
        }
        break
      case NOT_BOOTSTRAPPED:
      case BOOTSTRAPPING:
      case NOT_MOUNTED:
        if (shouldBeActive(app)) {
          mountApps.push(app)
        }
        break
      case MOUNTED:
        if (!shouldBeActive(app)) {
          unmountApps.push(app)
        }
      default: break
    }
  })
  return {
    unmountApps,
    loadApps,
    mountApps
  }
}

export function registerApp(appName, lifecycle, activeFn, customOpts) {
  apps.push({
    appName,
    lifecycle,
    activeFn,
    customOpts,
    status: NOT_LOADED // 应用当前的状态
  })
  reroute() // 加载应用
}