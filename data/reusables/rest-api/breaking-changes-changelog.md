<!-- markdownlint-disable liquid-quoted-conditional-arg search-replace GHD046 -->
{% ifversion fpt %}
{% if query.apiVersion == nil or "2026-03-10" <= query.apiVersion %}
## Version 2026-03-10

- **Remove deprecated `rate` property from rate limit endpoint**
  The `rate` property has been deprecated since 2021 and duplicates information
  available in the `resources.core` property. To migrate, update your integration
  to read rate limit information from `resources.core` instead of `rate`.

  See https://docs.github.com/rest/rate-limit for updated documentation.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /rate_limit`

  </details>

- **Remove deprecated `permission` property from request when a team is created**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `POST /orgs/{org}/teams`

  </details>

- **Updates the "Get repository content" API, so that, when listing the contents of a directory, submodules have the `type` "submodule" instead of the `type` "file"**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /repos/{owner}/{repo}/contents/{path}`

  </details>

- **Change Content-Type of SARIF response**
  When trying to receive the SARIF upload by setting the `Accept` header to `application/sarif+json` the response `Content-Type` would incorrectly be set to `application/json+sarif`.
  This change corrects this so the response `Content-Type` in this case becomes `application/sarif+json`.

  For more information, see "[Get a code scanning analysis for a repository](https://docs.github.com/rest/code-scanning/code-scanning#get-a-code-scanning-analysis-for-a-repository)" in the REST API documentation.
- **Remove deprecated `use_squash_pr_title_as_default` property from repo settings endpoints**
  This property has been replaced by `squash_merge_commit_title`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`
  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /installation/repositories`
  - `GET /issues`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /orgs/{org}/actions/permissions/repositories`
  - `GET /orgs/{org}/actions/permissions/self-hosted-runners/repositories`
  - `GET /orgs/{org}/events`
  - `GET /orgs/{org}/issues`
  - `GET /orgs/{org}/migrations`
  - `GET /orgs/{org}/migrations/{migration_id}`
  - `GET /repos/{owner}/{repo}`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/issues`
  - `GET /repos/{owner}/{repo}/issues/events`
  - `GET /repos/{owner}/{repo}/issues/events/{event_id}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /search/issues`
  - `GET /teams/{team_id}/repos/{owner}/{repo}`
  - `GET /user/installations/{installation_id}/repositories`
  - `GET /user/issues`
  - `GET /user/migrations`
  - `GET /user/migrations/{migration_id}`
  - `GET /user/repos`
  - `GET /user/starred`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `GET /users/{username}/starred`
  - `PATCH /repos/{owner}/{repo}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `POST /app/installations/{installation_id}/access_tokens`
  - `POST /enterprises/{enterprise}/actions/runners/registration-token`
  - `POST /enterprises/{enterprise}/actions/runners/remove-token`
  - `POST /orgs/{org}/actions/runners/registration-token`
  - `POST /orgs/{org}/actions/runners/remove-token`
  - `POST /orgs/{org}/migrations`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /orgs/{org}/repos`
  - `POST /repos/{owner}/{repo}/actions/runners/registration-token`
  - `POST /repos/{owner}/{repo}/actions/runners/remove-token`
  - `POST /repos/{owner}/{repo}/forks`
  - `POST /repos/{owner}/{repo}/issues`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`
  - `POST /repos/{template_owner}/{template_repo}/generate`
  - `POST /user/codespaces/{codespace_name}/publish`
  - `POST /user/migrations`
  - `POST /user/repos`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`

  </details>

- **Remove `authorizations_url` from the API root (`GET /`)**
  The OAuth Authorization API has been [deprecated since 2020](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /`

  </details>

