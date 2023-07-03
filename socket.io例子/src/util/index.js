/**
 * px转vw函数
 */
export function px2vw(px, wt = 375,keep=5) {
  return `${((px / wt) * 100).toFixed(keep)}vw`
}