---
title: 'Разрешения, необходимые для приложений GitHub'
intro: 'Необходимые разрешения для каждой конечной точки, совместимой с {% data variables.product.prodname_github_app %}.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184248'
---
## Сведения о разрешениях {% data variables.product.prodname_github_app %}

{% data variables.product.prodname_github_apps %} создаются с набором разрешений. Разрешения определяют то, к каким ресурсам {% data variables.product.prodname_github_app %} имеет доступ через API. Дополнительные сведения см. в разделе [Настройка разрешений для приложений GitHub](/apps/building-github-apps/setting-permissions-for-github-apps/).

## Действия

{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-a-repository) (read){% endif %} {% ifversion ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/reference/actions#get-github-actions-cache-usage-policy-for-a-repository) (read){% endif %} {% ifversion fpt or ghec or ghes > 3.3.6 %}- [`GET /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#list-github-actions-caches-for-a-repository) (чтение){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}`](/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id) (write){% endif %}
- [`GET /repos/{owner}/{repo}/actions/artifacts`](/rest/reference/actions#list-artifacts-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#get-an-artifact) (чтение)
- [`DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#delete-an-artifact) (запись)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`](/rest/reference/actions#list-workflow-run-artifacts) (чтение) {% ifversion fpt or ghec or ghes %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#get-pending-deployments-for-a-workflow-run) (read){% endif %} {% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (read){% endif %}
- [`GET /repos/{owner}/{repo}/environments`](/rest/deployments/environments#list-environments) (чтение)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}`](/rest/reference/actions#get-a-job-for-a-workflow-run) (чтение)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs`](/rest/reference/actions#download-job-logs-for-a-workflow-run) (чтение) {% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`](/rest/reference/actions#re-run-job-for-workflow-run) (write){% endif %} {% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run-attempt) (чтение){% endif %}
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run) (чтение)
- [`GET /repos/{owner}/{repo}/actions/runs`](/rest/reference/actions#list-workflow-runs-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#get-a-workflow-run) (чтение)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#delete-a-workflow-run) (запись) {% ifversion fpt or ghec or ghes %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals`](/rest/reference/actions#get-the-review-history-for-a-workflow-run) (read){% endif %} {% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve`](/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request) (write){% endif %} {% ifversion fpt or ghec or ghae or ghe or ghec > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`](/rest/reference/actions#get-a-workflow-run-attempt) (read){% endif %} {% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`](/rest/reference/actions#download-workflow-run-attempt-logs) (read){% endif %}
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`](/rest/reference/actions#cancel-a-workflow-run) (запись)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#download-workflow-run-logs) (чтение)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#delete-workflow-run-logs) (запись)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun`](/rest/reference/actions#re-run-a-workflow) (запись) {% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`](/rest/reference/actions#re-run-workflow-failed-jobs) (write){% endif %} {% ifversion fpt or ghec or ghae %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing`](/rest/reference/actions#get-workflow-run-usage) (чтение){% endif %}
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`](/rest/reference/actions#list-workflow-runs) (чтение)
- [`GET /repos/{owner}/{repo}/actions/workflows`](/rest/reference/actions#list-repository-workflows) (чтение)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`](/rest/reference/actions#get-a-workflow) (чтение)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`](/rest/reference/actions#disable-a-workflow) (запись)
- [`POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`](/rest/reference/actions#create-a-workflow-dispatch-event) (запись)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`](/rest/reference/actions#enable-a-workflow) (запись) {% ifversion fpt or ghec or ghae %}- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`](/rest/reference/actions#get-workflow-usage) (read){% endif %}

## Администрирование

{% ifversion ghes > 3.4 %}- [`PATCH /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/reference/actions#set-github-actions-cache-usage-policy-for-a-repository) (write){% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (write){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (write){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-a-repository) (read){% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-a-repository) (write){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository) (write){% endif %}
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (запись)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (запись)
- [`POST /orgs/{org}/repos`](/rest/reference/repos#create-an-organization-repository) (запись)
- [`PATCH /repos/{owner}/{repo}`](/rest/reference/repos/#update-a-repository) (запись)
- [`DELETE /repos/{owner}/{repo}`](/rest/reference/repos#delete-a-repository) (запись)
- [`POST /repos/{owner}/{repo}/forks`](/rest/reference/repos#create-a-fork) (запись) {% ifversion ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/replicas/caches`](/rest/reference/repos#list-repository-cache-replication-status) (чтение){% endif %}
- [`GET /repos/{owner}/{repo}/teams`](/rest/reference/repos#list-repository-teams) (чтение)
- [`POST /repos/{owner}/{repo}/transfer`](/rest/reference/repos#transfer-a-repository) (запись)
- [`POST /user/repos`](/rest/reference/repos#create-a-repository-for-the-authenticated-user) (запись)
- [`GET /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-a-repository) (чтение)
- [`PUT /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-a-repository) (запись) {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#get-workflow-access-level-to-a-repository) (read){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`PUT /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#set-workflow-access-to-a-repository) (write){% endif %}
- [`GET /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-a-repository) (чтение)
- [`PUT /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-a-repository) (запись) {% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions-for-a-repository) (read){% endif %} {% ifversion fpt or ghec or ghes > 3.5 %}- [`PUT /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions-for-a-repository) (write){% endif %}
- [`GET /repos/{owner}/{repo}/autolinks`](/v3/repos#list-autolinks) (чтение)
- [`POST /repos/{owner}/{repo}/autolinks`](/v3/repos#create-an-autolink) (запись)
- [`GET /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#get-autolink) (чтение)
- [`DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#delete-autolink) (запись) {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#enable-automated-security-fixes) (write){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#disable-automated-security-fixes) (write){% endif %}
- [`PUT /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#add-a-repository-collaborator) (запись)
- [`DELETE /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#remove-a-repository-collaborator) (запись)
- [`GET /repos/{owner}/{repo}/invitations`](/rest/collaborators/invitations#list-repository-invitations) (чтение)
- [`PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#update-a-repository-invitation) (запись)
- [`DELETE /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#delete-a-repository-invitation) (запись)
- [`GET /user/repository_invitations`](/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user) (чтение)
- [`PATCH /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#accept-a-repository-invitation) (запись)
- [`DELETE /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#decline-a-repository-invitation) (запись)
- [`GET /repos/{owner}/{repo}/keys`](/rest/reference/repos#list-deploy-keys) (чтение)
- [`POST /repos/{owner}/{repo}/keys`](/rest/reference/repos#create-a-deploy-key) (запись)
- [`GET /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#get-a-deploy-key) (чтение)
- [`DELETE /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#delete-a-deploy-key) (запись) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (write){% endif %}
- [`GET /repos/{owner}/{repo}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository) (чтение)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository) (запись) {% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository) (read){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository) (write){% endif %}
- [`GET /repos/{owner}/{repo}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-a-repository) (чтение)
- [`POST /repos/{owner}/{repo}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-a-repository) (запись)
- [`POST /repos/{owner}/{repo}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-a-repository) (запись) {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#list-tag-protection-state-of-a-repository) (read){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#create-tag-protection-state-for-a-repository) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}`](/rest/reference/repos#delete-tag-protection-state-for-a-repository) (write){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository) (чтение){% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#enable-vulnerability-alerts) (write){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#disable-vulnerability-alerts) (write){% endif %}
- [`PUT /repos/{owner}/{repo}/topics`](/rest/reference/repos#replace-all-repository-topics) (запись) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/clones`](/rest/metrics/traffic#get-repository-clones) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/paths`](/rest/metrics/traffic#get-top-referral-paths) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/referrers`](/rest/metrics/traffic#get-top-referral-sources) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/views`](/rest/metrics/traffic#get-page-views) (read){% endif %}

{% ifversion fpt or ghec %}

## Блокировка

- [`GET /user/blocks`](/rest/reference/users#list-users-blocked-by-the-authenticated-user) (чтение)
- [`GET /user/blocks/{username}`](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user) (чтение)
- [`PUT /user/blocks/{username}`](/rest/reference/users#block-a-user) (запись)
- [`DELETE /user/blocks/{username}`](/rest/reference/users#unblock-a-user) (запись)

{% endif %}

## Проверки

- [`POST /repos/{owner}/{repo}/check-runs`](/rest/reference/checks#create-a-check-run) (запись)
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#get-a-check-run) (чтение)
- [`PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#update-a-check-run) (запись)
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`](/rest/reference/checks#list-check-run-annotations) (чтение)
- [`POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest`](/rest/reference/checks#rerequest-a-check-run) (запись)
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs`](/rest/reference/checks#list-check-runs-in-a-check-suite) (чтение)
- [`POST /repos/{owner}/{repo}/check-suites`](/rest/reference/checks#create-a-check-suite) (запись)
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}`](/rest/reference/checks#get-a-check-suite) (чтение)
- [`POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest`](/rest/reference/checks#rerequest-a-check-suite) (запись)
- [`PATCH /repos/{owner}/{repo}/check-suites/preferences`](/rest/reference/checks#update-repository-preferences-for-check-suites) (запись) {% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (read){% endif %}

{% ifversion fpt or ghec %}

## Кодовые пространства

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (чтение)
- [`GET /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user) (чтение)
- [`POST /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#create-a-codespace-in-a-repository) (запись)
- [`GET /repos/{owner}/{repo}/codespaces/new`](/rest/reference/codespaces#preview-attributes-for-a-new-codespace) (запись)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`](/rest/reference/codespaces#create-a-codespace-from-a-pull-request) (запись)
- [`GET /user/codespaces`](/rest/reference/codespaces#list-codespaces-for-the-authenticated-user) (чтение)
- [`POST /user/codespaces`](/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user) (запись)
- [`GET /user/codespaces/{codespace_name}`](/rest/reference/codespaces#get-a-codespace-for-the-authenticated-user) (чтение)
- [`PATCH /user/codespaces/{codespace_name}`](/rest/reference/codespaces#update-a-codespace-for-the-authenticated-user) (запись)
- [`DELETE /user/codespaces/{codespace_name}`](/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user) (запись)

## Администратор жизненного цикла Codespaces

- [`POST /user/codespaces/{codespace_name}/exports`](/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user) (запись)
- [`GET /user/codespaces/{codespace_name}/exports/{export_id}`](/rest/codespaces/codespaces#get-details-about-a-codespace-export) (чтение)
- [`POST /user/codespaces/{codespace_name}/start`](/rest/reference/codespaces#start-a-codespace-for-the-authenticated-user) (запись)
- [`POST /user/codespaces/{codespace_name}/stop`](/rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user) (запись)

## Метаданные Codespaces

- [`GET /repos/{owner}/{repo}/codespaces/devcontainers`](/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user) (чтение)
- [`GET /repos/{owner}/{repo}/codespaces/machines`](/rest/reference/codespaces#list-available-machine-types-for-a-repository) (чтение)
- [`GET /user/codespaces/{codespace_name}/machines`](/rest/reference/codespaces#list-machine-types-for-a-codespace) (чтение)

## Секреты Codespaces

- [`GET /repos/{owner}/{repo}/codespaces/secrets`](/rest/reference/codespaces#list-repository-secrets) (запись)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-repository-secret) (запись)
- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret) (запись)
- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret) (запись)
- [`GET /repos/{owner}/{repo}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-a-repository-public-key) (запись)

## Секреты пользователя Codespaces

- [`GET /user/codespaces/secrets`](/rest/reference/codespaces#list-secrets-for-the-authenticated-user) (чтение)
- [`GET /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-secret-for-the-authenticated-user) (чтение)
- [`PUT /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user) (запись)
- [`DELETE /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user) (запись)
- [`GET /user/codespaces/secrets/public-key`](/rest/reference/codespaces#get-public-key-for-the-authenticated-user) (чтение)
- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (чтение)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (запись)
- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (запись)
- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (запись)

{% endif %}

## Содержимое

{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/codeowners/errors`](/rest/reference/repos#list-codeowners-errors) (read){% endif %}
- [`POST /repos/{owner}/{repo}/git/blobs`](/rest/reference/git#create-a-blob) (запись)
- [`POST /repos/{owner}/{repo}/git/commits`](/rest/reference/git#create-a-commit) (запись)
- [`POST /repos/{owner}/{repo}/git/refs`](/rest/reference/git#create-a-reference) (запись)
- [`POST /repos/{owner}/{repo}/git/tags`](/rest/reference/git#create-a-tag-object) (запись)
- [`POST /repos/{owner}/{repo}/git/trees`](/rest/reference/git#create-a-tree) (запись) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import`](/rest/reference/migrations#get-an-import-status) (read){% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/import`](/rest/reference/migrations#start-an-import) (write){% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import`](/rest/reference/migrations#update-an-import) (write){% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/import`](/rest/reference/migrations#cancel-an-import) (write){% endif %} {%% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/authors`](/rest/reference/migrations#get-commit-authors) (read){% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/authors/{author_id}`](/rest/reference/migrations#map-a-commit-author) (write){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/large_files`](/rest/reference/migrations#get-large-files) (read){% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/lfs`](/rest/reference/migrations#update-git-lfs-preference) (write){% endif %}
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#merge-a-pull-request) (запись)
- [`POST /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-commit-comment) (запись)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-commit-comment-reaction) (запись)
- [`GET /repos/{owner}/{repo}/branches`](/rest/reference/repos#list-branches) (чтение)
- [`POST /repos/{owner}/{repo}/merge-upstream`](/rest/reference/repos#sync-a-fork-branch-with-the-upstream-repository) (запись)
- [`POST /repos/{owner}/{repo}/merges`](/rest/reference/repos#merge-a-branch) (запись) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases`](/rest/reference/code-scanning#list-codeql-databases) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`](/rest/reference/code-scanning#get-codeql-database) (read){% endif %}
- [`PATCH /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#update-a-commit-comment) (запись)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#delete-a-commit-comment) (запись)
- [`GET /repos/{owner}/{repo}/commits`](/rest/commits/commits#list-commits) (чтение) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/community/profile`](/rest/metrics/community#get-community-profile-metrics) (read){% endif %} {% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (read){% endif %}
- [`POST /repos/{owner}/{repo}/dispatches`](/rest/reference/repos#create-a-repository-dispatch-event) (запись)
- [`GET /repos/{owner}/{repo}/releases`](/rest/reference/repos#list-releases) (чтение)
- [`POST /repos/{owner}/{repo}/releases`](/rest/reference/repos#create-a-release) (запись)
- [`GET /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#get-a-release) (чтение)
- [`PATCH /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#update-a-release) (запись)
- [`DELETE /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#delete-a-release) (запись)
- [`GET /repos/{owner}/{repo}/releases/{release_id}/assets`](/rest/reference/repos#list-release-assets) (чтение)
- [`GET /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#get-a-release-asset) (чтение)
- [`PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#update-a-release-asset) (запись)
- [`DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#delete-a-release-asset) (запись) {% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/releases/generate-notes`](/rest/reference/repos#generate-release-notes) (write){% endif %}
- [`GET /repos/{owner}/{repo}/releases/latest`](/rest/reference/repos#get-the-latest-release) (чтение)

{% ifversion fpt or ghec or ghes > 3.3 %}

## Секреты Dependabot

- [`GET /repos/{owner}/{repo}/dependabot/secrets`](/rest/reference/dependabot#list-repository-secrets) (чтение)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-a-repository-secret) (чтение)
- [`PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-a-repository-secret) (запись)
- [`DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-a-repository-secret) (запись)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-a-repository-public-key) (чтение)

{% endif %}

## Развернутые приложения

{% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run) (read){% endif %}
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#list-deployment-statuses) (чтение)
- [`POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#create-a-deployment-status) (запись)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`](/rest/reference/repos#get-a-deployment-status) (чтение)
- [`GET /repos/{owner}/{repo}/deployments`](/rest/reference/repos#list-deployments) (чтение)
- [`POST /repos/{owner}/{repo}/deployments`](/rest/reference/repos#create-a-deployment) (запись)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#get-a-deployment) (чтение)
- [`DELETE /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#delete-a-deployment) (запись)

{% ifversion fpt or ghec or ghes %}

## Адреса электронной почты

{% ifversion fpt or ghec %}- [`PATCH /user/email/visibility`](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) (write){% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /user/emails`](/rest/reference/users#list-email-addresses-for-the-authenticated-user) (read){% endif %} {% ifversion fpt or ghec or ghes %}- [`POST /user/emails`](/rest/reference/users#add-an-email-address-for-the-authenticated-user) (write){% endif %} {% ifversion fpt or ghec or ghes %}- [`DELETE /user/emails`](/rest/reference/users#delete-an-email-address-for-the-authenticated-user) (write){% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /user/public_emails`](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user) (чтение){% endif %}

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## Корпоративное администрирование

{% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /enterprises/{enterprise}/settings/billing/advanced-security`](/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise) (запись){% endif %} {% ifversion ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/reference/actions#get-github-actions-cache-usage-policy-for-an-enterprise) (write){% endif %} {% ifversion ghes > 3.4 %}- [`PATCH /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/reference/actions#set-github-actions-cache-usage-policy-for-an-enterprise) (write){% endif %}

{% endif %}

## Подписчики

- [`GET /user/followers`](/rest/reference/users#list-followers-of-the-authenticated-user) (чтение)
- [`GET /user/following`](/rest/reference/users#list-the-people-the-authenticated-user-follows) (чтение)
- [`GET /user/following/{username}`](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user) (чтение)
- [`PUT /user/following/{username}`](/rest/reference/users#follow-a-user) (запись)
- [`DELETE /user/following/{username}`](/rest/reference/users#unfollow-a-user) (запись)

## Gist

- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (запись)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (запись)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (запись)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (запись)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (запись)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (запись)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (запись)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (запись)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (запись)

{% ifversion fpt or ghec or ghes > 3.6 %}

## Открытые ключи SSH для подписывания Git

- [`GET /user/ssh_signing_keys`](/rest/reference/users#list-public-ssh-signing-keys-for-the-authenticated-user) (чтение)
- [`POST /user/ssh_signing_keys`](/rest/reference/users#create-an-ssh-signing-key-for-the-authenticated-user) (запись)
- [`GET /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#get-a-ssh-signing-key-for-the-authenticated-user) (чтение)
- [`DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#delete-a-ssh-signing-key-for-the-authenticated-user) (запись)

{% endif %}

## Ключи GPG

- [`GET /user/gpg_keys`](/rest/reference/users#list-gpg-keys-for-the-authenticated-user) (чтение)
- [`POST /user/gpg_keys`](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user) (запись)
- [`GET /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user) (чтение)
- [`DELETE /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user) (запись)

{% ifversion fpt or ghec %}

## Ограничения взаимодействия

- [`PUT /user/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories) (запись)
- [`GET /user/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories) (чтение)
- [`DELETE /user/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories) (запись)

{% endif %}

## Проблемы

- [`POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#add-assignees-to-an-issue) (запись)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#remove-assignees-from-an-issue) (запись)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#list-issue-comments) (чтение)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#create-an-issue-comment) (запись)
- [`GET /repos/{owner}/{repo}/issues/comments`](/rest/reference/issues#list-issue-comments-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#get-an-issue-comment) (чтение)
- [`PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#update-an-issue-comment) (запись)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#delete-an-issue-comment) (запись)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/events`](/rest/reference/issues#list-issue-events) (чтение)
- [`GET /repos/{owner}/{repo}/issues/events`](/rest/reference/issues#list-issue-events-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/issues/events/{event_id}`](/rest/reference/issues#get-an-issue-event) (чтение)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`](/rest/reference/issues#list-timeline-events-for-an-issue) (чтение)
- [`GET /repos/{owner}/{repo}/assignees`](/rest/reference/issues#list-assignees) (чтение)
- [`GET /repos/{owner}/{repo}/issues`](/rest/reference/issues#list-repository-issues) (чтение)
- [`POST /repos/{owner}/{repo}/issues`](/rest/reference/issues#create-an-issue) (запись)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues#get-an-issue) (чтение)
- [`PATCH /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues/#update-an-issue) (запись)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#lock-an-issue) (запись)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#unlock-an-issue) (запись)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#list-labels-for-an-issue) (чтение)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#add-labels-to-an-issue) (запись)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#set-labels-for-an-issue) (запись)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#remove-all-labels-from-an-issue) (запись)
- [`GET /repos/{owner}/{repo}/labels`](/rest/reference/issues#list-labels-for-a-repository) (чтение)
- [`POST /repos/{owner}/{repo}/labels`](/rest/reference/issues#create-a-label) (запись)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`](/rest/reference/issues#list-labels-for-issues-in-a-milestone) (чтение)
- [`GET /repos/{owner}/{repo}/milestones`](/rest/reference/issues#list-milestones) (чтение)
- [`POST /repos/{owner}/{repo}/milestones`](/rest/reference/issues#create-a-milestone) (запись)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#get-a-milestone) (чтение)
- [`PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#update-a-milestone) (запись)
- [`DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#delete-a-milestone) (запись)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue) (чтение)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue) (запись)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-reaction) (запись)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue-comment) (чтение)
- [`POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue-comment) (запись)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-comment-reaction) (запись)

## Ключи

- [`GET /user/keys`](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user) (чтение)
- [`POST /user/keys`](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user) (запись)
- [`GET /user/keys/{key_id}`](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user) (чтение)
- [`DELETE /user/keys/{key_id}`](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user) (запись)

## Элементы

{% ifversion ghec or ghae or ghes > 3.5 %}- [`PATCH /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#link-external-idp-group-team-connection) (write){% endif %} {% ifversion ghec or ghae or ghes > 3. 5 %}- [`DELETE /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#unlink-external-idp-group-team-connection) (запись){% endif %} {% ifversion ghec or ghae or ghes > 3.5 %}- [`GET /orgs/{org}/external-group/{group_id}`](/rest/reference/teams#external-idp-group-info-for-an-organization) (write){% endif %} {% ifversion or ghae or ghes > 3.5 %}- [`GET /orgs/{org}/external-groups`](/rest/reference/teams#list-external-idp-groups-for-an-organization) (write){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/failed_invitations`](/rest/reference/orgs#list-failed-organization-invitations) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations`](/rest/reference/orgs#list-pending-organization-invitations) (read){% endif %} {% ifversion fpt or ghec %}- [`POST /orgs/{org}/invitations`](/rest/reference/orgs#create-an-organization-invitation) (write){% endif %} {% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/invitations/{invitation_id}`](/rest/reference/orgs#cancel-an-organization-invitation)  (запись) {% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations/{invitation_id}/teams`](/rest/reference/orgs#list-organization-invitation-teams) (read){% endif %}
- [`GET /orgs/{org}/members`](/rest/reference/orgs#list-organization-members) (чтение)
- [`GET /orgs/{org}/members/{username}`](/rest/reference/orgs#check-organization-membership-for-a-user) (чтение)
- [`DELETE /orgs/{org}/members/{username}`](/rest/reference/orgs#remove-an-organization-member) (запись)
- [`GET /orgs/{org}/memberships/{username}`](/rest/reference/orgs#get-organization-membership-for-a-user) (чтение)
- [`PUT /orgs/{org}/memberships/{username}`](/rest/reference/orgs#set-organization-membership-for-a-user) (запись)
- [`DELETE /orgs/{org}/memberships/{username}`](/rest/reference/orgs#remove-organization-membership-for-a-user) (запись) {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/public_members`](/rest/reference/orgs#list-public-organization-members) (read){% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/public_members/{username}`](/rest/reference/orgs#check-public-organization-membership-for-a-user) (read){% endif %} {% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/public_members/{username}`](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user) (write){% endif %} {% ifversion fpt or ghec or ghes %}- [`DELETE /orgs/{org}/public_members/{username}`](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user) (write){% endif %}
- [`GET /orgs/{org}/outside_collaborators`](/rest/reference/orgs#list-outside-collaborators-for-an-organization) (чтение)
- [`PUT /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator) (запись)
- [`DELETE /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#remove-outside-collaborator-from-an-organization) (запись)
- [`GET /orgs/{org}/teams/{team_slug}/projects`](/rest/reference/teams#list-team-projects) (чтение)
- [`GET /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#check-team-permissions-for-a-project) (чтение)
- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions) (чтение)
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team) (чтение)
- [`GET /orgs/{org}/teams/{team_slug}/repos`](/rest/reference/teams#list-team-repositories) (чтение)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (чтение)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (чтение)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (чтение)
- [`PATCH /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#update-a-team) (запись)
- [`DELETE /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#delete-a-team) (запись) {% ifversion fpt or ghec %}- [`GET /orgs/{org}/teams/{team_slug}/invitations`](/rest/reference/teams#list-pending-team-invitations) (read){% endif %}
- [`GET /orgs/{org}/teams/{team_slug}/members`](/rest/reference/teams#list-team-members) (чтение)
- [`GET /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#get-team-membership-for-a-user) (чтение)
- [`PUT /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#add-or-update-team-membership-for-a-user) (запись)
- [`DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#remove-team-membership-for-a-user) (запись)
- [`GET /orgs/{org}/teams/{team_slug}/teams`](/rest/reference/teams#list-child-teams) (чтение)
- [`GET /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#get-a-team-by-name) (чтение)
- [`GET /orgs/{org}/teams`](/rest/reference/teams#list-teams) (чтение)
- [`POST /orgs/{org}/teams`](/rest/reference/teams#create-a-team) (запись)
- [`GET /user/memberships/orgs/{org}`](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user) (чтение)
- [`PATCH /user/memberships/orgs/{org}`](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user) (запись)

## Метаданные

{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret) (read){% endif %} {% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret) (read){% endif %} {% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret) (read){% endif %} {% ifversion fpt or ghec %}- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) (read){% endif %}
- [`GET /repos/{owner}/{repo}/events`](/rest/reference/activity#list-repository-events) (чтение)
- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment) (чтение)
- [`GET /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#get-a-gist-comment) (чтение)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment) (чтение)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment) (чтение)
- [`POST /gists`](/rest/reference/gists#create-a-gist) (чтение)
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist) (чтение)
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist) (чтение)
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist) (чтение)
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist) (чтение)
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist) (чтение)
- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user) (чтение)
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository) (чтение)
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions) (чтение)
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team) (чтение)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-commit-comment) (чтение)
- [`GET /orgs/{org}/repos`](/rest/reference/repos#list-organization-repositories) (чтение) {% ifversion fpt or ghec or ghes %}- [`GET /repositories`](/rest/reference/repos#list-public-repositories) (чтение){% endif %}
- [`GET /repos/{owner}/{repo}`](/rest/reference/repos#get-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/contributors`](/rest/reference/repos#list-repository-contributors) (чтение)
- [`GET /repos/{owner}/{repo}/forks`](/rest/reference/repos#list-forks) (чтение)
- [`GET /repos/{owner}/{repo}/languages`](/rest/reference/repos#list-repository-languages) (чтение)
- [`GET /repos/{owner}/{repo}/tags`](/rest/reference/repos#list-repository-tags) (чтение)
- [`GET /users/{username}/repos`](/rest/reference/repos#list-repositories-for-a-user) (чтение)
- [`GET /user/repos`](/rest/reference/repos#list-repositories-for-the-authenticated-user) (чтение)
- [`GET /repos/{owner}/{repo}/stargazers`](/rest/reference/activity#list-stargazers) (чтение)
- [`GET /repos/{owner}/{repo}/subscribers`](/rest/reference/activity#list-watchers) (чтение)
- [`GET /repos/{owner}/{repo}/collaborators`](/rest/collaborators/collaborators#list-repository-collaborators) (чтение)
- [`GET /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator) (чтение)
- [`GET /repos/{owner}/{repo}/collaborators/{username}/permission`](/rest/collaborators/collaborators#get-repository-permissions-for-a-user) (чтение)
- [`GET /repos/{owner}/{repo}/comments`](/rest/commits/comments#list-commit-comments-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#get-a-commit-comment) (чтение)
- [`GET /repos/{owner}/{repo}/license`](/rest/reference/licenses/#get-the-license-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/stats/code_frequency`](/rest/metrics/statistics#get-the-weekly-commit-activity) (чтение)
- [`GET /repos/{owner}/{repo}/stats/commit_activity`](/rest/metrics/statistics#get-the-last-year-of-commit-activity) (чтение)
- [`GET /repos/{owner}/{repo}/stats/contributors`](/rest/metrics/statistics#get-all-contributor-commit-activity) (чтение)
- [`GET /repos/{owner}/{repo}/stats/participation`](/rest/metrics/statistics#get-the-weekly-commit-count) (чтение)
- [`GET /repos/{owner}/{repo}/stats/punch_card`](/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day) (чтение)
- [`GET /search/labels`](/rest/reference/search#search-labels) (чтение)
- [`GET /repos/{owner}/{repo}/topics`](/rest/reference/repos#get-all-repository-topics) (чтение)

## Уведомления

- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user) (чтение)

## администрирование организации;

{% ifversion ghec or ghae or ghes %}- [`GET /orgs/{org}/audit-log`](/rest/reference/orgs#get-audit-log) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-an-organization) (read){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /orgs/{org}/settings/billing/advanced-security`](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-an-organization) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-an-organization) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /enterprise-installation/{enterprise_or_org}/server-statistics`](/rest/reference/enterprise-admin#get-github-enterprise-server-statistics) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-an-organization) (read){% endif %} {% ifversion fpt or ghec %}- [`PUT /orgs/{org}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-an-organization) (write){% endif %} {% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization)  (запись) {% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-organization) (чтение){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/cache/usage-by-repository`](/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization) (чтение){% endif %}
- [`GET /orgs/{org}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-an-organization) (чтение)
- [`PUT /orgs/{org}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-an-organization) (запись)
- [`GET /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization) (чтение)
- [`PUT /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization) (запись)
- [`GET /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-an-organization) (чтение)
- [`PUT /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-an-organization) (запись) {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions) (read){% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`PUT /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`GET /orgs/{org}/security-managers`](/rest/reference/orgs#list-security-manager-teams) (чтение){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`PUT /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#add-a-security-manager-team) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#remove-a-security-manager-team) (write){% endif %}
- [`PATCH /orgs/{org}`](/rest/reference/orgs/#update-an-organization) (запись)
- [`GET /orgs/{org}/installations`](/rest/reference/orgs#list-app-installations-for-an-organization) (чтение)

{% ifversion fpt or ghec %}

## Кодовые пространства организации

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization) (чтение)

## Секреты codespaces организации

- [`GET /orgs/{org}/codespaces/secrets`](/rest/reference/codespaces#list-organization-secrets) (чтение)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-an-organization-secret) (чтение)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-an-organization-secret) (запись)
- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-an-organization-secret) (запись)
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret) (чтение)
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret) (запись)
- [`GET /orgs/{org}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-an-organization-public-key) (чтение)

## Параметры пространств кода организации

- [`PUT /orgs/{org}/codespaces/billing`](/rest/reference/codespaces#set-codespaces-billing) (запись)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## Настраиваемые роли организации

- [`GET /organizations/{organization_id}/custom_roles`](/rest/reference/orgs#list-custom-repository-roles-in-an-organization) (чтение)
- [`GET /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs/#get-a-custom-role) (чтение)
- [`PATCH /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#update-a-custom-role) (запись)
- [`DELETE /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#delete-a-custom-role) (запись)
- [`GET /orgs/{org}/fine_grained_permissions`](/rest/reference/orgs#list-fine-grained-permissions-for-an-organization) (чтение)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## Секреты зависимостей организации

- [`GET /orgs/{org}/dependabot/secrets`](/rest/reference/dependabot#list-organization-secrets) (чтение)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-an-organization-secret) (чтение)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-an-organization-secret) (запись)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-an-organization-secret) (запись)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret) (чтение)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret) (запись)
- [`GET /orgs/{org}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-an-organization-public-key) (чтение)

{% endif %}

## События организации

- [`GET /users/{username}/events/orgs/{org}`](/rest/reference/activity#list-organization-events-for-the-authenticated-user) (чтение)

## Перехватчики организации

- [`GET /orgs/{org}/hooks`](/rest/reference/orgs#list-organization-webhooks) (чтение)
- [`POST /orgs/{org}/hooks`](/rest/reference/orgs#create-an-organization-webhook) (запись)
- [`GET /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#get-an-organization-webhook) (чтение)
- [`PATCH /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#update-an-organization-webhook) (запись)
- [`DELETE /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#delete-an-organization-webhook) (запись)
- [`GET /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization) (чтение)
- [`PATCH /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization) (запись)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries`](/rest/reference/orgs#list-deliveries-for-an-organization-webhook) (чтение)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook) (чтение)
- [`POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook) (запись)
- [`POST /orgs/{org}/hooks/{hook_id}/pings`](/rest/reference/orgs#ping-an-organization-webhook) (запись)

{% ifversion ghes %}

## Перехватчики предварительного получения организации

- [`GET /orgs/{org}/pre-receive-hooks`](/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization) (чтение)
- [`GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization) (чтение)
- [`PATCH /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization) (запись)
- [`DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) (запись)

{% endif %}

## Проекты организации

- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions) (администратор)
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team) (администратор)
- [`GET /orgs/{org}/projects`](/rest/reference/projects#list-organization-projects) (чтение)
- [`POST /orgs/{org}/projects`](/rest/reference/projects#create-an-organization-project) (запись)

## Секреты организации

- [`GET /orgs/{org}/actions/secrets`](/rest/reference/actions#list-organization-secrets) (чтение)
- [`GET /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#get-an-organization-secret) (чтение)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-an-organization-secret) (запись)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-an-organization-secret) (запись)
- [`GET /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#list-selected-repositories-for-an-organization-secret) (чтение)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#set-selected-repositories-for-an-organization-secret) (запись)
- [`GET /orgs/{org}/actions/secrets/public-key`](/rest/reference/actions#get-an-organization-public-key) (чтение)

## Локальные средства выполнения тестов организации

- [`GET /orgs/{org}/actions/runner-groups`](/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization) (чтение)
- [`POST /orgs/{org}/actions/runner-groups`](/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization) (запись)
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization) (чтение)
- [`PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization) (запись)
- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization) (запись) {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization) (read){% endif %} {% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization) (write){% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization) (read){% endif %} {% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) (write){% endif %}
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization) (запись) {% ifversion fpt or ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) (write){% endif %}
- [`GET /orgs/{org}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-an-organization) (чтение)
- [`GET /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization) (чтение)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization) (запись) {% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization) (read){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`POST /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`PUT /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization) (write){% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization) (write){% endif %}
- [`GET /orgs/{org}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-an-organization) (чтение)
- [`POST /orgs/{org}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-an-organization) (запись)
- [`POST /orgs/{org}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-an-organization) (запись)

{% ifversion fpt or ghec %}

## Блокировка пользователей организации

- [`GET /orgs/{org}/blocks`](/rest/reference/orgs#list-users-blocked-by-an-organization) (чтение)
- [`GET /orgs/{org}/blocks/{username}`](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization) (чтение)
- [`PUT /orgs/{org}/blocks/{username}`](/rest/reference/orgs#block-a-user-from-an-organization) (запись)
- [`DELETE /orgs/{org}/blocks/{username}`](/rest/reference/orgs#unblock-a-user-from-an-organization) (запись)

{% endif %}

## Страницы

- [`GET /repos/{owner}/{repo}/pages`](/rest/pages#get-a-github-pages-site) (чтение)
- [`PUT /repos/{owner}/{repo}/pages`](/rest/pages#update-information-about-a-github-pages-site) (запись)
- [`GET /repos/{owner}/{repo}/pages/builds`](/rest/pages#list-github-pages-builds) (чтение)
- [`POST /repos/{owner}/{repo}/pages/builds`](/rest/pages#request-a-github-pages-build) (запись)
- [`GET /repos/{owner}/{repo}/pages/builds/{build_id}`](/rest/pages#get-github-pages-build) (чтение)
- [`GET /repos/{owner}/{repo}/pages/builds/latest`](/rest/pages#get-latest-pages-build) (чтение) {% ifversion fpt or ghec or ghes > 3.6 %}- [`POST /repos/{owner}/{repo}/pages/deployment`](/rest/pages#create-a-github-pages-deployment) (write){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (write){% endif %}

{% ifversion fpt or ghec %}

## Планирование

- [`GET /users/{username}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-a-user) (чтение)
- [`GET /users/{username}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-a-user) (чтение)
- [`GET /users/{username}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-a-user) (чтение)

{% endif %}

## Профиль

- [`PATCH /user`](/rest/reference/users/#update-the-authenticated-user) (запись)

## Запросы на вытягивание

- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#list-review-comments-on-a-pull-request) (чтение)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#create-a-review-comment-for-a-pull-request) (запись)
- [`GET /repos/{owner}/{repo}/pulls/comments`](/rest/reference/pulls#list-review-comments-in-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#get-a-review-comment-for-a-pull-request) (чтение)
- [`PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#update-a-review-comment-for-a-pull-request) (запись)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request) (запись)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`](/rest/reference/pulls#dismiss-a-review-for-a-pull-request) (запись)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`](/rest/reference/pulls#submit-a-review-for-a-pull-request) (запись)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#get-all-requested-reviewers-for-a-pull-request) (чтение)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#request-reviewers-for-a-pull-request) (запись)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request) (запись)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#list-reviews-for-a-pull-request) (чтение)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#create-a-review-for-a-pull-request) (запись)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#get-a-review-for-a-pull-request) (чтение)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#update-a-review-for-a-pull-request) (запись)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#delete-a-pending-review-for-a-pull-request) (запись)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`](/rest/reference/pulls#list-comments-for-a-pull-request-review) (чтение)
- [`GET /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#list-pull-requests) (чтение)
- [`POST /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#create-a-pull-request) (запись)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) (чтение)
- [`PATCH /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls/#update-a-pull-request) (запись)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/commits`](/rest/reference/pulls#list-commits-on-a-pull-request) (чтение)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/files`](/rest/reference/pulls#list-pull-requests-files) (чтение)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#check-if-a-pull-request-has-been-merged) (чтение)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch`](/rest/reference/pulls#update-a-pull-request-branch) (запись)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment) (чтение)
- [`POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment) (запись)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-pull-request-comment-reaction) (запись) {% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (чтение){% endif %}

## Перехватчики репозитория

- [`GET /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#list-repository-webhooks) (чтение)
- [`POST /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#create-a-repository-webhook) (запись)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#get-a-repository-webhook) (чтение)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#update-a-repository-webhook) (запись)
- [`DELETE /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#delete-a-repository-webhook) (запись)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository) (чтение)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository) (запись)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries`](/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook) (чтение)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook) (чтение)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook) (запись)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/pings`](/rest/webhooks/repos#ping-a-repository-webhook) (чтение)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/tests`](/rest/webhooks/repos#test-the-push-repository-webhook) (чтение)

{% ifversion ghes %}

## Перехватчики предварительного получения репозитория

- [`GET /repos/{owner}/{repo}/pre-receive-hooks`](/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository) (чтение)
- [`PATCH /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository) (запись)
- [`DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) (запись)

{% endif %}

## Проекты репозитория

- [`GET /projects/{project_id}/collaborators`](/rest/reference/projects#list-project-collaborators) (запись)
- [`PUT /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#add-project-collaborator) (запись)
- [`DELETE /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#remove-project-collaborator) (запись)
- [`GET /projects/{project_id}/collaborators/{username}/permission`](/rest/reference/projects#get-project-permission-for-a-user) (запись)
- [`GET /projects/{project_id}`](/rest/reference/projects#get-a-project) (чтение)
- [`PATCH /projects/{project_id}`](/rest/reference/projects#update-a-project) (запись)
- [`DELETE /projects/{project_id}`](/rest/reference/projects#delete-a-project) (запись)
- [`GET /projects/{project_id}/columns`](/rest/reference/projects#list-project-columns) (чтение)
- [`POST /projects/{project_id}/columns`](/rest/reference/projects#create-a-project-column) (запись)
- [`GET /projects/columns/{column_id}`](/rest/reference/projects#get-a-project-column) (чтение)
- [`PATCH /projects/columns/{column_id}`](/rest/reference/projects#update-a-project-column) (запись)
- [`DELETE /projects/columns/{column_id}`](/rest/reference/projects#delete-a-project-column) (запись)
- [`GET /projects/columns/{column_id}/cards`](/rest/reference/projects#list-project-cards) (чтение)
- [`POST /projects/columns/{column_id}/cards`](/rest/reference/projects#create-a-project-card) (запись)
- [`POST /projects/columns/{column_id}/moves`](/rest/reference/projects#move-a-project-column) (запись)
- [`GET /projects/columns/cards/{card_id}`](/rest/reference/projects#get-a-project-card) (чтение)
- [`PATCH /projects/columns/cards/{card_id}`](/rest/reference/projects#update-a-project-card) (запись)
- [`DELETE /projects/columns/cards/{card_id}`](/rest/reference/projects#delete-a-project-card) (запись)
- [`POST /projects/columns/cards/{card_id}/moves`](/rest/reference/projects#move-a-project-card) (запись)
- [`GET /repos/{owner}/{repo}/projects`](/rest/reference/projects#list-repository-projects) (чтение)
- [`POST /repos/{owner}/{repo}/projects`](/rest/reference/projects#create-a-repository-project) (запись)

## Оповещения о проверке секретов

{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization) (read){% endif %}
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#get-a-secret-scanning-alert) (чтение)
- [`PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#update-a-secret-scanning-alert) (запись)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`](/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert) (чтение)

## Секреты

- [`GET /repos/{owner}/{repo}/actions/secrets`](/rest/reference/actions#list-repository-secrets) (чтение)
- [`GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#get-a-repository-secret) (чтение)
- [`PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-a-repository-secret) (запись)
- [`DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-a-repository-secret) (запись)
- [`GET /repos/{owner}/{repo}/actions/secrets/public-key`](/rest/reference/actions#get-a-repository-public-key) (чтение)

## События безопасности

{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /orgs/{org}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-by-organization) (read){% endif %}
- [`GET /repos/{owner}/{repo}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#get-a-code-scanning-alert) (чтение)
- [`PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#update-a-code-scanning-alert) (запись)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`](/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert) (чтение)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses`](/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository) (чтение)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository) (чтение)
- [`DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository) (запись)
- [`GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`](/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository) (чтение)
- [`POST /repos/{owner}/{repo}/code-scanning/sarifs`](/rest/reference/code-scanning#upload-a-sarif-file) (запись) {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts`](/rest/reference/dependabot#list-dependabot-alerts-for-a-repository) (read){% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#get-a-dependabot-alert) (read){% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#update-a-dependabot-alert) (write){% endif %}

## Добавление в избранное

- [`GET /users/{username}/starred`](/rest/reference/activity#list-repositories-starred-by-a-user) (чтение)
- [`GET /user/starred`](/rest/reference/activity#list-repositories-starred-by-the-authenticated-user) (чтение)
- [`GET /user/starred/{owner}/{repo}`](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user) (чтение)
- [`PUT /user/starred/{owner}/{repo}`](/rest/reference/activity#star-a-repository-for-the-authenticated-user) (запись)
- [`DELETE /user/starred/{owner}/{repo}`](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user) (запись)

## Состояния

- [`POST /repos/{owner}/{repo}/statuses/{sha}`](/rest/commits/statuses#create-a-commit-status) (запись)

## Обсуждения в команде

- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) (чтение)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment) (запись)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-comment-reaction) (запись)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion) (чтение)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion) (запись)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-reaction) (запись)
- [`GET /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#list-discussions) (чтение)
- [`POST /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#create-a-discussion) (запись)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#get-a-discussion) (чтение)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#update-a-discussion) (запись)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#delete-a-discussion) (запись)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#list-discussion-comments) (чтение)
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#create-a-discussion-comment) (запись)
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#get-a-discussion-comment) (чтение)
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#update-a-discussion-comment) (запись)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#delete-a-discussion-comment) (запись)

{% ifversion fpt or ghec %}

## Оповещения об уязвимостях

- [`GET /orgs/{org}/dependabot/alerts`](/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization) (чтение)

{% endif %}

## Наблюдение

- [`GET /users/{username}/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user) (чтение)
- [`GET /user/subscriptions`](/rest/reference/activity#list-repositories-watched-by-the-authenticated-user) (чтение)