- **Deprecate support for the `beta` media type**
  This media type was officially deprecated in 2014. However, there are still remnants
  of its use that modify response payloads. The following response properties are
  deprecated as a result:

  - `emails` response as a flat array of strings instead of email objects
  - `pull_request` response property with `null` default values
  - `user` response property, replaced by `owner`
  - `master_branch` response property, replaced by `default_branch`

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`
  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /gists`
  - `GET /gists/public`
  - `GET /gists/starred`
  - `GET /installation/repositories`
  - `GET /issues`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /orgs/{org}/actions/permissions/repositories`
  - `GET /orgs/{org}/actions/permissions/self-hosted-runners/repositories`
  - `GET /orgs/{org}/events`
  - `GET /orgs/{org}/issues`
  - `GET /orgs/{org}/migrations`
  - `GET /orgs/{org}/migrations/{migration_id}`
  - `GET /repos/{owner}/{repo}`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/issues`
  - `GET /repos/{owner}/{repo}/issues/events`
  - `GET /repos/{owner}/{repo}/issues/events/{event_id}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /search/issues`
  - `GET /teams/{team_id}/repos/{owner}/{repo}`
  - `GET /user/installations/{installation_id}/repositories`
  - `GET /user/issues`
  - `GET /user/migrations`
  - `GET /user/migrations/{migration_id}`
  - `GET /user/repos`
  - `GET /user/starred`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/gists`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `GET /users/{username}/starred`
  - `PATCH /repos/{owner}/{repo}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `POST /app/installations/{installation_id}/access_tokens`
  - `POST /enterprises/{enterprise}/actions/runners/registration-token`
  - `POST /enterprises/{enterprise}/actions/runners/remove-token`
  - `POST /gists/{gist_id}/forks`
  - `POST /orgs/{org}/actions/runners/registration-token`
  - `POST /orgs/{org}/actions/runners/remove-token`
  - `POST /orgs/{org}/migrations`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /orgs/{org}/repos`
  - `POST /repos/{owner}/{repo}/actions/runners/registration-token`
  - `POST /repos/{owner}/{repo}/actions/runners/remove-token`
  - `POST /repos/{owner}/{repo}/forks`
  - `POST /repos/{owner}/{repo}/issues`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`
  - `POST /repos/{template_owner}/{template_repo}/generate`
  - `POST /user/codespaces/{codespace_name}/publish`
  - `POST /user/migrations`
  - `POST /user/repos`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`

  </details>

- **This changeset removes the underspecified fields `history` and `forks` from the base-gist object**
  These properties were unintentionally added when we converted JSON schemas to OpenAPI. The
  properties appear in resources such as "gist revisions" and "update gist" but should not
  be implemented in the base gist object.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /gists`
  - `GET /gists/public`
  - `GET /gists/starred`
  - `GET /gists/{gist_id}`
  - `GET /gists/{gist_id}/forks`
  - `GET /gists/{gist_id}/{sha}`
  - `GET /users/{username}/gists`
  - `PATCH /gists/{gist_id}`
  - `POST /gists`
  - `POST /gists/{gist_id}/forks`

  </details>

- **Change success status code from `204` to `202` for deleting an installation**
  The installation deletion is being moved to the background

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /app/installations/{installation_id}`

  </details>

- **Remove `secret_scanning_push_protection_custom_link_enabled` from the organization request and response**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /orgs/{org}`
  - `PATCH /orgs/{org}`

  </details>

