# :fire: Next.js, Koa, PWA, Styled Components Template

Do the following and you are good to go:

```bash
# be a cool kid and install with yarn
yarn

# playing around?
yarn dev

# wanna build and start? I got you.
yarn go
```

This project uses [next-offline](https://github.com/hanford/next-offline) for the service worker stuff to cache assets. [Styled-components](https://www.styled-components.com/) are setup out of the box, otherwise just delete the .babelrc and anything you see related to it.

Also, this shows usage with the apimaze API, specifically for getting Batman info. Notice links in index.js are prefetched for offline usage :sparkles:

```bash
# healthcheck route added for those who need it for prod systems.

# GET
BASE_URL/healthcheck
```

## Common issues I had

- The order of the Koa scripts is important when serving static files.
- If you're using the server.js file for serving your site running ```next start``` will ignore that - this took me a while to figure out.
- If you want to use nextjs to add APIs, make sure that your Koa ```ctx.respond = true``` otherwise you won't get a response.


## Inspiration or useful links

- [ragingwind/next-hnpwa](https://github.com/ragingwind/next-hnpwa)

- [Aerolab/nextjs-pwa](https://github.com/Aerolab/nextjs-pwa)

- [estrada9166/server-authentication-next.js](https://github.com/estrada9166/server-authentication-next.js)

- [Next.js examples folder](https://github.com/zeit/next.js/tree/canary/examples)
