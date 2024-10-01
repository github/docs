# GraphQL scripts

A [scheduled workflow](../../../.github/workflows/sync-graphql.yml) runs the following
scripts on a daily basis:
```
src/graphql/scripts/sync.js
```
These scripts update the [JSON data files](../../../src/graphql/data) used to
render GraphQL docs. See the [`src/graphql/README`](../../../src/graphql/README.md)
for more info.

**Note**: The changelog script pulls content from the internal-developer repo. It relies on graphql-docs automation running daily to update the changelog files in internal-developer.
