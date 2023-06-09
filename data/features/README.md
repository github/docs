## Feature-based versioning

Feature-based versioning allows us to define and control the versions of an arbitrarily named "feature" in one place.

**Note**: Do not delete `data/features/placeholder.yml` because it is used by tests.

## How it works

Add a new YAML file with the feature name you want to use in this directory. For a feature named `meow`, that would be `data/features/meow.yml`.

Add a `versions` block to the YML file with the short names of the versions the feature is available in. For example:

```yaml
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.1'
  ghae: '*'
```

The format and allowed values are the same as the [frontmatter versions property](/content#versions).

### Liquid conditionals

Now you can use `{% ifversion meow %} ... {% endif %}` in content files!

### Frontmatter

You can also use the feature in frontmatter in content files:

```yaml
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.1'
  feature: 'meow'
```

You cannot use `feature:` to specify multiple concurrent versions, as this is not supported. Alternatively, you could create a new feature-based versioning file with the required versioning.

## Schema enforcement

The schema for validating the feature versioning lives in [`src/content-linter/lib/feature-versions-schema.js`](src/content-linter/lib/feature-versions-schema.js) and is exercised by [`tests/linting/lint-versioning.js`](tests/linting/lint-versioning.js).

## Script to remove feature tags

TBD!
