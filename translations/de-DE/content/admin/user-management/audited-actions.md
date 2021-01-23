---
title: Überwachte Aktionen
intro: Sie können das Auditprotokoll auf eine Vielzahl von Aktionen durchsuchen.
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
versions:
  enterprise-server: '*'
  github-ae: '*'
---

#### Authentifizierung

|                                 Name | Beschreibung                                                                                                                              |
| ------------------------------------:| ----------------------------------------------------------------------------------------------------------------------------------------- |
|                `oauth_access.create` | Ein [OAuth-Zugriffstoken][] wurde für ein Benutzerkonto [generiert][generate token].                                                      |
|               `oauth_access.destroy` | Ein [OAuth-Zugriffstoken][] wurde aus einem Benutzerkonto gelöscht.                                                                       |
|          `oauth_application.destroy` | Eine [OAuth-Anwendung][] wurde aus einem Benutzer- oder Organisationskonto gelöscht.                                                      |
|     `oauth_application.reset_secret` | Der geheime Schlüssel einer [OAuth-Anwendung][] wurde zurückgesetzt.                                                                      |
|         `oauth_application.transfer` | Eine [OAuth-Anwendung][] wurde von einem Benutzer- oder Organisationskonto auf ein anderes übertragen.                                    |
|                  `public_key.create` | Einem Benutzerkonto wurde ein SSH-Schlüssel [hinzugefügt][add key], oder einem Repository wurde ein [Deployment-Schlüssel][] hinzugefügt. |
|                  `public_key.delete` | Ein SSH-Schlüssel wurde aus einem Benutzerkonto entfernt, oder ein [Deployment-Schlüssel][] wurde aus einem Repository entfernt.          |
|                  `public_key.update` | A user account's SSH key or a repository's [deploy key][] was updated.{% if enterpriseServerVersions contains currentVersion %}
|  `two_factor_authentication.enabled` | Die [Zwei-Faktor-Authentifizierung][2fa] wurde für ein Benutzerkonto aktiviert.                                                           |
| `two_factor_authentication.disabled` | [Two-factor authentication][2fa] was disabled for a user account.{% endif %}

#### Hooks

|                  Name | Beschreibung                                               |
| ---------------------:| ---------------------------------------------------------- |
|         `hook.create` | Einem Repository wurde ein neuer Hook hinzugefügt.         |
| `hook.config_changed` | Die Konfiguration eines Hooks wurde geändert.              |
|        `hook.destroy` | Ein Hook wurde gelöscht.                                   |
| `hook.events_changed` | Die konfigurierten Ereignisse eines Hooks wurden geändert. |

#### Enterprise configuration settings

|                                                    Name | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `business.update_member_repository_creation_permission` | A site admin restricts repository creation in organizations in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."                                                                                              |
|               `business.clear_members_can_create_repos` | A site admin clears a restriction on repository creation in organizations in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% if enterpriseServerVersions contains currentVersion %}
|           `enterprise.config.lock_anonymous_git_access` | A site admin locks anonymous Git read access to prevent repository admins from changing existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."        |
|         `enterprise.config.unlock_anonymous_git_access` | A site admin unlocks anonymous Git read access to allow repository admins to change existing anonymous Git read access settings for repositories in the enterprise. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)."{% endif %}

#### Issues und Pull Requests

|                                 Name | Beschreibung                                                                                                                                          |
| ------------------------------------:| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
|                       `issue.update` | Der Text eines Issues (erster Kommentar) wurde geändert.                                                                                              |
|               `issue_comment.update` | Ein Kommentar zu einem Issue (nicht der ursprüngliche) wurde geändert.                                                                                |
| `pull_request_review_comment.delete` | A comment on a pull request was deleted.                                                                                                              |
|                      `issue.destroy` | Ein Issue wurde aus dem Repository gelöscht. For more information, see "[Deleting an issue](/github/managing-your-work-on-github/deleting-an-issue)." |

#### Organisationen

|               Name | Beschreibung                                                                                                                                                                                                                                |
| ------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `org.async_delete` | Ein Benutzer hat einen Hintergrundauftrag zum Löschen einer Organisation initiiert.                                                                                                                                                         |
|       `org.delete` | An organization was deleted by a user-initiated background job.{% if currentVersion != "github-ae@latest" %}
|    `org.transform` | Ein Benutzerkonto wurde in eine Organisation umgewandelt. For more information, see "[Converting a user into an organization](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)."{% endif %}