- **Remove `javascript` and `typescript` values from the `languages` enum in code scanning default setup responses, in favor of `javascript-typescript`**
  JavaScript and TypeScript are analyzed together by CodeQL, so having separate enum values was misleading and inconsistent with how the analysis actually works. This breaking change removes the individual "javascript" and "typescript" values in favor of the combined "javascript-typescript" value that accurately represents the unified analysis.

  For more information, see "[Get a code scanning default setup configuration](https://docs.github.com/rest/code-scanning/code-scanning#get-a-code-scanning-default-setup-configuration)" in the REST API documentation and the related [`codeql-action` CHANGELOG](https://github.com/github/codeql-action/blob/main/CHANGELOG.md#2218---19-sep-2023).

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /repos/{owner}/{repo}/code-scanning/default-setup`

  </details>

- **Remove deprecated `has_downloads` property from Repository response**
  `has_downloads` has been deprecated for 10+ years

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`
  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /installation/repositories`
  - `GET /issues`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /notifications`
  - `GET /notifications/threads/{thread_id}`
  - `GET /orgs/{org}/actions/permissions/repositories`
  - `GET /orgs/{org}/actions/permissions/self-hosted-runners/repositories`
  - `GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`
  - `GET /orgs/{org}/actions/secrets/{secret_name}/repositories`
  - `GET /orgs/{org}/actions/variables/{name}/repositories`
  - `GET /orgs/{org}/codespaces`
  - `GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`
  - `GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`
  - `GET /orgs/{org}/docker/conflicts`
  - `GET /orgs/{org}/events`
  - `GET /orgs/{org}/issues`
  - `GET /orgs/{org}/members/{username}/codespaces`
  - `GET /orgs/{org}/migrations`
  - `GET /orgs/{org}/migrations/{migration_id}`
  - `GET /orgs/{org}/migrations/{migration_id}/repositories`
  - `GET /orgs/{org}/packages`
  - `GET /orgs/{org}/packages/{package_type}/{package_name}`
  - `GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories`
  - `GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories`
  - `GET /orgs/{org}/repos`
  - `GET /orgs/{org}/settings/immutable-releases/repositories`
  - `GET /orgs/{org}/teams/{team_slug}/repos`
  - `GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`
  - `GET /repos/{owner}/{repo}`
  - `GET /repos/{owner}/{repo}/actions/runs`
  - `GET /repos/{owner}/{repo}/actions/runs/{run_id}`
  - `GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`
  - `GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`
  - `GET /repos/{owner}/{repo}/check-suites/{check_suite_id}`
  - `GET /repos/{owner}/{repo}/codespaces`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/commits/{ref}/check-suites`
  - `GET /repos/{owner}/{repo}/commits/{ref}/status`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/forks`
  - `GET /repos/{owner}/{repo}/invitations`
  - `GET /repos/{owner}/{repo}/issues`
  - `GET /repos/{owner}/{repo}/issues/events`
  - `GET /repos/{owner}/{repo}/issues/events/{event_id}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
  - `GET /repos/{owner}/{repo}/notifications`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /repositories`
  - `GET /search/code`
  - `GET /search/commits`
  - `GET /search/issues`
  - `GET /teams/{team_id}/repos`
  - `GET /teams/{team_id}/repos/{owner}/{repo}`
  - `GET /user/codespaces`
  - `GET /user/codespaces/secrets/{secret_name}/repositories`
  - `GET /user/codespaces/{codespace_name}`
  - `GET /user/docker/conflicts`
  - `GET /user/installations/{installation_id}/repositories`
  - `GET /user/issues`
  - `GET /user/migrations`
  - `GET /user/migrations/{migration_id}`
  - `GET /user/migrations/{migration_id}/repositories`
  - `GET /user/packages`
  - `GET /user/packages/{package_type}/{package_name}`
  - `GET /user/repos`
  - `GET /user/repository_invitations`
  - `GET /user/starred`
  - `GET /user/subscriptions`
  - `GET /users/{username}/docker/conflicts`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/packages`
  - `GET /users/{username}/packages/{package_type}/{package_name}`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `GET /users/{username}/repos`
  - `GET /users/{username}/starred`
  - `GET /users/{username}/subscriptions`
  - `PATCH /repos/{owner}/{repo}`
  - `PATCH /repos/{owner}/{repo}/check-suites/preferences`
  - `PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `PATCH /user/codespaces/{codespace_name}`
  - `POST /app/installations/{installation_id}/access_tokens`
  - `POST /enterprises/{enterprise}/actions/runners/registration-token`
  - `POST /enterprises/{enterprise}/actions/runners/remove-token`
  - `POST /orgs/{org}/actions/runners/registration-token`
  - `POST /orgs/{org}/actions/runners/remove-token`
  - `POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`
  - `POST /orgs/{org}/migrations`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /orgs/{org}/repos`
  - `POST /repos/{owner}/{repo}/actions/runners/registration-token`
  - `POST /repos/{owner}/{repo}/actions/runners/remove-token`
  - `POST /repos/{owner}/{repo}/check-suites`
  - `POST /repos/{owner}/{repo}/codespaces`
  - `POST /repos/{owner}/{repo}/forks`
  - `POST /repos/{owner}/{repo}/issues`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`
  - `POST /repos/{owner}/{repo}/transfer`
  - `POST /repos/{template_owner}/{template_repo}/generate`
  - `POST /user/codespaces`
  - `POST /user/codespaces/{codespace_name}/publish`
  - `POST /user/codespaces/{codespace_name}/start`
  - `POST /user/codespaces/{codespace_name}/stop`
  - `POST /user/migrations`
  - `POST /user/repos`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`
  - `PUT /repos/{owner}/{repo}/collaborators/{username}`

  </details>

- **Change create repository response from `422` to `451` when blocked by trade controls**
  Repository creation requests where the creator or owner is subject to trade control regulations
  now return `451 Unavailable For Legal Reasons` instead of `422 Unprocessable Entity`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `POST /orgs/{org}/repos`
  - `POST /user/repos`

  </details>

- **Change delete organization response from `403` to `451` when blocked by trade controls**
  Organization deletion requests blocked by trade controls now return `451 Unavailable For Legal Reasons` instead of `403 Forbidden`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /orgs/{org}`

  </details>

- **Change remove organization member response from `403` to `451` when blocked by trade controls**
  Requests to remove a member from a trade-controlled organization now return `451 Unavailable For Legal Reasons` instead of `403 Forbidden`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /orgs/{org}/members/{username}`

  </details>

- **Change update organization membership response from `403` to `451` when blocked by trade controls**
  Membership update requests for trade-controlled organizations now return `451 Unavailable For Legal Reasons` instead of `403 Forbidden`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `PUT /orgs/{org}/memberships/{username}`

  </details>

- **Change accept repository invitation response from `403` to `451` when blocked by trade controls**
  Repository invitation acceptance blocked by trade controls now returns `451 Unavailable For Legal Reasons` instead of `403 Forbidden`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `PATCH /user/repository_invitations/{invitation_id}`

  </details>

- **Remove deprecated `hub_url` property from API root response**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /`

  </details>

- **Deprecate `cvss` property in favor of `cvss_severities` for advisory APIs**
  The `cvss_severities` property will supplant the existing `cvss` property and contain `cvss_v3` and `cvss_v4` properties if they exist on the advisory.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /advisories`
  - `GET /advisories/{ghsa_id}`
  - `GET /enterprises/{enterprise}/dependabot/alerts`
  - `GET /orgs/{org}/dependabot/alerts`
  - `GET /orgs/{org}/security-advisories`
  - `GET /repos/{owner}/{repo}/dependabot/alerts`
  - `GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`
  - `GET /repos/{owner}/{repo}/security-advisories`
  - `GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}`
  - `PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`
  - `PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}`
  - `POST /repos/{owner}/{repo}/security-advisories`
  - `POST /repos/{owner}/{repo}/security-advisories/reports`

  </details>

- **Remove repository detail fields from migration resource responses**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /orgs/{org}/migrations`
  - `GET /orgs/{org}/migrations/{migration_id}`
  - `GET /orgs/{org}/migrations/{migration_id}/repositories`
  - `GET /user/migrations`
  - `GET /user/migrations/{migration_id}`
  - `GET /user/migrations/{migration_id}/repositories`
  - `POST /orgs/{org}/migrations`
  - `POST /user/migrations`

  </details>

