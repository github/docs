---
title: Permissions required for GitHub Apps
intro: 'You can find the required permissions for each {% data variables.product.prodname_github_app %}-compatible endpoint.'
redirect_from:
  - /v3/apps/permissions
  - /rest/reference/permissions-required-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
shortTitle: GitHub App permissions
---

## About {% data variables.product.prodname_github_app %} permissions

{% data variables.product.prodname_github_apps %} are created with a set of permissions. Permissions define what resources the {% data variables.product.prodname_github_app %} can access via the API. For more information, see "[Setting permissions for GitHub Apps](/apps/building-github-apps/setting-permissions-for-github-apps/)."

## Actions

{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-a-repository) (read){% endif %}
{% ifversion ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/reference/actions#get-github-actions-cache-usage-policy-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.6 %}- [`GET /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#list-github-actions-caches-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}`](/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id) (write){% endif %}
- [`GET /repos/{owner}/{repo}/actions/artifacts`](/rest/reference/actions#list-artifacts-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#get-an-artifact) (read)
- [`DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#delete-an-artifact) (write)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`](/rest/reference/actions#list-workflow-run-artifacts) (read)
{% ifversion fpt or ghec or ghes %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#get-pending-deployments-for-a-workflow-run) (read){% endif %}
{% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (read){% endif %}
- [`GET /repos/{owner}/{repo}/environments`](/rest/deployments/environments#list-environments) (read)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}`](/rest/reference/actions#get-a-job-for-a-workflow-run) (read)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs`](/rest/reference/actions#download-job-logs-for-a-workflow-run) (read)
{% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`](/rest/reference/actions#re-run-job-for-workflow-run) (write){% endif %}
{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run-attempt) (read){% endif %}
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run) (read)
- [`GET /repos/{owner}/{repo}/actions/runs`](/rest/reference/actions#list-workflow-runs-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#get-a-workflow-run) (read)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#delete-a-workflow-run) (write)
{% ifversion fpt or ghec or ghes %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals`](/rest/reference/actions#get-the-review-history-for-a-workflow-run) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve`](/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request) (write){% endif %}
{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`](/rest/reference/actions#get-a-workflow-run-attempt) (read){% endif %}
{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`](/rest/reference/actions#download-workflow-run-attempt-logs) (read){% endif %}
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`](/rest/reference/actions#cancel-a-workflow-run) (write)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#download-workflow-run-logs) (read)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#delete-workflow-run-logs) (write)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun`](/rest/reference/actions#re-run-a-workflow) (write)
{% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`](/rest/reference/actions#re-run-workflow-failed-jobs) (write){% endif %}
{% ifversion fpt or ghec or ghae %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing`](/rest/reference/actions#get-workflow-run-usage) (read){% endif %}
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`](/rest/reference/actions#list-workflow-runs) (read)
- [`GET /repos/{owner}/{repo}/actions/workflows`](/rest/reference/actions#list-repository-workflows) (read)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`](/rest/reference/actions#get-a-workflow) (read)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`](/rest/reference/actions#disable-a-workflow) (write)
- [`POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`](/rest/reference/actions#create-a-workflow-dispatch-event) (write)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`](/rest/reference/actions#enable-a-workflow) (write)
{% ifversion fpt or ghec or ghae %}- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`](/rest/reference/actions#get-workflow-usage) (read){% endif %}

## Administration

{% ifversion ghes > 3.4 %}- [`PATCH /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/reference/actions#set-github-actions-cache-usage-policy-for-a-repository) (write){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-a-repository) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository) (write){% endif %}
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (write)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (write)
- [`POST /orgs/{org}/repos`](/rest/reference/repos#create-an-organization-repository) (write)
- [`PATCH /repos/{owner}/{repo}`](/rest/reference/repos/#update-a-repository) (write)
- [`DELETE /repos/{owner}/{repo}`](/rest/reference/repos#delete-a-repository) (write)
- [`POST /repos/{owner}/{repo}/forks`](/rest/reference/repos#create-a-fork) (write)
{% ifversion ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/replicas/caches`](/rest/reference/repos#list-repository-cache-replication-status) (read){% endif %}
- [`GET /repos/{owner}/{repo}/teams`](/rest/reference/repos#list-repository-teams) (read)
- [`POST /repos/{owner}/{repo}/transfer`](/rest/reference/repos#transfer-a-repository) (write)
- [`POST /user/repos`](/rest/reference/repos#create-a-repository-for-the-authenticated-user) (write)
- [`GET /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-a-repository) (read)
- [`PUT /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-a-repository) (write)
{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#get-workflow-access-level-to-a-repository) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.4 %}- [`PUT /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#set-workflow-access-to-a-repository) (write){% endif %}
- [`GET /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-a-repository) (read)
- [`PUT /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-a-repository) (write)
{% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.5 %}- [`PUT /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions-for-a-repository) (write){% endif %}
- [`GET /repos/{owner}/{repo}/autolinks`](/v3/repos#list-autolinks) (read)
- [`POST /repos/{owner}/{repo}/autolinks`](/v3/repos#create-an-autolink) (write)
- [`GET /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#get-autolink) (read)
- [`DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#delete-autolink) (write)
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#enable-automated-security-fixes) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#disable-automated-security-fixes) (write){% endif %}
- [`PUT /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#add-a-repository-collaborator) (write)
- [`DELETE /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#remove-a-repository-collaborator) (write)
- [`GET /repos/{owner}/{repo}/invitations`](/rest/collaborators/invitations#list-repository-invitations) (read)
- [`PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#update-a-repository-invitation) (write)
- [`DELETE /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#delete-a-repository-invitation) (write)
- [`GET /user/repository_invitations`](/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user) (read)
- [`PATCH /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#accept-a-repository-invitation) (write)
- [`DELETE /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#decline-a-repository-invitation) (write)
- [`GET /repos/{owner}/{repo}/keys`](/rest/reference/repos#list-deploy-keys) (read)
- [`POST /repos/{owner}/{repo}/keys`](/rest/reference/repos#create-a-deploy-key) (write)
- [`GET /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#get-a-deploy-key) (read)
- [`DELETE /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#delete-a-deploy-key) (write)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (write){% endif %}
- [`GET /repos/{owner}/{repo}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository) (read)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository) (write)
{% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.3 %}- [`POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.3 %}- [`PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository) (write){% endif %}
- [`GET /repos/{owner}/{repo}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-a-repository) (read)
- [`POST /repos/{owner}/{repo}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-a-repository) (write)
- [`POST /repos/{owner}/{repo}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-a-repository) (write)
{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#list-tag-protection-state-of-a-repository) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#create-tag-protection-state-for-a-repository) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.4 %}- [`DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}`](/rest/reference/repos#delete-tag-protection-state-for-a-repository) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#enable-vulnerability-alerts) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#disable-vulnerability-alerts) (write){% endif %}
- [`PUT /repos/{owner}/{repo}/topics`](/rest/reference/repos#replace-all-repository-topics) (write)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/clones`](/rest/metrics/traffic#get-repository-clones) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/paths`](/rest/metrics/traffic#get-top-referral-paths) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/referrers`](/rest/metrics/traffic#get-top-referral-sources) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/views`](/rest/metrics/traffic#get-page-views) (read){% endif %}

{% ifversion fpt or ghec %}

## Blocking

- [`GET /user/blocks`](/rest/reference/users#list-users-blocked-by-the-authenticated-user) (read)
- [`GET /user/blocks/{username}`](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user) (read)
- [`PUT /user/blocks/{username}`](/rest/reference/users#block-a-user) (write)
- [`DELETE /user/blocks/{username}`](/rest/reference/users#unblock-a-user) (write)

{% endif %}

## Checks

- [`POST /repos/{owner}/{repo}/check-runs`](/rest/reference/checks#create-a-check-run) (write)
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#get-a-check-run) (read)
- [`PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#update-a-check-run) (write)
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`](/rest/reference/checks#list-check-run-annotations) (read)
- [`POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest`](/rest/reference/checks#rerequest-a-check-run) (write)
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs`](/rest/reference/checks#list-check-runs-in-a-check-suite) (read)
- [`POST /repos/{owner}/{repo}/check-suites`](/rest/reference/checks#create-a-check-suite) (write)
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}`](/rest/reference/checks#get-a-check-suite) (read)
- [`POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest`](/rest/reference/checks#rerequest-a-check-suite) (write)
- [`PATCH /repos/{owner}/{repo}/check-suites/preferences`](/rest/reference/checks#update-repository-preferences-for-check-suites) (write)
{% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (read){% endif %}

{% ifversion fpt or ghec %}

## Codespaces

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (read)
- [`GET /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user) (read)
- [`POST /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#create-a-codespace-in-a-repository) (write)
- [`GET /repos/{owner}/{repo}/codespaces/new`](/rest/reference/codespaces#preview-attributes-for-a-new-codespace) (write)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`](/rest/reference/codespaces#create-a-codespace-from-a-pull-request) (write)
- [`GET /user/codespaces`](/rest/reference/codespaces#list-codespaces-for-the-authenticated-user) (read)
- [`POST /user/codespaces`](/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user) (write)
- [`GET /user/codespaces/{codespace_name}`](/rest/reference/codespaces#get-a-codespace-for-the-authenticated-user) (read)
- [`PATCH /user/codespaces/{codespace_name}`](/rest/reference/codespaces#update-a-codespace-for-the-authenticated-user) (write)
- [`DELETE /user/codespaces/{codespace_name}`](/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user) (write)

## Codespaces lifecycle admin

- [`POST /user/codespaces/{codespace_name}/exports`](/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user) (write)
- [`GET /user/codespaces/{codespace_name}/exports/{export_id}`](/rest/codespaces/codespaces#get-details-about-a-codespace-export) (read)
- [`POST /user/codespaces/{codespace_name}/start`](/rest/reference/codespaces#start-a-codespace-for-the-authenticated-user) (write)
- [`POST /user/codespaces/{codespace_name}/stop`](/rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user) (write)

## Codespaces metadata

- [`GET /repos/{owner}/{repo}/codespaces/devcontainers`](/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user) (read)
- [`GET /repos/{owner}/{repo}/codespaces/machines`](/rest/reference/codespaces#list-available-machine-types-for-a-repository) (read)
- [`GET /user/codespaces/{codespace_name}/machines`](/rest/reference/codespaces#list-machine-types-for-a-codespace) (read)

## Codespaces secrets

- [`GET /repos/{owner}/{repo}/codespaces/secrets`](/rest/reference/codespaces#list-repository-secrets) (write)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-repository-secret) (write)
- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (write)
- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (write)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-a-repository-public-key) (write)

## Codespaces user secrets

- [`GET /user/codespaces/secrets`](/rest/reference/codespaces#list-secrets-for-the-authenticated-user) (read)
- [`GET /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-secret-for-the-authenticated-user) (read)
- [`PUT /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user) (write)
- [`DELETE /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user) (write)
- [`GET /user/codespaces/secrets/public-key`](/rest/reference/codespaces#get-public-key-for-the-authenticated-user) (read)
- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (read)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (write)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (write)
- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (write)

{% endif %}

## Contents

{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/codeowners/errors`](/rest/reference/repos#list-codeowners-errors) (read){% endif %}
- [`POST /repos/{owner}/{repo}/git/blobs`](/rest/reference/git#create-a-blob) (write)
- [`POST /repos/{owner}/{repo}/git/commits`](/rest/reference/git#create-a-commit) (write)
- [`POST /repos/{owner}/{repo}/git/refs`](/rest/reference/git#create-a-reference) (write)
- [`POST /repos/{owner}/{repo}/git/tags`](/rest/reference/git#create-a-tag-object) (write)
- [`POST /repos/{owner}/{repo}/git/trees`](/rest/reference/git#create-a-tree) (write)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import`](/rest/reference/migrations#get-an-import-status) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/import`](/rest/reference/migrations#start-an-import) (write){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import`](/rest/reference/migrations#update-an-import) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/import`](/rest/reference/migrations#cancel-an-import) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/authors`](/rest/reference/migrations#get-commit-authors) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/authors/{author_id}`](/rest/reference/migrations#map-a-commit-author) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/large_files`](/rest/reference/migrations#get-large-files) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/lfs`](/rest/reference/migrations#update-git-lfs-preference) (write){% endif %}
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#merge-a-pull-request) (write)
- [`POST /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-commit-comment) (write)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-commit-comment-reaction) (write)
- [`GET /repos/{owner}/{repo}/branches`](/rest/reference/repos#list-branches) (read)
- [`POST /repos/{owner}/{repo}/merge-upstream`](/rest/reference/repos#sync-a-fork-branch-with-the-upstream-repository) (write)
- [`POST /repos/{owner}/{repo}/merges`](/rest/reference/repos#merge-a-branch) (write)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases`](/rest/reference/code-scanning#list-codeql-databases) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`](/rest/reference/code-scanning#get-codeql-database) (read){% endif %}
- [`PATCH /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#update-a-commit-comment) (write)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#delete-a-commit-comment) (write)
- [`GET /repos/{owner}/{repo}/commits`](/rest/commits/commits#list-commits) (read)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/community/profile`](/rest/metrics/community#get-community-profile-metrics) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (read){% endif %}
- [`POST /repos/{owner}/{repo}/dispatches`](/rest/reference/repos#create-a-repository-dispatch-event) (write)
- [`GET /repos/{owner}/{repo}/releases`](/rest/reference/repos#list-releases) (read)
- [`POST /repos/{owner}/{repo}/releases`](/rest/reference/repos#create-a-release) (write)
- [`GET /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#get-a-release) (read)
- [`PATCH /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#update-a-release) (write)
- [`DELETE /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#delete-a-release) (write)
- [`GET /repos/{owner}/{repo}/releases/{release_id}/assets`](/rest/reference/repos#list-release-assets) (read)
- [`GET /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#get-a-release-asset) (read)
- [`PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#update-a-release-asset) (write)
- [`DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#delete-a-release-asset) (write)
{% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/releases/generate-notes`](/rest/reference/repos#generate-release-notes) (write){% endif %}
- [`GET /repos/{owner}/{repo}/releases/latest`](/rest/reference/repos#get-the-latest-release) (read)

{% ifversion fpt or ghec or ghes > 3.3 %}

## Dependabot secrets

- [`GET /repos/{owner}/{repo}/dependabot/secrets`](/rest/reference/dependabot#list-repository-secrets) (read)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-a-repository-secret) (read)
- [`PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-a-repository-secret) (write)
- [`DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-a-repository-secret) (write)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-a-repository-public-key) (read)

{% endif %}

## Deployments

{% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (read){% endif %}
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#list-deployment-statuses) (read)
- [`POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#create-a-deployment-status) (write)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`](/rest/reference/repos#get-a-deployment-status) (read)
- [`GET /repos/{owner}/{repo}/deployments`](/rest/reference/repos#list-deployments) (read)
- [`POST /repos/{owner}/{repo}/deployments`](/rest/reference/repos#create-a-deployment) (write)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#get-a-deployment) (read)
- [`DELETE /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#delete-a-deployment) (write)

{% ifversion fpt or ghec or ghes %}

## Emails

{% ifversion fpt or ghec %}- [`PATCH /user/email/visibility`](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec or ghes %}- [`GET /user/emails`](/rest/reference/users#list-email-addresses-for-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec or ghes %}- [`POST /user/emails`](/rest/reference/users#add-an-email-address-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec or ghes %}- [`DELETE /user/emails`](/rest/reference/users#delete-an-email-address-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec or ghes %}- [`GET /user/public_emails`](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user) (read){% endif %}

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## Enterprise administration

{% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /enterprises/{enterprise}/settings/billing/advanced-security`](/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise) (write){% endif %}
{% ifversion ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/reference/actions#get-github-actions-cache-usage-policy-for-an-enterprise) (write){% endif %}
{% ifversion ghes > 3.4 %}- [`PATCH /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/reference/actions#set-github-actions-cache-usage-policy-for-an-enterprise) (write){% endif %}

{% endif %}

## Followers

- [`GET /user/followers`](/rest/reference/users#list-followers-of-the-authenticated-user) (read)
- [`GET /user/following`](/rest/reference/users#list-the-people-the-authenticated-user-follows) (read)
- [`GET /user/following/{username}`](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user) (read)
- [`PUT /user/following/{username}`](/rest/reference/users#follow-a-user) (write)
- [`DELETE /user/following/{username}`](/rest/reference/users#unfollow-a-user) (write)

## Gists

- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (write)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (write)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (write)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (write)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (write)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (write)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (write)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (write)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (write)

{% ifversion fpt or ghec or ghes > 3.6 %}

## Git signing ssh public keys

- [`GET /user/ssh_signing_keys`](/rest/reference/users#list-public-ssh-signing-keys-for-the-authenticated-user) (read)
- [`POST /user/ssh_signing_keys`](/rest/reference/users#create-an-ssh-signing-key-for-the-authenticated-user) (write)
- [`GET /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#get-a-ssh-signing-key-for-the-authenticated-user) (read)
- [`DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#delete-a-ssh-signing-key-for-the-authenticated-user) (write)

{% endif %}

## Gpg keys

- [`GET /user/gpg_keys`](/rest/reference/users#list-gpg-keys-for-the-authenticated-user) (read)
- [`POST /user/gpg_keys`](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user) (write)
- [`GET /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user) (read)
- [`DELETE /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user) (write)

{% ifversion fpt or ghec %}

## Interaction limits

- [`PUT /user/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories) (write)
- [`GET /user/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories) (read)
- [`DELETE /user/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories) (write)

{% endif %}

## Issues

- [`POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#add-assignees-to-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#remove-assignees-from-an-issue) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#list-issue-comments) (read)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#create-an-issue-comment) (write)
- [`GET /repos/{owner}/{repo}/issues/comments`](/rest/reference/issues#list-issue-comments-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#get-an-issue-comment) (read)
- [`PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#update-an-issue-comment) (write)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#delete-an-issue-comment) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/events`](/rest/reference/issues#list-issue-events) (read)
- [`GET /repos/{owner}/{repo}/issues/events`](/rest/reference/issues#list-issue-events-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/issues/events/{event_id}`](/rest/reference/issues#get-an-issue-event) (read)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`](/rest/reference/issues#list-timeline-events-for-an-issue) (read)
- [`GET /repos/{owner}/{repo}/assignees`](/rest/reference/issues#list-assignees) (read)
- [`GET /repos/{owner}/{repo}/issues`](/rest/reference/issues#list-repository-issues) (read)
- [`POST /repos/{owner}/{repo}/issues`](/rest/reference/issues#create-an-issue) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues#get-an-issue) (read)
- [`PATCH /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues/#update-an-issue) (write)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#lock-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#unlock-an-issue) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#list-labels-for-an-issue) (read)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#add-labels-to-an-issue) (write)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#set-labels-for-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#remove-all-labels-from-an-issue) (write)
- [`GET /repos/{owner}/{repo}/labels`](/rest/reference/issues#list-labels-for-a-repository) (read)
- [`POST /repos/{owner}/{repo}/labels`](/rest/reference/issues#create-a-label) (write)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`](/rest/reference/issues#list-labels-for-issues-in-a-milestone) (read)
- [`GET /repos/{owner}/{repo}/milestones`](/rest/reference/issues#list-milestones) (read)
- [`POST /repos/{owner}/{repo}/milestones`](/rest/reference/issues#create-a-milestone) (write)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#get-a-milestone) (read)
- [`PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#update-a-milestone) (write)
- [`DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#delete-a-milestone) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue) (read)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-reaction) (write)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue-comment) (read)
- [`POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue-comment) (write)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-comment-reaction) (write)

## Keys

- [`GET /user/keys`](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user) (read)
- [`POST /user/keys`](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user) (write)
- [`GET /user/keys/{key_id}`](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user) (read)
- [`DELETE /user/keys/{key_id}`](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user) (write)

## Members

{% ifversion ghec or ghae or ghes > 3.5 %}- [`PATCH /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#link-external-idp-group-team-connection) (write){% endif %}
{% ifversion ghec or ghae or ghes > 3.5 %}- [`DELETE /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#unlink-external-idp-group-team-connection) (write){% endif %}
{% ifversion ghec or ghae or ghes > 3.5 %}- [`GET /orgs/{org}/external-group/{group_id}`](/rest/reference/teams#external-idp-group-info-for-an-organization) (write){% endif %}
{% ifversion ghec or ghae or ghes > 3.5 %}- [`GET /orgs/{org}/external-groups`](/rest/reference/teams#list-external-idp-groups-for-an-organization) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/failed_invitations`](/rest/reference/orgs#list-failed-organization-invitations) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations`](/rest/reference/orgs#list-pending-organization-invitations) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/invitations`](/rest/reference/orgs#create-an-organization-invitation) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/invitations/{invitation_id}`](/rest/reference/orgs#cancel-an-organization-invitation) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations/{invitation_id}/teams`](/rest/reference/orgs#list-organization-invitation-teams) (read){% endif %}
- [`GET /orgs/{org}/members`](/rest/reference/orgs#list-organization-members) (read)
- [`GET /orgs/{org}/members/{username}`](/rest/reference/orgs#check-organization-membership-for-a-user) (read)
- [`DELETE /orgs/{org}/members/{username}`](/rest/reference/orgs#remove-an-organization-member) (write)
- [`GET /orgs/{org}/memberships/{username}`](/rest/reference/orgs#get-organization-membership-for-a-user) (read)
- [`PUT /orgs/{org}/memberships/{username}`](/rest/reference/orgs#set-organization-membership-for-a-user) (write)
- [`DELETE /orgs/{org}/memberships/{username}`](/rest/reference/orgs#remove-organization-membership-for-a-user) (write)
{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/public_members`](/rest/reference/orgs#list-public-organization-members) (read){% endif %}
{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/public_members/{username}`](/rest/reference/orgs#check-public-organization-membership-for-a-user) (read){% endif %}
{% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/public_members/{username}`](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec or ghes %}- [`DELETE /orgs/{org}/public_members/{username}`](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user) (write){% endif %}
- [`GET /orgs/{org}/outside_collaborators`](/rest/reference/orgs#list-outside-collaborators-for-an-organization) (read)
- [`PUT /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator) (write)
- [`DELETE /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#remove-outside-collaborator-from-an-organization) (write)
- [`GET /orgs/{org}/teams/{team_slug}/projects`](/rest/reference/teams#list-team-projects) (read)
- [`GET /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#check-team-permissions-for-a-project) (read)
- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions) (read)
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team) (read)
- [`GET /orgs/{org}/teams/{team_slug}/repos`](/rest/reference/teams#list-team-repositories) (read)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (read)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (read)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (read)
- [`PATCH /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#update-a-team) (write)
- [`DELETE /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#delete-a-team) (write)
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/teams/{team_slug}/invitations`](/rest/reference/teams#list-pending-team-invitations) (read){% endif %}
- [`GET /orgs/{org}/teams/{team_slug}/members`](/rest/reference/teams#list-team-members) (read)
- [`GET /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#get-team-membership-for-a-user) (read)
- [`PUT /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#add-or-update-team-membership-for-a-user) (write)
- [`DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#remove-team-membership-for-a-user) (write)
- [`GET /orgs/{org}/teams/{team_slug}/teams`](/rest/reference/teams#list-child-teams) (read)
- [`GET /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#get-a-team-by-name) (read)
- [`GET /orgs/{org}/teams`](/rest/reference/teams#list-teams) (read)
- [`POST /orgs/{org}/teams`](/rest/reference/teams#create-a-team) (write)
- [`GET /user/memberships/orgs/{org}`](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user) (read)
- [`PATCH /user/memberships/orgs/{org}`](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user) (write)

## Metadata

{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (read){% endif %}
- [`GET /repos/{owner}/{repo}/events`](/rest/reference/activity#list-repository-events) (read)
- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (read)
- [`GET /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#get-a-gist-comment) (read)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (read)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (read)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (read)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (read)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (read)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (read)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (read)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (read)
- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user) (read)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (read)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (read)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (read)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-commit-comment) (read)
- [`GET /orgs/{org}/repos`](/rest/reference/repos#list-organization-repositories) (read)
{% ifversion fpt or ghec or ghes %}- [`GET /repositories`](/rest/reference/repos#list-public-repositories) (read){% endif %}
- [`GET /repos/{owner}/{repo}`](/rest/reference/repos#get-a-repository) (read)
- [`GET /repos/{owner}/{repo}/contributors`](/rest/reference/repos#list-repository-contributors) (read)
- [`GET /repos/{owner}/{repo}/forks`](/rest/reference/repos#list-forks) (read)
- [`GET /repos/{owner}/{repo}/languages`](/rest/reference/repos#list-repository-languages) (read)
- [`GET /repos/{owner}/{repo}/tags`](/rest/reference/repos#list-repository-tags) (read)
- [`GET /users/{username}/repos`](/rest/reference/repos#list-repositories-for-a-user) (read)
- [`GET /user/repos`](/rest/reference/repos#list-repositories-for-the-authenticated-user) (read)
- [`GET /repos/{owner}/{repo}/stargazers`](/rest/reference/activity#list-stargazers) (read)
- [`GET /repos/{owner}/{repo}/subscribers`](/rest/reference/activity#list-watchers) (read)
- [`GET /repos/{owner}/{repo}/collaborators`](/rest/collaborators/collaborators#list-repository-collaborators) (read)
- [`GET /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator) (read)
- [`GET /repos/{owner}/{repo}/collaborators/{username}/permission`](/rest/collaborators/collaborators#get-repository-permissions-for-a-user) (read)
- [`GET /repos/{owner}/{repo}/comments`](/rest/commits/comments#list-commit-comments-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#get-a-commit-comment) (read)
- [`GET /repos/{owner}/{repo}/license`](/rest/reference/licenses/#get-the-license-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/stats/code_frequency`](/rest/metrics/statistics#get-the-weekly-commit-activity) (read)
- [`GET /repos/{owner}/{repo}/stats/commit_activity`](/rest/metrics/statistics#get-the-last-year-of-commit-activity) (read)
- [`GET /repos/{owner}/{repo}/stats/contributors`](/rest/metrics/statistics#get-all-contributor-commit-activity) (read)
- [`GET /repos/{owner}/{repo}/stats/participation`](/rest/metrics/statistics#get-the-weekly-commit-count) (read)
- [`GET /repos/{owner}/{repo}/stats/punch_card`](/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day) (read)
- [`GET /search/labels`](/rest/reference/search#search-labels) (read)
- [`GET /repos/{owner}/{repo}/topics`](/rest/reference/repos#get-all-repository-topics) (read)

## Notifications

- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user) (read)

## Organization administration

{% ifversion ghec or ghae or ghes %}- [`GET /orgs/{org}/audit-log`](/rest/reference/orgs#get-audit-log) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /orgs/{org}/settings/billing/advanced-security`](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /enterprise-installation/{enterprise_or_org}/server-statistics`](/rest/reference/enterprise-admin#get-github-enterprise-server-statistics) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-an-organization) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/cache/usage-by-repository`](/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization) (read){% endif %}
- [`GET /orgs/{org}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-an-organization) (read)
- [`PUT /orgs/{org}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-an-organization) (write)
- [`GET /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization) (read)
- [`PUT /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization) (write)
- [`GET /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-an-organization) (read)
- [`PUT /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-an-organization) (write)
{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.4 %}- [`PUT /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.6 %}- [`GET /orgs/{org}/security-managers`](/rest/reference/orgs#list-security-manager-teams) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.6 %}- [`PUT /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#add-a-security-manager-team) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#remove-a-security-manager-team) (write){% endif %}
- [`PATCH /orgs/{org}`](/rest/reference/orgs/#update-an-organization) (write)
- [`GET /orgs/{org}/installations`](/rest/reference/orgs#list-app-installations-for-an-organization) (read)

{% ifversion fpt or ghec %}

## Organization codespaces

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (read)

## Organization codespaces secrets

- [`GET /orgs/{org}/codespaces/secrets`](/rest/reference/codespaces#list-organization-secrets) (read)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-an-organization-secret) (read)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-an-organization-secret) (write)
- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-an-organization-secret) (write)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret) (read)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret) (write)
- [`GET /orgs/{org}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-an-organization-public-key) (read)

## Organization codespaces settings

- [`PUT /orgs/{org}/codespaces/billing`](/rest/reference/codespaces#set-codespaces-billing) (write)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## Organization custom roles

- [`GET /organizations/{organization_id}/custom_roles`](/rest/reference/orgs#list-custom-repository-roles-in-an-organization) (read)
- [`GET /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs/#get-a-custom-role) (read)
- [`PATCH /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#update-a-custom-role) (write)
- [`DELETE /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#delete-a-custom-role) (write)
- [`GET /orgs/{org}/fine_grained_permissions`](/rest/reference/orgs#list-fine-grained-permissions-for-an-organization) (read)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## Organization dependabot secrets

- [`GET /orgs/{org}/dependabot/secrets`](/rest/reference/dependabot#list-organization-secrets) (read)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-an-organization-secret) (read)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-an-organization-secret) (write)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-an-organization-secret) (write)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret) (read)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret) (write)
- [`GET /orgs/{org}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-an-organization-public-key) (read)

{% endif %}

## Organization events

- [`GET /users/{username}/events/orgs/{org}`](/rest/reference/activity#list-organization-events-for-the-authenticated-user) (read)

## Organization hooks

- [`GET /orgs/{org}/hooks`](/rest/reference/orgs#list-organization-webhooks) (read)
- [`POST /orgs/{org}/hooks`](/rest/reference/orgs#create-an-organization-webhook) (write)
- [`GET /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#get-an-organization-webhook) (read)
- [`PATCH /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#update-an-organization-webhook) (write)
- [`DELETE /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#delete-an-organization-webhook) (write)
- [`GET /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization) (read)
- [`PATCH /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization) (write)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries`](/rest/reference/orgs#list-deliveries-for-an-organization-webhook) (read)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook) (read)
- [`POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook) (write)
- [`POST /orgs/{org}/hooks/{hook_id}/pings`](/rest/reference/orgs#ping-an-organization-webhook) (write)

{% ifversion ghes %}

## Organization pre receive hooks

- [`GET /orgs/{org}/pre-receive-hooks`](/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization) (read)
- [`GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization) (read)
- [`PATCH /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization) (write)
- [`DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) (write)

{% endif %}

## Organization projects

- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions) (admin)
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team) (admin)
- [`GET /orgs/{org}/projects`](/rest/reference/projects#list-organization-projects) (read)
- [`POST /orgs/{org}/projects`](/rest/reference/projects#create-an-organization-project) (write)

## Organization secrets

- [`GET /orgs/{org}/actions/secrets`](/rest/reference/actions#list-organization-secrets) (read)
- [`GET /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#get-an-organization-secret) (read)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-an-organization-secret) (write)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-an-organization-secret) (write)
- [`GET /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#list-selected-repositories-for-an-organization-secret) (read)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#set-selected-repositories-for-an-organization-secret) (write)
- [`GET /orgs/{org}/actions/secrets/public-key`](/rest/reference/actions#get-an-organization-public-key) (read)

## Organization self hosted runners

- [`GET /orgs/{org}/actions/runner-groups`](/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization) (read)
- [`POST /orgs/{org}/actions/runner-groups`](/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization) (write)
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization) (read)
- [`PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization) (write)
- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization) (write)
{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization) (read){% endif %}
{% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization) (write){% endif %}
{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) (write){% endif %}
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization) (write)
{% ifversion fpt or ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) (write){% endif %}
- [`GET /orgs/{org}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-an-organization) (read)
- [`GET /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization) (read)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization) (write)
{% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec or ghes > 3.3 %}- [`POST /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.3 %}- [`PUT /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization) (write){% endif %}
{% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization) (write){% endif %}
- [`GET /orgs/{org}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-an-organization) (read)
- [`POST /orgs/{org}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-an-organization) (write)
- [`POST /orgs/{org}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-an-organization) (write)

{% ifversion fpt or ghec %}

## Organization user blocking

- [`GET /orgs/{org}/blocks`](/rest/reference/orgs#list-users-blocked-by-an-organization) (read)
- [`GET /orgs/{org}/blocks/{username}`](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization) (read)
- [`PUT /orgs/{org}/blocks/{username}`](/rest/reference/orgs#block-a-user-from-an-organization) (write)
- [`DELETE /orgs/{org}/blocks/{username}`](/rest/reference/orgs#unblock-a-user-from-an-organization) (write)

{% endif %}

## Pages

- [`GET /repos/{owner}/{repo}/pages`](/rest/pages#get-a-github-pages-site) (read)
- [`PUT /repos/{owner}/{repo}/pages`](/rest/pages#update-information-about-a-github-pages-site) (write)
- [`GET /repos/{owner}/{repo}/pages/builds`](/rest/pages#list-github-pages-builds) (read)
- [`POST /repos/{owner}/{repo}/pages/builds`](/rest/pages#request-a-github-pages-build) (write)
- [`GET /repos/{owner}/{repo}/pages/builds/{build_id}`](/rest/pages#get-github-pages-build) (read)
- [`GET /repos/{owner}/{repo}/pages/builds/latest`](/rest/pages#get-latest-pages-build) (read)
{% ifversion fpt or ghec or ghes > 3.6 %}- [`POST /repos/{owner}/{repo}/pages/deployment`](/rest/pages#create-a-github-pages-deployment) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (write){% endif %}

{% ifversion fpt or ghec %}

## Plan

- [`GET /users/{username}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-a-user) (read)
- [`GET /users/{username}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-a-user) (read)
- [`GET /users/{username}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-a-user) (read)

{% endif %}

## Profile

- [`PATCH /user`](/rest/reference/users/#update-the-authenticated-user) (write)

## Pull requests

- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#list-review-comments-on-a-pull-request) (read)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#create-a-review-comment-for-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/comments`](/rest/reference/pulls#list-review-comments-in-a-repository) (read)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#get-a-review-comment-for-a-pull-request) (read)
- [`PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#update-a-review-comment-for-a-pull-request) (write)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request) (write)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`](/rest/reference/pulls#dismiss-a-review-for-a-pull-request) (write)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`](/rest/reference/pulls#submit-a-review-for-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#get-all-requested-reviewers-for-a-pull-request) (read)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#request-reviewers-for-a-pull-request) (write)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#list-reviews-for-a-pull-request) (read)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#create-a-review-for-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#get-a-review-for-a-pull-request) (read)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#update-a-review-for-a-pull-request) (write)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#delete-a-pending-review-for-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`](/rest/reference/pulls#list-comments-for-a-pull-request-review) (read)
- [`GET /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#list-pull-requests) (read)
- [`POST /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#create-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) (read)
- [`PATCH /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls/#update-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/commits`](/rest/reference/pulls#list-commits-on-a-pull-request) (read)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/files`](/rest/reference/pulls#list-pull-requests-files) (read)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#check-if-a-pull-request-has-been-merged) (read)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch`](/rest/reference/pulls#update-a-pull-request-branch) (write)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment) (read)
- [`POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment) (write)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-pull-request-comment-reaction) (write)
{% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (read){% endif %}

## Repository hooks

- [`GET /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#list-repository-webhooks) (read)
- [`POST /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#create-a-repository-webhook) (write)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#get-a-repository-webhook) (read)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#update-a-repository-webhook) (write)
- [`DELETE /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#delete-a-repository-webhook) (write)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository) (read)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository) (write)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries`](/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook) (read)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook) (read)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook) (write)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/pings`](/rest/webhooks/repos#ping-a-repository-webhook) (read)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/tests`](/rest/webhooks/repos#test-the-push-repository-webhook) (read)

{% ifversion ghes %}

## Repository pre receive hooks

- [`GET /repos/{owner}/{repo}/pre-receive-hooks`](/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository) (read)
- [`PATCH /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository) (write)
- [`DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) (write)

{% endif %}

## Repository projects

- [`GET /projects/{project_id}/collaborators`](/rest/reference/projects#list-project-collaborators) (write)
- [`PUT /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#add-project-collaborator) (write)
- [`DELETE /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#remove-project-collaborator) (write)
- [`GET /projects/{project_id}/collaborators/{username}/permission`](/rest/reference/projects#get-project-permission-for-a-user) (write)
- [`GET /projects/{project_id}`](/rest/reference/projects#get-a-project) (read)
- [`PATCH /projects/{project_id}`](/rest/reference/projects#update-a-project) (write)
- [`DELETE /projects/{project_id}`](/rest/reference/projects#delete-a-project) (write)
- [`GET /projects/{project_id}/columns`](/rest/reference/projects#list-project-columns) (read)
- [`POST /projects/{project_id}/columns`](/rest/reference/projects#create-a-project-column) (write)
- [`GET /projects/columns/{column_id}`](/rest/reference/projects#get-a-project-column) (read)
- [`PATCH /projects/columns/{column_id}`](/rest/reference/projects#update-a-project-column) (write)
- [`DELETE /projects/columns/{column_id}`](/rest/reference/projects#delete-a-project-column) (write)
- [`GET /projects/columns/{column_id}/cards`](/rest/reference/projects#list-project-cards) (read)
- [`POST /projects/columns/{column_id}/cards`](/rest/reference/projects#create-a-project-card) (write)
- [`POST /projects/columns/{column_id}/moves`](/rest/reference/projects#move-a-project-column) (write)
- [`GET /projects/columns/cards/{card_id}`](/rest/reference/projects#get-a-project-card) (read)
- [`PATCH /projects/columns/cards/{card_id}`](/rest/reference/projects#update-a-project-card) (write)
- [`DELETE /projects/columns/cards/{card_id}`](/rest/reference/projects#delete-a-project-card) (write)
- [`POST /projects/columns/cards/{card_id}/moves`](/rest/reference/projects#move-a-project-card) (write)
- [`GET /repos/{owner}/{repo}/projects`](/rest/reference/projects#list-repository-projects) (read)
- [`POST /repos/{owner}/{repo}/projects`](/rest/reference/projects#create-a-repository-project) (write)

## Secret scanning alerts

{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization) (read){% endif %}
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#get-a-secret-scanning-alert) (read)
- [`PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#update-a-secret-scanning-alert) (write)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`](/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert) (read)

## Secrets

- [`GET /repos/{owner}/{repo}/actions/secrets`](/rest/reference/actions#list-repository-secrets) (read)
- [`GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#get-a-repository-secret) (read)
- [`PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-a-repository-secret) (write)
- [`DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-a-repository-secret) (write)
- [`GET /repos/{owner}/{repo}/actions/secrets/public-key`](/rest/reference/actions#get-a-repository-public-key) (read)

## Security events

{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /orgs/{org}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-by-organization) (read){% endif %}
- [`GET /repos/{owner}/{repo}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#get-a-code-scanning-alert) (read)
- [`PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#update-a-code-scanning-alert) (write)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`](/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert) (read)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses`](/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository) (read)
- [`DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository) (write)
- [`GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`](/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository) (read)
- [`POST /repos/{owner}/{repo}/code-scanning/sarifs`](/rest/reference/code-scanning#upload-a-sarif-file) (write)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts`](/rest/reference/dependabot#list-dependabot-alerts-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#get-a-dependabot-alert) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#update-a-dependabot-alert) (write){% endif %}

## Starring

- [`GET /users/{username}/starred`](/rest/reference/activity#list-repositories-starred-by-a-user) (read)
- [`GET /user/starred`](/rest/reference/activity#list-repositories-starred-by-the-authenticated-user) (read)
- [`GET /user/starred/{owner}/{repo}`](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user) (read)
- [`PUT /user/starred/{owner}/{repo}`](/rest/reference/activity#star-a-repository-for-the-authenticated-user) (write)
- [`DELETE /user/starred/{owner}/{repo}`](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user) (write)

## Statuses

- [`POST /repos/{owner}/{repo}/statuses/{sha}`](/rest/commits/statuses#create-a-commit-status) (write)

## Team discussions

- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) (read)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment) (write)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-comment-reaction) (write)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion) (read)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion) (write)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-reaction) (write)
- [`GET /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#list-discussions) (read)
- [`POST /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#create-a-discussion) (write)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#get-a-discussion) (read)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#update-a-discussion) (write)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#delete-a-discussion) (write)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#list-discussion-comments) (read)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#create-a-discussion-comment) (write)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#get-a-discussion-comment) (read)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#update-a-discussion-comment) (write)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#delete-a-discussion-comment) (write)

{% ifversion fpt or ghec %}

## Vulnerability alerts

- [`GET /orgs/{org}/dependabot/alerts`](/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization) (read)

{% endif %}

## Watching

- [`GET /users/{username}/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user) (read)
- [`GET /user/subscriptions`](/rest/reference/activity#list-repositories-watched-by-the-authenticated-user) (read)
