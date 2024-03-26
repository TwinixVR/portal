import { useMouseInElement, type MaybeElementRef } from '@vueuse/core';

const lerp = (p1: number, p2: number, t: number) => {
  return p1 + (p2 - p1) * t;
};
const getCurrentTime = typeof performance !== 'undefined' ? () => performance.now() : () => Date.now();
const raf = window?.requestAnimationFrame
  ? (callback: FrameRequestCallback) => window.requestAnimationFrame(callback)
  : (callback: FrameRequestCallback) => setTimeout(() => callback(getCurrentTime()), 1000 / 60);
export interface ParallaxOption {
  lerpEase?: number;
  mouseTiltAdjust?: (i: number) => number;
  mouseRollAdjust?: (i: number) => number;
}
export interface ParallaxReturn {
  /**
   * Roll value. Scaled to `-0.1 ~ 0.1`
   */
  roll: ComputedRef<number>;
  /**
   * Tilt value. Scaled to `-0.1 ~ 0.1`
   */
  tilt: ComputedRef<number>;
}
/**
 * Create parallax effect easily
 * @param target
 * @param options
 * @returns
 */
const useParallax = (target: MaybeElementRef, options: ParallaxOption = {}): ParallaxReturn => {
  const currentX = ref(0);
  const currentY = ref(0);

  const { lerpEase = 0.03, mouseTiltAdjust = (i) => i, mouseRollAdjust = (i) => i } = options;

  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height,
    isOutside,
  } = useMouseInElement(target, { handleOutside: false, window });
  const update = (x: number, y: number) => {
    const diffX = Math.abs(x - currentX.value);
    const diffY = Math.abs(y - currentY.value);
    if (diffX < 0.0001 && diffY < 0.0001) return;
    currentX.value = lerp(currentX.value, x, lerpEase);
    currentY.value = lerp(currentY.value, y, lerpEase);
    raf(() => update(x, y));
  };

  watchEffect(() => {
    if (isOutside.value || (y.value <= 0.001 && x.value <= 0.001)) return;
    const targetY = (y.value - height.value) / height.value;
    const targetX = (x.value - width.value) / width.value;

    raf(() => update(targetX, targetY));
  });
  const roll = computed(() => {
    return mouseRollAdjust(currentY.value);
  });
  const tilt = computed(() => {
    return mouseTiltAdjust(currentX.value);
  });
  return { roll, tilt };
};
export default useParallax;