- **Remove deprecated `/hub` endpoint**
- **Remove `merge_commit_sha` field from pull request responses**
  The `merge_commit_sha` property is removed from pull request payloads across all endpoints that return pull request objects.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /orgs/{org}/events`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`

  </details>

- **Change workflow dispatch response from `204` to `200` with workflow run details**
  Removes the `return_run_details` parameter. The endpoint now always returns `200` with the workflow run details in the response body.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`

  </details>

- **Remove deprecated singular "assignee" field from Issue and Pull Request endpoints**
  The singular `assignee` field has been marked as "closing down" for years and
  duplicates information available in the `assignees` array. To migrate, update
  your integration to:

  - Use the `assignees` array parameter instead of the singular `assignee`
    parameter when creating or updating Issues.
  - Read assignee information from the `assignees` array instead of the singular
    `assignee` property in Issue and Pull Request responses.

  See https://docs.github.com/rest/issues/issues for updated documentation.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`
  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /issues`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /orgs/{org}/events`
  - `GET /orgs/{org}/issues`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/issues`
  - `GET /repos/{owner}/{repo}/issues/events`
  - `GET /repos/{owner}/{repo}/issues/events/{event_id}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /search/issues`
  - `GET /user/issues`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /repos/{owner}/{repo}/issues`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`

  </details>

- **Change `selected_repository_ids` parameter to only accept integers for Dependabot org secrets**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `PUT /orgs/{org}/dependabot/secrets/{secret_name}`

  </details>

- **Remove the `bundle` property from attestation list responses**
  The `bundle` field is removed from repo, org, and user attestation list and bulk-list responses. Use `bundle_url` to retrieve the attestation bundle.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /orgs/{org}/attestations/{subject_digest}`
  - `GET /repos/{owner}/{repo}/attestations/{subject_digest}`
  - `GET /users/{username}/attestations/{subject_digest}`
  - `POST /orgs/{org}/attestations/bulk-list`
  - `POST /users/{username}/attestations/bulk-list`

  </details>

{% endif %}
{% if query.apiVersion == nil or "2022-11-28" <= query.apiVersion %}
## Version 2022-11-28

Version `2022-11-28` is the first version of the GitHub Free, Pro & Team REST API after date-based versioning was introduced. This version does not include any breaking changes.

{% endif %}
{% endif %}

{% ifversion ghec %}
{% if query.apiVersion == nil or "2026-03-10" <= query.apiVersion %}
## Version 2026-03-10

- **Remove deprecated `rate` property from rate limit endpoint**
  The `rate` property has been deprecated since 2021 and duplicates information
  available in the `resources.core` property. To migrate, update your integration
  to read rate limit information from `resources.core` instead of `rate`.

  See https://docs.github.com/rest/rate-limit for updated documentation.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /rate_limit`

  </details>

- **Remove deprecated `permission` property from request when a team is created**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `POST /orgs/{org}/teams`

  </details>

