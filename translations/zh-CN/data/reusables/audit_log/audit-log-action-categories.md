| Category name | Description
|------------------|-------------------
{%- ifversion fpt or ghec %}
| `account` | Contains activities related to an organization account.
| `advisory_credit`   | Contains activities related to crediting a contributor for a security advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."
{%- endif %}
| `artifact` | Contains activities related to {% data variables.product.prodname_actions %} workflow run artifacts.
{%- ifversion ghec %}
| `audit_log_streaming`  | Contains activities related to streaming audit logs for organizations in an enterprise account.
{%- endif %}
{%- ifversion fpt or ghec %}
| `billing` | Contains activities related to an organization's billing.
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `business`  | Contains activities related to business settings for an enterprise.
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `business`  | Contains activities related to business settings for an enterprise.
{%- endif %}
{%- ifversion secret-scanning-audit-log-custom-patterns %}
| `business_secret_scanning_custom_pattern` | Contains activities related to custom patterns for secret scanning in an enterprise.
{%- endif %}
| `checks`   | Contains activities related to check suites and runs.
{%- ifversion fpt or ghec %}
| `codespaces` | Contains activities related to an organization's codespaces.
{%- endif %}
| `commit_comment` | Contains activities related to updating or deleting commit comments.
{%- ifversion ghes %}
| `config_entry` |  Contains activities related to configuration settings. These events are only visible in the site admin audit log.
{%- endif %}
{%- ifversion fpt or ghec or ghes > 3.2 or ghae %} |
| `dependabot_alerts`  | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_alerts %} in existing repositories. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
| `dependabot_alerts_new_repos`   | Contains organization-level configuration activities for  {% data variables.product.prodname_dependabot_alerts %} in new repositories created in the organization.
| `dependabot_repository_access` | Contains activities related to which private repositories in an organization {% data variables.product.prodname_dependabot %} is allowed to access.
{%- endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
| `dependabot_security_updates`   | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} in existing repositories. For more information, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."
| `dependabot_security_updates_new_repos` | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} for new repositories created in the organization.
{%- endif %}
| `dependency_graph` | Contains organization-level configuration activities for dependency graphs for repositories. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
| `dependency_graph_new_repos`  | Contains organization-level configuration activities for new repositories created in the organization.
{%- ifversion fpt or ghec %}
| `discussion` | Contains activities related to team discussions.
| `discussion_comment` | Contains activities related to comments posted in discussions on a team page.
| `discussion_post`   | Contains activities related to discussions posted to a team page.
| `discussion_post_reply`   | Contains activities related to replies to discussions posted to a team page.
{%- endif %}
{%- ifversion ghec or ghes %}
| `dotcom_connection` | Contains activities related to {% data variables.product.prodname_github_connect %}.
| `enterprise` | Contains activities related to enterprise settings.
{%- endif %}
{%- ifversion ghec %}
| `enterprise_domain` | Contains activities related to verified enterprise domains.
| `enterprise_installation` | Contains activities related to {% data variables.product.prodname_github_app %}s associated with an {% data variables.product.prodname_github_connect %} enterprise connection.
{%- endif %}
{%- ifversion fpt or ghec %}
| `environment` | Contains activities related to {% data variables.product.prodname_actions %} environments.
{%- endif %}
{%- ifversion ghae %}
| `external_group` | Contains activities related to Okta groups.
| `external_identity` | Contains activities related to a user in an Okta group.
{%- endif %}
| `gist` | Contains activities related to Gists.
| `git` | Contains activities related to Git events.
| `hook` | Contains activities related to webhooks.
| `integration` | Contains activities related to integrations in an account.
| `integration_installation` | Contains activities related to integrations installed in an account.
| `integration_installation_request`  | Contains activities related to organization member requests for owners to approve integrations for use in the organization.
{%- ifversion ghec or ghae %}
| `ip_allow_list`   | Contains activities related to enabling or disabling the IP allow list for an organization.
| `ip_allow_list_entry`   | Contains activities related to the creation, deletion, and editing of an IP allow list entry for an organization.
{%- endif %}
| `issue`  | Contains activities related to pinning, transferring, or deleting an issue in a repository.
| `issue_comment` | Contains activities related to pinning, transferring, or deleting issue comments.
| `issues` | Contains activities related to enabling or disabling issue creation for an organization.
{%- ifversion fpt or ghec %}
| `marketplace_agreement_signature` | Contains activities related to signing the {% data variables.product.prodname_marketplace %} Developer Agreement.
| `marketplace_listing` | Contains activities related to listing apps in {% data variables.product.prodname_marketplace %}.
{%- endif %}
| `members_can_create_pages`   | Contains activities related to managing the publication of {% data variables.product.prodname_pages %} sites for repositories in the organization. For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."
| `members_can_create_private_pages` | Contains activities related to managing the publication of private {% data variables.product.prodname_pages %} sites for repositories in the organization.
| `members_can_create_public_pages` | Contains activities related to managing the publication of public {% data variables.product.prodname_pages %} sites for repositories in the organization.
{%- ifversion ghec or ghes or ghae %}
| `members_can_delete_repos` | Contains activities related to enabling or disabling repository creation for an organization.
{%- endif %}
{%- ifversion fpt or ghec %}
| `members_can_view_dependency_insights` | Contains organization-level configuration activities allowing organization members to view dependency insights.
| `migration` | Contains activities related to transferring data from a *source* location (such as a {% data variables.product.prodname_dotcom_the_website %} organization or a {% data variables.product.prodname_ghe_server %} instance) to a *target* {% data variables.product.prodname_ghe_server %} instance.
{%- endif %}
| `oauth_access` | Contains activities related to OAuth access tokens.
| `oauth_application` | Contains activities related to OAuth Apps.
{%- ifversion fpt or ghec %}
| `oauth_authorization` | Contains activities related to authorizing OAuth Apps.
{%- endif %}
| `org`   | Contains activities related to organization membership.
{%- ifversion ghec or ghes or ghae %}
| `org_credential_authorization` | Contains activities related to authorizing credentials for use with SAML single sign-on.
{%- endif %}
{%- ifversion secret-scanning-audit-log-custom-patterns %}
| `org_secret_scanning_custom_pattern` | Contains activities related to custom patterns for secret scanning in an organization. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."
| `org.secret_scanning_push_protection` | Contains activities related to secret scanning custom patterns in an organization. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
{%- endif %}
| `organization_default_label` | Contains activities related to default labels for repositories in an organization.
{%- ifversion fpt or ghec or ghes %}
| `organization_domain` | Contains activities related to verified organization domains.
| `organization_projects_change` | Contains activities related to organization-wide project boards in an enterprise.
{%- endif %}
{%- ifversion fpt or ghec %}
| `pages_protected_domain` | Contains activities related to verified custom domains for {% data variables.product.prodname_pages %}.
| `payment_method`  | Contains activities related to how an organization pays for {% data variables.product.prodname_dotcom %}.
| `prebuild_configuration` | Contains activities related to prebuild configurations for {% data variables.product.prodname_github_codespaces %}.
{%- endif %}
{%- ifversion ghes %}
| `pre_receive_environment` | Contains activities related to pre-receive hook environments.
| `pre_receive_hook` | Contains activities related to pre-receive hooks.
{%- endif %}
{%- ifversion ghes %}
| `private_instance_encryption` | Contains activities related to enabling private mode for an enterprise.
{%- endif %}
| `private_repository_forking` | Contains activities related to allowing forks of private and internal repositories, for a repository, organization or enterprise.
{%- ifversion fpt or ghec %}
| `profile_picture`   | Contains activities related to an organization's profile picture.
{%- endif %}
| `project` | Contains activities related to project boards.
| `project_field` | Contains activities related to field creation and deletion in a project board.
| `project_view` | Contains activities related to view creation and deletion in a project board.
| `protected_branch` | Contains activities related to protected branches.
| `public_key` | Contains activities related to SSH keys and deploy keys.
| `pull_request` | Contains activities related to pull requests.
| `pull_request_review` | Contains activities related to pull request reviews.
| `pull_request_review_comment` | Contains activities related to pull request review comments.
| `repo` | Contains activities related to the repositories owned by an organization.
{%- ifversion fpt or ghec %}
| `repository_advisory` | Contains repository-level activities related to security advisories in the {% data variables.product.prodname_advisory_database %}.  For more information, see "[About {% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."
| `repository_content_analysis`   | Contains activities related to [enabling or disabling data use for a private repository](/articles/about-github-s-use-of-your-data).
| `repository_dependency_graph`   | Contains repository-level activities related to enabling or disabling the dependency graph for a {% ifversion fpt or ghec %}private {% endif %}repository. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{%- endif %}
| `repository_image` | Contains activities related to images for a repository.
| `repository_invitation` | Contains activities related to invitations to join a repository.
| `repository_projects_change` | Contains activities related to enabling projects for a repository or for all repositories in an organization.
{%- ifversion ghec or ghes or ghae %}
| `repository_secret_scanning`  | Contains repository-level activities related to secret scanning. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
{%- endif %}
{%- ifversion secret-scanning-audit-log-custom-patterns %}
| `repository_secret_scanning_custom_pattern` | Contains activities related to secret scanning custom patterns in a repository. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)." {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}
| `repository_secret_scanning_push_protection` | Contains activities related to secret scanning custom patterns in a repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
{%- endif %}
{%- ifversion fpt or ghec %}
| `repository_visibility_change` | Contains activities related to allowing organization members to change repository visibilities for the organization.
{%- endif %}
| `repository_vulnerability_alert`   | Contains activities related to [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
{%- ifversion fpt or ghec %}
| `repository_vulnerability_alerts` | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot_alerts %}.
| `required_status_check` | Contains activities related to required status checks for protected branches.
{%- endif %}
{%- ifversion ghec or ghes %}
| `restrict_notification_delivery` | Contains activities related to the restriction of email notifications to approved or verified domains for an enterprise.
{%- endif %}
{%- ifversion custom-repository-roles %}
| `role` | Contains activities related to [custom repository roles](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `secret_scanning`   | Contains organization-level configuration activities for secret scanning in existing repositories. For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."
| `secret_scanning_new_repos` | Contains organization-level configuration activities for secret scanning for new repositories created in the organization.
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `security_key` | Contains activities related to security keys registration and removal.
{%- endif %}
{%- ifversion fpt or ghec %}
| `sponsors`  | Contains events related to sponsor buttons (see "[Displaying a sponsor button in your repository](/articles/displaying-a-sponsor-button-in-your-repository)").
{%- endif %}
{%- ifversion ghec or ghes or ghae %}
| `ssh_certificate_authority` | Contains activities related to a SSH certificate authority in an organization or enterprise.
| `ssh_certificate_requirement` | Contains activities related to requiring members use SSH certificates to access organization resources.
{%- endif %}
| `staff` | Contains activities related to a site admin performing an action.
| `team` | Contains activities related to teams in an organization.
| `team_discussions` | Contains activities related to managing team discussions for an organization.
{%- ifversion ghec %}
| `team_sync_tenant` | Contains activities related to team synchronization with an IdP for an enterprise or organization.
{%- endif %}
{%- ifversion fpt or ghes %}
| `two_factor_authentication` | Contains activities related to two-factor authentication.
{%- endif %}
| `user` | Contains activities related to users in an enterprise or organization.
{%- ifversion ghec or ghes %}
| `user_license` | Contains activities related to a user occupying a licensed seat in, and being a member of, an enterprise.
{%- endif %}
| `workflows`   | Contains activities related to {% data variables.product.prodname_actions %} workflows.
