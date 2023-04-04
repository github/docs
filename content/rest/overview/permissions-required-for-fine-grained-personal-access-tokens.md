---
title: Permissions required for fine-grained personal access tokens
intro: 'You can find the required permissions for each {% data variables.product.pat_v2 %}-compatible endpoint.'
versions:
  feature: pat-v2
shortTitle: '{% data variables.product.pat_v2_caps %} permissions'
---

## About permissions required for {% data variables.product.pat_v2 %}

When you create a {% data variables.product.pat_v2 %}, you grant it a set of permissions. Permissions define what resources the {% data variables.product.prodname_github_app %} can access via the API. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

## Actions

- [`GET /repos/{owner}/{repo}/actions/artifacts`](/rest/actions#list-artifacts-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/actions#get-an-artifact) (read)
- [`DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/actions#delete-an-artifact) (write)
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}`](/rest/actions#download-an-artifact) (read)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}`](/rest/actions#get-a-job-for-a-workflow-run) (read)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs`](/rest/actions#download-job-logs-for-a-workflow-run) (read)
- [`GET /repos/{owner}/{repo}/actions/runs`](/rest/actions#list-workflow-runs-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/actions#get-a-workflow-run) (read)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/actions#delete-a-workflow-run) (write)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals`](/rest/actions#get-the-review-history-for-a-workflow-run) (read)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`](/rest/actions#list-workflow-run-artifacts) (read)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`](/rest/actions#cancel-a-workflow-run) (write)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs`](/rest/actions#list-jobs-for-a-workflow-run) (read)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/actions#download-workflow-run-logs) (read)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/actions#delete-workflow-run-logs) (write)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/actions#get-pending-deployments-for-a-workflow-run) (read)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/actions#review-pending-deployments-for-a-workflow-run) (read)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun`](/rest/actions#re-run-a-workflow) (write)
- [`GET /repos/{owner}/{repo}/actions/workflows`](/rest/actions#list-repository-workflows) (read)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`](/rest/actions#get-a-workflow) (read)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`](/rest/actions#disable-a-workflow) (write)
- [`POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`](/rest/actions#create-a-workflow-dispatch-event) (write)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`](/rest/actions#enable-a-workflow) (write)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`](/rest/actions#list-workflow-runs) (read)
- [`GET /repos/{owner}/{repo}/environments`](/rest/deployments/environments#list-environments) (read)
- [`GET /repos/{owner}/{repo}/environments/{environment_name}`](/rest/deployments/environments#get-an-environment) (read)
- [`GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`](/rest/deployments/branch-policies#list-deployment-branch-policies) (read)
- [`GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`](/rest/deployments/branch-policies#get-deployment-branch-policy) (read)
- [`GET /repos/{owner}/{repo}/actions/cache/usage`](/rest/actions#get-github-actions-cache-usage-for-a-repository) (read)
{% ifversion ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/actions#get-github-actions-cache-usage-policy-for-a-repository) (read){% endif %}
- [`POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`](/rest/actions#re-run-job-for-workflow-run) (write)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`](/rest/actions#get-a-workflow-run-attempt) (read)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`](/rest/actions#list-jobs-for-a-workflow-run-attempt) (read)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`](/rest/actions#download-workflow-run-attempt-logs) (read)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`](/rest/actions#re-run-workflow-failed-jobs) (write)
- [`GET /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#list-github-actions-caches-for-a-repository) (read)
- [`DELETE /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key) (write)
- [`DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}`](/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id) (write)
- [`GET /repos/{owner}/{repo}/actions/oidc/customization/sub`](/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-a-repository) (read)
- [`PUT /repos/{owner}/{repo}/actions/oidc/customization/sub`](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository) (write)
{% ifversion fpt or ghec %}- [`GET /repos/{org}/{repo}/actions/required_workflows`](/rest/actions#list-repository-required-workflows) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}`](/rest/actions#get-repository-required-workflow) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/runs`](/rest/actions#list-required-workflow-runs) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing`](/rest/actions#get-workflow-run-usage) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`](/rest/actions#get-workflow-usage) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/timing`](/rest/actions#get-repository-required-workflow-usage) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve`](/rest/actions#approve-a-workflow-run-for-a-fork-pull-request) (write){% endif %}

{% ifversion fpt or ghec %}

## Actions variables

{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/variables`](/rest/actions/variables#list-repository-variables) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/actions/variables`](/rest/actions/variables#create-a-repository-variable) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/variables/{name}`](/rest/actions/variables#get-a-repository-variable) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/actions/variables/{name}`](/rest/actions/variables#update-a-repository-variable) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/actions/variables/{name}`](/rest/actions/variables#delete-a-repository-variable) (write){% endif %}

{% endif %}

## Administration

- [`POST /orgs/{org}/repos`](/rest/repos#create-an-organization-repository) (write)
- [`PATCH /repos/{owner}/{repo}`](/rest/repos/repos#update-a-repository) (write)
- [`DELETE /repos/{owner}/{repo}`](/rest/repos#delete-a-repository) (write)
- [`GET /repos/{owner}/{repo}/actions/permissions`](/rest/actions#get-github-actions-permissions-for-a-repository) (read)
- [`PUT /repos/{owner}/{repo}/actions/permissions`](/rest/actions#set-github-actions-permissions-for-a-repository) (write)
- [`GET /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/actions#get-allowed-actions-for-a-repository) (read)
- [`PUT /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/actions#set-allowed-actions-for-a-repository) (write)
- [`GET /repos/{owner}/{repo}/actions/runners`](/rest/actions#list-self-hosted-runners-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/actions/runners/downloads`](/rest/actions#list-runner-applications-for-a-repository) (read)
- [`POST /repos/{owner}/{repo}/actions/runners/registration-token`](/rest/actions#create-a-registration-token-for-a-repository) (write)
- [`POST /repos/{owner}/{repo}/actions/runners/remove-token`](/rest/actions#create-a-remove-token-for-a-repository) (write)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/actions#get-a-self-hosted-runner-for-a-repository) (read)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/actions#delete-a-self-hosted-runner-from-a-repository) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection`](/rest/branches/branch-protection#get-branch-protection) (read)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection`](/rest/branches/branch-protection#update-branch-protection) (write)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection`](/rest/branches/branch-protection#delete-branch-protection) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`](/rest/branches/branch-protection#get-admin-branch-protection) (read)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`](/rest/branches/branch-protection#set-admin-branch-protection) (write)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`](/rest/branches/branch-protection#delete-admin-branch-protection) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`](/rest/branches/branch-protection#get-pull-request-review-protection) (read)
- [`PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`](/rest/branches/branch-protection#update-pull-request-review-protection) (write)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`](/rest/branches/branch-protection#delete-pull-request-review-protection) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`](/rest/branches/branch-protection#get-commit-signature-protection) (read)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`](/rest/branches/branch-protection#create-commit-signature-protection) (write)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`](/rest/branches/branch-protection#delete-commit-signature-protection) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`](/rest/branches/branch-protection#get-status-checks-protection) (read)
- [`PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`](/rest/branches/branch-protection#update-status-check-protection) (write)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`](/rest/branches/branch-protection#remove-status-check-protection) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`](/rest/branches/branch-protection#get-all-status-check-contexts) (read)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`](/rest/branches/branch-protection#add-status-check-contexts) (write)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`](/rest/branches/branch-protection#set-status-check-contexts) (write)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`](/rest/branches/branch-protection#remove-status-check-contexts) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions`](/rest/branches/branch-protection#get-access-restrictions) (read)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions`](/rest/branches/branch-protection#delete-access-restrictions) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`](/rest/branches/branch-protection#list-apps-with-access-to-the-protected-branch) (read)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`](/rest/branches/branch-protection#add-app-access-restrictions) (write)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`](/rest/branches/branch-protection#set-app-access-restrictions) (write)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`](/rest/branches/branch-protection#remove-app-access-restrictions) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`](/rest/branches/branch-protection#list-teams-with-access-to-the-protected-branch) (read)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`](/rest/branches/branch-protection#add-team-access-restrictions) (write)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`](/rest/branches/branch-protection#set-team-access-restrictions) (write)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`](/rest/branches/branch-protection#remove-team-access-restrictions) (write)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`](/rest/branches/branch-protection#list-users-with-access-to-the-protected-branch) (read)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`](/rest/branches/branch-protection#add-user-access-restrictions) (write)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`](/rest/branches/branch-protection#set-user-access-restrictions) (write)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`](/rest/branches/branch-protection#remove-user-access-restrictions) (write)
- [`PUT /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#add-a-repository-collaborator) (write)
- [`DELETE /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#remove-a-repository-collaborator) (write)
- [`PUT /repos/{owner}/{repo}/environments/{environment_name}`](/rest/deployments/environments#create-or-update-an-environment) (write)
- [`DELETE /repos/{owner}/{repo}/environments/{environment_name}`](/rest/deployments/environments#delete-an-environment) (write)
- [`POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`](/rest/deployments/branch-policies#create-deployment-branch-policy) (write)
- [`PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`](/rest/deployments/branch-policies#update-deployment-branch-policy) (write)
- [`DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`](/rest/deployments/branch-policies#delete-deployment-branch-policy) (write)
- [`POST /repos/{owner}/{repo}/forks`](/rest/repos#create-a-fork) (write)
- [`GET /repos/{owner}/{repo}/invitations`](/rest/collaborators/invitations#list-repository-invitations) (read)
- [`PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#update-a-repository-invitation) (write)
- [`DELETE /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#delete-a-repository-invitation) (write)
- [`GET /repos/{owner}/{repo}/keys`](/rest/deploy-keys#list-deploy-keys) (read)
- [`POST /repos/{owner}/{repo}/keys`](/rest/deploy-keys#create-a-deploy-key) (write)
- [`GET /repos/{owner}/{repo}/keys/{key_id}`](/rest/deploy-keys#get-a-deploy-key) (read)
- [`DELETE /repos/{owner}/{repo}/keys/{key_id}`](/rest/deploy-keys#delete-a-deploy-key) (write)
- [`POST /repos/{owner}/{repo}/pages`](/rest/pages#create-a-github-pages-site) (write)
- [`PUT /repos/{owner}/{repo}/pages`](/rest/pages#update-information-about-a-github-pages-site) (write)
- [`DELETE /repos/{owner}/{repo}/pages`](/rest/pages#delete-a-github-pages-site) (write)
- [`GET /repos/{owner}/{repo}/teams`](/rest/repos#list-repository-teams) (read)
- [`PUT /repos/{owner}/{repo}/topics`](/rest/repos#replace-all-repository-topics) (write)
- [`POST /repos/{owner}/{repo}/transfer`](/rest/repos#transfer-a-repository) (write)
- [`POST /user/repos`](/rest/repos#create-a-repository-for-the-authenticated-user) (write)
- [`GET /user/repository_invitations`](/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user) (read)
- [`PATCH /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#accept-a-repository-invitation) (write)
- [`DELETE /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#decline-a-repository-invitation) (write)
- [`GET /repos/{owner}/{repo}/autolinks`](/rest/repos/autolinks#list-all-autolinks-of-a-repository) (read)
- [`POST /repos/{owner}/{repo}/autolinks`](/rest/repos/autolinks#create-an-autolink-reference-for-a-repository) (write)
- [`GET /repos/{owner}/{repo}/autolinks/{autolink_id}`](/rest/repos/autolinks#get-an-autolink-reference-of-a-repository) (read)
- [`DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}`](/rest/repos/autolinks#delete-an-autolink-reference-from-a-repository) (write)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/actions#list-labels-for-a-self-hosted-runner-for-a-repository) (read)
- [`POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository) (write)
- [`PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository) (write)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository) (write)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`](/rest/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository) (write)
{% ifversion ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/replicas/caches`](/rest/repos#list-repository-cache-replication-status) (read){% endif %}
{% ifversion ghes > 3.4 %}- [`PATCH /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/actions#set-github-actions-cache-usage-policy-for-a-repository) (write){% endif %}
- [`GET /repos/{owner}/{repo}/actions/permissions/access`](/rest/actions#get-workflow-access-level-to-a-repository) (read)
- [`PUT /repos/{owner}/{repo}/actions/permissions/access`](/rest/actions#set-workflow-access-to-a-repository) (write)
- [`GET /repos/{owner}/{repo}/tags/protection`](/rest/repos#list-tag-protection-state-of-a-repository) (read)
- [`POST /repos/{owner}/{repo}/tags/protection`](/rest/repos#create-tag-protection-state-for-a-repository) (write)
- [`DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}`](/rest/repos#delete-tag-protection-state-for-a-repository) (write)
- [`GET /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/actions#get-default-workflow-permissions-for-a-repository) (read)
- [`PUT /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/actions#set-default-workflow-permissions-for-a-repository) (write)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/vulnerability-alerts`](/rest/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/vulnerability-alerts`](/rest/repos#enable-vulnerability-alerts) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/vulnerability-alerts`](/rest/repos#disable-vulnerability-alerts) (write){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/automated-security-fixes`](/rest/repos#enable-automated-security-fixes) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/automated-security-fixes`](/rest/repos#disable-automated-security-fixes) (write){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/codespaces#create-or-update-a-repository-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/codespaces#delete-a-repository-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/interaction-limits`](/rest/interactions#get-interaction-restrictions-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/interaction-limits`](/rest/interactions#set-interaction-restrictions-for-a-repository) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/interaction-limits`](/rest/interactions#remove-interaction-restrictions-for-a-repository) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/clones`](/rest/metrics/traffic#get-repository-clones) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/paths`](/rest/metrics/traffic#get-top-referral-paths) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/referrers`](/rest/metrics/traffic#get-top-referral-sources) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/views`](/rest/metrics/traffic#get-page-views) (read){% endif %}

{% ifversion fpt or ghec %}

## Blocking

{% ifversion fpt or ghec %}- [`GET /user/blocks`](/rest/users#list-users-blocked-by-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/blocks/{username}`](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/blocks/{username}`](/rest/users#block-a-user) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/blocks/{username}`](/rest/users#unblock-a-user) (write){% endif %}

{% endif %}

## Checks

- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/actions#review-pending-deployments-for-a-workflow-run) (read)

{% ifversion fpt or ghec %}

## Codespaces

{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces`](/rest/codespaces#list-in-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/members/{username}/codespaces`](/rest/codespaces#get-codespaces-for-user-in-org) (read){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}`](/rest/codespaces) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces`](/rest/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/codespaces`](/rest/codespaces#create-a-codespace-in-a-repository) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/new`](/rest/codespaces#preview-attributes-for-a-new-codespace) (write){% endif %}
{% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`](/rest/codespaces#create-a-codespace-from-a-pull-request) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces`](/rest/codespaces#list-codespaces-for-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces`](/rest/codespaces#create-a-codespace-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/{codespace_name}`](/rest/codespaces#get-a-codespace-for-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /user/codespaces/{codespace_name}`](/rest/codespaces#update-a-codespace-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/codespaces/{codespace_name}`](/rest/codespaces#delete-a-codespace-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces/{codespace_name}/publish`](/rest/codespaces/codespaces#create-a-repository-from-an-unpublished-codespace) (write){% endif %}

## Codespaces lifecycle admin

{% ifversion fpt or ghec %}- [`POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`](/rest/codespaces) (write){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces/{codespace_name}/exports`](/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/{codespace_name}/exports/{export_id}`](/rest/codespaces/codespaces#get-details-about-a-codespace-export) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces/{codespace_name}/start`](/rest/codespaces#start-a-codespace-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces/{codespace_name}/stop`](/rest/codespaces#stop-a-codespace-for-the-authenticated-user) (write){% endif %}

## Codespaces metadata

{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/devcontainers`](/rest/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/machines`](/rest/codespaces#list-available-machine-types-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/{codespace_name}/machines`](/rest/codespaces#list-machine-types-for-a-codespace) (read){% endif %}

## Codespaces secrets

{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/secrets`](/rest/codespaces#list-repository-secrets) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/secrets/public-key`](/rest/codespaces#get-a-repository-public-key) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/codespaces#get-a-repository-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/codespaces#create-or-update-a-repository-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/codespaces#delete-a-repository-secret) (write){% endif %}

## Codespaces user secrets

{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets`](/rest/codespaces#list-secrets-for-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/public-key`](/rest/codespaces#get-public-key-for-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/{secret_name}`](/rest/codespaces#get-a-secret-for-the-authenticated-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}`](/rest/codespaces#create-or-update-a-secret-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/codespaces/secrets/{secret_name}`](/rest/codespaces#delete-a-secret-for-the-authenticated-user) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#list-selected-repositories-for-a-user-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#set-selected-repositories-for-a-user-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#add-a-selected-repository-to-a-user-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#remove-a-selected-repository-from-a-user-secret) (write){% endif %}

{% endif %}

## Contents

- [`GET /repos/{owner}/{repo}/branches`](/rest/branches/branches#list-branches) (read)
- [`GET /repos/{owner}/{repo}/branches/{branch}`](/rest/branches/branches#get-a-branch) (read)
- [`POST /repos/{owner}/{repo}/branches/{branch}/rename`](/rest/branches/branches#rename-a-branch) (write)
- [`PATCH /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#update-a-commit-comment) (write)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#delete-a-commit-comment) (write)
- [`POST /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reactions#create-reaction-for-a-commit-comment) (write)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`](/rest/reactions#delete-a-commit-comment-reaction) (write)
- [`GET /repos/{owner}/{repo}/commits`](/rest/commits/commits#list-commits) (read)
- [`GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head`](/rest/commits/commits#list-branches-for-head-commit) (read)
- [`POST /repos/{owner}/{repo}/commits/{commit_sha}/comments`](/rest/commits/comments#create-a-commit-comment) (read)
- [`GET /repos/{owner}/{repo}/commits/{ref}`](/rest/commits/commits#get-a-commit) (read)
- [`GET /repos/{owner}/{repo}/compare/{basehead}`](/rest/commits/commits#compare-two-commits) (read)
- [`GET /repos/{owner}/{repo}/contents/{path}`](/rest/repos#get-repository-content) (read)
- [`PUT /repos/{owner}/{repo}/contents/{path}`](/rest/repos#create-or-update-file-contents) (write)
- [`DELETE /repos/{owner}/{repo}/contents/{path}`](/rest/repos#delete-a-file) (write)
- [`POST /repos/{owner}/{repo}/dispatches`](/rest/repos#create-a-repository-dispatch-event) (write)
- [`POST /repos/{owner}/{repo}/git/blobs`](/rest/git#create-a-blob) (write)
- [`GET /repos/{owner}/{repo}/git/blobs/{file_sha}`](/rest/git#get-a-blob) (read)
- [`POST /repos/{owner}/{repo}/git/commits`](/rest/git#create-a-commit) (write)
- [`GET /repos/{owner}/{repo}/git/commits/{commit_sha}`](/rest/git#get-a-commit) (read)
- [`GET /repos/{owner}/{repo}/git/matching-refs/{ref}`](/rest/git#list-matching-references) (read)
- [`GET /repos/{owner}/{repo}/git/ref/{ref}`](/rest/git#get-a-reference) (read)
- [`POST /repos/{owner}/{repo}/git/refs`](/rest/git#create-a-reference) (write)
- [`PATCH /repos/{owner}/{repo}/git/refs/{ref}`](/rest/git#update-a-reference) (write)
- [`DELETE /repos/{owner}/{repo}/git/refs/{ref}`](/rest/git#delete-a-reference) (write)
- [`POST /repos/{owner}/{repo}/git/tags`](/rest/git#create-a-tag-object) (write)
- [`GET /repos/{owner}/{repo}/git/tags/{tag_sha}`](/rest/git#get-a-tag) (read)
- [`POST /repos/{owner}/{repo}/git/trees`](/rest/git#create-a-tree) (write)
- [`GET /repos/{owner}/{repo}/git/trees/{tree_sha}`](/rest/git#get-a-tree) (read)
- [`POST /repos/{owner}/{repo}/merges`](/rest/branches/branches#merge-a-branch) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/pulls#get-a-pull-request) (read)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/pulls#merge-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/releases`](/rest/repos#list-releases) (read)
- [`POST /repos/{owner}/{repo}/releases`](/rest/releases/releases#create-a-release) (write)
- [`GET /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/repos#get-a-release-asset) (read)
- [`PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/repos#update-a-release-asset) (write)
- [`DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/repos#delete-a-release-asset) (write)
- [`GET /repos/{owner}/{repo}/releases/latest`](/rest/repos#get-the-latest-release) (read)
- [`GET /repos/{owner}/{repo}/releases/tags/{tag}`](/rest/repos#get-a-release-by-tag-name) (read)
- [`GET /repos/{owner}/{repo}/releases/{release_id}`](/rest/repos#get-a-release) (read)
- [`PATCH /repos/{owner}/{repo}/releases/{release_id}`](/rest/repos#update-a-release) (write)
- [`DELETE /repos/{owner}/{repo}/releases/{release_id}`](/rest/repos#delete-a-release) (write)
- [`GET /repos/{owner}/{repo}/releases/{release_id}/assets`](/rest/repos#list-release-assets) (read)
- [`POST /repos/{owner}/{repo}/merge-upstream`](/rest/branches/branches#sync-a-fork-branch-with-the-upstream-repository) (write)
- [`POST /repos/{owner}/{repo}/releases/generate-notes`](/rest/repos#generate-release-notes) (write)
- [`GET /repos/{owner}/{repo}/codeowners/errors`](/rest/repos#list-codeowners-errors) (read)
- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (read)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases`](/rest/code-scanning#list-codeql-databases) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`](/rest/code-scanning#get-codeql-database) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/community/profile`](/rest/metrics/community#get-community-profile-metrics) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import`](/rest/migrations#get-an-import-status) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/import`](/rest/migrations#start-an-import) (write){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import`](/rest/migrations#update-an-import) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/import`](/rest/migrations#cancel-an-import) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/authors`](/rest/migrations#get-commit-authors) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/authors/{author_id}`](/rest/migrations#map-a-commit-author) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/large_files`](/rest/migrations#get-large-files) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/lfs`](/rest/migrations#update-git-lfs-preference) (write){% endif %}

## Dependabot secrets

- [`GET /repos/{owner}/{repo}/dependabot/secrets`](/rest/dependabot#list-repository-secrets) (read)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/public-key`](/rest/dependabot#get-a-repository-public-key) (read)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/dependabot#get-a-repository-secret) (read)
- [`PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/dependabot#create-or-update-a-repository-secret) (write)
- [`DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/dependabot#delete-a-repository-secret) (write)

## Deployments

- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/actions#review-pending-deployments-for-a-workflow-run) (read)
- [`GET /repos/{owner}/{repo}/deployments`](/rest/deployments/deployments#list-deployments) (read)
- [`POST /repos/{owner}/{repo}/deployments`](/rest/deployments/deployments#create-a-deployment) (write)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/deployments/deployments#get-a-deployment) (read)
- [`DELETE /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/deployments/deployments#delete-a-deployment) (write)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/deployments/statuses#list-deployment-statuses) (read)
- [`POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/deployments/statuses#create-a-deployment-status) (write)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`](/rest/deployments/statuses#get-a-deployment-status) (read)

## Emails

- [`GET /user/emails`](/rest/users#list-email-addresses-for-the-authenticated-user) (read)
- [`POST /user/emails`](/rest/users#add-an-email-address-for-the-authenticated-user) (write)
- [`DELETE /user/emails`](/rest/users#delete-an-email-address-for-the-authenticated-user) (write)
- [`GET /user/public_emails`](/rest/users#list-public-email-addresses-for-the-authenticated-user) (read)
{% ifversion fpt or ghec %}- [`PATCH /user/email/visibility`](/rest/users#set-primary-email-visibility-for-the-authenticated-user) (write){% endif %}

{% ifversion ghec or ghes > 3.3 %}

## Enterprise administration

{% ifversion ghec or ghes > 3.3 %}- [`GET /enterprises/{enterprise}/settings/billing/advanced-security`](/rest/billing#export-advanced-security-active-committers-data-for-enterprise) (write){% endif %}
{% ifversion ghec or ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage`](/rest/actions#get-github-actions-cache-usage-for-an-enterprise) (write){% endif %}
{% ifversion ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/actions#get-github-actions-cache-usage-policy-for-an-enterprise) (write){% endif %}
{% ifversion ghes > 3.4 %}- [`PATCH /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/actions#set-github-actions-cache-usage-policy-for-an-enterprise) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`GET /scim/v2/Groups`](/rest/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`POST /scim/v2/Groups`](/rest/enterprise-admin#provision-a-scim-enterprise-group) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`GET /scim/v2/Groups/{scim_group_id}`](/rest/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`PUT /scim/v2/Groups/{scim_group_id}`](/rest/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`PATCH /scim/v2/Groups/{scim_group_id}`](/rest/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`DELETE /scim/v2/Groups/{scim_group_id}`](/rest/enterprise-admin#delete-a-scim-group-from-an-enterprise) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`GET /scim/v2/Users`](/rest/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`POST /scim/v2/Users`](/rest/enterprise-admin#provision-a-scim-enterprise-user) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`GET /scim/v2/Users/{scim_user_id}`](/rest/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`PUT /scim/v2/Users/{scim_user_id}`](/rest/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user) (write){% endif %}
{% ifversion ghes > 3.5 %}- [`DELETE /scim/v2/Users/{scim_user_id}`](/rest/enterprise-admin#delete-a-scim-user-from-an-enterprise) (write){% endif %}

{% endif %}

## Environments

- [`GET /repositories/{repository_id}/environments/{environment_name}/secrets`](/rest/actions#list-environment-secrets) (read)
- [`GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key`](/rest/actions#get-an-environment-public-key) (read)
- [`GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`](/rest/actions#get-an-environment-secret) (read)
- [`PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`](/rest/actions#create-or-update-an-environment-secret) (write)
- [`DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`](/rest/actions#delete-an-environment-secret) (write)
{% ifversion fpt or ghec %}- [`GET /repositories/{repository_id}/environments/{environment_name}/variables`](/rest/actions/variables#list-environment-variables) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /repositories/{repository_id}/environments/{environment_name}/variables`](/rest/actions/variables#create-an-environment-variable) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /repositories/{repository_id}/environments/{environment_name}/variables/{name}`](/rest/actions/variables#get-an-environment-variable) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repositories/{repository_id}/environments/{environment_name}/variables/{name}`](/rest/actions/variables#update-an-environment-variable) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repositories/{repository_id}/environments/{environment_name}/variables/{name}`](/rest/actions/variables#delete-an-environment-variable) (write){% endif %}

## Followers

- [`GET /user/followers`](/rest/users#list-followers-of-the-authenticated-user) (read)
- [`GET /user/following`](/rest/users#list-the-people-the-authenticated-user-follows) (read)
- [`GET /user/following/{username}`](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user) (read)
- [`PUT /user/following/{username}`](/rest/users#follow-a-user) (write)
- [`DELETE /user/following/{username}`](/rest/users#unfollow-a-user) (write)

## Gists

- [`POST /gists`](/rest/gists#create-a-gist) (write)
- [`PATCH /gists/{gist_id}`](/rest/gists#update-a-gist) (write)
- [`DELETE /gists/{gist_id}`](/rest/gists#delete-a-gist) (write)
- [`POST /gists/{gist_id}/comments`](/rest/gists#create-a-gist-comment) (write)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/gists#update-a-gist-comment) (write)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/gists#delete-a-gist-comment) (write)
- [`POST /gists/{gist_id}/forks`](/rest/gists#fork-a-gist) (write)
- [`PUT /gists/{gist_id}/star`](/rest/gists#star-a-gist) (write)
- [`DELETE /gists/{gist_id}/star`](/rest/gists#unstar-a-gist) (write)

## Git signing ssh public keys

- [`GET /user/ssh_signing_keys`](/rest/users#list-public-ssh-signing-keys-for-the-authenticated-user) (read)
- [`POST /user/ssh_signing_keys`](/rest/users#create-an-ssh-signing-key-for-the-authenticated-user) (write)
- [`GET /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/users#get-a-ssh-signing-key-for-the-authenticated-user) (read)
- [`DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/users#delete-a-ssh-signing-key-for-the-authenticated-user) (write)

## Gpg keys

- [`GET /user/gpg_keys`](/rest/users#list-gpg-keys-for-the-authenticated-user) (read)
- [`POST /user/gpg_keys`](/rest/users#create-a-gpg-key-for-the-authenticated-user) (write)
- [`GET /user/gpg_keys/{gpg_key_id}`](/rest/users#get-a-gpg-key-for-the-authenticated-user) (read)
- [`DELETE /user/gpg_keys/{gpg_key_id}`](/rest/users#delete-a-gpg-key-for-the-authenticated-user) (write)

{% ifversion fpt or ghec %}

## Interaction limits

{% ifversion fpt or ghec %}- [`GET /user/interaction-limits`](/rest/interactions#get-interaction-restrictions-for-your-public-repositories) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/interaction-limits`](/rest/interactions#set-interaction-restrictions-for-your-public-repositories) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/interaction-limits`](/rest/interactions#remove-interaction-restrictions-from-your-public-repositories) (write){% endif %}

{% endif %}

## Issues

- [`GET /repos/{owner}/{repo}/assignees`](/rest/issues#list-assignees) (read)
- [`GET /repos/{owner}/{repo}/assignees/{assignee}`](/rest/issues#check-if-a-user-can-be-assigned) (read)
- [`GET /repos/{owner}/{repo}/issues`](/rest/issues#list-repository-issues) (read)
- [`POST /repos/{owner}/{repo}/issues`](/rest/issues#create-an-issue) (write)
- [`GET /repos/{owner}/{repo}/issues/comments`](/rest/issues#list-issue-comments-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/issues#get-an-issue-comment) (read)
- [`PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/issues#update-an-issue-comment) (write)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/issues#delete-an-issue-comment) (write)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reactions#list-reactions-for-an-issue-comment) (read)
- [`POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reactions#create-reaction-for-an-issue-comment) (write)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`](/rest/reactions#delete-an-issue-comment-reaction) (write)
- [`GET /repos/{owner}/{repo}/issues/events`](/rest/issues#list-issue-events-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/issues/events/{event_id}`](/rest/issues#get-an-issue-event) (read)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}`](/rest/issues#get-an-issue) (read)
- [`PATCH /repos/{owner}/{repo}/issues/{issue_number}`](/rest/issues#update-an-issue) (write)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/issues#add-assignees-to-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/issues#remove-assignees-from-an-issue) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}`](/rest/issues#check-if-a-user-can-be-assigned-to-a-issue) (read)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/issues#list-issue-comments) (read)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/issues#create-an-issue-comment) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/events`](/rest/issues#list-issue-events) (read)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#list-labels-for-an-issue) (read)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#add-labels-to-an-issue) (write)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#set-labels-for-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#remove-all-labels-from-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}`](/rest/issues#remove-a-label-from-an-issue) (write)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/issues#lock-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/issues#unlock-an-issue) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reactions#list-reactions-for-an-issue) (read)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reactions#create-reaction-for-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`](/rest/reactions#delete-an-issue-reaction) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`](/rest/issues#list-timeline-events-for-an-issue) (read)
- [`GET /repos/{owner}/{repo}/labels`](/rest/issues#list-labels-for-a-repository) (read)
- [`POST /repos/{owner}/{repo}/labels`](/rest/issues#create-a-label) (write)
- [`GET /repos/{owner}/{repo}/labels/{name}`](/rest/issues#get-a-label) (read)
- [`PATCH /repos/{owner}/{repo}/labels/{name}`](/rest/issues#update-a-label) (write)
- [`DELETE /repos/{owner}/{repo}/labels/{name}`](/rest/issues#delete-a-label) (write)
- [`GET /repos/{owner}/{repo}/milestones`](/rest/issues#list-milestones) (read)
- [`POST /repos/{owner}/{repo}/milestones`](/rest/issues#create-a-milestone) (write)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/issues#get-a-milestone) (read)
- [`PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/issues#update-a-milestone) (write)
- [`DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/issues#delete-a-milestone) (write)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`](/rest/issues#list-labels-for-issues-in-a-milestone) (read)

## Keys

- [`GET /user/keys`](/rest/users#list-public-ssh-keys-for-the-authenticated-user) (read)
- [`POST /user/keys`](/rest/users#create-a-public-ssh-key-for-the-authenticated-user) (write)
- [`GET /user/keys/{key_id}`](/rest/users#get-a-public-ssh-key-for-the-authenticated-user) (read)
- [`DELETE /user/keys/{key_id}`](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user) (write)

## Members

- [`GET /orgs/{org}/members`](/rest/orgs#list-organization-members) (read)
- [`GET /orgs/{org}/members/{username}`](/rest/orgs#check-organization-membership-for-a-user) (read)
- [`DELETE /orgs/{org}/members/{username}`](/rest/orgs#remove-an-organization-member) (write)
- [`GET /orgs/{org}/memberships/{username}`](/rest/orgs#get-organization-membership-for-a-user) (read)
- [`PUT /orgs/{org}/memberships/{username}`](/rest/orgs#set-organization-membership-for-a-user) (write)
- [`DELETE /orgs/{org}/memberships/{username}`](/rest/orgs#remove-organization-membership-for-a-user) (write)
- [`GET /orgs/{org}/outside_collaborators`](/rest/orgs#list-outside-collaborators-for-an-organization) (read)
- [`PUT /orgs/{org}/outside_collaborators/{username}`](/rest/orgs#convert-an-organization-member-to-outside-collaborator) (write)
- [`DELETE /orgs/{org}/outside_collaborators/{username}`](/rest/orgs#remove-outside-collaborator-from-an-organization) (write)
- [`GET /orgs/{org}/public_members`](/rest/orgs#list-public-organization-members) (read)
- [`GET /orgs/{org}/public_members/{username}`](/rest/orgs#check-public-organization-membership-for-a-user) (read)
- [`PUT /orgs/{org}/public_members/{username}`](/rest/orgs#set-public-organization-membership-for-the-authenticated-user) (write)
- [`DELETE /orgs/{org}/public_members/{username}`](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user) (write)
- [`GET /orgs/{org}/teams`](/rest/teams#list-teams) (read)
- [`POST /orgs/{org}/teams`](/rest/teams#create-a-team) (write)
- [`GET /teams/{team_id}/members/{username}`](/rest/teams#get-team-member-legacy) (read)
- [`PUT /teams/{team_id}/members/{username}`](/rest/teams#add-team-member-legacy) (write)
- [`DELETE /teams/{team_id}/members/{username}`](/rest/teams#remove-team-member-legacy) (write)
- [`GET /user/teams`](/rest/teams#list-teams-for-the-authenticated-user) (read)
- [`GET /user/memberships/orgs/{org}`](/rest/orgs#get-an-organization-membership-for-the-authenticated-user) (read)
- [`PATCH /user/memberships/orgs/{org}`](/rest/orgs#update-an-organization-membership-for-the-authenticated-user) (write)
{% ifversion ghec or ghes > 3.5 %}- [`GET /orgs/{org}/external-group/{group_id}`](/rest/teams#external-idp-group-info-for-an-organization) (write){% endif %}
{% ifversion ghec or ghes > 3.5 %}- [`GET /orgs/{org}/external-groups`](/rest/teams#list-external-idp-groups-for-an-organization) (write){% endif %}
{% ifversion ghec or ghes > 3.5 %}- [`GET /orgs/{org}/teams/{team_slug}/external-groups`](/rest/teams#list-external-idp-group-team-connection) (write){% endif %}
{% ifversion ghec or ghes > 3.5 %}- [`PATCH /orgs/{org}/teams/{team_slug}/external-groups`](/rest/teams#link-external-idp-group-team-connection) (write){% endif %}
{% ifversion ghec or ghes > 3.5 %}- [`DELETE /orgs/{org}/teams/{team_slug}/external-groups`](/rest/teams#unlink-external-idp-group-team-connection) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/failed_invitations`](/rest/orgs#list-failed-organization-invitations) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations`](/rest/orgs#list-pending-organization-invitations) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/invitations`](/rest/orgs#create-an-organization-invitation) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/invitations/{invitation_id}`](/rest/orgs#cancel-an-organization-invitation) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations/{invitation_id}/teams`](/rest/orgs#list-organization-invitation-teams) (read){% endif %}

## Metadata

- [`POST /gists`](/rest/gists#create-a-gist) (read)
- [`PATCH /gists/{gist_id}`](/rest/gists#update-a-gist) (read)
- [`DELETE /gists/{gist_id}`](/rest/gists#delete-a-gist) (read)
- [`POST /gists/{gist_id}/comments`](/rest/gists#create-a-gist-comment) (read)
- [`GET /gists/{gist_id}/comments/{comment_id}`](/rest/gists#get-a-gist-comment) (read)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/gists#update-a-gist-comment) (read)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/gists#delete-a-gist-comment) (read)
- [`POST /gists/{gist_id}/forks`](/rest/gists#fork-a-gist) (read)
- [`PUT /gists/{gist_id}/star`](/rest/gists#star-a-gist) (read)
- [`DELETE /gists/{gist_id}/star`](/rest/gists#unstar-a-gist) (read)
- [`PUT /orgs/{org}/actions/permissions/repositories/{repository_id}`](/rest/actions#enable-a-selected-repository-for-github-actions-in-an-organization) (read)
- [`DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}`](/rest/actions#disable-a-selected-repository-for-github-actions-in-an-organization) (read)
{% ifversion ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}`](/rest/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization) (read){% endif %}
{% ifversion ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}`](/rest/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization) (read){% endif %}
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`](/rest/actions#add-selected-repository-to-an-organization-secret) (read)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`](/rest/actions#remove-selected-repository-from-an-organization-secret) (read)
- [`GET /orgs/{org}/repos`](/rest/repos#list-organization-repositories) (read)
- [`GET /repos/{owner}/{repo}`](/rest/repos#get-a-repository) (read)
- [`GET /repos/{owner}/{repo}/collaborators`](/rest/collaborators/collaborators#list-repository-collaborators) (read)
- [`GET /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator) (read)
- [`GET /repos/{owner}/{repo}/collaborators/{username}/permission`](/rest/collaborators/collaborators#get-repository-permissions-for-a-user) (read)
- [`GET /repos/{owner}/{repo}/comments`](/rest/commits/comments#list-commit-comments-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#get-a-commit-comment) (read)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reactions#list-reactions-for-a-commit-comment) (read)
- [`GET /repos/{owner}/{repo}/commits/{commit_sha}/comments`](/rest/commits/comments#list-commit-comments) (read)
- [`GET /repos/{owner}/{repo}/contributors`](/rest/repos#list-repository-contributors) (read)
- [`GET /repos/{owner}/{repo}/events`](/rest/activity#list-repository-events) (read)
- [`GET /repos/{owner}/{repo}/forks`](/rest/repos#list-forks) (read)
- [`GET /repos/{owner}/{repo}/languages`](/rest/repos#list-repository-languages) (read)
- [`GET /repos/{owner}/{repo}/license`](/rest/licenses#get-the-license-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/stargazers`](/rest/activity#list-stargazers) (read)
- [`GET /repos/{owner}/{repo}/stats/code_frequency`](/rest/metrics/statistics#get-the-weekly-commit-activity) (read)
- [`GET /repos/{owner}/{repo}/stats/commit_activity`](/rest/metrics/statistics#get-the-last-year-of-commit-activity) (read)
- [`GET /repos/{owner}/{repo}/stats/contributors`](/rest/metrics/statistics#get-all-contributor-commit-activity) (read)
- [`GET /repos/{owner}/{repo}/stats/participation`](/rest/metrics/statistics#get-the-weekly-commit-count) (read)
- [`GET /repos/{owner}/{repo}/stats/punch_card`](/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day) (read)
- [`GET /repos/{owner}/{repo}/subscribers`](/rest/activity#list-watchers) (read)
- [`GET /repos/{owner}/{repo}/tags`](/rest/repos#list-repository-tags) (read)
- [`GET /repos/{owner}/{repo}/topics`](/rest/repos#get-all-repository-topics) (read)
- [`POST /repos/{template_owner}/{template_repo}/generate`](/rest/repos#create-a-repository-using-a-template) (read)
- [`GET /repositories`](/rest/repos#list-public-repositories) (read)
- [`GET /search/labels`](/rest/search#search-labels) (read)
- [`GET /user/repos`](/rest/repos#list-repositories-for-the-authenticated-user) (read)
- [`GET /users/{username}/repos`](/rest/repos#list-repositories-for-a-user) (read)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`](/rest/dependabot#add-selected-repository-to-an-organization-secret) (read)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`](/rest/dependabot#remove-selected-repository-from-an-organization-secret) (read)
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}`](/rest/actions#add-a-repository-to-selected-repositories-list-for-a-required-workflow) (read){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}`](/rest/actions#remove-a-repository-from-selected-repositories-list-for-a-required-workflow) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#add-selected-repository-to-an-organization-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#remove-selected-repository-from-an-organization-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#list-selected-repositories-for-a-user-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#set-selected-repositories-for-a-user-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#add-a-selected-repository-to-a-user-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#remove-a-selected-repository-from-a-user-secret) (read){% endif %}

{% ifversion fpt or ghec %}

## Organization actions variables

{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/variables`](/rest/actions/variables#list-organization-variables) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/actions/variables`](/rest/actions/variables#create-an-organization-variable) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/variables/{name}`](/rest/actions/variables#get-an-organization-variable) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /orgs/{org}/actions/variables/{name}`](/rest/actions/variables#update-an-organization-variable) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/actions/variables/{name}`](/rest/actions/variables#delete-an-organization-variable) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/variables/{name}/repositories`](/rest/actions/variables#list-selected-repositories-for-an-organization-variable) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/actions/variables/{name}/repositories`](/rest/actions/variables#set-selected-repositories-for-an-organization-variable) (write){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}`](/rest/actions/variables#add-selected-repository-to-an-organization-variable) (write){% endif %}

{% endif %}

## Organization administration

- [`PATCH /orgs/{org}`](/rest/orgs#update-an-organization) (write)
- [`GET /orgs/{org}/actions/permissions`](/rest/actions#get-github-actions-permissions-for-an-organization) (read)
- [`PUT /orgs/{org}/actions/permissions`](/rest/actions#set-github-actions-permissions-for-an-organization) (write)
- [`GET /orgs/{org}/actions/permissions/repositories`](/rest/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization) (read)
- [`PUT /orgs/{org}/actions/permissions/repositories`](/rest/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization) (write)
- [`PUT /orgs/{org}/actions/permissions/repositories/{repository_id}`](/rest/actions#enable-a-selected-repository-for-github-actions-in-an-organization) (write)
- [`DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}`](/rest/actions#disable-a-selected-repository-for-github-actions-in-an-organization) (write)
- [`GET /orgs/{org}/actions/permissions/selected-actions`](/rest/actions#get-allowed-actions-for-an-organization) (read)
- [`PUT /orgs/{org}/actions/permissions/selected-actions`](/rest/actions#set-allowed-actions-for-an-organization) (write)
- [`GET /orgs/{org}/installations`](/rest/orgs#list-app-installations-for-an-organization) (read)
{% ifversion ghec or ghes %}- [`GET /orgs/{org}/audit-log`](/rest/orgs#get-audit-log) (read){% endif %}
{% ifversion ghec or ghes > 3.3 %}- [`GET /orgs/{org}/settings/billing/advanced-security`](/rest/billing#get-github-advanced-security-active-committers-for-an-organization) (read){% endif %}
- [`GET /orgs/{org}/actions/cache/usage`](/rest/actions#get-github-actions-cache-usage-for-an-organization) (read)
- [`GET /orgs/{org}/actions/cache/usage-by-repository`](/rest/actions#list-repositories-with-github-actions-cache-usage-for-an-organization) (read)
- [`GET /orgs/{org}/actions/permissions/workflow`](/rest/actions#get-default-workflow-permissions) (read)
- [`PUT /orgs/{org}/actions/permissions/workflow`](/rest/actions#set-default-workflow-permissions) (write)
- [`GET /orgs/{org}/actions/oidc/customization/sub`](/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-an-organization) (read)
- [`PUT /orgs/{org}/actions/oidc/customization/sub`](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization) (write)
- [`GET /orgs/{org}/security-managers`](/rest/orgs#list-security-manager-teams) (read)
- [`PUT /orgs/{org}/security-managers/teams/{team_slug}`](/rest/orgs#add-a-security-manager-team) (write)
- [`DELETE /orgs/{org}/security-managers/teams/{team_slug}`](/rest/orgs#remove-a-security-manager-team) (write)
- [`POST /orgs/{org}/{security_product}/{enablement}`](/rest/orgs#enable-or-disable-security-product-on-all-org-repos) (write)
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/required_workflows`](/rest/actions#list-required-workflows) (read){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/actions/required_workflows`](/rest/actions#create-a-required-workflow) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/required_workflows/{required_workflow_id}`](/rest/actions#get-a-required-workflow) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /orgs/{org}/actions/required_workflows/{required_workflow_id}`](/rest/actions#update-a-required-workflow) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}`](/rest/actions#delete-a-required-workflow) (write){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories`](/rest/actions#set-selected-repositories-for-a-required-workflow) (write){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}`](/rest/actions#add-a-repository-to-selected-repositories-list-for-a-required-workflow) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}`](/rest/actions#remove-a-repository-from-selected-repositories-list-for-a-required-workflow) (write){% endif %}
{% ifversion ghec %}- [`GET /orgs/{org}/custom_roles/{role_id}`](/rest/orgs#get-a-custom-role) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/interaction-limits`](/rest/interactions#get-interaction-restrictions-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/interaction-limits`](/rest/interactions#set-interaction-restrictions-for-an-organization) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/interaction-limits`](/rest/interactions#remove-interaction-restrictions-for-an-organization) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/actions`](/rest/billing#get-github-actions-billing-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/packages`](/rest/billing#get-github-packages-billing-for-an-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/shared-storage`](/rest/billing#get-shared-storage-billing-for-an-organization) (read){% endif %}

{% ifversion ghec %}

## Organization announcement banners

{% ifversion ghec %}- [`GET /orgs/{org}/announcement`](/rest/announcement-banners#get-enterprise-announcement-banner-for-org) (read){% endif %}
{% ifversion ghec %}- [`PATCH /orgs/{org}/announcement`](/rest/announcement-banners/organizations#set-announcement-banner-for-organization) (write){% endif %}
{% ifversion ghec %}- [`DELETE /orgs/{org}/announcement`](/rest/announcement-banners/organizations#remove-announcement-banner-from-organization) (write){% endif %}

{% endif %}

{% ifversion fpt or ghec %}

{% ifversion fpt or ghec %}

## Organization codespaces

{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces`](/rest/codespaces#list-in-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/members/{username}/codespaces`](/rest/codespaces#get-codespaces-for-user-in-org) (read){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}`](/rest/codespaces) (write){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`](/rest/codespaces) (write){% endif %}

## Organization codespaces secrets

{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces/secrets`](/rest/codespaces#list-organization-secrets) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces/secrets/public-key`](/rest/codespaces#get-an-organization-public-key) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/codespaces#get-an-organization-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/codespaces#create-or-update-an-organization-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/codespaces#delete-an-organization-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#list-selected-repositories-for-an-organization-secret) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#set-selected-repositories-for-an-organization-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#add-selected-repository-to-an-organization-secret) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#remove-selected-repository-from-an-organization-secret) (write){% endif %}

## Organization codespaces settings

{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/codespaces/billing`](/rest/codespaces#set-codespaces-billing) (write){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/codespaces/billing/selected_users`](/rest/codespaces#set-codespaces-billing-users) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/codespaces/billing/selected_users`](/rest/codespaces#delete-codespaces-billing-users) (write){% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.3 %}

{% endif %}

## Organization custom roles

{% ifversion ghec or ghes > 3.3 %}- [`GET /organizations/{organization_id}/custom_roles`](/rest/orgs#list-custom-repository-roles-in-an-organization) (read){% endif %}
{% ifversion ghec %}- [`POST /orgs/{org}/custom_roles`](/rest/orgs#create-a-custom-role) (write){% endif %}
{% ifversion ghec %}- [`GET /orgs/{org}/custom_roles/{role_id}`](/rest/orgs#get-a-custom-role) (read){% endif %}
{% ifversion ghec %}- [`PATCH /orgs/{org}/custom_roles/{role_id}`](/rest/orgs#update-a-custom-role) (write){% endif %}
{% ifversion ghec %}- [`DELETE /orgs/{org}/custom_roles/{role_id}`](/rest/orgs#delete-a-custom-role) (write){% endif %}
{% ifversion ghec %}- [`GET /orgs/{org}/fine_grained_permissions`](/rest/orgs#list-repository-fine-grained-permissions-for-an-organization) (read){% endif %}

{% endif %}

## Organization dependabot secrets

- [`GET /orgs/{org}/dependabot/secrets`](/rest/dependabot#list-organization-secrets) (read)
- [`GET /orgs/{org}/dependabot/secrets/public-key`](/rest/dependabot#get-an-organization-public-key) (read)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/dependabot#get-an-organization-secret) (read)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/dependabot#create-or-update-an-organization-secret) (write)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/dependabot#delete-an-organization-secret) (write)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/dependabot#list-selected-repositories-for-an-organization-secret) (read)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/dependabot#set-selected-repositories-for-an-organization-secret) (write)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`](/rest/dependabot#add-selected-repository-to-an-organization-secret) (write)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`](/rest/dependabot#remove-selected-repository-from-an-organization-secret) (write)

## Organization events

- [`GET /users/{username}/events/orgs/{org}`](/rest/activity#list-organization-events-for-the-authenticated-user) (read)

## Organization hooks

- [`GET /orgs/{org}/hooks`](/rest/orgs#list-organization-webhooks) (read)
- [`POST /orgs/{org}/hooks`](/rest/orgs#create-an-organization-webhook) (write)
- [`GET /orgs/{org}/hooks/{hook_id}`](/rest/orgs#get-an-organization-webhook) (read)
- [`PATCH /orgs/{org}/hooks/{hook_id}`](/rest/orgs#update-an-organization-webhook) (write)
- [`DELETE /orgs/{org}/hooks/{hook_id}`](/rest/orgs#delete-an-organization-webhook) (write)
- [`GET /orgs/{org}/hooks/{hook_id}/config`](/rest/orgs#get-a-webhook-configuration-for-an-organization) (read)
- [`PATCH /orgs/{org}/hooks/{hook_id}/config`](/rest/orgs#update-a-webhook-configuration-for-an-organization) (write)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries`](/rest/orgs#list-deliveries-for-an-organization-webhook) (read)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/orgs#get-a-webhook-delivery-for-an-organization-webhook) (read)
- [`POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/orgs#redeliver-a-delivery-for-an-organization-webhook) (write)
- [`POST /orgs/{org}/hooks/{hook_id}/pings`](/rest/orgs#ping-an-organization-webhook) (write)

{% ifversion ghes %}

## Organization pre receive hooks

{% ifversion ghes %}- [`GET /orgs/{org}/pre-receive-hooks`](/rest/enterprise-admin#list-pre-receive-hooks-for-an-organization) (read){% endif %}
{% ifversion ghes %}- [`GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/enterprise-admin#get-a-pre-receive-hook-for-an-organization) (read){% endif %}
{% ifversion ghes %}- [`DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization) (write){% endif %}

{% endif %}

## Organization projects

- [`GET /orgs/{org}/projects`](/rest/projects#list-organization-projects) (read)
- [`POST /orgs/{org}/projects`](/rest/projects#create-an-organization-project) (write)
- [`GET /projects/columns/cards/{card_id}`](/rest/projects#get-a-project-card) (read)
- [`PATCH /projects/columns/cards/{card_id}`](/rest/projects#update-a-project-card) (write)
- [`DELETE /projects/columns/cards/{card_id}`](/rest/projects#delete-a-project-card) (write)
- [`POST /projects/columns/cards/{card_id}/moves`](/rest/projects#move-a-project-card) (write)
- [`GET /projects/columns/{column_id}`](/rest/projects#get-a-project-column) (read)
- [`PATCH /projects/columns/{column_id}`](/rest/projects#update-a-project-column) (write)
- [`DELETE /projects/columns/{column_id}`](/rest/projects#delete-a-project-column) (write)
- [`GET /projects/columns/{column_id}/cards`](/rest/projects#list-project-cards) (read)
- [`POST /projects/columns/{column_id}/cards`](/rest/projects#create-a-project-card) (write)
- [`POST /projects/columns/{column_id}/moves`](/rest/projects#move-a-project-column) (write)
- [`GET /projects/{project_id}`](/rest/projects#get-a-project) (read)
- [`PATCH /projects/{project_id}`](/rest/projects#update-a-project) (write)
- [`DELETE /projects/{project_id}`](/rest/projects#delete-a-project) (write)
- [`GET /projects/{project_id}/collaborators`](/rest/projects#list-project-collaborators) (admin)
- [`PUT /projects/{project_id}/collaborators/{username}`](/rest/projects#add-project-collaborator) (admin)
- [`DELETE /projects/{project_id}/collaborators/{username}`](/rest/projects#remove-project-collaborator) (admin)
- [`GET /projects/{project_id}/collaborators/{username}/permission`](/rest/projects#get-project-permission-for-a-user) (admin)
- [`GET /projects/{project_id}/columns`](/rest/projects#list-project-columns) (read)
- [`POST /projects/{project_id}/columns`](/rest/projects#create-a-project-column) (write)

## Organization secrets

- [`GET /orgs/{org}/actions/secrets`](/rest/actions#list-organization-secrets) (read)
- [`GET /orgs/{org}/actions/secrets/public-key`](/rest/actions#get-an-organization-public-key) (read)
- [`GET /orgs/{org}/actions/secrets/{secret_name}`](/rest/actions#get-an-organization-secret) (read)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}`](/rest/actions#create-or-update-an-organization-secret) (write)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}`](/rest/actions#delete-an-organization-secret) (write)
- [`GET /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/actions#list-selected-repositories-for-an-organization-secret) (read)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/actions#set-selected-repositories-for-an-organization-secret) (write)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`](/rest/actions#add-selected-repository-to-an-organization-secret) (write)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`](/rest/actions#remove-selected-repository-from-an-organization-secret) (write)

## Organization self hosted runners

{% ifversion ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups`](/rest/actions#list-self-hosted-runner-groups-for-an-organization) (read){% endif %}
{% ifversion ghec or ghes %}- [`POST /orgs/{org}/actions/runner-groups`](/rest/actions#create-a-self-hosted-runner-group-for-an-organization) (write){% endif %}
{% ifversion ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/actions#get-a-self-hosted-runner-group-for-an-organization) (read){% endif %}
{% ifversion ghec or ghes %}- [`PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/actions#update-a-self-hosted-runner-group-for-an-organization) (write){% endif %}
{% ifversion ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/actions#delete-a-self-hosted-runner-group-from-an-organization) (write){% endif %}
{% ifversion ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization) (read){% endif %}
{% ifversion ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization) (write){% endif %}
{% ifversion ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}`](/rest/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization) (write){% endif %}
{% ifversion ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}`](/rest/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization) (write){% endif %}
{% ifversion ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/actions#list-self-hosted-runners-in-a-group-for-an-organization) (read){% endif %}
{% ifversion ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/actions#set-self-hosted-runners-in-a-group-for-an-organization) (write){% endif %}
{% ifversion ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/actions#add-a-self-hosted-runner-to-a-group-for-an-organization) (write){% endif %}
{% ifversion ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) (write){% endif %}
- [`GET /orgs/{org}/actions/runners`](/rest/actions#list-self-hosted-runners-for-an-organization) (read)
- [`GET /orgs/{org}/actions/runners/downloads`](/rest/actions#list-runner-applications-for-an-organization) (read)
- [`POST /orgs/{org}/actions/runners/registration-token`](/rest/actions#create-a-registration-token-for-an-organization) (write)
- [`POST /orgs/{org}/actions/runners/remove-token`](/rest/actions#create-a-remove-token-for-an-organization) (write)
- [`GET /orgs/{org}/actions/runners/{runner_id}`](/rest/actions#get-a-self-hosted-runner-for-an-organization) (read)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}`](/rest/actions#delete-a-self-hosted-runner-from-an-organization) (write)
- [`GET /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/actions#list-labels-for-a-self-hosted-runner-for-an-organization) (read)
- [`POST /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization) (write)
- [`PUT /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization) (write)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization) (write)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}`](/rest/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization) (write)

{% ifversion fpt or ghec %}

## Organization user blocking

{% ifversion fpt or ghec %}- [`GET /orgs/{org}/blocks`](/rest/orgs#list-users-blocked-by-an-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/blocks/{username}`](/rest/orgs#check-if-a-user-is-blocked-by-an-organization) (read){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/blocks/{username}`](/rest/orgs#block-a-user-from-an-organization) (write){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/blocks/{username}`](/rest/orgs#unblock-a-user-from-an-organization) (write){% endif %}

{% endif %}

## Pages

- [`GET /repos/{owner}/{repo}/pages`](/rest/pages#get-a-github-pages-site) (read)
- [`POST /repos/{owner}/{repo}/pages`](/rest/pages#create-a-github-pages-site) (write)
- [`PUT /repos/{owner}/{repo}/pages`](/rest/pages#update-information-about-a-github-pages-site) (write)
- [`DELETE /repos/{owner}/{repo}/pages`](/rest/pages#delete-a-github-pages-site) (write)
- [`GET /repos/{owner}/{repo}/pages/builds`](/rest/pages#list-github-pages-builds) (read)
- [`POST /repos/{owner}/{repo}/pages/builds`](/rest/pages#request-a-github-pages-build) (write)
- [`GET /repos/{owner}/{repo}/pages/builds/latest`](/rest/pages#get-latest-pages-build) (read)
- [`GET /repos/{owner}/{repo}/pages/builds/{build_id}`](/rest/pages#get-github-pages-build) (read)
- [`POST /repos/{owner}/{repo}/pages/deployment`](/rest/pages#create-a-github-pages-deployment) (write)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages) (write){% endif %}

{% ifversion fpt or ghec %}

## Plan

{% ifversion fpt or ghec %}- [`GET /users/{username}/settings/billing/actions`](/rest/billing#get-github-actions-billing-for-a-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /users/{username}/settings/billing/packages`](/rest/billing#get-github-packages-billing-for-a-user) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /users/{username}/settings/billing/shared-storage`](/rest/billing#get-shared-storage-billing-for-a-user) (read){% endif %}

{% endif %}

## Profile

- [`PATCH /user`](/rest/users#update-the-authenticated-user) (write)

## Pull requests

- [`GET /repos/{owner}/{repo}/assignees`](/rest/issues#list-assignees) (read)
- [`GET /repos/{owner}/{repo}/assignees/{assignee}`](/rest/issues#check-if-a-user-can-be-assigned) (read)
- [`GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`](/rest/commits/commits#list-pull-requests-associated-with-a-commit) (read)
- [`GET /repos/{owner}/{repo}/issues/comments`](/rest/issues#list-issue-comments-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/issues#get-an-issue-comment) (read)
- [`PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/issues#update-an-issue-comment) (write)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/issues#delete-an-issue-comment) (write)
- [`GET /repos/{owner}/{repo}/issues/events/{event_id}`](/rest/issues#get-an-issue-event) (read)
- [`PATCH /repos/{owner}/{repo}/issues/{issue_number}`](/rest/issues#update-an-issue) (write)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/issues#add-assignees-to-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/issues#remove-assignees-from-an-issue) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}`](/rest/issues#check-if-a-user-can-be-assigned-to-a-issue) (read)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/issues#list-issue-comments) (read)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/issues#create-an-issue-comment) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/events`](/rest/issues#list-issue-events) (read)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#list-labels-for-an-issue) (read)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#add-labels-to-an-issue) (write)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#set-labels-for-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#remove-all-labels-from-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}`](/rest/issues#remove-a-label-from-an-issue) (write)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/issues#lock-an-issue) (write)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/issues#unlock-an-issue) (write)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`](/rest/issues#list-timeline-events-for-an-issue) (read)
- [`GET /repos/{owner}/{repo}/labels`](/rest/issues#list-labels-for-a-repository) (read)
- [`POST /repos/{owner}/{repo}/labels`](/rest/issues#create-a-label) (write)
- [`GET /repos/{owner}/{repo}/labels/{name}`](/rest/issues#get-a-label) (read)
- [`PATCH /repos/{owner}/{repo}/labels/{name}`](/rest/issues#update-a-label) (write)
- [`DELETE /repos/{owner}/{repo}/labels/{name}`](/rest/issues#delete-a-label) (write)
- [`GET /repos/{owner}/{repo}/milestones`](/rest/issues#list-milestones) (read)
- [`POST /repos/{owner}/{repo}/milestones`](/rest/issues#create-a-milestone) (write)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/issues#get-a-milestone) (read)
- [`PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/issues#update-a-milestone) (write)
- [`DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/issues#delete-a-milestone) (write)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`](/rest/issues#list-labels-for-issues-in-a-milestone) (read)
- [`GET /repos/{owner}/{repo}/pulls`](/rest/pulls#list-pull-requests) (read)
- [`POST /repos/{owner}/{repo}/pulls`](/rest/pulls#create-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/comments`](/rest/pulls#list-review-comments-in-a-repository) (read)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/pulls#get-a-review-comment-for-a-pull-request) (read)
- [`PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/pulls#update-a-review-comment-for-a-pull-request) (write)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/pulls#delete-a-review-comment-for-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reactions#list-reactions-for-a-pull-request-review-comment) (read)
- [`POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reactions#create-reaction-for-a-pull-request-review-comment) (write)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`](/rest/reactions#delete-a-pull-request-comment-reaction) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/pulls#get-a-pull-request) (read)
- [`PATCH /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/pulls#update-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/pulls#list-review-comments-on-a-pull-request) (read)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/pulls#create-a-review-comment-for-a-pull-request) (write)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies`](/rest/pulls#create-a-reply-for-a-review-comment) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/commits`](/rest/pulls#list-commits-on-a-pull-request) (read)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/files`](/rest/pulls#list-pull-requests-files) (read)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/pulls#check-if-a-pull-request-has-been-merged) (read)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/pulls#get-all-requested-reviewers-for-a-pull-request) (read)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/pulls#request-reviewers-for-a-pull-request) (write)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/pulls#remove-requested-reviewers-from-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/pulls#list-reviews-for-a-pull-request) (read)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/pulls#create-a-review-for-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/pulls#get-a-review-for-a-pull-request) (read)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/pulls#update-a-review-for-a-pull-request) (write)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/pulls#delete-a-pending-review-for-a-pull-request) (write)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`](/rest/pulls#list-comments-for-a-pull-request-review) (read)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`](/rest/pulls#dismiss-a-review-for-a-pull-request) (write)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`](/rest/pulls#submit-a-review-for-a-pull-request) (write)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch`](/rest/pulls#update-a-pull-request-branch) (write)
- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/dependency-graph#get-a-diff-of-the-dependencies-between-commits) (read)

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

{% ifversion ghes %}- [`GET /repos/{owner}/{repo}/pre-receive-hooks`](/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository) (read){% endif %}
{% ifversion ghes %}- [`GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository) (read){% endif %}
{% ifversion ghes %}- [`DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository) (write){% endif %}

{% endif %}

## Repository projects

- [`GET /projects/columns/cards/{card_id}`](/rest/projects#get-a-project-card) (read)
- [`PATCH /projects/columns/cards/{card_id}`](/rest/projects#update-a-project-card) (write)
- [`DELETE /projects/columns/cards/{card_id}`](/rest/projects#delete-a-project-card) (write)
- [`POST /projects/columns/cards/{card_id}/moves`](/rest/projects#move-a-project-card) (write)
- [`GET /projects/columns/{column_id}`](/rest/projects#get-a-project-column) (read)
- [`PATCH /projects/columns/{column_id}`](/rest/projects#update-a-project-column) (write)
- [`DELETE /projects/columns/{column_id}`](/rest/projects#delete-a-project-column) (write)
- [`GET /projects/columns/{column_id}/cards`](/rest/projects#list-project-cards) (read)
- [`POST /projects/columns/{column_id}/cards`](/rest/projects#create-a-project-card) (write)
- [`POST /projects/columns/{column_id}/moves`](/rest/projects#move-a-project-column) (write)
- [`GET /projects/{project_id}`](/rest/projects#get-a-project) (read)
- [`PATCH /projects/{project_id}`](/rest/projects#update-a-project) (write)
- [`DELETE /projects/{project_id}`](/rest/projects#delete-a-project) (write)
- [`GET /projects/{project_id}/collaborators`](/rest/projects#list-project-collaborators) (write)
- [`PUT /projects/{project_id}/collaborators/{username}`](/rest/projects#add-project-collaborator) (write)
- [`DELETE /projects/{project_id}/collaborators/{username}`](/rest/projects#remove-project-collaborator) (write)
- [`GET /projects/{project_id}/collaborators/{username}/permission`](/rest/projects#get-project-permission-for-a-user) (write)
- [`GET /projects/{project_id}/columns`](/rest/projects#list-project-columns) (read)
- [`POST /projects/{project_id}/columns`](/rest/projects#create-a-project-column) (write)
- [`GET /repos/{owner}/{repo}/projects`](/rest/projects#list-repository-projects) (read)
- [`POST /repos/{owner}/{repo}/projects`](/rest/projects#create-a-repository-project) (write)

## Secret scanning alerts

- [`GET /repos/{owner}/{repo}/secret-scanning/alerts`](/rest/secret-scanning#list-secret-scanning-alerts-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/secret-scanning#get-a-secret-scanning-alert) (read)
- [`PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/secret-scanning#update-a-secret-scanning-alert) (write)
- [`GET /orgs/{org}/secret-scanning/alerts`](/rest/secret-scanning#list-secret-scanning-alerts-for-an-organization) (read)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`](/rest/secret-scanning#list-locations-for-a-secret-scanning-alert) (read)

## Secrets

- [`GET /repos/{owner}/{repo}/actions/secrets`](/rest/actions#list-repository-secrets) (read)
- [`GET /repos/{owner}/{repo}/actions/secrets/public-key`](/rest/actions#get-a-repository-public-key) (read)
- [`GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/actions#get-a-repository-secret) (read)
- [`PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/actions#create-or-update-a-repository-secret) (write)
- [`DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/actions#delete-a-repository-secret) (write)
- [`GET /repositories/{repository_id}/environments/{environment_name}/secrets`](/rest/actions#list-environment-secrets) (read)
- [`GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key`](/rest/actions#get-an-environment-public-key) (read)
- [`GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`](/rest/actions#get-an-environment-secret) (read)
- [`PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`](/rest/actions#create-or-update-an-environment-secret) (write)
- [`DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`](/rest/actions#delete-an-environment-secret) (write)

## Security events

- [`GET /repos/{owner}/{repo}/code-scanning/alerts`](/rest/code-scanning#list-code-scanning-alerts-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/code-scanning#get-a-code-scanning-alert) (read)
- [`PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/code-scanning#update-a-code-scanning-alert) (write)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`](/rest/code-scanning#list-instances-of-a-code-scanning-alert) (read)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses`](/rest/code-scanning#list-code-scanning-analyses-for-a-repository) (read)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/code-scanning#get-a-code-scanning-analysis-for-a-repository) (read)
- [`DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/code-scanning#delete-a-code-scanning-analysis-from-a-repository) (write)
- [`POST /repos/{owner}/{repo}/code-scanning/sarifs`](/rest/code-scanning#upload-a-sarif-file) (write)
- [`GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`](/rest/code-scanning#list-recent-code-scanning-analyses-for-a-repository) (read)
- [`GET /orgs/{org}/code-scanning/alerts`](/rest/code-scanning#list-code-scanning-alerts-by-organization) (read)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts`](/rest/dependabot#list-dependabot-alerts-for-a-repository) (read){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/dependabot#get-a-dependabot-alert) (read){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/dependabot#update-a-dependabot-alert) (write){% endif %}

## Starring

- [`GET /user/starred`](/rest/activity#list-repositories-starred-by-the-authenticated-user) (read)
- [`GET /user/starred/{owner}/{repo}`](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user) (read)
- [`PUT /user/starred/{owner}/{repo}`](/rest/activity#star-a-repository-for-the-authenticated-user) (write)
- [`DELETE /user/starred/{owner}/{repo}`](/rest/activity#unstar-a-repository-for-the-authenticated-user) (write)
- [`GET /users/{username}/starred`](/rest/activity#list-repositories-starred-by-a-user) (read)

## Statuses

- [`GET /repos/{owner}/{repo}/commits/{ref}/status`](/rest/commits/statuses#get-the-combined-status-for-a-specific-reference) (read)
- [`GET /repos/{owner}/{repo}/commits/{ref}/statuses`](/rest/commits/statuses#list-commit-statuses-for-a-reference) (read)
- [`POST /repos/{owner}/{repo}/statuses/{sha}`](/rest/commits/statuses#create-a-commit-status) (write)

## Team discussions

- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}`](/rest/reactions#delete-team-discussion-comment-reaction) (write)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}`](/rest/reactions#delete-team-discussion-reaction) (write)

{% ifversion fpt or ghec %}

## Vulnerability alerts

{% ifversion fpt or ghec %}- [`GET /orgs/{org}/dependabot/alerts`](/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization) (read){% endif %}

{% endif %}

## Watching

- [`GET /user/subscriptions`](/rest/activity#list-repositories-watched-by-the-authenticated-user) (read)
- [`GET /users/{username}/subscriptions`](/rest/activity#list-repositories-watched-by-a-user) (read)

## Workflows

- [`POST /repos/{owner}/{repo}/git/refs`](/rest/git#create-a-reference) (write)
- [`PATCH /repos/{owner}/{repo}/git/refs/{ref}`](/rest/git#update-a-reference) (write)