#### geschützte Branches

|                                                               Name | Beschreibung                                                                               |
| ------------------------------------------------------------------:| ------------------------------------------------------------------------------------------ |
|                                          `protected_branch.create` | Der Branch-Schutz ist auf einem Branch aktiviert.                                          |
|                                         `protected_branch.destroy` | Der Branch-Schutz ist auf einem Branch deaktiviert.                                        |
|                           `protected_branch.update_admin_enforced` | Der Branch-Schutz wird für Repository-Administratoren erzwungen.                           |
|                `protected_branch.update_require_code_owner_review` | Enforcement of required code owner review is updated on a branch.                          |
|                           `protected_branch.dismiss_stale_reviews` | Die Erzwingung des Verwerfens veralteter Pull Requests wird für einen Branch aktualisiert. |
|  `protected_branch.update_signature_requirement_enforcement_level` | Die Erzwingung der obligatorischen Commit-Signatur wird für einen Branch aktualisiert.     |
|   `protected_branch.update_pull_request_reviews_enforcement_level` | Die Erzwingung der erforderlichen Pull-Request-Reviews wird für einen Branch aktualisiert. |
| `protected_branch.update_required_status_checks_enforcement_level` | Die Erzwingung der erforderlichen Statuschecks für einen Branch wird aktualisiert.         |
|                             `protected_branch.rejected_ref_update` | Ein Branch-Aktualisierungsversuch wird abgelehnt.                                          |
|                                 `protected_branch.policy_override` | Eine Branch-Schutzanforderung wird durch einen Repository-Administrator überschrieben.     |

#### Repositorys

|                                       Name | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                              `repo.access` | The visibility of a repository changed to private{% if enterpriseServerVersions contains currentVersion %}, public,{% endif %} or internal.                                                                                                                                                                                                                                                                                                        |
|                             `repo.archive` | Ein Repository wurde archiviert. For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."                                                                                                                                                                                                                             |
|                          `repo.add_member` | Einem Repository wurde ein Mitarbeiter hinzugefügt.                                                                                                                                                                                                                                                                                                                                                                                                |
|                              `repo.config` | Ein Websiteadministrator hat erzwungene Push-Vorgänge blockiert. Weitere Informationen finden Sie unter „[Erzwungene Push-Vorgänge an ein Repository blockieren](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)“.                                                                                                                                                                        |
|                              `repo.create` | Ein Repository wurde erstellt.                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                             `repo.destroy` | Ein Repository wurde gelöscht.                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                       `repo.remove_member` | Ein Mitarbeiter wurde aus einem Repository entfernt.                                                                                                                                                                                                                                                                                                                                                                                               |
|                              `repo.rename` | Ein Repository wurde umbenannt.                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                            `repo.transfer` | Ein Benutzer hat eine Anfrage akzeptiert, ein übertragenes Repository zu empfangen.                                                                                                                                                                                                                                                                                                                                                                |
|                      `repo.transfer_start` | Ein Benutzer hat eine Anfrage gesendet, ein Repository an einen anderen Benutzer oder an eine andere Organisation zu übertragen.                                                                                                                                                                                                                                                                                                                   |
|                           `repo.unarchive` | Die Archivierung eines Repositorys wurde aufgehoben. For more information, see "[Archiving a {% data variables.product.prodname_dotcom %} repository](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)."{% if enterpriseServerVersions contains currentVersion %}
| `repo.config.disable_anonymous_git_access` | Anonymous Git read access is disabled for a repository. Weitere Informationen finden Sie unter „[Anonymen Git-Lesezugriff für ein Repository aktivieren](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)“.                                                                                                                                                                                     |
|  `repo.config.enable_anonymous_git_access` | Anonymous Git read access is enabled for a repository. Weitere Informationen finden Sie unter „[Anonymen Git-Lesezugriff für ein Repository aktivieren](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)“.                                                                                                                                                                                      |
|    `repo.config.lock_anonymous_git_access` | Die Einstellung für den anonymen Git-Lesezugriff eines Repositorys ist gesperrt, wodurch Repository-Administratoren daran gehindert werden, diese Einstellung zu ändern (zu aktivieren oder zu deaktivieren). Weitere Informationen finden Sie unter „[Änderung des anonymen Git-Lesezugriffs durch Benutzer verhindern](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)“. |
|  `repo.config.unlock_anonymous_git_access` | Die Einstellung für den anonymen Git-Lesezugriff ist entsperrt, wodurch Repository-Administratoren diese Einstellung ändern (aktivieren oder deaktivieren) können. For more information, see "[Preventing users from changing anonymous Git read access](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)."{% endif %}

