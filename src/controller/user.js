import { getUsers } from '../service/user';

export const get = (ctx) => {
	ctx.status = 302;
	ctx.set('Location', 'intent://home?action=email-verification&hash=8ae335a572f783f0fd6146596c4f6cf1&salt=3e8bc8ccfac6058abe10b22d5b957278&status=success/#Intent;scheme=paymebiz;package=com.hsbc.digital.peak.PaymeBiz.dev.debug;end' )
	ctx.redirect = ('intent://home?action=email-verification&hash=8ae335a572f783f0fd6146596c4f6cf1&salt=3e8bc8ccfac6058abe10b22d5b957278&status=success/#Intent;scheme=paymebiz;package=com.hsbc.digital.peak.PaymeBiz.dev.debug;end')
    ctx.body = 'Redirecting to new intent'
};

export const post = (ctx) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx) => {
  ctx.body = '[PUT]: /user';
};
