---
title: Überwachte Aktionen
intro: Sie können das Auditprotokoll auf eine Vielzahl von Aktionen durchsuchen.
redirect_from:
  - /enterprise/admin/articles/audited-actions/
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
versions:
  enterprise-server: '*'
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
|                  `public_key.update` | Der SSH-Schlüssel eines Benutzerkontos oder der [Deployment-Schlüssel][] eines Repositorys wurde aktualisiert.                            |
|  `two_factor_authentication.enabled` | Die [Zwei-Faktor-Authentifizierung][2fa] wurde für ein Benutzerkonto aktiviert.                                                           |
| `two_factor_authentication.disabled` | Die [Zwei-Faktor-Authentifizierung][2fa] wurde für ein Benutzerkonto deaktiviert.                                                         |

#### Hooks

|                  Name | Beschreibung                                               |
| ---------------------:| ---------------------------------------------------------- |
|         `hook.create` | Einem Repository wurde ein neuer Hook hinzugefügt.         |
| `hook.config_changed` | Die Konfiguration eines Hooks wurde geändert.              |
|        `hook.destroy` | Ein Hook wurde gelöscht.                                   |
| `hook.events_changed` | Die konfigurierten Ereignisse eines Hooks wurden geändert. |

#### Instanzkonfigurationseinstellungen

|                                                    Name | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `business.update_member_repository_creation_permission` | Ein Websiteadministrator schränkt die Repository-Erstellungen in Organisationen auf der Instanz ein. Weitere Informationen finden Sie unter „[Repository-Erstellung auf Ihrer Instanz einschränken](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)“.                                                                                                                                         |
|               `business.clear_members_can_create_repos` | Ein Websiteadministrator löscht eine Einschränkung für die Repository-Erstellung in Organisationen auf der Instanz. Weitere Informationen finden Sie unter „[Repository-Erstellung auf Ihrer Instanz einschränken](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)“.                                                                                                                          |
|           `enterprise.config.lock_anonymous_git_access` | Ein Websiteadministrator sperrt den anonymen Git-Lesezugriff, um Repository-Administratoren daran zu hindern, die vorhandenen Einstellungen für den anonymen Git-Lesezugriff für Repositorys auf der Instanz zu ändern. Weitere Informationen finden Sie unter „[Änderung des anonymen Git-Lesezugriffs durch Benutzer verhindern](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)“.  |
|         `enterprise.config.unlock_anonymous_git_access` | Ein Websiteadministrator entsperrt den anonymen Git-Lesezugriff, um Repository-Administratoren zu ermöglichen, die vorhandenen Einstellungen für den anonymen Git-Lesezugriff für Repositorys auf der Instanz zu ändern. Weitere Informationen finden Sie unter „[Änderung des anonymen Git-Lesezugriffs durch Benutzer verhindern](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)“. |

#### Issues und Pull Requests

|                                 Name | Beschreibung                                                                                                                                                             |
| ------------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                       `issue.update` | Der Text eines Issues (erster Kommentar) wurde geändert.                                                                                                                 |
|               `issue_comment.update` | Ein Kommentar zu einem Issue (nicht der ursprüngliche) wurde geändert.                                                                                                   |
| `pull_request_review_comment.delete` | A comment on a pull request was deleted.                                                                                                                                 |
|                      `issue.destroy` | Ein Issue wurde aus dem Repository gelöscht. Weitere Informationen finden Sie unter „[Issue löschen](/enterprise/{{ currentVersion }}/user/articles/deleting-an-issue)“. |

#### Organisationen

|               Name | Beschreibung                                                                                                                                                                                                                         |
| ------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `org.async_delete` | Ein Benutzer hat einen Hintergrundauftrag zum Löschen einer Organisation initiiert.                                                                                                                                                  |
|       `org.delete` | Eine Organisation wurde durch einen von einem Benutzer initiierten Hintergrundauftrag gelöscht.                                                                                                                                      |
|    `org.transform` | Ein Benutzerkonto wurde in eine Organisation umgewandelt. Weitere Informationen finden Sie unter „[Benutzer in eine Organisation umwandeln](/enterprise/{{ currentVersion}}/user/articles/converting-a-user-into-an-organization/)“. |

#### geschützte Branches

