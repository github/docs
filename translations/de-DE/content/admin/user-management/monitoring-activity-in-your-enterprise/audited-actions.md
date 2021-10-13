---
title: Überwachte Aktionen
intro: Sie können das Auditprotokoll auf eine Vielzahl von Aktionen durchsuchen.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Security
---

## Authentifizierung

| Aktion                               | Beschreibung                                                                                                                              |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `oauth_access.create`                | Ein [OAuth-Zugriffstoken][] wurde für ein Benutzerkonto [generiert][generate token].                                                      |
| `oauth_access.destroy`               | Ein [OAuth-Zugriffstoken][] wurde aus einem Benutzerkonto gelöscht.                                                                       |
| `oauth_application.destroy`          | Eine [OAuth-Anwendung][] wurde aus einem Benutzer- oder Organisationskonto gelöscht.                                                      |
| `oauth_application.reset_secret`     | Der geheime Schlüssel einer [OAuth-Anwendung][] wurde zurückgesetzt.                                                                      |
| `oauth_application.transfer`         | Eine [OAuth-Anwendung][] wurde von einem Benutzer- oder Organisationskonto auf ein anderes übertragen.                                    |
| `public_key.create`                  | Einem Benutzerkonto wurde ein SSH-Schlüssel [hinzugefügt][add key], oder einem Repository wurde ein [Deployment-Schlüssel][] hinzugefügt. |
| `public_key.delete`                  | Ein SSH-Schlüssel wurde aus einem Benutzerkonto entfernt, oder ein [Deployment-Schlüssel][] wurde aus einem Repository entfernt.          |
| `public_key.update`                  | A user account's SSH key or a repository's [deploy key][] was updated.{% ifversion ghes %}
| `two_factor_authentication.enabled`  | Die [Zwei-Faktor-Authentifizierung][2fa] wurde für ein Benutzerkonto aktiviert.                                                           |
| `two_factor_authentication.disabled` | [Two-factor authentication][2fa] was disabled for a user account.{% endif %}

{% ifversion ghes %}
## {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

## Hooks

| Aktion                | Beschreibung                                               |
| --------------------- | ---------------------------------------------------------- |
| `hook.create`         | Einem Repository wurde ein neuer Hook hinzugefügt.         |
| `hook.config_changed` | Die Konfiguration eines Hooks wurde geändert.              |
| `hook.destroy`        | Ein Hook wurde gelöscht.                                   |
| `hook.events_changed` | Die konfigurierten Ereignisse eines Hooks wurden geändert. |

## Enterprise configuration settings

| Aktion                                                  | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion ghes > 3.0 or ghae-next %}
| `business.advanced_security_policy_update`              | A site admin creates, updates, or removes a policy for {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)."{% endif %}
| `business.clear_members_can_create_repos`               | A site admin clears a restriction on repository creation in organizations in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% ifversion ghes > 3.1 %}
| `business.referrer_override_enable`                     | A site admin enables the referrer policy override. For more information, see "[Configuring the referrer policy for your enterprise](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)."                                                                                                                                                  |
| `business.referrer_override_disable`                    | A site admin disables the referrer policy override. For more information, see "[Configuring the referrer policy for your enterprise](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)."{% endif %}
| `business.update_member_repository_creation_permission` | A site admin restricts repository creation in organizations in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% ifversion ghes %}
| `enterprise.config.lock_anonymous_git_access`           | A site admin locks anonymous Git read access to prevent repository admins from changing existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."        |
| `enterprise.config.unlock_anonymous_git_access`         | A site admin unlocks anonymous Git read access to allow repository admins to change existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."{% endif %}

{% ifversion ghae %}

## IP allow lists

