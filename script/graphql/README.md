# GraphQL scripts

A [scheduled workflow](../.github/workflows/update-graphql-files.yml) runs the following
scripts on a daily basis:
```
script/graphql/update-files.js
```
These scripts update the [static JSON files](../../lib/graphql/static) used to
render GraphQL docs. See the [`lib/graphql/README`](../../lib/graphql/README.md)
for more info.

**Note**: The changelog script pulls content from the internal-developer repo. It relies on graphql-docs automation running daily to update the changelog files in internal-developer.
