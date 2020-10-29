---
title: Permissões necessárias para os aplicativos GitHub
intro: 'Você pode encontrar as permissões necessárias para cada ponto de extremidade compatível com {% data variables.product.prodname_github_app %}.'
redirect_from:
  - /v3/apps/permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre as permissões de {% data variables.product.prodname_github_app %}

{% data variables.product.prodname_github_app %}s são criados com um conjunto de permissões. As permissões definem quais recursos o {% data variables.product.prodname_github_app %} pode acessar através da API. Para obter mais informações, consulte "[Configurações de permissões para os aplicativos GitHub](/apps/building-github-apps/setting-permissions-for-github-apps/)".

### Permissões de metadados

Os aplicativos GitHub têm a permissão de metadados `Read-only` por padrão. A permissão de metadados fornece acesso a uma coleção de pontos de extremidade somente leitura com metadados para vários recursos. Esses pontos de extremidade não vazam informações privadas sobre repositórios.

{% data reusables.apps.metadata-permissions %}

- [`GET /`](/v3/#root-endpoint)
- [`GET /codes_of_conduct`](/v3/codes_of_conduct/#get-all-codes-of-conduct)
- [`GET /codes_of_conduct/:key`](/v3/codes_of_conduct/#get-a-code-of-conduct)
- [`GET /emojis`](/v3/emojis/#emojis)
- [`GET /feeds`](/rest/reference/activity#get-feeds)
- [`GET /licenses`](/v3/licenses/#get-all-commonly-used-licenses)
- [`GET /licenses/:key`](/v3/licenses/#get-a-license)
- [`POST /markdown`](/v3/markdown/#render-a-markdown-document)
- [`POST /markdown/raw`](/v3/markdown/#render-a-markdown-document-in-raw-mode)
- [`GET /meta`](/v3/meta/#meta)
- [`GET /organizations`](/v3/orgs/#list-organizations)
- [`GET /orgs/:org`](/v3/orgs/#get-an-organization)
- [`GET /orgs/:org/projects`](/v3/projects/#list-organization-projects)
- [`GET /orgs/:org/repos`](/v3/repos/#list-organization-repositories)
- [`GET /rate_limit`](/v3/rate_limit/#get-rate-limit-status-for-the-authenticated-user)
- [`GET /repos/:owner/:repo`](/v3/repos/#get-a-repository)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/community/profile`](/v3/repos/community/#get-community-profile-metrics)
{% endif %}
- [`GET /repos/:owner/:repo/contributors`](/v3/repos/#list-repository-contributors)
- [`GET /repos/:owner/:repo/forks`](/rest/reference/repos#list-forks)
- [`GET /repos/:owner/:repo/languages`](/v3/repos/#list-repository-languages)
- [`GET /repos/:owner/:repo/license`](/v3/licenses/#get-the-license-for-a-repository)
- [`GET /repos/:owner/:repo/stargazers`](/rest/reference/activity#list-stargazers)
- [`GET /repos/:owner/:repo/stats/code_frequency`](/v3/repos/statistics/#get-the-weekly-commit-activity)
- [`GET /repos/:owner/:repo/stats/commit_activity`](/v3/repos/statistics/#get-the-last-year-of-commit-activity)
- [`GET /repos/:owner/:repo/stats/contributors`](/v3/repos/statistics/#get-all-contributor-commit-activity)
- [`GET /repos/:owner/:repo/stats/participation`](/v3/repos/statistics/#get-the-weekly-commit-count)
- [`GET /repos/:owner/:repo/stats/punch_card`](/v3/repos/statistics/#get-the-hourly-commit-count-for-each-day)
- [`GET /repos/:owner/:repo/subscribers`](/rest/reference/activity#list-watchers)
- [`GET /repos/:owner/:repo/tags`](/v3/repos/#list-repository-tags)
- [`GET /repos/:owner/:repo/topics`](/v3/repos#get-all-repository-topics)
- [`GET /repositories`](/v3/repos/#list-public-repositories)
- [`GET /user/repos`](/v3/repos/#list-repositories-for-the-authenticated-user)
- [`GET /user/starred`](/rest/reference/activity#list-repositories-starred-by-a-user)
- [`GET /user/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user)
- [`GET /users`](/v3/users/#list-users)
- [`GET /users/:username`](/v3/users/#get-a-user)
- [`GET /users/:username/followers`](/v3/users/followers/#list-followers-of-a-user)
- [`GET /users/:username/following`](/v3/users/followers/#list-the-people-a-user-follows)
- [`GET /users/:username/following/:target_user`](/v3/users/followers/#check-if-a-user-follows-another-user)
- [`GET /users/:username/gpg_keys`](/v3/users/gpg_keys/#list-gpg-keys-for-a-user)
- [`GET /users/:username/orgs`](/v3/orgs/#list-organizations-for-a-user)
- [`GET /users/:username/received_events`](/rest/reference/activity#list-events-received-by-the-authenticated-user)
- [`GET /users/:username/received_events/public`](/rest/reference/activity#list-public-events-received-by-a-user)
- [`GET /users/:username/repos`](/v3/repos/#list-repositories-for-a-user)
- [`GET /users/:username/subscriptions`](/rest/reference/activity#list-repositories-watched-by-a-user)

_Colaboradores_
- [`GET /repos/:owner/:repo/collaborators`](/v3/repos/collaborators/#list-repository-collaborators)
- [`GET /repos/:owner/:repo/collaborators/:username`](/v3/repos/collaborators/#check-if-a-user-is-a-repository-collaborator)

_Comentários de commit_
- [`GET /repos/:owner/:repo/comments`](/v3/repos/comments/#list-commit-comments-for-a-repository)
- [`GET /repos/:owner/:repo/comments/:comment_id`](/v3/repos/comments/#get-a-commit-comment)
- [`GET /repos/:owner/:repo/comments/:comment_id/reactions`](/v3/reactions/#list-reactions-for-a-commit-comment)
- [`GET /repos/:owner/:repo/commits/:sha/comments`](/v3/repos/comments/#list-commit-comments)

_Eventos_
- [`GET /events`](/rest/reference/activity#list-public-events)
- [`GET /networks/:owner/:repo/events`](/rest/reference/activity#list-public-events-for-a-network-of-repositories)
- [`GET /orgs/:org/events`](/rest/reference/activity#list-public-organization-events)
- [`GET /repos/:owner/:repo/events`](/rest/reference/activity#list-repository-events)
- [`GET /users/:username/events`](/rest/reference/activity#list-events-for-the-authenticated-user)
- [`GET /users/:username/events/public`](/rest/reference/activity#list-public-events-for-a-user)

_Git_
- [`GET /gitignore/templates`](/v3/gitignore/#get-all-gitignore-templates)
- [`GET /gitignore/templates/:key`](/v3/gitignore/#get-a-gitignore-template)

_Chaves_
- [`GET /users/:username/keys`](/v3/users/keys/#list-public-keys-for-a-user)

_Integrantes da organização_
- [`GET /orgs/:org/members`](/v3/orgs/members/#list-organization-members)
- [`GET /orgs/:org/members/:username`](/v3/orgs/members/#check-organization-membership-for-a-user)
- [`GET /orgs/:org/public_members`](/v3/orgs/members/#list-public-organization-members)
- [`GET /orgs/:org/public_members/:username`](/v3/orgs/members/#check-public-organization-membership-for-a-user)

_Pesquisar_
- [`GET /search/code`](/v3/search/#search-code)
- [`GET /search/commits`](/v3/search/#search-commits)
- [`GET /search/issues`](/v3/search/#search-issues-and-pull-requests)
- [`GET /search/labels`](/v3/search/#search-labels)
- [`GET /search/repositories`](/v3/search/#search-repositories)
- [`GET /search/topics`](/v3/search/#search-topics)
- [`GET /search/users`](/v3/search/#search-users)

{% if currentVersion == "free-pro-team@latest" %}
### Permissão em "ações"

- [`GET /repos/:owner/:repo/actions/artifacts`](/v3/actions/artifacts/#list-artifacts-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/actions/artifacts/:artifact_id`](/v3/actions/artifacts/#get-an-artifact) (:read)
- [`DELETE /repos/:owner/:repo/actions/artifacts/:artifact_id`](/v3/actions/artifacts/#delete-an-artifact) (:write)
- [`GET /repos/:owner/:repo/actions/artifacts/:artifact_id/zip`](/v3/actions/artifacts/#download-an-artifact) (:read)
- [`GET /repos/:owner/:repo/actions/jobs/:job_id`](/v3/actions/workflow-jobs/#get-a-job-for-a-workflow-run) (:read)
- [`GET /repos/:owner/:repo/actions/jobs/:job_id/logs`](/v3/actions/workflow-jobs/#download-job-logs-for-a-workflow-run) (:read)
- [`GET /repos/:owner/:repo/actions/runs`](/v3/actions/workflow-runs/#list-workflow-runs-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/actions/runs/:run_id`](/v3/actions/workflow-runs/#get-a-workflow-run) (:read)
- [`GET /repos/:owner/:repo/actions/runs/:run_id/artifacts`](/v3/actions/artifacts/#list-workflow-run-artifacts) (:read)
- [`POST /repos/:owner/:repo/actions/runs/:run_id/cancel`](/v3/actions/workflow-runs/#cancel-a-workflow-run) (:write)
- [`GET /repos/:owner/:repo/actions/runs/:run_id/jobs`](/v3/actions/workflow-jobs/#list-jobs-for-a-workflow-run) (:read)
- [`GET /repos/:owner/:repo/actions/runs/:run_id/logs`](/v3/actions/workflow-runs/#download-workflow-run-logs) (:read)
- [`DELETE /repos/:owner/:repo/actions/runs/:run_id/logs`](/v3/actions/workflow-runs/#delete-workflow-run-logs) (:write)
- [`POST /repos/:owner/:repo/actions/runs/:run_id/rerun`](/v3/actions/workflow-runs/#re-run-a-workflow) (:write)
- [`GET /repos/:owner/:repo/actions/workflows`](/v3/actions/workflows/#list-repository-workflows) (:read)
- [`GET /repos/:owner/:repo/actions/workflows/:workflow_id`](/v3/actions/workflows/#get-a-workflow) (:read)
- [`GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs`](/v3/actions/workflow-runs/#list-workflow-runs) (:read)
{% endif %}

### Permissão em "administração"

- [`POST /orgs/:org/repos`](/v3/repos/#create-an-organization-repository) (:write)
- [`PATCH /repos/:owner/:repo`](/v3/repos/#update-a-repository) (:write)
- [`DELETE /repos/:owner/:repo`](/v3/repos/#delete-a-repository) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`Get GET /repos/:owner/:repo/actions/runners/downloads`](/v3/actions/self-hosted-runners/#list-runner-applications-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/actions/runners`](/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/actions/runners/:runner_id`](/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-a-repository) (:read)
- [`DELETE /repos/:owner/:repo/actions/runners/:runner_id`](/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-a-repository) (:write)
- [`POST /repos/:owner/:repo/actions/runners/registration-token`](/v3/actions/self-hosted-runners/#create-a-registration-token-for-a-repository) (:write)
- [`POST /repos/:owner/:repo/actions/runners/remove-token`](/v3/actions/self-hosted-runners/#create-a-remove-token-for-a-repository) (:write)git
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /repos/:owner/:repo/automated-security-fixes`](/v3/repos/#enable-automated-security-fixes) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/automated-security-fixes`](/v3/repos/#disable-automated-security-fixes) (:write)
{% endif %}
- [`POST /repos/:owner/:repo/forks`](/v3/repos/forks/#create-a-fork) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/interaction-limits`](/v3/interactions/repos/#get-interaction-restrictions-for-a-repository) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /repos/:owner/:repo/interaction-limits`](/v3/interactions/repos/#set-interaction-restrictions-for-a-repository) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/interaction-limits`](/v3/interactions/repos/#remove-interaction-restrictions-for-a-repository) (:write)
{% endif %}
- [`PUT /repos/:owner/:repo/topics`](/v3/repos/#replace-all-repository-topics) (:write)
- [`POST /repos/:owner/:repo/transfer`](/v3/repos/#transfer-a-repository) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/vulnerability-alerts`](/v3/repos/#enable-vulnerability-alerts) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /repos/:owner/:repo/vulnerability-alerts`](/v3/repos/#enable-vulnerability-alerts) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/vulnerability-alerts`](/v3/repos/#disable-vulnerability-alerts) (:write)
{% endif %}
- [`PATCH /user/repository_invitations/:invitation_id`](/v3/repos/invitations/#accept-a-repository-invitation) (:write)
- [`DELETE /user/repository_invitations/:invitation_id`](/v3/repos/invitations/#decline-a-repository-invitation) (:write)

_Branches_
- [`GET /repos/:owner/:repo/branches/:branch/protection`](/v3/repos/branches/#get-branch-protection) (:read)
- [`PUT /repos/:owner/:repo/branches/:branch/protection`](/v3/repos/branches/#update-branch-protection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection`](/v3/repos/branches/#delete-branch-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/enforce_admins`](/v3/repos/branches/#get-admin-branch-protection) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/enforce_admins`](/v3/repos/branches/#set-admin-branch-protection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins`](/v3/repos/branches/#delete-admin-branch-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews`](/v3/repos/branches/#get-pull-request-review-protection) (:read)
- [`PATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews`](/v3/repos/branches/#update-pull-request-review-protection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews`](/v3/repos/branches/#delete-pull-request-review-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/required_signatures`](/v3/repos/branches/#get-commit-signature-protection) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/required_signatures`](/v3/repos/branches/#create-commit-signature-protection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/required_signatures`](/v3/repos/branches/#delete-commit-signature-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks`](/v3/repos/branches/#get-status-checks-protection) (:read)
- [`PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks`](/v3/repos/branches/#update-status-check-potection) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks`](/v3/repos/branches/#remove-status-check-protection) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts`](/v3/repos/branches/#get-all-status-check-contexts) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts`](/v3/repos/branches/#add-status-check-contexts) (:write)
- [`PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts`](/v3/repos/branches/#set-status-check-contexts) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts`](/v3/repos/branches/#remove-status-check-contexts) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/restrictions`](/v3/repos/branches/#get-access-restrictions) (:read)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions`](/v3/repos/branches/#delete-access-restrictions) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams`](/v3/repos/branches/#list-teams-with-access-to-the-protected-branch) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams`](/v3/repos/branches/#add-team-access-restrictions) (:write)
- [`PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams`](/v3/repos/branches/#set-team-access-restrictions) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams`](/v3/repos/branches/#remove-team-access-restrictions) (:write)
- [`GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users`](/v3/repos/branches/#list-users-with-access-to-the-protected-branch) (:read)
- [`POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users`](/v3/repos/branches/#add-user-access-restrictions) (:write)
- [`PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users`](/v3/repos/branches/#set-user-access-restrictions) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users`](/v3/repos/branches/#remove-user-access-restrictions) (:write)

_Colaboradores_
- [`PUT /repos/:owner/:repo/collaborators/:username`](/v3/repos/collaborators/#add-a-repository-collaborator) (:write)
- [`DELETE /repos/:owner/:repo/collaborators/:username`](/v3/repos/collaborators/#remove-a-repository-collaborator) (:write)

_Convites_
- [`GET /repos/:owner/:repo/invitations`](/v3/repos/invitations/#list-repository-invitations) (:read)
- [`PATCH /repos/:owner/:repo/invitations/:invitation_id`](/v3/repos/invitations/#update-a-repository-invitation) (:write)
- [`DELETE /repos/:owner/:repo/invitations/:invitation_id`](/v3/repos/invitations/#delete-a-repository-invitation) (:write)

_Chaves_
- [`GET /repos/:owner/:repo/keys`](/v3/repos/keys/#list-deploy-keys) (:read)
- [`POST /repos/:owner/:repo/keys`](/v3/repos/keys/#create-a-deploy-key) (:write)
- [`GET /repos/:owner/:repo/keys/:key_id`](/v3/repos/keys/#get-a-deploy-key) (:read)
- [`DELETE /repos/:owner/:repo/keys/:key_id`](/v3/repos/keys/#delete-a-deploy-key) (:write)

_Equipes_
- [`GET /repos/:owner/:repo/teams`](/v3/repos/#list-repository-teams) (:read)
- [`PUT /teams/:team_id/repos/:owner/:repo`](/v3/teams/#add-or-update-team-repository-permissions) (:write)
- [`DELETE /teams/:team_id/repos/:owner/:repo`](/v3/teams/#remove-a-repository-from-a-team) (:write)

{% if currentVersion == "free-pro-team@latest" %}
_Tráfego_
- [`GET /repos/:owner/:repo/traffic/clones`](/v3/repos/traffic/#get-repository-clones) (:read)
- [`GET /repos/:owner/:repo/traffic/popular/paths`](/v3/repos/traffic/#get-top-referral-paths) (:read)
- [`GET /repos/:owner/:repo/traffic/popular/referrers`](/v3/repos/traffic/#get-top-referral-sources) (:read)
- [`GET /repos/:owner/:repo/traffic/views`](/v3/repos/traffic/#get-page-views) (:read)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Permissão em "bloqueio"

- [`GET /user/blocks`](/v3/users/blocking/#list-users-blocked-by-the-authenticated-user) (:read)
- [`GET /user/blocks/:username`](/v3/users/blocking/#check-if-a-user-is-blocked-by-the-authenticated-user) (:read)
- [`PUT /user/blocks/:username`](/v3/users/blocking/#block-a-user) (:write)
- [`DELETE /user/blocks/:username`](/v3/users/blocking/#unblock-a-user) (:write)
{% endif %}

### Permissão em "verificações"

- [`POST /repos/:owner/:repo/check-runs`](/v3/checks/runs/#create-a-check-run) (:write)
- [`GET /repos/:owner/:repo/check-runs/:check_run_id`](/v3/checks/runs/#get-a-check-run) (:read)
- [`PATCH /repos/:owner/:repo/check-runs/:check_run_id`](/v3/checks/runs/#update-a-check-run) (:write)
- [`GET /repos/:owner/:repo/check-runs/:check_run_id/annotations`](/v3/checks/runs/#list-check-run-annotations) (:read)
- [`POST /repos/:owner/:repo/check-suites`](/v3/checks/suites/#create-a-check-suite) (:write)
- [`GET /repos/:owner/:repo/check-suites/:check_suite_id`](/v3/checks/suites/#get-a-check-suite) (:read)
- [`GET /repos/:owner/:repo/check-suites/:check_suite_id/check-runs`](/v3/checks/runs/#list-check-runs-in-a-check-suite) (:read)
- [`POST /repos/:owner/:repo/check-suites/:check_suite_id/rerequest`](/v3/checks/suites/#rerequest-a-check-suite) (:write)
- [`PATCH /repos/:owner/:repo/check-suites/preferences`](/v3/checks/suites/#update-repository-preferences-for-check-suites) (:write)
- [`GET /repos/:owner/:repo/commits/:sha/check-runs`](/v3/checks/runs/#list-check-runs-for-a-git-reference) (:read)
- [`GET /repos/:owner/:repo/commits/:sha/check-suites`](/v3/checks/suites/#list-check-suites-for-a-git-reference) (:read)

### Permissão em "conteúdo"

- [`GET /repos/:owner/:repo/:archive_format/:ref`](/v3/repos/contents/#download-a-repository-archive) (:read)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/artifacts/:artifact_id`](/v3/actions/artifacts/#get-an-artifact) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/actions/artifacts/:artifact_id`](/v3/actions/artifacts/#delete-an-artifact) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/artifacts/:artifact_id/zip`](/v3/actions/artifacts/#download-an-artifact) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/jobs/:job_id`](/v3/actions/workflow-jobs/#get-a-job-for-a-workflow-run) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/jobs/:job_id/logs`](/v3/actions/workflow-jobs/#download-job-logs-for-a-workflow-run) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs`](/v3/actions/workflow-runs/#list-workflow-runs-for-a-repository) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs/:run_id`](/v3/actions/workflow-runs/#get-a-workflow-run) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs/:run_id/artifacts`](/v3/actions/artifacts/#list-workflow-run-artifacts) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`POST /repos/:owner/:repo/actions/runs/:run_id/cancel`](/v3/actions/workflow-runs/#cancel-a-workflow-run) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs/:run_id/jobs`](/v3/actions/workflow-jobs/#list-jobs-for-a-workflow-run) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/runs/:run_id/logs`](/v3/actions/workflow-runs/#download-workflow-run-logs) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/actions/runs/:run_id/logs`](/v3/actions/workflow-runs/#delete-workflow-run-logs) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`POST /repos/:owner/:repo/actions/runs/:run_id/rerun`](/v3/actions/workflow-runs/#re-run-a-workflow) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/secrets`](/v3/actions/secrets/#list-repository-secrets) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/secrets/:name`](/v3/actions/secrets/#get-a-repository-secret) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /repos/:owner/:repo/actions/secrets/:name`](/v3/actions/secrets/#create-or-update-a-repository-secret) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /repos/:owner/:repo/actions/secrets/:name`](/v3/actions/secrets/#delete-a-repository-secret) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/secrets/public-key`](/v3/actions/secrets/#get-a-repository-public-key) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/workflows`](/v3/actions/workflows/#list-repository-workflows) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/workflows/:workflow_id`](/v3/actions/workflows/#get-a-workflow) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /repos/:owner/:repo/actions/workflows/:workflow_id/runs`](/v3/actions/workflow-runs/#list-workflow-runs) (:read)
{% endif %}
- [`GET /repos/:owner/:repo/check-runs/:check_run_id`](/v3/checks/runs/#get-a-check-run) (:read)
- [`GET /repos/:owner/:repo/check-runs/:check_run_id/annotations`](/v3/checks/runs/#list-check-run-annotations) (:read)
- [`GET /repos/:owner/:repo/check-suites/:check_suite_id`](/v3/checks/suites/#get-a-check-suite) (:read)
- [`GET /repos/:owner/:repo/check-suites/:check_suite_id/check-runs`](/v3/checks/runs/#list-check-runs-in-a-check-suite) (:read)
- [`POST /repos/:owner/:repo/check-suites/:check_suite_id/rerequest`](/v3/checks/suites/#rerequest-a-check-suite) (:write)
- [`GET /repos/:owner/:repo/commits`](/v3/repos/commits/#list-commits) (:read)
- [`GET /repos/:owner/:repo/commits/:sha`](/v3/repos/commits/#get-a-commit) (:read)
- [`GET /repos/:owner/:repo/commits/:sha/check-runs`](/v3/checks/runs/#list-check-runs-for-a-git-reference) (:read)
- [`GET /repos/:owner/:repo/commits/:sha/check-suites`](/v3/checks/suites/#list-check-suites-for-a-git-reference) (:read)
- [`GET /repos/:owner/:repo/community/code_of_conduct`](/v3/codes_of_conduct/#get-the-code-of-conduct-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/compare/:base...:head`](/v3/repos/commits/#compare-two-commits) (:read)
- [`GET /repos/:owner/:repo/contents/:path`](/v3/repos/contents/#get-repository-content) (:read)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- [`POST /repos/:owner/:repo/dispatches`](/v3/repos/#create-a-repository-dispatch-event) (:write)
{% endif %}
- [`POST /repos/:owner/:repo/forks`](/v3/repos/forks/#create-a-fork) (:read)
- [`POST /repos/:owner/:repo/merges`](/v3/repos/merging/#merge-a-branch) (:write)
- [`PUT /repos/:owner/:repo/pulls/:pull_number/merge`](/v3/pulls/#merge-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/readme(?:/(.*))?`](/v3/repos/contents/#get-a-repository-readme) (:read)

_Branches_
- [`GET /repos/:owner/:repo/branches`](/v3/repos/branches/#list-branches) (:read)
- [`GET /repos/:owner/:repo/branches/:branch`](/v3/repos/branches/#get-a-branch) (:read)
- [`GET /repos/:owner/:repo/branches/:branch/protection/restrictions/apps`](/v3/repos/branches/#list-apps-with-access-to-the-protected-branch) (:write)
- [`POST /repos/:owner/:repo/branches/:branch/protection/restrictions/apps`](/v3/repos/branches/#add-app-access-restrictions) (:write)
- [`PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/apps`](/v3/repos/branches/#set-app-access-restrictions) (:write)
- [`DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/apps`](/v3/repos/branches/#remove-user-access-restrictions) (:write)

_Comentários de commit_
- [`PATCH /repos/:owner/:repo/comments/:comment_id`](/v3/repos/comments/#update-a-commit-comment) (:write)
- [`DELETE /repos/:owner/:repo/comments/:comment_id`](/v3/repos/comments/#delete-a-commit-comment) (:write)
- [`POST /repos/:owner/:repo/comments/:comment_id/reactions`](/v3/reactions/#create-reaction-for-a-commit-comment) (:read)
- [`POST /repos/:owner/:repo/commits/:sha/comments`](/v3/repos/comments/#create-a-commit-comment) (:read)

_Git_
- [`POST /repos/:owner/:repo/git/blobs`](/v3/git/blobs/#create-a-blob) (:write)
- [`GET /repos/:owner/:repo/git/blobs/:sha`](/v3/git/blobs/#get-a-blob) (:read)
- [`POST /repos/:owner/:repo/git/commits`](/v3/git/commits/#create-a-commit) (:write)
- [`GET /repos/:owner/:repo/git/commits/:commit_id`](/v3/git/commits/#get-a-commit) (:read)
- [`POST /repos/:owner/:repo/git/refs`](/v3/git/refs/#create-a-reference) (:write)
- [`GET /repos/:owner/:repo/git/ref/:ref`](/v3/git/refs/#get-a-reference) (:read)
- [`GET /repos/:owner/:repo/git/matching-refs/:ref`](/v3/git/refs/#list-matching-references) (:read)
- [`PATCH /repos/:owner/:repo/git/refs/:ref`](/v3/git/refs/#update-a-reference) (:write)
- [`DELETE /repos/:owner/:repo/git/refs/:ref`](/v3/git/refs/#delete-a-reference) (:write)
- [`POST /repos/:owner/:repo/git/tags`](/v3/git/tags/#create-a-tag-object) (:write)
- [`GET /repos/:owner/:repo/git/tags/:tag_id`](/v3/git/tags/#get-a-tag) (:read)
- [`POST /repos/:owner/:repo/git/trees`](/v3/git/trees/#create-a-tree) (:write)
- [`GET /repos/:owner/:repo/git/trees/:sha`](/v3/git/trees/#get-a-tree) (:read)

{% if currentVersion == "free-pro-team@latest" %}
_importar_
- [`GET /repos/:owner/:repo/import`](/v3/migrations/source_imports/#get-an-import-status) (:read)
- [`PUT /repos/:owner/:repo/import`](/v3/migrations/source_imports/#start-an-import) (:write)
- [`PATCH /repos/:owner/:repo/import`](/v3/migrations/source_imports/#update-an-import) (:write)
- [`DELETE /repos/:owner/:repo/import`](/v3/migrations/source_imports/#cancel-an-import) (:write)
- [`GET /repos/:owner/:repo/import/authors`](/v3/migrations/source_imports/#get-commit-authors) (:read)
- [`PATCH /repos/:owner/:repo/import/authors/:author_id`](/v3/migrations/source_imports/#map-a-commit-author) (:write)
- [`GET /repos/:owner/:repo/import/large_files`](/v3/migrations/source_imports/#get-large-files) (:read)
- [`PATCH /repos/:owner/:repo/import/lfs`](/v3/migrations/source_imports/#update-git-lfs-preference) (:write)
{% endif %}

_Reações_

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- [`DELETE /reactions/:reaction_id`](/v3/reactions/#delete-a-reaction-legacy) (:write){% else %}- [`DELETE /reaction_id`](/v3/reactions/#delete-a-reaction) (:write){% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 0" %}
- [`DELETE /repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id`](/v3/reactions/#delete-a-commit-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/reactions/:reaction_id`](/v3/reactions/#delete-an-issue-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id/reactions/:reaction_id`](/v3/reactions/#delete-an-issue-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/pulls/comments/:comment_id/reactions/:reaction_id`](/v3/reactions/#delete-a-pull-request-comment-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id`](/v3/reactions/#delete-team-discussion-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`](/v3/reactions/#delete-team-discussion-comment-reaction) (:write){% endif %}

_Versões_
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

### Permissão em "implantações"

- [`GET /repos/:owner/:repo/deployments`](/rest/reference/repos#list-deployments) (:read)
- [`POST /repos/:owner/:repo/deployments`](/rest/reference/repos#create-a-deployment) (:write)
- [`GET /repos/:owner/:repo/deployments/:deployment_id`](/v3/repos/deployments/#get-a-deployment) (:read){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- [`DELETE /repos/:owner/:repo/deployments/:deployment_id`](/rest/reference/repos#delete-a-deployment) (:write){% endif %}
- [`GET /repos/:owner/:repo/deployments/:deployment_id/statuses`](/rest/reference/repos#list-deployment-statuses) (:read)
- [`POST /repos/:owner/:repo/deployments/:deployment_id/statuses`](/rest/reference/repos#create-a-deployment-status) (:write)
- [`GET /repos/:owner/:repo/deployments/:deployment_id/statuses/:status_id`](/rest/reference/repos#get-a-deployment-status) (:read)

### Permissão em "e-mails"

{% if currentVersion == "free-pro-team@latest" %}
- [`PATCH /user/email/visibility`](/v3/users/emails/#set-primary-email-visibility-for-the-authenticated-user) (:write)
{% endif %}
- [`GET /user/emails`](/v3/users/emails/#list-email-addresses-for-the-authenticated-user) (:read)
- [`POST /user/emails`](/v3/users/emails/#add-an-email-address-for-the-authenticated-user) (:write)
- [`DELETE /user/emails`](/v3/users/emails/#delete-an-email-address-for-the-authenticated-user) (:write)
- [`GET /user/public_emails`](/v3/users/emails/#list-public-email-addresses-for-the-authenticated-user) (:read)

### Permissão em "seguidores"

- [`GET /user/followers`](/v3/users/followers/#list-followers-of-a-user) (:read)
- [`GET /user/following`](/v3/users/followers/#list-the-people-a-user-follows) (:read)
- [`GET /user/following/:username`](/v3/users/followers/#check-if-a-person-is-followed-by-the-authenticated-user) (:read)
- [`PUT /user/following/:username`](/v3/users/followers/#follow-a-user) (:write)
- [`DELETE /user/following/:username`](/v3/users/followers/#unfollow-a-user) (:write)

### Permissão em "chaves gpg"

- [`GET /user/gpg_keys`](/v3/users/gpg_keys/#list-gpg-keys-for-the-authenticated-user) (:read)
- [`POST /user/gpg_keys`](/v3/users/gpg_keys/#create-a-gpg-key-for-the-authenticated-user) (:write)
- [`GET /user/gpg_keys/:gpg_key_id`](/v3/users/gpg_keys/#get-a-gpg-key-for-the-authenticated-user) (:read)
- [`DELETE /user/gpg_keys/:gpg_key_id`](/v3/users/gpg_keys/#delete-a-gpg-key-for-the-authenticated-user) (:write)

### Permissão em "problemas"

Problemas e pull requests estão estreitamente relacionados. Para obter mais informações, consulte "[Lista de problemas atribuídos ao usuário autenticado](/v3/issues/#list-issues-assigned-to-the-authenticated-user)". Se seu aplicativo GitHub tiver permissões em problemas e não em pull requests, esses pontos de extremidade irão limitar-se a problemas. Pontos de extremidade que retornam problemas e pull requests serão filtrados. Os pontos de extremidade que permitem operações em ambos problemas e pull requests estarão restritos a problemas.

- [`GET /repos/:owner/:repo/issues`](/v3/issues/#list-repository-issues) (:read)
- [`POST /repos/:owner/:repo/issues`](/v3/issues/#create-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number`](/v3/issues/#get-an-issue) (:read)
- [`PATCH /repos/:owner/:repo/issues/:issue_number`](/v3/issues/#update-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/comments`](/v3/issues/comments/#list-issue-comments) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/comments`](/v3/issues/comments/#create-an-issue-comment) (:write)
- [`PUT /repos/:owner/:repo/issues/:issue_number/lock`](/v3/issues/#lock-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/lock`](/v3/issues/#unlock-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/reactions`](/v3/reactions/#list-reactions-for-an-issue) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/reactions`](/v3/reactions/#create-reaction-for-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/timeline`](/v3/issues/timeline/#list-timeline-events-for-an-issue) (:read)
- [`GET /repos/:owner/:repo/issues/comments`](/v3/issues/comments/#list-issue-comments-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/issues/comments/:comment_id`](/v3/issues/comments/#get-an-issue-comment) (:read)
- [`PATCH /repos/:owner/:repo/issues/comments/:comment_id`](/v3/issues/comments/#update-an-issue-comment) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id`](/v3/issues/comments/#delete-an-issue-comment) (:write)
- [`GET /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/v3/reactions/#list-reactions-for-an-issue-comment) (:read)
- [`POST /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/v3/reactions/#create-reaction-for-an-issue-comment) (:write)

_Responsáveis_
- [`GET /repos/:owner/:repo/assignees`](/v3/issues/assignees/#list-assignees) (:read)
- [`GET /repos/:owner/:repo/assignees/:username`](/v3/issues/assignees/#check-if-a-user-can-be-assigned) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/assignees`](/v3/issues/assignees/#add-assignees-to-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/assignees`](/v3/issues/assignees/#remove-assignees-from-an-issue) (:write)

_Eventos_
- [`GET /repos/:owner/:repo/issues/:issue_number/events`](/v3/issues/events/#list-issue-events) (:read)
- [Get an issue event](/v3/issues/events/#get-an-issue-event) (:read)

_Etiquetas_
- [`GET /repos/:owner/:repo/issues/:issue_number/labels`](/v3/issues/labels/#list-labels-for-an-issue) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/labels`](/v3/issues/labels/#add-labels-to-an-issue) (:write)
- [`PUT /repos/:owner/:repo/issues/:issue_number/labels`](/v3/issues/labels/#set-labels-for-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/labels`](/v3/issues/labels/#remove-all-labels-from-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/labels/:name`](/v3/issues/labels/#remove-a-label-from-an-issue) (:write)
- [`GET /repos/:owner/:repo/labels`](/v3/issues/labels/#list-labels-for-a-repository) (:read)
- [`POST /repos/:owner/:repo/labels`](/v3/issues/labels/#create-a-label) (:write)
- [`GET /repos/:owner/:repo/labels/:name`](/v3/issues/labels/#get-a-label) (:read)
- [`PATCH /repos/:owner/:repo/labels/:name`](/v3/issues/labels/#update-a-label) (:write)
- [`DELETE /repos/:owner/:repo/labels/:name`](/v3/issues/labels/#delete-a-label) (:write)

_Marcos_
- [`GET /repos/:owner/:repo/milestones`](/v3/issues/milestones/#list-milestones) (:read)
- [`POST /repos/:owner/:repo/milestones`](/v3/issues/milestones/#create-a-milestone) (:write)
- [`GET /repos/:owner/:repo/milestones/:milestone_number`](/v3/issues/milestones/#get-a-milestone) (:read)
- [`PATCH /repos/:owner/:repo/milestones/:milestone_number`](/v3/issues/milestones/#update-a-milestone) (:write)
- [`DELETE /repos/:owner/:repo/milestones/:milestone_number`](/v3/issues/milestones/#delete-a-milestone) (:write)
- [`GET /repos/:owner/:repo/milestones/:milestone_number/labels`](/v3/issues/labels/#list-labels-for-issues-in-a-milestone) (:read)

_Reações_
- [`GET /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/v3/reactions/#list-reactions-for-an-issue-comment) (:read)
- [`POST /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/v3/reactions/#create-reaction-for-an-issue-comment) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/reactions`](/v3/reactions/#list-reactions-for-an-issue) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/reactions`](/v3/reactions/#create-reaction-for-an-issue) (:write)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- [`DELETE /reactions/:reaction_id`](/v3/reactions/#delete-a-reaction-legacy) (:write)
- [`DELETE /repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id`](/v3/reactions/#delete-a-commit-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/reactions/:reaction_id`](/v3/reactions/#delete-an-issue-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id/reactions/:reaction_id`](/v3/reactions/#delete-an-issue-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/pulls/comments/:comment_id/reactions/:reaction_id`](/v3/reactions/#delete-a-pull-request-comment-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id`](/v3/reactions/#delete-team-discussion-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`](/v3/reactions/#delete-team-discussion-comment-reaction) (:write){% else %}
- [`DELETE /reactions/:reaction_id`](/v3/reactions/#delete-a-reaction) (:write){% endif %}

### Permissão em "chaves"

_Chaves_
- [`GET /user/keys`](/v3/users/keys/#list-public-ssh-keys-for-the-authenticated-user) (:read)
- [`POST /user/keys`](/v3/users/keys/#create-a-public-ssh-key-for-the-authenticated-user) (:write)
- [`GET /user/keys/:key_id`](/v3/users/keys/#get-a-public-ssh-key-for-the-authenticated-user) (:read)
- [`DELETE /user/keys/:key_id`](/v3/users/keys/#delete-a-public-ssh-key-for-the-authenticated-user) (:write)

### Permissão em "integrantes"

{% if currentVersion == "free-pro-team@latest" %}
- [`GET /organizations/:org_id/team/:team_id/team-sync/group-mappings`](/v3/teams/team_sync/#list-idp-groups-for-a-team) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PATCH /organizations/:org_id/team/:team_id/team-sync/group-mappings`](/v3/teams/team_sync/#create-or-update-idp-group-connections) (:write)
{% endif %}
- [`GET /orgs/:org/outside_collaborators`](/v3/orgs/outside_collaborators/#list-outside-collaborators-for-an-organization) (:read)
- [`PUT /orgs/:org/outside_collaborators/:username`](/v3/orgs/outside_collaborators/#convert-an-organization-member-to-outside-collaborator) (:write)
- [`DELETE /orgs/:org/outside_collaborators/:username`](/v3/orgs/outside_collaborators/#remove-outside-collaborator-from-an-organization) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /orgs/:org/team-sync/groups`](/v3/teams/team_sync/#list-idp-groups-for-an-organization) (:write)
{% endif %}
- [`GET /orgs/:org/team/:team_id`](/v3/teams/#get-a-team-by-name) (:read)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /scim/v2/orgs/:org/Users`](/v3/scim/#list-scim-provisioned-identities) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`POST /scim/v2/orgs/:org/Users`](/v3/scim/#provision-and-invite-a-scim-user) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /scim/v2/orgs/:org/Users/:external_identity_guid`](/v3/scim/#get-scim-provisioning-information-for-a-user) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /scim/v2/orgs/:org/Users/:external_identity_guid`](/v3/scim/#set-scim-information-for-a-provisioned-user) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PATCH /scim/v2/orgs/:org/Users/:external_identity_guid`](/v3/scim/#update-an-attribute-for-a-scim-user) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /scim/v2/orgs/:org/Users/:external_identity_guid`](/v3/scim/#delete-a-scim-user-from-an-organization) (:write)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
_Convites_
- [`GET /orgs/:org/invitations`](/v3/orgs/members/#list-pending-organization-invitations) (:read)
- [`POST /orgs/:org/invitations`](/v3/orgs/members/#create-an-organization-invitation) (:write)
- [`GET /orgs/:org/invitations/:invitation_id/teams`](/v3/orgs/members/#list-organization-invitation-teams) (:read)
- [`GET /teams/:team_id/invitations`](/v3/teams/members/#list-pending-team-invitations) (:read)
{% endif %}

_Integrantes da organização_
- [`DELETE /orgs/:org/members/:username`](/v3/orgs/members/#remove-an-organization-member) (:write)
- [`GET /orgs/:org/memberships/:username`](/v3/orgs/members/#get-organization-membership-for-a-user) (:read)
- [`PUT /orgs/:org/memberships/:username`](/v3/orgs/members/#set-organization-membership-for-a-user) (:write)
- [`DELETE /orgs/:org/memberships/:username`](/v3/orgs/members/#remove-organization-membership-for-a-user) (:write)
- [`PUT /orgs/:org/public_members/:username`](/v3/orgs/members/#set-public-organization-membership-for-the-authenticated-user) (:write)
- [`DELETE /orgs/:org/public_members/:username`](/v3/orgs/members/#remove-public-organization-membership-for-the-authenticated-user) (:write)
- [`GET /user/memberships/orgs`](/v3/orgs/members/#list-organization-memberships-for-the-authenticated-user) (:read)
- [`GET /user/memberships/orgs/:org`](/v3/orgs/members/#get-an-organization-membership-for-the-authenticated-user) (:read)
- [`PATCH /user/memberships/orgs/:org`](/v3/orgs/members/#update-an-organization-membership-for-the-authenticated-user) (:write)

_Integrantes da equipe_
- [`GET /teams/:team_id/members`](/v3/teams/members/#list-team-members) (:read)
- [`GET /teams/:team_id/memberships/:username`](/v3/teams/members/#get-team-membership-for-a-user) (:read)
- [`PUT /teams/:team_id/memberships/:username`](/v3/teams/members/#add-or-update-team-membership-for-a-user) (:write)
- [`DELETE /teams/:team_id/memberships/:username`](/v3/teams/members/#remove-team-membership-for-a-user) (:write)

_Equipes_
- [`GET /orgs/:org/teams`](/v3/teams/#list-teams) (:read)
- [`POST /orgs/:org/teams`](/v3/teams/#create-a-team) (:write)
- [`GET /orgs/:org/teams/:team_slug`](/v3/teams/#get-a-team-by-name) (:read)
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
- [`GET /teams/:team_id`](/v3/teams/#get-a-team) (:read)
{% endif %}
- [`PATCH /teams/:team_id`](/v3/teams/#update-a-team) (:write)
- [`DELETE /teams/:team_id`](/v3/teams/#delete-a-team) (:write)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- [`GET /teams/:team_id/projects`](/v3/teams/#list-team-projects) (:read)
- [`GET /teams/:team_id/projects/:project_id`](/v3/teams/#check-team-permissions-for-a-project) (:read)
- [`PUT /teams/:team_id/projects/:project_id`](/v3/teams/#add-or-update-team-project-permissions) (:read)
- [`DELETE /teams/:team_id/projects/:project_id`](/v3/teams/#remove-a-project-from-a-team) (:read)
{% endif %}
- [`GET /teams/:team_id/repos`](/v3/teams/#list-team-repositories) (:read)
- [`GET /teams/:team_id/repos/:owner/:repo`](/v3/teams/#check-team-permissions-for-a-repository) (:read)
- [`PUT /teams/:team_id/repos/:owner/:repo`](/v3/teams/#add-or-update-team-repository-permissions) (:read)
- [`DELETE /teams/:team_id/repos/:owner/:repo`](/v3/teams/#remove-a-repository-from-a-team) (:write)
- [`GET /teams/:team_id/teams`](/v3/teams/#list-child-teams) (:read)

### Permissão em "administração da organização"

- [`PATCH /orgs/:org`](/v3/orgs/#update-an-organization) (:write)
{% if currentVersion == "free-pro-team@latest" %}
- [`GET /orgs/:org/interaction-limits`](/v3/interactions/orgs/#get-interaction-restrictions-for-an-organization) (:read)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`PUT /orgs/:org/interaction-limits`](/v3/interactions/orgs/#set-interaction-restrictions-for-an-organization) (:write)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
- [`DELETE /orgs/:org/interaction-limits`](/v3/interactions/orgs/#remove-interaction-restrictions-for-an-organization) (:write)
{% endif %}

### Permissão em "hooks da organização"

- [`GET /orgs/:org/hooks`](/rest/reference/orgs#webhooks/#list-organization-webhooks) (:read)
- [`POST /orgs/:org/hooks`](/rest/reference/orgs#webhooks/#create-an-organization-webhook) (:write)
- [`GET /orgs/:org/hooks/:hook_id`](/rest/reference/orgs#webhooks/#get-an-organization-webhook) (:read)
- [`PATCH /orgs/:org/hooks/:hook_id`](/rest/reference/orgs#webhooks/#update-an-organization-webhook) (:write)
- [`DELETE /orgs/:org/hooks/:hook_id`](/rest/reference/orgs#webhooks/#delete-an-organization-webhook) (:write)
- [`POST /orgs/:org/hooks/:hook_id/pings`](/rest/reference/orgs#webhooks/#ping-an-organization-webhook) (:write)

_Equipes_
- [`DELETE /teams/:team_id/projects/:project_id`](/v3/teams/#remove-a-project-from-a-team) (:read)

{% if enterpriseServerVersions contains currentVersion %}
### Permissão em "hooks pre-receive da organização"

- [`GET /orgs/:org/pre-receive-hooks`](/v3/enterprise-admin/org_pre_receive_hooks/#list-pre-receive-hooks-for-an-organization) (:read)
- [`GET /orgs/:org/pre-receive-hooks/:pre_receive_hook_id`](/v3/enterprise-admin/org_pre_receive_hooks/#get-a-pre-receive-hook-for-an-organization) (:read)
- [`PATCH /orgs/:org/pre-receive-hooks/:pre_receive_hook_id`](/v3/enterprise-admin/org_pre_receive_hooks/#update-pre-receive-hook-enforcement-for-an-organization) (:write)
- [`DELETE /orgs/:org/pre-receive-hooks/:pre_receive_hook_id`](/v3/enterprise-admin/org_pre_receive_hooks/#remove-pre-receive-hook-enforcement-for-an-organization) (:write)
{% endif %}

### Permissão em "projetos da organização"

- [`POST /orgs/:org/projects`](/v3/projects/#create-an-organization-project) (:write)
- [`GET /projects/:project_id`](/v3/projects/#get-a-project) (:read)
- [`PATCH /projects/:project_id`](/v3/projects/#update-a-project) (:write)
- [`DELETE /projects/:project_id`](/v3/projects/#delete-a-project) (:write)
- [`POST /projects/:project_id/cards`](/v3/projects/cards/#create-a-project-card) (:write)
- [`GET /projects/:project_id/columns`](/v3/projects/columns/#list-project-columns) (:read)
- [`POST /projects/:project_id/columns`](/v3/projects/columns/#create-a-project-column) (:write)
- [`GET /projects/columns/:column_id`](/v3/projects/columns/#get-a-project-column) (:read)
- [`PATCH /projects/columns/:column_id`](/v3/projects/columns/#update-a-project-column) (:write)
- [`DELETE /projects/columns/:column_id`](/v3/projects/columns/#delete-a-project-column) (:write)
- [`GET /projects/columns/:column_id/cards`](/v3/projects/cards/#list-project-cards) (:read)
- [`POST /projects/columns/:column_id/cards`](/v3/projects/cards/#create-a-project-card) (:write)
- [`POST /projects/columns/:column_id/moves`](/v3/projects/columns/#move-a-project-column) (:write)
- [`GET /projects/columns/cards/:card_id`](/v3/projects/cards/#get-a-project-card) (:read)
- [`PATCH /projects/columns/cards/:card_id`](/v3/projects/cards/#update-a-project-card) (:write)
- [`DELETE /projects/columns/cards/:card_id`](/v3/projects/cards/#delete-a-project-card) (:write)
- [`POST /projects/columns/cards/:card_id/moves`](/v3/projects/cards/#move-a-project-card) (:write)

{% if currentVersion == "free-pro-team@latest" %}
### Permissão em "bloqueio de usuários da organização"

- [`GET /orgs/:org/blocks`](/v3/orgs/blocking/#list-users-blocked-by-an-organization) (:read)
- [`GET /orgs/:org/blocks/:username`](/v3/orgs/blocking/#check-if-a-user-is-blocked-by-an-organization) (:read)
- [`PUT /orgs/:org/blocks/:username`](/v3/orgs/blocking/#block-a-user-from-an-organization) (:write)
- [`DELETE /orgs/:org/blocks/:username`](/v3/orgs/blocking/#unblock-a-user-from-an-organization) (:write)
{% endif %}

### Permissão em "páginas"

- [`GET /repos/:owner/:repo/pages`](/rest/reference/repos#get-a-github-pages-site) (:read)
- [`POST /repos/:owner/:repo/pages`](/rest/reference/repos#create-a-github-pages-site) (:write)
- [`PUT /repos/:owner/:repo/pages`](/rest/reference/repos#update-information-about-a-github-pages-site) (:write)
- [`DELETE /repos/:owner/:repo/pages`](/rest/reference/repos#delete-a-github-pages-site) (:write)
- [`GET /repos/:owner/:repo/pages/builds`](/rest/reference/repos#list-github-pages-builds) (:read)
- [`POST /repos/:owner/:repo/pages/builds`](/rest/reference/repos#request-a-github-pages-build) (:write)
- [`GET /repos/:owner/:repo/pages/builds/:build_id`](/rest/reference/repos#get-github-pages-build) (:read)
- [`GET /repos/:owner/:repo/pages/builds/latest`](/rest/reference/repos#get-latest-pages-build) (:read)

### Permissão em "pull requests"

Pull requests and issues are closely related.. If your GitHub App has permissions on pull requests but not on issues, these endpoints will be limited to pull requests. Os pontos de extremidade que retornam pull requests e problemas serão filtrados. Os pontos de extremidade que permitem operações em pull requests e problemas serão restritos a pull requests.

- [`PATCH /repos/:owner/:repo/issues/:issue_number`](/v3/issues/#update-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/comments`](/v3/issues/comments/#list-issue-comments) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/comments`](/v3/issues/comments/#create-an-issue-comment) (:write)
- [`PUT /repos/:owner/:repo/issues/:issue_number/lock`](/v3/issues/#lock-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/lock`](/v3/issues/#unlock-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/:issue_number/timeline`](/v3/issues/timeline/#list-timeline-events-for-an-issue) (:read)
- [`GET /repos/:owner/:repo/issues/comments`](/v3/issues/comments/#list-issue-comments-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/issues/comments/:comment_id`](/v3/issues/comments/#get-an-issue-comment) (:read)
- [`PATCH /repos/:owner/:repo/issues/comments/:comment_id`](/v3/issues/comments/#update-an-issue-comment) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id`](/v3/issues/comments/#delete-an-issue-comment) (:write)
- [`GET /repos/:owner/:repo/pulls`](/v3/pulls/#list-pull-requests) (:read)
- [`POST /repos/:owner/:repo/pulls`](/v3/pulls/#create-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number`](/v3/pulls/#get-a-pull-request) (:read)
- [`PATCH /repos/:owner/:repo/pulls/:pull_number`](/v3/pulls/#update-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number/comments`](/v3/pulls/comments/#list-review-comments-on-a-pull-request) (:read)
- [`POST /repos/:owner/:repo/pulls/:pull_number/comments`](/v3/pulls/comments/#create-a-review-comment-for-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number/commits`](/v3/pulls/#list-commits-on-a-pull-request) (:read)
- [`GET /repos/:owner/:repo/pulls/:pull_number/files`](/v3/pulls/#list-pull-requests-files) (:read)
- [`GET /repos/:owner/:repo/pulls/:pull_number/merge`](/v3/pulls/#check-if-a-pull-request-has-been-merged) (:read)
- [`GET /repos/:owner/:repo/pulls/comments`](/v3/pulls/comments/#list-review-comments-in-a-repository) (:read)
- [`GET /repos/:owner/:repo/pulls/comments/:comment_id`](/v3/pulls/comments/#get-a-review-comment-for-a-pull-request) (:read)
- [`PATCH /repos/:owner/:repo/pulls/comments/:comment_id`](/v3/pulls/comments/#update-a-review-comment-for-a-pull-request) (:write)
- [`DELETE /repos/:owner/:repo/pulls/comments/:comment_id`](/v3/pulls/comments/#delete-a-review-comment-for-a-pull-request) (:write)

_Responsáveis_
- [`GET /repos/:owner/:repo/assignees`](/v3/issues/assignees/#list-assignees) (:read)
- [`GET /repos/:owner/:repo/assignees/:username`](/v3/issues/assignees/#check-if-a-user-can-be-assigned) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/assignees`](/v3/issues/assignees/#add-assignees-to-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/assignees`](/v3/issues/assignees/#remove-assignees-from-an-issue) (:write)

_Eventos_
- [`GET /repos/:owner/:repo/issues/:issue_number/events`](/v3/issues/events/#list-issue-events) (:read)
- [`GET /repos/:owner/:repo/issues/events/:event_id`](/v3/issues/events/#get-an-issue-event) (:read)
- [`POST /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/events`](/v3/pulls/reviews/#submit-a-review-for-a-pull-request) (:write)

_Etiquetas_
- [`GET /repos/:owner/:repo/issues/:issue_number/labels`](/v3/issues/labels/#list-labels-for-an-issue) (:read)
- [`POST /repos/:owner/:repo/issues/:issue_number/labels`](/v3/issues/labels/#add-labels-to-an-issue) (:write)
- [`PUT /repos/:owner/:repo/issues/:issue_number/labels`](/v3/issues/labels/#set-labels-for-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/labels`](/v3/issues/labels/#remove-all-labels-from-an-issue) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/labels/:name`](/v3/issues/labels/#remove-a-label-from-an-issue) (:write)
- [`GET /repos/:owner/:repo/labels`](/v3/issues/labels/#list-labels-for-a-repository) (:read)
- [`POST /repos/:owner/:repo/labels`](/v3/issues/labels/#create-a-label) (:write)
- [`GET /repos/:owner/:repo/labels/:name`](/v3/issues/labels/#get-a-label) (:read)
- [`PATCH /repos/:owner/:repo/labels/:name`](/v3/issues/labels/#update-a-label) (:write)
- [`DELETE /repos/:owner/:repo/labels/:name`](/v3/issues/labels/#delete-a-label) (:write)

_Marcos_
- [`GET /repos/:owner/:repo/milestones`](/v3/issues/milestones/#list-milestones) (:read)
- [`POST /repos/:owner/:repo/milestones`](/v3/issues/milestones/#create-a-milestone) (:write)
- [`GET /repos/:owner/:repo/milestones/:milestone_number`](/v3/issues/milestones/#get-a-milestone) (:read)
- [`PATCH /repos/:owner/:repo/milestones/:milestone_number`](/v3/issues/milestones/#update-a-milestone) (:write)
- [`DELETE /repos/:owner/:repo/milestones/:milestone_number`](/v3/issues/milestones/#delete-a-milestone) (:write)
- [`GET /repos/:owner/:repo/milestones/:milestone_number/labels`](/v3/issues/labels/#list-labels-for-issues-in-a-milestone) (:read)

_Reações_
- [`POST /repos/:owner/:repo/issues/:issue_number/reactions`](/v3/reactions/#create-reaction-for-an-issue) (:write)
- [`GET /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/v3/reactions/#list-reactions-for-an-issue-comment) (:read)
- [`POST /repos/:owner/:repo/issues/comments/:comment_id/reactions`](/v3/reactions/#create-reaction-for-an-issue-comment) (:write)
- [`GET /repos/:owner/:repo/pulls/comments/:comment_id/reactions`](/v3/reactions/#list-reactions-for-a-pull-request-review-comment) (:read)
- [`POST /repos/:owner/:repo/pulls/comments/:comment_id/reactions`](/v3/reactions/#create-reaction-for-a-pull-request-review-comment) (:write)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- [`DELETE /reactions/:reaction_id`](/v3/reactions/#delete-a-reaction-legacy) (:write)
- [`DELETE /repos/:owner/:repo/comments/:comment_id/reactions/:reaction_id`](/v3/reactions/#delete-a-commit-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/:issue_number/reactions/:reaction_id`](/v3/reactions/#delete-an-issue-reaction) (:write)
- [`DELETE /repos/:owner/:repo/issues/comments/:comment_id/reactions/:reaction_id`](/v3/reactions/#delete-an-issue-comment-reaction) (:write)
- [`DELETE /repos/:owner/:repo/pulls/comments/:comment_id/reactions/:reaction_id`](/v3/reactions/#delete-a-pull-request-comment-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/reactions/:reaction_id`](/v3/reactions/#delete-team-discussion-reaction) (:write)
- [`DELETE /orgs/:org/teams/:team_slug/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`](/v3/reactions/#delete-team-discussion-comment-reaction) (:write){% else %}- [`DELETE /reactions/:reaction_id`](/v3/reactions/#delete-a-reaction) (:write){% endif %}

_Revisores solicitados_
- [`GET /repos/:owner/:repo/pulls/:pull_number/requested_reviewers`](/v3/pulls/review_requests/#list-requested-reviewers-for-a-pull-request) (:read)
- [`POST /repos/:owner/:repo/pulls/:pull_number/requested_reviewers`](/v3/pulls/review_requests/#request-reviewers-for-a-pull-request) (:write)
- [`DELETE /repos/:owner/:repo/pulls/:pull_number/requested_reviewers`](/v3/pulls/review_requests/#remove-requested-reviewers-from-a-pull-request) (:write)

_Revisões_
- [`GET /repos/:owner/:repo/pulls/:pull_number/reviews`](/v3/pulls/reviews/#list-reviews-for-a-pull-request) (:read)
- [`POST /repos/:owner/:repo/pulls/:pull_number/reviews`](/v3/pulls/reviews/#create-a-review-for-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id`](/v3/pulls/reviews/#get-a-review-for-a-pull-request) (:read)
- [`PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id`](/v3/pulls/reviews/#update-a-review-for-a-pull-request) (:write)
- [`DELETE /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id`](/v3/pulls/reviews/#delete-a-pending-review-for-a-pull-request) (:write)
- [`GET /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/comments`](/v3/pulls/reviews/#list-comments-for-a-pull-request-review) (:read)
- [`PUT /repos/:owner/:repo/pulls/:pull_number/reviews/:review_id/dismissals`](/v3/pulls/reviews/#dismiss-a-review-for-a-pull-request) (:write)

### Permissão em "hooks de repositório"

- [`GET /repos/:owner/:repo/hooks`](/v3/repos/hooks/#list-repository-webhooks) (:read)
- [`POST /repos/:owner/:repo/hooks`](/v3/repos/hooks/#create-a-repository-webhook) (:write)
- [`GET /repos/:owner/:repo/hooks/:hook_id`](/v3/repos/hooks/#get-a-repository-webhook) (:read)
- [`PATCH /repos/:owner/:repo/hooks/:hook_id`](/v3/repos/hooks/#update-a-repository-webhook) (:write)
- [`DELETE /repos/:owner/:repo/hooks/:hook_id`](/v3/repos/hooks/#delete-a-repository-webhook) (:write)
- [`POST /repos/:owner/:repo/hooks/:hook_id/pings`](/v3/repos/hooks/#ping-a-repository-webhook) (:read)
- [`POST /repos/:owner/:repo/hooks/:hook_id/tests`](/v3/repos/hooks/#test-the-push-repository-webhook) (:read)

{% if enterpriseServerVersions contains currentVersion %}
### Permission on "repository pre receive hooks"

- [`GET /repos/:owner/:repo/pre-receive-hooks`](/v3/enterprise-admin/repo_pre_receive_hooks/#list-pre-receive-hooks-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id`](/v3/enterprise-admin/repo_pre_receive_hooks/#get-a-pre-receive-hook-for-a-repository) (:read)
- [`PATCH /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id`](/v3/enterprise-admin/repo_pre_receive_hooks/#update-pre-receive-hook-enforcement-for-a-repository) (:write)
- [`DELETE /repos/:owner/:repo/pre-receive-hooks/:pre_receive_hook_id`](/v3/enterprise-admin/repo_pre_receive_hooks/#remove-pre-receive-hook-enforcement-for-a-repository) (:write)
{% endif %}

### Permissão em "projetos de repositório"

- [`GET /projects/:project_id`](/v3/projects/#get-a-project) (:read)
- [`PATCH /projects/:project_id`](/v3/projects/#update-a-project) (:write)
- [`DELETE /projects/:project_id`](/v3/projects/#delete-a-project) (:write)
- [`POST /projects/:project_id/cards`](/v3/projects/cards/#create-a-project-card) (:write)
- [`GET /projects/:project_id/columns`](/v3/projects/columns/#list-project-columns) (:read)
- [`POST /projects/:project_id/columns`](/v3/projects/columns/#create-a-project-column) (:write)
- [`GET /projects/columns/:column_id`](/v3/projects/columns/#get-a-project-column) (:read)
- [`PATCH /projects/columns/:column_id`](/v3/projects/columns/#update-a-project-column) (:write)
- [`DELETE /projects/columns/:column_id`](/v3/projects/columns/#delete-a-project-column) (:write)
- [`GET /projects/columns/:column_id/cards`](/v3/projects/cards/#list-project-cards) (:read)
- [`POST /projects/columns/:column_id/cards`](/v3/projects/cards/#create-a-project-card) (:write)
- [`POST /projects/columns/:column_id/moves`](/v3/projects/columns/#move-a-project-column) (:write)
- [`GET /projects/columns/cards/:card_id`](/v3/projects/cards/#get-a-project-card) (:read)
- [`PATCH /projects/columns/cards/:card_id`](/v3/projects/cards/#update-a-project-card) (:write)
- [`DELETE /projects/columns/cards/:card_id`](/v3/projects/cards/#delete-a-project-card) (:write)
- [`POST /projects/columns/cards/:card_id/moves`](/v3/projects/cards/#move-a-project-card) (:write)
- [`GET /repos/:owner/:repo/projects`](/v3/projects/#list-repository-projects) (:read)
- [`POST /repos/:owner/:repo/projects`](/v3/projects/#create-a-repository-project) (:write)

_Equipes_
- [`DELETE /teams/:team_id/projects/:project_id`](/v3/teams/#remove-a-project-from-a-team) (:read)

{% if currentVersion == "free-pro-team@latest" %}
### Permissão em "segredos"

* [`GET /repos/:owner/:repo/actions/secrets/public-key`](/v3/actions/secrets/#get-a-repository-public-key) (:read)
* [`GET /repos/:owner/:repo/actions/secrets`](/v3/actions/secrets/#list-repository-secrets) (:read)
* [`GET /repos/:owner/:repo/actions/secrets/:secret_name`](/v3/actions/secrets/#get-a-repository-secret) (:read)
* [`PUT /repos/:owner/:repo/actions/secrets/:secret_name`](/v3/actions/secrets/#create-or-update-a-repository-secret) (:write)
* [`DELETE /repos/:owner/:repo/actions/secrets/:secret_name`](/v3/actions/secrets/#delete-a-repository-secret) (:write)
* [`GET /orgs/:org/actions/secrets/public-key`](/v3/actions/secrets/#get-an-organization-public-key) (:read)
* [`GET /orgs/:org/actions/secrets`](/v3/actions/secrets/#list-organization-secrets) (:read)
* [`GET /orgs/:org/actions/secrets/:secret_name`](/v3/actions/secrets/#get-an-organization-secret) (:read)
* [`PUT /orgs/:org/actions/secrets/:secret_name`](/v3/actions/secrets/#create-or-update-an-organization-secret) (:write)
* [`GET /orgs/:org/actions/secrets/:secret_name/repositories`](/v3/actions/secrets/#list-selected-repositories-for-an-organization-secret) (:read)
* [`PUT /orgs/:org/actions/secrets/:secret_name/repositories`](/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret) (:write)
* [`PUT /orgs/:org/actions/secrets/:secret_name/repositories/:repository_id`](/v3/actions/secrets/#add-selected-repository-to-an-organization-secret) (:write)
* [`DELETE /orgs/:org/actions/secrets/:secret_name/repositories/:repository_id`](/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret) (:write)
* [`DELETE /orgs/:org/actions/secrets/:secret_name`](/v3/actions/secrets/#delete-an-organization-secret) (:write)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Permissão em "eventos de segurança"

- [`GET /repos/:owner/:repo/code-scanning/alerts`](/v3/code-scanning/#list-code-scanning-alerts-for-a-repository) (:read)
- [`GET /repos/:owner/:repo/code-scanning/alerts/:alert_id`](/v3/code-scanning/#get-a-code-scanning-alert) (:read)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Permissão em "executores auto-hospedados"
- [`GET /orgs/:org/actions/runners/downloads`](/v3/actions/self-hosted-runners/#list-runner-applications-for-an-organization) (:read)
- [`POST /orgs/:org/actions/runners/registration-token`](/v3/actions/self-hosted-runners/#create-a-registration-token-for-an-organization) (:write)
- [`GET /orgs/:org/actions/runners`](/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-an-organization) (:read)
- [`GET /orgs/:org/actions/runners/:runner_id`](/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-an-organization) (:read)
- [`POST /orgs/:org/actions/runners/remove-token`](/v3/actions/self-hosted-runners/#create-a-remove-token-for-an-organization) (:write)
- [`DELETE /orgs/:org/actions/runners/:runner_id`](/v3/actions/self-hosted-runners/#delete-a-self-hosted-runner-from-an-organization) (:write)
{% endif %}

### Permissão em "arquivo único"

- [`GET /repos/:owner/:repo/contents/:path`](/v3/repos/contents/#get-repository-content) (:read)
- [`PUT /repos/:owner/:repo/contents/:path`](/v3/repos/contents/#create-or-update-file-contents) (:write)
- [`DELETE /repos/:owner/:repo/contents/:path`](/v3/repos/contents/#delete-a-file) (:write)

### Permissão em "marcar com uma estrela"

- [`GET /user/starred/:owner/:repo`](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user) (:read)
- [`PUT /user/starred/:owner/:repo`](/rest/reference/activity#star-a-repository-for-the-authenticated-user) (:write)
- [`DELETE /user/starred/:owner/:repo`](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user) (:write)

### Permissão em "status"

- [`GET /repos/:owner/:repo/commits/:ref/status`](/v3/repos/statuses/#get-the-combined-status-for-a-specific-reference) (:read)
- [`GET /repos/:owner/:repo/commits/:ref/statuses`](/v3/repos/statuses/#list-commit-statuses-for-a-reference) (:read)
- [`POST /repos/:owner/:repo/statuses/:sha`](/v3/repos/statuses/#create-a-commit-status) (:write)

### Permissão em "discussões em equipe"

- [`GET /teams/:team_id/discussions`](/v3/teams/discussions/#list-discussions) (:read)
- [`POST /teams/:team_id/discussions`](/v3/teams/discussions/#create-a-discussion) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number`](/v3/teams/discussions/#get-a-discussion) (:read)
- [`PATCH /teams/:team_id/discussions/:discussion_number`](/v3/teams/discussions/#update-a-discussion) (:write)
- [`DELETE /teams/:team_id/discussions/:discussion_number`](/v3/teams/discussions/#delete-a-discussion) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number/comments`](/v3/teams/discussion_comments/#list-discussion-comments) (:read)
- [`POST /teams/:team_id/discussions/:discussion_number/comments`](/v3/teams/discussion_comments/#create-a-discussion-comment) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number/comments/:comment_number`](/v3/teams/discussion_comments/#get-a-discussion-comment) (:read)
- [`PATCH /teams/:team_id/discussions/:discussion_number/comments/:comment_number`](/v3/teams/discussion_comments/#update-a-discussion-comment) (:write)
- [`DELETE /teams/:team_id/discussions/:discussion_number/comments/:comment_number`](/v3/teams/discussion_comments/#delete-a-discussion-comment) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`](/v3/reactions/#list-reactions-for-a-team-discussion-comment) (:read)
- [`POST /teams/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`](/v3/reactions/#create-reaction-for-a-team-discussion-comment) (:write)
- [`GET /teams/:team_id/discussions/:discussion_number/reactions`](/v3/reactions/#list-reactions-for-a-team-discussion) (:read)
- [`POST /teams/:team_id/discussions/:discussion_number/reactions`](/v3/reactions/#create-reaction-for-a-team-discussion) (:write)
