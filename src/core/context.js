import i18next from 'i18next';

import config from '../shared/config';
import constant from '../shared/constant';
import common from '../shared/locale/common';
import ja from '../shared/locale/ja';
import ko from '../shared/locale/ko';
ja.common = common;
ko.common = common;

class Context {
  constructor() {
    this.config = config;
    this.constant = constant;
  }

  init() {
    this.initI18next();
  }

  initI18next() {
    let lng = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    if(!constant.WHITELIST_LNG[lng]) {
      lng = constant.DEFAULT_LNG;
    }
    i18next.init({
      initImmediate: false,
      lng: lng,
      whitelist: constant.WHITELIST_LNG,
      resources: {
        ko: { translation: ko },
        ja: { translation: ja },
      }
    });
  }
}

export {i18next};
export const t = (text, options = {}) => { return i18next.t(text, options) };
export default new Context();