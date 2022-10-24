import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import { required, email, confirmed, max, min } from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';

// 必要なルールのみインポート
extend('required', required);
extend('email', email);
extend('confirmed', confirmed)
extend('max', max)
extend('min', min)

// メッセージを設定
localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);