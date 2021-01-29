---
title: Audited actions
intro: You can search the audit log for a wide variety of actions.
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
versions:
  enterprise-server: '*'
  github-ae: '*'
---
#### Authentication

Name                                 | Description
------------------------------------:| ----------------------------------------
`oauth_access.create`                | An [OAuth access token][] was [generated][generate token] for a user account.
`oauth_access.destroy`               | An [OAuth access token][] was deleted from a user account.
`oauth_application.destroy`          | An [OAuth application][] was deleted from a user or organization account.
`oauth_application.reset_secret`     | An [OAuth application][]'s secret key was reset.
`oauth_application.transfer`         | An [OAuth application][] was transferred from one user or organization account to another.
`public_key.create`                  | An SSH key was [added][add key] to a user account or a [deploy key][] was added to a repository.
`public_key.delete`                  | An SSH key was removed from a user account or a [deploy key][] was removed from a repository.
`public_key.update`                  | A user account's SSH key or a repository's [deploy key][] was updated.{% if enterpriseServerVersions contains currentVersion %}
`two_factor_authentication.enabled`  | [Two-factor authentication][2fa] was enabled for a user account.
`two_factor_authentication.disabled` | [Two-factor authentication][2fa] was disabled for a user account.{% endif %}

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [deploy key]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [OAuth access token]: /developers/apps/authorizing-oauth-apps
  [OAuth application]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication

#### Hooks

Name                              | Description
---------------------------------:| -------------------------------------------
`hook.create`                     | A new hook was added to a repository.
`hook.config_changed`             | A hook's configuration was changed.
`hook.destroy`                    | A hook was deleted.
`hook.events_changed`             | A hook's configured events were changed.

#### Enterprise configuration settings

Name                                            | Description
-----------------------------------------------:| -------------------------------------------
`business.update_member_repository_creation_permission` | A site admin restricts repository creation in organizations in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."
`business.clear_members_can_create_repos` | A site admin clears a restriction on repository creation in organizations in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% if enterpriseServerVersions contains currentVersion %}
`enterprise.config.lock_anonymous_git_access`   | A site admin locks anonymous Git read access to prevent repository admins from changing existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."
`enterprise.config.unlock_anonymous_git_access` | A site admin unlocks anonymous Git read access to allow repository admins to change existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."{% endif %}

#### Issues and pull requests

Name                                 | Description
------------------------------------:| -----------------------------------------------------------
`issue.update`                       | An issue's body text (initial comment) changed.
`issue_comment.update`               | A comment on an issue (other than the initial one) changed.
`pull_request_review_comment.delete` | A comment on a pull request was deleted.
`issue.destroy`                      | An issue was deleted from the repository. For more information, see "[Deleting an issue](/github/managing-your-work-on-github/deleting-an-issue)."

#### Organizations

Name               | Description
------------------:| ----------------------------------------------------------
`org.async_delete` | A user initiated a background job to delete an organization.
`org.delete`       | An organization was deleted by a user-initiated background job.{% if currentVersion != "github-ae@latest" %}
`org.transform`    | A user account was converted into an organization. For more information, see "[Converting a user into an organization](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)."{% endif %}

#### Protected branches

Name                       | Description
--------------------------:| ----------------------------------------------------------
`protected_branch.create ` | Branch protection is enabled on a branch.
`protected_branch.destroy` | Branch protection is disabled on a branch.
`protected_branch.update_admin_enforced `            | Branch protection is enforced for repository administrators.
`protected_branch.update_require_code_owner_review ` | Enforcement of required code owner review is updated on a branch.
`protected_branch.dismiss_stale_reviews `   | Enforcement of dismissing stale pull requests is updated on a branch.
`protected_branch.update_signature_requirement_enforcement_level `    | Enforcement of required commit signing is updated on a branch.
`protected_branch.update_pull_request_reviews_enforcement_level `     | Enforcement of required pull request reviews is updated on a branch.
`protected_branch.update_required_status_checks_enforcement_level `   | Enforcement of required status checks is updated on a branch.
`protected_branch.rejected_ref_update `     | A branch update attempt is rejected.
`protected_branch.policy_override `         | A branch protection requirement is overridden by a repository administrator.

