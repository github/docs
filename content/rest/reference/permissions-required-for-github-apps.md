---
title: Permissions required for GitHub Apps
intro: 'You can find the required permissions for each {% data variables.product.prodname_github_app %}-compatible endpoint.'
redirect_from:
  - /v3/apps/permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### About {% data variables.product.prodname_github_app %} permissions

{% data variables.product.prodname_github_app %}s are created with a set of permissions. Permissions define what resources the {% data variables.product.prodname_github_app %} can access via the API. For more information, see "[Setting permissions for GitHub Apps](/apps/building-github-apps/setting-permissions-for-github-apps/)."

### Metadata permissions

GitHub Apps have the `Read-only` metadata permission by default. The metadata permission provides access to a collection of read-only endpoints with metadata for various resources. These endpoints do not leak sensitive private repository information.

{% data reusables.apps.metadata-permissions %}

- [`GET /`](/rest#root-endpoint)
- [`GET /codes_of_conduct`](/rest/reference/codes-of-conduct#get-all-codes-of-conduct)
- [`GET /codes_of_conduct/:key`](/rest/reference/codes-of-conduct#get-a-code-of-conduct)
- [`GET /emojis`](/rest/reference/emojis#emojis)
- [`GET /feeds`](/rest/reference/activity#get-feeds)
- [`GET /licenses`](/rest/reference/licenses#get-all-commonly-used-licenses)
- [`GET /licenses/:key`](/rest/reference/licenses#get-a-license)
- [`POST /markdown`](/rest/reference/markdown#render-a-markdown-document)
- [`POST /markdown/raw`](/rest/reference/markdown#render-a-markdown-document-in-raw-mode)
- [`GET /meta`](/rest/reference/meta#meta)
- [`GET /organizations`](/rest/reference/orgs#list-organizations)
- [`GET /orgs/:org`](/rest/reference/orgs#get-an-organization)
- [`GET /orgs/:org/projects`](/rest/reference/projects#list-organization-projects)
- [`GET /orgs/:org/repos`](/rest/reference/repos#list-organization-repositories)
- [`GET /rate_limit`](/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user)
- [`GET /repos/:owner/:repo`](/rest/reference/repos#get-a-repository)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/community/profile`](/rest/reference/repos#get-community-profile-metrics)
{% endif %}
- [`GET /repos/:owner/:repo/contributors`](/rest/reference/repos#list-repository-contributors)
- [`GET /repos/:owner/:repo/forks`](/rest/reference/repos#list-forks)
- [`GET /repos/:owner/:repo/languages`](/rest/reference/repos#list-repository-languages)
- [`GET /repos/:owner/:repo/license`](/rest/reference/licenses#get-the-license-for-a-repository)
- [`GET /repos/:owner/:repo/stargazers`](/rest/reference/activity#list-stargazers)
- [`GET /repos/:owner/:repo/stats/code_frequency`](/rest/reference/repos#get-the-weekly-commit-activity)
- [`GET /repos/:owner/:repo/stats/commit_activity`](/rest/reference/repos#get-the-last-year-of-commit-activity)
- [`GET /repos/:owner/:repo/stats/contributors`](/rest/reference/repos#get-all-contributor-commit-activity)
- [`GET /repos/:owner/:repo/stats/participation`](/rest/reference/repos#get-the-weekly-commit-count)
- [`GET /repos/:owner/:repo/stats/punch_card`](/rest/reference/repos#get-the-hourly-commit-count-for-each-day)
- [`GET /repos/:owner/:repo/subscribers`](/rest/reference/activity#list-watchers)
- [`GET /repos/:owner/:repo/tags`](/rest/reference/repos#list-repository-tags)
- [`GET /repos/:owner/:repo/topics`](/rest/reference/repos#get-all-repository-topics)
- [`GET /repositories`](/rest/reference/repos#list-public-repositories)
- [`GET /user/repos`](/rest/reference/repos#list-repositories-for-the-authenticated-user)
- [`GET /user/starred`](/rest/reference/activity#list-repositories-starred-by-a-user)
- [`GET /user/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user)
- [`GET /users`](/rest/reference/users#list-users)
- [`GET /users/:username`](/rest/reference/users#get-a-user)
- [`GET /users/:username/followers`](/rest/reference/users#list-followers-of-a-user)
- [`GET /users/:username/following`](/rest/reference/users#list-the-people-a-user-follows)
- [`GET /users/:username/following/:target_user`](/rest/reference/users#check-if-a-user-follows-another-user)
- [`GET /users/:username/gpg_keys`](/rest/reference/users#list-gpg-keys-for-a-user)
- [`GET /users/:username/orgs`](/rest/reference/orgs#list-organizations-for-a-user)
- [`GET /users/:username/received_events`](/rest/reference/activity#list-events-received-by-the-authenticated-user)
- [`GET /users/:username/received_events/public`](/rest/reference/activity#list-public-events-received-by-a-user)
- [`GET /users/:username/repos`](/rest/reference/repos#list-repositories-for-a-user)
- [`GET /users/:username/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user)

_Collaborators_
- [`GET /repos/:owner/:repo/collaborators`](/rest/reference/repos#list-repository-collaborators)
- [`GET /repos/:owner/:repo/collaborators/:username`](/rest/reference/repos#check-if-a-user-is-a-repository-collaborator)

_Commit comments_
- [`GET /repos/:owner/:repo/comments`](/rest/reference/repos#list-commit-comments-for-a-repository)
- [`GET /repos/:owner/:repo/comments/:comment_id`](/rest/reference/repos#get-a-commit-comment)
- [`GET /repos/:owner/:repo/comments/:comment_id/reactions`](/rest/reference/reactions#list-reactions-for-a-commit-comment)
- [`GET /repos/:owner/:repo/commits/:sha/comments`](/rest/reference/repos#list-commit-comments)

_Events_
- [`GET /events`](/rest/reference/activity#list-public-events)
- [`GET /networks/:owner/:repo/events`](/rest/reference/activity#list-public-events-for-a-network-of-repositories)
- [`GET /orgs/:org/events`](/rest/reference/activity#list-public-organization-events)
- [`GET /repos/:owner/:repo/events`](/rest/reference/activity#list-repository-events)
- [`GET /users/:username/events`](/rest/reference/activity#list-events-for-the-authenticated-user)
- [`GET /users/:username/events/public`](/rest/reference/activity#list-public-events-for-a-user)

_Git_
- [`GET /gitignore/templates`](/rest/reference/gitignore#get-all-gitignore-templates)
- [`GET /gitignore/templates/:key`](/rest/reference/gitignore#get-a-gitignore-template)

_Keys_
- [`GET /users/:username/keys`](/rest/reference/users#list-public-keys-for-a-user)

_Organization members_
- [`GET /orgs/:org/members`](/rest/reference/orgs#list-organization-members)
- [`GET /orgs/:org/members/:username`](/rest/reference/orgs#check-organization-membership-for-a-user)
- [`GET /orgs/:org/public_members`](/rest/reference/orgs#list-public-organization-members)
- [`GET /orgs/:org/public_members/:username`](/rest/reference/orgs#check-public-organization-membership-for-a-user)

_Search_
- [`GET /search/code`](/rest/reference/search#search-code)
- [`GET /search/commits`](/rest/reference/search#search-commits)
- [`GET /search/issues`](/rest/reference/search#search-issues-and-pull-requests)
- [`GET /search/labels`](/rest/reference/search#search-labels)
- [`GET /search/repositories`](/rest/reference/search#search-repositories)
- [`GET /search/topics`](/rest/reference/search#search-topics)
- [`GET /search/users`](/rest/reference/search#search-users)

{% if currentVersion == "free-pro-team@latest"  or currentVersion ver_gt "enterprise-server@2.21" %}
### Permission on "actions"

- [`GET /repos/:owner/:repo/actions/artifacts`](/rest/reference/actions#list-artifacts-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/actions/artifacts/:artifact_id`](/rest/reference/actions#get-an-artifact) (:read)
- [`DELETE /repos/:owner/:repo/actions/artifacts/:artifact_id`](/rest/reference/actions#delete-an-artifact) (:write)
- [`GET /repos/:owner/:repo/actions/artifacts/:artifact_id/zip`](/rest/reference/actions#download-an-artifact) (:read)
- [`GET /repos/:owner/:repo/actions/jobs/:job_id`](/rest/reference/actions#get-a-job-for-a-workflow-run) (:read)
- [`GET /repos/:owner/:repo/actions/jobs/:job_id/logs`](/rest/reference/actions#download-job-logs-for-a-workflow-run) (:read)
- [`GET /repos/:owner/:repo/actions/runs`](/rest/reference/actions#list-workflow-runs-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/actions/runs/:run_id`](/rest/reference/actions#get-a-workflow-run) (:read)
- [`GET /repos/:owner/:repo/actions/runs/:run_id/artifacts`](/rest/reference/actions#list-workflow-run-artifacts) (:read)
- [`POST /repos/:owner/:repo/actions/runs/:run_id/cancel`](/rest/reference/actions#cancel-a-workflow-run) (:write)
- [`GET /repos/:owner/:repo/actions/runs/:run_id/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run) (:read)
- [`GET /repos/:owner/:repo/actions/runs/:run_id/logs`](/rest/reference/actions#download-workflow-run-logs) (:read)
- [`DELETE /repos/:owner/:repo/actions/runs/:run_id/logs`](/rest/reference/actions#delete-workflow-run-logs) (:write)
- [`POST /repos/:owner/:repo/actions/runs/:run_id/rerun`](/rest/reference/actions#re-run-a-workflow) (:write)
- [`GET /repos/:owner/:repo/actions/workflows`](/rest/reference/actions#list-repository-workflows) (:read)
- [`GET /repos/:owner/:repo/actions/workflows/:workflow_id`](/rest/reference/actions#get-a-workflow) (:read)
- [`GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs`](/rest/reference/actions#list-workflow-runs) (:read)
{% endif %}

### Permission on "administration"

- [`POST /orgs/:org/repos`](/rest/reference/repos#create-an-organization-repository) (:write)
- [`PATCH /repos/:owner/:repo`](/rest/reference/repos#update-a-repository) (:write)
- [`DELETE /repos/:owner/:repo`](/rest/reference/repos#delete-a-repository) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/actions/runners/:runner_id`](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository) (:read)
- [`DELETE /repos/:owner/:repo/actions/runners/:runner_id`](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository) (:write)
- [`POST /repos/:owner/:repo/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-a-repository) (:write)
- [`POST /repos/:owner/:repo/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-a-repository) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /repos/:owner/:repo/automated-security-fixes`](/rest/reference/repos#enable-automated-security-fixes) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/automated-security-fixes`](/rest/reference/repos#disable-automated-security-fixes) (:write)
{% endif %}
- [`POST /repos/:owner/:repo/forks`](/rest/reference/repos#create-a-fork) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-a-repository) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /repos/:owner/:repo/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-a-repository) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository) (:write)
{% endif %}
- [`PUT /repos/:owner/:repo/topics`](/rest/reference/repos#replace-all-repository-topics) (:write)
- [`POST /repos/:owner/:repo/transfer`](/rest/reference/repos#transfer-a-repository) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/vulnerability-alerts`](/rest/reference/repos#enable-vulnerability-alerts) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /repos/:owner/:repo/vulnerability-alerts`](/rest/reference/repos#enable-vulnerability-alerts) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/vulnerability-alerts`](/rest/reference/repos#disable-vulnerability-alerts) (:write)
{% endif %}
- [`PATCH /user/repository_invitations/:invitation_id`](/rest/reference/repos#accept-a-repository-invitation) (:write)
- [`DELETE /user/repository_invitations/:invitation_id`](/rest/reference/repos#decline-a-repository-invitation) (:write)

_Branches_
- [`GET /repos/:owner/:repo/branches/:branch/protection`](/rest/reference/repos#get-branch-protection) (:read)
- [`PUT /repos/:owner/:repo/branches/:branch/protection`](/rest/reference/repos#update-branch-protection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection`](/rest/reference/repos#delete-branch-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/enforce_admins`](/rest/reference/repos#get-admin-branch-protection) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/enforce_admins`](/rest/reference/repos#set-admin-branch-protection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins`](/rest/reference/repos#delete-admin-branch-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews`](/rest/reference/repos#get-pull-request-review-protection) (:read)
- [`PATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews`](/rest/reference/repos#update-pull-request-review-protection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews`](/rest/reference/repos#delete-pull-request-review-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/required_signatures`](/rest/reference/repos#get-commit-signature-protection) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/required_signatures`](/rest/reference/repos#create-commit-signature-protection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/required_signatures`](/rest/reference/repos#delete-commit-signature-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks`](/rest/reference/repos#get-status-checks-protection) (:read)
- [`PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks`](/rest/reference/repos#update-status-check-protection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks`](/rest/reference/repos#remove-status-check-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts`](/rest/reference/repos#get-all-status-check-contexts) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts`](/rest/reference/repos#add-status-check-contexts) (:write)
- [`PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts`](/rest/reference/repos#set-status-check-contexts) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts`](/rest/reference/repos#remove-status-check-contexts) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/restrictions`](/rest/reference/repos#get-access-restrictions) (:read)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions`](/rest/reference/repos#delete-access-restrictions) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams`](/rest/reference/repos#list-teams-with-access-to-the-protected-branch) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams`](/rest/reference/repos#add-team-access-restrictions) (:write)
- [`PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams`](/rest/reference/repos#set-team-access-restrictions) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams`](/rest/reference/repos#remove-team-access-restrictions) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users`](/rest/reference/repos#list-users-with-access-to-the-protected-branch) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users`](/rest/reference/repos#add-user-access-restrictions) (:write)
- [`PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users`](/rest/reference/repos#set-user-access-restrictions) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users`](/rest/reference/repos#remove-user-access-restrictions) (:write)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
- [`POST /repos/:owner/:repo/branches/:branch/rename`](/rest/reference/repos#rename-a-branch) (:write)
{% endif %}

_Collaborators_
- [`PUT /repos/:owner/:repo/collaborators/:username`](/rest/reference/repos#add-a-repository-collaborator) (:write)
- [`DELETE /repos/:owner/:repo/collaborators/:username`](/rest/reference/repos#remove-a-repository-collaborator) (:write)

_Invitations_
- [`GET /repos/:owner/:repo/invitations`](/rest/reference/repos#list-repository-invitations) (:read)
- [`PATCH /repos/:owner/:repo/invitations/:invitation_id`](/rest/reference/repos#update-a-repository-invitation) (:write)
- [`DELETE /repos/:owner/:repo/invitations/:invitation_id`](/rest/reference/repos#delete-a-repository-invitation) (:write)

_Keys_
- [`GET /repos/:owner/:repo/keys`](/rest/reference/repos#list-deploy-keys) (:read)
- [`POST /repos/:owner/:repo/keys`](/rest/reference/repos#create-a-deploy-key) (:write)
- [`GET /repos/:owner/:repo/keys/:key_id`](/rest/reference/repos#get-a-deploy-key) (:read)
- [`DELETE /repos/:owner/:repo/keys/:key_id`](/rest/reference/repos#delete-a-deploy-key) (:write)

_Teams_
- [`GET /repos/:owner/:repo/teams`](/rest/reference/repos#list-repository-teams) (:read)
- [`PUT /teams/:team_id/repos/:owner/:repo`](/rest/reference/teams#add-or-update-team-repository-permissions) (:write)
- [`DELETE /teams/:team_id/repos/:owner/:repo`](/rest/reference/teams#remove-a-repository-from-a-team) (:write)

{% if currentVersion == "free-pro-team@latest" %}
_Traffic_
- [`GET /repos/:owner/:repo/traffic/clones`](/rest/reference/repos#get-repository-clones) (:read)
- [`GET /repos/:owner/:repo/traffic/popular/paths`](/rest/reference/repos#get-top-referral-paths) (:read)
- [`GET /repos/:owner/:repo/traffic/popular/referrers`](/rest/reference/repos#get-top-referral-sources) (:read)
- [`GET /repos/:owner/:repo/traffic/views`](/rest/reference/repos#get-page-views) (:read)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Permission on "blocking"

- [`GET /user/blocks`](/rest/reference/users#list-users-blocked-by-the-authenticated-user) (:read)
- [`GET /user/blocks/:username`](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user) (:read)
- [`PUT /user/blocks/:username`](/rest/reference/users#block-a-user) (:write)
- [`DELETE /user/blocks/:username`](/rest/reference/users#unblock-a-user) (:write)
{% endif %}

### Permission on "checks"

- [`POST /repos/:owner/:repo/check-runs`](/rest/reference/checks#create-a-check-run) (:write)
- [`GET /repos/:owner/:repo/check-runs/:check_run_id`](/rest/reference/checks#get-a-check-run) (:read)
- [`PATCH /repos/:owner/:repo/check-runs/:check_run_id`](/rest/reference/checks#update-a-check-run) (:write)
- [`GET /repos/:owner/:repo/check-runs/:check_run_id/annotations`](/rest/reference/checks#list-check-run-annotations) (:read)
- [`POST /repos/:owner/:repo/check-suites`](/rest/reference/checks#create-a-check-suite) (:write)
- [`GET /repos/:owner/:repo/check-suites/:check_suite_id`](/rest/reference/checks#get-a-check-suite) (:read)
- [`GET /repos/:owner/:repo/check-suites/:check_suite_id/check-runs`](/rest/reference/checks#list-check-runs-in-a-check-suite) (:read)
- [`POST /repos/:owner/:repo/check-suites/:check_suite_id/rerequest`](/rest/reference/checks#rerequest-a-check-suite) (:write)
- [`PATCH /repos/:owner/:repo/check-suites/preferences`](/rest/reference/checks#update-repository-preferences-for-check-suites) (:write)
- [`GET /repos/:owner/:repo/commits/:sha/check-runs`](/rest/reference/checks#list-check-runs-for-a-git-reference) (:read)
- [`GET /repos/:owner/:repo/commits/:sha/check-suites`](/rest/reference/checks#list-check-suites-for-a-git-reference) (:read)

### Permission on "contents"

- [`GET /repos/:owner/:repo/:archive_format/:ref`](/rest/reference/repos#download-a-repository-archive) (:read)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/artifacts/:artifact_id`](/rest/reference/actions#get-an-artifact) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/actions/artifacts/:artifact_id`](/rest/reference/actions#delete-an-artifact) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/artifacts/:artifact_id/zip`](/rest/reference/actions#download-an-artifact) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/jobs/:job_id`](/rest/reference/actions#get-a-job-for-a-workflow-run) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/jobs/:job_id/logs`](/rest/reference/actions#download-job-logs-for-a-workflow-run) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs`](/rest/reference/actions#list-workflow-runs-for-a-repository) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs/:run_id`](/rest/reference/actions#get-a-workflow-run) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs/:run_id/artifacts`](/rest/reference/actions#list-workflow-run-artifacts) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`POST /repos/:owner/:repo/actions/runs/:run_id/cancel`](/rest/reference/actions#cancel-a-workflow-run) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs/:run_id/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs/:run_id/logs`](/rest/reference/actions#download-workflow-run-logs) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/actions/runs/:run_id/logs`](/rest/reference/actions#delete-workflow-run-logs) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`POST /repos/:owner/:repo/actions/runs/:run_id/rerun`](/rest/reference/actions#re-run-a-workflow) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/secrets`](/rest/reference/actions#list-repository-secrets) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/secrets/:name`](/rest/reference/actions#get-a-repository-secret) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /repos/:owner/:repo/actions/secrets/:name`](/rest/reference/actions#create-or-update-a-repository-secret) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/actions/secrets/:name`](/rest/reference/actions#delete-a-repository-secret) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/secrets/public-key`](/rest/reference/actions#get-a-repository-public-key) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/workflows`](/rest/reference/actions#list-repository-workflows) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/workflows/:workflow_id`](/rest/reference/actions#get-a-workflow) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs`](/rest/reference/actions#list-workflow-runs) (:read)
{% endif %}
- [`GET /repos/:owner/:repo/check-runs/:check_run_id`](/rest/reference/checks#get-a-check-run) (:read)
- [`GET /repos/:owner/:repo/check-runs/:check_run_id/annotations`](/rest/reference/checks#list-check-run-annotations) (:read)
- [`GET /repos/:owner/:repo/check-suites/:check_suite_id`](/rest/reference/checks#get-a-check-suite) (:read)
- [`GET /repos/:owner/:repo/check-suites/:check_suite_id/check-runs`](/rest/reference/checks#list-check-runs-in-a-check-suite) (:read)
- [`POST /repos/:owner/:repo/check-suites/:check_suite_id/rerequest`](/rest/reference/checks#rerequest-a-check-suite) (:write)
- [`GET /repos/:owner/:repo/commits`](/rest/reference/repos#list-commits) (:read)
- [`GET /repos/:owner/:repo/commits/:sha`](/rest/reference/repos#get-a-commit) (:read)
- [`GET /repos/:owner/:repo/commits/:sha/check-runs`](/rest/reference/checks#list-check-runs-for-a-git-reference) (:read)
- [`GET /repos/:owner/:repo/commits/:sha/check-suites`](/rest/reference/checks#list-check-suites-for-a-git-reference) (:read)
- [`GET /repos/:owner/:repo/community/code_of_conduct`](/rest/reference/codes-of-conduct#get-the-code-of-conduct-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/compare/:base...:head`](/rest/reference/repos#compare-two-commits) (:read)
- [`GET /repos/:owner/:repo/contents/:path`](/rest/reference/repos#get-repository-content) (:read)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- [`POST /repos/:owner/:repo/dispatches`](/rest/reference/repos#create-a-repository-dispatch-event) (:write)
{% endif %}
- [`POST /repos/:owner/:repo/forks`](/rest/reference/repos#create-a-fork) (:read)
- [`POST /repos/:owner/:repo/merges`](/rest/reference/repos#merge-a-branch) (:write)
- [`PUT /repos/:owner/:repo/pulls/:pull_number/merge`](/rest/reference/pulls#merge-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/readme(?:/(.*))?`](/rest/reference/repos#get-a-repository-readme) (:read)

_Branches_
- [`GET /repos/:owner/:repo/branches`](/rest/reference/repos#list-branches) (:read)
- [`GET /repos/:owner/:repo/branches/:branch`](/rest/reference/repos#get-a-branch) (:read)
- [`GET /repos/:owner/:repo/branches/:branch/protection/restrictions/apps`](/rest/reference/repos#list-apps-with-access-to-the-protected-branch) (:write)
- [`POST /repos/:owner/:repo/branches/:branch/protection/restrictions/apps`](/rest/reference/repos#add-app-access-restrictions) (:write)
- [`PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/apps`](/rest/reference/repos#set-app-access-restrictions) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/apps`](/rest/reference/repos#remove-user-access-restrictions) (:write)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
- [`POST /repos/:owner/:repo/branches/:branch/rename`](/rest/reference/repos#rename-a-branch) (:write)
{% endif %}

_Commit comments_
- [`PATCH /repos/:owner/:repo/comments/:comment_id`](/rest/reference/repos#update-a-commit-comment) (:write)
- [`DELETE /repos/:owner/:repo/comments/:comment_id`](/rest/reference/repos#delete-a-commit-comment) (:write)
- [`POST /repos/:owner/:repo/comments/:comment_id/reactions`](/rest/reference/reactions#create-reaction-for-a-commit-comment) (:read)
- [`POST /repos/:owner/:repo/commits/:sha/comments`](/rest/reference/repos#create-a-commit-comment) (:read)

_Git_
- [`POST /repos/:owner/:repo/git/blobs`](/rest/reference/git#create-a-blob) (:write)
- [`GET /repos/:owner/:repo/git/blobs/:sha`](/rest/reference/git#get-a-blob) (:read)
- [`POST /repos/:owner/:repo/git/commits`](/rest/reference/git#create-a-commit) (:write)
- [`GET /repos/:owner/:repo/git/commits/:commit_id`](/rest/reference/git#get-a-commit) (:read)
- [`POST /repos/:owner/:repo/git/refs`](/rest/reference/git#create-a-reference) (:write)
- [`GET /repos/:owner/:repo/git/ref/:ref`](/rest/reference/git#get-a-reference) (:read)
- [`GET /repos/:owner/:repo/git/matching-refs/:ref`](/rest/reference/git#list-matching-references) (:read)
- [`PATCH /repos/:owner/:repo/git/refs/:ref`](/rest/reference/git#update-a-reference) (:write)
- [`DELETE /repos/:owner/:repo/git/refs/:ref`](/rest/reference/git#delete-a-reference) (:write)
- [`POST /repos/:owner/:repo/git/tags`](/rest/reference/git#create-a-tag-object) (:write)
- [`GET /repos/:owner/:repo/git/tags/:tag_id`](/rest/reference/git#get-a-tag) (:read)
- [`POST /repos/:owner/:repo/git/trees`](/rest/reference/git#create-a-tree) (:write)
- [`GET /repos/:owner/:repo/git/trees/:sha`](/rest/reference/git#get-a-tree) (:read)

{% if currentVersion == "free-pro-team@latest" %}
_Import_
- [`GET /repos/:owner/:repo/import`](/rest/reference/migrations#get-an-import-status) (:read)
- [`PUT /repos/:owner/:repo/import`](/rest/reference/migrations#start-an-import) (:write)
- [`PATCH /repos/:owner/:repo/import`](/rest/reference/migrations#update-an-import) (:write)
- [`DELETE /repos/:owner/:repo/import`](/rest/reference/migrations#cancel-an-import) (:write)
- [`GET /repos/:owner/:repo/import/authors`](/rest/reference/migrations#get-commit-authors) (:read)
- [`PATCH /repos/:owner/:repo/import/authors/:author_id`](/rest/reference/migrations#map-a-commit-author) (:write)
- [`GET /repos/:owner/:repo/import/large_files`](/rest/reference/migrations#get-large-files) (:read)
- [`PATCH /repos/:owner/:repo/import/lfs`](/rest/reference/migrations#update-git-lfs-preference) (:write)
{% endif %}

_Reactions_

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- [`DELETE /reactions/:reaction_id`](/rest/reference/reactions#delete-a-reaction-legacy) (:write){% else %}- [`DELETE /reactions/:reaction_id`](/rest/reference/reactions#delete-a-reaction) (:write){% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- [`DELETE /repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id`](/rest/reference/reactions#delete-a-commit-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/reactions/:reaction_id`](/rest/reference/reactions#delete-an-issue-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id/reactions/:reaction_id`](/rest/reference/reactions#delete-an-issue-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/pulls/comments/:comment_id/reactions/:reaction_id`](/rest/reference/reactions#delete-a-pull-request-comment-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id`](/rest/reference/reactions#delete-team-discussion-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`](/rest/reference/reactions#delete-team-discussion-comment-reaction) (:write){% endif %}

_Releases_
- [`GET /repos/:owner/:repo/releases`](/rest/reference/repos/#list-releases) (:read)
- [`POST /repos/:owner/:repo/releases`](/rest/reference/repos/#create-a-release) (:write)
- [`GET /repos/:owner/:repo/releases/:release_id`](/rest/reference/repos/#get-a-release) (:read)
- [`PATCH /repos/:owner/:repo/releases/:release_id`](/rest/reference/repos/#update-a-release) (:write)
- [`DELETE /repos/:owner/:repo/releases/:release_id`](/rest/reference/repos/#delete-a-release) (:write)
- [`GET /repos/:owner/:repo/releases/:release_id/assets`](/rest/reference/repos/#list-release-assets) (:read)
- [`GET /repos/:owner/:repo/releases/assets/:asset_id`](/rest/reference/repos/#get-a-release-asset) (:read)
- [`PATCH /repos/:owner/:repo/releases/assets/:asset_id`](/rest/reference/repos/#update-a-release-asset) (:write)
- [`DELETE /repos/:owner/:repo/releases/assets/:asset_id`](/rest/reference/repos/#delete-a-release-asset) (:write)
- [`GET /repos/:owner/:repo/releases/latest`](/rest/reference/repos/#get-the-latest-release) (:read)
- [`GET /repos/:owner/:repo/releases/tags/:tag`](/rest/reference/repos/#get-a-release-by-tag-name) (:read)

### Permission on "deployments"

- [`GET /repos/:owner/:repo/deployments`](/rest/reference/repos#list-deployments) (:read)
- [`POST /repos/:owner/:repo/deployments`](/rest/reference/repos#create-a-deployment) (:write)
- [`GET /repos/:owner/:repo/deployments/:deployment_id`](/rest/reference/repos#get-a-deployment) (:read){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- [`DELETE /repos/:owner/:repo/deployments/:deployment_id`](/rest/reference/repos#delete-a-deployment) (:write){% endif %}
- [`GET /repos/:owner/:repo/deployments/:deployment_id/statuses`](/rest/reference/repos#list-deployment-statuses) (:read)
- [`POST /repos/:owner/:repo/deployments/:deployment_id/statuses`](/rest/reference/repos#create-a-deployment-status) (:write)
- [`GET /repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id`](/rest/reference/repos#get-a-deployment-status) (:read)

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
### Permission on "emails"

{% if currentVersion == "free-pro-team@latest" %}
- [`PATCH /user/email/visibility`](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) (:write)
{% endif %}
- [`GET /user/emails`](/rest/reference/users#list-email-addresses-for-the-authenticated-user) (:read)
- [`POST /user/emails`](/rest/reference/users#add-an-email-address-for-the-authenticated-user) (:write)
- [`DELETE /user/emails`](/rest/reference/users#delete-an-email-address-for-the-authenticated-user) (:write)
- [`GET /user/public_emails`](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user) (:read)
{% endif %}

### Permission on "followers"

- [`GET /user/followers`](/rest/reference/users#list-followers-of-a-user) (:read)
- [`GET /user/following`](/rest/reference/users#list-the-people-a-user-follows) (:read)
- [`GET /user/following/:username`](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user) (:read)
- [`PUT /user/following/:username`](/rest/reference/users#follow-a-user) (:write)
- [`DELETE /user/following/:username`](/rest/reference/users#unfollow-a-user) (:write)

### Permission on "gpg keys"

- [`GET /user/gpg_keys`](/rest/reference/users#list-gpg-keys-for-the-authenticated-user) (:read)
- [`POST /user/gpg_keys`](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user) (:write)
- [`GET /user/gpg_keys/:gpg_key_id`](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user) (:read)
- [`DELETE /user/gpg_keys/:gpg_key_id`](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user) (:write)

### Permission on "issues"

Issues and pull requests are closely related. For more information, see "[List issues assigned to the authenticated user](/rest/reference/issues#list-issues-assigned-to-the-authenticated-user)." If your GitHub App has permissions on issues but not on pull requests, these endpoints will be limited to issues. Endpoints that return both issues and pull requests will be filtered. Endpoints that allow operations on both issues and pull requests will be restricted to issues.

- [`GET /repos/:owner/:repo/issues`](/rest/reference/issues#list-repository-issues) (:read)
- [`POST /repos/:owner/:repo/issues`](/rest/reference/issues#create-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number`](/rest/reference/issues#get-an-issue) (:read)
- [`PATCH /repos/:owner/:repo/issues/:issue_number`](/rest/reference/issues#update-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/comments`](/rest/reference/issues#list-issue-comments) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/comments`](/rest/reference/issues#create-an-issue-comment) (:write)
- [`PUT /repos/:owner/:repo/issues/:issue_number/lock`](/rest/reference/issues#lock-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/lock`](/rest/reference/issues#unlock-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/reactions`](/rest/reference/reactions#list-reactions-for-an-issue) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/reactions`](/rest/reference/reactions#create-reaction-for-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/timeline`](/rest/reference/issues#list-timeline-events-for-an-issue) (:read)
- [`GET /repos/:owner/:repo/issues/comments`](/rest/reference/issues#list-issue-comments-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/issues/comments/:comment_id`](/rest/reference/issues#get-an-issue-comment) (:read)
- [`PATCH /repos/:owner/:repo/issues/comments/:comment_id`](/rest/reference/issues#update-an-issue-comment) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id`](/rest/reference/issues#delete-an-issue-comment) (:write)
- [`GET /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/rest/reference/reactions#list-reactions-for-an-issue-comment) (:read)
- [`POST /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/rest/reference/reactions#create-reaction-for-an-issue-comment) (:write)

_Assignees_
- [`GET /repos/:owner/:repo/assignees`](/rest/reference/issues#list-assignees) (:read)
- [`GET /repos/:owner/:repo/assignees/:username`](/rest/reference/issues#check-if-a-user-can-be-assigned) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/assignees`](/rest/reference/issues#add-assignees-to-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/assignees`](/rest/reference/issues#remove-assignees-from-an-issue) (:write)

_Events_
- [`GET /repos/:owner/:repo/issues/:issue_number/events`](/rest/reference/issues#list-issue-events) (:read)
- [`GET /repos/:owner/:repo/issues/events/:event_id`](/rest/reference/issues#get-an-issue-event) (:read)

_Labels_
- [`GET /repos/:owner/:repo/issues/:issue_number/labels`](/rest/reference/issues#list-labels-for-an-issue) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/labels`](/rest/reference/issues#add-labels-to-an-issue) (:write)
- [`PUT /repos/:owner/:repo/issues/:issue_number/labels`](/rest/reference/issues#set-labels-for-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/labels`](/rest/reference/issues#remove-all-labels-from-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/labels/:name`](/rest/reference/issues#remove-a-label-from-an-issue) (:write)
- [`GET /repos/:owner/:repo/labels`](/rest/reference/issues#list-labels-for-a-repository) (:read)
- [`POST /repos/:owner/:repo/labels`](/rest/reference/issues#create-a-label) (:write)
- [`GET /repos/:owner/:repo/labels/:name`](/rest/reference/issues#get-a-label) (:read)
- [`PATCH /repos/:owner/:repo/labels/:name`](/rest/reference/issues#update-a-label) (:write)
- [`DELETE /repos/:owner/:repo/labels/:name`](/rest/reference/issues#delete-a-label) (:write)

_Milestones_
- [`GET /repos/:owner/:repo/milestones`](/rest/reference/issues#list-milestones) (:read)
- [`POST /repos/:owner/:repo/milestones`](/rest/reference/issues#create-a-milestone) (:write)
- [`GET /repos/:owner/:repo/milestones/:milestone_number`](/rest/reference/issues#get-a-milestone) (:read)
- [`PATCH /repos/:owner/:repo/milestones/:milestone_number`](/rest/reference/issues#update-a-milestone) (:write)
- [`DELETE /repos/:owner/:repo/milestones/:milestone_number`](/rest/reference/issues#delete-a-milestone) (:write)
- [`GET /repos/:owner/:repo/milestones/:milestone_number/labels`](/rest/reference/issues#list-labels-for-issues-in-a-milestone) (:read)

_Reactions_
- [`GET /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/rest/reference/reactions#list-reactions-for-an-issue-comment) (:read)
- [`POST /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/rest/reference/reactions#create-reaction-for-an-issue-comment) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/reactions`](/rest/reference/reactions#list-reactions-for-an-issue) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/reactions`](/rest/reference/reactions#create-reaction-for-an-issue) (:write)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- [`DELETE /reactions/:reaction_id`](/rest/reference/reactions#delete-a-reaction-legacy) (:write)
- [`DELETE /repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id`](/rest/reference/reactions#delete-a-commit-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/reactions/:reaction_id`](/rest/reference/reactions#delete-an-issue-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id/reactions/:reaction_id`](/rest/reference/reactions#delete-an-issue-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/pulls/comments/:comment_id/reactions/:reaction_id`](/rest/reference/reactions#delete-a-pull-request-comment-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id`](/rest/reference/reactions#delete-team-discussion-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`](/rest/reference/reactions#delete-team-discussion-comment-reaction) (:write){% else %}
- [`DELETE /reactions/:reaction_id`](/rest/reference/reactions#delete-a-reaction) (:write){% endif %}

### Permission on "keys"

_Keys_
- [`GET /user/keys`](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user) (:read)
- [`POST /user/keys`](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user) (:write)
- [`GET /user/keys/:key_id`](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user) (:read)
- [`DELETE /user/keys/:key_id`](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user) (:write)

### Permission on "members"

{% if currentVersion == "free-pro-team@latest" %}
- [`GET /organizations/:org_id/team/:team_id/team-sync/group-mappings`](/rest/reference/teams#list-idp-groups-for-a-team) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PATCH /organizations/:org_id/team/:team_id/team-sync/group-mappings`](/rest/reference/teams#create-or-update-idp-group-connections) (:write)
{% endif %}
- [`GET /orgs/:org/outside_collaborators`](/rest/reference/orgs#list-outside-collaborators-for-an-organization) (:read)
- [`PUT /orgs/:org/outside_collaborators/:username`](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator) (:write)
- [`DELETE /orgs/:org/outside_collaborators/:username`](/rest/reference/orgs#remove-outside-collaborator-from-an-organization) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /orgs/:org/team-sync/groups`](/rest/reference/teams#list-idp-groups-for-an-organization) (:write)
{% endif %}
- [`GET /orgs/:org/team/:team_id`](/rest/reference/teams#get-a-team-by-name) (:read)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /scim/v2/orgs/:org/Users`](/rest/reference/scim#list-scim-provisioned-identities) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`POST /scim/v2/orgs/:org/Users`](/rest/reference/scim#provision-and-invite-a-scim-user) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /scim/v2/orgs/:org/Users/:external_identity_guid`](/rest/reference/scim#get-scim-provisioning-information-for-a-user) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /scim/v2/orgs/:org/Users/:external_identity_guid`](/rest/reference/scim#set-scim-information-for-a-provisioned-user) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PATCH /scim/v2/orgs/:org/Users/:external_identity_guid`](/rest/reference/scim#update-an-attribute-for-a-scim-user) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /scim/v2/orgs/:org/Users/:external_identity_guid`](/rest/reference/scim#delete-a-scim-user-from-an-organization) (:write)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
_Invitations_
- [`GET /orgs/:org/invitations`](/rest/reference/orgs#list-pending-organization-invitations) (:read)
- [`POST /orgs/:org/invitations`](/rest/reference/orgs#create-an-organization-invitation) (:write)
- [`GET /orgs/:org/invitations/:invitation_id/teams`](/rest/reference/orgs#list-organization-invitation-teams) (:read)
- [`GET /teams/:team_id/invitations`](/rest/reference/teams#list-pending-team-invitations) (:read)
{% endif %}

_Organization members_
- [`DELETE /orgs/:org/members/:username`](/rest/reference/orgs#remove-an-organization-member) (:write)
- [`GET /orgs/:org/memberships/:username`](/rest/reference/orgs#get-organization-membership-for-a-user) (:read)
- [`PUT /orgs/:org/memberships/:username`](/rest/reference/orgs#set-organization-membership-for-a-user) (:write)
- [`DELETE /orgs/:org/memberships/:username`](/rest/reference/orgs#remove-organization-membership-for-a-user) (:write)
- [`PUT /orgs/:org/public_members/:username`](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user) (:write)
- [`DELETE /orgs/:org/public_members/:username`](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user) (:write)
- [`GET /user/memberships/orgs`](/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user) (:read)
- [`GET /user/memberships/orgs/:org`](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user) (:read)
- [`PATCH /user/memberships/orgs/:org`](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user) (:write)

_Team members_
- [`GET /teams/:team_id/members`](/rest/reference/teams#list-team-members) (:read)
- [`GET /teams/:team_id/memberships/:username`](/rest/reference/teams#get-team-membership-for-a-user) (:read)
- [`PUT /teams/:team_id/memberships/:username`](/rest/reference/teams#add-or-update-team-membership-for-a-user) (:write)
- [`DELETE /teams/:team_id/memberships/:username`](/rest/reference/teams#remove-team-membership-for-a-user) (:write)

_Teams_
- [`GET /orgs/:org/teams`](/rest/reference/teams#list-teams) (:read)
- [`POST /orgs/:org/teams`](/rest/reference/teams#create-a-team) (:write)
- [`GET /orgs/:org/teams/:team_slug`](/rest/reference/teams#get-a-team-by-name) (:read)
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
- [`GET /teams/:team_id`](/rest/reference/teams#get-a-team) (:read)
{% endif %}
- [`PATCH /teams/:team_id`](/rest/reference/teams#update-a-team) (:write)
- [`DELETE /teams/:team_id`](/rest/reference/teams#delete-a-team) (:write)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- [`GET /teams/:team_id/projects`](/rest/reference/teams#list-team-projects) (:read)
- [`GET /teams/:team_id/projects/:project_id`](/rest/reference/teams#check-team-permissions-for-a-project) (:read)
- [`PUT /teams/:team_id/projects/:project_id`](/rest/reference/teams#add-or-update-team-project-permissions) (:read)
- [`DELETE /teams/:team_id/projects/:project_id`](/rest/reference/teams#remove-a-project-from-a-team) (:read)
{% endif %}
- [`GET /teams/:team_id/repos`](/rest/reference/teams#list-team-repositories) (:read)
- [`GET /teams/:team_id/repos/:owner/:repo`](/rest/reference/teams#check-team-permissions-for-a-repository) (:read)
- [`PUT /teams/:team_id/repos/:owner/:repo`](/rest/reference/teams#add-or-update-team-repository-permissions) (:read)
- [`DELETE /teams/:team_id/repos/:owner/:repo`](/rest/reference/teams#remove-a-repository-from-a-team) (:write)
- [`GET /teams/:team_id/teams`](/rest/reference/teams#list-child-teams) (:read)

### Permission on "organization administration"

- [`PATCH /orgs/:org`](/rest/reference/orgs#update-an-organization) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /orgs/:org/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-an-organization) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /orgs/:org/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-an-organization) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /orgs/:org/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization) (:write)
{% endif %}

### Permission on "organization hooks"

- [`GET /orgs/:org/hooks`](/rest/reference/orgs#webhooks/#list-organization-webhooks) (:read)
- [`POST /orgs/:org/hooks`](/rest/reference/orgs#webhooks/#create-an-organization-webhook) (:write)
- [`GET /orgs/:org/hooks/:hook_id`](/rest/reference/orgs#webhooks/#get-an-organization-webhook) (:read)
- [`PATCH /orgs/:org/hooks/:hook_id`](/rest/reference/orgs#webhooks/#update-an-organization-webhook) (:write)
- [`DELETE /orgs/:org/hooks/:hook_id`](/rest/reference/orgs#webhooks/#delete-an-organization-webhook) (:write)
- [`POST /orgs/:org/hooks/:hook_id/pings`](/rest/reference/orgs#webhooks/#ping-an-organization-webhook) (:write)

_Teams_
- [`DELETE /teams/:team_id/projects/:project_id`](/rest/reference/teams#remove-a-project-from-a-team) (:read)

{% if enterpriseServerVersions contains currentVersion %}
### Permission on "organization pre receive hooks"

- [`GET /orgs/:org/pre-receive-hooks`](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization) (:read)
- [`GET /orgs/:org/pre-receive-hooks/:pre_receive_hook_id`](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization) (:read)
- [`PATCH /orgs/:org/pre-receive-hooks/:pre_receive_hook_id`](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization) (:write)
- [`DELETE /orgs/:org/pre-receive-hooks/:pre_receive_hook_id`](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) (:write)
{% endif %}

### Permission on "organization projects"

- [`POST /orgs/:org/projects`](/rest/reference/projects#create-an-organization-project) (:write)
- [`GET /projects/:project_id`](/rest/reference/projects#get-a-project) (:read)
- [`PATCH /projects/:project_id`](/rest/reference/projects#update-a-project) (:write)
- [`DELETE /projects/:project_id`](/rest/reference/projects#delete-a-project) (:write)
- [`POST /projects/:project_id/cards`](/rest/reference/projects#create-a-project-card) (:write)
- [`GET /projects/:project_id/columns`](/rest/reference/projects#list-project-columns) (:read)
- [`POST /projects/:project_id/columns`](/rest/reference/projects#create-a-project-column) (:write)
- [`GET /projects/columns/:column_id`](/rest/reference/projects#get-a-project-column) (:read)
- [`PATCH /projects/columns/:column_id`](/rest/reference/projects#update-a-project-column) (:write)
- [`DELETE /projects/columns/:column_id`](/rest/reference/projects#delete-a-project-column) (:write)
- [`GET /projects/columns/:column_id/cards`](/rest/reference/projects#list-project-cards) (:read)
- [`POST /projects/columns/:column_id/cards`](/rest/reference/projects#create-a-project-card) (:write)
- [`POST /projects/columns/:column_id/moves`](/rest/reference/projects#move-a-project-column) (:write)
- [`GET /projects/columns/cards/:card_id`](/rest/reference/projects#get-a-project-card) (:read)
- [`PATCH /projects/columns/cards/:card_id`](/rest/reference/projects#update-a-project-card) (:write)
- [`DELETE /projects/columns/cards/:card_id`](/rest/reference/projects#delete-a-project-card) (:write)
- [`POST /projects/columns/cards/:card_id/moves`](/rest/reference/projects#move-a-project-card) (:write)

{% if currentVersion == "free-pro-team@latest" %}
### Permission on "organization user blocking"

- [`GET /orgs/:org/blocks`](/rest/reference/orgs#list-users-blocked-by-an-organization) (:read)
- [`GET /orgs/:org/blocks/:username`](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization) (:read)
- [`PUT /orgs/:org/blocks/:username`](/rest/reference/orgs#block-a-user-from-an-organization) (:write)
- [`DELETE /orgs/:org/blocks/:username`](/rest/reference/orgs#unblock-a-user-from-an-organization) (:write)
{% endif %}

### Permission on "pages"

- [`GET /repos/:owner/:repo/pages`](/rest/reference/repos#get-a-github-pages-site) (:read)
- [`POST /repos/:owner/:repo/pages`](/rest/reference/repos#create-a-github-pages-site) (:write)
- [`PUT /repos/:owner/:repo/pages`](/rest/reference/repos#update-information-about-a-github-pages-site) (:write)
- [`DELETE /repos/:owner/:repo/pages`](/rest/reference/repos#delete-a-github-pages-site) (:write)
- [`GET /repos/:owner/:repo/pages/builds`](/rest/reference/repos#list-github-pages-builds) (:read)
- [`POST /repos/:owner/:repo/pages/builds`](/rest/reference/repos#request-a-github-pages-build) (:write)
- [`GET /repos/:owner/:repo/pages/builds/:build_id`](/rest/reference/repos#get-github-pages-build) (:read)
- [`GET /repos/:owner/:repo/pages/builds/latest`](/rest/reference/repos#get-latest-pages-build) (:read)

### Permission on "pull requests"

Pull requests and issues are closely related.. If your GitHub App has permissions on pull requests but not on issues, these endpoints will be limited to pull requests. Endpoints that return both pull requests and issues will be filtered. Endpoints that allow operations on both pull requests and issues will be restricted to pull requests.

- [`PATCH /repos/:owner/:repo/issues/:issue_number`](/rest/reference/issues#update-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/comments`](/rest/reference/issues#list-issue-comments) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/comments`](/rest/reference/issues#create-an-issue-comment) (:write)
- [`PUT /repos/:owner/:repo/issues/:issue_number/lock`](/rest/reference/issues#lock-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/lock`](/rest/reference/issues#unlock-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/timeline`](/rest/reference/issues#list-timeline-events-for-an-issue) (:read)
- [`GET /repos/:owner/:repo/issues/comments`](/rest/reference/issues#list-issue-comments-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/issues/comments/:comment_id`](/rest/reference/issues#get-an-issue-comment) (:read)
- [`PATCH /repos/:owner/:repo/issues/comments/:comment_id`](/rest/reference/issues#update-an-issue-comment) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id`](/rest/reference/issues#delete-an-issue-comment) (:write)
- [`GET /repos/:owner/:repo/pulls`](/rest/reference/pulls#list-pull-requests) (:read)
- [`POST /repos/:owner/:repo/pulls`](/rest/reference/pulls#create-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number`](/rest/reference/pulls#get-a-pull-request) (:read)
- [`PATCH /repos/:owner/:repo/pulls/:pull_number`](/rest/reference/pulls#update-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number/comments`](/rest/reference/pulls#list-review-comments-on-a-pull-request) (:read)
- [`POST /repos/:owner/:repo/pulls/:pull_number/comments`](/rest/reference/pulls#create-a-review-comment-for-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number/commits`](/rest/reference/pulls#list-commits-on-a-pull-request) (:read)
- [`GET /repos/:owner/:repo/pulls/:pull_number/files`](/rest/reference/pulls#list-pull-requests-files) (:read)
- [`GET /repos/:owner/:repo/pulls/:pull_number/merge`](/rest/reference/pulls#check-if-a-pull-request-has-been-merged) (:read)
- [`GET /repos/:owner/:repo/pulls/comments`](/rest/reference/pulls#list-review-comments-in-a-repository) (:read)
- [`GET /repos/:owner/:repo/pulls/comments/:comment_id`](/rest/reference/pulls#get-a-review-comment-for-a-pull-request) (:read)
- [`PATCH /repos/:owner/:repo/pulls/comments/:comment_id`](/rest/reference/pulls#update-a-review-comment-for-a-pull-request) (:write)
- [`DELETE /repos/:owner/:repo/pulls/comments/:comment_id`](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request) (:write)

_Assignees_
- [`GET /repos/:owner/:repo/assignees`](/rest/reference/issues#list-assignees) (:read)
- [`GET /repos/:owner/:repo/assignees/:username`](/rest/reference/issues#check-if-a-user-can-be-assigned) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/assignees`](/rest/reference/issues#add-assignees-to-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/assignees`](/rest/reference/issues#remove-assignees-from-an-issue) (:write)

_Events_
- [`GET /repos/:owner/:repo/issues/:issue_number/events`](/rest/reference/issues#list-issue-events) (:read)
- [`GET /repos/:owner/:repo/issues/events/:event_id`](/rest/reference/issues#get-an-issue-event) (:read)
- [`POST /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events`](/rest/reference/pulls#submit-a-review-for-a-pull-request) (:write)

_Labels_
- [`GET /repos/:owner/:repo/issues/:issue_number/labels`](/rest/reference/issues#list-labels-for-an-issue) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/labels`](/rest/reference/issues#add-labels-to-an-issue) (:write)
- [`PUT /repos/:owner/:repo/issues/:issue_number/labels`](/rest/reference/issues#set-labels-for-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/labels`](/rest/reference/issues#remove-all-labels-from-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/labels/:name`](/rest/reference/issues#remove-a-label-from-an-issue) (:write)
- [`GET /repos/:owner/:repo/labels`](/rest/reference/issues#list-labels-for-a-repository) (:read)
- [`POST /repos/:owner/:repo/labels`](/rest/reference/issues#create-a-label) (:write)
- [`GET /repos/:owner/:repo/labels/:name`](/rest/reference/issues#get-a-label) (:read)
- [`PATCH /repos/:owner/:repo/labels/:name`](/rest/reference/issues#update-a-label) (:write)
- [`DELETE /repos/:owner/:repo/labels/:name`](/rest/reference/issues#delete-a-label) (:write)

_Milestones_
- [`GET /repos/:owner/:repo/milestones`](/rest/reference/issues#list-milestones) (:read)
- [`POST /repos/:owner/:repo/milestones`](/rest/reference/issues#create-a-milestone) (:write)
- [`GET /repos/:owner/:repo/milestones/:milestone_number`](/rest/reference/issues#get-a-milestone) (:read)
- [`PATCH /repos/:owner/:repo/milestones/:milestone_number`](/rest/reference/issues#update-a-milestone) (:write)
- [`DELETE /repos/:owner/:repo/milestones/:milestone_number`](/rest/reference/issues#delete-a-milestone) (:write)
- [`GET /repos/:owner/:repo/milestones/:milestone_number/labels`](/rest/reference/issues#list-labels-for-issues-in-a-milestone) (:read)

_Reactions_
- [`POST /repos/:owner/:repo/issues/:issue_number/reactions`](/rest/reference/reactions#create-reaction-for-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/rest/reference/reactions#list-reactions-for-an-issue-comment) (:read)
- [`POST /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/rest/reference/reactions#create-reaction-for-an-issue-comment) (:write)
- [`GET /repos/:owner/:repo/pulls/comments/:comment_id/reactions`](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment) (:read)
- [`POST /repos/:owner/:repo/pulls/comments/:comment_id/reactions`](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment) (:write)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
- [`DELETE /reactions/:reaction_id`](/rest/reference/reactions#delete-a-reaction-legacy) (:write)
- [`DELETE /repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id`](/rest/reference/reactions#delete-a-commit-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/reactions/:reaction_id`](/rest/reference/reactions#delete-an-issue-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id/reactions/:reaction_id`](/rest/reference/reactions#delete-an-issue-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/pulls/comments/:comment_id/reactions/:reaction_id`](/rest/reference/reactions#delete-a-pull-request-comment-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id`](/rest/reference/reactions#delete-team-discussion-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`](/rest/reference/reactions#delete-team-discussion-comment-reaction) (:write){% else %}- [`DELETE /reactions/:reaction_id`](/rest/reference/reactions#delete-a-reaction) (:write){% endif %}

_Requested reviewers_
- [`GET /repos/:owner/:repo/pulls/:pull_number/requested_reviewers`](/rest/reference/pulls#list-requested-reviewers-for-a-pull-request) (:read)
- [`POST /repos/:owner/:repo/pulls/:pull_number/requested_reviewers`](/rest/reference/pulls#request-reviewers-for-a-pull-request) (:write)
- [`DELETE /repos/:owner/:repo/pulls/:pull_number/requested_reviewers`](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request) (:write)

_Reviews_
- [`GET /repos/:owner/:repo/pulls/:pull_number/reviews`](/rest/reference/pulls#list-reviews-for-a-pull-request) (:read)
- [`POST /repos/:owner/:repo/pulls/:pull_number/reviews`](/rest/reference/pulls#create-a-review-for-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id`](/rest/reference/pulls#get-a-review-for-a-pull-request) (:read)
- [`PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id`](/rest/reference/pulls#update-a-review-for-a-pull-request) (:write)
- [`DELETE /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id`](/rest/reference/pulls#delete-a-pending-review-for-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments`](/rest/reference/pulls#list-comments-for-a-pull-request-review) (:read)
- [`PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals`](/rest/reference/pulls#dismiss-a-review-for-a-pull-request) (:write)

### Permission on "repository hooks"

- [`GET /repos/:owner/:repo/hooks`](/rest/reference/repos#list-repository-webhooks) (:read)
- [`POST /repos/:owner/:repo/hooks`](/rest/reference/repos#create-a-repository-webhook) (:write)
- [`GET /repos/:owner/:repo/hooks/:hook_id`](/rest/reference/repos#get-a-repository-webhook) (:read)
- [`PATCH /repos/:owner/:repo/hooks/:hook_id`](/rest/reference/repos#update-a-repository-webhook) (:write)
- [`DELETE /repos/:owner/:repo/hooks/:hook_id`](/rest/reference/repos#delete-a-repository-webhook) (:write)
- [`POST /repos/:owner/:repo/hooks/:hook_id/pings`](/rest/reference/repos#ping-a-repository-webhook) (:read)
- [`POST /repos/:owner/:repo/hooks/:hook_id/tests`](/rest/reference/repos#test-the-push-repository-webhook) (:read)

{% if enterpriseServerVersions contains currentVersion %}
### Permission on "repository pre receive hooks"

- [`GET /repos/:owner/:repo/pre-receive-hooks`](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id`](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository) (:read)
- [`PATCH /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id`](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository) (:write)
- [`DELETE /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id`](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) (:write)
{% endif %}

### Permission on "repository projects"

- [`GET /projects/:project_id`](/rest/reference/projects#get-a-project) (:read)
- [`PATCH /projects/:project_id`](/rest/reference/projects#update-a-project) (:write)
- [`DELETE /projects/:project_id`](/rest/reference/projects#delete-a-project) (:write)
- [`POST /projects/:project_id/cards`](/rest/reference/projects#create-a-project-card) (:write)
- [`GET /projects/:project_id/columns`](/rest/reference/projects#list-project-columns) (:read)
- [`POST /projects/:project_id/columns`](/rest/reference/projects#create-a-project-column) (:write)
- [`GET /projects/columns/:column_id`](/rest/reference/projects#get-a-project-column) (:read)
- [`PATCH /projects/columns/:column_id`](/rest/reference/projects#update-a-project-column) (:write)
- [`DELETE /projects/columns/:column_id`](/rest/reference/projects#delete-a-project-column) (:write)
- [`GET /projects/columns/:column_id/cards`](/rest/reference/projects#list-project-cards) (:read)
- [`POST /projects/columns/:column_id/cards`](/rest/reference/projects#create-a-project-card) (:write)
- [`POST /projects/columns/:column_id/moves`](/rest/reference/projects#move-a-project-column) (:write)
- [`GET /projects/columns/cards/:card_id`](/rest/reference/projects#get-a-project-card) (:read)
- [`PATCH /projects/columns/cards/:card_id`](/rest/reference/projects#update-a-project-card) (:write)
- [`DELETE /projects/columns/cards/:card_id`](/rest/reference/projects#delete-a-project-card) (:write)
- [`POST /projects/columns/cards/:card_id/moves`](/rest/reference/projects#move-a-project-card) (:write)
- [`GET /repos/:owner/:repo/projects`](/rest/reference/projects#list-repository-projects) (:read)
- [`POST /repos/:owner/:repo/projects`](/rest/reference/projects#create-a-repository-project) (:write)

_Teams_
- [`DELETE /teams/:team_id/projects/:project_id`](/rest/reference/teams#remove-a-project-from-a-team) (:read)

{% if currentVersion == "free-pro-team@latest" %}
### Permission on "secrets"

* [`GET /repos/:owner/:repo/actions/secrets/public-key`](/rest/reference/actions#get-a-repository-public-key) (:read)
* [`GET /repos/:owner/:repo/actions/secrets`](/rest/reference/actions#list-repository-secrets) (:read)
* [`GET /repos/:owner/:repo/actions/secrets/:secret_name`](/rest/reference/actions#get-a-repository-secret) (:read)
* [`PUT /repos/:owner/:repo/actions/secrets/:secret_name`](/rest/reference/actions#create-or-update-a-repository-secret) (:write)
* [`DELETE /repos/:owner/:repo/actions/secrets/:secret_name`](/rest/reference/actions#delete-a-repository-secret) (:write)
* [`GET /orgs/:org/actions/secrets/public-key`](/rest/reference/actions#get-an-organization-public-key) (:read)
* [`GET /orgs/:org/actions/secrets`](/rest/reference/actions#list-organization-secrets) (:read)
* [`GET /orgs/:org/actions/secrets/:secret_name`](/rest/reference/actions#get-an-organization-secret) (:read)
* [`PUT /orgs/:org/actions/secrets/:secret_name`](/rest/reference/actions#create-or-update-an-organization-secret) (:write)
* [`GET /orgs/:org/actions/secrets/:secret_name/repositories`](/rest/reference/actions#list-selected-repositories-for-an-organization-secret) (:read)
* [`PUT /orgs/:org/actions/secrets/:secret_name/repositories`](/rest/reference/actions#set-selected-repositories-for-an-organization-secret) (:write)
* [`PUT /orgs/:org/actions/secrets/:secret_name/repositories/:repository_id`](/rest/reference/actions#add-selected-repository-to-an-organization-secret) (:write)
* [`DELETE /orgs/:org/actions/secrets/:secret_name/repositories/:repository_id`](/rest/reference/actions#remove-selected-repository-from-an-organization-secret) (:write)
* [`DELETE /orgs/:org/actions/secrets/:secret_name`](/rest/reference/actions#delete-an-organization-secret) (:write)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
### Permission on "secret scanning alerts"

- [`GET /repos/:owner/:repo/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository) (:read)

- [`GET /repos/:owner/:repo/secret-scanning/alerts/:alert_number`](/rest/reference/secret-scanning#get-a-secret-scanning-alert) (:read)

- [`PATCH /repos/:owner/:repo/secret-scanning/alerts/:alert_number`](/rest/reference/secret-scanning#update-a-secret-scanning-alert) (:write)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### Permission on "security events"

- [`GET /repos/:owner/:repo/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/code-scanning/alerts/:alert_number`](/rest/reference/code-scanning#get-a-code-scanning-alert) (:read)
- [`PATCH /repos/:owner/:repo/code-scanning/alerts/:alert_number`](/rest/reference/code-scanning#update-a-code-scanning-alert) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
- [`GET /repos/:owner/:repo/code-scanning/alerts/:alert_number/instances`](/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- [`GET /repos/:owner/:repo/code-scanning/analyses`](/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
- [`GET /repos/:owner/:repo/code-scanning/analyses/:analysis_id`](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
- [`DELETE /repos/:owner/:repo/code-scanning/analyses/:analysis_id`](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- [`POST /repos/:owner/:repo/code-scanning/sarifs`](/rest/reference/code-scanning#upload-an-analysis-as-sarif-data) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
- [`GET /repos/:owner/:repo/code-scanning/sarifs/:sarif_id`](/rest/reference/code-scanning#get-information-about-a-sarif-upload) (:read)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Permission on "self-hosted runners"
- [`GET /orgs/:org/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-an-organization) (:read)
- [`POST /orgs/:org/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-an-organization) (:write)
- [`GET /orgs/:org/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-an-organization) (:read)
- [`GET /orgs/:org/actions/runners/:runner_id`](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization) (:read)
- [`POST /orgs/:org/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-an-organization) (:write)
- [`DELETE /orgs/:org/actions/runners/:runner_id`](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization) (:write)
{% endif %}

### Permission on "single file"

- [`GET /repos/:owner/:repo/contents/:path`](/rest/reference/repos#get-repository-content) (:read)
- [`PUT /repos/:owner/:repo/contents/:path`](/rest/reference/repos#create-or-update-file-contents) (:write)
- [`DELETE /repos/:owner/:repo/contents/:path`](/rest/reference/repos#delete-a-file) (:write)

### Permission on "starring"

- [`GET /user/starred/:owner/:repo`](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user) (:read)
- [`PUT /user/starred/:owner/:repo`](/rest/reference/activity#star-a-repository-for-the-authenticated-user) (:write)
- [`DELETE /user/starred/:owner/:repo`](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user) (:write)

### Permission on "statuses"

- [`GET /repos/:owner/:repo/commits/:ref/status`](/rest/reference/repos#get-the-combined-status-for-a-specific-reference) (:read)
- [`GET /repos/:owner/:repo/commits/:ref/statuses`](/rest/reference/repos#list-commit-statuses-for-a-reference) (:read)
- [`POST /repos/:owner/:repo/statuses/:sha`](/rest/reference/repos#create-a-commit-status) (:write)

### Permission on "team discussions"

- [`GET /teams/:team_id/discussions`](/rest/reference/teams#list-discussions) (:read)
- [`POST /teams/:team_id/discussions`](/rest/reference/teams#create-a-discussion) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number`](/rest/reference/teams#get-a-discussion) (:read)
- [`PATCH /teams/:team_id/discussions/:discussion_number`](/rest/reference/teams#update-a-discussion) (:write)
- [`DELETE /teams/:team_id/discussions/:discussion_number`](/rest/reference/teams#delete-a-discussion) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number/comments`](/rest/reference/teams#list-discussion-comments) (:read)
- [`POST /teams/:team_id/discussions/:discussion_number/comments`](/rest/reference/teams#create-a-discussion-comment) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number/comments/:comment_number`](/rest/reference/teams#get-a-discussion-comment) (:read)
- [`PATCH /teams/:team_id/discussions/:discussion_number/comments/:comment_number`](/rest/reference/teams#update-a-discussion-comment) (:write)
- [`DELETE /teams/:team_id/discussions/:discussion_number/comments/:comment_number`](/rest/reference/teams#delete-a-discussion-comment) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) (:read)
- [`POST /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion) (:read)
- [`POST /teams/:team_id/discussions/:discussion_number/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion) (:write)