#### Websiteadministratortools

|                 Name | Beschreibung                                                                                                                           |
| --------------------:| -------------------------------------------------------------------------------------------------------------------------------------- |
| `staff.disable_repo` | Ein Websiteadministrator hat den Zugriff auf ein Repository und auf alle zugehörigen Forks deaktiviert.                                |
|  `staff.enable_repo` | Ein Websiteadministrator hat den Zugriff auf ein Repository und auf alle zugehörigen Forks wieder aktiviert.                           |
|   `staff.fake_login` | Ein Websiteadministrator hat sich als ein anderer Benutzer bei {% data variables.product.product_name %} angemeldet.                   |
|  `staff.repo_unlock` | Ein Websiteadministrator hat eines der privaten Repositorys eines Benutzers entsperrt (temporär vollständigen Zugriff darauf erlangt). |
|       `staff.unlock` | Ein Websiteadministrator hat alle der privaten Repositorys eines Benutzers entsperrt (temporär vollständigen Zugriff darauf erlangt).  |

#### Teams

|                      Name | Beschreibung                                                                                                                                         |
| -------------------------:| ---------------------------------------------------------------------------------------------------------------------------------------------------- |
|             `team.create` | Einem Team wurde ein Benutzerkonto oder ein Repository hinzugefügt.                                                                                  |
|             `team.delete` | A user account or repository was removed from a team.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
|  `team.demote_maintainer` | A user was demoted from a team maintainer to a team member.{% endif %}
|            `team.destroy` | A team was deleted.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `team.promote_maintainer` | A user was promoted from a team member to a team maintainer.{% endif %}


#### Benutzer

|                            Name | Beschreibung                                                                                                                                                         |
| -------------------------------:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                `user.add_email` | Einem Benutzerkonto wurde eine E-Mail-Adresse hinzugefügt.                                                                                                           |
|             `user.async_delete` | An asynchronous job was started to destroy a user account, eventually triggering `user.delete`.{% if enterpriseServerVersions contains currentVersion %}
|          `user.change_password` | A user changed his or her password.{% endif %}
|                   `user.create` | Ein neues Benutzerkonto wurde erstellt.                                                                                                                              |
|                   `user.delete` | Ein Benutzerkonto wurde durch einen asynchronen Auftrag vernichtet.                                                                                                  |
|                   `user.demote` | Ein Websiteadministrator wurde auf ein gewöhnliches Benutzerkonto zurückgestuft.                                                                                     |
|                  `user.destroy` | A user deleted his or her account, triggering `user.async_delete`.{% if enterpriseServerVersions contains currentVersion %}
|             `user.failed_login` | Ein Benutzer hat versucht, sich mit einem falschen Benutzernamen, Passwort oder Zwei-Faktor-Authentifizierungscode anzumelden.                                       |
|          `user.forgot_password` | A user requested a password reset via the sign-in page.{% endif %}
|                    `user.login` | A user signed in.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `user.mandatory_message_viewed` | A user views a mandatory message (see "[Customizing user messages](/admin/user-management/customizing-user-messages-for-your-enterprise)" for details) | {% endif %}
|                  `user.promote` | Ein gewöhnliches Benutzerkonto wurde auf einen Websiteadministrator hochgestuft.                                                                                     |
|             `user.remove_email` | Eine E-Mail-Adresse wurde aus einem Benutzerkonto entfernt.                                                                                                          |
|                   `user.rename` | Ein Benutzernamen wurde geändert.                                                                                                                                    |
|                  `user.suspend` | A user account was suspended by a site admin.{% if enterpriseServerVersions contains currentVersion %}
|     `user.two_factor_requested` | A user was prompted for a two-factor authentication code.{% endif %}
|                `user.unsuspend` | Ein Websiteadministrator hat die Sperrung eines Benutzerkontos aufgehoben.                                                                                           |

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [Deployment-Schlüssel]: /guides/managing-deploy-keys/#deploy-keys
  [deploy key]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [OAuth-Zugriffstoken]: /developers/apps/authorizing-oauth-apps
  [OAuth-Anwendung]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
  [2fa]: /articles/about-two-factor-authentication
