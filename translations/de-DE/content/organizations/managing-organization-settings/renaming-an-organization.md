---
title: Organisation umbenennen
intro: 'Wenn sich der Name Deines Projekts oder Deines Unternehmens geändert hat, kannst Du den Namen Deiner Organisation entsprechend anpassen.'
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name/
  - /articles/renaming-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/renaming-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% tip %}

**Tipp:** Nur Organisationsinhaber können ihre Organisation umbenennen. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

### Was geschieht, wenn ich den Namen meiner Organisation ändere?

Nach der Änderung Deines Organisationsnamens wird Dein alter Organisationsname frei, und jemand anders kann diesen Namen für sich beanspruchen. Die meisten Referenzen auf Deine Repositorys unter dem alten Organisationsnamen werden nach einer Änderung Deines Organisationsnamens automatisch dem neuen Namen angepasst. Einige Links auf Dein Profil werden jedoch nicht automatisch weitergeleitet.

#### Automatische Änderungen

- {% data variables.product.prodname_dotcom %} leitet Referenzen auf Ihre Repositorys automatisch weiter.  Weblinks auf bestehende **Repositorys** Deiner Organisation funktionieren weiterhin. Allerdings kann diese Anpassung nach der Veranlassung der Änderung einige Minuten dauern.
- Du kannst Deine lokalen Repositorys weiterhin mittels Push auf die bisherige Remote-Tracking-URL übertragen, ohne diese zu aktualisieren. Jedoch wird nach einer Änderung des Organisationsnamens die Aktualiserung der URLs aller vorhandenen Remote-Repositorys empfohlen. Schließlich kann Dein alter Organisationsname nach dessen Änderung von jemand anderem verwendet werden, und es ist durchaus möglich, dass Repositorys einer neuen Organisation mit gleichem Namen die Weiterleitungseinträge für Deine Repositorys überschreiben. For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."
- Bisherige Git-Commits werden den Benutzern Deiner Organisation korrekt zugeordnet.

#### Änderungen, die nicht automatisch erfolgen

Nach der Änderung Deines Organisationsnamens können folgende Probleme auftreten:
- Links auf die bisherige Profilseite Ihrer Organisation, wie `https://{% data variables.command_line.backticks %}/previousorgname`, geben einen 404-Fehler zurück. We recommend you update links to your organization from other sites{% if currentVersion == "free-pro-team@latest" %}, such as your LinkedIn or Twitter profiles{% endif %}.
- API-Anforderungen mit dem alten Organisationsnamen geben einen 404-Fehler zurück. Wir empfehlen Dir die Aktualisierung Deines alten Organisationsnamens in Deinen API-Anforderungen.
- There are no automatic [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) redirects for teams that use the old organization's name.{% if currentVersion == "free-pro-team@latest" %}
- If SAML single sign-on (SSO) is enabled for the organization, you must update the organization name in the application for {% data variables.product.prodname_ghe_cloud %} on your identity provider (IdP). If you don't update the organization name on your IdP, members of the organization will no longer be able to authenticate with your IdP to access the organization's resources. For more information, see "[Connecting your identity provider to your organization](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)."{% endif %}

### Namen Deiner Organisation ändern

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Klicke nahe am Ende der Einstellungsseite unter „Rename organization“ (Organisation umbenennen) auf **Rename Organization** (Organisation umbenennen). ![Schaltfläche „Rename Organization“ (Organisation umbenennen)](/assets/images/help/settings/settings-rename-organization.png)

### Weiterführende Informationen

* „[Warum sind meine Commits mit dem falschen Benutzer verknüpft?](/articles/why-are-my-commits-linked-to-the-wrong-user)“
