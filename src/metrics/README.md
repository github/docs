# Kusto tooling

CLI tools to fetch data from the Kusto API.

## Installation and authentication

1. Install the Azure CLI with `brew install azure-cli`.
    * If you have the option to **not** update all your brew packages, choose that, or it will take a really long time.
1. Run `az login`.
    * You'll have to run `az login` whenever your session expires. The sessions are fairly long lasting.
1. Enter your `<username>@githubazure.com` credentials.
    * These will get cached for future logins.
1. At the prompt in Terminal asking which subscription you want to use, just press Enter to choose the default.
1. Open or create an `.env` file in the root directory of your checkout (this file is already in `.gitignore` so it won't be tracked by Git).
1. Add the `KUSTO_CLUSTER` and `KUSTO_DATABASE` values to the `.env` (_these values are pinned in slack_):
    ```
    KUSTO_CLUSTER='<value>'
    KUSTO_DATABASE='<value>'
    ```

## docstat usage

Run `npm run docstat -- <URL>` on any GitHub Docs URL to gather a set of default metrics about it, including 30d views, users, view duration, bounces, helpfulness score, and exits to support.

Notes:
* If the URL doesn't include a version, `docstat` will return data that includes **all versions** (so FPT, Cloud, Server, etc.).
    * If you want data for FPT only, pass the `--fptOnly` option.
* `docstat` only accepts URLs with an `en` language code or no language code, and it only fetches English data.

To see all the options:
```
npm run docstat -- --help
```
You can combine options like this:
```
npm run docstat -- https://docs.github.com/copilot/tutorials/modernize-legacy-code --compare --range 60 
```
Use `--redirects` to include `redirect_from` frontmatter paths in the queries (this is helpful if the article may have moved recently):
```
npm run docstat -- https://docs.github.com/copilot/tutorials/modernize-legacy-code --redirects
```
Use the `--json` (or `-j`) option to output JSON:
```
npm run docstat -- https://docs.github.com/copilot/tutorials/modernize-legacy-code --json
```
If you want to pass the results of the JSON to `jq`, you need to use `silent` mode:
```
npm run --silent docstat -- https://docs.github.com/copilot/tutorials/modernize-legacy-code --json | jq .data.users
```

## docsaudit usage

Run `npm run docsaudit` on a top-level content directory to gather data about its files—including title, path, versions, 30d views, and 30d users—and output it to a CSV file.

To see all the options:
```
npm run docsaudit -- --help
```
Run the script on any top-level content directory:
```
npm run docsaudit -- <content directory name>
```
For example:
```
npm run docsaudit -- actions
```

## Future development

Applies to all scripts:

* The date range option only accepts a start date (via `-r <number>`, where the number means "`<number>` days ago"). The end date will always be the current date.
    * In the future, we can add an option to set a custom end date.

* The only Kusto queries available are hardcoded in the `kusto/queries` directory.
    * In the future, we can hardcode more queries, add the ability to send custom queries, or perhaps create pre-defined sets of queries.