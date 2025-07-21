## Scripts

See documentation below for:

* [docstat](#docstat)

  Run this on any GitHub Docs URL to gather a set of metrics about it.

* [docsaudit](#docsaudit)

  Run this on a top-level content directory to gather info about its files and output to a CSV.

Print usage info for any script in this directory:

```bash
tsx src/metrics/scripts/<SCRIPT_NAME>.js --help
```
If you get `command not found: tsx`, run: 
```
npm install -g tsx
```

## docstat

Run `docstat` on any GitHub Docs URL to gather a set of default metrics about it, including 30d views, users, view duration, bounces, helpfulness score, and exits to support.

`docstat` checks the URL against the Docs API pagelist at https://docs.github.com/api/pagelist to see if it's valid.

If the URL doesn't include a version, `docstat` will return data for **all versions**. Pass `--fptOnly` for free-pro-team data.

`docstat` only accepts URLs with an `en` language code or no language code, and it only fetches English data.

### Usage

The steps below show the [global alias](#set-a-global-alias). Use the full command path (`tsx src/metrics/scripts/docstat.js`) if you don't set up an alias.

To see the available options:
```
docstat --help
```
Run the script on any GitHub Docs URL:
```
docstat https://docs.github.com/en/copilot/rolling-out-github-copilot-at-scale
```
Spell options out like this:
```
docstat https://docs.github.com/en/copilot/rolling-out-github-copilot-at-scale --compare --range 60 
```
or use the shorthand versions:
```
docstat https://docs.github.com/en/copilot/rolling-out-github-copilot-at-scale -c -r 60
```
Use `--redirects` to include `redirect_from` frontmatter paths in the queries:
```
docstat https://docs.github.com/en/copilot/rolling-out-github-copilot-at-scale --redirects
```
Use the `--json` (or `-j`) option to output JSON:
```
docstat https://docs.github.com/en/copilot/rolling-out-github-copilot-at-scale --json
```

### Set a global alias

To use `docstat` from any location in Terminal, set up a global alias:

1. Open your shell configuration file (like `~/.bash_profile` or `~/.zshrc`) in a text editor.
2. Add the following line, replacing the path with the actual path to your local directory, for example:
    ```bash
    alias docstat="tsx ~/gh-repos/docs-internal/src/metrics/scripts/docstat.js"
    ```
3. Save the file and reload your configuration:
    ```bash
    source ~/.bash_profile  # or ~/.zshrc, etc.
    ```
Now you can run `docstat <url>` from any directory.

## docsaudit

Run `docsaudit` on a top-level content directory to gather data about its files—including title, path, versions, 30d views, and 30d users—and output it to a CSV file.

To see the available options:
```
tsx src/metrics/scripts/docsaudit.js --help
```
Run the script on any top-level content directory:
```
tsx src/metrics/scripts/docsaudit.js <content directory name>
```
For example:
```
tsx src/metrics/scripts/docsaudit.js actions
```

## Future development

Applies to all scripts in this directory:

* The date range option only accepts a start date (via `-r <number>`, where the number means "`<number>` days ago"). The end date will always be the current date.
    * In the future, we can add an option to set a custom end date.

* The only Kusto queries available are hardcoded in the `kusto/queries` directory.
    * In the future, we can hardcode more queries, add the ability to send custom queries, or perhaps create pre-defined sets of queries.