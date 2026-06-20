---
title: Enterprise Server {{ release-number }} deprecation steps
labels:
  - enterprise deprecation
  - priority-1
  - time sensitive
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

## Step 1: Confirm the deprecation date

Look up `{{ release-number }}` in the [release date list](https://github.com/github/enterprise-releases/blob/master/releases.json), find the corresponding `prp` owner, and draft a short Slack message asking them to confirm the deprecation date.

🛑 **HUMAN**: Send a Slack message. If there is no `prp` owner, ask in #docs-content-enterprise or #ghes-releases instead.

* If the date is being pushed out, ask the `prp` to update the release date list, update this issue's target date, and pause until the new date arrives.
* The release date list is often not updated. If it isn't, our copy in `src/ghes-releases/lib/enterprise-dates.json` may also be wrong. You fix that in Step 6.

## Step 2: Remove the version from the github/docs-content release tracker

In the `github/docs-content` repository, remove `{{ release-number }}` from the `options` list in [`release-tracking.yml`](https://github.com/github/docs-content/blob/main/.github/ISSUE_TEMPLATE/release-tracking.yml), ensure the list of versions matches the available versions, and open a pull request.

🛑 **HUMAN**: Review the `github/docs-content` pull request. Acknowledge this will need to be merged in the next few days.

You can continue once the human reviews the `github/docs-content` pull request and acknowledges they are responsible for getting it merged.

## Step 3: Clone the translation repositories

The full scrape needs local clones of the eight translation repositories:

```shell
npm run clone-translations
```

This clones every language into `./translations/<lang>` inside your `github/docs-internal` checkout, which the scrape reads by default. No `.env` configuration is needed. It clones eight repositories and can take several minutes. To keep your clones elsewhere, use per-language `TRANSLATIONS_ROOT_*` variables instead, described in [the appendix](#reference-configuring-the-translation-repositories).

## Step 4: Create the archive repository

Each deprecated version's docs live in their own repository, for example `github/docs-ghes-3.11`. Create the new one:

```shell
npm run deprecate-ghes -- create-repo --version {{ release-number }}
```

🛑 **HUMAN**: On the new repository's home page, click the gear next to "About" and clear the "Releases", "Packages", and "Deployments" checkboxes, then save. No public API covers these toggles.

You can continue once the human has said they completed that step.

## Step 5: Create the deprecation branch

Create the branch that holds every `github/docs-internal` change in this deprecation. Keep it through Step 13:

```shell
git checkout -b deprecate-{{ release-number }}
```

## Step 6: Fix the deprecation date if needed

If the date in the [release date list](https://github.com/github/enterprise-releases/blob/master/releases.json) differs from `src/ghes-releases/lib/enterprise-dates.json`, update `enterprise-dates.json` to match and commit it on your branch. The pre-deprecation banner reads its dates from that file, so fix it before scraping.

## Step 7: Dry-run the scrape

Update your translation clones to the latest `main`. Then hide the search components so they don't get scraped into the static archive: in `src/search/components/input/SearchBarButton.tsx`, wrap the returned content in a `<div className="visually-hidden">`, and do the same for the `SearchOverlay` in `src/search/components/input/SearchOverlayContainer.tsx`.

Build, then scrape a few pages locally:

```shell
npm run build
npm run deprecate-ghes-archive -- --dry-run --local-dev
```

Open a few HTML files in `tmpArchivalDir_{{ release-number }}` and confirm they render, styles load, and the version dropdowns work.

Offer to open the files for the human in their text editor or browser.

🛑 **HUMAN**: Review the dry-run output before the full scrape.

You can continue after the human confirms they have reviewed the dry-run output.

## Step 8: Run the full scrape

Scrape every page. This takes 20-30 minutes and overwrites the dry-run output:

```shell
npm run deprecate-ghes-archive
```

Revert the search component edits:

```shell
git checkout src/search/components/input/SearchBarButton.tsx src/search/components/input/SearchOverlayContainer.tsx
```

## Step 9: Publish the archive

The scrape writes the publishable site to an inner directory, `tmpArchivalDir_{{ release-number }}/{{ release-number }}/`, which holds `en/`, the other language directories, and the redirect files. Copy the contents of that inner directory into the root of the `github/docs-ghes-{{ release-number }}` repository, so pages land at `/en/...` with no nested `{{ release-number }}/` directory. If you are unsure, please look at some previous `github/docs-ghes-*` repos for the right organization.

🛑 **HUMAN**: Confirm the file count, organization, and contents.

After the human confirms, commit and push. GitHub Pages builds the static site automatically. Wait a few minutes. Preview a few pages at the full Pages URL, for example `https://github.github.com/docs-ghes-{{ release-number }}/en/enterprise-server@{{ release-number }}/get-started/index.html`, across a couple of languages. Then remove `tmpArchivalDir_{{ release-number }}` from `github/docs-internal`.

## Step 10: Remove the version from github/docs-internal

Back on your `deprecate-{{ release-number }}` branch, move the version out of the supported list. In `src/versions/lib/enterprise-server-releases.ts`, remove `'{{ release-number }}'` from `supported` and add it as the first element of `deprecatedWithFunctionalRedirects`.

Run the deprecation scripts in order. Each depends on the previous one succeeding:

```shell
npm run deprecate-ghes -- pipelines
npm run deprecate-ghes -- content
npm run lint-content -- --paths content data --rules liquid-ifversion-versions --fix
```

Some `data/variables/*.yml` files can't be autofixed and show as lint errors. Open each one, find the key named in the error, and remove the deprecated Liquid while keeping the content for supported versions.

Then clean up empty data files and run the linter again:

```shell
npm run deprecate-ghes -- data
npm run lint-content -- --fix
```

## Step 11: Clean up content artifacts

The content team flags issues on every deprecation, so fix them before requesting review:

* Collapse consecutive blank lines left behind by removed Liquid. Run `npm run deprecate-ghes -- collapse-blank-lines` to auto-fix any run of 2+ blank lines in the markdown files this deprecation changed. The linter doesn't catch these because MD012 is off. Use `--check` to list offenders without writing.
* Review each Liquid-removal site for a stray single blank line the codemod introduced, one at a time. The auto-fix above only touches 2+ blank lines, because a lone blank line is often legitimate (for example, before a nested sub-list), so a human must judge each one.
* Remove leftover table-pipe rows from removed Liquid, for example lines matching `^\|\s*\|$` or `^\s?\|\s?$`.
* Fix paragraphs missing a leading space, and any `ifversion` left in the wrong place after a reusable was removed.
* Revert codemod churn on autogenerated REST files. The codemod edits `content/rest/**` files marked `autogenerated: rest`, stripping the `# DO NOT MANUALLY EDIT` marker from their `versions:` block, rewriting `ghes: '>=X'` to `'*'`, and reflowing `intro: >-` scalars. The REST sync bot owns these files and will overwrite the edits, so restore the churned frontmatter to match `main` and keep only genuinely-removed pages. Alternatively, regenerate with `npm run sync-rest`, which needs a `github/github` checkout.
* Close up double spaces left in inline `ifversion` chains. When the codemod drops a version from an inline chain it can leave a double space, for example `upgrading to {% ifversion ghes = 3.17 %}3.17{% endif %} {% ifversion ghes = 3.18 %}3.18{% endif %} with caution.` Move the trailing space inside each conditional (`3.17 {% endif %}`) so only the matched branch renders one space.
* Prune empty `else` branches and dead conditionals. When the codemod removes the only content inside an `{% else %}`, often a now-unused reusable, delete the empty `{% else %}`. Also remove `{% ifversion ghes < <new-oldest> %}` blocks, which are always false after the deprecation.
* Add redirects for content removed on every version. When a deprecation fully removes a feature, not just one version of it, there's no auto-generated redirect, so add redirects to the current docs by hand and repoint version-pinned entries in `src/fixtures/fixtures/rest-redirects.json` at the current location. Expect a large list. There's no helper for this yet.

The list in this step should increase after each deprecation to improve the output of this process and reduce human effort.

## Step 12: Fix CI the codemod doesn't touch

The deprecation scripts only rewrite `content/` and `data/`, so version references in tests and fixtures can break CI. Run:

```shell
npm test -- src/versions/tests src/redirects/tests
```

Fix any failures. For example, when a deprecation fully removes content rather than just a version of it, redirect fixtures in `src/fixtures/fixtures/rest-redirects.json` may still point at the removed version; repoint them at the current location.

## Step 13: Review, smoke test, and open the pull request

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

[Step 11 of the runbook](https://github.com/github/docs-internal/blob/main/src/ghes-releases/lib/deprecation-steps.md#step-11-clean-up-content-artifacts) lists the content problems that recur. If you spot issues this pull request missed, please add to Step 11 so the next deprecation catches it.
```
````

> [!NOTE]
> The `dont-delete-features` check can fail when a deprecation removes more than one feature file. It guards against translations still referencing deleted features. This is expected on deprecations that fully remove features, and the docs-bot "Delete orphaned features" automation cleans them up. Don't block the pull request on it.

Offer to open the pull request in the human's browser.

🛑 **HUMAN**: Review the draft pull request. Comment any changes needed.

Once the humans approves the pull request, mark as ready for review. Add the pull request to the [docs-content review board](https://github.com/orgs/github/projects/2936/views/2).

🛑 **HUMAN**: Get a content team review before merging the pull request. You should add any issues the content team finds to Step 11 of this runbook.

You can proceed once the human acknowledges they will need to get a content team review and handle merging the pull request and adding any feedback. You do not need to wait for the pull request to get a content team review or to be merged.

## Step 14: Tag the deprecation

Tag `main` so we can find where in history the version was removed. You can tag now. There's no need to wait for the deprecation pull request to merge, which matches the recent deprecations.

```shell
git checkout main && git pull
git tag enterprise-{{ release-number }}-deprecation
git push --tags --no-verify
```

## Step 15: Deprecate the OpenAPI description in github/github

In `github/github`, edit `app/api/description/config/releases/ghes-{{ release-number }}.yaml` and change `deprecated: false` to `deprecated: true`. Open a pull request and get the required code owner approvals. A docs-content team member can approve for the docs team.

🛑 **HUMAN**: Once approved, [deploy the `github/github` pull request](https://thehub.github.com/epd/engineering/devops/deployment/deploying-dotcom/). If you haven't deployed `github/github` before, pair with someone who has.

Continue on after the human acknowledges they will need to deploy the `github/github` pull request after the `github/docs-internal` pull request merges.

## Step 16: Capture process improvements

Keep notes throughout the deprecation of anything wrong, slow, or confusing: runbook bugs, tooling failures, manual workarounds, and content-team feedback. When you finish, open a separate pull request, not part of the deprecation pull request, that fixes this runbook and the deprecation tooling for the next release. Write it for the next deprecation's agent.

🛑 **HUMAN**: Review the process improvement pull request.

After the human approves the process improvement pull request, you can continue.

## Step 17: Summarize

Summarize the work completed in this workflow, and link to each of the pull requests with the next action needed from the human.

## Reference: Configuring the translation repositories

`npm run clone-translations` from Step 3 is the simplest setup: it clones every language into `./translations/<lang>`, which the scrape reads by default with no extra configuration.

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

Occasionally a change needs to land in an already-archived version. The archive script always scrapes the current oldest supported version, so check out the `enter
ise-{{ release-number }}-deprecation` tag, which points at history from before the version left `supported`, and re-scrape with `npm run deprecate-ghes-archive`. To scrape a single page, use the `--page <relative path>` option, passing the path without a version or language prefix. Upload the new files to `github/docs-ghes-{{ release-number }}` for each language.

Human: After uploading, purge the Fastly cache. From Okta, open Fastly, select `docs`, and click "Purge" then "Purge URL", or "Purge All" for a whole path. Enter the URL or path and do a soft purge.

/cc @github/docs-engineering
