# Rulesets

Copies of the repository rulesets on github/docs-internal and github/docs, exported from the live settings. One file per ruleset, named after the ruleset.

| Folder | Applies to |
| --- | --- |
| `docs-internal/` | github/docs-internal |
| `docs/` | github/docs |

This folder is mirrored to github/docs along with the rest of the repo, so both folders appear in both repos. The folder name says which repo a file belongs to, not the repo you are reading it in. A ruleset payload has no field naming its repo, and both repos have a ruleset called `main branch protection`.

GitHub does not apply these files. Editing a file changes nothing live, and editing a ruleset in the UI changes nothing here. Keep the two matching by hand.

The weekday [ruleset drift check](https://github.com/github/technical-content/tree/main/.github/scripts/ruleset-drift) in github/technical-content reads these files and alerts when the live rules on `main` are weaker than what they say. [Branch protection with rulesets](https://github.com/github/technical-content/blob/main/engineering/branch-protection-rulesets.md) explains why each rule exists.

## Change a ruleset

Edit the file in a pull request here in docs-internal, including files under `docs/`. After it merges, apply it as a repo admin of the repo named by the folder:

```sh
repo=docs-internal
name="main branch protection"
id=$(gh api "repos/github/$repo/rulesets" --jq ".[] | select(.name == \"$name\") | .id")
gh api -X PUT "repos/github/$repo/rulesets/$id" --input ".github/rulesets/$repo/main-branch-protection.json"
```

`PUT` replaces the whole ruleset. For a new ruleset, `POST` instead: `gh api -X POST repos/github/REPO/rulesets --input .github/rulesets/REPO/FILE.json`.

When you add or remove a test suite in `.github/workflows/test.yml`, update `required_status_checks` in both `docs-internal/main-branch-protection.json` and `docs/main-branch-protection.json`, except for suites the matrix excludes on github/docs.

## Export a ruleset

```sh
gh api repos/github/REPO/rulesets/ID --jq '{name, target, enforcement, bypass_actors, conditions, rules}' > .github/rulesets/REPO/FILE.json
```
