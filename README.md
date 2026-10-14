# Liang Qin · Academic homepage

Personal academic website built with [Academic Pages](https://github.com/academicpages/academicpages.github.io) and Jekyll.

## Editing the website

- `_pages/about.md`: homepage biography, research interests, publication, education, and experience.
- `_data/publications.yml`: featured paper metadata, links, and thumbnails shared by homepage and CV. Add new entries at the top.
- `images/publications/`: thumbnail assets and their source credits.
- `_pages/cv.md`: curriculum vitae. Keep dates and entries consistent with the homepage.
- `_config.yml`: name, contact details, profile links, and deployment URL.
- `_data/navigation.yml`: navigation. Each homepage fragment must match an existing section ID.
- `_sass/_custom.scss`: personal styling, with mobile layouts and light/dark theme support.
- `images/profile.jpg`: sidebar portrait.

Only add news, awards, and new publications when the details are ready. The current Ph.D. completion date remains **2026 (expected)**; update both the homepage and CV when the status changes. Set `author.linkedin` to your actual profile slug if you want to display LinkedIn.

## Local preview

Install Ruby (including development headers), Bundler, and Node.js, then run:

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open `http://127.0.0.1:4000/`. The website is published at `https://crlqinliang.github.io/` with an empty `baseurl`; use the Jekyll `relative_url` filter for internal links. Restart Jekyll after changing `_config.yml`.

After editing JavaScript sources, run `npm install` and `npm run build:js` to rebuild `assets/js/main.min.js`.

## Credits

Academic Pages is based on Michael Rose's Minimal Mistakes Jekyll theme. Theme code is distributed under the MIT license; see [LICENSE](LICENSE). Upstream documentation is available at [academicpages.github.io](https://academicpages.github.io/).