|                                       Name | Beschreibung                                                                                     |
| ------------------------------------------:| ------------------------------------------------------------------------------------------------ |
|               `ip_allow_list_entry.create` | An IP address was added to an IP allow list.                                                     |
|               `ip_allow_list_entry.update` | An IP address or its description was changed.                                                    |
|              `ip_allow_list_entry.destroy` | An IP address was deleted from an IP allow list.                                                 |
|                     `ip_allow_list.enable` | An IP allow list was enabled.                                                                    |
|  `ip_allow_list.enable_for_installed_apps` | An IP allow list was enabled for installed {% data variables.product.prodname_github_apps %}.  |
|                    `ip_allow_list.disable` | An IP allow list was disabled.                                                                   |
| `ip_allow_list.disable_for_installed_apps` | An IP allow list was disabled for installed {% data variables.product.prodname_github_apps %}. |

{% endif %}

## Issues

| Aktion                 | Beschreibung                                                                                                                                                   |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `issue.update`         | Der Text eines Issues (erster Kommentar) wurde geändert.                                                                                                       |
| `issue_comment.update` | Ein Kommentar zu einem Issue (nicht der ursprüngliche) wurde geändert.                                                                                         |
| `issue.destroy`        | Ein Issue wurde aus dem Repository gelöscht. Weitere Informationen finden Sie unter „[Issue löschen](/github/managing-your-work-on-github/deleting-an-issue)“. |


## Organisationen

