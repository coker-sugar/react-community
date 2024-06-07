// 函数防抖的实现
export function debounce(fn: Function, wait: number): (...args: any[]) => void {
    let timer: NodeJS.Timeout | null = null;
    return function(this: any, ...args: any[]): void {
      let context = this;
      // 如果此时存在定时器的话，则取消之前的定时器重新记时
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      // 设置定时器，使事件间隔指定时间后执行
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    };
  }

