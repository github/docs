---
title: Autorisations nécessaires pour les jetons d’accès personnels affinés
intro: 'Vous pouvez trouver les autorisations nécessaires pour chaque point de terminaison compatible avec un {% data variables.product.pat_v2 %}.'
versions:
  feature: pat-v2
miniTocMaxHeadingLevel: 3
shortTitle: '{% data variables.product.pat_v2_caps %} permissions'
ms.openlocfilehash: 97154c54229f66f3a6b3bf852f7aabab89a0d2ee
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107684'
---
## À propos des autorisations nécessaires pour un {% data variables.product.pat_v2 %}

Quand vous créez un {% data variables.product.pat_v2 %}, vous lui octroyez un ensemble d’autorisations. Les autorisations définissent les ressources auxquelles l’{% data variables.product.prodname_github_app %} peuvent accéder via l’API. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

## Actions

- [`GET /repos/{owner}/{repo}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#list-github-actions-caches-for-a-repository) (lecture)
- [`DELETE /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key) (écriture)
- [`DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}`](/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id) (écriture)
- [`GET /repos/{owner}/{repo}/actions/artifacts`](/rest/reference/actions#list-artifacts-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#get-an-artifact) (lecture)
- [`DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#delete-an-artifact) (écriture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`](/rest/reference/actions#list-workflow-run-artifacts) (lecture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#get-pending-deployments-for-a-workflow-run) (lecture)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (lecture)
- [`GET /repos/{owner}/{repo}/environments`](/rest/deployments/environments#list-environments) (lecture)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}`](/rest/reference/actions#get-a-job-for-a-workflow-run) (lecture)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs`](/rest/reference/actions#download-job-logs-for-a-workflow-run) (lecture)
- [`POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`](/rest/reference/actions#re-run-job-for-workflow-run) (écriture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run-attempt) (lecture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run) (lecture)
- [`GET /repos/{owner}/{repo}/actions/runs`](/rest/reference/actions#list-workflow-runs-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#get-a-workflow-run) (lecture)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#delete-a-workflow-run) (écriture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals`](/rest/reference/actions#get-the-review-history-for-a-workflow-run) (lecture)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve`](/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request) (écriture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`](/rest/reference/actions#get-a-workflow-run-attempt) (lecture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`](/rest/reference/actions#download-workflow-run-attempt-logs) (lecture)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`](/rest/reference/actions#cancel-a-workflow-run) (écriture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#download-workflow-run-logs) (lecture)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#delete-workflow-run-logs) (écriture)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun`](/rest/reference/actions#re-run-a-workflow) (écriture)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`](/rest/reference/actions#re-run-workflow-failed-jobs) (écriture)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing`](/rest/reference/actions#get-workflow-run-usage) (lecture)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`](/rest/reference/actions#list-workflow-runs) (lecture)
- [`GET /repos/{owner}/{repo}/actions/workflows`](/rest/reference/actions#list-repository-workflows) (lecture)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`](/rest/reference/actions#get-a-workflow) (lecture)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`](/rest/reference/actions#disable-a-workflow) (écriture)
- [`POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`](/rest/reference/actions#create-a-workflow-dispatch-event) (écriture)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`](/rest/reference/actions#enable-a-workflow) (écriture)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`](/rest/reference/actions#get-workflow-usage) (lecture)

## Administration

- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (écriture)
- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (écriture)
- [`GET /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-a-repository) (lecture)
- [`PUT /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-a-repository) (écriture)
- [`DELETE /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository) (écriture)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (écriture)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (écriture)
- [`POST /orgs/{org}/repos`](/rest/reference/repos#create-an-organization-repository) (écriture)
- [`PATCH /repos/{owner}/{repo}`](/rest/reference/repos/#update-a-repository) (écriture)
- [`DELETE /repos/{owner}/{repo}`](/rest/reference/repos#delete-a-repository) (écriture)
- [`POST /repos/{owner}/{repo}/forks`](/rest/reference/repos#create-a-fork) (écriture)
- [`GET /repos/{owner}/{repo}/teams`](/rest/reference/repos#list-repository-teams) (lecture)
- [`POST /repos/{owner}/{repo}/transfer`](/rest/reference/repos#transfer-a-repository) (écriture)
- [`POST /user/repos`](/rest/reference/repos#create-a-repository-for-the-authenticated-user) (écriture)
- [`GET /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-a-repository) (lecture)
- [`PUT /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#get-workflow-access-level-to-a-repository) (lecture)
- [`PUT /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#set-workflow-access-to-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-a-repository) (lecture)
- [`PUT /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions-for-a-repository) (lecture)
- [`PUT /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions-for-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/autolinks`](/v3/repos#list-autolinks) (lecture)
- [`POST /repos/{owner}/{repo}/autolinks`](/v3/repos#create-an-autolink) (écriture)
- [`GET /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#get-autolink) (lecture)
- [`DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#delete-autolink) (écriture)
- [`PUT /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#enable-automated-security-fixes) (écriture)
- [`DELETE /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#disable-automated-security-fixes) (écriture)
- [`PUT /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#add-a-repository-collaborator) (écriture)
- [`DELETE /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#remove-a-repository-collaborator) (écriture)
- [`GET /repos/{owner}/{repo}/invitations`](/rest/collaborators/invitations#list-repository-invitations) (lecture)
- [`PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#update-a-repository-invitation) (écriture)
- [`DELETE /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#delete-a-repository-invitation) (écriture)
- [`GET /user/repository_invitations`](/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user) (lecture)
- [`PATCH /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#accept-a-repository-invitation) (écriture)
- [`DELETE /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#decline-a-repository-invitation) (écriture)
- [`GET /repos/{owner}/{repo}/keys`](/rest/reference/repos#list-deploy-keys) (lecture)
- [`POST /repos/{owner}/{repo}/keys`](/rest/reference/repos#create-a-deploy-key) (écriture)
- [`GET /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#get-a-deploy-key) (lecture)
- [`DELETE /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#delete-a-deploy-key) (écriture)
- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (écriture)
- [`GET /repos/{owner}/{repo}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository) (lecture)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository) (lecture)
- [`POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository) (écriture)
- [`PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository) (écriture)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository) (écriture)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-a-repository) (lecture)
- [`POST /repos/{owner}/{repo}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-a-repository) (écriture)
- [`POST /repos/{owner}/{repo}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#list-tag-protection-state-of-a-repository) (lecture)
- [`POST /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#create-tag-protection-state-for-a-repository) (écriture)
- [`DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}`](/rest/reference/repos#delete-tag-protection-state-for-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository) (lecture)
- [`PUT /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#enable-vulnerability-alerts) (écriture)
- [`DELETE /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#disable-vulnerability-alerts) (écriture)
- [`PUT /repos/{owner}/{repo}/topics`](/rest/reference/repos#replace-all-repository-topics) (écriture)
- [`GET /repos/{owner}/{repo}/traffic/clones`](/rest/metrics/traffic#get-repository-clones) (lecture)
- [`GET /repos/{owner}/{repo}/traffic/popular/paths`](/rest/metrics/traffic#get-top-referral-paths) (lecture)
- [`GET /repos/{owner}/{repo}/traffic/popular/referrers`](/rest/metrics/traffic#get-top-referral-sources) (lecture)
- [`GET /repos/{owner}/{repo}/traffic/views`](/rest/metrics/traffic#get-page-views) (lecture)

## Blocage

- [`GET /user/blocks`](/rest/reference/users#list-users-blocked-by-the-authenticated-user) (lecture)
- [`GET /user/blocks/{username}`](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user) (lecture)
- [`PUT /user/blocks/{username}`](/rest/reference/users#block-a-user) (écriture)
- [`DELETE /user/blocks/{username}`](/rest/reference/users#unblock-a-user) (écriture)

## Vérifications

- [`POST /repos/{owner}/{repo}/check-runs`](/rest/reference/checks#create-a-check-run) (écriture)
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#get-a-check-run) (lecture)
- [`PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#update-a-check-run) (écriture)
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`](/rest/reference/checks#list-check-run-annotations) (lecture)
- [`POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest`](/rest/reference/checks#rerequest-a-check-run) (écriture)
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs`](/rest/reference/checks#list-check-runs-in-a-check-suite) (lecture)
- [`POST /repos/{owner}/{repo}/check-suites`](/rest/reference/checks#create-a-check-suite) (écriture)
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}`](/rest/reference/checks#get-a-check-suite) (lecture)
- [`POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest`](/rest/reference/checks#rerequest-a-check-suite) (écriture)
- [`PATCH /repos/{owner}/{repo}/check-suites/preferences`](/rest/reference/checks#update-repository-preferences-for-check-suites) (écriture)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (lecture)

## Codespaces

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (lecture)
- [`GET /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user) (lecture)
- [`POST /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#create-a-codespace-in-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/codespaces/new`](/rest/reference/codespaces#preview-attributes-for-a-new-codespace) (écriture)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`](/rest/reference/codespaces#create-a-codespace-from-a-pull-request) (écriture)
- [`GET /user/codespaces`](/rest/reference/codespaces#list-codespaces-for-the-authenticated-user) (lecture)
- [`POST /user/codespaces`](/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user) (écriture)
- [`GET /user/codespaces/{codespace_name}`](/rest/reference/codespaces#get-a-codespace-for-the-authenticated-user) (lecture)
- [`PATCH /user/codespaces/{codespace_name}`](/rest/reference/codespaces#update-a-codespace-for-the-authenticated-user) (écriture)
- [`DELETE /user/codespaces/{codespace_name}`](/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user) (écriture)

## Administrateur de cycle de vie de codespaces

- [`POST /user/codespaces/{codespace_name}/exports`](/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user) (écriture)
- [`GET /user/codespaces/{codespace_name}/exports/{export_id}`](/rest/codespaces/codespaces#get-details-about-a-codespace-export) (lecture)
- [`POST /user/codespaces/{codespace_name}/start`](/rest/reference/codespaces#start-a-codespace-for-the-authenticated-user) (écriture)
- [`POST /user/codespaces/{codespace_name}/stop`](/rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user) (écriture)

## Métadonnées de codespaces

- [`GET /repos/{owner}/{repo}/codespaces/devcontainers`](/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user) (lecture)
- [`GET /repos/{owner}/{repo}/codespaces/machines`](/rest/reference/codespaces#list-available-machine-types-for-a-repository) (lecture)
- [`GET /user/codespaces/{codespace_name}/machines`](/rest/reference/codespaces#list-machine-types-for-a-codespace) (lecture)

## Secrets de codespaces

- [`GET /repos/{owner}/{repo}/codespaces/secrets`](/rest/reference/codespaces#list-repository-secrets) (écriture)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-repository-secret) (écriture)
- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (écriture)
- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (écriture)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-a-repository-public-key) (écriture)

## Secrets utilisateur Codespaces

- [`GET /user/codespaces/secrets`](/rest/reference/codespaces#list-secrets-for-the-authenticated-user) (lecture)
- [`GET /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-secret-for-the-authenticated-user) (lecture)
- [`PUT /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user) (écriture)
- [`DELETE /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user) (écriture)
- [`GET /user/codespaces/secrets/public-key`](/rest/reference/codespaces#get-public-key-for-the-authenticated-user) (lecture)
- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (lecture)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (écriture)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (écriture)
- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (écriture)

## Contenu

- [`GET /repos/{owner}/{repo}/codeowners/errors`](/rest/reference/repos#list-codeowners-errors) (lecture)
- [`POST /repos/{owner}/{repo}/git/blobs`](/rest/reference/git#create-a-blob) (écriture)
- [`POST /repos/{owner}/{repo}/git/commits`](/rest/reference/git#create-a-commit) (écriture)
- [`POST /repos/{owner}/{repo}/git/refs`](/rest/reference/git#create-a-reference) (écriture)
- [`POST /repos/{owner}/{repo}/git/tags`](/rest/reference/git#create-a-tag-object) (écriture)
- [`POST /repos/{owner}/{repo}/git/trees`](/rest/reference/git#create-a-tree) (écriture)
- [`GET /repos/{owner}/{repo}/import`](/rest/reference/migrations#get-an-import-status) (lecture)
- [`PUT /repos/{owner}/{repo}/import`](/rest/reference/migrations#start-an-import) (écriture)
- [`PATCH /repos/{owner}/{repo}/import`](/rest/reference/migrations#update-an-import) (écriture)
- [`DELETE /repos/{owner}/{repo}/import`](/rest/reference/migrations#cancel-an-import) (écriture)
- [`GET /repos/{owner}/{repo}/import/authors`](/rest/reference/migrations#get-commit-authors) (lecture)
- [`PATCH /repos/{owner}/{repo}/import/authors/{author_id}`](/rest/reference/migrations#map-a-commit-author) (écriture)
- [`GET /repos/{owner}/{repo}/import/large_files`](/rest/reference/migrations#get-large-files) (lecture)
- [`PATCH /repos/{owner}/{repo}/import/lfs`](/rest/reference/migrations#update-git-lfs-preference) (écriture)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#merge-a-pull-request) (écriture)
- [`POST /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-commit-comment) (écriture)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-commit-comment-reaction) (écriture)
- [`GET /repos/{owner}/{repo}/branches`](/rest/reference/repos#list-branches) (lecture)
- [`POST /repos/{owner}/{repo}/merge-upstream`](/rest/reference/repos#sync-a-fork-branch-with-the-upstream-repository) (écriture)
- [`POST /repos/{owner}/{repo}/merges`](/rest/reference/repos#merge-a-branch) (écriture)
- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases`](/rest/reference/code-scanning#list-codeql-databases) (lecture)
- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`](/rest/reference/code-scanning#get-codeql-database) (lecture)
- [`PATCH /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#update-a-commit-comment) (écriture)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#delete-a-commit-comment) (écriture)
- [`GET /repos/{owner}/{repo}/commits`](/rest/commits/commits#list-commits) (lecture)
- [`GET /repos/{owner}/{repo}/community/profile`](/rest/metrics/community#get-community-profile-metrics) (lecture)
- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (lecture)
- [`POST /repos/{owner}/{repo}/dispatches`](/rest/reference/repos#create-a-repository-dispatch-event) (écriture)
- [`GET /repos/{owner}/{repo}/releases`](/rest/reference/repos#list-releases) (lecture)
- [`POST /repos/{owner}/{repo}/releases`](/rest/reference/repos#create-a-release) (écriture)
- [`GET /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#get-a-release) (lecture)
- [`PATCH /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#update-a-release) (écriture)
- [`DELETE /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#delete-a-release) (écriture)
- [`GET /repos/{owner}/{repo}/releases/{release_id}/assets`](/rest/reference/repos#list-release-assets) (lecture)
- [`GET /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#get-a-release-asset) (lecture)
- [`PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#update-a-release-asset) (écriture)
- [`DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#delete-a-release-asset) (écriture)
- [`POST /repos/{owner}/{repo}/releases/generate-notes`](/rest/reference/repos#generate-release-notes) (écriture)
- [`GET /repos/{owner}/{repo}/releases/latest`](/rest/reference/repos#get-the-latest-release) (lecture)

## Dependabot secrets

- [`GET /repos/{owner}/{repo}/dependabot/secrets`](/rest/reference/dependabot#list-repository-secrets) (lecture)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-a-repository-secret) (lecture)
- [`PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-a-repository-secret) (écriture)
- [`DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-a-repository-secret) (écriture)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-a-repository-public-key) (lecture)

## Déploiements

- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (lecture)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#list-deployment-statuses) (lecture)
- [`POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#create-a-deployment-status) (écriture)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`](/rest/reference/repos#get-a-deployment-status) (lecture)
- [`GET /repos/{owner}/{repo}/deployments`](/rest/reference/repos#list-deployments) (lecture)
- [`POST /repos/{owner}/{repo}/deployments`](/rest/reference/repos#create-a-deployment) (écriture)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#get-a-deployment) (lecture)
- [`DELETE /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#delete-a-deployment) (écriture)

## E-mails

- [`PATCH /user/email/visibility`](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) (écriture)
- [`GET /user/emails`](/rest/reference/users#list-email-addresses-for-the-authenticated-user) (lecture)
- [`POST /user/emails`](/rest/reference/users#add-an-email-address-for-the-authenticated-user) (écriture)
- [`DELETE /user/emails`](/rest/reference/users#delete-an-email-address-for-the-authenticated-user) (écriture)
- [`GET /user/public_emails`](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user) (lecture)

## Administration d’entreprise

- [`GET /enterprises/{enterprise}/settings/billing/advanced-security`](/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise) (écriture)
- [`GET /enterprises/{enterprise}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise) (écriture)

## Abonnés

- [`GET /user/followers`](/rest/reference/users#list-followers-of-the-authenticated-user) (lecture)
- [`GET /user/following`](/rest/reference/users#list-the-people-the-authenticated-user-follows) (lecture)
- [`GET /user/following/{username}`](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user) (lecture)
- [`PUT /user/following/{username}`](/rest/reference/users#follow-a-user) (écriture)
- [`DELETE /user/following/{username}`](/rest/reference/users#unfollow-a-user) (écriture)

## Gists

- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (écriture)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (écriture)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (écriture)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (écriture)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (écriture)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (écriture)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (écriture)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (écriture)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (écriture)

## Clés publiques SSH de signature Git

- [`GET /user/ssh_signing_keys`](/rest/reference/users#list-public-ssh-signing-keys-for-the-authenticated-user) (lecture)
- [`POST /user/ssh_signing_keys`](/rest/reference/users#create-an-ssh-signing-key-for-the-authenticated-user) (écriture)
- [`GET /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#get-a-ssh-signing-key-for-the-authenticated-user) (lecture)
- [`DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#delete-a-ssh-signing-key-for-the-authenticated-user) (écriture)

## Clés GPG

- [`GET /user/gpg_keys`](/rest/reference/users#list-gpg-keys-for-the-authenticated-user) (lecture)
- [`POST /user/gpg_keys`](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user) (écriture)
- [`GET /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user) (lecture)
- [`DELETE /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user) (écriture)

## Limites d’interaction

- [`GET /user/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories) (lecture)
- [`PUT /user/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories) (écriture)
- [`DELETE /user/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories) (écriture)

## Problèmes

- [`POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#add-assignees-to-an-issue) (écriture)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#remove-assignees-from-an-issue) (écriture)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#list-issue-comments) (lecture)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#create-an-issue-comment) (écriture)
- [`GET /repos/{owner}/{repo}/issues/comments`](/rest/reference/issues#list-issue-comments-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#get-an-issue-comment) (lecture)
- [`PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#update-an-issue-comment) (écriture)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#delete-an-issue-comment) (écriture)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/events`](/rest/reference/issues#list-issue-events) (lecture)
- [`GET /repos/{owner}/{repo}/issues/events`](/rest/reference/issues#list-issue-events-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/issues/events/{event_id}`](/rest/reference/issues#get-an-issue-event) (lecture)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`](/rest/reference/issues#list-timeline-events-for-an-issue) (lecture)
- [`GET /repos/{owner}/{repo}/assignees`](/rest/reference/issues#list-assignees) (lecture)
- [`GET /repos/{owner}/{repo}/issues`](/rest/reference/issues#list-repository-issues) (lecture)
- [`POST /repos/{owner}/{repo}/issues`](/rest/reference/issues#create-an-issue) (écriture)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues#get-an-issue) (lecture)
- [`PATCH /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues/#update-an-issue) (écriture)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#lock-an-issue) (écriture)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#unlock-an-issue) (écriture)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#list-labels-for-an-issue) (lecture)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#add-labels-to-an-issue) (écriture)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#set-labels-for-an-issue) (écriture)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#remove-all-labels-from-an-issue) (écriture)
- [`GET /repos/{owner}/{repo}/labels`](/rest/reference/issues#list-labels-for-a-repository) (lecture)
- [`POST /repos/{owner}/{repo}/labels`](/rest/reference/issues#create-a-label) (écriture)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`](/rest/reference/issues#list-labels-for-issues-in-a-milestone) (lecture)
- [`GET /repos/{owner}/{repo}/milestones`](/rest/reference/issues#list-milestones) (lecture)
- [`POST /repos/{owner}/{repo}/milestones`](/rest/reference/issues#create-a-milestone) (écriture)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#get-a-milestone) (lecture)
- [`PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#update-a-milestone) (écriture)
- [`DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#delete-a-milestone) (écriture)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue) (lecture)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue) (écriture)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-reaction) (écriture)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue-comment) (lecture)
- [`POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue-comment) (écriture)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-comment-reaction) (écriture)

## Touches

- [`GET /user/keys`](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user) (lecture)
- [`POST /user/keys`](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user) (écriture)
- [`GET /user/keys/{key_id}`](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user) (lecture)
- [`DELETE /user/keys/{key_id}`](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user) (écriture)

## Membres

{% ifversion ghec %}- [`PATCH /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#link-external-idp-group-team-connection) (écriture){% endif %} {% ifversion ghec %}- [`DELETE /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#unlink-external-idp-group-team-connection) (écriture){% endif %} {% ifversion ghec %}- [`GET /orgs/{org}/external-group/{group_id}`](/rest/reference/teams#external-idp-group-info-for-an-organization) (écriture){% endif %} {% ifversion ghec %}- [`GET /orgs/{org}/external-groups`](/rest/reference/teams#list-external-idp-groups-for-an-organization) (écriture){% endif %}
- [`GET /orgs/{org}/failed_invitations`](/rest/reference/orgs#list-failed-organization-invitations) (lecture)
- [`GET /orgs/{org}/invitations`](/rest/reference/orgs#list-pending-organization-invitations) (lecture)
- [`POST /orgs/{org}/invitations`](/rest/reference/orgs#create-an-organization-invitation) (écriture)
- [`DELETE /orgs/{org}/invitations/{invitation_id}`](/rest/reference/orgs#cancel-an-organization-invitation) (écriture)
- [`GET /orgs/{org}/invitations/{invitation_id}/teams`](/rest/reference/orgs#list-organization-invitation-teams) (lecture)
- [`GET /orgs/{org}/members`](/rest/reference/orgs#list-organization-members) (lecture)
- [`GET /orgs/{org}/members/{username}`](/rest/reference/orgs#check-organization-membership-for-a-user) (lecture)
- [`DELETE /orgs/{org}/members/{username}`](/rest/reference/orgs#remove-an-organization-member) (écriture)
- [`GET /orgs/{org}/memberships/{username}`](/rest/reference/orgs#get-organization-membership-for-a-user) (lecture)
- [`PUT /orgs/{org}/memberships/{username}`](/rest/reference/orgs#set-organization-membership-for-a-user) (écriture)
- [`DELETE /orgs/{org}/memberships/{username}`](/rest/reference/orgs#remove-organization-membership-for-a-user) (écriture)
- [`GET /orgs/{org}/public_members`](/rest/reference/orgs#list-public-organization-members) (lecture)
- [`GET /orgs/{org}/public_members/{username}`](/rest/reference/orgs#check-public-organization-membership-for-a-user) (lecture)
- [`PUT /orgs/{org}/public_members/{username}`](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user) (écriture)
- [`DELETE /orgs/{org}/public_members/{username}`](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user) (écriture)
- [`GET /orgs/{org}/outside_collaborators`](/rest/reference/orgs#list-outside-collaborators-for-an-organization) (lecture)
- [`PUT /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator) (écriture)
- [`DELETE /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#remove-outside-collaborator-from-an-organization) (écriture)
- [`GET /orgs/{org}/teams/{team_slug}/projects`](/rest/reference/teams#list-team-projects) (lecture)
- [`GET /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#check-team-permissions-for-a-project) (lecture)
- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions) (lecture)
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team) (lecture)
- [`GET /orgs/{org}/teams/{team_slug}/repos`](/rest/reference/teams#list-team-repositories) (lecture)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (lecture)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (lecture)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (lecture)
- [`PATCH /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#update-a-team) (écriture)
- [`DELETE /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#delete-a-team) (écriture)
- [`GET /orgs/{org}/teams/{team_slug}/invitations`](/rest/reference/teams#list-pending-team-invitations) (lecture)
- [`GET /orgs/{org}/teams/{team_slug}/members`](/rest/reference/teams#list-team-members) (lecture)
- [`GET /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#get-team-membership-for-a-user) (lecture)
- [`PUT /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#add-or-update-team-membership-for-a-user) (écriture)
- [`DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#remove-team-membership-for-a-user) (écriture)
- [`GET /orgs/{org}/teams/{team_slug}/teams`](/rest/reference/teams#list-child-teams) (lecture)
- [`GET /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#get-a-team-by-name) (lecture)
- [`GET /orgs/{org}/teams`](/rest/reference/teams#list-teams) (lecture)
- [`POST /orgs/{org}/teams`](/rest/reference/teams#create-a-team) (écriture)
- [`GET /user/memberships/orgs/{org}`](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user) (lecture)
- [`PATCH /user/memberships/orgs/{org}`](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user) (écriture)

## Métadonnées

- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (lecture)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (lecture)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (lecture)
- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (lecture)
- [`GET /repos/{owner}/{repo}/events`](/rest/reference/activity#list-repository-events) (lecture)
- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (lecture)
- [`GET /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#get-a-gist-comment) (lecture)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (lecture)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (lecture)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (lecture)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (lecture)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (lecture)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (lecture)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (lecture)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (lecture)
- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user) (lecture)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (lecture)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (lecture)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (lecture)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-commit-comment) (lecture)
- [`GET /orgs/{org}/repos`](/rest/reference/repos#list-organization-repositories) (lecture)
- [`GET /repositories`](/rest/reference/repos#list-public-repositories) (lecture)
- [`GET /repos/{owner}/{repo}`](/rest/reference/repos#get-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/contributors`](/rest/reference/repos#list-repository-contributors) (lecture)
- [`GET /repos/{owner}/{repo}/forks`](/rest/reference/repos#list-forks) (lecture)
- [`GET /repos/{owner}/{repo}/languages`](/rest/reference/repos#list-repository-languages) (lecture)
- [`GET /repos/{owner}/{repo}/tags`](/rest/reference/repos#list-repository-tags) (lecture)
- [`GET /users/{username}/repos`](/rest/reference/repos#list-repositories-for-a-user) (lecture)
- [`GET /user/repos`](/rest/reference/repos#list-repositories-for-the-authenticated-user) (lecture)
- [`GET /repos/{owner}/{repo}/stargazers`](/rest/reference/activity#list-stargazers) (lecture)
- [`GET /repos/{owner}/{repo}/subscribers`](/rest/reference/activity#list-watchers) (lecture)
- [`GET /repos/{owner}/{repo}/collaborators`](/rest/collaborators/collaborators#list-repository-collaborators) (lecture)
- [`GET /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator) (lecture)
- [`GET /repos/{owner}/{repo}/collaborators/{username}/permission`](/rest/collaborators/collaborators#get-repository-permissions-for-a-user) (lecture)
- [`GET /repos/{owner}/{repo}/comments`](/rest/commits/comments#list-commit-comments-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#get-a-commit-comment) (lecture)
- [`GET /repos/{owner}/{repo}/license`](/rest/reference/licenses/#get-the-license-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/stats/code_frequency`](/rest/metrics/statistics#get-the-weekly-commit-activity) (lecture)
- [`GET /repos/{owner}/{repo}/stats/commit_activity`](/rest/metrics/statistics#get-the-last-year-of-commit-activity) (lecture)
- [`GET /repos/{owner}/{repo}/stats/contributors`](/rest/metrics/statistics#get-all-contributor-commit-activity) (lecture)
- [`GET /repos/{owner}/{repo}/stats/participation`](/rest/metrics/statistics#get-the-weekly-commit-count) (lecture)
- [`GET /repos/{owner}/{repo}/stats/punch_card`](/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day) (lecture)
- [`GET /search/labels`](/rest/reference/search#search-labels) (lecture)
- [`GET /repos/{owner}/{repo}/topics`](/rest/reference/repos#get-all-repository-topics) (lecture)

## Notifications

- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user) (lecture)

## Administration des organisations

{% ifversion ghec %}- [`GET /orgs/{org}/audit-log`](/rest/reference/orgs#get-audit-log) (lecture){% endif %}
- [`GET /orgs/{org}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-an-organization) (lecture)
- [`GET /orgs/{org}/settings/billing/advanced-security`](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization) (lecture)
- [`GET /orgs/{org}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-an-organization) (lecture)
- [`GET /orgs/{org}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-an-organization) (lecture)
- [`GET /enterprise-installation/{enterprise_or_org}/server-statistics`](/rest/reference/enterprise-admin#get-github-enterprise-server-statistics) (lecture)
- [`GET /orgs/{org}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-an-organization) (lecture)
- [`PUT /orgs/{org}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-an-organization) (écriture)
- [`DELETE /orgs/{org}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization) (écriture)
- [`GET /orgs/{org}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-organization) (lecture)
- [`GET /orgs/{org}/actions/cache/usage-by-repository`](/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization) (lecture)
- [`GET /orgs/{org}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-an-organization) (lecture)
- [`PUT /orgs/{org}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-an-organization) (écriture)
- [`GET /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization) (lecture)
- [`PUT /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization) (écriture)
- [`GET /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-an-organization) (lecture)
- [`PUT /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-an-organization) (écriture)
- [`GET /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions) (lecture)
- [`PUT /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions) (écriture)
- [`GET /orgs/{org}/security-managers`](/rest/reference/orgs#list-security-manager-teams) (lecture)
- [`PUT /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#add-a-security-manager-team) (écriture)
- [`DELETE /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#remove-a-security-manager-team) (écriture)
- [`PATCH /orgs/{org}`](/rest/reference/orgs/#update-an-organization) (écriture)
- [`GET /orgs/{org}/installations`](/rest/reference/orgs#list-app-installations-for-an-organization) (lecture)

## Codespaces de l’organisation

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (lecture)

## Secrets des codespaces de l’organisation

- [`GET /orgs/{org}/codespaces/secrets`](/rest/reference/codespaces#list-organization-secrets) (lecture)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-an-organization-secret) (lecture)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-an-organization-secret) (écriture)
- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-an-organization-secret) (écriture)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret) (lecture)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret) (écriture)
- [`GET /orgs/{org}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-an-organization-public-key) (lecture)

## Paramètres des codespaces de l’organisation

- [`PUT /orgs/{org}/codespaces/billing`](/rest/reference/codespaces#set-codespaces-billing) (écriture)

## Rôles personnalisés de l’organisation

- [`GET /organizations/{organization_id}/custom_roles`](/rest/reference/orgs#list-custom-repository-roles-in-an-organization) (lecture)
- [`PATCH /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#update-a-custom-role) (écriture)
- [`DELETE /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#delete-a-custom-role) (écriture)
- [`GET /orgs/{org}/fine_grained_permissions`](/rest/reference/orgs#list-fine-grained-permissions-for-an-organization) (lecture)

## Secrets Dependabot de l’organisation

- [`GET /orgs/{org}/dependabot/secrets`](/rest/reference/dependabot#list-organization-secrets) (lecture)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-an-organization-secret) (lecture)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-an-organization-secret) (écriture)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-an-organization-secret) (écriture)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret) (lecture)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret) (écriture)
- [`GET /orgs/{org}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-an-organization-public-key) (lecture)

## Événements de l’organisation

- [`GET /users/{username}/events/orgs/{org}`](/rest/reference/activity#list-organization-events-for-the-authenticated-user) (lecture)

## Hooks de l’organisation

- [`GET /orgs/{org}/hooks`](/rest/reference/orgs#list-organization-webhooks) (lecture)
- [`POST /orgs/{org}/hooks`](/rest/reference/orgs#create-an-organization-webhook) (écriture)
- [`GET /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#get-an-organization-webhook) (lecture)
- [`PATCH /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#update-an-organization-webhook) (écriture)
- [`DELETE /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#delete-an-organization-webhook) (écriture)
- [`GET /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization) (lecture)
- [`PATCH /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization) (écriture)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries`](/rest/reference/orgs#list-deliveries-for-an-organization-webhook) (lecture)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook) (lecture)
- [`POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook) (écriture)
- [`POST /orgs/{org}/hooks/{hook_id}/pings`](/rest/reference/orgs#ping-an-organization-webhook) (écriture)

## Projets de l’organisation

- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions) (administrateur)
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team) (administrateur)
- [`GET /orgs/{org}/projects`](/rest/reference/projects#list-organization-projects) (lecture)
- [`POST /orgs/{org}/projects`](/rest/reference/projects#create-an-organization-project) (écriture)

## Secrets de l’organisation

- [`GET /orgs/{org}/actions/secrets`](/rest/reference/actions#list-organization-secrets) (lecture)
- [`GET /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#get-an-organization-secret) (lecture)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-an-organization-secret) (écriture)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-an-organization-secret) (écriture)
- [`GET /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#list-selected-repositories-for-an-organization-secret) (lecture)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#set-selected-repositories-for-an-organization-secret) (écriture)
- [`GET /orgs/{org}/actions/secrets/public-key`](/rest/reference/actions#get-an-organization-public-key) (lecture)

## Exécuteurs autohébergés par l’organisation

- [`GET /orgs/{org}/actions/runner-groups`](/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization) (lecture)
- [`POST /orgs/{org}/actions/runner-groups`](/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization) (écriture)
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization) (lecture)
- [`PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization) (écriture)
- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization) (écriture)
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization) (lecture)
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization) (écriture)
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization) (lecture)
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) (écriture)
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization) (écriture)
- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) (écriture)
- [`GET /orgs/{org}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-an-organization) (lecture)
- [`GET /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization) (lecture)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization) (écriture)
- [`GET /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization) (lecture)
- [`POST /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization) (écriture)
- [`PUT /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization) (écriture)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization) (écriture)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization) (écriture)
- [`GET /orgs/{org}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-an-organization) (lecture)
- [`POST /orgs/{org}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-an-organization) (écriture)
- [`POST /orgs/{org}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-an-organization) (écriture)

## Blocage des utilisateurs de l’organisation

- [`GET /orgs/{org}/blocks`](/rest/reference/orgs#list-users-blocked-by-an-organization) (lecture)
- [`GET /orgs/{org}/blocks/{username}`](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization) (lecture)
- [`PUT /orgs/{org}/blocks/{username}`](/rest/reference/orgs#block-a-user-from-an-organization) (écriture)
- [`DELETE /orgs/{org}/blocks/{username}`](/rest/reference/orgs#unblock-a-user-from-an-organization) (écriture)

## Pages

- [`GET /repos/{owner}/{repo}/pages`](/rest/pages#get-a-github-pages-site) (lecture)
- [`PUT /repos/{owner}/{repo}/pages`](/rest/pages#update-information-about-a-github-pages-site) (écriture)
- [`GET /repos/{owner}/{repo}/pages/builds`](/rest/pages#list-github-pages-builds) (lecture)
- [`POST /repos/{owner}/{repo}/pages/builds`](/rest/pages#request-a-github-pages-build) (écriture)
- [`GET /repos/{owner}/{repo}/pages/builds/{build_id}`](/rest/pages#get-github-pages-build) (lecture)
- [`GET /repos/{owner}/{repo}/pages/builds/latest`](/rest/pages#get-latest-pages-build) (lecture)
- [`POST /repos/{owner}/{repo}/pages/deployment`](/rest/pages#create-a-github-pages-deployment) (écriture)
- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (écriture)

## Plan

- [`GET /users/{username}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-a-user) (lecture)
- [`GET /users/{username}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-a-user) (lecture)
- [`GET /users/{username}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-a-user) (lecture)

## Profil

- [`PATCH /user`](/rest/reference/users/#update-the-authenticated-user) (écriture)

## Demandes de tirage

- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#list-review-comments-on-a-pull-request) (lecture)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#create-a-review-comment-for-a-pull-request) (écriture)
- [`GET /repos/{owner}/{repo}/pulls/comments`](/rest/reference/pulls#list-review-comments-in-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#get-a-review-comment-for-a-pull-request) (lecture)
- [`PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#update-a-review-comment-for-a-pull-request) (écriture)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request) (écriture)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`](/rest/reference/pulls#dismiss-a-review-for-a-pull-request) (écriture)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`](/rest/reference/pulls#submit-a-review-for-a-pull-request) (écriture)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#get-all-requested-reviewers-for-a-pull-request) (lecture)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#request-reviewers-for-a-pull-request) (écriture)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request) (écriture)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#list-reviews-for-a-pull-request) (lecture)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#create-a-review-for-a-pull-request) (écriture)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#get-a-review-for-a-pull-request) (lecture)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#update-a-review-for-a-pull-request) (écriture)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#delete-a-pending-review-for-a-pull-request) (écriture)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`](/rest/reference/pulls#list-comments-for-a-pull-request-review) (lecture)
- [`GET /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#list-pull-requests) (lecture)
- [`POST /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#create-a-pull-request) (écriture)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) (lecture)
- [`PATCH /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls/#update-a-pull-request) (écriture)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/commits`](/rest/reference/pulls#list-commits-on-a-pull-request) (lecture)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/files`](/rest/reference/pulls#list-pull-requests-files) (lecture)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#check-if-a-pull-request-has-been-merged) (lecture)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch`](/rest/reference/pulls#update-a-pull-request-branch) (écriture)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment) (lecture)
- [`POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment) (écriture)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-pull-request-comment-reaction) (écriture)
- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (lecture)

## Hooks du dépôt

- [`GET /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#list-repository-webhooks) (lecture)
- [`POST /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#create-a-repository-webhook) (écriture)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#get-a-repository-webhook) (lecture)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#update-a-repository-webhook) (écriture)
- [`DELETE /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#delete-a-repository-webhook) (écriture)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository) (lecture)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries`](/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook) (lecture)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook) (lecture)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook) (écriture)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/pings`](/rest/webhooks/repos#ping-a-repository-webhook) (lecture)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/tests`](/rest/webhooks/repos#test-the-push-repository-webhook) (lecture)

## Projets de dépôt

- [`GET /projects/{project_id}/collaborators`](/rest/reference/projects#list-project-collaborators) (écriture)
- [`PUT /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#add-project-collaborator) (écriture)
- [`DELETE /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#remove-project-collaborator) (écriture)
- [`GET /projects/{project_id}/collaborators/{username}/permission`](/rest/reference/projects#get-project-permission-for-a-user) (écriture)
- [`GET /projects/{project_id}`](/rest/reference/projects#get-a-project) (lecture)
- [`PATCH /projects/{project_id}`](/rest/reference/projects#update-a-project) (écriture)
- [`DELETE /projects/{project_id}`](/rest/reference/projects#delete-a-project) (écriture)
- [`GET /projects/{project_id}/columns`](/rest/reference/projects#list-project-columns) (lecture)
- [`POST /projects/{project_id}/columns`](/rest/reference/projects#create-a-project-column) (écriture)
- [`GET /projects/columns/{column_id}`](/rest/reference/projects#get-a-project-column) (lecture)
- [`PATCH /projects/columns/{column_id}`](/rest/reference/projects#update-a-project-column) (écriture)
- [`DELETE /projects/columns/{column_id}`](/rest/reference/projects#delete-a-project-column) (écriture)
- [`GET /projects/columns/{column_id}/cards`](/rest/reference/projects#list-project-cards) (lecture)
- [`POST /projects/columns/{column_id}/cards`](/rest/reference/projects#create-a-project-card) (écriture)
- [`POST /projects/columns/{column_id}/moves`](/rest/reference/projects#move-a-project-column) (écriture)
- [`GET /projects/columns/cards/{card_id}`](/rest/reference/projects#get-a-project-card) (lecture)
- [`PATCH /projects/columns/cards/{card_id}`](/rest/reference/projects#update-a-project-card) (écriture)
- [`DELETE /projects/columns/cards/{card_id}`](/rest/reference/projects#delete-a-project-card) (écriture)
- [`POST /projects/columns/cards/{card_id}/moves`](/rest/reference/projects#move-a-project-card) (écriture)
- [`GET /repos/{owner}/{repo}/projects`](/rest/reference/projects#list-repository-projects) (lecture)
- [`POST /repos/{owner}/{repo}/projects`](/rest/reference/projects#create-a-repository-project) (écriture)

## Alertes d’analyse de secrets

- [`GET /orgs/{org}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization) (lecture)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#get-a-secret-scanning-alert) (lecture)
- [`PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#update-a-secret-scanning-alert) (écriture)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`](/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert) (lecture)

## Secrets

- [`GET /repos/{owner}/{repo}/actions/secrets`](/rest/reference/actions#list-repository-secrets) (lecture)
- [`GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#get-a-repository-secret) (lecture)
- [`PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-a-repository-secret) (écriture)
- [`DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-a-repository-secret) (écriture)
- [`GET /repos/{owner}/{repo}/actions/secrets/public-key`](/rest/reference/actions#get-a-repository-public-key) (lecture)

## Événements de sécurité

- [`GET /orgs/{org}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-by-organization) (lecture)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#get-a-code-scanning-alert) (lecture)
- [`PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#update-a-code-scanning-alert) (écriture)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`](/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert) (lecture)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses`](/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository) (lecture)
- [`DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository) (écriture)
- [`GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`](/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository) (lecture)
- [`POST /repos/{owner}/{repo}/code-scanning/sarifs`](/rest/reference/code-scanning#upload-a-sarif-file) (écriture)
- [`GET /repos/{owner}/{repo}/dependabot/alerts`](/rest/reference/dependabot#list-dependabot-alerts-for-a-repository) (lecture)
- [`GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#get-a-dependabot-alert) (lecture)
- [`PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#update-a-dependabot-alert) (écriture)

## Attribution d’étoiles

- [`GET /users/{username}/starred`](/rest/reference/activity#list-repositories-starred-by-a-user) (lecture)
- [`GET /user/starred`](/rest/reference/activity#list-repositories-starred-by-the-authenticated-user) (lecture)
- [`GET /user/starred/{owner}/{repo}`](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user) (lecture)
- [`PUT /user/starred/{owner}/{repo}`](/rest/reference/activity#star-a-repository-for-the-authenticated-user) (écriture)
- [`DELETE /user/starred/{owner}/{repo}`](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user) (écriture)

## États

- [`POST /repos/{owner}/{repo}/statuses/{sha}`](/rest/commits/statuses#create-a-commit-status) (écriture)

## Discussions d’équipe

- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) (lecture)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment) (écriture)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-comment-reaction) (écriture)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion) (lecture)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion) (écriture)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-reaction) (écriture)
- [`GET /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#list-discussions) (lecture)
- [`POST /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#create-a-discussion) (écriture)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#get-a-discussion) (lecture)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#update-a-discussion) (écriture)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#delete-a-discussion) (écriture)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#list-discussion-comments) (lecture)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#create-a-discussion-comment) (écriture)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#get-a-discussion-comment) (lecture)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#update-a-discussion-comment) (écriture)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#delete-a-discussion-comment) (écriture)

## Visionnage

- [`GET /users/{username}/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user) (lecture)
- [`GET /user/subscriptions`](/rest/reference/activity#list-repositories-watched-by-the-authenticated-user) (lecture)
