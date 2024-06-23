import { cloneElement } from 'react';

export function formatSvg(svg = <svg></svg>, size = '', color = '') {
   if (svg.type !== 'svg') return
   return cloneElement({ ...svg, props: { ...svg?.props, className: svg?.props?.className + ` ${size} ${color}` } })
}
