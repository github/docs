# REST scripts

Writers run the [update-files.ts](./update-files.ts) script to get the latest dereferenced OpenAPI schema files.
```
npm run sync-rest
```
These scripts update the dereferenced OpenAPI files to create [the decorated files](../../src/rest/data) used to
render REST docs. See the [`src/rest/README`](../../src/rest/README.md)
for more info.

Writers and developers depend on this script to preview OpenAPI changes in the docs. When you update this script please [follow the preview steps here](https://thehub.github.com/epd/engineering/products-and-services/public-apis/rest/openapi/openapi-in-the-docs/#previewing-changes-in-the-docs) to verify that:

- The script runs without errors
- You can preview REST API changes
- You can preview webhook changes
- You can generate a preview for an individual version (e.g. GHEC only)
- You can generate a preview when a new category is added
- You can generate a preview when a new subcategory is added
- You can generate a preview when a new category and subcategory are added together

## Production `--decorate-only` option

When changes to the OpenAPI are merged to the default branch of the `github/github` repository, a pull request is automatically opened with the updated dereferenced OpenAPI files. When pull requests are authored by `github-openapi-bot`, a CI test runs the `npm run sync-rest` script with the `--decorate-only` option. The `--decorate-only` option only decorates the dereferenced OpenAPI files, using the existing dereferenced OpenAPI schema files, and checks those changes in to the existing branch. The `--decorate-only` option is only used by a 🤖 and is only used on production dereferenced OpenAPI schema files.

The `.github/workflows/openapi-schema-check.yml` CI test checks that the dereferenced and decorated schema files match. If the files don't match, potential causes could be:
- something went wrong when the schema changes (created by `github-openapi-bot`) were merged into another branch
- the workflow that generates the decorated files didn't run or failed

⚠️ Only do this if you know exactly what the `--decorate-only` option does. ⚠️

If you know that the dereferenced schema files are correct, you can run the `npm run sync-rest -- --decorate-only` command on the branch locally to update the decorated files in your branch. 
