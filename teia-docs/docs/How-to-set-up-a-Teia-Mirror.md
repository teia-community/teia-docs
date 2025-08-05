## Apache/Local Webserver/Traditional Web Host

_by Manitcor_

### Build
if you use pnpm or yarn just translate the commands

```bash
git clone https://github.com/teia-community/teia-ui.git
cd teia-ui
npm install
npm run start # to test locally 
npm run build
```
The output build can be found in the `build` directory, copy the content of this folder to your web server's root.

### Setup `.htaccess` for Apache

```htaccess
RewriteEngine on

# Don't rewrite files or directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Rewrite everything else to index.html to allow html5 state links
RewriteRule ^ index.html [L]
```

## Netlify, Cloudflare or Vercel

_by NFTBiker & mel_


### Requirements:

- [Github](https://github.com/) Account (not mandatory for Vercel, see [Vercel (local)](#Vercel))
- Either a [Netlify](https://www.netlify.com/), [Cloudflare](https://www.cloudflare.com) or [Vercel](https://vercel.com/) free deployment account.
- A [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of [teia-ui](https://github.com/teia-community/teia-ui)'s repository in your own Github account

Then you need to login into the dashboard of your deployment service (Netlify, Cloudflare or Vercel), and either allow it access to all your repo, or just import the `teia-ui` one.

Finally go to the settings of your project, and either add `CI` with the value `false` in the `environment variables` or change the build command to `CI=false npm run build`

### Vercel (local)

Vercel also allows you deploy a local git repository, without needing a Github account or a fork:

```bash 
git clone https://github.com/teia-community/teia-ui.git
cd teia-ui
npm install
npx vercel # follow the instructions
```