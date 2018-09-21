export function resize(str, param) {
    return typeof str === 'undefined' ? '' : str.replace(/a.storyblok.com/g, 'img2.storyblok.com/' + param);
  }