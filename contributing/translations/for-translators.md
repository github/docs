# Translation guide for translators

## Translated files

We only translate:
-  all files `/content`
- `/data/release-notes`
- `/data/reusables`
- `/data/variables` - **except** `/data/variables/product.yml`
- `/data/glossaries/external.yml`
- `/data/product-examples`

## Translation guidelines

We do not accept translation changes from open source contributors.

- [ ] Lint all `*.yml` files before submitting to make sure they are valid YAML format.
- [ ] Lint all frontmatter (between the triple dashes at the top of all `/content` files) to make sure they are valid YAML format.
- [ ] Do not translate anything inside of Liquid tags, such as `{% data %}` or `{% ifversion ... %}`, `{% note %}` or `{{ someVariable }}`.
- [ ] Be sure to translate the frontmatter properties `title`, `shortTitle`, `intro`, `permissions` but leave all other keys in each content `.md` file
- [ ] For every `{% ifversion ... %}` there's a `{% endif %}` following it

## Error diagnosis

We provide error reports that we upload daily.

<details>
<summary>Report locations</summary>

We have both "latest" or date in 'yyyy-mm-dd' format for historical reference.

- https://githubdocs.blob.core.windows.net/translation-health-reports/es-latest.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/es-2023-01-05.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/ja-latest.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/ja-2023-01-05.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/pt-latest.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/pt-2023-01-05.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/zh-latest.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/zh-2023-01-05.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/ru-latest.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/ru-2023-01-05.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/ko-latest.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/ko-2023-01-05.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/fr-latest.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/fr-2023-01-05.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/de-latest.json
- https://githubdocs.blob.core.windows.net/translation-health-reports/de-2023-01-05.json

</details>