- **Updates the "Get repository content" API, so that, when listing the contents of a directory, submodules have the `type` "submodule" instead of the `type` "file"**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /repos/{owner}/{repo}/contents/{path}`

  </details>

- **Change Content-Type of SARIF response**
  When trying to receive the SARIF upload by setting the `Accept` header to `application/sarif+json` the response `Content-Type` would incorrectly be set to `application/json+sarif`.
  This change corrects this so the response `Content-Type` in this case becomes `application/sarif+json`.

  For more information, see "[Get a code scanning analysis for a repository](https://docs.github.com/rest/code-scanning/code-scanning#get-a-code-scanning-analysis-for-a-repository)" in the REST API documentation.
- **Remove deprecated `use_squash_pr_title_as_default` property from repo settings endpoints**
  This property has been replaced by `squash_merge_commit_title`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`
  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /installation/repositories`
  - `GET /issues`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /orgs/{org}/actions/permissions/repositories`
  - `GET /orgs/{org}/actions/permissions/self-hosted-runners/repositories`
  - `GET /orgs/{org}/events`
  - `GET /orgs/{org}/issues`
  - `GET /orgs/{org}/migrations`
  - `GET /orgs/{org}/migrations/{migration_id}`
  - `GET /repos/{owner}/{repo}`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/issues`
  - `GET /repos/{owner}/{repo}/issues/events`
  - `GET /repos/{owner}/{repo}/issues/events/{event_id}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /search/issues`
  - `GET /teams/{team_id}/repos/{owner}/{repo}`
  - `GET /user/installations/{installation_id}/repositories`
  - `GET /user/issues`
  - `GET /user/migrations`
  - `GET /user/migrations/{migration_id}`
  - `GET /user/repos`
  - `GET /user/starred`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `GET /users/{username}/starred`
  - `PATCH /repos/{owner}/{repo}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `POST /app/installations/{installation_id}/access_tokens`
  - `POST /enterprises/{enterprise}/actions/runners/registration-token`
  - `POST /enterprises/{enterprise}/actions/runners/remove-token`
  - `POST /orgs/{org}/actions/runners/registration-token`
  - `POST /orgs/{org}/actions/runners/remove-token`
  - `POST /orgs/{org}/migrations`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /orgs/{org}/repos`
  - `POST /repos/{owner}/{repo}/actions/runners/registration-token`
  - `POST /repos/{owner}/{repo}/actions/runners/remove-token`
  - `POST /repos/{owner}/{repo}/forks`
  - `POST /repos/{owner}/{repo}/issues`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`
  - `POST /repos/{template_owner}/{template_repo}/generate`
  - `POST /user/codespaces/{codespace_name}/publish`
  - `POST /user/migrations`
  - `POST /user/repos`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`

  </details>

- **Remove `authorizations_url` from the API root (`GET /`)**
  The OAuth Authorization API has been [deprecated since 2020](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /`

  </details>

- **Deprecate support for the `beta` media type**
  This media type was officially deprecated in 2014. However, there are still remnants
  of its use that modify response payloads. The following response properties are
  deprecated as a result:

  - `emails` response as a flat array of strings instead of email objects
  - `pull_request` response property with `null` default values
  - `user` response property, replaced by `owner`
  - `master_branch` response property, replaced by `default_branch`

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`
  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /gists`
  - `GET /gists/public`
  - `GET /gists/starred`
  - `GET /installation/repositories`
  - `GET /issues`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /orgs/{org}/actions/permissions/repositories`
  - `GET /orgs/{org}/actions/permissions/self-hosted-runners/repositories`
  - `GET /orgs/{org}/events`
  - `GET /orgs/{org}/issues`
  - `GET /orgs/{org}/migrations`
  - `GET /orgs/{org}/migrations/{migration_id}`
  - `GET /repos/{owner}/{repo}`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/issues`
  - `GET /repos/{owner}/{repo}/issues/events`
  - `GET /repos/{owner}/{repo}/issues/events/{event_id}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /search/issues`
  - `GET /teams/{team_id}/repos/{owner}/{repo}`
  - `GET /user/installations/{installation_id}/repositories`
  - `GET /user/issues`
  - `GET /user/migrations`
  - `GET /user/migrations/{migration_id}`
  - `GET /user/repos`
  - `GET /user/starred`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/gists`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `GET /users/{username}/starred`
  - `PATCH /repos/{owner}/{repo}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `POST /app/installations/{installation_id}/access_tokens`
  - `POST /enterprises/{enterprise}/actions/runners/registration-token`
  - `POST /enterprises/{enterprise}/actions/runners/remove-token`
  - `POST /gists/{gist_id}/forks`
  - `POST /orgs/{org}/actions/runners/registration-token`
  - `POST /orgs/{org}/actions/runners/remove-token`
  - `POST /orgs/{org}/migrations`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /orgs/{org}/repos`
  - `POST /repos/{owner}/{repo}/actions/runners/registration-token`
  - `POST /repos/{owner}/{repo}/actions/runners/remove-token`
  - `POST /repos/{owner}/{repo}/forks`
  - `POST /repos/{owner}/{repo}/issues`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`
  - `POST /repos/{template_owner}/{template_repo}/generate`
  - `POST /user/codespaces/{codespace_name}/publish`
  - `POST /user/migrations`
  - `POST /user/repos`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`

  </details>

- **Change custom repository role endpoint paths to be more descriptive about the resource**
  Custom repository roles are managed by the organization, but scoped to repositories.
  This update changes the paths from `/organizations/{organization_id}/custom_roles` to
  `/orgs/{org}/custom-repository-roles` to be more descriptive about the resource.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /organizations/{organization_id}/custom_roles`

  </details>

