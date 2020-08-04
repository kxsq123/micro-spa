import { started } from "../start";
import { NOT_LOADED, NOT_MOUNTED } from "../app/lifecycle";
import { getAppChange } from '../app/index'

// 预先加载应用
const loadApp = async () => {

}

// 装载应用
const performAppChange = async () => {

}

export function reroute() {
  const { unmountApps, loadApps, mountApps } = getAppChange()
  console.log(unmountApps, loadApps, mountApps);
  if (started) {
    return performAppChange()
  } else {
    // 用户第一次调用
    return loadApp()

  }

}