| Aktion             | Beschreibung                                                                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.async_delete` | Ein Benutzer hat einen Hintergrundauftrag zum Löschen einer Organisation initiiert.                                                                                                                                                         |
| `org.delete`       | An organization was deleted by a user-initiated background job.{% ifversion not ghae %}
| `org.transform`    | Ein Benutzerkonto wurde in eine Organisation umgewandelt. For more information, see "[Converting a user into an organization](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)."{% endif %}

## Pull Requests

| Action | Description | | :- | :- |{% ifversion ghes > 3.1 or ghae-next %} | `pull_request.create` | A pull request was created. Weitere Informationen finden Sie unter „[Einen Pull Request erstellen](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)“: | | `pull_request.close` | A pull request was closed without being merged. For more information, see "[Closing a pull request](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)." | | `pull_request.reopen` | A pull request was reopened after previously being closed. | | `pull_request.merge` | A pull request was merged. Weitere Informationen findest Du unter „[Einen Pull Request zusammenführen](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).“ | | `pull_request.indirect_merge` | A pull request was considered merged because the pull request's commits were merged into the target branch. | | `pull_request.ready_for_review` | A pull request was marked as ready for review. Weitere Informationen findest Du unter „[Den Zustand eines Pull Requests ändern](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review).“ | | `pull_request.converted_to_draft` | A pull request was converted to a draft. Weitere Informationen findest Du unter „[Den Zustand eines Pull Requests ändern](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft).“ | | `pull_request.create_review_request` | A review was requested on a pull request. For more information, see "[About pull request reviews](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)." | | `pull_request.remove_review_request` | A review request was removed from a pull request. For more information, see "[About pull request reviews](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)." | | `pull_request_review.submit` | A review was submitted for a pull request. For more information, see "[About pull request reviews](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)." | | `pull_request_review.dismiss` | A review on a pull request was dismissed. Weitere Informationen findest Du unter „[Einen Pull-Request-Review ablehnen](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).“ | | `pull_request_review.delete` | A review on a pull request was deleted. | | `pull_request_review_comment.create` | A review comment was added to a pull request. For more information, see "[About pull request reviews](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)." | | `pull_request_review_comment.update` | A review comment on a pull request was changed. |{% endif %} | `pull_request_review_comment.delete` | A review comment on a pull request was deleted. |

## geschützte Branches

| Aktion                                                             | Beschreibung                                                                               |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `protected_branch.create`                                          | Der Branch-Schutz ist auf einem Branch aktiviert.                                          |
| `protected_branch.destroy`                                         | Der Branch-Schutz ist auf einem Branch deaktiviert.                                        |
| `protected_branch.update_admin_enforced`                           | Der Branch-Schutz wird für Repository-Administratoren erzwungen.                           |
| `protected_branch.update_require_code_owner_review`                | Enforcement of required code owner review is updated on a branch.                          |
| `protected_branch.dismiss_stale_reviews`                           | Die Erzwingung des Verwerfens veralteter Pull Requests wird für einen Branch aktualisiert. |
| `protected_branch.update_signature_requirement_enforcement_level`  | Die Erzwingung der obligatorischen Commit-Signatur wird für einen Branch aktualisiert.     |
| `protected_branch.update_pull_request_reviews_enforcement_level`   | Die Erzwingung der erforderlichen Pull-Request-Reviews wird für einen Branch aktualisiert. |
| `protected_branch.update_required_status_checks_enforcement_level` | Die Erzwingung der erforderlichen Statuschecks für einen Branch wird aktualisiert.         |
| `protected_branch.rejected_ref_update`                             | Ein Branch-Aktualisierungsversuch wird abgelehnt.                                          |
| `protected_branch.policy_override`                                 | Eine Branch-Schutzanforderung wird durch einen Repository-Administrator überschrieben.     |

## Repositorys

| Aktion                                     | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo.access`                              | The visibility of a repository changed to private{% ifversion ghes %}, public,{% endif %} or internal.                                                                                                                                                                                                                                                                                                                                             |
| `repo.archived`                            | Ein Repository wurde archiviert. For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."                                                                                                                                                                                                                             |
| `repo.add_member`                          | Einem Repository wurde ein Mitarbeiter hinzugefügt.                                                                                                                                                                                                                                                                                                                                                                                                |
| `repo.config`                              | Ein Websiteadministrator hat erzwungene Push-Vorgänge blockiert. Weitere Informationen finden Sie unter „[Erzwungene Push-Vorgänge an ein Repository blockieren](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)“.                                                                                                                                                                        |
| `repo.create`                              | Ein Repository wurde erstellt.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `repo.destroy`                             | Ein Repository wurde gelöscht.                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `repo.remove_member`                       | Ein Mitarbeiter wurde aus einem Repository entfernt.                                                                                                                                                                                                                                                                                                                                                                                               |
| `repo.rename`                              | Ein Repository wurde umbenannt.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `repo.transfer`                            | Ein Benutzer hat eine Anfrage akzeptiert, ein übertragenes Repository zu empfangen.                                                                                                                                                                                                                                                                                                                                                                |
| `repo.transfer_start`                      | Ein Benutzer hat eine Anfrage gesendet, ein Repository an einen anderen Benutzer oder an eine andere Organisation zu übertragen.                                                                                                                                                                                                                                                                                                                   |
| `repo.unarchived`                          | Die Archivierung eines Repositorys wurde aufgehoben. For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."{% ifversion ghes %}
| `repo.config.disable_anonymous_git_access` | Anonymous Git read access is disabled for a repository. Weitere Informationen finden Sie unter „[Anonymen Git-Lesezugriff für ein Repository aktivieren](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)“.                                                                                                                                                                                     |
| `repo.config.enable_anonymous_git_access`  | Anonymous Git read access is enabled for a repository. Weitere Informationen finden Sie unter „[Anonymen Git-Lesezugriff für ein Repository aktivieren](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)“.                                                                                                                                                                                      |
| `repo.config.lock_anonymous_git_access`    | Die Einstellung für den anonymen Git-Lesezugriff eines Repositorys ist gesperrt, wodurch Repository-Administratoren daran gehindert werden, diese Einstellung zu ändern (zu aktivieren oder zu deaktivieren). Weitere Informationen finden Sie unter „[Änderung des anonymen Git-Lesezugriffs durch Benutzer verhindern](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)“. |
| `repo.config.unlock_anonymous_git_access`  | Die Einstellung für den anonymen Git-Lesezugriff ist entsperrt, wodurch Repository-Administratoren diese Einstellung ändern (aktivieren oder deaktivieren) können. For more information, see "[Preventing users from changing anonymous Git read access](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."{% endif %}

## Websiteadministratortools

