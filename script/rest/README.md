# REST scripts

Writers run the [update-files.js](./update-files.js) script to get the latest dereferenced OpenAPI schema files.
```
script/rest/update-files.js
```
These scripts update the [static dereferenced OpenAPI files](../../lib/rest/static/dereferenced) to create [the decorated files](../../lib/rest/static/decorated) used to
render REST docs. See the [`lib/rest/README`](../../lib/rest/README.md)
for more info.

## Production `--decorate-only` option

When changes to the OpenAPI are merged to the default branch of the `github/github` repository, a pull request is automatically opened with the updated dereferenced OpenAPI files. When pull requests are authored by `github-openapi-bot`, a CI test runs the `lib/rest/update-files.js` script with the `--decorate-only` option. The `--decorate-only` option only decorates the dereferenced OpenAPI files, using the existing dereferenced OpenAPI schema files, and checks those changes in to the existing branch. The `--decorate-only` option is only used by a 🤖 and is only used on production dereferenced OpenAPI schema files.

The `.github/workflows/openapi-schema-check.yml` CI test checks that the dereferenced and decorated schema files match. If the files don't match, potential causes could be:
- something went wrong when the schema changes (created by `github-openapi-bot`) were merged into another branch
- the workflow that generates the decorated files didn't run or failed

⚠️ Only do this if you know exactly what the `--decorate-only` option does. ⚠️

If you know that the dereferenced schema files are correct, you can run the `lib/rest/update-files.js --decorate-only` command on the branch locally to update the decorated files in your branch. 
