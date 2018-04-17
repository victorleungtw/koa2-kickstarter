import { getUsers } from '../service/user';

export const get = (ctx) => {
	ctx.status = 301;
	ctx.redirect = ('intent://open?link_click_id=123456#Intent;scheme=com.hsbc.digial.peak.paymebiz://oauth/redirect;package=com.hsbc.digital.peak.PaymeBiz.dev.debug;')
    ctx.body = 'Redirecting to new intent'
};

export const post = (ctx) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /user';
};