| Aktion               | Beschreibung                                                                                                                           |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `staff.disable_repo` | Ein Websiteadministrator hat den Zugriff auf ein Repository und auf alle zugehörigen Forks deaktiviert.                                |
| `staff.enable_repo`  | Ein Websiteadministrator hat den Zugriff auf ein Repository und auf alle zugehörigen Forks wieder aktiviert.                           |
| `staff.fake_login`   | Ein Websiteadministrator hat sich als ein anderer Benutzer bei {% data variables.product.product_name %} angemeldet.                   |
| `staff.repo_unlock`  | Ein Websiteadministrator hat eines der privaten Repositorys eines Benutzers entsperrt (temporär vollständigen Zugriff darauf erlangt). |
| `staff.unlock`       | Ein Websiteadministrator hat alle der privaten Repositorys eines Benutzers entsperrt (temporär vollständigen Zugriff darauf erlangt).  |

## Teams

| Aktion                    | Beschreibung                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| `team.create`             | Einem Team wurde ein Benutzerkonto oder ein Repository hinzugefügt.                      |
| `team.delete`             | A user account or repository was removed from a team.{% ifversion ghes > 2.22 or ghae %}
| `team.demote_maintainer`  | A user was demoted from a team maintainer to a team member.{% endif %}
| `team.destroy`            | A team was deleted.{% ifversion ghes > 2.22 or ghae %}
| `team.promote_maintainer` | A user was promoted from a team member to a team maintainer.{% endif %}

## Benutzer

| Aktion                          | Beschreibung                                                                                                                                                         |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user.add_email`                | Einem Benutzerkonto wurde eine E-Mail-Adresse hinzugefügt.                                                                                                           |
| `user.async_delete`             | An asynchronous job was started to destroy a user account, eventually triggering `user.delete`.{% ifversion ghes %}
| `user.change_password`          | A user changed his or her password.{% endif %}
| `user.create`                   | Ein neues Benutzerkonto wurde erstellt.                                                                                                                              |
| `user.delete`                   | Ein Benutzerkonto wurde durch einen asynchronen Auftrag vernichtet.                                                                                                  |
| `user.demote`                   | Ein Websiteadministrator wurde auf ein gewöhnliches Benutzerkonto zurückgestuft.                                                                                     |
| `user.destroy`                  | A user deleted his or her account, triggering `user.async_delete`.{% ifversion ghes %}
| `user.failed_login`             | Ein Benutzer hat versucht, sich mit einem falschen Benutzernamen, Passwort oder Zwei-Faktor-Authentifizierungscode anzumelden.                                       |
| `user.forgot_password`          | A user requested a password reset via the sign-in page.{% endif %}
| `user.login`                    | A user signed in.{% ifversion ghes > 2.22 or ghae %}
| `user.mandatory_message_viewed` | A user views a mandatory message (see "[Customizing user messages](/admin/user-management/customizing-user-messages-for-your-enterprise)" for details) | {% endif %}
| `user.promote`                  | Ein gewöhnliches Benutzerkonto wurde auf einen Websiteadministrator hochgestuft.                                                                                     |
| `user.remove_email`             | Eine E-Mail-Adresse wurde aus einem Benutzerkonto entfernt.                                                                                                          |
| `user.rename`                   | Ein Benutzernamen wurde geändert.                                                                                                                                    |
| `user.suspend`                  | A user account was suspended by a site admin.{% ifversion ghes %}
| `user.two_factor_requested`     | A user was prompted for a two-factor authentication code.{% endif %}
| `user.unsuspend`                | Ein Websiteadministrator hat die Sperrung eines Benutzerkontos aufgehoben.                                                                                           |

{% ifversion ghes > 3.1 or ghae-issue-1157 %}
## Workflows

{% data reusables.actions.actions-audit-events-workflow %}
{% endif %}

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [Deployment-Schlüssel]: /guides/managing-deploy-keys/#deploy-keys
  [deploy key]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [OAuth-Zugriffstoken]: /developers/apps/authorizing-oauth-apps
  [OAuth-Anwendung]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
  [2fa]: /articles/about-two-factor-authentication
