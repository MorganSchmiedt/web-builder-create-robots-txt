## Web Builder Module - Create robots.txt file

This module allows the [@deskeen/web-builder](https://github.com/deskeen/web-builder) engine to create a `robots.txt` file.

## Install

```
npm install @deskeen/web-builder
npm install @deskeen/web-builder-create-robots-txt
```

### Usage

And add the module to the list of modules: 

```javascript
const builder = require('@deskeen/web-builder')
const builder.build([
  source: [
    // List of files or directories
  ],
  modules: [
    [
      '@deskeen/web-builder-create-robots-txt',
      {
        path: '/deploy/path', // Deploy path
        sitemapUrl: 'https://example.com/sitemap.xml', // sitemap URL
        disallowBotNames: [
          // List of bot names to disallow
        ],
      }
    ]
  ]
])
```


## Popular Crawlers

- Apple: `Applebot`
- Amazon: `ia_archiver`
- Askdotcom: `Teoma`
- Bing: `bingbot`
- DuckDuckGo: `DuckDuckBot`
- Facebook: `Facebot`
- Google: `Googlebot`
- Google Ads: `AdsBot-Google`, `Mediapartners-Google`
- Google Images: `Googlebot-Image`
- IBM: `ScoutJet`
- MSN: `msnbot`
- Twitter: `Twitterbot`
- Yahoo: `Slurp`
- Chinese search engine: `baiduspider`
- China’s largest eCommerce site: `EtaoSpider`
- Russian search engine: `Yandex`
- Czech Republic search engine: `seznambot`


## Contact

You can reach me at {my_firstname}@{my_name}.fr


## Licence

MIT Licence - Copyright (c) Morgan Schmiedt