- **This changeset removes the underspecified fields `history` and `forks` from the base-gist object**
  These properties were unintentionally added when we converted JSON schemas to OpenAPI. The
  properties appear in resources such as "gist revisions" and "update gist" but should not
  be implemented in the base gist object.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /gists`
  - `GET /gists/public`
  - `GET /gists/starred`
  - `GET /gists/{gist_id}`
  - `GET /gists/{gist_id}/forks`
  - `GET /gists/{gist_id}/{sha}`
  - `GET /users/{username}/gists`
  - `PATCH /gists/{gist_id}`
  - `POST /gists`
  - `POST /gists/{gist_id}/forks`

  </details>

- **Change success status code from `204` to `202` for deleting an installation**
  The installation deletion is being moved to the background

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /app/installations/{installation_id}`

  </details>

- **Remove `secret_scanning_push_protection_custom_link_enabled` from the organization request and response**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /orgs/{org}`
  - `PATCH /orgs/{org}`

  </details>

- **Remove `javascript` and `typescript` values from the `languages` enum in code scanning default setup responses, in favor of `javascript-typescript`**
  JavaScript and TypeScript are analyzed together by CodeQL, so having separate enum values was misleading and inconsistent with how the analysis actually works. This breaking change removes the individual "javascript" and "typescript" values in favor of the combined "javascript-typescript" value that accurately represents the unified analysis.

  For more information, see "[Get a code scanning default setup configuration](https://docs.github.com/rest/code-scanning/code-scanning#get-a-code-scanning-default-setup-configuration)" in the REST API documentation and the related [`codeql-action` CHANGELOG](https://github.com/github/codeql-action/blob/main/CHANGELOG.md#2218---19-sep-2023).

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /repos/{owner}/{repo}/code-scanning/default-setup`

  </details>

