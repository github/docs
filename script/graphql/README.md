# GraphQL scripts

A [scheduled workflow](../.github/workflows/update-graphql-files.yml) runs the following
scripts on an hourly basis:
```
script/graphql/update-files.js
script/graphql/build-changelog-from-markdown.js
```
These scripts update the [static JSON files](../../lib/graphql/static) used to
render GraphQL docs. See the [`lib/graphql/README`](../../lib/graphql/README.md)
for more info.

**Note**: The changelog script pulls content from [the internal-developer repo](https://github.com/github/internal-developer.github.com/tree/master/content/v4/changelog). It relies on [graphql-docs automation](https://github.com/github/graphql-docs/blob/master/lib/graphql_docs/update_internal_developer/change_log.rb) running daily to update the changelog files in internal-developer.
