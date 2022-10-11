export {
  isActive,
  ensureStartingSlash
} from 'vitepress/dist/client/theme-default/support/utils'

export function isArray(value) {
  return Array.isArray(value);
}
/**
 * Remove `.md` or `.html` extention from the given path. It also converts
 * `index` to slush.
 */
 export function removeExtention(path) {
  return path.replace(/(index)?(\.(md|html))?$/, '') || '/';
}