|                                                               Name | Beschreibung                                                                                |
| ------------------------------------------------------------------:| ------------------------------------------------------------------------------------------- |
|                                          `protected_branch.create` | Der Branch-Schutz ist auf einem Branch aktiviert.                                           |
|                                         `protected_branch.destroy` | Der Branch-Schutz ist auf einem Branch deaktiviert.                                         |
|                           `protected_branch.update_admin_enforced` | Der Branch-Schutz wird für Repository-Administratoren erzwungen.                            |
|                `protected_branch.update_require_code_owner_review` | Die Erzwingung erforderlicher Reviews durch Codeinhaber wird auf einem Branch aktualisiert. |
|                           `protected_branch.dismiss_stale_reviews` | Die Erzwingung des Verwerfens veralteter Pull Requests wird für einen Branch aktualisiert.  |
|  `protected_branch.update_signature_requirement_enforcement_level` | Die Erzwingung der obligatorischen Commit-Signatur wird für einen Branch aktualisiert.      |
|   `protected_branch.update_pull_request_reviews_enforcement_level` | Die Erzwingung der erforderlichen Pull-Request-Reviews wird für einen Branch aktualisiert.  |
| `protected_branch.update_required_status_checks_enforcement_level` | Die Erzwingung der erforderlichen Statuschecks für einen Branch wird aktualisiert.          |
|                             `protected_branch.rejected_ref_update` | Ein Branch-Aktualisierungsversuch wird abgelehnt.                                           |
|                                 `protected_branch.policy_override` | Eine Branch-Schutzanforderung wird durch einen Repository-Administrator überschrieben.      |

#### Repositorys

|                                       Name | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------:| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                              `repo.access` | Ein privates Repository wurde als öffentlich festgelegt, oder ein öffentliches Repository wurde als privat festgelegt.                                                                                                                                                                                                                                                                                                                             |
|                             `repo.archive` | Ein Repository wurde archiviert. Weitere Informationen finden Sie unter „[Repositorys archivieren und deren Archivierung aufheben](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/)“.                                                                                                                                                                                                        |
|                          `repo.add_member` | Einem Repository wurde ein Mitarbeiter hinzugefügt.                                                                                                                                                                                                                                                                                                                                                                                                |
|                              `repo.config` | Ein Websiteadministrator hat erzwungene Push-Vorgänge blockiert. Weitere Informationen finden Sie unter „[Erzwungene Push-Vorgänge an ein Repository blockieren](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)“.                                                                                                                                                                        |
|                              `repo.create` | Ein Repository wurde erstellt.                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                             `repo.destroy` | Ein Repository wurde gelöscht.                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                       `repo.remove_member` | Ein Mitarbeiter wurde aus einem Repository entfernt.                                                                                                                                                                                                                                                                                                                                                                                               |
|                              `repo.rename` | Ein Repository wurde umbenannt.                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                            `repo.transfer` | Ein Benutzer hat eine Anfrage akzeptiert, ein übertragenes Repository zu empfangen.                                                                                                                                                                                                                                                                                                                                                                |
|                      `repo.transfer_start` | Ein Benutzer hat eine Anfrage gesendet, ein Repository an einen anderen Benutzer oder an eine andere Organisation zu übertragen.                                                                                                                                                                                                                                                                                                                   |
|                           `repo.unarchive` | Die Archivierung eines Repositorys wurde aufgehoben. Weitere Informationen finden Sie unter „[Repositorys archivieren und deren Archivierung aufheben](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/)“.                                                                                                                                                                                    |
| `repo.config.disable_anonymous_git_access` | Der anonyme Git-Lesezugriff ist für ein öffentliches Repository deaktiviert. Weitere Informationen finden Sie unter „[Anonymen Git-Lesezugriff für ein Repository aktivieren](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)“.                                                                                                                                                                |
|  `repo.config.enable_anonymous_git_access` | Der anonyme Git-Lesezugriff ist für ein öffentliches Repository aktiviert. Weitere Informationen finden Sie unter „[Anonymen Git-Lesezugriff für ein Repository aktivieren](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)“.                                                                                                                                                                  |
|    `repo.config.lock_anonymous_git_access` | Die Einstellung für den anonymen Git-Lesezugriff eines Repositorys ist gesperrt, wodurch Repository-Administratoren daran gehindert werden, diese Einstellung zu ändern (zu aktivieren oder zu deaktivieren). Weitere Informationen finden Sie unter „[Änderung des anonymen Git-Lesezugriffs durch Benutzer verhindern](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)“. |
|  `repo.config.unlock_anonymous_git_access` | Die Einstellung für den anonymen Git-Lesezugriff ist entsperrt, wodurch Repository-Administratoren diese Einstellung ändern (aktivieren oder deaktivieren) können. Weitere Informationen finden Sie unter „[Änderung des anonymen Git-Lesezugriffs durch Benutzer verhindern](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)“.                                            |

