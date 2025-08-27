# Reusables CLI

Helpful CLI tool for making it easier to work with `data/reusables`. 

Helps find where reusables are already used, and where they could be used. 

## Usage

`npm run reusables -- --help` to see commands

## Commands:

`npm run reusables --`:

- [find used <reusable-path>](#command-npm-run-reusables-cli----find-used-reusable-path)
- [find top-used [number-of-most-used-to-find]](#command-npm-run-reusables-cli----find-top-used-number-of-most-used-to-find)
- [find unused](#command-npm-run-reusables-cli----find-unused)
- [find potential-uses](#command-npm-run-reusables-cli----find-potential-uses)


### Command: `npm run reusables -- find used <reusable-path>`

Find where a specific reusable is used

#### Example

`npm run reusables -- find used copilot/signup-procedure.md`

```
Searching for content files that use data/reusables/copilot/signup-procedure.md...

Found 2 files that use data/reusables/copilot/signup-procedure.md.

In content/billing/managing-billing-for-github-copilot/managing-your-github-copilot-individual-subscription.md on:
  Line 35

In content/copilot/quickstart.md on:
  Line 29
```

### Command: `npm run reusables -- find top-used [number-of-most-used-to-find]`

Find top X (default 10) most used reusables and the number of times they are used.

#### Example

`npm run reusables -- find top-used 5`

```
Searching for the top 5 most used reusables...
0/3225 reusables checked...
100/3225 reusables checked...
(etc, etc)
3225/3225 reusables checked...

Top 5 most used reusables:
#1. 318 uses of data/reusables/repositories/navigate-to-repo.md
#2. 286 uses of data/reusables/profile/access_org.md
#3. 212 uses of data/reusables/enterprise-accounts/access-enterprise.md
#4. 193 uses of data/reusables/profile/org_settings.md
#5. 171 uses of data/reusables/actions/action-checkout.md
```

### Command: `npm run reusables -- find unused`

Find which reusables aren't used in any content files.

This will take ~10+ minutes to run locally. You will be updated at each 5% interval.

#### Example

`npm run reusables -- find unused`

```
Searching 6468 files and 3225 reusables...
Progress: 5% done
Progress: 10% done
Progress: 15% done

...

Found 111 unused reusables:
data/reusables/actions/action-labeler.md
data/reusables/actions/actions-audit-events-for-enterprise.md
data/reusables/actions/actions-audit-events-workflow.md
data/reusables/actions/cache-no-org-policy.md
data/reusables/actions/configure-runner-group-access.md
...
```

### Command: `npm run reusables -- find potential-uses`

Find which files that reusables might be used in. 

The command does this by searching every `content/` & `data/` file for strings that match every reusable that isn't ignored in `src/content-render/scripts/reusables-cli/ignore-reusables.ts`.

#### Example

`npm run reusables -- find potential-uses`

```
Searching 6468 files for potential reusable use...
0/3225 reusables checked...
100/3225 reusables checked...
(etc, etc)
3223/3225 reusables checked...

Found 13 files that could use reusables.

Reusable data/reusables/actions/action-labeler.md can be used
In content/actions/using-workflows/reusing-workflows.md on:
  Line 146
  Line 188

(cont.)
```

#### Ignoring reusables

Some reusables might not make sense to "reuse" everywhere they could be reused. For instance, at the time of writing there is a reusable that is just the number "30" which shows up in certain files, but doesn't make sense to be replaced with a reusable.

In these cases you can skip these reusables from being checked by the `find potential-uses` command by adding their paths to the array in [src/content-render/scripts/reusables-cli/ignore-reusables.ts](./ignore-unused-reusables.ts)

#### Similarity search

This may or may not be a useful search. It does a looser search to find places where the reusable _may_ be usable. You can include this type of search with the `-s` flag. You can alter the "threshold" used by the scoring algorithm to show more (higher number) or less (lower number) potential results with the `-t` flag.

The threshold is a number that finds how similar the words in the reusable are to the words in a given article.

A good default threshold number is `15000`. You can experiment with a higher/lower number if you aren't getting good results.

e.g. `npm run reusables -- find potential-uses -s -t 15000`