- **Remove deprecated `has_downloads` property from Repository response**
  `has_downloads` has been deprecated for 10+ years

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`
  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /installation/repositories`
  - `GET /issues`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /notifications`
  - `GET /notifications/threads/{thread_id}`
  - `GET /orgs/{org}/actions/permissions/repositories`
  - `GET /orgs/{org}/actions/permissions/self-hosted-runners/repositories`
  - `GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories`
  - `GET /orgs/{org}/actions/secrets/{secret_name}/repositories`
  - `GET /orgs/{org}/actions/variables/{name}/repositories`
  - `GET /orgs/{org}/codespaces`
  - `GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories`
  - `GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories`
  - `GET /orgs/{org}/docker/conflicts`
  - `GET /orgs/{org}/events`
  - `GET /orgs/{org}/issues`
  - `GET /orgs/{org}/members/{username}/codespaces`
  - `GET /orgs/{org}/migrations`
  - `GET /orgs/{org}/migrations/{migration_id}`
  - `GET /orgs/{org}/migrations/{migration_id}/repositories`
  - `GET /orgs/{org}/packages`
  - `GET /orgs/{org}/packages/{package_type}/{package_name}`
  - `GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories`
  - `GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories`
  - `GET /orgs/{org}/repos`
  - `GET /orgs/{org}/settings/immutable-releases/repositories`
  - `GET /orgs/{org}/teams/{team_slug}/repos`
  - `GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`
  - `GET /repos/{owner}/{repo}`
  - `GET /repos/{owner}/{repo}/actions/runs`
  - `GET /repos/{owner}/{repo}/actions/runs/{run_id}`
  - `GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`
  - `GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`
  - `GET /repos/{owner}/{repo}/check-suites/{check_suite_id}`
  - `GET /repos/{owner}/{repo}/codespaces`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/commits/{ref}/check-suites`
  - `GET /repos/{owner}/{repo}/commits/{ref}/status`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/forks`
  - `GET /repos/{owner}/{repo}/invitations`
  - `GET /repos/{owner}/{repo}/issues`
  - `GET /repos/{owner}/{repo}/issues/events`
  - `GET /repos/{owner}/{repo}/issues/events/{event_id}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
  - `GET /repos/{owner}/{repo}/notifications`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /repositories`
  - `GET /search/code`
  - `GET /search/commits`
  - `GET /search/issues`
  - `GET /teams/{team_id}/repos`
  - `GET /teams/{team_id}/repos/{owner}/{repo}`
  - `GET /user/codespaces`
  - `GET /user/codespaces/secrets/{secret_name}/repositories`
  - `GET /user/codespaces/{codespace_name}`
  - `GET /user/docker/conflicts`
  - `GET /user/installations/{installation_id}/repositories`
  - `GET /user/issues`
  - `GET /user/migrations`
  - `GET /user/migrations/{migration_id}`
  - `GET /user/migrations/{migration_id}/repositories`
  - `GET /user/packages`
  - `GET /user/packages/{package_type}/{package_name}`
  - `GET /user/repos`
  - `GET /user/repository_invitations`
  - `GET /user/starred`
  - `GET /user/subscriptions`
  - `GET /users/{username}/docker/conflicts`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/packages`
  - `GET /users/{username}/packages/{package_type}/{package_name}`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `GET /users/{username}/repos`
  - `GET /users/{username}/starred`
  - `GET /users/{username}/subscriptions`
  - `PATCH /repos/{owner}/{repo}`
  - `PATCH /repos/{owner}/{repo}/check-suites/preferences`
  - `PATCH /repos/{owner}/{repo}/invitations/{invitation_id}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `PATCH /user/codespaces/{codespace_name}`
  - `POST /app/installations/{installation_id}/access_tokens`
  - `POST /enterprises/{enterprise}/actions/runners/registration-token`
  - `POST /enterprises/{enterprise}/actions/runners/remove-token`
  - `POST /orgs/{org}/actions/runners/registration-token`
  - `POST /orgs/{org}/actions/runners/remove-token`
  - `POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`
  - `POST /orgs/{org}/migrations`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /orgs/{org}/repos`
  - `POST /repos/{owner}/{repo}/actions/runners/registration-token`
  - `POST /repos/{owner}/{repo}/actions/runners/remove-token`
  - `POST /repos/{owner}/{repo}/check-suites`
  - `POST /repos/{owner}/{repo}/codespaces`
  - `POST /repos/{owner}/{repo}/forks`
  - `POST /repos/{owner}/{repo}/issues`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks`
  - `POST /repos/{owner}/{repo}/transfer`
  - `POST /repos/{template_owner}/{template_repo}/generate`
  - `POST /user/codespaces`
  - `POST /user/codespaces/{codespace_name}/publish`
  - `POST /user/codespaces/{codespace_name}/start`
  - `POST /user/codespaces/{codespace_name}/stop`
  - `POST /user/migrations`
  - `POST /user/repos`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`
  - `PUT /repos/{owner}/{repo}/collaborators/{username}`

  </details>

- **Change create repository response from `422` to `451` when blocked by trade controls**
  Repository creation requests where the creator or owner is subject to trade control regulations
  now return `451 Unavailable For Legal Reasons` instead of `422 Unprocessable Entity`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `POST /orgs/{org}/repos`
  - `POST /user/repos`

  </details>

- **Change delete organization response from `403` to `451` when blocked by trade controls**
  Organization deletion requests blocked by trade controls now return `451 Unavailable For Legal Reasons` instead of `403 Forbidden`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /orgs/{org}`

  </details>

- **Change remove organization member response from `403` to `451` when blocked by trade controls**
  Requests to remove a member from a trade-controlled organization now return `451 Unavailable For Legal Reasons` instead of `403 Forbidden`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /orgs/{org}/members/{username}`

  </details>

- **Change update organization membership response from `403` to `451` when blocked by trade controls**
  Membership update requests for trade-controlled organizations now return `451 Unavailable For Legal Reasons` instead of `403 Forbidden`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `PUT /orgs/{org}/memberships/{username}`

  </details>

- **Change accept repository invitation response from `403` to `451` when blocked by trade controls**
  Repository invitation acceptance blocked by trade controls now returns `451 Unavailable For Legal Reasons` instead of `403 Forbidden`.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `PATCH /user/repository_invitations/{invitation_id}`

  </details>

