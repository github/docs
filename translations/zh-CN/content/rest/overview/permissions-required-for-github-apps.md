---
title: GitHub 应用程序所需的权限
intro: '您可以找到每个 {% data variables.product.prodname_github_app %} 兼容端点所需的权限。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184243'
---
## 关于 {% data variables.product.prodname_github_app %} 权限

{% data variables.product.prodname_github_apps %} 是用一组权限创建的。 权限定义了 {% data variables.product.prodname_github_app %} 可以通过 API 访问哪些资源。 有关详细信息，请参阅“[设置 GitHub 应用程序的权限](/apps/building-github-apps/setting-permissions-for-github-apps/)”。

## 操作

{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-a-repository)（读取）{% endif %} {% ifversion ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/reference/actions#get-github-actions-cache-usage-policy-for-a-repository)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`GET /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#list-github-actions-caches-for-a-repository)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}`](/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id)（写入）{% endif %}
- [`GET /repos/{owner}/{repo}/actions/artifacts`](/rest/reference/actions#list-artifacts-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#get-an-artifact)（读）
- [`DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/reference/actions#delete-an-artifact)（写）
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`](/rest/reference/actions#list-workflow-run-artifacts)（读取）{% ifversion fpt or ghec or ghes %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#get-pending-deployments-for-a-workflow-run)（读取）{% endif %} {% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run)（读取）{% endif %}
- [`GET /repos/{owner}/{repo}/environments`](/rest/deployments/environments#list-environments)（读）
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}`](/rest/reference/actions#get-a-job-for-a-workflow-run)（读）
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs`](/rest/reference/actions#download-job-logs-for-a-workflow-run)（读取）{% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`](/rest/reference/actions#re-run-job-for-workflow-run)（写入）{% endif %} {% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run-attempt)（读取）{% endif %}
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs`](/rest/reference/actions#list-jobs-for-a-workflow-run)（读）
- [`GET /repos/{owner}/{repo}/actions/runs`](/rest/reference/actions#list-workflow-runs-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#get-a-workflow-run)（读）
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/reference/actions#delete-a-workflow-run)（写入）{% ifversion fpt or ghec or ghes %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals`](/rest/reference/actions#get-the-review-history-for-a-workflow-run)（读取）{% endif %} {% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve`](/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request)（写入）{% endif %} {% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`](/rest/reference/actions#get-a-workflow-run-attempt)（读取）{% endif %} {% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`](/rest/reference/actions#download-workflow-run-attempt-logs)（读取）{% endif %}
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`](/rest/reference/actions#cancel-a-workflow-run)（写）
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#download-workflow-run-logs)（读）
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/reference/actions#delete-workflow-run-logs)（写）
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun`](/rest/reference/actions#re-run-a-workflow)（写入）{% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`](/rest/reference/actions#re-run-workflow-failed-jobs)（写入）{% endif %} {% ifversion fpt or ghec or ghae %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing`](/rest/reference/actions#get-workflow-run-usage)（读取）{% endif %}
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`](/rest/reference/actions#list-workflow-runs)（读）
- [`GET /repos/{owner}/{repo}/actions/workflows`](/rest/reference/actions#list-repository-workflows)（读）
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`](/rest/reference/actions#get-a-workflow)（读）
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`](/rest/reference/actions#disable-a-workflow)（写）
- [`POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`](/rest/reference/actions#create-a-workflow-dispatch-event)（写）
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`](/rest/reference/actions#enable-a-workflow)（写入）{% ifversion fpt or ghec or ghae %}- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`](/rest/reference/actions#get-workflow-usage)（读取）{% endif %}

## 管理

{% ifversion ghes > 3.4 %}- [`PATCH /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/reference/actions#set-github-actions-cache-usage-policy-for-a-repository)（写入）{% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret)（写入）{% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret)（写入）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-a-repository)（读取）{% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-a-repository)（写入）{% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository)（写入）{% endif %}
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions)（写）
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team)（写）
- [`POST /orgs/{org}/repos`](/rest/reference/repos#create-an-organization-repository)（写）
- [`PATCH /repos/{owner}/{repo}`](/rest/reference/repos/#update-a-repository)（写）
- [`DELETE /repos/{owner}/{repo}`](/rest/reference/repos#delete-a-repository)（写）
- [`POST /repos/{owner}/{repo}/forks`](/rest/reference/repos#create-a-fork)（写入）{% ifversion ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/replicas/caches`](/rest/reference/repos#list-repository-cache-replication-status)（读取）{% endif %}
- [`GET /repos/{owner}/{repo}/teams`](/rest/reference/repos#list-repository-teams)（读）
- [`POST /repos/{owner}/{repo}/transfer`](/rest/reference/repos#transfer-a-repository)（写）
- [`POST /user/repos`](/rest/reference/repos#create-a-repository-for-the-authenticated-user)（写）
- [`GET /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-a-repository)（读）
- [`PUT /repos/{owner}/{repo}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-a-repository)（写入）{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#get-workflow-access-level-to-a-repository)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`PUT /repos/{owner}/{repo}/actions/permissions/access`](/rest/reference/actions#set-workflow-access-to-a-repository)（写入）{% endif %}
- [`GET /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-a-repository)（读）
- [`PUT /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-a-repository)（写入）{% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions-for-a-repository)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.5 %}- [`PUT /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions-for-a-repository)（写入）{% endif %}
- [`GET /repos/{owner}/{repo}/autolinks`](/v3/repos#list-autolinks)（读）
- [`POST /repos/{owner}/{repo}/autolinks`](/v3/repos#create-an-autolink)（写）
- [`GET /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#get-autolink)（读）
- [`DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}`](/v3/repos#delete-autolink)（写入）{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#enable-automated-security-fixes)（写入）{% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/automated-security-fixes`](/rest/reference/repos#disable-automated-security-fixes)（写入）{% endif %}
- [`PUT /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#add-a-repository-collaborator)（写）
- [`DELETE /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#remove-a-repository-collaborator)（写）
- [`GET /repos/{owner}/{repo}/invitations`](/rest/collaborators/invitations#list-repository-invitations)（读）
- [`PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#update-a-repository-invitation)（写）
- [`DELETE /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#delete-a-repository-invitation)（写）
- [`GET /user/repository_invitations`](/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user)（读）
- [`PATCH /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#accept-a-repository-invitation)（写）
- [`DELETE /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#decline-a-repository-invitation)（写）
- [`GET /repos/{owner}/{repo}/keys`](/rest/reference/repos#list-deploy-keys)（读）
- [`POST /repos/{owner}/{repo}/keys`](/rest/reference/repos#create-a-deploy-key)（写）
- [`GET /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#get-a-deploy-key)（读）
- [`DELETE /repos/{owner}/{repo}/keys/{key_id}`](/rest/reference/repos#delete-a-deploy-key)（写入）{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages)（写入）{% endif %}
- [`GET /repos/{owner}/{repo}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository)（读）
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository)（写入）{% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository)（写入）{% endif %}
- [`GET /repos/{owner}/{repo}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-a-repository)（读）
- [`POST /repos/{owner}/{repo}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-a-repository)（写）
- [`POST /repos/{owner}/{repo}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-a-repository)（写入）{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#list-tag-protection-state-of-a-repository)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`POST /repos/{owner}/{repo}/tags/protection`](/rest/reference/repos#create-tag-protection-state-for-a-repository)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}`](/rest/reference/repos#delete-tag-protection-state-for-a-repository)（写入）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository)（读取）{% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#enable-vulnerability-alerts)（写入）{% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/vulnerability-alerts`](/rest/reference/repos#disable-vulnerability-alerts)（写入）{% endif %}
- [`PUT /repos/{owner}/{repo}/topics`](/rest/reference/repos#replace-all-repository-topics)（写入）{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/clones`](/rest/metrics/traffic#get-repository-clones)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/paths`](/rest/metrics/traffic#get-top-referral-paths)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/referrers`](/rest/metrics/traffic#get-top-referral-sources)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/views`](/rest/metrics/traffic#get-page-views)（读取）{% endif %}

{% ifversion fpt or ghec %}

## 阻塞

- [`GET /user/blocks`](/rest/reference/users#list-users-blocked-by-the-authenticated-user)（读）
- [`GET /user/blocks/{username}`](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user)（读）
- [`PUT /user/blocks/{username}`](/rest/reference/users#block-a-user)（写）
- [`DELETE /user/blocks/{username}`](/rest/reference/users#unblock-a-user)（写）

{% endif %}

## 检查

- [`POST /repos/{owner}/{repo}/check-runs`](/rest/reference/checks#create-a-check-run)（写）
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#get-a-check-run)（读）
- [`PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}`](/rest/reference/checks#update-a-check-run)（写）
- [`GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`](/rest/reference/checks#list-check-run-annotations)（读）
- [`POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest`](/rest/reference/checks#rerequest-a-check-run)（写）
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs`](/rest/reference/checks#list-check-runs-in-a-check-suite)（读）
- [`POST /repos/{owner}/{repo}/check-suites`](/rest/reference/checks#create-a-check-suite)（写）
- [`GET /repos/{owner}/{repo}/check-suites/{check_suite_id}`](/rest/reference/checks#get-a-check-suite)（读）
- [`POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest`](/rest/reference/checks#rerequest-a-check-suite)（写）
- [`PATCH /repos/{owner}/{repo}/check-suites/preferences`](/rest/reference/checks#update-repository-preferences-for-check-suites)（写入）{% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run)（读取）{% endif %}

{% ifversion fpt or ghec %}

## Codespaces

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization)（读）
- [`GET /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user)（读）
- [`POST /repos/{owner}/{repo}/codespaces`](/rest/reference/codespaces#create-a-codespace-in-a-repository)（写）
- [`GET /repos/{owner}/{repo}/codespaces/new`](/rest/reference/codespaces#preview-attributes-for-a-new-codespace)（写）
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`](/rest/reference/codespaces#create-a-codespace-from-a-pull-request)（写）
- [`GET /user/codespaces`](/rest/reference/codespaces#list-codespaces-for-the-authenticated-user)（读）
- [`POST /user/codespaces`](/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user)（写）
- [`GET /user/codespaces/{codespace_name}`](/rest/reference/codespaces#get-a-codespace-for-the-authenticated-user)（读）
- [`PATCH /user/codespaces/{codespace_name}`](/rest/reference/codespaces#update-a-codespace-for-the-authenticated-user)（写）
- [`DELETE /user/codespaces/{codespace_name}`](/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user)（写）

## Codespaces 生命周期管理员

- [`POST /user/codespaces/{codespace_name}/exports`](/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user)（写）
- [`GET /user/codespaces/{codespace_name}/exports/{export_id}`](/rest/codespaces/codespaces#get-details-about-a-codespace-export)（读）
- [`POST /user/codespaces/{codespace_name}/start`](/rest/reference/codespaces#start-a-codespace-for-the-authenticated-user)（写）
- [`POST /user/codespaces/{codespace_name}/stop`](/rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user)（写）

## Codespaces 元数据

- [`GET /repos/{owner}/{repo}/codespaces/devcontainers`](/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user)（读）
- [`GET /repos/{owner}/{repo}/codespaces/machines`](/rest/reference/codespaces#list-available-machine-types-for-a-repository)（读）
- [`GET /user/codespaces/{codespace_name}/machines`](/rest/reference/codespaces#list-machine-types-for-a-codespace)（读）

## Codespaces 机密

- [`GET /repos/{owner}/{repo}/codespaces/secrets`](/rest/reference/codespaces#list-repository-secrets)（写）
- [`GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-repository-secret)（写）
- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-repository-secret)（写）
- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-repository-secret)（写）
- [`GET /repos/{owner}/{repo}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-a-repository-public-key)（写）

## Codespaces 用户机密

- [`GET /user/codespaces/secrets`](/rest/reference/codespaces#list-secrets-for-the-authenticated-user)（读）
- [`GET /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-a-secret-for-the-authenticated-user)（读）
- [`PUT /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user)（写）
- [`DELETE /user/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user)（写）
- [`GET /user/codespaces/secrets/public-key`](/rest/reference/codespaces#get-public-key-for-the-authenticated-user)（读）
- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret)（读）
- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret)（写）
- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret)（写）
- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret)（写）

{% endif %}

## 目录

{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/codeowners/errors`](/rest/reference/repos#list-codeowners-errors)（读取）{% endif %}
- [`POST /repos/{owner}/{repo}/git/blobs`](/rest/reference/git#create-a-blob)（写）
- [`POST /repos/{owner}/{repo}/git/commits`](/rest/reference/git#create-a-commit)（写）
- [`POST /repos/{owner}/{repo}/git/refs`](/rest/reference/git#create-a-reference)（写）
- [`POST /repos/{owner}/{repo}/git/tags`](/rest/reference/git#create-a-tag-object)（写）
- [`POST /repos/{owner}/{repo}/git/trees`](/rest/reference/git#create-a-tree)（写入）{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import`](/rest/reference/migrations#get-an-import-status)（读取）{% endif %} {% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/import`](/rest/reference/migrations#start-an-import)（写入）{% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import`](/rest/reference/migrations#update-an-import)（写入）{% endif %} {% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/import`](/rest/reference/migrations#cancel-an-import)（写入）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/authors`](/rest/reference/migrations#get-commit-authors)（读取）{% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/authors/{author_id}`](/rest/reference/migrations#map-a-commit-author)（写入）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/large_files`](/rest/reference/migrations#get-large-files)（读取）{% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/lfs`](/rest/reference/migrations#update-git-lfs-preference)（写入）{% endif %}
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#merge-a-pull-request)（写）
- [`POST /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-commit-comment)（写）
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-commit-comment-reaction)（写）
- [`GET /repos/{owner}/{repo}/branches`](/rest/reference/repos#list-branches)（读）
- [`POST /repos/{owner}/{repo}/merge-upstream`](/rest/reference/repos#sync-a-fork-branch-with-the-upstream-repository)（写）
- [`POST /repos/{owner}/{repo}/merges`](/rest/reference/repos#merge-a-branch)（写入）{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases`](/rest/reference/code-scanning#list-codeql-databases)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`](/rest/reference/code-scanning#get-codeql-database)（读取）{% endif %}
- [`PATCH /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#update-a-commit-comment)（写）
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#delete-a-commit-comment)（写）
- [`GET /repos/{owner}/{repo}/commits`](/rest/commits/commits#list-commits)（读取）{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/community/profile`](/rest/metrics/community#get-community-profile-metrics)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits)（读取）{% endif %}
- [`POST /repos/{owner}/{repo}/dispatches`](/rest/reference/repos#create-a-repository-dispatch-event)（写）
- [`GET /repos/{owner}/{repo}/releases`](/rest/reference/repos#list-releases)（读）
- [`POST /repos/{owner}/{repo}/releases`](/rest/reference/repos#create-a-release)（写）
- [`GET /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#get-a-release)（读）
- [`PATCH /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#update-a-release)（写）
- [`DELETE /repos/{owner}/{repo}/releases/{release_id}`](/rest/reference/repos#delete-a-release)（写）
- [`GET /repos/{owner}/{repo}/releases/{release_id}/assets`](/rest/reference/repos#list-release-assets)（读）
- [`GET /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#get-a-release-asset)（读）
- [`PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#update-a-release-asset)（写）
- [`DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/reference/repos#delete-a-release-asset)（写入）{% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/releases/generate-notes`](/rest/reference/repos#generate-release-notes)（写入）{% endif %}
- [`GET /repos/{owner}/{repo}/releases/latest`](/rest/reference/repos#get-the-latest-release)（读）

{% ifversion fpt or ghec or ghes > 3.3 %}

## Dependabot 机密

- [`GET /repos/{owner}/{repo}/dependabot/secrets`](/rest/reference/dependabot#list-repository-secrets)（读）
- [`GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-a-repository-secret)（读）
- [`PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-a-repository-secret)（写）
- [`DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-a-repository-secret)（写）
- [`GET /repos/{owner}/{repo}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-a-repository-public-key)（读）

{% endif %}

## 部署

{% ifversion fpt or ghec or ghes %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/reference/actions#review-pending-deployments-for-a-workflow-run)（读取）{% endif %}
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#list-deployment-statuses)（读）
- [`POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/reference/repos#create-a-deployment-status)（写）
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`](/rest/reference/repos#get-a-deployment-status)（读）
- [`GET /repos/{owner}/{repo}/deployments`](/rest/reference/repos#list-deployments)（读）
- [`POST /repos/{owner}/{repo}/deployments`](/rest/reference/repos#create-a-deployment)（写）
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#get-a-deployment)（读）
- [`DELETE /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/reference/repos#delete-a-deployment)（写）

{% ifversion fpt or ghec or ghes %}

## 电子邮件

{% ifversion fpt or ghec %}- [`PATCH /user/email/visibility`](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user)（写入）{% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /user/emails`](/rest/reference/users#list-email-addresses-for-the-authenticated-user)（读取）{% endif %} {% ifversion fpt or ghec or ghes %}- [`POST /user/emails`](/rest/reference/users#add-an-email-address-for-the-authenticated-user)（写入）{% endif %} {% ifversion fpt or ghec or ghes %}- [`DELETE /user/emails`](/rest/reference/users#delete-an-email-address-for-the-authenticated-user)（写入）{% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /user/public_emails`](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user)（读取）{% endif %}

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## 企业管理

{% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /enterprises/{enterprise}/settings/billing/advanced-security`](/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise)（写入）{% endif %} {% ifversion ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/reference/actions#get-github-actions-cache-usage-policy-for-an-enterprise)（写入）{% endif %} {% ifversion ghes > 3.4 %}- [`PATCH /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/reference/actions#set-github-actions-cache-usage-policy-for-an-enterprise)（写入）{% endif %}

{% endif %}

## 关注者

- [`GET /user/followers`](/rest/reference/users#list-followers-of-the-authenticated-user)（读）
- [`GET /user/following`](/rest/reference/users#list-the-people-the-authenticated-user-follows)（读）
- [`GET /user/following/{username}`](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user)（读）
- [`PUT /user/following/{username}`](/rest/reference/users#follow-a-user)（写）
- [`DELETE /user/following/{username}`](/rest/reference/users#unfollow-a-user)（写）

## Gists

- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment)（写）
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment)（写）
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment)（写）
- [`POST /gists`](/rest/reference/gists#create-a-gist)（写）
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist)（写）
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist)（写）
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist)（写）
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist)（写）
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist)（写）

{% ifversion fpt or ghec or ghes > 3.6 %}

## Git 签名 ssh 公钥

- [`GET /user/ssh_signing_keys`](/rest/reference/users#list-public-ssh-signing-keys-for-the-authenticated-user)（读）
- [`POST /user/ssh_signing_keys`](/rest/reference/users#create-an-ssh-signing-key-for-the-authenticated-user)（写）
- [`GET /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#get-a-ssh-signing-key-for-the-authenticated-user)（读）
- [`DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/reference/users#delete-a-ssh-signing-key-for-the-authenticated-user)（写）

{% endif %}

## Gpg 密钥

- [`GET /user/gpg_keys`](/rest/reference/users#list-gpg-keys-for-the-authenticated-user)（读）
- [`POST /user/gpg_keys`](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user)（写）
- [`GET /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user)（读）
- [`DELETE /user/gpg_keys/{gpg_key_id}`](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user)（写）

{% ifversion fpt or ghec %}

## 交互限制

- [`PUT /user/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories)（写）
- [`GET /user/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories)（读）
- [`DELETE /user/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories)（写）

{% endif %}

## 问题

- [`POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#add-assignees-to-an-issue)（写）
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/reference/issues#remove-assignees-from-an-issue)（写）
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#list-issue-comments)（读）
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/reference/issues#create-an-issue-comment)（写）
- [`GET /repos/{owner}/{repo}/issues/comments`](/rest/reference/issues#list-issue-comments-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#get-an-issue-comment)（读）
- [`PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#update-an-issue-comment)（写）
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/reference/issues#delete-an-issue-comment)（写）
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/events`](/rest/reference/issues#list-issue-events)（读）
- [`GET /repos/{owner}/{repo}/issues/events`](/rest/reference/issues#list-issue-events-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/issues/events/{event_id}`](/rest/reference/issues#get-an-issue-event)（读）
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`](/rest/reference/issues#list-timeline-events-for-an-issue)（读）
- [`GET /repos/{owner}/{repo}/assignees`](/rest/reference/issues#list-assignees)（读）
- [`GET /repos/{owner}/{repo}/issues`](/rest/reference/issues#list-repository-issues)（读）
- [`POST /repos/{owner}/{repo}/issues`](/rest/reference/issues#create-an-issue)（写）
- [`GET /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues#get-an-issue)（读）
- [`PATCH /repos/{owner}/{repo}/issues/{issue_number}`](/rest/reference/issues/#update-an-issue)（写）
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#lock-an-issue)（写）
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/reference/issues#unlock-an-issue)（写）
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#list-labels-for-an-issue)（读）
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#add-labels-to-an-issue)（写）
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#set-labels-for-an-issue)（写）
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/reference/issues#remove-all-labels-from-an-issue)（写）
- [`GET /repos/{owner}/{repo}/labels`](/rest/reference/issues#list-labels-for-a-repository)（读）
- [`POST /repos/{owner}/{repo}/labels`](/rest/reference/issues#create-a-label)（写）
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`](/rest/reference/issues#list-labels-for-issues-in-a-milestone)（读）
- [`GET /repos/{owner}/{repo}/milestones`](/rest/reference/issues#list-milestones)（读）
- [`POST /repos/{owner}/{repo}/milestones`](/rest/reference/issues#create-a-milestone)（写）
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#get-a-milestone)（读）
- [`PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#update-a-milestone)（写）
- [`DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/reference/issues#delete-a-milestone)（写）
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue)（读）
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue)（写）
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-reaction)（写）
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-an-issue-comment)（读）
- [`POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-an-issue-comment)（写）
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-an-issue-comment-reaction)（写）

## 键

- [`GET /user/keys`](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user)（读）
- [`POST /user/keys`](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user)（写）
- [`GET /user/keys/{key_id}`](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user)（读）
- [`DELETE /user/keys/{key_id}`](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user)（写）

## 成员

{% ifversion ghec or ghae or ghes > 3.5 %}- [`PATCH /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#link-external-idp-group-team-connection)（写入）{% endif %} {% ifversion ghec or ghae or ghes > 3.5 %}- [`DELETE /orgs/{org}/teams/{team_slug}/external-groups`](/rest/reference/teams#unlink-external-idp-group-team-connection)（写入）{% endif %} {% ifversion ghec or ghae or ghes > 3.5 %}- [`GET /orgs/{org}/external-group/{group_id}`](/rest/reference/teams#external-idp-group-info-for-an-organization)（写入）{% endif %} {% ifversion ghec or ghae or ghes > 3.5 %}- [`GET /orgs/{org}/external-groups`](/rest/reference/teams#list-external-idp-groups-for-an-organization)（写入）{% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/failed_invitations`](/rest/reference/orgs#list-failed-organization-invitations)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations`](/rest/reference/orgs#list-pending-organization-invitations)（读取）{% endif %} {% ifversion fpt or ghec %}- [`POST /orgs/{org}/invitations`](/rest/reference/orgs#create-an-organization-invitation)（写入）{% endif %} {% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/invitations/{invitation_id}`](/rest/reference/orgs#cancel-an-organization-invitation)（写入）{% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations/{invitation_id}/teams`](/rest/reference/orgs#list-organization-invitation-teams)（读取）{% endif %}
- [`GET /orgs/{org}/members`](/rest/reference/orgs#list-organization-members)（读）
- [`GET /orgs/{org}/members/{username}`](/rest/reference/orgs#check-organization-membership-for-a-user)（读）
- [`DELETE /orgs/{org}/members/{username}`](/rest/reference/orgs#remove-an-organization-member)（写）
- [`GET /orgs/{org}/memberships/{username}`](/rest/reference/orgs#get-organization-membership-for-a-user)（读）
- [`PUT /orgs/{org}/memberships/{username}`](/rest/reference/orgs#set-organization-membership-for-a-user)（写）
- [`DELETE /orgs/{org}/memberships/{username}`](/rest/reference/orgs#remove-organization-membership-for-a-user)（写入）{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/public_members`](/rest/reference/orgs#list-public-organization-members)（读取）{% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/public_members/{username}`](/rest/reference/orgs#check-public-organization-membership-for-a-user)（读取）{% endif %} {% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/public_members/{username}`](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user)（写入）{% endif %} {% ifversion fpt or ghec or ghes %}- [`DELETE /orgs/{org}/public_members/{username}`](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user)（写入）{% endif %}
- [`GET /orgs/{org}/outside_collaborators`](/rest/reference/orgs#list-outside-collaborators-for-an-organization)（读）
- [`PUT /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator)（写）
- [`DELETE /orgs/{org}/outside_collaborators/{username}`](/rest/reference/orgs#remove-outside-collaborator-from-an-organization)（写）
- [`GET /orgs/{org}/teams/{team_slug}/projects`](/rest/reference/teams#list-team-projects)（读）
- [`GET /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#check-team-permissions-for-a-project)（读）
- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions)（读）
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team)（读）
- [`GET /orgs/{org}/teams/{team_slug}/repos`](/rest/reference/teams#list-team-repositories)（读）
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository)（读）
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions)（读）
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team)（读）
- [`PATCH /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#update-a-team)（写）
- [`DELETE /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#delete-a-team)（写入）{% ifversion fpt or ghec %}- [`GET /orgs/{org}/teams/{team_slug}/invitations`](/rest/reference/teams#list-pending-team-invitations)（读取）{% endif %}
- [`GET /orgs/{org}/teams/{team_slug}/members`](/rest/reference/teams#list-team-members)（读）
- [`GET /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#get-team-membership-for-a-user)（读）
- [`PUT /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#add-or-update-team-membership-for-a-user)（写）
- [`DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}`](/rest/reference/teams#remove-team-membership-for-a-user)（写）
- [`GET /orgs/{org}/teams/{team_slug}/teams`](/rest/reference/teams#list-child-teams)（读）
- [`GET /orgs/{org}/teams/{team_slug}`](/rest/reference/teams#get-a-team-by-name)（读）
- [`GET /orgs/{org}/teams`](/rest/reference/teams#list-teams)（读）
- [`POST /orgs/{org}/teams`](/rest/reference/teams#create-a-team)（写）
- [`GET /user/memberships/orgs/{org}`](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user)（读）
- [`PATCH /user/memberships/orgs/{org}`](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user)（写）

## Metadata

{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-a-user-secret)（读取）{% endif %} {% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-a-user-secret)（读取）{% endif %} {% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret)（读取）{% endif %} {% ifversion fpt or ghec %}- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret)（读取）{% endif %}
- [`GET /repos/{owner}/{repo}/events`](/rest/reference/activity#list-repository-events)（读）
- [`POST /gists/{gist_id}/comments`](/rest/reference/gists#create-a-gist-comment)（读）
- [`GET /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#get-a-gist-comment)（读）
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#update-a-gist-comment)（读）
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/reference/gists#delete-a-gist-comment)（读）
- [`POST /gists`](/rest/reference/gists#create-a-gist)（读）
- [`PATCH /gists/{gist_id}`](/rest/reference/gists/#update-a-gist)（读）
- [`DELETE /gists/{gist_id}`](/rest/reference/gists#delete-a-gist)（读）
- [`POST /gists/{gist_id}/forks`](/rest/reference/gists#fork-a-gist)（读）
- [`PUT /gists/{gist_id}/star`](/rest/reference/gists#star-a-gist)（读）
- [`DELETE /gists/{gist_id}/star`](/rest/reference/gists#unstar-a-gist)（读）
- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user)（读）
- [`GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#check-team-permissions-for-a-repository)（读）
- [`PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#add-or-update-team-repository-permissions)（读）
- [`DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`](/rest/reference/teams/#remove-a-repository-from-a-team)（读）
- [`GET /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-commit-comment)（读）
- [`GET /orgs/{org}/repos`](/rest/reference/repos#list-organization-repositories)（读取）{% ifversion fpt or ghec or ghes %}- [`GET /repositories`](/rest/reference/repos#list-public-repositories)（读取）{% endif %}
- [`GET /repos/{owner}/{repo}`](/rest/reference/repos#get-a-repository)（读）
- [`GET /repos/{owner}/{repo}/contributors`](/rest/reference/repos#list-repository-contributors)（读）
- [`GET /repos/{owner}/{repo}/forks`](/rest/reference/repos#list-forks)（读）
- [`GET /repos/{owner}/{repo}/languages`](/rest/reference/repos#list-repository-languages)（读）
- [`GET /repos/{owner}/{repo}/tags`](/rest/reference/repos#list-repository-tags)（读）
- [`GET /users/{username}/repos`](/rest/reference/repos#list-repositories-for-a-user)（读）
- [`GET /user/repos`](/rest/reference/repos#list-repositories-for-the-authenticated-user)（读）
- [`GET /repos/{owner}/{repo}/stargazers`](/rest/reference/activity#list-stargazers)（读）
- [`GET /repos/{owner}/{repo}/subscribers`](/rest/reference/activity#list-watchers)（读）
- [`GET /repos/{owner}/{repo}/collaborators`](/rest/collaborators/collaborators#list-repository-collaborators)（读）
- [`GET /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator)（读）
- [`GET /repos/{owner}/{repo}/collaborators/{username}/permission`](/rest/collaborators/collaborators#get-repository-permissions-for-a-user)（读）
- [`GET /repos/{owner}/{repo}/comments`](/rest/commits/comments#list-commit-comments-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#get-a-commit-comment)（读）
- [`GET /repos/{owner}/{repo}/license`](/rest/reference/licenses/#get-the-license-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/stats/code_frequency`](/rest/metrics/statistics#get-the-weekly-commit-activity)（读）
- [`GET /repos/{owner}/{repo}/stats/commit_activity`](/rest/metrics/statistics#get-the-last-year-of-commit-activity)（读）
- [`GET /repos/{owner}/{repo}/stats/contributors`](/rest/metrics/statistics#get-all-contributor-commit-activity)（读）
- [`GET /repos/{owner}/{repo}/stats/participation`](/rest/metrics/statistics#get-the-weekly-commit-count)（读）
- [`GET /repos/{owner}/{repo}/stats/punch_card`](/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day)（读）
- [`GET /search/labels`](/rest/reference/search#search-labels)（读）
- [`GET /repos/{owner}/{repo}/topics`](/rest/reference/repos#get-all-repository-topics)（读）

## 通知

- [`GET /notifications`](/rest/reference/activity#list-notifications-for-the-authenticated-user)（读）

## 组织管理

{% ifversion ghec or ghae or ghes %}- [`GET /orgs/{org}/audit-log`](/rest/reference/orgs#get-audit-log)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-an-organization)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /orgs/{org}/settings/billing/advanced-security`](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-an-organization)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-an-organization)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /enterprise-installation/{enterprise_or_org}/server-statistics`](/rest/reference/enterprise-admin#get-github-enterprise-server-statistics)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /orgs/{org}/interaction-limits`](/rest/reference/interactions#get-interaction-restrictions-for-an-organization)（读取）{% endif %} {% ifversion fpt or ghec %}- [`PUT /orgs/{org}/interaction-limits`](/rest/reference/interactions#set-interaction-restrictions-for-an-organization)（写入）{% endif %} {% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/interaction-limits`](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/cache/usage`](/rest/reference/actions#get-github-actions-cache-usage-for-an-organization)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/cache/usage-by-repository`](/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization)（读取）{% endif %}
- [`GET /orgs/{org}/actions/permissions`](/rest/reference/actions#get-github-actions-permissions-for-an-organization)（读）
- [`PUT /orgs/{org}/actions/permissions`](/rest/reference/actions#set-github-actions-permissions-for-an-organization)（写）
- [`GET /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization)（读）
- [`PUT /orgs/{org}/actions/permissions/repositories`](/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization)（写）
- [`GET /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#get-allowed-actions-for-an-organization)（读）
- [`PUT /orgs/{org}/actions/permissions/selected-actions`](/rest/reference/actions#set-allowed-actions-for-an-organization)（写入）{% ifversion fpt or ghec or ghes > 3.4 %}- [`GET /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#get-default-workflow-permissions)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.4 %}- [`PUT /orgs/{org}/actions/permissions/workflow`](/rest/reference/actions#set-default-workflow-permissions)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`GET /orgs/{org}/security-managers`](/rest/reference/orgs#list-security-manager-teams)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`PUT /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#add-a-security-manager-team)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.6 %}- [`DELETE /orgs/{org}/security-managers/teams/{team_slug}`](/rest/reference/orgs#remove-a-security-manager-team)（写入）{% endif %}
- [`PATCH /orgs/{org}`](/rest/reference/orgs/#update-an-organization)（写）
- [`GET /orgs/{org}/installations`](/rest/reference/orgs#list-app-installations-for-an-organization)（读）

{% ifversion fpt or ghec %}

## 组织 codespace

- [`GET /orgs/{org}/codespaces`](/rest/reference/codespaces#list-in-organization)（读）

## 组织 codespace 机密

- [`GET /orgs/{org}/codespaces/secrets`](/rest/reference/codespaces#list-organization-secrets)（读）
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#get-an-organization-secret)（读）
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#create-or-update-an-organization-secret)（写）
- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/reference/codespaces#delete-an-organization-secret)（写）
- [`GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret)（读）
- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret)（写）
- [`GET /orgs/{org}/codespaces/secrets/public-key`](/rest/reference/codespaces#get-an-organization-public-key)（读）

## 组织 codespace 设置

- [`PUT /orgs/{org}/codespaces/billing`](/rest/reference/codespaces#set-codespaces-billing)（写）

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## 组织自定义角色

- [`GET /organizations/{organization_id}/custom_roles`](/rest/reference/orgs#list-custom-repository-roles-in-an-organization)（读）
- [`GET /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs/#get-a-custom-role)（读）
- [`PATCH /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#update-a-custom-role)（写）
- [`DELETE /orgs/{org}/custom_roles/{role_id}`](/rest/reference/orgs#delete-a-custom-role)（写）
- [`GET /orgs/{org}/fine_grained_permissions`](/rest/reference/orgs#list-fine-grained-permissions-for-an-organization)（读）

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 %}

## 组织 dependabot 机密

- [`GET /orgs/{org}/dependabot/secrets`](/rest/reference/dependabot#list-organization-secrets)（读）
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#get-an-organization-secret)（读）
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#create-or-update-an-organization-secret)（写）
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/reference/dependabot#delete-an-organization-secret)（写）
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret)（读）
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret)（写）
- [`GET /orgs/{org}/dependabot/secrets/public-key`](/rest/reference/dependabot#get-an-organization-public-key)（读）

{% endif %}

## 组织事件

- [`GET /users/{username}/events/orgs/{org}`](/rest/reference/activity#list-organization-events-for-the-authenticated-user)（读）

## 组织挂钩

- [`GET /orgs/{org}/hooks`](/rest/reference/orgs#list-organization-webhooks)（读）
- [`POST /orgs/{org}/hooks`](/rest/reference/orgs#create-an-organization-webhook)（写）
- [`GET /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#get-an-organization-webhook)（读）
- [`PATCH /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#update-an-organization-webhook)（写）
- [`DELETE /orgs/{org}/hooks/{hook_id}`](/rest/reference/orgs#delete-an-organization-webhook)（写）
- [`GET /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)（读）
- [`PATCH /orgs/{org}/hooks/{hook_id}/config`](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)（写）
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries`](/rest/reference/orgs#list-deliveries-for-an-organization-webhook)（读）
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook)（读）
- [`POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook)（写）
- [`POST /orgs/{org}/hooks/{hook_id}/pings`](/rest/reference/orgs#ping-an-organization-webhook)（写）

{% ifversion ghes %}

## 组织预接收挂钩

- [`GET /orgs/{org}/pre-receive-hooks`](/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)（读）
- [`GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)（读）
- [`PATCH /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)（写）
- [`DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)（写）

{% endif %}

## 组织项目

- [`PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#add-or-update-team-project-permissions)（管理员）
- [`DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}`](/rest/reference/teams#remove-a-project-from-a-team)（管理员）
- [`GET /orgs/{org}/projects`](/rest/reference/projects#list-organization-projects)（读）
- [`POST /orgs/{org}/projects`](/rest/reference/projects#create-an-organization-project)（写）

## 组织机密

- [`GET /orgs/{org}/actions/secrets`](/rest/reference/actions#list-organization-secrets)（读）
- [`GET /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#get-an-organization-secret)（读）
- [`PUT /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-an-organization-secret)（写）
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-an-organization-secret)（写）
- [`GET /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#list-selected-repositories-for-an-organization-secret)（读）
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/reference/actions#set-selected-repositories-for-an-organization-secret)（写）
- [`GET /orgs/{org}/actions/secrets/public-key`](/rest/reference/actions#get-an-organization-public-key)（读）

## 组织自托管运行器

- [`GET /orgs/{org}/actions/runner-groups`](/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization)（读）
- [`POST /orgs/{org}/actions/runner-groups`](/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization)（写）
- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization)（读）
- [`PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)（写）
- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization)（写入）{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization)（读取）{% endif %} {% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization)（写入）{% endif %} {% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization)（读取）{% endif %} {% ifversion fpt or ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)（写入）{% endif %}
- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization)（写入）{% ifversion fpt or ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)（写入）{% endif %}
- [`GET /orgs/{org}/actions/runners`](/rest/reference/actions#list-self-hosted-runners-for-an-organization)（读）
- [`GET /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization)（读）
- [`DELETE /orgs/{org}/actions/runners/{runner_id}`](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization)（写入）{% ifversion fpt or ghec or ghes > 3.3 %}- [`GET /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization)（读取）{% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`POST /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`PUT /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization)（写入）{% endif %} {% ifversion fpt or ghec or ghes > 3.3 %}- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}`](/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization)（写入）{% endif %}
- [`GET /orgs/{org}/actions/runners/downloads`](/rest/reference/actions#list-runner-applications-for-an-organization)（读）
- [`POST /orgs/{org}/actions/runners/registration-token`](/rest/reference/actions#create-a-registration-token-for-an-organization)（写）
- [`POST /orgs/{org}/actions/runners/remove-token`](/rest/reference/actions#create-a-remove-token-for-an-organization)（写）

{% ifversion fpt or ghec %}

## 组织用户阻止

- [`GET /orgs/{org}/blocks`](/rest/reference/orgs#list-users-blocked-by-an-organization)（读）
- [`GET /orgs/{org}/blocks/{username}`](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization)（读）
- [`PUT /orgs/{org}/blocks/{username}`](/rest/reference/orgs#block-a-user-from-an-organization)（写）
- [`DELETE /orgs/{org}/blocks/{username}`](/rest/reference/orgs#unblock-a-user-from-an-organization)（写）

{% endif %}

## 页

- [`GET /repos/{owner}/{repo}/pages`](/rest/pages#get-a-github-pages-site)（读）
- [`PUT /repos/{owner}/{repo}/pages`](/rest/pages#update-information-about-a-github-pages-site)（写）
- [`GET /repos/{owner}/{repo}/pages/builds`](/rest/pages#list-github-pages-builds)（读）
- [`POST /repos/{owner}/{repo}/pages/builds`](/rest/pages#request-a-github-pages-build)（写）
- [`GET /repos/{owner}/{repo}/pages/builds/{build_id}`](/rest/pages#get-github-pages-build)（读）
- [`GET /repos/{owner}/{repo}/pages/builds/latest`](/rest/pages#get-latest-pages-build)（读取）{% ifversion fpt or ghec or ghes > 3.6 %}- [`POST /repos/{owner}/{repo}/pages/deployment`](/rest/pages#create-a-github-pages-deployment)（写入）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages)（写入）{% endif %}

{% ifversion fpt or ghec %}

## 计划

- [`GET /users/{username}/settings/billing/actions`](/rest/reference/billing#get-github-actions-billing-for-a-user)（读）
- [`GET /users/{username}/settings/billing/packages`](/rest/reference/billing#get-github-packages-billing-for-a-user)（读）
- [`GET /users/{username}/settings/billing/shared-storage`](/rest/reference/billing#get-shared-storage-billing-for-a-user)（读）

{% endif %}

## 配置文件

- [`PATCH /user`](/rest/reference/users/#update-the-authenticated-user)（写）

## 拉取请求

- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#list-review-comments-on-a-pull-request)（读）
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/reference/pulls#create-a-review-comment-for-a-pull-request)（写）
- [`GET /repos/{owner}/{repo}/pulls/comments`](/rest/reference/pulls#list-review-comments-in-a-repository)（读）
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#get-a-review-comment-for-a-pull-request)（读）
- [`PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#update-a-review-comment-for-a-pull-request)（写）
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request)（写）
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`](/rest/reference/pulls#dismiss-a-review-for-a-pull-request)（写）
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`](/rest/reference/pulls#submit-a-review-for-a-pull-request)（写）
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#get-all-requested-reviewers-for-a-pull-request)（读）
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#request-reviewers-for-a-pull-request)（写）
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request)（写）
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#list-reviews-for-a-pull-request)（读）
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/reference/pulls#create-a-review-for-a-pull-request)（写）
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#get-a-review-for-a-pull-request)（读）
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#update-a-review-for-a-pull-request)（写）
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/reference/pulls#delete-a-pending-review-for-a-pull-request)（写）
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`](/rest/reference/pulls#list-comments-for-a-pull-request-review)（读）
- [`GET /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#list-pull-requests)（读）
- [`POST /repos/{owner}/{repo}/pulls`](/rest/reference/pulls#create-a-pull-request)（写）
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request)（读）
- [`PATCH /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls/#update-a-pull-request)（写）
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/commits`](/rest/reference/pulls#list-commits-on-a-pull-request)（读）
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/files`](/rest/reference/pulls#list-pull-requests-files)（读）
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/reference/pulls#check-if-a-pull-request-has-been-merged)（读）
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch`](/rest/reference/pulls#update-a-pull-request-branch)（写）
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment)（读）
- [`POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment)（写）
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`](/rest/reference/reactions#delete-a-pull-request-comment-reaction)（写入）{% ifversion fpt or ghec or ghes > 3.5 %}- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits)（读取）{% endif %}

## 存储库挂钩

- [`GET /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#list-repository-webhooks)（读）
- [`POST /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#create-a-repository-webhook)（写）
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#get-a-repository-webhook)（读）
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#update-a-repository-webhook)（写）
- [`DELETE /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#delete-a-repository-webhook)（写）
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository)（读）
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository)（写）
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries`](/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook)（读）
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook)（读）
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook)（写）
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/pings`](/rest/webhooks/repos#ping-a-repository-webhook)（读）
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/tests`](/rest/webhooks/repos#test-the-push-repository-webhook)（读）

{% ifversion ghes %}

## 存储库预接收挂钩

- [`GET /repos/{owner}/{repo}/pre-receive-hooks`](/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository)（读）
- [`PATCH /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)（写）
- [`DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)（写）

{% endif %}

## 存储库项目

- [`GET /projects/{project_id}/collaborators`](/rest/reference/projects#list-project-collaborators)（写）
- [`PUT /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#add-project-collaborator)（写）
- [`DELETE /projects/{project_id}/collaborators/{username}`](/rest/reference/projects#remove-project-collaborator)（写）
- [`GET /projects/{project_id}/collaborators/{username}/permission`](/rest/reference/projects#get-project-permission-for-a-user)（写）
- [`GET /projects/{project_id}`](/rest/reference/projects#get-a-project)（读）
- [`PATCH /projects/{project_id}`](/rest/reference/projects#update-a-project)（写）
- [`DELETE /projects/{project_id}`](/rest/reference/projects#delete-a-project)（写）
- [`GET /projects/{project_id}/columns`](/rest/reference/projects#list-project-columns)（读）
- [`POST /projects/{project_id}/columns`](/rest/reference/projects#create-a-project-column)（写）
- [`GET /projects/columns/{column_id}`](/rest/reference/projects#get-a-project-column)（读）
- [`PATCH /projects/columns/{column_id}`](/rest/reference/projects#update-a-project-column)（写）
- [`DELETE /projects/columns/{column_id}`](/rest/reference/projects#delete-a-project-column)（写）
- [`GET /projects/columns/{column_id}/cards`](/rest/reference/projects#list-project-cards)（读）
- [`POST /projects/columns/{column_id}/cards`](/rest/reference/projects#create-a-project-card)（写）
- [`POST /projects/columns/{column_id}/moves`](/rest/reference/projects#move-a-project-column)（写）
- [`GET /projects/columns/cards/{card_id}`](/rest/reference/projects#get-a-project-card)（读）
- [`PATCH /projects/columns/cards/{card_id}`](/rest/reference/projects#update-a-project-card)（写）
- [`DELETE /projects/columns/cards/{card_id}`](/rest/reference/projects#delete-a-project-card)（写）
- [`POST /projects/columns/cards/{card_id}/moves`](/rest/reference/projects#move-a-project-card)（写）
- [`GET /repos/{owner}/{repo}/projects`](/rest/reference/projects#list-repository-projects)（读）
- [`POST /repos/{owner}/{repo}/projects`](/rest/reference/projects#create-a-repository-project)（写）

## 机密扫描警报

{% ifversion fpt or ghec or ghes %}- [`GET /orgs/{org}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization)（读取）{% endif %}
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts`](/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#get-a-secret-scanning-alert)（读）
- [`PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/reference/secret-scanning#update-a-secret-scanning-alert)（写）
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`](/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert)（读）

## 机密

- [`GET /repos/{owner}/{repo}/actions/secrets`](/rest/reference/actions#list-repository-secrets)（读）
- [`GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#get-a-repository-secret)（读）
- [`PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#create-or-update-a-repository-secret)（写）
- [`DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/reference/actions#delete-a-repository-secret)（写）
- [`GET /repos/{owner}/{repo}/actions/secrets/public-key`](/rest/reference/actions#get-a-repository-public-key)（读）

## 安全性事件

{% ifversion fpt or ghec or ghae or ghes > 3.4 %}- [`GET /orgs/{org}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-by-organization)（读取）{% endif %}
- [`GET /repos/{owner}/{repo}/code-scanning/alerts`](/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#get-a-code-scanning-alert)（读）
- [`PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/reference/code-scanning#update-a-code-scanning-alert)（写）
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`](/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert)（读）
- [`GET /repos/{owner}/{repo}/code-scanning/analyses`](/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository)（读）
- [`GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)（读）
- [`DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository)（写）
- [`GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`](/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository)（读）
- [`POST /repos/{owner}/{repo}/code-scanning/sarifs`](/rest/reference/code-scanning#upload-a-sarif-file)（写入）{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts`](/rest/reference/dependabot#list-dependabot-alerts-for-a-repository)（读取）{% endif %} {% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#get-a-dependabot-alert)（读取）{% endif %} {% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/reference/dependabot#update-a-dependabot-alert)（写入）{% endif %}

## 标星

- [`GET /users/{username}/starred`](/rest/reference/activity#list-repositories-starred-by-a-user)（读）
- [`GET /user/starred`](/rest/reference/activity#list-repositories-starred-by-the-authenticated-user)（读）
- [`GET /user/starred/{owner}/{repo}`](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user)（读）
- [`PUT /user/starred/{owner}/{repo}`](/rest/reference/activity#star-a-repository-for-the-authenticated-user)（写）
- [`DELETE /user/starred/{owner}/{repo}`](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user)（写）

## 状态

- [`POST /repos/{owner}/{repo}/statuses/{sha}`](/rest/commits/statuses#create-a-commit-status)（写）

## 团队讨论

- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment)（读）
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)（写）
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-comment-reaction)（写）
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#list-reactions-for-a-team-discussion)（读）
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`](/rest/reference/reactions#create-reaction-for-a-team-discussion)（写）
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}`](/rest/reference/reactions#delete-team-discussion-reaction)（写）
- [`GET /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#list-discussions)（读）
- [`POST /orgs/{org}/teams/{team_slug}/discussions`](/rest/reference/teams#create-a-discussion)（写）
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#get-a-discussion)（读）
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#update-a-discussion)（写）
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`](/rest/reference/teams#delete-a-discussion)（写）
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#list-discussion-comments)（读）
- [`POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`](/rest/reference/teams#create-a-discussion-comment)（写）
- [`GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#get-a-discussion-comment)（读）
- [`PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#update-a-discussion-comment)（写）
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`](/rest/reference/teams#delete-a-discussion-comment)（写）

{% ifversion fpt or ghec %}

## 漏洞警报

- [`GET /orgs/{org}/dependabot/alerts`](/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization)（读）

{% endif %}

## 关注中

- [`GET /users/{username}/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user)（读）
- [`GET /user/subscriptions`](/rest/reference/activity#list-repositories-watched-by-the-authenticated-user)（读）
