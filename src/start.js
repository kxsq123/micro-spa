
import { reroute } from './navigation/reroute'

export let started = false
// 加载 + 挂载应用
export function start() {
  console.log('start')
  started = true
  reroute()
}
