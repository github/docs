# Languages

Languages refers to the different translations we support on docs.github.com. Currently, our supported languages include Chinese, Spanish, Portuguese, Russian, Japanese, French, German, and Korean.

## TLDR: How translations work

1. Content is authored in English.
1. Periodically, translators grab newly authored English content and translate it.
1. Periodically, translators push newly translated content to language-specific private repos.
1. Every time we deploy to production, we checkout translations repos into a `translations/` directory.
1. When the app starts up, we create identical trees for each language we support. The trees are made by following an index page's `children` frontmatter.
1. When a translated page is requested, we check for key rendering errors (e.g. corrupt Liquid syntax) and can fall back to the English equivalent if needed.

This document expands on the TLDR above in the following sections:
- [Creation of translated content](#creation-of-translated-content)
- [Deployment of translated content](#deployment-of-translated-content)
- [Serving translated content](#serving-translated-content)
- [Management of translation-related assets](#management-of-translated-related-assets)
- [Working with translated content locally](#working-with-translated-content-locally)

## Creation of translated content

GitHub Docs uses a mix of machine and human translators to source the content.

Periodically, translators read the `content/**` and `data/**` directories from `github/docs-internal` and compare it with what's already translated. Any newly introduced English content that needs to be translated is then **added** to its translation repo. Files are never deleted from the translation repos.

## Deployment of translated content

In the deployment workflow, we [checkout](https://github.com/github/docs-internal/blob/a8e52aad1a6b67f41da92d314bd7fd8cd84193a4/.github/workflows/azure-prod-build-deploy.yml#L90-L92) each and every translation repo and put their contents into the `translations/` directory.

The enabled languages and their source directories are interpreted in [`src/languages/lib/languages.js`](https://github.com/github/docs-internal/blob/a8e52aad1a6b67f41da92d314bd7fd8cd84193a4/src/languages/lib/languages.js), which ensures English and translated content are in the same Docker image we deploy.

When the app starts up, we:
1. Create a [tree of possible pages in English](https://github.com/github/docs-internal/blob/c535fe30bc271f35090054b21e1aaf69cb125e71/src/frame/lib/page-data.js#L45-L47) by following the `children:` property in each `index.md` file.
1. Create a [translated tree](https://github.com/github/docs-internal/blob/48654730dfcff3822c7262432cd0f7247afc4166/src/frame/lib/page-data.js#L56-L67) by looping over the English tree and, for each file, we attempt to read the translated source using the page's `relativePath`, swapping the file containing the contents with the translated target. At this point, each node in the tree is a Page instance.
1. Transpose the data to `req.context.pages` which is a mapping object that has a key for every Page's permalinks to the Page instance.

Some notes about this approach:
- We do not read the `children:` frontmatter property in the translated content.
- The only frontmatter properties we [use in translated files](https://github.com/github/docs-internal/blob/c535fe30bc271f35090054b21e1aaf69cb125e71/src/frame/lib/page-data.js#L207-L226) are: `title`, `shortTitle`, `intro`.
- We do not need to read translated content that doesn't have an English counterpart.

## Serving translated content

When a user requests a translated page, it's possible that the content contains errors, like invalid Liquid.

In these situations, we fall back to English content for the part that generated an error, not the whole page. For example, a Japanese translation might have a perfectly good `title`, `shortTitle`, and Markdown body, but the Liquid within the `intro` frontmatter property could be broken. In that case, you'll get a Japanese title, English intro, and Japanese body.

Details of how the error handling and logic for fallback works, see `src/languages/lib/render-with-fallback.js`.

### Handling of moved or deleted content

Translations are always delayed and, at best, are updated once a day. So we need the ability to serve content that's been newly introduced but has not yet been translated.

Suppose an author *introduces* a new English page (e.g. `/en/my/new/page`). As soon as that's in production, we should be able to load all translations (e.g., `/es/my/new/page` or `/ru/my/new/page`) but that page won't be translated yet.

Similarly, suppose an author *deletes* `/en/some/old/page` and sets it to redirect to `/en/some/other/page`. The translated pages must also redirect. To handle redirects, we record all `redirect_from` frontmatter entries from the English content, and map that in the translated tree, independent of the language. When a user requests a translated page, the [handleRedirects middleware](https://github.com/github/docs-internal/blob/48654730dfcff3822c7262432cd0f7247afc4166/src/redirects/middleware/handle-redirects.ts) removes the language code from the URL, looks it up in the record of redirects, and when resolved injects the language code back into the URL.

To address the cases discussed in this section, we adopt the following methodology when serving translated pages:
1. **If the English URL returns `200 OK`, the translated URL also returns `200 OK`.** This works because we of the [trees we create](https://github.com/github/docs-internal/blob/3249d8fb67b6d73209f1a620d76e1b30f0b10573/src/frame/lib/page-data.js#L45) during startup, based entirely on English content.
1. **If the English URL returns `301`, the translated URL also returns `301`.**

### Rendering `data` tags

The `{% data ... %}` liquid tag is an exception, which utilizes the `data/` directory. We do not preload `data/**` files, they're looked up on-the-fly when rendering. It's highly likely these files do not exist in English or are very out of date.

For example, when rendering a translated page you might find a Liquid reference to a reusable, `{% data reusables.saml.saml-accounts %}`. That reference is looked up on-the-fly, which should resolve to `data/reusables/saml/saml-accounts.md` in the translation directory. If it doesn't exist, it will then use the English version of the reusable. If it does exist, it will attempt to render it and fall back to the English if there's a Liquid rendering error.

Alternatively, suppose the translated content below:

```markdown
Detta exemplet är på Svenska för skojs
skull {% data variables.support.help %}.
```

If the translated `data/variables/support.yml` is corrupted, and we can't fall back to an equivalent English file because it's been removed or renamed. In this case, we display the empty string in its place; we don't surface the error.

## Management of translated-related assets

### Source repos

The translation repos can only be read by us. We **do not** and cannot modify their contents. When errors in translations are found, we communicate them to the translators and wait for the fixes to appear in the translated repos.

So if a translation urgently needs to be updated  and we can't wait for the usual translation process, the best solution is to implement string replacement operations directly in the code. For example, with the `translateTree` function in `src/frame/lib/page-data.js`.

When a file is renamed in `github/docs-internal`, say from `foo.md` to `bar.md`, the translation repos keep *both* `foo.md` and `bar.md`. Files are not deleted from translation repos. This limitation prevents us from scanning the directories for files like we do with the English content and it is the motivation for the creation of language-specific trees.

### Images

Translations depend on the same global store of asset images as the English content. Translation repos contain only `content/` and `data/` directories, but no `assets/`.

```sh
translations/de-de
├── content
└── data
```

As a result, images should not be deleted from the global store until we've confirmed they are no longer used in a translation. We have [a workflow](https://github.com/github/docs-internal/blob/48654730dfcff3822c7262432cd0f7247afc4166/.github/workflows/orphaned-assets-check.yml) that checks for orphaned assets and removes them when they're no longer used.

## Working with translated content locally

This section assumes you want your local environment to replicate the structure of translations in production.

1. Clone the (private) translation repos into the `translations/[lang-code]` directories.
    ```sh
    cd docs-internal
    mkdir translations && cd translations

    git clone <zh-cn-repo-url> zh-cn
    git clone <ja-jp-repo-url> ja-jp
    git clone <es-es-repo-url> es-es
    git clone <pt-br-repo-url> pt-br
    git clone <de-de-repo-url> de-de
    git clone <fr-fr-repo-url> fr-fr
    git clone <ru-ru-repo-url> ru-ru
    git clone <ko-kr-repo-url> ko-kr
    ```
1. Start the development server with `npm run start-all-languages`. If you need to enable specific languages, you can set `ENABLED_LANGUAGES`. For example, to start the server with English, Japanese, and Spanish only, use: `ENABLED_LANGUAGES=en,ja,es NODE_ENV=development nodemon server.js`

Note: If you ever need to place translations in a different location, use the `TRANSLATIONS_ROOT` environment variable. We do this for tests.

A script in `src/languages/scripts` can be used to update the translation repos.
