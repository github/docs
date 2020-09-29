---
title: API previews
intro: You can use API previews to try out new features and provide feedback before these features become official.
redirect_from:
  - /early-access/
  - /v3/previews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



API previews let you try out new APIs and changes to existing API methods before they become part of the official GitHub API.

During the preview period, we may change some features based on developer feedback. If we do make changes, we'll announce them on the [developer blog](https://developer.github.com/changes/) without advance notice.

To access an API preview, you'll need to provide a custom [media type](/v3/media) in the `Accept` header for your requests. Feature documentation for each preview specifies which custom media type to provide.

{% if currentVersion == "free-pro-team@latest" %}
### Migrations

Allows you to download repositories from your GitHub user or organization account to review, backup, and [migrate](/v3/migrations/) data to {% data variables.product.prodname_ghe_server %}.

**Custom media type:** `wyandotte-preview`
**Announced:** [2018-05-24](https://developer.github.com/changes/2018-05-24-user-migration-api/)
{% endif %}

### Enhanced deployments

Exercise greater control over [deployments](/v3/repos/deployments/) with more information and finer granularity.

**Custom media type:** `ant-man-preview`
**Announced:** [2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

### Reactions

Manage [reactions](/v3/reactions/) for commits, issues, and comments.

**Custom media type:** `squirrel-girl-preview`
**Announced:** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/)
**Update:** [2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

### Timeline

Get a [list of events](/v3/issues/timeline/) for an issue or pull request.

**Custom media type:** `mockingbird-preview`
**Announced:** [2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
### Pages

Get more information about your [GitHub Pages](/v3/repos/pages/) site.

**Custom media type:** `mister-fantastic-preview`
**Announced:** [2016-07-06](https://developer.github.com/changes/2016-07-06-github-pages-preview-api/)
{% endif %}

{% if currentVersion != "free-pro-team@latest" %}
### Pre-receive environments

Create, list, update, and delete environments for pre-receive hooks.

**Custom media type:** `eye-scream-preview`
**Announced:** [2015-07-29](/rest/reference/enterprise-admin#pre-receive-environments)
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
### Integrations

Manage [integrations](/early-access/integrations/) through the API.

**Custom media type:** `machine-man-preview`
**Announced:** [2016-09-14](https://developer.github.com/changes/2016-09-14-Integrations-Early-Access/)
{% endif %}

### Projects

Manage [projects](/v3/projects/).

**Custom media type:** `inertia-preview`
**Announced:** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/)
**Update:** [2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/)

### Commit search

[Search commits](/v3/search/).

**Custom media type:** `cloak-preview`
**Announced:** [2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/)

{% if currentVersion == "free-pro-team@latest" %}
### Community profile metrics

Retrieve [community profile metrics](/v3/repos/community/) (also known as community health) for any public repository.

**Custom media type:** `black-panther-preview`
**Announced:** [2017-02-09](https://developer.github.com/changes/2017-02-09-community-health/)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### User blocking

Users can [block other users](/v3/users/blocking/). Organizations can [block users](/v3/orgs/blocking/), too.

**Custom media type:** `giant-sentry-fist-preview`
**Announced:** [2011-05-31](https://github.com/blog/862-block-the-bullies)
**Update 1:** [2016-04-04](https://github.com/blog/2146-organizations-can-now-block-abusive-users)
**Update 2:** [2016-08-17](https://github.com/blog/2229-see-the-users-you-ve-blocked-on-your-settings-page)
{% endif %}

### Repository topics

View a list of [repository topics](/articles/about-topics/) in [calls](/v3/repos/) that return repository results.

**Custom media type:** `mercy-preview`
**Announced:** [2017-01-31](https://github.com/blog/2309-introducing-topics)

### Codes of conduct

View all [codes of conduct](/v3/codes_of_conduct) or get which code of conduct a repository has currently.

**Custom media type:** `scarlet-witch-preview`

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
### Nested teams

Include nested team content in [team](/v3/teams/) payloads.

**Custom media type:** `hellcat-preview`
**Announced:** [2017-09-01](https://developer.github.com/changes/2017-08-30-preview-nested-teams)

{% endif %}

{% if currentVersion != "free-pro-team@latest" %}

### Global webhooks

Enables [global webhooks](/v3/enterprise-admin/global_webhooks/) for  [organization](/webhooks/event-payloads/#organization) and [user](/webhooks/event-payloads/#user) event types. This API preview is only available for {% data variables.product.prodname_ghe_server %}.

**Custom media type:** `superpro-preview`
**Announced:** [2017-12-12](/v3/enterprise-admin/global_webhooks)

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
### Repository transfer

Transfer a [repository](/v3/repos/) to an organization or user.

**Custom media type:** `nightshade-preview`
**Announced:** [2017-11-09](https://developer.github.com/changes/2017-11-09-repository-transfer-api-preview)
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
### Add lock reason

You can now add a reason when you [lock an issue](/v3/issues/#lock-an-issue).

**Custom media type:** `sailor-v-preview`
**Announced:** [2018-01-10](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview)
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
### Team discussions

You can now use the API to manage [team discussions](/v3/teams/discussions) and [team discussion comments](/v3/teams/discussion_comments).

**Custom media type:** `echo-preview`
**Announced:** [2018-02-07](https://developer.github.com/changes/2018-02-07-team-discussions-api)

{% endif %}

### Require signed commits

You can now use the API to manage the setting for [requiring signed commits on protected branches](/v3/repos/branches).

**Custom media type:** `zzzax-preview`
**Announced:** [2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures)

### Require multiple approving reviews

You can now [require multiple approving reviews](/v3/repos/branches) for a pull request using the API.

**Custom media type:** `luke-cage-preview`
**Announced:** [2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
### Retrieve hovercard information

Retrieve information from [someone's hovercard](/v3/users/#get-contextual-information-for-a-user).

**Custom media type:** `hagar-preview`
**Announced:** [2018-03-21](https://developer.github.com/changes/2018-03-21-hovercard-api-preview)

{% endif %}

### Check runs and check suites API

Allows a GitHub App to run external checks on a repository's code. See the [Check runs](/v3/checks/runs/) and [Check suites](/v3/checks/suites/) APIs for more details.

**Custom media type:** `antiope-preview`
**Announced:** [2018-05-07](https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/)

{% if currentVersion != "free-pro-team@latest" %}

### Anonymous Git access to repositories

When a {% data variables.product.prodname_ghe_server %} instance is in private mode, site and repository administrators can enable anonymous Git access for a public repository.

**Custom media type:** `x-ray-preview`
**Announced:** [2018-07-12](https://blog.github.com/2018-07-12-introducing-enterprise-2-14/)

{% endif %}

### Project card details

The REST API responses for [issue events](/v3/issues/events/) and [issue timeline events](/v3/issues/timeline/) now return the `project_card` field for project-related events.

**Custom media type:** `starfox-preview`
**Announced:** [2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% if currentVersion == "free-pro-team@latest" %}

### GitHub App Manifests

GitHub App Manifests allow people to create preconfigured GitHub Apps. See "[Creating GitHub Apps from a manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" for more details.

**Custom media type:** `fury-preview`

{% endif %}

### Deployment statuses

You can now update the `environment` of a [deployment status](/v3/repos/deployments/#create-a-deployment-status) and use the `in_progress` and `queued` states. When you create deployment statuses, you can now use the `auto_inactive` parameter to mark old `production` deployments as `inactive`.

**Custom media type:** `flash-preview`
**Announced:** [2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

### Repository creation permissions

You can now configure whether organization members can create repositories and which types of repositories they can create. See "[Update an organization](/v3/orgs/#update-an-organization)" for more details.

**Custom media types:** `surtur-preview`
**Announced:** [2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

### Content attachments

You can now provide more information in GitHub for URLs that link to registered domains by using the {% data variables.product.prodname_unfurls %} API. See "[Using content attachments](/apps/using-content-attachments/)" for more details.

**Custom media types:** `corsair-preview`
**Announced:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% if currentVersion == "free-pro-team@latest" %}

### Interaction restrictions for repositories and organizations

Allows you to temporarily restrict interactions, such as commenting, opening issues, and creating pull requests, for {% data variables.product.product_name %} repositories or organizations. When enabled, only the specified group of {% data variables.product.product_name %} users will be able to participate in these interactions. See the [Repository interactions](/v3/interactions/repos/) and [Organization interactions](/v3/interactions/orgs/) APIs for more details.

**Custom media type:** `sombra-preview`
**Announced:** [2018-12-18](https://developer.github.com/changes/2018-12-18-interactions-preview/)

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
### Draft pull requests

You can use the Draft Pull Requests API and its [pull request](/v3/pulls/) endpoints to see whether a pull request is in draft state. To learn more about draft pull requests, see "[About pull requests](/articles/about-pull-requests/)".

**Custom media types:** `shadow-cat-preview`
**Announced:** [2019-02-14](https://developer.github.com/changes/2019-02-14-draft-pull-requests/)

{% endif %}

### Enable and disable Pages

You can use the new endpoints in the [Pages API](/v3/repos/pages/) to enable or disable Pages. To learn more about Pages, see "[GitHub Pages Basics](/categories/github-pages-basics)".

**Custom media types:** `switcheroo-preview`
**Announced:** [2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

### List branches or pull requests for a commit

You can use two new endpoints in the [Commits API](/v3/repos/commits/) to list branches or pull requests for a commit.

**Custom media types:** `groot-preview`
**Announced:** [2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
### Uninstall a GitHub App

Owners of GitHub Apps can now uninstall an app using the [Apps API](/v3/apps/#delete-an-installation-for-the-authenticated-app).

**Custom media types:** `gambit-preview`
{% endif %}

### Enable or disable vulnerability alerts for a repository

You can use two new endpoints in the [Repos API](/v3/repos/) to enable or disable vulnerability alerts.

**Custom media types:** `dorian-preview`
**Announced:** [2019-04-24](https://developer.github.com/changes/2019-04-24-vulnerability-alerts/)

### Update a pull request branch

You can use a new endpoint to [update a pull request branch](/v3/pulls/#update-a-pull-request-branch) with changes from the HEAD of the upstream branch.

**Custom media types:** `lydian-preview`
**Announced:** [2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% if currentVersion == "free-pro-team@latest" %}
### Enable or disable automated security fixes

You can use a new set of endpoints to [enable and disable automated security fixes](/v3/repos/#enable-automated-security-fixes).

**Custom media types:** `london-preview`
**Announced:** [2019-06-04](https://developer.github.com/changes/2019-06-04-automated-security-fixes/)
{% endif %}

### Create and use repository templates

You can use a new endpoint to [Create a repository using a template](/v3/repos/#create-a-repository-using-a-template) and [Create a repository for the authenticated user](/v3/repos/#create-a-repository-for-the-authenticated-user) that is a template repository by setting the `is_template` parameter to `true`. [Get a repository](/v3/repos/#get-a-repository) to check whether it's set as a template repository using the `is_template` key.

**Custom media types:** `baptiste-preview`
**Announced:** [2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/)

{% if currentVersion == "enterprise-server@2.20" %}
### New OAuth Applications API endpoints

You can more securely manage tokens for OAuth Apps by using OAuth tokens as input parameters instead of path parameters with the new [OAuth Applications API](/v3/apps/oauth_applications/) endpoints.

**Custom media types:** `doctor-strange-preview`
**Announced:** [2019-11-05](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api/)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### New visibility parameter for the Repositories API

You can set and retrieve the visibility of a repository in the [Repositories API](/v3/repos/).

**Custom media types:** `nebula-preview`
**Announced:** [2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)
{% endif %}
