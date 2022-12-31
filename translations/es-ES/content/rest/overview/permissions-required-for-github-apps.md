---
title: Permisos que requieren las Github Apps
intro: 'Puedes encontrar los permisos que requiere cada terminal compatible con {% data variables.product.prodname_github_app %}.'
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
ms.openlocfilehash: 04021cc296295c1c3c7bfdfa5c60fc13f3e1509a
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184249'
---
## Acerca de los permisos de las {% data variables.product.prodname_github_app %}

Las {% data variables.product.prodname_github_apps %} se crean un con conjunto de permisos. Los permisos definen a qué recursos puede acceder la {% data variables.product.prodname_github_app %} a través de la API. Para obtener más información, consulte "[Establecer permisos para aplicaciones de GitHub](/apps/building-github-apps/setting-permissions-for-github-apps/)".

## Acciones

{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-a-repository) (lectura){% endif %} {% ifversion ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/reference/actions#get-github-actions-cache-usage-policy-for-a-repository) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`GET /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#list-github-actions-caches-for-a-repository) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}`](/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id) (escritura){% endif %}
- [`GET /repos/{owner}/{repo}/actions/artifacts`](/rest/reference/actions#list-artifacts-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#get-an-artifact) (lectura)
- [`DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#delete-an-artifact) (escritura)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`](/rest/reference/actions#list-workflow-run-artifacts) (lectura) {% ifversion fpt or ghec or ghes %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#get-pending-deployments-for-a-workflow-run) (lectura){% endif %} {% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}/environments`](/rest/deployments/environments#list-environments) (lectura)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}`](/rest/reference/actions#get-a-job-for-a-workflow-run) (lectura)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs`](/rest/reference/actions#download-job-logs-for-a-workflow-run) (lectura) {% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`](/rest/reference/actions#re-run-job-for-workflow-run) (escritura){% endif %} {% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run-attempt) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run) (lectura)
- [`GET /repos/{owner}/{repo}/actions/runs`](/rest/reference/actions#list-workflow-runs-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#get-a-workflow-run) (lectura)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#delete-a-workflow-run) (escritura) {% ifversion fpt or ghec or ghes %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals`](/rest/reference/actions#get-the-review-history-for-a-workflow-run) (lectura){% endif %} {% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve`](/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request) (escritura){% endif %} {% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`](/rest/reference/actions#get-a-workflow-run-attempt) (lectura){% endif %} {% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`](/rest/reference/actions#download-workflow-run-attempt-logs) (lectura){% endif %}
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`](/rest/reference/actions#cancel-a-workflow-run) (escritura)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#download-workflow-run-logs) (lectura)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#delete-workflow-run-logs) (escritura)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun`](/rest/reference/actions#re-run-a-workflow) (escritura) {% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`](/rest/reference/actions#re-run-workflow-failed-jobs) (escritura){% endif %} {% ifversion fpt or ghec or ghae %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing`](/rest/reference/actions#get-workflow-run-usage) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`](/rest/reference/actions#list-workflow-runs) (lectura)
- [`GET /repos/{owner}/{repo}/actions/workflows`](/rest/reference/actions#list-repository-workflows) (lectura)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`](/rest/reference/actions#get-a-workflow) (lectura)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`](/rest/reference/actions#disable-a-workflow) (escritura)
- [`POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`](/rest/reference/actions#create-a-workflow-dispatch-event) (escritura)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`](/rest/reference/actions#enable-a-workflow) (escritura) {% ifversion fpt or ghec or ghae %}- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`](/rest/reference/actions#get-workflow-usage) (lectura){% endif %}

## Administración

{% ifversion ghes > 3.4 %}- [`PATCH /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/reference/actions#set-github-actions-cache-usage-policy-for-a-repository) (escritura){% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (escritura){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (escritura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-a-repository) (lectura){% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-a-repository) (escritura){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository) (escritura){% endif %}
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (escritura)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (escritura)
- [`POST /orgs/{org}/repos`](/rest/reference/repos#create-an-organization-repository) (escritura)
- [`PATCH /repos/{owner}/{repo}`](/rest/reference/repos/#update-a-repository) (escritura)
- [`DELETE /repos/{owner}/{repo}`](/rest/reference/repos#delete-a-repository) (escritura)
- [`POST /repos/{owner}/{repo}/forks`](/rest/reference/repos#create-a-fork) (escritura) {% ifversion ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/replicas/caches`](/rest/reference/repos#list-repository-cache-replication-status) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}/teams`](/rest/reference/repos#list-repository-teams) (lectura)
- [`POST /repos/{owner}/{repo}/transfer`](/rest/reference/repos#transfer-a-repository) (escritura)
- [`POST /user/repos`](/rest/reference/repos#create-a-repository-for-the-authenticated-user) (escritura)
- [`GET /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-a-repository) (lectura)
- [`PUT /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-a-repository) (escritura) {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#get-workflow-access-level-to-a-repository) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`PUT /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#set-workflow-access-to-a-repository) (escritura){% endif %}
- [`GET /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-a-repository) (lectura)
- [`PUT /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-a-repository) (escritura) {% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions-for-a-repository) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.5 %}- [`PUT /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions-for-a-repository) (escritura){% endif %}
- [`GET /repos/{owner}/{repo}/autolinks`](/v3/repos#list-autolinks) (lectura)
- [`POST /repos/{owner}/{repo}/autolinks`](/v3/repos#create-an-autolink) (escritura)
- [`GET /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#get-autolink) (lectura)
- [`DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#delete-autolink) (escritura) {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#enable-automated-security-fixes) (escritura){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#disable-automated-security-fixes) (escritura){% endif %}
- [`PUT /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#add-a-repository-collaborator) (escritura)
- [`DELETE /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#remove-a-repository-collaborator) (escritura)
- [`GET /repos/{owner}/{repo}/invitations`](/rest/collaborators/invitations#list-repository-invitations) (lectura)
- [`PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#update-a-repository-invitation) (escritura)
- [`DELETE /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#delete-a-repository-invitation) (escritura)
- [`GET /user/repository_invitations`](/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user) (lectura)
- [`PATCH /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#accept-a-repository-invitation) (escritura)
- [`DELETE /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#decline-a-repository-invitation) (escritura)
- [`GET /repos/{owner}/{repo}/keys`](/rest/reference/repos#list-deploy-keys) (lectura)
- [`POST /repos/{owner}/{repo}/keys`](/rest/reference/repos#create-a-deploy-key) (escritura)
- [`GET /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#get-a-deploy-key) (lectura)
- [`DELETE /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#delete-a-deploy-key) (escritura) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (escritura){% endif %}
- [`GET /repos/{owner}/{repo}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository) (lectura)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository) (escritura) {% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository) (escritura){% endif %}
- [`GET /repos/{owner}/{repo}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-a-repository) (lectura)
- [`POST /repos/{owner}/{repo}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-a-repository) (escritura)
- [`POST /repos/{owner}/{repo}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-a-repository) (escritura) {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#list-tag-protection-state-of-a-repository) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#create-tag-protection-state-for-a-repository) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}`](/rest/reference/repos#delete-tag-protection-state-for-a-repository) (escritura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository) (lectura){% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#enable-vulnerability-alerts) (escritura){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#disable-vulnerability-alerts) (escritura){% endif %}
- [`PUT /repos/{owner}/{repo}/topics`](/rest/reference/repos#replace-all-repository-topics) (escritura) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/clones`](/rest/metrics/traffic#get-repository-clones) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/paths`](/rest/metrics/traffic#get-top-referral-paths) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/referrers`](/rest/metrics/traffic#get-top-referral-sources) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/views`](/rest/metrics/traffic#get-page-views) (lectura){% endif %}

{% ifversion fpt or ghec %}

## Bloqueos

- [`GET /user/blocks`](/rest/reference/users#list-users-blocked-by-the-authenticated-user) (lectura)
- [`GET /user/blocks/{username}`](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user) (lectura)
- [`PUT /user/blocks/{username}`](/rest/reference/users#block-a-user) (escritura)
- [`DELETE /user/blocks/{username}`](/rest/reference/users#unblock-a-user) (escritura)

{% endif %}

## Comprobaciones

- [`POST /repos/{owner}/{repo}/check-runs`](/rest/reference/checks#create-a-check-run) (escritura)
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#get-a-check-run) (lectura)
- [`PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#update-a-check-run) (escritura)
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`](/rest/reference/checks#list-check-run-annotations) (lectura)
- [`POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest`](/rest/reference/checks#rerequest-a-check-run) (escritura)
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs`](/rest/reference/checks#list-check-runs-in-a-check-suite) (lectura)
- [`POST /repos/{owner}/{repo}/check-suites`](/rest/reference/checks#create-a-check-suite) (escritura)
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}`](/rest/reference/checks#get-a-check-suite) (lectura)
- [`POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest`](/rest/reference/checks#rerequest-a-check-suite) (escritura)
- [`PATCH /repos/{owner}/{repo}/check-suites/preferences`](/rest/reference/checks#update-repository-preferences-for-check-suites) (escritura) {% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (lectura){% endif %}

{% ifversion fpt or ghec %}

## Codespaces

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (lectura)
- [`GET /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user) (lectura)
- [`POST /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#create-a-codespace-in-a-repository) (escritura)
- [`GET /repos/{owner}/{repo}/codespaces/new`](/rest/reference/codespaces#preview-attributes-for-a-new-codespace) (escritura)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`](/rest/reference/codespaces#create-a-codespace-from-a-pull-request) (escritura)
- [`GET /user/codespaces`](/rest/reference/codespaces#list-codespaces-for-the-authenticated-user) (lectura)
- [`POST /user/codespaces`](/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user) (escritura)
- [`GET /user/codespaces/{codespace_name}`](/rest/reference/codespaces#get-a-codespace-for-the-authenticated-user) (lectura)
- [`PATCH /user/codespaces/{codespace_name}`](/rest/reference/codespaces#update-a-codespace-for-the-authenticated-user) (escritura)
- [`DELETE /user/codespaces/{codespace_name}`](/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user) (escritura)

## Administración del ciclo de vida de Codespaces

- [`POST /user/codespaces/{codespace_name}/exports`](/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user) (escritura)
- [`GET /user/codespaces/{codespace_name}/exports/{export_id}`](/rest/codespaces/codespaces#get-details-about-a-codespace-export) (lectura)
- [`POST /user/codespaces/{codespace_name}/start`](/rest/reference/codespaces#start-a-codespace-for-the-authenticated-user) (escritura)
- [`POST /user/codespaces/{codespace_name}/stop`](/rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user) (escritura)

## Metadatos de Codespaces

- [`GET /repos/{owner}/{repo}/codespaces/devcontainers`](/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user) (lectura)
- [`GET /repos/{owner}/{repo}/codespaces/machines`](/rest/reference/codespaces#list-available-machine-types-for-a-repository) (lectura)
- [`GET /user/codespaces/{codespace_name}/machines`](/rest/reference/codespaces#list-machine-types-for-a-codespace) (lectura)

## Secretos de Codespaces

- [`GET /repos/{owner}/{repo}/codespaces/secrets`](/rest/reference/codespaces#list-repository-secrets) (escritura)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-repository-secret) (escritura)
- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (escritura)
- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (escritura)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-a-repository-public-key) (escritura)

## Secretos de usuario de Codespaces

- [`GET /user/codespaces/secrets`](/rest/reference/codespaces#list-secrets-for-the-authenticated-user) (lectura)
- [`GET /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-secret-for-the-authenticated-user) (lectura)
- [`PUT /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user) (escritura)
- [`DELETE /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user) (escritura)
- [`GET /user/codespaces/secrets/public-key`](/rest/reference/codespaces#get-public-key-for-the-authenticated-user) (lectura)
- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (lectura)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (escritura)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (escritura)
- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (escritura)

{% endif %}

## Contenido

{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/codeowners/errors`](/rest/reference/repos#list-codeowners-errors) (lectura){% endif %}
- [`POST /repos/{owner}/{repo}/git/blobs`](/rest/reference/git#create-a-blob) (escritura)
- [`POST /repos/{owner}/{repo}/git/commits`](/rest/reference/git#create-a-commit) (escritura)
- [`POST /repos/{owner}/{repo}/git/refs`](/rest/reference/git#create-a-reference) (escritura)
- [`POST /repos/{owner}/{repo}/git/tags`](/rest/reference/git#create-a-tag-object) (escritura)
- [`POST /repos/{owner}/{repo}/git/trees`](/rest/reference/git#create-a-tree) (escritura) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import`](/rest/reference/migrations#get-an-import-status) (lectura){% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/import`](/rest/reference/migrations#start-an-import) (escritura){% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import`](/rest/reference/migrations#update-an-import) (escritura){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/import`](/rest/reference/migrations#cancel-an-import) (escritura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/authors`](/rest/reference/migrations#get-commit-authors) (lectura){% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/authors/{author_id}`](/rest/reference/migrations#map-a-commit-author) (escritura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/large_files`](/rest/reference/migrations#get-large-files) (lectura){% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/lfs`](/rest/reference/migrations#update-git-lfs-preference) (escritura){% endif %}
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#merge-a-pull-request) (escritura)
- [`POST /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-commit-comment) (escritura)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-commit-comment-reaction) (escritura)
- [`GET /repos/{owner}/{repo}/branches`](/rest/reference/repos#list-branches) (lectura)
- [`POST /repos/{owner}/{repo}/merge-upstream`](/rest/reference/repos#sync-a-fork-branch-with-the-upstream-repository) (escritura)
- [`POST /repos/{owner}/{repo}/merges`](/rest/reference/repos#merge-a-branch) (escritura) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases`](/rest/reference/code-scanning#list-codeql-databases) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`](/rest/reference/code-scanning#get-codeql-database) (lectura){% endif %}
- [`PATCH /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#update-a-commit-comment) (escritura)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#delete-a-commit-comment) (escritura)
- [`GET /repos/{owner}/{repo}/commits`](/rest/commits/commits#list-commits) (lectura) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/community/profile`](/rest/metrics/community#get-community-profile-metrics) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (lectura){% endif %}
- [`POST /repos/{owner}/{repo}/dispatches`](/rest/reference/repos#create-a-repository-dispatch-event) (escritura)
- [`GET /repos/{owner}/{repo}/releases`](/rest/reference/repos#list-releases) (lectura)
- [`POST /repos/{owner}/{repo}/releases`](/rest/reference/repos#create-a-release) (escritura)
- [`GET /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#get-a-release) (lectura)
- [`PATCH /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#update-a-release) (escritura)
- [`DELETE /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#delete-a-release) (escritura)
- [`GET /repos/{owner}/{repo}/releases/{release_id}/assets`](/rest/reference/repos#list-release-assets) (lectura)
- [`GET /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#get-a-release-asset) (lectura)
- [`PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#update-a-release-asset) (escritura)
- [`DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#delete-a-release-asset) (escritura) {% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/releases/generate-notes`](/rest/reference/repos#generate-release-notes) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}/releases/latest`](/rest/reference/repos#get-the-latest-release) (lectura)

{% ifversion fpt or ghec or ghes > 3.3 %}

## Secretos del Dependabot

- [`GET /repos/{owner}/{repo}/dependabot/secrets`](/rest/reference/dependabot#list-repository-secrets) (lectura)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-a-repository-secret) (lectura)
- [`PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-a-repository-secret) (escritura)
- [`DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-a-repository-secret) (escritura)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-a-repository-public-key) (lectura)

{% endif %}

## Implementaciones

{% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#list-deployment-statuses) (lectura)
- [`POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#create-a-deployment-status) (escritura)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`](/rest/reference/repos#get-a-deployment-status) (lectura)
- [`GET /repos/{owner}/{repo}/deployments`](/rest/reference/repos#list-deployments) (lectura)
- [`POST /repos/{owner}/{repo}/deployments`](/rest/reference/repos#create-a-deployment) (escritura)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#get-a-deployment) (lectura)
- [`DELETE /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#delete-a-deployment) (escritura)

{% ifversion fpt or ghec or ghes %}

## Correos electrónicos

{% ifversion fpt or ghec %}- [`PATCH /user/email/visibility`](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) (escritura){% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /user/emails`](/rest/reference/users#list-email-addresses-for-the-authenticated-user) (lectura){% endif %} {% ifversion fpt or ghec or ghes %}- [`POST /user/emails`](/rest/reference/users#add-an-email-address-for-the-authenticated-user) (escritura){% endif %} {% ifversion fpt or ghec or ghes %}- [`DELETE /user/emails`](/rest/reference/users#delete-an-email-address-for-the-authenticated-user) (escritura){% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /user/public_emails`](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user) (lectura){% endif %}

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## Administración empresarial

{% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /enterprises/{enterprise}/settings/billing/advanced-security`](/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise) (escritura){% endif %} {% ifversion ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/reference/actions#get-github-actions-cache-usage-policy-for-an-enterprise) (escritura){% endif %} {% ifversion ghes > 3.4 %}- [`PATCH /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/reference/actions#set-github-actions-cache-usage-policy-for-an-enterprise) (escritura){% endif %}

{% endif %}

## Seguidores

- [`GET /user/followers`](/rest/reference/users#list-followers-of-the-authenticated-user) (lectura)
- [`GET /user/following`](/rest/reference/users#list-the-people-the-authenticated-user-follows) (lectura)
- [`GET /user/following/{username}`](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user) (lectura)
- [`PUT /user/following/{username}`](/rest/reference/users#follow-a-user) (escritura)
- [`DELETE /user/following/{username}`](/rest/reference/users#unfollow-a-user) (escritura)

## Gists

- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (escritura)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (escritura)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (escritura)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (escritura)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (escritura)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (escritura)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (escritura)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (escritura)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (escritura)

{% ifversion fpt or ghec or ghes > 3.6 %}

## Claves públicas de SSH de firma de Git

- [`GET /user/ssh_signing_keys`](/rest/reference/users#list-public-ssh-signing-keys-for-the-authenticated-user) (lectura)
- [`POST /user/ssh_signing_keys`](/rest/reference/users#create-an-ssh-signing-key-for-the-authenticated-user) (escritura)
- [`GET /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#get-a-ssh-signing-key-for-the-authenticated-user) (lectura)
- [`DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#delete-a-ssh-signing-key-for-the-authenticated-user) (escritura)

{% endif %}

## Claves GPG

- [`GET /user/gpg_keys`](/rest/reference/users#list-gpg-keys-for-the-authenticated-user) (lectura)
- [`POST /user/gpg_keys`](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user) (escritura)
- [`GET /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user) (lectura)
- [`DELETE /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user) (escritura)

{% ifversion fpt or ghec %}

## Límites de interacción

- [`PUT /user/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories) (escritura)
- [`GET /user/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories) (lectura)
- [`DELETE /user/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories) (escritura)

{% endif %}

## Issues

- [`POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#add-assignees-to-an-issue) (escritura)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#remove-assignees-from-an-issue) (escritura)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#list-issue-comments) (lectura)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#create-an-issue-comment) (escritura)
- [`GET /repos/{owner}/{repo}/issues/comments`](/rest/reference/issues#list-issue-comments-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#get-an-issue-comment) (lectura)
- [`PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#update-an-issue-comment) (escritura)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#delete-an-issue-comment) (escritura)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/events`](/rest/reference/issues#list-issue-events) (lectura)
- [`GET /repos/{owner}/{repo}/issues/events`](/rest/reference/issues#list-issue-events-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/issues/events/{event_id}`](/rest/reference/issues#get-an-issue-event) (lectura)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`](/rest/reference/issues#list-timeline-events-for-an-issue) (lectura)
- [`GET /repos/{owner}/{repo}/assignees`](/rest/reference/issues#list-assignees) (lectura)
- [`GET /repos/{owner}/{repo}/issues`](/rest/reference/issues#list-repository-issues) (lectura)
- [`POST /repos/{owner}/{repo}/issues`](/rest/reference/issues#create-an-issue) (escritura)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues#get-an-issue) (lectura)
- [`PATCH /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues/#update-an-issue) (escritura)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#lock-an-issue) (escritura)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#unlock-an-issue) (escritura)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#list-labels-for-an-issue) (lectura)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#add-labels-to-an-issue) (escritura)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#set-labels-for-an-issue) (escritura)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#remove-all-labels-from-an-issue) (escritura)
- [`GET /repos/{owner}/{repo}/labels`](/rest/reference/issues#list-labels-for-a-repository) (lectura)
- [`POST /repos/{owner}/{repo}/labels`](/rest/reference/issues#create-a-label) (escritura)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`](/rest/reference/issues#list-labels-for-issues-in-a-milestone) (lectura)
- [`GET /repos/{owner}/{repo}/milestones`](/rest/reference/issues#list-milestones) (lectura)
- [`POST /repos/{owner}/{repo}/milestones`](/rest/reference/issues#create-a-milestone) (escritura)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#get-a-milestone) (lectura)
- [`PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#update-a-milestone) (escritura)
- [`DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#delete-a-milestone) (escritura)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue) (lectura)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue) (escritura)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-reaction) (escritura)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue-comment) (lectura)
- [`POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue-comment) (escritura)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-comment-reaction) (escritura)

## Claves

- [`GET /user/keys`](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user) (lectura)
- [`POST /user/keys`](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user) (escritura)
- [`GET /user/keys/{key_id}`](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user) (lectura)
- [`DELETE /user/keys/{key_id}`](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user) (escritura)

## Members

{% ifversion ghec or ghae or ghes > 3.5 %}- [`PATCH /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#link-external-idp-group-team-connection) (escritura){% endif %} {% ifversion ghec or ghae or ghes > 3.5 %}- [`DELETE /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#unlink-external-idp-group-team-connection) (escritura){% endif %} {% ifversion ghec or ghae or ghes > 3.5 %}- [`GET /orgs/{org}/external-group/{group_id}`](/rest/reference/teams#external-idp-group-info-for-an-organization) (escritura){% endif %} {% ifversion ghec or ghae or ghes > 3.5 %}- [`GET /orgs/{org}/external-groups`](/rest/reference/teams#list-external-idp-groups-for-an-organization) (escritura){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/failed_invitations`](/rest/reference/orgs#list-failed-organization-invitations) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations`](/rest/reference/orgs#list-pending-organization-invitations) (lectura){% endif %} {% ifversion fpt or ghec %}- [`POST /orgs/{org}/invitations`](/rest/reference/orgs#create-an-organization-invitation) (escritura){% endif %} {% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/invitations/{invitation_id}`](/rest/reference/orgs#cancel-an-organization-invitation) (escritura){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations/{invitation_id}/teams`](/rest/reference/orgs#list-organization-invitation-teams) (lectura){% endif %}
- [`GET /orgs/{org}/members`](/rest/reference/orgs#list-organization-members) (lectura)
- [`GET /orgs/{org}/members/{username}`](/rest/reference/orgs#check-organization-membership-for-a-user) (lectura)
- [`DELETE /orgs/{org}/members/{username}`](/rest/reference/orgs#remove-an-organization-member) (escritura)
- [`GET /orgs/{org}/memberships/{username}`](/rest/reference/orgs#get-organization-membership-for-a-user) (lectura)
- [`PUT /orgs/{org}/memberships/{username}`](/rest/reference/orgs#set-organization-membership-for-a-user) (escritura)
- [`DELETE /orgs/{org}/memberships/{username}`](/rest/reference/orgs#remove-organization-membership-for-a-user) (escritura) {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/public_members`](/rest/reference/orgs#list-public-organization-members) (lectura){% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/public_members/{username}`](/rest/reference/orgs#check-public-organization-membership-for-a-user) (lectura){% endif %} {% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/public_members/{username}`](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user) (escritura){% endif %} {% ifversion fpt or ghec or ghes %}- [`DELETE /orgs/{org}/public_members/{username}`](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user) (escritura){% endif %}
- [`GET /orgs/{org}/outside_collaborators`](/rest/reference/orgs#list-outside-collaborators-for-an-organization) (lectura)
- [`PUT /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator) (escritura)
- [`DELETE /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#remove-outside-collaborator-from-an-organization) (escritura)
- [`GET /orgs/{org}/teams/{team_slug}/projects`](/rest/reference/teams#list-team-projects) (lectura)
- [`GET /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#check-team-permissions-for-a-project) (lectura)
- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions) (lectura)
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team) (lectura)
- [`GET /orgs/{org}/teams/{team_slug}/repos`](/rest/reference/teams#list-team-repositories) (lectura)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (lectura)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (lectura)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (lectura)
- [`PATCH /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#update-a-team) (escritura)
- [`DELETE /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#delete-a-team) (escritura) {% ifversion fpt or ghec %}- [`GET /orgs/{org}/teams/{team_slug}/invitations`](/rest/reference/teams#list-pending-team-invitations) (lectura){% endif %}
- [`GET /orgs/{org}/teams/{team_slug}/members`](/rest/reference/teams#list-team-members) (lectura)
- [`GET /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#get-team-membership-for-a-user) (lectura)
- [`PUT /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#add-or-update-team-membership-for-a-user) (escritura)
- [`DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#remove-team-membership-for-a-user) (escritura)
- [`GET /orgs/{org}/teams/{team_slug}/teams`](/rest/reference/teams#list-child-teams) (lectura)
- [`GET /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#get-a-team-by-name) (lectura)
- [`GET /orgs/{org}/teams`](/rest/reference/teams#list-teams) (lectura)
- [`POST /orgs/{org}/teams`](/rest/reference/teams#create-a-team) (escritura)
- [`GET /user/memberships/orgs/{org}`](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user) (lectura)
- [`PATCH /user/memberships/orgs/{org}`](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user) (escritura)

## Metadatos

{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (lectura){% endif %} {% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (lectura){% endif %} {% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (lectura){% endif %} {% ifversion fpt or ghec %}- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}/events`](/rest/reference/activity#list-repository-events) (lectura)
- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (lectura)
- [`GET /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#get-a-gist-comment) (lectura)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (lectura)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (lectura)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (lectura)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (lectura)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (lectura)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (lectura)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (lectura)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (lectura)
- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user) (lectura)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (lectura)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (lectura)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (lectura)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-commit-comment) (lectura)
- [`GET /orgs/{org}/repos`](/rest/reference/repos#list-organization-repositories) (lectura) {% ifversion fpt or ghec or ghes %}- [`GET /repositories`](/rest/reference/repos#list-public-repositories) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}`](/rest/reference/repos#get-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/contributors`](/rest/reference/repos#list-repository-contributors) (lectura)
- [`GET /repos/{owner}/{repo}/forks`](/rest/reference/repos#list-forks) (lectura)
- [`GET /repos/{owner}/{repo}/languages`](/rest/reference/repos#list-repository-languages) (lectura)
- [`GET /repos/{owner}/{repo}/tags`](/rest/reference/repos#list-repository-tags) (lectura)
- [`GET /users/{username}/repos`](/rest/reference/repos#list-repositories-for-a-user) (lectura)
- [`GET /user/repos`](/rest/reference/repos#list-repositories-for-the-authenticated-user) (lectura)
- [`GET /repos/{owner}/{repo}/stargazers`](/rest/reference/activity#list-stargazers) (lectura)
- [`GET /repos/{owner}/{repo}/subscribers`](/rest/reference/activity#list-watchers) (lectura)
- [`GET /repos/{owner}/{repo}/collaborators`](/rest/collaborators/collaborators#list-repository-collaborators) (lectura)
- [`GET /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator) (lectura)
- [`GET /repos/{owner}/{repo}/collaborators/{username}/permission`](/rest/collaborators/collaborators#get-repository-permissions-for-a-user) (lectura)
- [`GET /repos/{owner}/{repo}/comments`](/rest/commits/comments#list-commit-comments-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#get-a-commit-comment) (lectura)
- [`GET /repos/{owner}/{repo}/license`](/rest/reference/licenses/#get-the-license-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/stats/code_frequency`](/rest/metrics/statistics#get-the-weekly-commit-activity) (lectura)
- [`GET /repos/{owner}/{repo}/stats/commit_activity`](/rest/metrics/statistics#get-the-last-year-of-commit-activity) (lectura)
- [`GET /repos/{owner}/{repo}/stats/contributors`](/rest/metrics/statistics#get-all-contributor-commit-activity) (lectura)
- [`GET /repos/{owner}/{repo}/stats/participation`](/rest/metrics/statistics#get-the-weekly-commit-count) (lectura)
- [`GET /repos/{owner}/{repo}/stats/punch_card`](/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day) (lectura)
- [`GET /search/labels`](/rest/reference/search#search-labels) (lectura)
- [`GET /repos/{owner}/{repo}/topics`](/rest/reference/repos#get-all-repository-topics) (lectura)

## Notificaciones

- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user) (lectura)

## Administración de la organización

{% ifversion ghec or ghae or ghes %}- [`GET /orgs/{org}/audit-log`](/rest/reference/orgs#get-audit-log) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-an-organization) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /orgs/{org}/settings/billing/advanced-security`](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-an-organization) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-an-organization) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /enterprise-installation/{enterprise_or_org}/server-statistics`](/rest/reference/enterprise-admin#get-github-enterprise-server-statistics) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-an-organization) (lectura){% endif %} {% ifversion fpt or ghec %}- [`PUT /orgs/{org}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-an-organization) (escritura){% endif %} {% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-organization) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/cache/usage-by-repository`](/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization) (lectura){% endif %}
- [`GET /orgs/{org}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-an-organization) (lectura)
- [`PUT /orgs/{org}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-an-organization) (escritura)
- [`GET /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization) (lectura)
- [`PUT /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization) (escritura)
- [`GET /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-an-organization) (lectura)
- [`PUT /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-an-organization) (escritura) {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`PUT /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`GET /orgs/{org}/security-managers`](/rest/reference/orgs#list-security-manager-teams) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`PUT /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#add-a-security-manager-team) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#remove-a-security-manager-team) (escritura){% endif %}
- [`PATCH /orgs/{org}`](/rest/reference/orgs/#update-an-organization) (escritura)
- [`GET /orgs/{org}/installations`](/rest/reference/orgs#list-app-installations-for-an-organization) (lectura)

{% ifversion fpt or ghec %}

## Codespaces de la organización

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (lectura)

## Secretos de codespaces de la organización

- [`GET /orgs/{org}/codespaces/secrets`](/rest/reference/codespaces#list-organization-secrets) (lectura)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-an-organization-secret) (lectura)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-an-organization-secret) (escritura)
- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-an-organization-secret) (escritura)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret) (lectura)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret) (escritura)
- [`GET /orgs/{org}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-an-organization-public-key) (lectura)

## Configuración de codespaces de la organización

- [`PUT /orgs/{org}/codespaces/billing`](/rest/reference/codespaces#set-codespaces-billing) (escritura)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## Roles personalizados de la organización

- [`GET /organizations/{organization_id}/custom_roles`](/rest/reference/orgs#list-custom-repository-roles-in-an-organization) (lectura)
- [`GET /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs/#get-a-custom-role) (lectura)
- [`PATCH /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#update-a-custom-role) (escritura)
- [`DELETE /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#delete-a-custom-role) (escritura)
- [`GET /orgs/{org}/fine_grained_permissions`](/rest/reference/orgs#list-fine-grained-permissions-for-an-organization) (lectura)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## Secretos de Dependabot de la organización

- [`GET /orgs/{org}/dependabot/secrets`](/rest/reference/dependabot#list-organization-secrets) (lectura)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-an-organization-secret) (lectura)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-an-organization-secret) (escritura)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-an-organization-secret) (escritura)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret) (lectura)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret) (escritura)
- [`GET /orgs/{org}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-an-organization-public-key) (lectura)

{% endif %}

## Eventos de la organización

- [`GET /users/{username}/events/orgs/{org}`](/rest/reference/activity#list-organization-events-for-the-authenticated-user) (lectura)

## Enlaces de la organización

- [`GET /orgs/{org}/hooks`](/rest/reference/orgs#list-organization-webhooks) (lectura)
- [`POST /orgs/{org}/hooks`](/rest/reference/orgs#create-an-organization-webhook) (escritura)
- [`GET /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#get-an-organization-webhook) (lectura)
- [`PATCH /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#update-an-organization-webhook) (escritura)
- [`DELETE /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#delete-an-organization-webhook) (escritura)
- [`GET /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization) (lectura)
- [`PATCH /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization) (escritura)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries`](/rest/reference/orgs#list-deliveries-for-an-organization-webhook) (lectura)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook) (lectura)
- [`POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook) (escritura)
- [`POST /orgs/{org}/hooks/{hook_id}/pings`](/rest/reference/orgs#ping-an-organization-webhook) (escritura)

{% ifversion ghes %}

## Ganchos de pre-recepción de la organización

- [`GET /orgs/{org}/pre-receive-hooks`](/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization) (lectura)
- [`GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization) (lectura)
- [`PATCH /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization) (escritura)
- [`DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) (escritura)

{% endif %}

## Proyectos de la organización

- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions) (administrador)
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team) (administrador)
- [`GET /orgs/{org}/projects`](/rest/reference/projects#list-organization-projects) (lectura)
- [`POST /orgs/{org}/projects`](/rest/reference/projects#create-an-organization-project) (escritura)

## Secretos de la organización

- [`GET /orgs/{org}/actions/secrets`](/rest/reference/actions#list-organization-secrets) (lectura)
- [`GET /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#get-an-organization-secret) (lectura)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-an-organization-secret) (escritura)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-an-organization-secret) (escritura)
- [`GET /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#list-selected-repositories-for-an-organization-secret) (lectura)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#set-selected-repositories-for-an-organization-secret) (escritura)
- [`GET /orgs/{org}/actions/secrets/public-key`](/rest/reference/actions#get-an-organization-public-key) (lectura)

## Ejecutores autohospedados de la organización

- [`GET /orgs/{org}/actions/runner-groups`](/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization) (lectura)
- [`POST /orgs/{org}/actions/runner-groups`](/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization) (escritura)
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization) (lectura)
- [`PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization) (escritura)
- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization) (escritura) {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization) (lectura){% endif %} {% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization) (escritura){% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization) (lectura){% endif %} {% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) (escritura){% endif %}
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization) (escritura) {% ifversion fpt or ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) (escritura){% endif %}
- [`GET /orgs/{org}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-an-organization) (lectura)
- [`GET /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization) (lectura)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization) (escritura) {% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization) (lectura){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`POST /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`PUT /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization) (escritura){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization) (escritura){% endif %}
- [`GET /orgs/{org}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-an-organization) (lectura)
- [`POST /orgs/{org}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-an-organization) (escritura)
- [`POST /orgs/{org}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-an-organization) (escritura)

{% ifversion fpt or ghec %}

## Bloqueo de usuarios de la organización

- [`GET /orgs/{org}/blocks`](/rest/reference/orgs#list-users-blocked-by-an-organization) (lectura)
- [`GET /orgs/{org}/blocks/{username}`](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization) (lectura)
- [`PUT /orgs/{org}/blocks/{username}`](/rest/reference/orgs#block-a-user-from-an-organization) (escritura)
- [`DELETE /orgs/{org}/blocks/{username}`](/rest/reference/orgs#unblock-a-user-from-an-organization) (escritura)

{% endif %}

## Páginas

- [`GET /repos/{owner}/{repo}/pages`](/rest/pages#get-a-github-pages-site) (lectura)
- [`PUT /repos/{owner}/{repo}/pages`](/rest/pages#update-information-about-a-github-pages-site) (escritura)
- [`GET /repos/{owner}/{repo}/pages/builds`](/rest/pages#list-github-pages-builds) (lectura)
- [`POST /repos/{owner}/{repo}/pages/builds`](/rest/pages#request-a-github-pages-build) (escritura)
- [`GET /repos/{owner}/{repo}/pages/builds/{build_id}`](/rest/pages#get-github-pages-build) (lectura)
- [`GET /repos/{owner}/{repo}/pages/builds/latest`](/rest/pages#get-latest-pages-build) (lectura) {% ifversion fpt or ghec or ghes > 3.6 %}- [`POST /repos/{owner}/{repo}/pages/deployment`](/rest/pages#create-a-github-pages-deployment) (escritura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (escritura){% endif %}

{% ifversion fpt or ghec %}

## Plan

- [`GET /users/{username}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-a-user) (lectura)
- [`GET /users/{username}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-a-user) (lectura)
- [`GET /users/{username}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-a-user) (lectura)

{% endif %}

## Perfil

- [`PATCH /user`](/rest/reference/users/#update-the-authenticated-user) (escritura)

## Solicitudes de incorporación de cambios

- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#list-review-comments-on-a-pull-request) (lectura)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#create-a-review-comment-for-a-pull-request) (escritura)
- [`GET /repos/{owner}/{repo}/pulls/comments`](/rest/reference/pulls#list-review-comments-in-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#get-a-review-comment-for-a-pull-request) (lectura)
- [`PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#update-a-review-comment-for-a-pull-request) (escritura)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request) (escritura)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`](/rest/reference/pulls#dismiss-a-review-for-a-pull-request) (escritura)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`](/rest/reference/pulls#submit-a-review-for-a-pull-request) (escritura)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#get-all-requested-reviewers-for-a-pull-request) (lectura)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#request-reviewers-for-a-pull-request) (escritura)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request) (escritura)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#list-reviews-for-a-pull-request) (lectura)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#create-a-review-for-a-pull-request) (escritura)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#get-a-review-for-a-pull-request) (lectura)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#update-a-review-for-a-pull-request) (escritura)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#delete-a-pending-review-for-a-pull-request) (escritura)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`](/rest/reference/pulls#list-comments-for-a-pull-request-review) (lectura)
- [`GET /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#list-pull-requests) (lectura)
- [`POST /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#create-a-pull-request) (escritura)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) (lectura)
- [`PATCH /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls/#update-a-pull-request) (escritura)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/commits`](/rest/reference/pulls#list-commits-on-a-pull-request) (lectura)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/files`](/rest/reference/pulls#list-pull-requests-files) (lectura)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#check-if-a-pull-request-has-been-merged) (lectura)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch`](/rest/reference/pulls#update-a-pull-request-branch) (escritura)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment) (lectura)
- [`POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment) (escritura)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-pull-request-comment-reaction) (escritura) {% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (lectura){% endif %}

## Enlaces del repositorio

- [`GET /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#list-repository-webhooks) (lectura)
- [`POST /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#create-a-repository-webhook) (escritura)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#get-a-repository-webhook) (lectura)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#update-a-repository-webhook) (escritura)
- [`DELETE /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#delete-a-repository-webhook) (escritura)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository) (lectura)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository) (escritura)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries`](/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook) (lectura)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook) (lectura)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook) (escritura)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/pings`](/rest/webhooks/repos#ping-a-repository-webhook) (lectura)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/tests`](/rest/webhooks/repos#test-the-push-repository-webhook) (lectura)

{% ifversion ghes %}

## Ganchos de pre-recepción del repositorio

- [`GET /repos/{owner}/{repo}/pre-receive-hooks`](/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository) (lectura)
- [`PATCH /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository) (escritura)
- [`DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) (escritura)

{% endif %}

## Proyectos del repositorio

- [`GET /projects/{project_id}/collaborators`](/rest/reference/projects#list-project-collaborators) (escritura)
- [`PUT /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#add-project-collaborator) (escritura)
- [`DELETE /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#remove-project-collaborator) (escritura)
- [`GET /projects/{project_id}/collaborators/{username}/permission`](/rest/reference/projects#get-project-permission-for-a-user) (escritura)
- [`GET /projects/{project_id}`](/rest/reference/projects#get-a-project) (lectura)
- [`PATCH /projects/{project_id}`](/rest/reference/projects#update-a-project) (escritura)
- [`DELETE /projects/{project_id}`](/rest/reference/projects#delete-a-project) (escritura)
- [`GET /projects/{project_id}/columns`](/rest/reference/projects#list-project-columns) (lectura)
- [`POST /projects/{project_id}/columns`](/rest/reference/projects#create-a-project-column) (escritura)
- [`GET /projects/columns/{column_id}`](/rest/reference/projects#get-a-project-column) (lectura)
- [`PATCH /projects/columns/{column_id}`](/rest/reference/projects#update-a-project-column) (escritura)
- [`DELETE /projects/columns/{column_id}`](/rest/reference/projects#delete-a-project-column) (escritura)
- [`GET /projects/columns/{column_id}/cards`](/rest/reference/projects#list-project-cards) (lectura)
- [`POST /projects/columns/{column_id}/cards`](/rest/reference/projects#create-a-project-card) (escritura)
- [`POST /projects/columns/{column_id}/moves`](/rest/reference/projects#move-a-project-column) (escritura)
- [`GET /projects/columns/cards/{card_id}`](/rest/reference/projects#get-a-project-card) (lectura)
- [`PATCH /projects/columns/cards/{card_id}`](/rest/reference/projects#update-a-project-card) (escritura)
- [`DELETE /projects/columns/cards/{card_id}`](/rest/reference/projects#delete-a-project-card) (escritura)
- [`POST /projects/columns/cards/{card_id}/moves`](/rest/reference/projects#move-a-project-card) (escritura)
- [`GET /repos/{owner}/{repo}/projects`](/rest/reference/projects#list-repository-projects) (lectura)
- [`POST /repos/{owner}/{repo}/projects`](/rest/reference/projects#create-a-repository-project) (escritura)

## Alertas de examen de secretos

{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#get-a-secret-scanning-alert) (lectura)
- [`PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#update-a-secret-scanning-alert) (escritura)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`](/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert) (lectura)

## Secretos

- [`GET /repos/{owner}/{repo}/actions/secrets`](/rest/reference/actions#list-repository-secrets) (lectura)
- [`GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#get-a-repository-secret) (lectura)
- [`PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-a-repository-secret) (escritura)
- [`DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-a-repository-secret) (escritura)
- [`GET /repos/{owner}/{repo}/actions/secrets/public-key`](/rest/reference/actions#get-a-repository-public-key) (lectura)

## Eventos de seguridad

{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /orgs/{org}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-by-organization) (lectura){% endif %}
- [`GET /repos/{owner}/{repo}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#get-a-code-scanning-alert) (lectura)
- [`PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#update-a-code-scanning-alert) (escritura)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`](/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert) (lectura)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses`](/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository) (lectura)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository) (lectura)
- [`DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository) (escritura)
- [`GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`](/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository) (lectura)
- [`POST /repos/{owner}/{repo}/code-scanning/sarifs`](/rest/reference/code-scanning#upload-a-sarif-file) (escritura) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts`](/rest/reference/dependabot#list-dependabot-alerts-for-a-repository) (lectura){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#get-a-dependabot-alert) (lectura){% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#update-a-dependabot-alert) (escritura){% endif %}

## Marcar con una estrella

- [`GET /users/{username}/starred`](/rest/reference/activity#list-repositories-starred-by-a-user) (lectura)
- [`GET /user/starred`](/rest/reference/activity#list-repositories-starred-by-the-authenticated-user) (lectura)
- [`GET /user/starred/{owner}/{repo}`](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user) (lectura)
- [`PUT /user/starred/{owner}/{repo}`](/rest/reference/activity#star-a-repository-for-the-authenticated-user) (escritura)
- [`DELETE /user/starred/{owner}/{repo}`](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user) (escritura)

## Estados

- [`POST /repos/{owner}/{repo}/statuses/{sha}`](/rest/commits/statuses#create-a-commit-status) (escritura)

## Discusiones de equipo

- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) (lectura)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment) (escritura)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-comment-reaction) (escritura)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion) (lectura)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion) (escritura)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-reaction) (escritura)
- [`GET /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#list-discussions) (lectura)
- [`POST /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#create-a-discussion) (escritura)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#get-a-discussion) (lectura)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#update-a-discussion) (escritura)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#delete-a-discussion) (escritura)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#list-discussion-comments) (lectura)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#create-a-discussion-comment) (escritura)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#get-a-discussion-comment) (lectura)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#update-a-discussion-comment) (escritura)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#delete-a-discussion-comment) (escritura)

{% ifversion fpt or ghec %}

## Alertas de vulnerabilidades

- [`GET /orgs/{org}/dependabot/alerts`](/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization) (lectura)

{% endif %}

## Observando

- [`GET /users/{username}/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user) (lectura)
- [`GET /user/subscriptions`](/rest/reference/activity#list-repositories-watched-by-the-authenticated-user) (lectura)
