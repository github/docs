---
title: "[{{ deprecation-date }}] Enterprise Server {{ release-number }} deprecation steps"
labels:
  - enterprise deprecation
  - engineering
  - priority-2
  - workflow-generated
---

# Deprecate a GitHub Enterprise Server release

This issue is the runbook for fully deprecating a GHES version on docs.github.com. Fully deprecate means: scrape the version's docs into a static archive repository, remove all Markdown, YAML, and JSON content versioned for that release or lower from `github/docs-internal`, and deprecate its OpenAPI description in `github/github`.

Human: A coding agent such as Copilot CLI drives this runbook while a human supervises. Point your agent at this issue and work through it one step at a time.

Throughout, `{{ release-number }}` stands for the version being deprecated. When this runbook is generated as a deprecation issue, the placeholder is filled in for you.

- Do the steps in order. One at a time. Tell the human each time you start a new step.
- Only move on after the previous step succeeds.
- Keep process notes as you go. The final step uses them.
- A callout appears in the steps: 🛑 **HUMAN**. This means stop and get explicit human sign-off before continuing. These mark points where a mistake is expensive or hard to undo, or actions only a human can perform. Text on these lines are meant for the human to do; any text on a line that does not have the flag is for the agent.
- When a step is ambiguous or a tool misbehaves, look at the two most recent deprecation pull requests in `github/docs-internal` for how it was handled. Search for pull requests titled "Deprecate GitHub Enterprise Server", and read the content team's review comments so you can fix the same problems before requesting review. 
- Clone `github/docs-internal` and `github/github` before you begin.
- This issue copies the runbook when the issue is created. Before you start, compare it with [the runbook on `main`](https://github.com/github/docs-internal/blob/main/src/ghes-releases/lib/deprecation-steps.md). If they differ, follow `main`.
- If other people or agents share your `github/docs-internal` checkout, work in a `git worktree` instead of switching branches.

## Step 1: Confirm the deprecation date

The release controller's Slack chatops are the authoritative source for both the deprecation date and the DRI (directly responsible individual):

* `.rc get-cycle {{ release-number }}` returns the release cycle for `{{ release-number }}`, including the deprecation date.
* `.rc release-dates` returns the current DRI for each release. Run it in either `#ghes-releases` or `#ghes-release-ops`. It may stop listing a release once its deprecation completes, so run it a few days before the deprecation date if you can.

Draft both chatops and a follow-up confirmation message for the human, who runs the chatops in Slack and posts the confirmation. Cross-check the date returned by `.rc get-cycle` against the one in this issue's title and in `src/ghes-releases/lib/enterprise-dates.json`. You might not have read access to `github/enterprise-releases`. If you can't read the release date list, ask the human to cross-check it.

🛑 **HUMAN**: Run `.rc get-cycle {{ release-number }}` and `.rc release-dates` in `#ghes-releases` (or `#ghes-release-ops`). Post a short message in `#ghes-releases` `@`-mentioning the DRI returned by `.rc release-dates` asking them to confirm the deprecation date, and add a comment on this issue linking to that Slack message for posterity. If `.rc release-dates` doesn't return a DRI for `{{ release-number }}`, ask in `#docs-content-enterprise` or `#ghes-releases` instead.

* If the date is being pushed out, ask the DRI to update the [release date list](https://github.com/github/enterprise-releases/blob/master/releases.json), update this issue's target date, and pause until the new date arrives.
* The release date list is often not updated. If it isn't, our copy in `src/ghes-releases/lib/enterprise-dates.json` may also be wrong. You fix that in Step 5.

## Step 2: Clone the translation repositories

The full scrape needs local clones of the eight translation repositories:

```shell
npm run clone-translations
```

This clones every language into `./translations/<lang>` inside your `github/docs-internal` checkout, which the scrape reads by default. No `.env` configuration is needed. It clones eight repositories and can take several minutes. To keep your clones elsewhere, use per-language `TRANSLATIONS_ROOT_*` variables instead, described in [the appendix](#reference-configuring-the-translation-repositories).

## Step 3: Create the archive repository

Each deprecated version's docs live in their own repository, for example `github/docs-ghes-3.11`. Creating it requires the human to be a maintainer of `@github/docs-engineering`, and the script exits early if they aren't. The script clones the new repository into `~/Documents/gh/github`; set `DOCS_GHES_CLONE_ROOT` to use another directory. Create the new one:

```shell
npm run deprecate-ghes -- create-repo --version {{ release-number }}
```

The repository's first GitHub Pages build can show as errored, because the initial push cancels it. The next build succeeds, so you can ignore it.

🛑 **HUMAN**: On the new repository's home page, click the gear next to "About" and clear the "Releases", "Packages", and "Deployments" checkboxes, then save. No public API covers these toggles.

You can continue once the human has said they completed that step.

## Step 4: Create the deprecation branch

Create the branch that holds every `github/docs-internal` change in this deprecation. Keep it through Step 12:

```shell
git checkout -b deprecate-{{ release-number }}
```

## Step 5: Fix the deprecation date if needed

If the date in the [release date list](https://github.com/github/enterprise-releases/blob/master/releases.json) differs from `src/ghes-releases/lib/enterprise-dates.json`, update `enterprise-dates.json` to match and commit it on your branch. The pre-deprecation banner reads its dates from that file, so fix it before scraping.

## Step 6: Dry-run the scrape

Update your translation clones to the latest `main`.

Hide the search components so they don't get scraped into the static archive: in `src/frame/components/page-header/Header.tsx`, temporarily set the `SubdomainNavBar.Search` component's `className` to `"visually-hidden"`. Also wrap the `SearchOverlay` in `src/search/components/input/SearchOverlayContainer.tsx` in a `<div className="visually-hidden">`, and, in `src/landings/components/HomePageHero.tsx`, temporarily remove the homepage hero search `<button>` (`data-testid="homepage-search"`). Don't use `visually-hidden` for this button: it stays focusable and still opens search, which the archive doesn't support.

Turn off analytics too. Archived pages keep running their scraped JavaScript, and `/api/events` rejects their events because the version is no longer supported. In `src/frame/lib/constants.ts`, temporarily set `ANALYTICS_ENABLED` to `false`. That stops requests to both `/api/events` and `collector.githubapp.com`.

Build, then scrape a few pages locally:

```shell
npm run build
npm run deprecate-ghes-archive -- --dry-run --local-dev
```

Serve the output over HTTP to review it. Opening the files directly doesn't work, because `--local-dev` asset paths are relative to the inner directory:

```shell
python3 -m http.server 8080 --bind 127.0.0.1 -d tmpArchivalDir_{{ release-number }}/{{ release-number }}
```

The dry run only scrapes the home, `get-started`, and search pages in each language, so other pages 404 in the preview. Tell the human this. To preview more pages, scrape them into a separate directory, because the script deletes its output directory before every run, then copy them into the preview:

```shell
npm run deprecate-ghes-archive -- --page <path> -o tmpRescrape --local-dev
cp -R tmpRescrape/{{ release-number }}/. tmpArchivalDir_{{ release-number }}/{{ release-number }}/
```

Confirm that a few pages in a couple of languages render, styles load, and the version and language pickers navigate. In the local preview, picker targets outside the archive, such as `/en/account-and-profile`, 404 because they're root-relative to docs.github.com; they work in production. Also confirm that the browser's network tab shows no requests to `/api/events` or `collector.githubapp.com`, including after you click a tool picker or code tab. Offer to open the pages for the human in their browser.

🛑 **HUMAN**: Review the dry-run output before the full scrape.

You can continue after the human confirms they have reviewed the dry-run output.

## Step 7: Run the full scrape

Scrape every page. This takes 20-30 minutes and overwrites the dry-run output:

```shell
npm run deprecate-ghes-archive
```

Revert the search component and analytics edits:

```shell
git checkout src/frame/components/page-header/Header.tsx src/search/components/input/SearchOverlayContainer.tsx src/landings/components/HomePageHero.tsx src/frame/lib/constants.ts
```

## Step 8: Publish the archive

The scrape writes the publishable site to an inner directory, `tmpArchivalDir_{{ release-number }}/{{ release-number }}/`, which holds `en/`, the other language directories, and the redirect files. Copy the contents of that inner directory into the root of the `github/docs-ghes-{{ release-number }}` repository, so pages land at `/en/...` with no nested `{{ release-number }}/` directory. If you are unsure, please look at some previous `github/docs-ghes-*` repos for the right organization.

Before you ask the human, check the output:

* No empty files: `find tmpArchivalDir_{{ release-number }} -type f -size 0`. The script deletes its output directory before every run, so re-scrape an empty page into a separate directory, for example `npm run deprecate-ghes-archive -- --page <path> -o tmpRescrape`, and copy the new files over the empty ones.
* Each language has about the same number of HTML files as `en`.
* No error pages. Search the HTML for `Ooops!`.
* Pages show the deprecation banner and don't show search.
* Nothing links to `localhost:4001`, and assets point at `https://github.github.com/docs-ghes-{{ release-number }}/`.

🛑 **HUMAN**: Confirm the file count, organization, and contents.

After the human confirms, commit and push. The archive is about as large as the previous `github/docs-ghes-*` repository, so `git add` and the push can take a while. GitHub Pages builds the static site automatically. Wait a few minutes. Preview a few pages at the full Pages URL, for example `https://github.github.com/docs-ghes-{{ release-number }}/en/enterprise-server@{{ release-number }}/get-started/index.html`, across a couple of languages. Then remove `tmpArchivalDir_{{ release-number }}` from `github/docs-internal`.

## Step 9: Remove the version from github/docs-internal

Back on your `deprecate-{{ release-number }}` branch, move the version out of the supported list. In `src/versions/lib/enterprise-server-releases.ts`, remove `'{{ release-number }}'` from `supported` and add it as the first element of `deprecatedWithFunctionalRedirects`.

Run the deprecation scripts in order. Each depends on the previous one succeeding:

```shell
npm run deprecate-ghes -- pipelines
npm run deprecate-ghes -- content
npm run lint-content -- --paths content data --rules liquid-ifversion-versions --fix
```

`deprecate-ghes -- content` rewrites the whole frontmatter of each file it changes, which can requote values, reflow long strings, and drop comments. Review its diff. In any file with frontmatter changes beyond `versions` or `children`, redo the edit by hand so only those lines change.

Some YAML files can't be autofixed and show as lint errors. Open each one, find the key named in the error, and remove the deprecated Liquid while keeping the content for supported versions.

Then clean up empty data files and run the linter again:

```shell
npm run deprecate-ghes -- data
files=$(git diff --name-only --diff-filter=d "$(git merge-base origin/main HEAD)" -- content data)
[ -n "$files" ] && npm run lint-content -- --fix --paths $files
```

Pass `--paths`, because without it `lint-content` only lints uncommitted changes. The "Feature files with all versions" list from `deprecate-ghes -- data` is for information only. Leave feature-file ranges such as `ghes: '>={{ release-number }}'` as they are. After each `--fix`, review the diff and restore changes the deprecation didn't cause. For example, `--fix` can change `*` list markers to `-` in files that have nothing to do with the deprecation.

The linter misses Liquid on pages versioned by a feature whose range starts at `{{ release-number }}`, for example a page with `feature: ghes-opentelemetry` where the feature is `ghes: '>=3.18'`. Search for leftover conditionals and remove them by hand, keeping the content for supported versions:

```shell
grep -rnE "ghes ?(=|<=|>) ?{{ release-number }}\b|ghes ?< ?<new-oldest>\b" content data
```

Replace `<new-oldest>` with the oldest version still in `supported`. Delete any reusable that's left unused.

Update the version chains in `data/variables/product.yml` by hand. The codemod can't rewrite `codeql_cli_ghes_recommended_version` and `runner_required_version`, so remove the `{{ release-number }}` branch from each and check that the remaining conditionals still cover every supported version.

## Step 10: Clean up content artifacts

The content team flags issues on every deprecation, so fix them before requesting review:

* Collapse consecutive blank lines left behind by removed Liquid. Run `npm run deprecate-ghes -- collapse-blank-lines` to auto-fix runs of 2+ blank lines that this deprecation introduced in the markdown files it changed. It also removes blank lines this deprecation left at the end of a file. Runs already on `main`, such as those in code samples, stay as they are. The linter doesn't catch these because MD012 is off. Use `--check` to list offenders without writing.
* Review each Liquid-removal site for a stray single blank line the codemod introduced, one at a time. The auto-fix above only collapses 2+ blank lines in the middle of a file, because a lone blank line is often legitimate (for example, before a nested sub-list), so a human must judge each one.
* Remove leftover table-pipe rows from removed Liquid, for example lines matching `^\|\s*\|$` or `^\s?\|\s?$`.
* Fix paragraphs missing a leading space, and any `ifversion` left in the wrong place after a reusable was removed.
* Revert codemod churn on autogenerated REST files. The codemod edits `content/rest/**` files marked `autogenerated: rest`, stripping the `# DO NOT MANUALLY EDIT` marker from their `versions:` block, rewriting `ghes: '>=X'` to `'*'`, and reflowing `intro: >-` scalars. The REST sync bot owns these files and will overwrite the edits, so restore the churned frontmatter to match `main` and keep only genuinely-removed pages. Alternatively, regenerate with `npm run sync-rest`, which needs a `github/github` checkout.
* Remove trailing spaces and whitespace-only lines that inline Liquid removal leaves behind, for example at the end of a line or inside an indented block. Check with `git diff --check`.
* Close up double spaces where the codemod removed an inline conditional mid-sentence, for example `requested.  They`.
* Close up double spaces left in inline `ifversion` chains. When the codemod drops a version from an inline chain it can leave a double space, for example `upgrading to {% ifversion ghes = 3.17 %}3.17{% endif %} {% ifversion ghes = 3.18 %}3.18{% endif %} with caution.` Move the trailing space inside each conditional (`3.17 {% endif %}`) so only the matched branch renders one space.
* Prune empty `else` branches and dead conditionals. When the codemod removes the only content inside an `{% else %}`, often a now-unused reusable, delete the empty `{% else %}`. Also remove `{% ifversion ghes < <new-oldest> %}` blocks, which are always false after the deprecation.
* Add redirects for content removed on every version. When a deprecation fully removes a feature, not just one version of it, there's no auto-generated redirect, so add redirects to the current docs by hand and repoint version-pinned entries in `src/fixtures/fixtures/rest-redirects.json` at the current location. Expect a large list. There's no helper for this yet.

The list in this step should increase after each deprecation to improve the output of this process and reduce human effort.

## Step 11: Fix CI the codemod doesn't touch

The deprecation scripts only rewrite `content/` and `data/`, so version references in tests and fixtures can break CI. Use the Node version from `engines` in `package.json`, then run `npm ci` and `npm run build`, because the tests need the build output. Run:

```shell
npm test -- src/versions/tests src/redirects/tests src/content-linter/tests/unit
```

Tests in other directories can also hardcode the version, so search the tests for `{{ release-number }}` and run any that reference it. Tests can also assume how many versions are supported. For example, `src/content-linter/tests/unit/liquid-ifversion-versions.ts` once used `supported[4]`, which is `undefined` while only four versions are supported, between a deprecation and the next release. Use `supported.at(-1)` for the oldest supported version instead of a fixed index.

Fix any failures. For example, when a deprecation fully removes content rather than just a version of it, redirect fixtures in `src/fixtures/fixtures/rest-redirects.json` may still point at the removed version; repoint them at the current location.

## Step 12: Review, smoke test, and open the pull request

🛑 **HUMAN**: Review the full diff before the smoke test.

After the human confirms they reviewed the full diff, smoke test locally with `npm run start` and visit a few pages at `docs.github.com/enterprise/{{ release-number }}`. Confirm stylesheets and images load, search is disabled, there are no new console errors, every deprecated page shows the "deprecated on <date>" banner, and the new oldest supported version shows its upcoming-deprecation banner.

Commit, push, and open a draft pull request labelled `llm-generated`. Use this body so the reviewer has context and a way to feed findings back into the runbook, filling in the placeholders:

````markdown
```markdown
Copilot generated this pull request. 

This pull request deprecates GHES {{ release-number }} on docs.github.com.

## What this does

- Moves `{{ release-number }}` out of `supported` in `enterprise-server-releases.ts`.
- Runs the deprecation codemods over content and pipeline data.
- Removes the `{{ release-number }}` pipeline data and archives the version.
- {Note any content removed entirely, with redirect counts.}

## For reviewers

[Step 10 of the runbook](https://github.com/github/docs-internal/blob/main/src/ghes-releases/lib/deprecation-steps.md#step-10-clean-up-content-artifacts) lists the content problems that recur. If you spot issues this pull request missed, please add to Step 10 so the next deprecation catches it.
```
````

> [!NOTE]
> The `dont-delete-features` check fails when a deprecation deletes or renames any feature file. It guards against translations still referencing deleted features. This is expected on deprecations that fully remove features, and the docs-bot "Delete orphaned features" automation cleans them up. Don't block the pull request on it.

Offer to open the pull request in the human's browser.

🛑 **HUMAN**: Review the draft pull request. Comment any changes needed.

Once the humans approves the pull request, mark as ready for review. Add the pull request to the [docs-content review board](https://github.com/orgs/github/projects/2936/views/2). If your token doesn't have the `project` scope, ask the human to add it.

The pull request often sits in review while `main` moves. Update it by merging `main` into the branch, not by rebasing. Merges usually conflict on pipeline data for `{{ release-number }}` that changed on `main`, for example `src/rest/data/ghes-{{ release-number }}-*/` files and `src/github-apps/data/version-index.json`. Delete any `{{ release-number }}` data files the merge brings back, take `main`'s version of each generated index, and run `npm run deprecate-ghes -- pipelines` again. Then run the leftover-conditional search from Step 9 again, because new content on `main` can add Liquid for `{{ release-number }}`.

🛑 **HUMAN**: Get a content team review before merging the pull request. You should add any issues the content team finds to Step 10 of this runbook.

You can proceed once the human acknowledges they will need to get a content team review and handle merging the pull request and adding any feedback. You do not need to wait for the pull request to get a content team review or to be merged.

## Step 13: Tag the deprecation

Tag `main` so we can find the last point in history where the version was still supported. The [re-scraping appendix](#reference-re-scraping-a-page-or-all-pages) checks out this tag, so create it any time before the deprecation pull request merges. Tag `origin/main` and push only the new tag:

```shell
git fetch origin main
git tag enterprise-{{ release-number }}-deprecation origin/main
git push --no-verify origin refs/tags/enterprise-{{ release-number }}-deprecation
```

## Step 14: Deprecate the OpenAPI description in github/github

🛑 **HUMAN**: Confirm that the agent can create a branch, commit, and open a pull request in `github/github` for this release. Don't create anything in `github/github` until the human confirms.

In `github/github`, edit `app/api/description/config/releases/ghes-{{ release-number }}.yaml` and change `deprecated: false` to `deprecated: true`. You don't need a local clone for this one-line change: you can create the branch and commit with the REST API. Open a pull request, marked ready for review, modeled on the previous release's pull request.

`github/github` has a compliance rule: a team whose name ends in `-reviewers` must be requested for review, and a member of that team must approve after that request. `@github/api-platform-reviewers` is requested automatically as the code owner, but rarely approves these pull requests. Request `@github/docs-reviewers` as soon as you open the pull request. An approval from someone outside a requested `*-reviewers` team, or one given before the team was requested, doesn't count.

Several CI jobs often fail on infrastructure problems, for example "Error fetching ID token from GitHub OIDC provider ... socket hang up" while fetching CI secrets, and the `*-results` jobs fail because of them. Check the first failing job's log and rerun failed jobs with `gh run rerun <run-id> -R github/github --failed`.

🛑 **HUMAN**: After the `github/docs-internal` pull request merges and a docs-reviewers member approves, confirm the FedRAMP-moderate approval through the link in the pull request's sticky comment. Then add the pull request to the merge queue with **Merge when ready**, `.qmtd <pull-request-url>` in `#dotcom-ops`, or `gh pr merge`. Don't merge it yourself: the [deploy pipeline](https://thehub.github.com/epd/engineering/devops/deployment/deploying-dotcom/) deploys it and then merges it automatically, which can take several hours. If you haven't deployed `github/github` before, pair with someone who has.

Continue on after the human acknowledges they will need to deploy the `github/github` pull request after the `github/docs-internal` pull request merges.

## Step 15: Capture process improvements

Keep notes throughout the deprecation of anything wrong, slow, or confusing: runbook bugs, tooling failures, manual workarounds, and content-team feedback. When you finish, open a separate pull request, not part of the deprecation pull request, that fixes this runbook and the deprecation tooling for the next release. Write it for the next deprecation's agent.

🛑 **HUMAN**: Review the process improvement pull request.

After the human approves the process improvement pull request, you can continue.

## Step 16: Summarize

Summarize the work completed in this workflow, and link to each of the pull requests with the next action needed from the human.

## Reference: Configuring the translation repositories

`npm run clone-translations` from Step 2 is the simplest setup: it clones every language into `./translations/<lang>`, which the scrape reads by default with no extra configuration.

To keep your clones elsewhere instead, clone the repositories below and map each one with a `TRANSLATIONS_ROOT_*` variable in your `.env` file:

* `docs-internal.es-es`
* `docs-internal.ja-jp`
* `docs-internal.pt-br`
* `docs-internal.zh-cn`
* `docs-internal.ru-ru`
* `docs-internal.fr-fr`
* `docs-internal.ko-kr`
* `docs-internal.de-de`

## Reference: Re-scraping a page or all pages

Occasionally a change needs to land in an already-archived version. Prefer fixing it in place over re-scraping. For a problem that affects many pages or versions, rewrite the archived HTML at serve time in `src/archives/middleware/archived-enterprise-versions.ts`, or edit the files in the `github/docs-ghes-*` repository directly. For example, github/docs-internal#64522 adds a stub Next.js build manifest to archived pages at serve time, so the version and language pickers navigate without a re-scrape. Re-scrape only when neither works. The archive script always scrapes the current oldest supported version, so check out the `enterprise-{{ release-number }}-deprecation` tag, which points at history from before the version left `supported`. Repeat the Step 6 search and analytics edits, run `npm run build`, and re-scrape with `npm run deprecate-ghes-archive`. To scrape a single page, use the `--page <relative path>` option, passing the path without a version or language prefix. Revert the edits as in Step 7, then upload the new files to `github/docs-ghes-{{ release-number }}` for each language.

Human: After uploading, purge the Fastly cache. From Okta, open Fastly, select `docs`, and click "Purge" then "Purge URL", or "Purge All" for a whole path. Enter the URL or path and do a soft purge.

/cc @github/docs-engineering
