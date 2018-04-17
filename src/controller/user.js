import { getUsers } from '../service/user';

export const get = (ctx) => {
	ctx.status = 307;
	ctx.set('Location', 'intent://scan/#Intent;scheme=paymebiz;package=com.hsbc.digital.peak.PaymeBiz.dev.debug;end' )
	ctx.redirect = ('intent://scan/#Intent;scheme=paymebiz;package=com.hsbc.digital.peak.PaymeBiz.dev.debug;end')
    ctx.body = 'Redirecting to new intent'
};

export const post = (ctx) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /user';
};
