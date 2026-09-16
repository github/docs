---
title: Migrated data for live migrations from GitHub Enterprise Server to GHE.com
shortTitle: Migrated data reference
intro: 'Which data and live updates are included in a live migration?'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
---

{% data reusables.elm.preview-note %}

## Data that is migrated

{% data variables.product.prodname_elm_short %} migrates almost all repository-level data. Organization-level resources, such as teams, projects, and organizations settings and webhooks, are excluded from the migration and must be configured manually on the target.

The only organization-level action supported by {% data variables.product.prodname_elm_short %} is the creation of a target organization account if this does not already exist.

### Repository settings and configuration

| Resource | Notes |
|---|---|
| Repository metadata and settings | Visibility, description, default branch, and enabled features |
| Repository webhooks | Webhook configurations for the repository |
| Repository topics | Tags for categorizing the repository |
| Repository PR settings | Pull request merge and review settings |
| Actions settings | Repository-level GitHub Actions configuration, including allowed actions and permissions |
| Autolinks | Custom autolink references |
| Branch protections | Branch protection rules |
| Pages | GitHub Pages configuration |

### Git data, LFS, and wikis

| Resource | Notes |
|---|---|
| Git repository (refs, objects, history) | Includes all refs, objects, and commit history. The repository is kept up to date on the destination throughout the migration. |
| LFS objects | Git Large File Storage objects. Requires LFS to be enabled on the source {% data variables.product.prodname_ghe_server %} instance. |
| Wiki | The wiki Git repository |

### Issues, comments, and reactions

| Resource | Notes |
|---|---|
| Issues | Includes state, assignees, and body |
| Issue comments | All comments on issues |
| Issue reactions | Reactions on issues |
| Issue comment reactions | Reactions on issue comments |
| Issue labels | Label associations on issues |
| Issue events | Timeline events (assigned, labeled, closed, etc.) |
| Close issue references | Cross-references that close issues (e.g. "fixes #123") |

### Pull requests, reviews, and threads

| Resource | Notes |
|---|---|
| Pull requests | Includes state, reviewers, body, and draft status |
| PR reviews | Submitted reviews, including approved, changes-requested, and commented states |
| PR review comments | Inline code review comments |
| PR review threads | Threaded discussions, including resolved and unresolved state |
| PR comment reactions | Reactions on pull request review comments |
| PR labels | Label associations on pull requests |

### Labels, milestones, releases, and CI

| Resource | Notes |
|---|---|
| Labels | Label definitions, including name, color, and description |
| Milestones | Milestone definitions and state |
| Releases | Release metadata, including tag, name, body, and prerelease or draft status |
| Release reactions | Reactions on releases |
| Commit comments | Comments on individual commits |
| Commit status checks | CI/CD status checks on commits |
| Check runs | Check run results |
| Check suites | Check suite groupings |
| Team repository permissions | Team-to-repository permission associations |

### Binary assets and file attachments

| Resource | Notes |
|---|---|
| Release assets | Binary assets attached to releases, up to 2 GB per asset |
| Attachments | Image and video file attachments embedded in issue and pull request bodies |
| Repository files (non-media attachments) | Non-media file attachments, such as PDFs and text files, associated with issues and pull requests |

### Users and mannequins

| Resource | Notes |
|---|---|
| Mannequins | Every GitHub Enterprise Server user referenced in migrated data is represented as a mannequin: a placeholder identity with no organization membership or repository access. After your migration is complete, you can reclaim mannequins by associating them with real user accounts. |

## Data that is not migrated

### Repository data

| Data | Notes |
|---|---|
| Repository defaults | N/A |
| Repository rulesets | Only branch protection rules are migrated. |
| Pull requests from forks | N/A |
| Pending pull request reviews | Only submitted reviews are migrated. |

### Organization data

Organization-level data such as the following is **not** migrated:

* Settings
* Teams
* Projects
* Webhooks

## Events included in live updates

After the initial backfill completes, the exporter's **event listener** monitors webhooks on {% data variables.product.prodname_ghe_server %} to capture ongoing changes and forward them to the migration service on the target enterprise.

The following tables document which resource types support live updates and which webhook actions are handled.

| Resource type | Supported events | Unsupported events |
|---|---|---|
| **Repository** | `edited` | `archived`, `deleted`, `privatized`, `publicized`, `renamed`, `transferred`, `unarchived` |
| **Issues** | `assigned`, `closed`, `edited`, `labeled`, `opened`, `reopened`, `unassigned`, `unlabeled`, `milestoned`, `demilestoned` | `deleted`, `locked`, `pinned`, `transferred`, `unlocked`, `unpinned` |
| **Issue comment** | `created`, `edited` | `deleted` |
| **Pull request** | `assigned`, `closed`, `converted_to_draft`, `edited`, `labeled`, `opened`, `ready_for_review`, `reopened`, `unassigned`, `unlabeled`, `milestoned`, `demilestoned` | `auto_merge_disabled`, `auto_merge_enabled`, `dequeued`, `enqueued`, `locked`, `review_request_removed`, `review_requested`, `synchronize`, `unlocked` |
| **Pull request review** | `edited`, `submitted` | `dismissed` |
| **Pull request review comment** | `edited` | `created`, `deleted` |
| **Pull request review thread** | `resolved`, `unresolved` | N/A |
| **Label** | `created` | `deleted`, `edited` |
| **Release** | `created`, `edited`, `prereleased`, `published`, `released`, `unpublished` | `deleted` |
| **Milestone** | `closed`, `created`, `edited`, `opened` | `deleted` |
| **Branch protection rule** | `created`, `edited` | `deleted` |
| **Commit comment** | `created`, `edited` | `deleted` |
| **Page build** | All actions | N/A |
| **Commit status checks** | All actions | N/A |
| **Wiki** | All actions | N/A |
| **Autolink** | `created`, `deleted` | N/A |
| **Close issue reference** | `created` | N/A |
| **Reaction** | `created`, `deleted` | N/A |
| **Repository actions settings** | `updated` | N/A |
| **Repository webhook** | `created`, `updated` | N/A |


> [!NOTE]
> When a pull request review is submitted, {% data variables.product.prodname_elm_short %} imports the full review including all inline comments together. Inline comments that are part of an initial review submission are migrated correctly. However, **replies added to a review thread after the review has been submitted** are not captured as live updates and will not appear in the migrated repository.

## Data not included in live updates

The following are exported during initial backfill only and are **not** updated by webhooks:

* Check runs
* Check suites
* GitHub Pages configuration

## Rewriting of links and mentions

References **within the source repository**, such as user mentions or links to issues and pull requests in the same repository, are rewritten so that they will still point to the correct resources after migration.

References to **different repositories** (such as a link to an issue in the the `repo-2` repository from a pull request in `repo-1`) are **not** migrated and will point to the exact same destination after migration. This applies even if the referenced repository has already been migrated or is being migrated concurrently.
