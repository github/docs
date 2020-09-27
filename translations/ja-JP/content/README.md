# Content

The `/content` directory is where all the site's (English) Markdown content lives!

See the [Markup Reference Guide](https://github.com/github/product-documentation/blob/master/doc-team-workflows/workflow-information-for-all-writers/markup-reference.md) in the `product-documentation` repo for more info about supported Markdown features.

See the top-level [README](../README.md) for general info about how the site works.

- [Frontmatter](#frontmatter) 
  - [`hidden`](#hidden)
  - [`productVersions`](#productversions)
  - [`redirect_from`](#redirect_from)
  - [`title`](#title)
  - [`intro`](#intro)
  - [`layout`](#layout)
  - [`mapTopic`](#maptopic)
  - [Escaping single quotes](#escaping-single-quotes)
- [Index Pages](#index-pages) 
  - [Dotcom index page](#dotcom-index-page)
- [Hidden Pages](#hidden-pages)
- [Category Pages](#category-pages)
- [Map Topic Pages](#map-topic-pages)
- [Versioning](#versioning)
- [Filenames](#filenames)
- [Whitespace Control](#whitespace-control)
- [Links and image paths](#links-and-image-paths)

## Frontmatter

[YAML Frontmatter](https://jekyllrb.com/docs/front-matter/) is an authoring convention popularized by Jekyll that provides a way to add metadata to pages. It is a block of key-value content that lives at the top of every Markdown file. The following frontmatter values have special meanings and requirements for this site:

### `hidden`

- Purpose: Indicates whether a page should be excluded from searches, crawlers, TOCs, etc. See [Hidden Pages](#hidden-pages) for more info.
- Type: `Boolean`. Default is `false`.

### `productVersions`

- Purpose: Indicates the products and product versions to which a page applies. See [Versioning](#versioning) for more info.
- Type: `Object`. Allowable keys are `dotcom` and `enterprise`
- This frontmatter value is currently **required** for all pages.

Example that applies to GitHub.com and recent versions of GitHub Enterprise:

```yml
title: About your personal dashboard
productVersions:
  dotcom: '*'
  enterprise: '>=2.14'
```

Example that applies to all supported versions of GitHub enterprise (but not GitHub.com):

```yml
title: Downloading your license
productVersions:
  enterprise: '*'
```

Note: `dotcom` is an evergreen product without versions, so the `*` is used to denote all versions.

### `redirect_from`

- Purpose: List URLs that should redirect to this page.
- Type: `Array` (for multiple redirects) or `String` (for just one)
- 任意

Example with multiple redirects:

```yml
title: Getting Started with GitHub Desktop
redirect_from:
  - /articles/first-launch/
  - /articles/error-github-enterprise-version-is-too-old/
  - /articles/getting-started-with-github-for-windows/
```

Example with a single redirect:

```yml
title: Denying access to a previously approved OAuth App for your organization
redirect_from: /articles/denying-access-to-a-previously-approved-application-for-your-organization/
```

See [README#redirects](../README#redirects) for more info.

### `title`

- Purpose: Set a human-friendly title for use in the rendered page's `<title>` tag and an `h1` element at the top of the page.
- Type: `String`
- Optional. If omitted, the page `<title>` will still be set, albeit with a generic value like `GitHub.com` or `GitHub Entperprise`.

### `intro`

- Purpose: Sets the intro for the article.
- Type: `String`
- Optional.

### `layout`

- Purpose: Wrap the page in a custom HTML layout.
- Type: `String` that matches the name of the layout file, without an extension. For a layout named `layouts/article.html`, the value would be `article`.
- Optional. If omitted, `layouts/default.html` is used.

### `mapTopic`

- Purpose: Indicates whether a page is a map topic. See [Map Topic Pages](#map-topic-pages) for more info.
- Type: `Boolean`. Default is `false`.
- Optional.

### Escaping single quotes

If you see two single quotes in a row (`''`) in YML frontmatter where you might expect to see one (`'`), this is the YML-preferred way to escape a single quote. From [the YAML spec](https://yaml.org/spec/history/2001-12-10.html):

> In single quoted leaves, a single quote character needs to be escaped. This is done by repeating the character.

As an alternative, you can change the single quotes surrounding the frontmatter field to double quotes and leave interior single quotes unescaped.

## Index Pages

Index pages are written in Markdown, and are always named `index.md`. They exist as landing pages dedicated to specific GitHub products or topical groupings of articles. Each index page contains a Table of Contents (TOC) with links to articles.

Product indexes:

| Filename                     | URL Path                                                      | 目的                                           |
| ---------------------------- | ------------------------------------------------------------- | -------------------------------------------- |
| `/index.md`                  | [/](https://help.github.com/)                                 | GitHub.com and GitHub Enterprise "User" Docs |
| `/enterprise/index.md`       | [/enterprise](https://help.github.com/enterprise)             | GitHub Enterprise                            |
| `/enterprise/admin/index.md` | [/enterprise/admin](https://help.github.com/enterprise/admin) | Enterprise Admin                             |
| `/desktop/index.md`          | [/desktop](https://help.github.com/desktop)                   | Desktop                                      |

GitHub Enterprise Admin also has index pages:

| Filename                                        | URL Path                                                                                            | 目的                 |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------ |
| `/enterprise/admin/clustering/index.md`         | [/enterprise/admin/clustering](https://help.github.com/enterprise/admin/clustering)                 | Clustering         |
| `/enterprise/admin/developer-workflow/index.md` | [/enterprise/admin/developer-workflow](https://help.github.com/enterprise/admin/developer-workflow) | Developer Workflow |
| `/enterprise/admin/enterprise-support/index.md` | [/enterprise/admin/enterprise-support](https://help.github.com/enterprise/admin/enterprise-support) | Enterprise Support |
| `/enterprise/admin/installation/index.md`       | [/enterprise/admin/installation](https://help.github.com/enterprise/admin/installation)             | Installation       |
| `/enterprise/admin/migrations/index.md`         | [/enterprise/admin/migrations](https://help.github.com/enterprise/admin/migrations)                 | Migrations         |
| `/enterprise/admin/user-management/index.md`    | [/enterprise/admin/user-management](https://help.github.com/enterprise/admin/user-management)       | ユーザ管理              |

See <enterprise/admin/README.md> for details on how guides should be written.

Desktop guides also have index pages:

| Filename                                       | URL Path                                                                                                            | 目的                                  |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `/desktop/contributing-to-projects`            | [/desktop/contributing-to-projects](https://help.github.com/desktop/contributing-to-projects)                       | Contributing to Projects            |
| `/desktop/getting-started-with-github-desktop` | [/desktop/getting-started-with-github-desktop](https://help.github.com/desktop/getting-started-with-github-desktop) | Getting Started with GitHub Desktop |

**Note**: All links to GitHub Desktop Classic (such as `https://help.github.com/desktop-classic`) now redirect to https://desktop.github.com.

### Dotcom index page

The file `content/index.md` is rendered as a long TOC on the https://help.github.com homepage.

The formatting of this file must adhere to a specific structure in order for the site to render the page properly and create automatic links to articles:

| Content type                  | Formatting | サンプル                                 |
| ----------------------------- | ---------- | ------------------------------------ |
| [Category](#category-pages)   | `h2`       | `## Bootcamp`                        |
| [Map topic](#map-topic-pages) | `h3`       | `### Managing user account settings` |
| Article                       | List item  | `- Set up git`                       |

See [Whitespace Control](#whitespace-control) for info on using Liquid conditionals within TOC lists.

## Hidden Pages

Hidden pages are publicly accessible but excluded from the search index, and they're not linked to by any other pages.

In development, you can view a list of all hidden pages by visiting [localhost:4000/hidden](http://localhost:4000/hidden). Note, however, that this page is not available in production.

To make a page hidden, add `hidden: true` to its YAML frontmatter.

## Category Pages

Category pages are only found in Dotcom docs (e.g., https://help.github.com/categories/bootcamp). The content displayed on these pages is autogenerated from the category's parent [index page](#dotcom-index-pages), where the name of the category is an `h2`.

Every category in the index page must have a corresponding placeholder file in `content/dotcom/categories` ending in `.md`. You can add redirects to the placeholder files.

## Map Topic Pages

Map topics are found in Dotcom, Enterprise Admin, and Desktop docs. The content displayed on these pages is autogenerated from each map topic's parent [index page](#index-pages). Map topic files live alongside article files.

To make a page a map topic, add `mapTopic: true` to its YAML frontmatter and leave the rest of the file empty.

## Versioning

Versioning for any content file lives in **two** places:

- The file's [`productVersions`](#productversions) frontmatter.
- Liquid conditionals in the file's parent [index page](#index-pages).

For example, an article with this frontmatter:

```yml
title: About your personal dashboard
productVersions:
  dotcom: '*'
  enterprise: '>=2.14'
```

should be referenced in the parent index page like this:
{%- if page.version == 'dotcom' or page.version ver_gt "2.13" %}
- About your personal dashboard
{%- endif %}
## Filenames

The site automatically creates links to articles in index pages. For example, this block in `content/index.md`:

    ## Bootcamp
    
    - Set up git
    - Create a repo
    - Fork a repo
    - Be social
    

renders with links to each article.

If you're adding a new article, make sure the filename is a [kebab-cased](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) version of the title you use in both the article and the parent index. This can get tricky when a title has punctuation (such as "GitHub's Billing Plans"). If you're not sure what the filename should be based on the title, you can find out by adding the title to the TOC. 例:

    ## Bootcamp
    
    - Set up git
    - Create a repo
    - Fork a repo
    - Be social
    - I'm a new article
    

Then just run the site locally and see what the link is. In this example, the filename would be: `im-a-new-article`

## Whitespace Control

When using Liquid conditionals in lists or tables, you can use [whitespace control](https://shopify.github.io/liquid/basics/whitespace/) characters to prevent the addition of newlines that would break the list or table rendering.

Just add a hyphen on either the left, right, or both sides to indicate that there should be no newline on that side. For example, this statement removes a newline on the left side:
{%- if page.version == 'dotcom' %}
These characters are especially important in [index pages](#index-pages) comprised of list items.

## Links and image paths

Any local links (like those starting with `/articles/`) and image paths (starting with `/assets`) that you include in content and data files will undergo some transformations on the server side to match the current page's language and Enterprise version (if applicable). The handling for these transformations lives in [`lib/rewrite-local-links`](lib/rewrite-local-links.js) and [`lib/rewrite-asset-paths-to-s3`](lib/rewrite-asset-paths-to-s3.js).

For example, if you include the following link in a content file:

    /articles/creating-a-saved-reply
    

When viewed on Dotcom, the link gets rendered with the language code:

    /en/articles/creating-a-saved-reply
    

and when viewed on GHE, the version is included as well:

    /en/enterprise/2.16/user/articles/creating-a-saved-reply
    

The transformation is a little simpler for image paths. If you include the following image path in a content file:

    /assets/images/help/profile/follow-user-button.png
    

when viewed on GHE, the path gets rewritten to include S3:

    https://github-images.s3.amazonaws.com/enterprise/2.16/assets/images/help/profile/follow-user-button.png
    

### Preventing transformations

Sometimes you want to link to a Dotcom-only article in Enterprise content and you don't want the link to be Enterprise-ified. To prevent the transformation, write the link using HTML and add a class of `dotcom-only`. 例:

    <a href="/articles/github-terms-of-service/" class="dotcom-only">GitHub's Terms of Service</a>
    

Sometimes the canonical home of content moves outside the help site. None of the links included in [`lib/external-redirects.json`](lib/external-redirects.json) get rewritten. See the top-level [README](../README.md#external-redirects) for more info about this type of redirect.