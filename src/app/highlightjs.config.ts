
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hightlightJSConfig() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}
