import { getUsers } from '../service/user';

export const get = (ctx) => {
	ctx.status = 302;
	ctx.set('Location', 'intent://#Intent;scheme=paymebiz://home;package=com.hsbc.digital.peak.PaymeBiz.dev.debug' )
	ctx.redirect = ('intent://#Intent;scheme=paymebiz://home;package=com.hsbc.digital.peak.PaymeBiz.dev.debug')
    ctx.body = 'Redirecting to new intent'
};

export const post = (ctx) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /user';
};