#### Repositories

Name                  | Description
---------------------:| -------------------------------------------------------
`repo.access`         | The visibility of a repository changed to private{% if enterpriseServerVersions contains currentVersion %}, public,{% endif %} or internal.
`repo.archived`       | A repository was archived. For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."
`repo.add_member`     | A collaborator was added to a repository.
`repo.config`         | A site admin blocked force pushes. For more information, see [Blocking force pushes to a repository](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/) to a repository.
`repo.create`         | A repository was created.
`repo.destroy`        | A repository was deleted.
`repo.remove_member`  | A collaborator was removed from a repository.
`repo.rename`         | A repository was renamed.
`repo.transfer`       | A user accepted a request to receive a transferred repository.
`repo.transfer_start` | A user sent a request to transfer a repository to another user or organization.
`repo.unarchived`     | A repository was unarchived. For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."{% if enterpriseServerVersions contains currentVersion %}
`repo.config.disable_anonymous_git_access`| Anonymous Git read access is disabled for a repository. For more information, see "[Enabling anonymous Git read access for a repository](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)."
`repo.config.enable_anonymous_git_access` | Anonymous Git read access is enabled for a repository. For more information, see "[Enabling anonymous Git read access for a repository](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)."
`repo.config.lock_anonymous_git_access` | A repository's anonymous Git read access setting is locked, preventing repository administrators from changing (enabling or disabling) this setting. For more information, see "[Preventing users from changing anonymous Git read access](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."
`repo.config.unlock_anonymous_git_access` | A repository's anonymous Git read access setting is unlocked, allowing repository administrators to change (enable or disable) this setting. For more information, see "[Preventing users from changing anonymous Git read access](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."{% endif %}

#### Site admin tools

Name                          | Description
-----------------------------:| -----------------------------------------------
`staff.disable_repo`          | A site admin disabled access to a repository and all of its forks.
`staff.enable_repo`           | A site admin re-enabled access to a repository and all of its forks.
`staff.fake_login`            | A site admin signed into {% data variables.product.product_name %} as another user.
`staff.repo_unlock`           | A site admin unlocked (temporarily gained full access to) one of a user's private repositories.
`staff.unlock`                | A site admin unlocked (temporarily gained full access to) all of a user's private repositories.

#### Teams

Name                              | Description
---------------------------------:| -------------------------------------------
`team.create`                     | A user account or repository was added to a team.
`team.delete`                     | A user account or repository was removed from a team.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
`team.demote_maintainer`          | A user was demoted from a team maintainer to a team member.{% endif %}
`team.destroy`                    | A team was deleted.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
`team.promote_maintainer`         | A user was promoted from a team member to a team maintainer.{% endif %}


#### Users

Name                              | Description
---------------------------------:| -------------------------------------------
`user.add_email`                  | An email address was added to a user account.
`user.async_delete`               | An asynchronous job was started to destroy a user account, eventually triggering `user.delete`.{% if enterpriseServerVersions contains currentVersion %}
`user.change_password`            | A user changed his or her password.{% endif %}
`user.create`                     | A new user account was created.
`user.delete`                     | A user account was destroyed by an asynchronous job.
`user.demote`                     | A site admin was demoted to an ordinary user account.
`user.destroy`                    | A user deleted his or her account, triggering `user.async_delete`.{% if enterpriseServerVersions contains currentVersion %}
`user.failed_login`               | A user tried to sign in with an incorrect username, password, or two-factor authentication code.
`user.forgot_password`            | A user requested a password reset via the sign-in page.{% endif %}
`user.login`                      | A user signed in.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
`user.mandatory_message_viewed`   | A user views a mandatory message (see "[Customizing user messages](/admin/user-management/customizing-user-messages-for-your-enterprise)" for details) | {% endif %}
`user.promote`                    | An ordinary user account was promoted to a site admin.
`user.remove_email`               | An email address was removed from a user account.
`user.rename`                     | A username was changed.
`user.suspend`                    | A user account was suspended by a site admin.{% if enterpriseServerVersions contains currentVersion %}
`user.two_factor_requested`       | A user was prompted for a two-factor authentication code.{% endif %}
`user.unsuspend`                  | A user account was unsuspended by a site admin.
