import { getUsers } from '../service/user';

export const get = (ctx) => {
	ctx.status = 302;
	ctx.set('Location', 'intent://open?link_click_id=123456#Intent;scheme=paymebiz;package=com.hsbc.digital.peak.PaymeBiz.dev.debug;' )
	ctx.redirect = ('intent://open?link_click_id=123456#Intent;scheme=paymebiz;package=com.hsbc.digital.peak.PaymeBiz.dev.debug;')
    ctx.body = 'Redirecting to new intent'
};

export const post = (ctx) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /user';
};
