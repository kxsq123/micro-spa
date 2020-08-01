
const NOT_LOADED = 'NOT_LOADED' // 未加载，默认状态
const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE'  // 加载资源中
const NOT_BOOTSTRAPPED = 'BOOTSTRAPPED' // 未启动, 还没调用 bootstrap 方法
const BOOTSTRAPPING = 'BOOTSTRAPPING' // 启动中
const NOT_MOUNTED = 'NOT_MOUNTED' // 未挂载， 没调用 mounted 方法
const MOUNTING = 'MOUNTING' // 挂载中
const MOUNTED = 'MOUNTED' // 已经挂载 调用 mounted
const UPDATING = 'UPDATING' // 更新中
const UN_MOUNTING = 'UN_MOUNTING' // 解除挂载
const UNLOADING = 'UNLOADING' // 正在卸载中
const LOAD_ERR = 'LOAD_ERR' // 加载资源出错
const CODE_BROKEN = 'CODE_BROKEN' // 执行代码出错

// 当前应用是否被激活
const isActive = (app) => app.status === MOUNTED
// 当前应用是否将要被激活
const shouldBeActive = (app) => app.lifecycle()

export {
  NOT_LOADED,
  LOADING_SOURCE_CODE,
  NOT_BOOTSTRAPPED,
  BOOTSTRAPPING,
  NOT_MOUNTED,
  MOUNTING,
  MOUNTED,
  UPDATING,
  UN_MOUNTING,
  UNLOADING,
  LOAD_ERR,
  CODE_BROKEN,
  isActive,
  shouldBeActive
}

