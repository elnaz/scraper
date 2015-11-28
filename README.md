# Scraper

A starter project for scraping similar data from multiple sources using [Node](https://nodejs.org/), [Cheerio](https://github.com/cheeriojs/cheerio), and [Request](https://github.com/request/request) and saving the result in a [MongoDB](https://www.mongodb.org/) instance.

## Prerequisites

- [Node](https://nodejs.org/) & [NPM](https://www.npmjs.com/)
- A [MongoDB](https://www.mongodb.org/) server instance (specify its url in config/)
- An empty Github repo for your version of the scraper

## Install

```bash
> git clone https://github.com/elnaz/scraper
> cd scraper
> git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_SCRAPER_PROJECT.git
> git push origin master
> npm i
```

## Usage

```bash
> npm start
```

Note: For legal reasons, when you first clone this starter project, it won't work because the example source, [`/lib/sources/example.js`](https://github.com/elnaz/scraper/blob/master/lib/sources/example.js) is fake. To add your own sources, see below.

## Adding a source

Let's say you need to scrape people from multiple different sources. For each source:

1. Create a file with the source's name in the [`/lib/sources/`](https://github.com/elnaz/scraper/tree/master/lib/sources) directory.
2. In `/lib/sources/source-name.js`,
  - Define and export a `URL` constant of the source's web page.
  - Define and export a `parsePeople` function that takes in a Cheerio selector `$`, uses it to select the data you want to scrape about each person on the page, and returns an array of parsed JSON people objects.
3. Require the new source in the `SOURCES` array of [`/lib/index.js`](https://github.com/elnaz/scraper/blob/master/lib/index.js#L9).
