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