- **Remove deprecated `hub_url` property from API root response**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /`

  </details>

- **Deprecate `cvss` property in favor of `cvss_severities` for advisory APIs**
  The `cvss_severities` property will supplant the existing `cvss` property and contain `cvss_v3` and `cvss_v4` properties if they exist on the advisory.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /advisories`
  - `GET /advisories/{ghsa_id}`
  - `GET /enterprises/{enterprise}/dependabot/alerts`
  - `GET /orgs/{org}/dependabot/alerts`
  - `GET /orgs/{org}/security-advisories`
  - `GET /repos/{owner}/{repo}/dependabot/alerts`
  - `GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`
  - `GET /repos/{owner}/{repo}/security-advisories`
  - `GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}`
  - `PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}`
  - `PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}`
  - `POST /repos/{owner}/{repo}/security-advisories`
  - `POST /repos/{owner}/{repo}/security-advisories/reports`

  </details>

- **Remove repository detail fields from migration resource responses**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /orgs/{org}/migrations`
  - `GET /orgs/{org}/migrations/{migration_id}`
  - `GET /orgs/{org}/migrations/{migration_id}/repositories`
  - `GET /user/migrations`
  - `GET /user/migrations/{migration_id}`
  - `GET /user/migrations/{migration_id}/repositories`
  - `POST /orgs/{org}/migrations`
  - `POST /user/migrations`

  </details>

- **Remove deprecated `/hub` endpoint**
- **Remove `merge_commit_sha` field from pull request responses**
  The `merge_commit_sha` property is removed from pull request payloads across all endpoints that return pull request objects.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /orgs/{org}/events`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`

  </details>

- **Change workflow dispatch response from `204` to `200` with workflow run details**
  Removes the `return_run_details` parameter. The endpoint now always returns `200` with the workflow run details in the response body.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`

  </details>

- **Remove deprecated singular "assignee" field from Issue and Pull Request endpoints**
  The singular `assignee` field has been marked as "closing down" for years and
  duplicates information available in the `assignees` array. To migrate, update
  your integration to:

  - Use the `assignees` array parameter instead of the singular `assignee`
    parameter when creating or updating Issues.
  - Read assignee information from the `assignees` array instead of the singular
    `assignee` property in Issue and Pull Request responses.

  See https://docs.github.com/rest/issues/issues for updated documentation.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}`
  - `DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue`
  - `DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `GET /events`
  - `GET /issues`
  - `GET /networks/{owner}/{repo}/events`
  - `GET /orgs/{org}/events`
  - `GET /orgs/{org}/issues`
  - `GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls`
  - `GET /repos/{owner}/{repo}/events`
  - `GET /repos/{owner}/{repo}/issues`
  - `GET /repos/{owner}/{repo}/issues/events`
  - `GET /repos/{owner}/{repo}/issues/events/{event_id}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocking`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/parent`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `GET /repos/{owner}/{repo}/issues/{issue_number}/timeline`
  - `GET /repos/{owner}/{repo}/pulls`
  - `GET /repos/{owner}/{repo}/pulls/{pull_number}`
  - `GET /search/issues`
  - `GET /user/issues`
  - `GET /users/{username}/events`
  - `GET /users/{username}/events/orgs/{org}`
  - `GET /users/{username}/events/public`
  - `GET /users/{username}/received_events`
  - `GET /users/{username}/received_events/public`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}`
  - `PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority`
  - `PATCH /repos/{owner}/{repo}/pulls/{pull_number}`
  - `POST /orgs/{org}/projectsV2/{project_number}/drafts`
  - `POST /orgs/{org}/projectsV2/{project_number}/items`
  - `POST /repos/{owner}/{repo}/issues`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/assignees`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by`
  - `POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues`
  - `POST /repos/{owner}/{repo}/pulls`
  - `POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
  - `POST /user/{user_id}/projectsV2/{project_number}/drafts`
  - `POST /users/{username}/projectsV2/{project_number}/items`

  </details>

- **Change `selected_repository_ids` parameter to only accept integers for Dependabot org secrets**

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `PUT /orgs/{org}/dependabot/secrets/{secret_name}`

  </details>

- **Remove the `bundle` property from attestation list responses**
  The `bundle` field is removed from repo, org, and user attestation list and bulk-list responses. Use `bundle_url` to retrieve the attestation bundle.

  <details>
  <summary><strong>Affected endpoints</strong></summary>

  - `GET /orgs/{org}/attestations/{subject_digest}`
  - `GET /repos/{owner}/{repo}/attestations/{subject_digest}`
  - `GET /users/{username}/attestations/{subject_digest}`
  - `POST /orgs/{org}/attestations/bulk-list`
  - `POST /users/{username}/attestations/bulk-list`

  </details>

{% endif %}
{% if query.apiVersion == nil or "2022-11-28" <= query.apiVersion %}
## Version 2022-11-28

Version `2022-11-28` is the first version of the GitHub Enterprise Cloud REST API after date-based versioning was introduced. This version does not include any breaking changes.

{% endif %}
{% endif %}
