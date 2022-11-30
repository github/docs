## Feature-based versioning

Feature-based versioning allows us to define and control the versions of an arbitrarily named "feature" in one place.

**Note**: Do not delete `data/features/placeholder.yml` because it is used by tests.

## How it works

Add a new YAML file with the feature name you want to use in this directory. For a feature named `meow`, that would be `data/features/meow.yml`.

Add a `versions` block to the YML file with the short names of the versions the feature is available in. For example:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

The format and allowed values are the same as the [frontmatter versions property](/content#versions).

### Liquid conditionals

Now you can use `{% if meow %} ... {% endif %}` in content files! Note this is the `if` tag, not the new `ifversion` tag.

### Frontmatter

You can also use the feature in frontmatter in content files:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

If you want a content file to apply to more than one feature, you can do this:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: ['meow', 'blorp']
```

## Schema enforcement

The schema for validating the feature versioning lives in [`tests/helpers/schemas/feature-versions.js`](tests/helpers/schemas/feature-versions.js) and is exercised by [`tests/content/lint-files.js`](tests/content/lint-files.js).

## Script to remove feature tags

TBD!
