import { getUsers } from '../service/user';

export const get = (ctx) => {
	ctx.status = 302;
	ctx.set('Location', 'http://com.hsbc.digial.peak.paymebiz' )
	ctx.redirect = ('http://com.hsbc.digial.peak.paymebiz')
    ctx.body = 'Redirecting to new intent'
};

export const post = (ctx) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /user';
};