#### Websiteadministratortools

|                 Name | Beschreibung                                                                                                                           |
| --------------------:| -------------------------------------------------------------------------------------------------------------------------------------- |
| `staff.disable_repo` | Ein Websiteadministrator hat den Zugriff auf ein Repository und auf alle zugehörigen Forks deaktiviert.                                |
|  `staff.enable_repo` | Ein Websiteadministrator hat den Zugriff auf ein Repository und auf alle zugehörigen Forks wieder aktiviert.                           |
|   `staff.fake_login` | Ein Websiteadministrator hat sich als ein anderer Benutzer bei {% data variables.product.prodname_enterprise %} angemeldet.            |
|  `staff.repo_unlock` | Ein Websiteadministrator hat eines der privaten Repositorys eines Benutzers entsperrt (temporär vollständigen Zugriff darauf erlangt). |
|       `staff.unlock` | Ein Websiteadministrator hat alle der privaten Repositorys eines Benutzers entsperrt (temporär vollständigen Zugriff darauf erlangt).  |

#### Teams

|           Name | Beschreibung                                                        |
| --------------:| ------------------------------------------------------------------- |
|  `team.create` | Einem Team wurde ein Benutzerkonto oder ein Repository hinzugefügt. |
|  `team.delete` | Ein Benutzerkonto oder Repository wurde aus einem Team entfernt.    |
| `team.destroy` | Ein Team wurde gelöscht.                                            |

#### Benutzer

|                        Name | Beschreibung                                                                                                                       |
| ---------------------------:| ---------------------------------------------------------------------------------------------------------------------------------- |
|            `user.add_email` | Einem Benutzerkonto wurde eine E-Mail-Adresse hinzugefügt.                                                                         |
|         `user.async_delete` | Es wurde ein asynchroner Auftrag gestartet, um ein Benutzerkonto zu vernichten, wodurch schließlich `user.delete` ausgelöst wurde. |
|      `user.change_password` | Ein Benutzer hat sein Passwort geändert.                                                                                           |
|               `user.create` | Ein neues Benutzerkonto wurde erstellt.                                                                                            |
|               `user.delete` | Ein Benutzerkonto wurde durch einen asynchronen Auftrag vernichtet.                                                                |
|               `user.demote` | Ein Websiteadministrator wurde auf ein gewöhnliches Benutzerkonto zurückgestuft.                                                   |
|              `user.destroy` | Ein Benutzer hat sein Konto gelöscht, wodurch `user.async_delete` ausgelöst wurde.                                                 |
|         `user.failed_login` | Ein Benutzer hat versucht, sich mit einem falschen Benutzernamen, Passwort oder Zwei-Faktor-Authentifizierungscode anzumelden.     |
|      `user.forgot_password` | Ein Benutzer hat über die Anmeldeseite eine Passwortzurücksetzung angefordert.                                                     |
|                `user.login` | Ein Benutzer hat sich angemeldet.                                                                                                  |
|              `user.promote` | Ein gewöhnliches Benutzerkonto wurde auf einen Websiteadministrator hochgestuft.                                                   |
|         `user.remove_email` | Eine E-Mail-Adresse wurde aus einem Benutzerkonto entfernt.                                                                        |
|               `user.rename` | Ein Benutzernamen wurde geändert.                                                                                                  |
|              `user.suspend` | Ein Benutzerkonto wurde durch einen Websiteadministrator gesperrt.                                                                 |
| `user.two_factor_requested` | Ein Benutzer wurde zur Eingabe eines Zwei-Faktor-Authentifizierungscodes aufgefordert.                                             |
|            `user.unsuspend` | Ein Websiteadministrator hat die Sperrung eines Benutzerkontos aufgehoben.                                                         |

  [add key]: /articles/adding-a-new-ssh-key-to-your-github-account
  [Deployment-Schlüssel]: /guides/managing-deploy-keys/#deploy-keys
  [generate token]: /articles/creating-an-access-token-for-command-line-use
  [OAuth-Zugriffstoken]: /v3/oauth/
  [OAuth-Anwendung]: /guides/basics-of-authentication/#registering-your-app
  [2fa]: /articles/about-two-factor-authentication
