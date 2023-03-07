---
title: Endpoints available for fine-grained personal access tokens
intro: 'Your {% data variables.product.pat_v2 %} can make requests to the following REST endpoints.'
versions:
  feature: pat-v2
shortTitle: '{% data variables.product.pat_v2_caps %}-enabled endpoints'
---

## actions
{% ifversion ghec or ghes %}- [`GET /enterprises/{enterprise}/actions/permissions`](/rest/actions#get-github-actions-permissions-for-an-enterprise){% endif %}
{% ifversion ghec or ghes %}- [`PUT /enterprises/{enterprise}/actions/permissions`](/rest/actions#set-github-actions-permissions-for-an-enterprise){% endif %}
{% ifversion ghec or ghes %}- [`GET /enterprises/{enterprise}/actions/permissions/organizations`](/rest/actions#list-selected-organizations-enabled-for-github-actions-in-an-enterprise){% endif %}
{% ifversion ghec or ghes %}- [`PUT /enterprises/{enterprise}/actions/permissions/organizations`](/rest/actions#set-selected-organizations-enabled-for-github-actions-in-an-enterprise){% endif %}
{% ifversion ghec or ghes %}- [`PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}`](/rest/actions#enable-a-selected-organization-for-github-actions-in-an-enterprise){% endif %}
{% ifversion ghec or ghes %}- [`DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}`](/rest/actions#disable-a-selected-organization-for-github-actions-in-an-enterprise){% endif %}
{% ifversion ghec or ghes %}- [`GET /enterprises/{enterprise}/actions/permissions/selected-actions`](/rest/actions#get-allowed-actions-for-an-enterprise){% endif %}
{% ifversion ghec or ghes %}- [`PUT /enterprises/{enterprise}/actions/permissions/selected-actions`](/rest/actions#set-allowed-actions-for-an-enterprise){% endif %}
- [`GET /orgs/{org}/actions/permissions`](/rest/actions#get-github-actions-permissions-for-an-organization)
- [`PUT /orgs/{org}/actions/permissions`](/rest/actions#set-github-actions-permissions-for-an-organization)
- [`GET /orgs/{org}/actions/permissions/repositories`](/rest/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization)
- [`PUT /orgs/{org}/actions/permissions/repositories`](/rest/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization)
- [`PUT /orgs/{org}/actions/permissions/repositories/{repository_id}`](/rest/actions#enable-a-selected-repository-for-github-actions-in-an-organization)
- [`DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}`](/rest/actions#disable-a-selected-repository-for-github-actions-in-an-organization)
- [`GET /orgs/{org}/actions/permissions/selected-actions`](/rest/actions#get-allowed-actions-for-an-organization)
- [`PUT /orgs/{org}/actions/permissions/selected-actions`](/rest/actions#set-allowed-actions-for-an-organization)
{% ifversion ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups`](/rest/actions#list-self-hosted-runner-groups-for-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`POST /orgs/{org}/actions/runner-groups`](/rest/actions#create-a-self-hosted-runner-group-for-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/actions#get-a-self-hosted-runner-group-for-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/actions#update-a-self-hosted-runner-group-for-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}`](/rest/actions#delete-a-self-hosted-runner-group-from-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`](/rest/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}`](/rest/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}`](/rest/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/actions#list-self-hosted-runners-in-a-group-for-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners`](/rest/actions#set-self-hosted-runners-in-a-group-for-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/actions#add-a-self-hosted-runner-to-a-group-for-an-organization){% endif %}
{% ifversion ghec or ghes %}- [`DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}`](/rest/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization){% endif %}
- [`GET /orgs/{org}/actions/runners`](/rest/actions#list-self-hosted-runners-for-an-organization)
- [`GET /orgs/{org}/actions/runners/downloads`](/rest/actions#list-runner-applications-for-an-organization)
- [`POST /orgs/{org}/actions/runners/registration-token`](/rest/actions#create-a-registration-token-for-an-organization)
- [`POST /orgs/{org}/actions/runners/remove-token`](/rest/actions#create-a-remove-token-for-an-organization)
- [`GET /orgs/{org}/actions/runners/{runner_id}`](/rest/actions#get-a-self-hosted-runner-for-an-organization)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}`](/rest/actions#delete-a-self-hosted-runner-from-an-organization)
- [`GET /orgs/{org}/actions/secrets`](/rest/actions#list-organization-secrets)
- [`GET /orgs/{org}/actions/secrets/public-key`](/rest/actions#get-an-organization-public-key)
- [`GET /orgs/{org}/actions/secrets/{secret_name}`](/rest/actions#get-an-organization-secret)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}`](/rest/actions#create-or-update-an-organization-secret)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}`](/rest/actions#delete-an-organization-secret)
- [`GET /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/actions#list-selected-repositories-for-an-organization-secret)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories`](/rest/actions#set-selected-repositories-for-an-organization-secret)
- [`PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`](/rest/actions#add-selected-repository-to-an-organization-secret)
- [`DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`](/rest/actions#remove-selected-repository-from-an-organization-secret)
- [`GET /repos/{owner}/{repo}/actions/artifacts`](/rest/actions#list-artifacts-for-a-repository)
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/actions#get-an-artifact)
- [`DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}`](/rest/actions#delete-an-artifact)
- [`GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}`](/rest/actions#download-an-artifact)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}`](/rest/actions#get-a-job-for-a-workflow-run)
- [`GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs`](/rest/actions#download-job-logs-for-a-workflow-run)
- [`GET /repos/{owner}/{repo}/actions/permissions`](/rest/actions#get-github-actions-permissions-for-a-repository)
- [`PUT /repos/{owner}/{repo}/actions/permissions`](/rest/actions#set-github-actions-permissions-for-a-repository)
- [`GET /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/actions#get-allowed-actions-for-a-repository)
- [`PUT /repos/{owner}/{repo}/actions/permissions/selected-actions`](/rest/actions#set-allowed-actions-for-a-repository)
- [`GET /repos/{owner}/{repo}/actions/runners`](/rest/actions#list-self-hosted-runners-for-a-repository)
- [`GET /repos/{owner}/{repo}/actions/runners/downloads`](/rest/actions#list-runner-applications-for-a-repository)
- [`POST /repos/{owner}/{repo}/actions/runners/registration-token`](/rest/actions#create-a-registration-token-for-a-repository)
- [`POST /repos/{owner}/{repo}/actions/runners/remove-token`](/rest/actions#create-a-remove-token-for-a-repository)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/actions#get-a-self-hosted-runner-for-a-repository)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}`](/rest/actions#delete-a-self-hosted-runner-from-a-repository)
- [`GET /repos/{owner}/{repo}/actions/runs`](/rest/actions#list-workflow-runs-for-a-repository)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/actions#get-a-workflow-run)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}`](/rest/actions#delete-a-workflow-run)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals`](/rest/actions#get-the-review-history-for-a-workflow-run)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`](/rest/actions#list-workflow-run-artifacts)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel`](/rest/actions#cancel-a-workflow-run)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs`](/rest/actions#list-jobs-for-a-workflow-run)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/actions#download-workflow-run-logs)
- [`DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs`](/rest/actions#delete-workflow-run-logs)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/actions#get-pending-deployments-for-a-workflow-run)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`](/rest/actions#review-pending-deployments-for-a-workflow-run)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun`](/rest/actions#re-run-a-workflow)
- [`GET /repos/{owner}/{repo}/actions/secrets`](/rest/actions#list-repository-secrets)
- [`GET /repos/{owner}/{repo}/actions/secrets/public-key`](/rest/actions#get-a-repository-public-key)
- [`GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/actions#get-a-repository-secret)
- [`PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/actions#create-or-update-a-repository-secret)
- [`DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}`](/rest/actions#delete-a-repository-secret)
- [`GET /repos/{owner}/{repo}/actions/workflows`](/rest/actions#list-repository-workflows)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}`](/rest/actions#get-a-workflow)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`](/rest/actions#disable-a-workflow)
- [`POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`](/rest/actions#create-a-workflow-dispatch-event)
- [`PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`](/rest/actions#enable-a-workflow)
- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`](/rest/actions#list-workflow-runs)
- [`GET /repositories/{repository_id}/environments/{environment_name}/secrets`](/rest/actions#list-environment-secrets)
- [`GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key`](/rest/actions#get-an-environment-public-key)
- [`GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`](/rest/actions#get-an-environment-secret)
- [`PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`](/rest/actions#create-or-update-an-environment-secret)
- [`DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`](/rest/actions#delete-an-environment-secret)
- [`GET /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/actions#list-labels-for-a-self-hosted-runner-for-an-organization)
- [`POST /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization)
- [`PUT /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels`](/rest/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization)
- [`DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}`](/rest/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization)
- [`GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/actions#list-labels-for-a-self-hosted-runner-for-a-repository)
- [`POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository)
- [`PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels`](/rest/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository)
- [`DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`](/rest/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository)
{% ifversion ghec or ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage`](/rest/actions#get-github-actions-cache-usage-for-an-enterprise){% endif %}
{% ifversion ghes > 3.4 %}- [`GET /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/actions#get-github-actions-cache-usage-policy-for-an-enterprise){% endif %}
{% ifversion ghes > 3.4 %}- [`PATCH /enterprises/{enterprise}/actions/cache/usage-policy`](/rest/actions#set-github-actions-cache-usage-policy-for-an-enterprise){% endif %}
- [`GET /orgs/{org}/actions/cache/usage`](/rest/actions#get-github-actions-cache-usage-for-an-organization)
- [`GET /orgs/{org}/actions/cache/usage-by-repository`](/rest/actions#list-repositories-with-github-actions-cache-usage-for-an-organization)
- [`GET /orgs/{org}/actions/permissions/workflow`](/rest/actions#get-default-workflow-permissions)
- [`PUT /orgs/{org}/actions/permissions/workflow`](/rest/actions#set-default-workflow-permissions)
- [`GET /repos/{owner}/{repo}/actions/cache/usage`](/rest/actions#get-github-actions-cache-usage-for-a-repository)
{% ifversion ghes > 3.4 %}- [`GET /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/actions#get-github-actions-cache-usage-policy-for-a-repository){% endif %}
{% ifversion ghes > 3.4 %}- [`PATCH /repos/{owner}/{repo}/actions/cache/usage-policy`](/rest/actions#set-github-actions-cache-usage-policy-for-a-repository){% endif %}
- [`POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`](/rest/actions#re-run-job-for-workflow-run)
- [`GET /repos/{owner}/{repo}/actions/permissions/access`](/rest/actions#get-workflow-access-level-to-a-repository)
- [`PUT /repos/{owner}/{repo}/actions/permissions/access`](/rest/actions#set-workflow-access-to-a-repository)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`](/rest/actions#get-a-workflow-run-attempt)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`](/rest/actions#list-jobs-for-a-workflow-run-attempt)
- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`](/rest/actions#download-workflow-run-attempt-logs)
- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`](/rest/actions#re-run-workflow-failed-jobs)
{% ifversion ghec or ghes > 3.5 %}- [`GET /enterprises/{enterprise}/actions/permissions/workflow`](/rest/actions#get-default-workflow-permissions-for-an-enterprise){% endif %}
{% ifversion ghec or ghes > 3.5 %}- [`PUT /enterprises/{enterprise}/actions/permissions/workflow`](/rest/actions#set-default-workflow-permissions-for-an-enterprise){% endif %}
- [`GET /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/actions#get-default-workflow-permissions-for-a-repository)
- [`PUT /repos/{owner}/{repo}/actions/permissions/workflow`](/rest/actions#set-default-workflow-permissions-for-a-repository)
- [`GET /orgs/{org}/actions/oidc/customization/sub`](/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-an-organization)
- [`PUT /orgs/{org}/actions/oidc/customization/sub`](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization)
- [`GET /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#list-github-actions-caches-for-a-repository)
- [`DELETE /repos/{owner}/{repo}/actions/caches`](/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key)
- [`DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}`](/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id)
- [`GET /repos/{owner}/{repo}/actions/oidc/customization/sub`](/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-a-repository)
- [`PUT /repos/{owner}/{repo}/actions/oidc/customization/sub`](/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository)
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/required_workflows`](/rest/actions#list-required-workflows){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/actions/required_workflows`](/rest/actions#create-a-required-workflow){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/required_workflows/{required_workflow_id}`](/rest/actions#get-a-required-workflow){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /orgs/{org}/actions/required_workflows/{required_workflow_id}`](/rest/actions#update-a-required-workflow){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}`](/rest/actions#delete-a-required-workflow){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories`](/rest/actions#set-selected-repositories-for-a-required-workflow){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}`](/rest/actions#add-a-repository-to-selected-repositories-list-for-a-required-workflow){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}`](/rest/actions#remove-a-repository-from-selected-repositories-list-for-a-required-workflow){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/variables`](/rest/actions/variables#list-organization-variables){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/actions/variables`](/rest/actions/variables#create-an-organization-variable){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/variables/{name}`](/rest/actions/variables#get-an-organization-variable){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /orgs/{org}/actions/variables/{name}`](/rest/actions/variables#update-an-organization-variable){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/actions/variables/{name}`](/rest/actions/variables#delete-an-organization-variable){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/actions/variables/{name}/repositories`](/rest/actions/variables#list-selected-repositories-for-an-organization-variable){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/actions/variables/{name}/repositories`](/rest/actions/variables#set-selected-repositories-for-an-organization-variable){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}`](/rest/actions/variables#add-selected-repository-to-an-organization-variable){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{org}/{repo}/actions/required_workflows`](/rest/actions#list-repository-required-workflows){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}`](/rest/actions#get-repository-required-workflow){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/runs`](/rest/actions#list-required-workflow-runs){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/variables`](/rest/actions/variables#list-repository-variables){% endif %}
{% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/actions/variables`](/rest/actions/variables#create-a-repository-variable){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/variables/{name}`](/rest/actions/variables#get-a-repository-variable){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/actions/variables/{name}`](/rest/actions/variables#update-a-repository-variable){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/actions/variables/{name}`](/rest/actions/variables#delete-a-repository-variable){% endif %}
{% ifversion fpt or ghec %}- [`GET /repositories/{repository_id}/environments/{environment_name}/variables`](/rest/actions/variables#list-environment-variables){% endif %}
{% ifversion fpt or ghec %}- [`POST /repositories/{repository_id}/environments/{environment_name}/variables`](/rest/actions/variables#create-an-environment-variable){% endif %}
{% ifversion fpt or ghec %}- [`GET /repositories/{repository_id}/environments/{environment_name}/variables/{name}`](/rest/actions/variables#get-an-environment-variable){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repositories/{repository_id}/environments/{environment_name}/variables/{name}`](/rest/actions/variables#update-an-environment-variable){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repositories/{repository_id}/environments/{environment_name}/variables/{name}`](/rest/actions/variables#delete-an-environment-variable){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing`](/rest/actions#get-workflow-run-usage){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`](/rest/actions#get-workflow-usage){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/timing`](/rest/actions#get-repository-required-workflow-usage){% endif %}
{% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve`](/rest/actions#approve-a-workflow-run-for-a-fork-pull-request){% endif %}

## activity
- [`GET /events`](/rest/activity#list-public-events)
- [`GET /feeds`](/rest/activity#get-feeds)
- [`GET /networks/{owner}/{repo}/events`](/rest/activity#list-public-events-for-a-network-of-repositories)
- [`GET /orgs/{org}/events`](/rest/activity#list-public-organization-events)
- [`GET /repos/{owner}/{repo}/events`](/rest/activity#list-repository-events)
- [`GET /repos/{owner}/{repo}/stargazers`](/rest/activity#list-stargazers)
- [`GET /repos/{owner}/{repo}/subscribers`](/rest/activity#list-watchers)
- [`GET /user/starred`](/rest/activity#list-repositories-starred-by-the-authenticated-user)
- [`GET /user/starred/{owner}/{repo}`](/rest/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
- [`PUT /user/starred/{owner}/{repo}`](/rest/activity#star-a-repository-for-the-authenticated-user)
- [`DELETE /user/starred/{owner}/{repo}`](/rest/activity#unstar-a-repository-for-the-authenticated-user)
- [`GET /user/subscriptions`](/rest/activity#list-repositories-watched-by-the-authenticated-user)
- [`GET /users/{username}/events`](/rest/activity#list-events-for-the-authenticated-user)
- [`GET /users/{username}/events/orgs/{org}`](/rest/activity#list-organization-events-for-the-authenticated-user)
- [`GET /users/{username}/events/public`](/rest/activity#list-public-events-for-a-user)
- [`GET /users/{username}/received_events`](/rest/activity#list-events-received-by-the-authenticated-user)
- [`GET /users/{username}/received_events/public`](/rest/activity#list-public-events-received-by-a-user)
- [`GET /users/{username}/starred`](/rest/activity#list-repositories-starred-by-a-user)
- [`GET /users/{username}/subscriptions`](/rest/activity#list-repositories-watched-by-a-user)

{% ifversion ghec %}

## announcement-banners
{% ifversion ghec %}- [`GET /orgs/{org}/announcement`](/rest/announcement-banners#get-enterprise-announcement-banner-for-org){% endif %}
{% ifversion ghec %}- [`PATCH /orgs/{org}/announcement`](/rest/announcement-banners/organizations#set-announcement-banner-for-organization){% endif %}
{% ifversion ghec %}- [`DELETE /orgs/{org}/announcement`](/rest/announcement-banners/organizations#remove-announcement-banner-from-organization){% endif %}

{% endif %}

## apps
- [`GET /apps/{app_slug}`](/rest/apps#get-an-app)
- [`GET /user/installations/{installation_id}/repositories`](/rest/apps#list-repositories-accessible-to-the-user-access-token)
{% ifversion fpt or ghec %}- [`GET /user/marketplace_purchases`](/rest/apps#list-subscriptions-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/marketplace_purchases/stubbed`](/rest/apps#list-subscriptions-for-the-authenticated-user-stubbed){% endif %}

{% ifversion ghec or ghes > 3.3 %}

## billing
{% ifversion ghec or ghes > 3.3 %}- [`GET /orgs/{org}/settings/billing/advanced-security`](/rest/billing#get-github-advanced-security-active-committers-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/actions`](/rest/billing#get-github-actions-billing-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/packages`](/rest/billing#get-github-packages-billing-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/settings/billing/shared-storage`](/rest/billing#get-shared-storage-billing-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /users/{username}/settings/billing/actions`](/rest/billing#get-github-actions-billing-for-a-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /users/{username}/settings/billing/packages`](/rest/billing#get-github-packages-billing-for-a-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /users/{username}/settings/billing/shared-storage`](/rest/billing#get-shared-storage-billing-for-a-user){% endif %}

{% endif %}

## branches
- [`GET /repos/{owner}/{repo}/branches`](/rest/branches/branches#list-branches)
- [`GET /repos/{owner}/{repo}/branches/{branch}`](/rest/branches/branches#get-a-branch)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection`](/rest/branches/branch-protection#get-branch-protection)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection`](/rest/branches/branch-protection#update-branch-protection)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection`](/rest/branches/branch-protection#delete-branch-protection)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`](/rest/branches/branch-protection#get-admin-branch-protection)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`](/rest/branches/branch-protection#set-admin-branch-protection)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`](/rest/branches/branch-protection#delete-admin-branch-protection)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`](/rest/branches/branch-protection#get-pull-request-review-protection)
- [`PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`](/rest/branches/branch-protection#update-pull-request-review-protection)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`](/rest/branches/branch-protection#delete-pull-request-review-protection)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`](/rest/branches/branch-protection#get-commit-signature-protection)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`](/rest/branches/branch-protection#create-commit-signature-protection)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`](/rest/branches/branch-protection#delete-commit-signature-protection)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`](/rest/branches/branch-protection#get-status-checks-protection)
- [`PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`](/rest/branches/branch-protection#update-status-check-protection)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`](/rest/branches/branch-protection#remove-status-check-protection)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`](/rest/branches/branch-protection#get-all-status-check-contexts)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`](/rest/branches/branch-protection#add-status-check-contexts)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`](/rest/branches/branch-protection#set-status-check-contexts)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`](/rest/branches/branch-protection#remove-status-check-contexts)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions`](/rest/branches/branch-protection#get-access-restrictions)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions`](/rest/branches/branch-protection#delete-access-restrictions)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`](/rest/branches/branch-protection#list-apps-with-access-to-the-protected-branch)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`](/rest/branches/branch-protection#add-app-access-restrictions)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`](/rest/branches/branch-protection#set-app-access-restrictions)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`](/rest/branches/branch-protection#remove-app-access-restrictions)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`](/rest/branches/branch-protection#list-teams-with-access-to-the-protected-branch)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`](/rest/branches/branch-protection#add-team-access-restrictions)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`](/rest/branches/branch-protection#set-team-access-restrictions)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`](/rest/branches/branch-protection#remove-team-access-restrictions)
- [`GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`](/rest/branches/branch-protection#list-users-with-access-to-the-protected-branch)
- [`POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`](/rest/branches/branch-protection#add-user-access-restrictions)
- [`PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`](/rest/branches/branch-protection#set-user-access-restrictions)
- [`DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`](/rest/branches/branch-protection#remove-user-access-restrictions)
- [`POST /repos/{owner}/{repo}/branches/{branch}/rename`](/rest/branches/branches#rename-a-branch)
- [`POST /repos/{owner}/{repo}/merges`](/rest/branches/branches#merge-a-branch)
- [`POST /repos/{owner}/{repo}/merge-upstream`](/rest/branches/branches#sync-a-fork-branch-with-the-upstream-repository)

## code-scanning
- [`GET /repos/{owner}/{repo}/code-scanning/alerts`](/rest/code-scanning#list-code-scanning-alerts-for-a-repository)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/code-scanning#get-a-code-scanning-alert)
- [`PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}`](/rest/code-scanning#update-a-code-scanning-alert)
- [`GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances`](/rest/code-scanning#list-instances-of-a-code-scanning-alert)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses`](/rest/code-scanning#list-code-scanning-analyses-for-a-repository)
- [`GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/code-scanning#get-a-code-scanning-analysis-for-a-repository)
- [`DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}`](/rest/code-scanning#delete-a-code-scanning-analysis-from-a-repository)
- [`POST /repos/{owner}/{repo}/code-scanning/sarifs`](/rest/code-scanning#upload-a-sarif-file)
- [`GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}`](/rest/code-scanning#list-recent-code-scanning-analyses-for-a-repository)
- [`GET /orgs/{org}/code-scanning/alerts`](/rest/code-scanning#list-code-scanning-alerts-by-organization)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases`](/rest/code-scanning#list-codeql-databases){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}`](/rest/code-scanning#get-codeql-database){% endif %}

## codes-of-conduct
- [`GET /codes_of_conduct`](/rest/codes-of-conduct#get-all-codes-of-conduct)
- [`GET /codes_of_conduct/{key}`](/rest/codes-of-conduct#get-a-code-of-conduct)

{% ifversion fpt or ghec %}

## codespaces
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces`](/rest/codespaces#list-in-organization){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/codespaces/billing`](/rest/codespaces#set-codespaces-billing){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/codespaces/billing/selected_users`](/rest/codespaces#set-codespaces-billing-users){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/codespaces/billing/selected_users`](/rest/codespaces#delete-codespaces-billing-users){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces/secrets`](/rest/codespaces#list-organization-secrets){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces/secrets/public-key`](/rest/codespaces#get-an-organization-public-key){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/codespaces#get-an-organization-secret){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/codespaces#create-or-update-an-organization-secret){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}`](/rest/codespaces#delete-an-organization-secret){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#list-selected-repositories-for-an-organization-secret){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#set-selected-repositories-for-an-organization-secret){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#add-selected-repository-to-an-organization-secret){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#remove-selected-repository-from-an-organization-secret){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/members/{username}/codespaces`](/rest/codespaces#get-codespaces-for-user-in-org){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}`](/rest/codespaces){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`](/rest/codespaces){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces`](/rest/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/codespaces`](/rest/codespaces#create-a-codespace-in-a-repository){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/devcontainers`](/rest/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/machines`](/rest/codespaces#list-available-machine-types-for-a-repository){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/new`](/rest/codespaces#preview-attributes-for-a-new-codespace){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/secrets`](/rest/codespaces#list-repository-secrets){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/secrets/public-key`](/rest/codespaces#get-a-repository-public-key){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/codespaces#get-a-repository-secret){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/codespaces#create-or-update-a-repository-secret){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}`](/rest/codespaces#delete-a-repository-secret){% endif %}
{% ifversion fpt or ghec %}- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`](/rest/codespaces#create-a-codespace-from-a-pull-request){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces`](/rest/codespaces#list-codespaces-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces`](/rest/codespaces#create-a-codespace-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets`](/rest/codespaces#list-secrets-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/public-key`](/rest/codespaces#get-public-key-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/{secret_name}`](/rest/codespaces#get-a-secret-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}`](/rest/codespaces#create-or-update-a-secret-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/codespaces/secrets/{secret_name}`](/rest/codespaces#delete-a-secret-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#list-selected-repositories-for-a-user-secret){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories`](/rest/codespaces#set-selected-repositories-for-a-user-secret){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#add-a-selected-repository-to-a-user-secret){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}`](/rest/codespaces#remove-a-selected-repository-from-a-user-secret){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/{codespace_name}`](/rest/codespaces#get-a-codespace-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /user/codespaces/{codespace_name}`](/rest/codespaces#update-a-codespace-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/codespaces/{codespace_name}`](/rest/codespaces#delete-a-codespace-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces/{codespace_name}/exports`](/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/{codespace_name}/exports/{export_id}`](/rest/codespaces/codespaces#get-details-about-a-codespace-export){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/codespaces/{codespace_name}/machines`](/rest/codespaces#list-machine-types-for-a-codespace){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces/{codespace_name}/publish`](/rest/codespaces/codespaces#create-a-repository-from-an-unpublished-codespace){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces/{codespace_name}/start`](/rest/codespaces#start-a-codespace-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`POST /user/codespaces/{codespace_name}/stop`](/rest/codespaces#stop-a-codespace-for-the-authenticated-user){% endif %}

{% endif %}

## collaborators
- [`GET /repos/{owner}/{repo}/collaborators`](/rest/collaborators/collaborators#list-repository-collaborators)
- [`GET /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator)
- [`PUT /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#add-a-repository-collaborator)
- [`DELETE /repos/{owner}/{repo}/collaborators/{username}`](/rest/collaborators/collaborators#remove-a-repository-collaborator)
- [`GET /repos/{owner}/{repo}/collaborators/{username}/permission`](/rest/collaborators/collaborators#get-repository-permissions-for-a-user)
- [`GET /repos/{owner}/{repo}/invitations`](/rest/collaborators/invitations#list-repository-invitations)
- [`PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#update-a-repository-invitation)
- [`DELETE /repos/{owner}/{repo}/invitations/{invitation_id}`](/rest/collaborators/invitations#delete-a-repository-invitation)
- [`GET /user/repository_invitations`](/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user)
- [`PATCH /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#accept-a-repository-invitation)
- [`DELETE /user/repository_invitations/{invitation_id}`](/rest/collaborators/invitations#decline-a-repository-invitation)

## commits
- [`GET /repos/{owner}/{repo}/comments`](/rest/commits/comments#list-commit-comments-for-a-repository)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#get-a-commit-comment)
- [`PATCH /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#update-a-commit-comment)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}`](/rest/commits/comments#delete-a-commit-comment)
- [`GET /repos/{owner}/{repo}/commits`](/rest/commits/commits#list-commits)
- [`GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head`](/rest/commits/commits#list-branches-for-head-commit)
- [`GET /repos/{owner}/{repo}/commits/{commit_sha}/comments`](/rest/commits/comments#list-commit-comments)
- [`POST /repos/{owner}/{repo}/commits/{commit_sha}/comments`](/rest/commits/comments#create-a-commit-comment)
- [`GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`](/rest/commits/commits#list-pull-requests-associated-with-a-commit)
- [`GET /repos/{owner}/{repo}/commits/{ref}`](/rest/commits/commits#get-a-commit)
- [`GET /repos/{owner}/{repo}/commits/{ref}/status`](/rest/commits/statuses#get-the-combined-status-for-a-specific-reference)
- [`GET /repos/{owner}/{repo}/commits/{ref}/statuses`](/rest/commits/statuses#list-commit-statuses-for-a-reference)
- [`GET /repos/{owner}/{repo}/compare/{basehead}`](/rest/commits/commits#compare-two-commits)
- [`POST /repos/{owner}/{repo}/statuses/{sha}`](/rest/commits/statuses#create-a-commit-status)

## dependabot
- [`GET /orgs/{org}/dependabot/secrets`](/rest/dependabot#list-organization-secrets)
- [`GET /orgs/{org}/dependabot/secrets/public-key`](/rest/dependabot#get-an-organization-public-key)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/dependabot#get-an-organization-secret)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/dependabot#create-or-update-an-organization-secret)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}`](/rest/dependabot#delete-an-organization-secret)
- [`GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/dependabot#list-selected-repositories-for-an-organization-secret)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories`](/rest/dependabot#set-selected-repositories-for-an-organization-secret)
- [`PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`](/rest/dependabot#add-selected-repository-to-an-organization-secret)
- [`DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`](/rest/dependabot#remove-selected-repository-from-an-organization-secret)
- [`GET /repos/{owner}/{repo}/dependabot/secrets`](/rest/dependabot#list-repository-secrets)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/public-key`](/rest/dependabot#get-a-repository-public-key)
- [`GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/dependabot#get-a-repository-secret)
- [`PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/dependabot#create-or-update-a-repository-secret)
- [`DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}`](/rest/dependabot#delete-a-repository-secret)
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/dependabot/alerts`](/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts`](/rest/dependabot#list-dependabot-alerts-for-a-repository){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/dependabot#get-a-dependabot-alert){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`](/rest/dependabot#update-a-dependabot-alert){% endif %}

## dependency-graph
- [`GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}`](/rest/dependency-graph#get-a-diff-of-the-dependencies-between-commits)
- [`POST /repos/{owner}/{repo}/dependency-graph/snapshots`](/rest/dependency-graph#create-a-snapshot-of-dependencies-for-a-repository)

## deploy-keys
- [`GET /repos/{owner}/{repo}/keys`](/rest/deploy-keys#list-deploy-keys)
- [`POST /repos/{owner}/{repo}/keys`](/rest/deploy-keys#create-a-deploy-key)
- [`GET /repos/{owner}/{repo}/keys/{key_id}`](/rest/deploy-keys#get-a-deploy-key)
- [`DELETE /repos/{owner}/{repo}/keys/{key_id}`](/rest/deploy-keys#delete-a-deploy-key)

## deployments
- [`GET /repos/{owner}/{repo}/deployments`](/rest/deployments/deployments#list-deployments)
- [`POST /repos/{owner}/{repo}/deployments`](/rest/deployments/deployments#create-a-deployment)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/deployments/deployments#get-a-deployment)
- [`DELETE /repos/{owner}/{repo}/deployments/{deployment_id}`](/rest/deployments/deployments#delete-a-deployment)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/deployments/statuses#list-deployment-statuses)
- [`POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses`](/rest/deployments/statuses#create-a-deployment-status)
- [`GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`](/rest/deployments/statuses#get-a-deployment-status)
- [`GET /repos/{owner}/{repo}/environments`](/rest/deployments/environments#list-environments)
- [`GET /repos/{owner}/{repo}/environments/{environment_name}`](/rest/deployments/environments#get-an-environment)
- [`PUT /repos/{owner}/{repo}/environments/{environment_name}`](/rest/deployments/environments#create-or-update-an-environment)
- [`DELETE /repos/{owner}/{repo}/environments/{environment_name}`](/rest/deployments/environments#delete-an-environment)
- [`GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`](/rest/deployments/branch-policies#list-deployment-branch-policies)
- [`POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`](/rest/deployments/branch-policies#create-deployment-branch-policy)
- [`GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`](/rest/deployments/branch-policies#get-deployment-branch-policy)
- [`PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`](/rest/deployments/branch-policies#update-deployment-branch-policy)
- [`DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`](/rest/deployments/branch-policies#delete-deployment-branch-policy)

## emojis
- [`GET /emojis`](/rest/emojis#get-emojis)

{% ifversion ghec or ghes %}

## enterprise-admin
{% ifversion ghes %}- [`GET /orgs/{org}/pre-receive-hooks`](/rest/enterprise-admin#list-pre-receive-hooks-for-an-organization){% endif %}
{% ifversion ghes %}- [`GET /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/enterprise-admin#get-a-pre-receive-hook-for-an-organization){% endif %}
{% ifversion ghes %}- [`DELETE /orgs/{org}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization){% endif %}
{% ifversion ghes %}- [`GET /repos/{owner}/{repo}/pre-receive-hooks`](/rest/enterprise-admin#list-pre-receive-hooks-for-a-repository){% endif %}
{% ifversion ghes %}- [`GET /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/enterprise-admin#get-a-pre-receive-hook-for-a-repository){% endif %}
{% ifversion ghes %}- [`DELETE /repos/{owner}/{repo}/pre-receive-hooks/{pre_receive_hook_id}`](/rest/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository){% endif %}
{% ifversion ghec or ghes %}- [`GET /enterprises/{enterprise}/audit-log`](/rest/enterprise-admin#get-the-audit-log-for-an-enterprise){% endif %}
{% ifversion ghec or ghes > 3.3 %}- [`GET /enterprises/{enterprise}/settings/billing/advanced-security`](/rest/billing#export-advanced-security-active-committers-data-for-enterprise){% endif %}
{% ifversion ghes > 3.5 %}- [`GET /scim/v2/Groups`](/rest/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise){% endif %}
{% ifversion ghes > 3.5 %}- [`POST /scim/v2/Groups`](/rest/enterprise-admin#provision-a-scim-enterprise-group){% endif %}
{% ifversion ghes > 3.5 %}- [`GET /scim/v2/Groups/{scim_group_id}`](/rest/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group){% endif %}
{% ifversion ghes > 3.5 %}- [`PUT /scim/v2/Groups/{scim_group_id}`](/rest/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group){% endif %}
{% ifversion ghes > 3.5 %}- [`PATCH /scim/v2/Groups/{scim_group_id}`](/rest/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group){% endif %}
{% ifversion ghes > 3.5 %}- [`DELETE /scim/v2/Groups/{scim_group_id}`](/rest/enterprise-admin#delete-a-scim-group-from-an-enterprise){% endif %}
{% ifversion ghes > 3.5 %}- [`GET /scim/v2/Users`](/rest/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise){% endif %}
{% ifversion ghes > 3.5 %}- [`POST /scim/v2/Users`](/rest/enterprise-admin#provision-a-scim-enterprise-user){% endif %}
{% ifversion ghes > 3.5 %}- [`GET /scim/v2/Users/{scim_user_id}`](/rest/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user){% endif %}
{% ifversion ghes > 3.5 %}- [`PUT /scim/v2/Users/{scim_user_id}`](/rest/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user){% endif %}
{% ifversion ghes > 3.5 %}- [`PATCH /scim/v2/Users/{scim_user_id}`](/rest/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user){% endif %}
{% ifversion ghes > 3.5 %}- [`DELETE /scim/v2/Users/{scim_user_id}`](/rest/enterprise-admin#delete-a-scim-user-from-an-enterprise){% endif %}

{% endif %}

## gists
- [`GET /gists`](/rest/gists#list-gists-for-the-authenticated-user)
- [`POST /gists`](/rest/gists#create-a-gist)
- [`GET /gists/public`](/rest/gists#list-public-gists)
- [`GET /gists/starred`](/rest/gists#list-starred-gists)
- [`GET /gists/{gist_id}`](/rest/gists#get-a-gist)
- [`PATCH /gists/{gist_id}`](/rest/gists#update-a-gist)
- [`DELETE /gists/{gist_id}`](/rest/gists#delete-a-gist)
- [`GET /gists/{gist_id}/comments`](/rest/gists#list-gist-comments)
- [`POST /gists/{gist_id}/comments`](/rest/gists#create-a-gist-comment)
- [`GET /gists/{gist_id}/comments/{comment_id}`](/rest/gists#get-a-gist-comment)
- [`PATCH /gists/{gist_id}/comments/{comment_id}`](/rest/gists#update-a-gist-comment)
- [`DELETE /gists/{gist_id}/comments/{comment_id}`](/rest/gists#delete-a-gist-comment)
- [`GET /gists/{gist_id}/commits`](/rest/gists#list-gist-commits)
- [`GET /gists/{gist_id}/forks`](/rest/gists#list-gist-forks)
- [`POST /gists/{gist_id}/forks`](/rest/gists#fork-a-gist)
- [`GET /gists/{gist_id}/star`](/rest/gists#check-if-a-gist-is-starred)
- [`PUT /gists/{gist_id}/star`](/rest/gists#star-a-gist)
- [`DELETE /gists/{gist_id}/star`](/rest/gists#unstar-a-gist)
- [`GET /gists/{gist_id}/{sha}`](/rest/gists#get-a-gist-revision)
- [`GET /users/{username}/gists`](/rest/gists#list-gists-for-a-user)

## git
- [`POST /repos/{owner}/{repo}/git/blobs`](/rest/git#create-a-blob)
- [`GET /repos/{owner}/{repo}/git/blobs/{file_sha}`](/rest/git#get-a-blob)
- [`POST /repos/{owner}/{repo}/git/commits`](/rest/git#create-a-commit)
- [`GET /repos/{owner}/{repo}/git/commits/{commit_sha}`](/rest/git#get-a-commit)
- [`GET /repos/{owner}/{repo}/git/matching-refs/{ref}`](/rest/git#list-matching-references)
- [`GET /repos/{owner}/{repo}/git/ref/{ref}`](/rest/git#get-a-reference)
- [`POST /repos/{owner}/{repo}/git/refs`](/rest/git#create-a-reference)
- [`PATCH /repos/{owner}/{repo}/git/refs/{ref}`](/rest/git#update-a-reference)
- [`DELETE /repos/{owner}/{repo}/git/refs/{ref}`](/rest/git#delete-a-reference)
- [`POST /repos/{owner}/{repo}/git/tags`](/rest/git#create-a-tag-object)
- [`GET /repos/{owner}/{repo}/git/tags/{tag_sha}`](/rest/git#get-a-tag)
- [`POST /repos/{owner}/{repo}/git/trees`](/rest/git#create-a-tree)
- [`GET /repos/{owner}/{repo}/git/trees/{tree_sha}`](/rest/git#get-a-tree)

## gitignore
- [`GET /gitignore/templates`](/rest/gitignore#get-all-gitignore-templates)
- [`GET /gitignore/templates/{name}`](/rest/gitignore#get-a-gitignore-template)

{% ifversion fpt or ghec %}

## interactions
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/interaction-limits`](/rest/interactions#get-interaction-restrictions-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/interaction-limits`](/rest/interactions#set-interaction-restrictions-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/interaction-limits`](/rest/interactions#remove-interaction-restrictions-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/interaction-limits`](/rest/interactions#get-interaction-restrictions-for-a-repository){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/interaction-limits`](/rest/interactions#set-interaction-restrictions-for-a-repository){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/interaction-limits`](/rest/interactions#remove-interaction-restrictions-for-a-repository){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/interaction-limits`](/rest/interactions#get-interaction-restrictions-for-your-public-repositories){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/interaction-limits`](/rest/interactions#set-interaction-restrictions-for-your-public-repositories){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/interaction-limits`](/rest/interactions#remove-interaction-restrictions-from-your-public-repositories){% endif %}

{% endif %}

## issues
- [`GET /issues`](/rest/issues#list-issues-assigned-to-the-authenticated-user)
- [`GET /orgs/{org}/issues`](/rest/issues#list-organization-issues-assigned-to-the-authenticated-user)
- [`GET /repos/{owner}/{repo}/assignees`](/rest/issues#list-assignees)
- [`GET /repos/{owner}/{repo}/assignees/{assignee}`](/rest/issues#check-if-a-user-can-be-assigned)
- [`GET /repos/{owner}/{repo}/issues`](/rest/issues#list-repository-issues)
- [`POST /repos/{owner}/{repo}/issues`](/rest/issues#create-an-issue)
- [`GET /repos/{owner}/{repo}/issues/comments`](/rest/issues#list-issue-comments-for-a-repository)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/issues#get-an-issue-comment)
- [`PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/issues#update-an-issue-comment)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}`](/rest/issues#delete-an-issue-comment)
- [`GET /repos/{owner}/{repo}/issues/events`](/rest/issues#list-issue-events-for-a-repository)
- [`GET /repos/{owner}/{repo}/issues/events/{event_id}`](/rest/issues#get-an-issue-event)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}`](/rest/issues#get-an-issue)
- [`PATCH /repos/{owner}/{repo}/issues/{issue_number}`](/rest/issues#update-an-issue)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/issues#add-assignees-to-an-issue)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`](/rest/issues#remove-assignees-from-an-issue)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}`](/rest/issues#check-if-a-user-can-be-assigned-to-a-issue)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/issues#list-issue-comments)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/comments`](/rest/issues#create-an-issue-comment)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/events`](/rest/issues#list-issue-events)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#list-labels-for-an-issue)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#add-labels-to-an-issue)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#set-labels-for-an-issue)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels`](/rest/issues#remove-all-labels-from-an-issue)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}`](/rest/issues#remove-a-label-from-an-issue)
- [`PUT /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/issues#lock-an-issue)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock`](/rest/issues#unlock-an-issue)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`](/rest/issues#list-timeline-events-for-an-issue)
- [`GET /repos/{owner}/{repo}/labels`](/rest/issues#list-labels-for-a-repository)
- [`POST /repos/{owner}/{repo}/labels`](/rest/issues#create-a-label)
- [`GET /repos/{owner}/{repo}/labels/{name}`](/rest/issues#get-a-label)
- [`PATCH /repos/{owner}/{repo}/labels/{name}`](/rest/issues#update-a-label)
- [`DELETE /repos/{owner}/{repo}/labels/{name}`](/rest/issues#delete-a-label)
- [`GET /repos/{owner}/{repo}/milestones`](/rest/issues#list-milestones)
- [`POST /repos/{owner}/{repo}/milestones`](/rest/issues#create-a-milestone)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/issues#get-a-milestone)
- [`PATCH /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/issues#update-a-milestone)
- [`DELETE /repos/{owner}/{repo}/milestones/{milestone_number}`](/rest/issues#delete-a-milestone)
- [`GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels`](/rest/issues#list-labels-for-issues-in-a-milestone)
- [`GET /user/issues`](/rest/issues#list-user-account-issues-assigned-to-the-authenticated-user)

## licenses
- [`GET /licenses`](/rest/licenses#get-all-commonly-used-licenses)
- [`GET /licenses/{license}`](/rest/licenses#get-a-license)
- [`GET /repos/{owner}/{repo}/license`](/rest/licenses#get-the-license-for-a-repository)

## markdown
- [`POST /markdown`](/rest/markdown#render-a-markdown-document)
- [`POST /markdown/raw`](/rest/markdown#render-a-markdown-document-in-raw-mode)

## meta
- [`GET /`](/rest/overview/resources-in-the-rest-api#root-endpoint)
- [`GET /meta`](/rest/meta#get-github-meta-information)
- [`GET /octocat`](/rest/meta#get-octocat)
- [`GET /zen`](/rest/meta#get-the-zen-of-github)
{% ifversion fpt or ghec %}- [`GET /versions`](/rest/meta#get-all-api-versions){% endif %}

## metrics
- [`GET /repos/{owner}/{repo}/stats/code_frequency`](/rest/metrics/statistics#get-the-weekly-commit-activity)
- [`GET /repos/{owner}/{repo}/stats/commit_activity`](/rest/metrics/statistics#get-the-last-year-of-commit-activity)
- [`GET /repos/{owner}/{repo}/stats/contributors`](/rest/metrics/statistics#get-all-contributor-commit-activity)
- [`GET /repos/{owner}/{repo}/stats/participation`](/rest/metrics/statistics#get-the-weekly-commit-count)
- [`GET /repos/{owner}/{repo}/stats/punch_card`](/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/community/profile`](/rest/metrics/community#get-community-profile-metrics){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/clones`](/rest/metrics/traffic#get-repository-clones){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/paths`](/rest/metrics/traffic#get-top-referral-paths){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/popular/referrers`](/rest/metrics/traffic#get-top-referral-sources){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/traffic/views`](/rest/metrics/traffic#get-page-views){% endif %}

{% ifversion fpt or ghec %}

## migrations
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import`](/rest/migrations#get-an-import-status){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/import`](/rest/migrations#start-an-import){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import`](/rest/migrations#update-an-import){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/import`](/rest/migrations#cancel-an-import){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/authors`](/rest/migrations#get-commit-authors){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/authors/{author_id}`](/rest/migrations#map-a-commit-author){% endif %}
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/import/large_files`](/rest/migrations#get-large-files){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /repos/{owner}/{repo}/import/lfs`](/rest/migrations#update-git-lfs-preference){% endif %}

{% endif %}

## orgs
- [`GET /organizations`](/rest/orgs#list-organizations)
- [`GET /orgs/{org}`](/rest/orgs#get-an-organization)
- [`PATCH /orgs/{org}`](/rest/orgs#update-an-organization)
- [`GET /orgs/{org}/hooks`](/rest/orgs#list-organization-webhooks)
- [`POST /orgs/{org}/hooks`](/rest/orgs#create-an-organization-webhook)
- [`GET /orgs/{org}/hooks/{hook_id}`](/rest/orgs#get-an-organization-webhook)
- [`PATCH /orgs/{org}/hooks/{hook_id}`](/rest/orgs#update-an-organization-webhook)
- [`DELETE /orgs/{org}/hooks/{hook_id}`](/rest/orgs#delete-an-organization-webhook)
- [`GET /orgs/{org}/hooks/{hook_id}/config`](/rest/orgs#get-a-webhook-configuration-for-an-organization)
- [`PATCH /orgs/{org}/hooks/{hook_id}/config`](/rest/orgs#update-a-webhook-configuration-for-an-organization)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries`](/rest/orgs#list-deliveries-for-an-organization-webhook)
- [`GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/orgs#get-a-webhook-delivery-for-an-organization-webhook)
- [`POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/orgs#redeliver-a-delivery-for-an-organization-webhook)
- [`POST /orgs/{org}/hooks/{hook_id}/pings`](/rest/orgs#ping-an-organization-webhook)
- [`GET /orgs/{org}/installations`](/rest/orgs#list-app-installations-for-an-organization)
- [`GET /orgs/{org}/members`](/rest/orgs#list-organization-members)
- [`GET /orgs/{org}/members/{username}`](/rest/orgs#check-organization-membership-for-a-user)
- [`DELETE /orgs/{org}/members/{username}`](/rest/orgs#remove-an-organization-member)
- [`GET /orgs/{org}/memberships/{username}`](/rest/orgs#get-organization-membership-for-a-user)
- [`PUT /orgs/{org}/memberships/{username}`](/rest/orgs#set-organization-membership-for-a-user)
- [`DELETE /orgs/{org}/memberships/{username}`](/rest/orgs#remove-organization-membership-for-a-user)
- [`GET /orgs/{org}/outside_collaborators`](/rest/orgs#list-outside-collaborators-for-an-organization)
- [`PUT /orgs/{org}/outside_collaborators/{username}`](/rest/orgs#convert-an-organization-member-to-outside-collaborator)
- [`DELETE /orgs/{org}/outside_collaborators/{username}`](/rest/orgs#remove-outside-collaborator-from-an-organization)
- [`GET /orgs/{org}/public_members`](/rest/orgs#list-public-organization-members)
- [`GET /orgs/{org}/public_members/{username}`](/rest/orgs#check-public-organization-membership-for-a-user)
- [`PUT /orgs/{org}/public_members/{username}`](/rest/orgs#set-public-organization-membership-for-the-authenticated-user)
- [`DELETE /orgs/{org}/public_members/{username}`](/rest/orgs#remove-public-organization-membership-for-the-authenticated-user)
- [`GET /user/memberships/orgs`](/rest/orgs#list-organization-memberships-for-the-authenticated-user)
- [`GET /user/memberships/orgs/{org}`](/rest/orgs#get-an-organization-membership-for-the-authenticated-user)
- [`PATCH /user/memberships/orgs/{org}`](/rest/orgs#update-an-organization-membership-for-the-authenticated-user)
- [`GET /user/orgs`](/rest/orgs#list-organizations-for-the-authenticated-user)
- [`GET /users/{username}/orgs`](/rest/orgs#list-organizations-for-a-user)
{% ifversion ghec or ghes %}- [`GET /orgs/{org}/audit-log`](/rest/orgs#get-audit-log){% endif %}
{% ifversion ghec or ghes > 3.3 %}- [`GET /organizations/{organization_id}/custom_roles`](/rest/orgs#list-custom-repository-roles-in-an-organization){% endif %}
- [`GET /orgs/{org}/security-managers`](/rest/orgs#list-security-manager-teams)
- [`PUT /orgs/{org}/security-managers/teams/{team_slug}`](/rest/orgs#add-a-security-manager-team)
- [`DELETE /orgs/{org}/security-managers/teams/{team_slug}`](/rest/orgs#remove-a-security-manager-team)
- [`POST /orgs/{org}/{security_product}/{enablement}`](/rest/orgs#enable-or-disable-security-product-on-all-org-repos)
{% ifversion ghec %}- [`POST /orgs/{org}/custom_roles`](/rest/orgs#create-a-custom-role){% endif %}
{% ifversion ghec %}- [`GET /orgs/{org}/custom_roles/{role_id}`](/rest/orgs#get-a-custom-role){% endif %}
{% ifversion ghec %}- [`PATCH /orgs/{org}/custom_roles/{role_id}`](/rest/orgs#update-a-custom-role){% endif %}
{% ifversion ghec %}- [`DELETE /orgs/{org}/custom_roles/{role_id}`](/rest/orgs#delete-a-custom-role){% endif %}
{% ifversion ghec %}- [`GET /orgs/{org}/fine_grained_permissions`](/rest/orgs#list-repository-fine-grained-permissions-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/blocks`](/rest/orgs#list-users-blocked-by-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/blocks/{username}`](/rest/orgs#check-if-a-user-is-blocked-by-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`PUT /orgs/{org}/blocks/{username}`](/rest/orgs#block-a-user-from-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/blocks/{username}`](/rest/orgs#unblock-a-user-from-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/failed_invitations`](/rest/orgs#list-failed-organization-invitations){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations`](/rest/orgs#list-pending-organization-invitations){% endif %}
{% ifversion fpt or ghec %}- [`POST /orgs/{org}/invitations`](/rest/orgs#create-an-organization-invitation){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/invitations/{invitation_id}`](/rest/orgs#cancel-an-organization-invitation){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/invitations/{invitation_id}/teams`](/rest/orgs#list-organization-invitation-teams){% endif %}

{% ifversion fpt or ghec %}

## packages
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/packages`](/rest/packages#list-packages-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/packages/{package_type}/{package_name}`](/rest/packages#get-a-package-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /orgs/{org}/packages/{package_type}/{package_name}`](/rest/packages#delete-a-package-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/packages/{package_type}/{package_name}/versions`](/rest/packages#get-all-package-versions-for-a-package-owned-by-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}`](/rest/packages#get-a-package-version-for-an-organization){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/packages`](/rest/packages#list-packages-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/packages/{package_type}/{package_name}`](/rest/packages#get-a-package-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/packages/{package_type}/{package_name}`](/rest/packages#delete-a-package-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/packages/{package_type}/{package_name}/versions`](/rest/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}`](/rest/packages#get-a-package-version-for-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /users/{username}/packages`](/rest/packages#list-packages-for-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /users/{username}/packages/{package_type}/{package_name}`](/rest/packages#get-a-package-for-a-user){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /users/{username}/packages/{package_type}/{package_name}`](/rest/packages#delete-a-package-for-a-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /users/{username}/packages/{package_type}/{package_name}/versions`](/rest/packages#get-all-package-versions-for-a-package-owned-by-a-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}`](/rest/packages#get-a-package-version-for-a-user){% endif %}

{% endif %}

## pages
- [`GET /repos/{owner}/{repo}/pages`](/rest/pages#get-a-github-pages-site)
- [`POST /repos/{owner}/{repo}/pages`](/rest/pages#create-a-github-pages-site)
- [`PUT /repos/{owner}/{repo}/pages`](/rest/pages#update-information-about-a-github-pages-site)
- [`DELETE /repos/{owner}/{repo}/pages`](/rest/pages#delete-a-github-pages-site)
- [`GET /repos/{owner}/{repo}/pages/builds`](/rest/pages#list-github-pages-builds)
- [`POST /repos/{owner}/{repo}/pages/builds`](/rest/pages#request-a-github-pages-build)
- [`GET /repos/{owner}/{repo}/pages/builds/latest`](/rest/pages#get-latest-pages-build)
- [`GET /repos/{owner}/{repo}/pages/builds/{build_id}`](/rest/pages#get-github-pages-build)
- [`POST /repos/{owner}/{repo}/pages/deployment`](/rest/pages#create-a-github-pages-deployment)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/pages/health`](/rest/pages#get-a-dns-health-check-for-github-pages){% endif %}

## projects
- [`GET /orgs/{org}/projects`](/rest/projects#list-organization-projects)
- [`POST /orgs/{org}/projects`](/rest/projects#create-an-organization-project)
- [`GET /projects/columns/cards/{card_id}`](/rest/projects#get-a-project-card)
- [`PATCH /projects/columns/cards/{card_id}`](/rest/projects#update-a-project-card)
- [`DELETE /projects/columns/cards/{card_id}`](/rest/projects#delete-a-project-card)
- [`POST /projects/columns/cards/{card_id}/moves`](/rest/projects#move-a-project-card)
- [`GET /projects/columns/{column_id}`](/rest/projects#get-a-project-column)
- [`PATCH /projects/columns/{column_id}`](/rest/projects#update-a-project-column)
- [`DELETE /projects/columns/{column_id}`](/rest/projects#delete-a-project-column)
- [`GET /projects/columns/{column_id}/cards`](/rest/projects#list-project-cards)
- [`POST /projects/columns/{column_id}/cards`](/rest/projects#create-a-project-card)
- [`POST /projects/columns/{column_id}/moves`](/rest/projects#move-a-project-column)
- [`GET /projects/{project_id}`](/rest/projects#get-a-project)
- [`PATCH /projects/{project_id}`](/rest/projects#update-a-project)
- [`DELETE /projects/{project_id}`](/rest/projects#delete-a-project)
- [`GET /projects/{project_id}/collaborators`](/rest/projects#list-project-collaborators)
- [`PUT /projects/{project_id}/collaborators/{username}`](/rest/projects#add-project-collaborator)
- [`DELETE /projects/{project_id}/collaborators/{username}`](/rest/projects#remove-project-collaborator)
- [`GET /projects/{project_id}/collaborators/{username}/permission`](/rest/projects#get-project-permission-for-a-user)
- [`GET /projects/{project_id}/columns`](/rest/projects#list-project-columns)
- [`POST /projects/{project_id}/columns`](/rest/projects#create-a-project-column)
- [`GET /repos/{owner}/{repo}/projects`](/rest/projects#list-repository-projects)
- [`POST /repos/{owner}/{repo}/projects`](/rest/projects#create-a-repository-project)

## pulls
- [`GET /repos/{owner}/{repo}/pulls`](/rest/pulls#list-pull-requests)
- [`POST /repos/{owner}/{repo}/pulls`](/rest/pulls#create-a-pull-request)
- [`GET /repos/{owner}/{repo}/pulls/comments`](/rest/pulls#list-review-comments-in-a-repository)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/pulls#get-a-review-comment-for-a-pull-request)
- [`PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/pulls#update-a-review-comment-for-a-pull-request)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}`](/rest/pulls#delete-a-review-comment-for-a-pull-request)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/pulls#get-a-pull-request)
- [`PATCH /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/pulls#update-a-pull-request)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/pulls#list-review-comments-on-a-pull-request)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments`](/rest/pulls#create-a-review-comment-for-a-pull-request)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies`](/rest/pulls#create-a-reply-for-a-review-comment)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/commits`](/rest/pulls#list-commits-on-a-pull-request)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/files`](/rest/pulls#list-pull-requests-files)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/pulls#check-if-a-pull-request-has-been-merged)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge`](/rest/pulls#merge-a-pull-request)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/pulls#get-all-requested-reviewers-for-a-pull-request)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/pulls#request-reviewers-for-a-pull-request)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`](/rest/pulls#remove-requested-reviewers-from-a-pull-request)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/pulls#list-reviews-for-a-pull-request)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews`](/rest/pulls#create-a-review-for-a-pull-request)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/pulls#get-a-review-for-a-pull-request)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/pulls#update-a-review-for-a-pull-request)
- [`DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`](/rest/pulls#delete-a-pending-review-for-a-pull-request)
- [`GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`](/rest/pulls#list-comments-for-a-pull-request-review)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`](/rest/pulls#dismiss-a-review-for-a-pull-request)
- [`POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`](/rest/pulls#submit-a-review-for-a-pull-request)
- [`PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch`](/rest/pulls#update-a-pull-request-branch)

## reactions
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}`](/rest/reactions#delete-team-discussion-comment-reaction)
- [`DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}`](/rest/reactions#delete-team-discussion-reaction)
- [`GET /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reactions#list-reactions-for-a-commit-comment)
- [`POST /repos/{owner}/{repo}/comments/{comment_id}/reactions`](/rest/reactions#create-reaction-for-a-commit-comment)
- [`DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`](/rest/reactions#delete-a-commit-comment-reaction)
- [`GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reactions#list-reactions-for-an-issue-comment)
- [`POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`](/rest/reactions#create-reaction-for-an-issue-comment)
- [`DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`](/rest/reactions#delete-an-issue-comment-reaction)
- [`GET /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reactions#list-reactions-for-an-issue)
- [`POST /repos/{owner}/{repo}/issues/{issue_number}/reactions`](/rest/reactions#create-reaction-for-an-issue)
- [`DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`](/rest/reactions#delete-an-issue-reaction)
- [`GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reactions#list-reactions-for-a-pull-request-review-comment)
- [`POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`](/rest/reactions#create-reaction-for-a-pull-request-review-comment)
- [`DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`](/rest/reactions#delete-a-pull-request-comment-reaction)
- [`GET /repos/{owner}/{repo}/releases/{release_id}/reactions`](/rest/reactions#list-reactions-for-a-release)
- [`POST /repos/{owner}/{repo}/releases/{release_id}/reactions`](/rest/reactions#create-reaction-for-a-release)
- [`DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}`](/rest/reactions#delete-a-release-reaction)

## repos
- [`GET /orgs/{org}/repos`](/rest/repos#list-organization-repositories)
- [`POST /orgs/{org}/repos`](/rest/repos#create-an-organization-repository)
- [`GET /repos/{owner}/{repo}`](/rest/repos#get-a-repository)
- [`PATCH /repos/{owner}/{repo}`](/rest/repos/repos#update-a-repository)
- [`DELETE /repos/{owner}/{repo}`](/rest/repos#delete-a-repository)
- [`GET /repos/{owner}/{repo}/contents/{path}`](/rest/repos#get-repository-content)
- [`PUT /repos/{owner}/{repo}/contents/{path}`](/rest/repos#create-or-update-file-contents)
- [`DELETE /repos/{owner}/{repo}/contents/{path}`](/rest/repos#delete-a-file)
- [`GET /repos/{owner}/{repo}/contributors`](/rest/repos#list-repository-contributors)
- [`POST /repos/{owner}/{repo}/dispatches`](/rest/repos#create-a-repository-dispatch-event)
- [`GET /repos/{owner}/{repo}/forks`](/rest/repos#list-forks)
- [`POST /repos/{owner}/{repo}/forks`](/rest/repos#create-a-fork)
- [`GET /repos/{owner}/{repo}/languages`](/rest/repos#list-repository-languages)
- [`GET /repos/{owner}/{repo}/releases`](/rest/repos#list-releases)
- [`POST /repos/{owner}/{repo}/releases`](/rest/releases/releases#create-a-release)
- [`GET /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/repos#get-a-release-asset)
- [`PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/repos#update-a-release-asset)
- [`DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}`](/rest/repos#delete-a-release-asset)
- [`GET /repos/{owner}/{repo}/releases/latest`](/rest/repos#get-the-latest-release)
- [`GET /repos/{owner}/{repo}/releases/tags/{tag}`](/rest/repos#get-a-release-by-tag-name)
- [`GET /repos/{owner}/{repo}/releases/{release_id}`](/rest/repos#get-a-release)
- [`PATCH /repos/{owner}/{repo}/releases/{release_id}`](/rest/repos#update-a-release)
- [`DELETE /repos/{owner}/{repo}/releases/{release_id}`](/rest/repos#delete-a-release)
- [`GET /repos/{owner}/{repo}/releases/{release_id}/assets`](/rest/repos#list-release-assets)
- [`GET /repos/{owner}/{repo}/tags`](/rest/repos#list-repository-tags)
- [`GET /repos/{owner}/{repo}/teams`](/rest/repos#list-repository-teams)
- [`GET /repos/{owner}/{repo}/topics`](/rest/repos#get-all-repository-topics)
- [`PUT /repos/{owner}/{repo}/topics`](/rest/repos#replace-all-repository-topics)
- [`POST /repos/{owner}/{repo}/transfer`](/rest/repos#transfer-a-repository)
- [`POST /repos/{template_owner}/{template_repo}/generate`](/rest/repos#create-a-repository-using-a-template)
- [`GET /repositories`](/rest/repos#list-public-repositories)
- [`GET /user/repos`](/rest/repos#list-repositories-for-the-authenticated-user)
- [`POST /user/repos`](/rest/repos#create-a-repository-for-the-authenticated-user)
- [`GET /users/{username}/repos`](/rest/repos#list-repositories-for-a-user)
- [`GET /repos/{owner}/{repo}/autolinks`](/rest/repos/autolinks#list-all-autolinks-of-a-repository)
- [`POST /repos/{owner}/{repo}/autolinks`](/rest/repos/autolinks#create-an-autolink-reference-for-a-repository)
- [`GET /repos/{owner}/{repo}/autolinks/{autolink_id}`](/rest/repos/autolinks#get-an-autolink-reference-of-a-repository)
- [`DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}`](/rest/repos/autolinks#delete-an-autolink-reference-from-a-repository)
- [`POST /repos/{owner}/{repo}/releases/generate-notes`](/rest/repos#generate-release-notes)
{% ifversion ghes > 3.3 %}- [`GET /repos/{owner}/{repo}/replicas/caches`](/rest/repos#list-repository-cache-replication-status){% endif %}
- [`GET /repos/{owner}/{repo}/codeowners/errors`](/rest/repos#list-codeowners-errors)
- [`GET /repos/{owner}/{repo}/tags/protection`](/rest/repos#list-tag-protection-state-of-a-repository)
- [`POST /repos/{owner}/{repo}/tags/protection`](/rest/repos#create-tag-protection-state-for-a-repository)
- [`DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}`](/rest/repos#delete-tag-protection-state-for-a-repository)
{% ifversion fpt or ghec %}- [`GET /repos/{owner}/{repo}/vulnerability-alerts`](/rest/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/vulnerability-alerts`](/rest/repos#enable-vulnerability-alerts){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/vulnerability-alerts`](/rest/repos#disable-vulnerability-alerts){% endif %}
{% ifversion fpt or ghec %}- [`PUT /repos/{owner}/{repo}/automated-security-fixes`](/rest/repos#enable-automated-security-fixes){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /repos/{owner}/{repo}/automated-security-fixes`](/rest/repos#disable-automated-security-fixes){% endif %}

## search
- [`GET /search/code`](/rest/search#search-code)
- [`GET /search/commits`](/rest/search#search-commits)
- [`GET /search/issues`](/rest/search#search-issues-and-pull-requests)
- [`GET /search/labels`](/rest/search#search-labels)
- [`GET /search/repositories`](/rest/search#search-repositories)
- [`GET /search/topics`](/rest/search#search-topics)
- [`GET /search/users`](/rest/search#search-users)

## secret-scanning
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts`](/rest/secret-scanning#list-secret-scanning-alerts-for-a-repository)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/secret-scanning#get-a-secret-scanning-alert)
- [`PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`](/rest/secret-scanning#update-a-secret-scanning-alert)
- [`GET /orgs/{org}/secret-scanning/alerts`](/rest/secret-scanning#list-secret-scanning-alerts-for-an-organization)
- [`GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`](/rest/secret-scanning#list-locations-for-a-secret-scanning-alert)

## teams
- [`GET /orgs/{org}/teams`](/rest/teams#list-teams)
- [`POST /orgs/{org}/teams`](/rest/teams#create-a-team)
- [`GET /teams/{team_id}/members/{username}`](/rest/teams#get-team-member-legacy)
- [`PUT /teams/{team_id}/members/{username}`](/rest/teams#add-team-member-legacy)
- [`DELETE /teams/{team_id}/members/{username}`](/rest/teams#remove-team-member-legacy)
- [`GET /user/teams`](/rest/teams#list-teams-for-the-authenticated-user)
{% ifversion ghec or ghes > 3.5 %}- [`GET /orgs/{org}/external-group/{group_id}`](/rest/teams#external-idp-group-info-for-an-organization){% endif %}
{% ifversion ghec or ghes > 3.5 %}- [`GET /orgs/{org}/external-groups`](/rest/teams#list-external-idp-groups-for-an-organization){% endif %}
{% ifversion ghec or ghes > 3.5 %}- [`GET /orgs/{org}/teams/{team_slug}/external-groups`](/rest/teams#list-external-idp-group-team-connection){% endif %}
{% ifversion ghec or ghes > 3.5 %}- [`PATCH /orgs/{org}/teams/{team_slug}/external-groups`](/rest/teams#link-external-idp-group-team-connection){% endif %}
{% ifversion ghec or ghes > 3.5 %}- [`DELETE /orgs/{org}/teams/{team_slug}/external-groups`](/rest/teams#unlink-external-idp-group-team-connection){% endif %}

## users
- [`GET /user`](/rest/users#get-the-authenticated-user)
- [`PATCH /user`](/rest/users#update-the-authenticated-user)
- [`GET /user/emails`](/rest/users#list-email-addresses-for-the-authenticated-user)
- [`POST /user/emails`](/rest/users#add-an-email-address-for-the-authenticated-user)
- [`DELETE /user/emails`](/rest/users#delete-an-email-address-for-the-authenticated-user)
- [`GET /user/followers`](/rest/users#list-followers-of-the-authenticated-user)
- [`GET /user/following`](/rest/users#list-the-people-the-authenticated-user-follows)
- [`GET /user/following/{username}`](/rest/users#check-if-a-person-is-followed-by-the-authenticated-user)
- [`PUT /user/following/{username}`](/rest/users#follow-a-user)
- [`DELETE /user/following/{username}`](/rest/users#unfollow-a-user)
- [`GET /user/gpg_keys`](/rest/users#list-gpg-keys-for-the-authenticated-user)
- [`POST /user/gpg_keys`](/rest/users#create-a-gpg-key-for-the-authenticated-user)
- [`GET /user/gpg_keys/{gpg_key_id}`](/rest/users#get-a-gpg-key-for-the-authenticated-user)
- [`DELETE /user/gpg_keys/{gpg_key_id}`](/rest/users#delete-a-gpg-key-for-the-authenticated-user)
- [`GET /user/keys`](/rest/users#list-public-ssh-keys-for-the-authenticated-user)
- [`POST /user/keys`](/rest/users#create-a-public-ssh-key-for-the-authenticated-user)
- [`GET /user/keys/{key_id}`](/rest/users#get-a-public-ssh-key-for-the-authenticated-user)
- [`DELETE /user/keys/{key_id}`](/rest/users#delete-a-public-ssh-key-for-the-authenticated-user)
- [`GET /user/public_emails`](/rest/users#list-public-email-addresses-for-the-authenticated-user)
- [`GET /users`](/rest/users#list-users)
- [`GET /users/{username}`](/rest/users#get-a-user)
- [`GET /users/{username}/followers`](/rest/users#list-followers-of-a-user)
- [`GET /users/{username}/following`](/rest/users#list-the-people-a-user-follows)
- [`GET /users/{username}/following/{target_user}`](/rest/users#check-if-a-user-follows-another-user)
- [`GET /users/{username}/gpg_keys`](/rest/users#list-gpg-keys-for-a-user)
- [`GET /users/{username}/keys`](/rest/users#list-public-keys-for-a-user)
- [`GET /user/ssh_signing_keys`](/rest/users#list-public-ssh-signing-keys-for-the-authenticated-user)
- [`POST /user/ssh_signing_keys`](/rest/users#create-an-ssh-signing-key-for-the-authenticated-user)
- [`GET /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/users#get-a-ssh-signing-key-for-the-authenticated-user)
- [`DELETE /user/ssh_signing_keys/{ssh_signing_key_id}`](/rest/users#delete-a-ssh-signing-key-for-the-authenticated-user)
- [`GET /users/{username}/ssh_signing_keys`](/rest/users#list-ssh-signing-keys-for-a-user)
{% ifversion fpt or ghec %}- [`GET /user/blocks`](/rest/users#list-users-blocked-by-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`GET /user/blocks/{username}`](/rest/users#check-if-a-user-is-blocked-by-the-authenticated-user){% endif %}
{% ifversion fpt or ghec %}- [`PUT /user/blocks/{username}`](/rest/users#block-a-user){% endif %}
{% ifversion fpt or ghec %}- [`DELETE /user/blocks/{username}`](/rest/users#unblock-a-user){% endif %}
{% ifversion fpt or ghec %}- [`PATCH /user/email/visibility`](/rest/users#set-primary-email-visibility-for-the-authenticated-user){% endif %}

## webhooks
- [`GET /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#list-repository-webhooks)
- [`POST /repos/{owner}/{repo}/hooks`](/rest/webhooks/repos#create-a-repository-webhook)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#get-a-repository-webhook)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#update-a-repository-webhook)
- [`DELETE /repos/{owner}/{repo}/hooks/{hook_id}`](/rest/webhooks/repos#delete-a-repository-webhook)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository)
- [`PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config`](/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries`](/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook)
- [`GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`](/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`](/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/pings`](/rest/webhooks/repos#ping-a-repository-webhook)
- [`POST /repos/{owner}/{repo}/hooks/{hook_id}/tests`](/rest/webhooks/repos#test-the-push-repository-webhook)
