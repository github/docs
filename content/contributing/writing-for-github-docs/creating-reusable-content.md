---
title: Creating reusable content
shortTitle: Create reusable content
intro: 'You can create reusable content that can be referenced in multiple content files.'
product: '{% data reusables.contributing.product-note %}'
versions:
  feature: 'contributing'
---

## About reusables

Reusables are long strings of reusable text, such as paragraphs or procedural lists, that can be referenced in multiple content files.

We use Markdown (instead of YAML) for reusables. Markdown makes it possible for our localization pipeline to split the strings into smaller translatable segments, leading to fewer translation errors and less churn when the source English content changes.

Each reusable lives in its own Markdown file.

The path and filename of each Markdown file determines what its path will be in the data object. For example, a file named `{% raw %}/data/reusables/foo/bar.md{% endraw %}` will be accessible as `{% raw %}{% data reusables.foo.bar %}{% endraw %}` in pages.

Reusable files are divided generally into directories by task. For example, if you're creating a reusable string for articles about {% data variables.product.prodname_dotcom %} notifications, you'd add it in the directory `{% raw %}data/reusables/notifications/{% endraw %}`, in a file named `{% raw %}data/reusables/notifications/YOUR-REUSABLE-NAME.md{% endraw %}`. The content reference you'd add to the source would look like `{% raw %}{% data reusables.notifications.YOUR-REUSABLE-NAME %}{% endraw %}`.

### Applying versioning to reusables

Reusables can include Liquid conditionals to conditionally render content depending on the current version being viewed. <!-- For more information, see "[AUTOTITLE](/contributing/syntax-and-versioning-for-github-docs/using-markdown-and-liquid-in-github-docs)." -->

## About variables

Variables are short strings of reusable text.

We use YAML files for variables.

The path, filename, and keys within each YAML file determine what its path will be in the data object.

For example, this YAML file, `{% raw %}data/variables/foo/bar.yml{% endraw %}`, contains two variables:

```yaml
# the YAML file can contain multiple short strings in one file
meaning_of_life: 42

# the strings can also be nested if needed
nested:
  values:
    too: Yes!
```

The values would be accessible as `{% raw %}{% data foo.bar.meaning_of_life %}{% endraw %}` and `{% raw %}{% data foo.bar.nested.values.too %}{% endraw %}`.
