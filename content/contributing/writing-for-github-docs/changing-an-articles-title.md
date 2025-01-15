---
title: Changing an article's title
shortTitle: Change an article's title
intro: "When it's necessary to change the title of an article, the name may need to be updated in several places."
versions:
  feature: 'contributing'
redirect_from:
  - /contributing/syntax-and-versioning-for-github-docs/changing-an-articles-title
---

## Changing the title of an article

Sometimes, it's necessary to change the title of a help article. There are several considerations to keep in mind when you retitle an article.

## Background on changing the filename

The title of the article corresponds directly to the name of the Markdown file that contains that article, for a couple of reasons:

* **SEO:** When we use real words that correlate to the content of the article in a URL, our articles are weighted more heavily for search engines. For more information, see "Improve the structure of your URLs" in the [Google Search Engine Optimization Starter Guide](http://static.googleusercontent.com/media/www.google.com/en//webmasters/docs/search-engine-optimization-starter-guide.pdf).

## Places you should consider updating when you change a title

There are several places you may need to update when you give an article a new title.

### Frontmatter and metadata section

Each article contains a metadata section or frontmatter located at the **top of the article** formatted using YAML syntax. This metadata section generates the title of the article and contains other important data, such as redirects and sometimes even short description conrefs that link to reusable intro text.

```yaml
---
title: Your article name
intro:
redirect_from:
  - /articles/older-outdated-article-name/
---
```

#### Frontmatter update checklist

* Update title using sentence case
* Update redirects. Almost every time we retitle an article, we should add a redirect referencing the article's old URL and make sure we keep any redirects in the old article's frontmatter.

### Filename

You can use the [`git mv` command](https://git-scm.com/docs/git-mv) in your terminal to change the name of the file.

`$ git mv old-article-name.md new-article-name.md`

### Parent index file

Make sure to update the link to the file in its parent `index.md` file, which generates the TOC.

### Inline links within other articles

We link between articles in our documentation. We recommend searching for both the filename and title to find links to update.

### Links across {% data variables.product.prodname_dotcom %}

Search in product for links to the old title. If you find any outdated links, contact the relevant team or engineers to let them know the link has changed and ask them to update it. If you're not sure who to contact, you can ask a member of the {% data variables.product.prodname_docs %} team. As a courtesy, you can also create a pull request with the updated links and ask the relevant team to merge it after the updated article title ships.
