For each of the available permissions, shown in the table below, you can assign one of the access levels: `read` (if applicable), `write`, or `none`. `write` includes `read`. If you specify the access for any of these permissions, all of those that are not specified are set to `none`.

Available permissions and details of what each allows an action to do:

| Permission | Allows an action using `GITHUB_TOKEN` to |
| --- | --- |
|  `actions` | Work with GitHub Actions. For example, `actions: write` permits an action to cancel a workflow run. For more information, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-actions)." |
| {% ifversion artifact-attestations %} |
|  `attestations` | Work with artifact attestations. For example, `attestations: write` permits an action to generate an artifact attestation for a build. For more information, see "[AUTOTITLE](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds)" |
| {% endif %} |
|  `checks` | Work with check runs and check suites. For example, `checks: write` permits an action to create a check run. For more information, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-checks)." |
|  `contents` | Work with the contents of the repository. For example, `contents: read` permits an action to list the commits, and `contents: write` allows the action to create a release. For more information, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-contents)." |
|  `deployments` | Work with deployments. For example, `deployments: write` permits an action to create a new deployment. For more information, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-deployments)." |
| {% ifversion discussions %} |
|  `discussions` | Work with GitHub Discussions. For example, `discussions: write` permits an action to close or delete a discussion. For more information, see "[AUTOTITLE](/graphql/guides/using-the-graphql-api-for-discussions)." |
| {% endif %} |
| {% ifversion fpt or ghec %} |
|  `id-token` | Fetch an OpenID Connect (OIDC) token. This requires `id-token: write`. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#updating-your-actions-for-oidc)" |
| {% endif %} |
|  `issues` | Work with issues. For example, `issues: write` permits an action to add a comment to an issue. For more information, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-issues)." |
|  `packages` | Work with GitHub Packages. For example, `packages: write` permits an action to upload and publish packages on GitHub Packages. For more information, see "[AUTOTITLE](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)." |
|  `pages` | Work with GitHub Pages. For example, `pages: write` permits an action to request a GitHub Pages build. For more information, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-pages)." |
|  `pull-requests` | Work with pull requests. For example, `pull-requests: write` permits an action to add a label to a pull request. For more information, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-pull-requests)." |
|  `repository-projects` | Work with GitHub projects (classic). For example, `repository-projects: write` permits an action to add a column to a project (classic). For more information, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-projects)." |
|  `security-events` | Work with GitHub code scanning and Dependabot alerts. For example, `security-events: read` permits an action to list the Dependabot alerts for the repository, and `security-events: write` allows an action to update the status of a code scanning alert. For more information, see "[Repository permissions for 'Code scanning alerts'](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-code-scanning-alerts)" and "[Repository permissions for 'Dependabot alerts'](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-dependabot-alerts)" in "Permissions required for GitHub Apps." |
| `statuses` | Work with commit statuses. For example, `statuses:read` permits an action to list the commit statuses for a given reference. For more information, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#repository-permissions-for-commit-statuses)." |
