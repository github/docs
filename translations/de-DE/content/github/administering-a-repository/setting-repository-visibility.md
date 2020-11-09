---
title: Sichtbarkeit eines Repositorys festlegen
intro: Du kannst festlegen, wer Dein Repository anzeigen kann.
redirect_from:
  - /articles/making-a-private-repository-public/
  - /articles/making-a-public-repository-private/
  - /articles/converting-a-public-repo-to-a-private-repo/
  - /articles/setting-repository-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Über Änderungen der Repository-Sichtbarkeit

Organisationsinhaber können die Möglichkeit, die Sichtbarkeit des Repositorys zu ändern, auf Organisationsinhaber einschränken. Weitere Informationen findest Du unter „[Einschränken von Änderungen der Repository-Sichtbarkeit in Deiner Organisation](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)."

We recommend reviewing the following caveats before you change the visibility of a repository.

#### Repository als privat festlegen

   * {% data variables.product.prodname_dotcom %} will detach public forks of the public repository and put them into a new network. Öffentliche Forks werden nicht in private Forks umgewandelt. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}If you change a repository's visibility from internal to private, {% data variables.product.prodname_dotcom %} will remove forks that belong to any user without access to the newly private repository.{% endif %} For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-public-repository-to-a-private-repository)"
   {% if currentVersion == "free-pro-team@latest" %}* If you're using {% data variables.product.prodname_free_user %} for user accounts or organizations, some features won't be available in the repository after you change the visibility to private. {% data reusables.gated-features.more-info %}
   * Jede veröffentlichte {% data variables.product.prodname_pages %}-Website wird automatisch zurückgezogen. Wenn Sie Ihrer {% data variables.product.prodname_pages %}-Website eine benutzerdefinierte Domain hinzugefügt hatten, sollten Sie Ihre DNS-Einträge vor der Umschaltung des Repositorys in ein privates Repository entfernen oder aktualisieren, um das Risiko eines Domain-Takeovers auszuschließen. Weitere Informationen findest Du unter „[Eine benutzerdefinierte Domäne für Deine {% data variables.product.prodname_pages %}-Website verwalten](/articles/managing-a-custom-domain-for-your-github-pages-site).“
   * {% data variables.product.prodname_dotcom %} will no longer included the repository in the {% data variables.product.prodname_archive %}. For more information, see "[About archiving content and data on {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)."{% endif %}
   {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}* Anonymous Git read access is no longer available. Weitere Informationen finden Sie unter „[Anonymen Git-Lesezugriff für ein Repository aktivieren](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)“.{% endif %}

#### Repository als öffentlich festlegen

   * {% data variables.product.prodname_dotcom %} will detach private forks and turn them into a standalone private repository. Weitere Informationen findest Du unter „[Was geschieht mit Forks, wenn ein Repository gelöscht wird oder sich dessen Sichtbarkeit ändert?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository).“
   * If you're converting your private repository to a public repository as part of a move toward creating an open source project, see the [Open Source Guides](http://opensource.guide) for helpful tips and guidelines.{% if currentVersion == "free-pro-team@latest" %} You can also take a free course on managing an open source project with [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Sobald Dein Repository der Öffentlichkeit zugänglich ist, kannst Du im Community-Profil des Repositorys überprüfen, ob Dein Projekt die Best Practices zur Unterstützung von Mitarbeitern erfüllt. Weitere Informationen finden Sie unter „[Community-Profil anzeigen](/articles/viewing-your-community-profile)“.{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### Changing a repository's visibility

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", to the right of to "Change repository visibility", click **Change visibility**. ![Change visibility button](/assets/images/help/repository/repo-change-vis.png)
4. Select a visibility. ![Dialog of options for repository visibility](/assets/images/help/repository/repo-change-select.png)
5. To verify that you're changing the correct repository's visibility, type the name of the repository you want to change the visibility of.
6. Click **I understand, change repository visibility**. ![Confirm change of repository visibility button](/assets/images/help/repository/repo-change-confirm.png)

{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}

### Repository als privat festlegen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Klicke unter „Danger Zone“ (Gefahrenzone) neben „Make this repository private“ (Dieses Repository privat machen) auf **Make private** (Privat machen). ![Schaltfläche „Make private“ (Privat machen)](/assets/images/help/repository/repo-makeprivate.png)
4. Lies die Warnungen zu diesem Vorgang. ![Popup mit Warnung](/assets/images/help/repository/repo-privateconfirm.png)
5. Gib den Namen des Repositorys ein, das Du privat machen möchtest, zum Beispiel `accountname/reponame`.
6. Klicke auf **I understand, make this repository private** (Ich habe verstanden und möchte das Repository privat machen).

### Repository als öffentlich festlegen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Klicke unter „Danger Zone“ (Gefahrenzone) neben „Make this repository public“ (Dieses Repository öffentlich machen) auf **Make public** (Öffentlich machen). ![Schaltfläche „Make public“ (Öffentlich machen)](/assets/images/help/repository/repo-makepublic.png)
4. Lies die Warnungen zu diesem Vorgang. ![Popup mit Informationen zur Veröffentlichung eines privaten Repositorys](/assets/images/help/repository/repo-publicconfirm.png)
5. Gib den Namen des Repositorys ein, das Du öffentlich machen möchtest, zum Beispiel `accountname/reponame`.
6. Klicke auf **I understand, make this repository public** (Ich habe verstanden und möchte das Repository öffentlich machen).

{% if currentVersion ver_gt "enterprise-server@2.19" %}
### Repository als intern festlegen

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Klicke unter „Danger Zone“ (Gefahrenzone) neben „Make this repository internal“ (Dieses Repository intern machen) auf **Make internal** (Intern machen). ![Schaltfläche „Make internal“ (Intern machen)](/assets/images/help/repository/repo-makeinternal.png)
4. Lesen Sie die Warnungen zu diesem Vorgang. ![Popup mit Warnung](/assets/images/help/repository/repo-internalconfirm.png)
5. Geben Sie den Namen des Repositorys ein, das Sie intern machen möchten, zum Beispiel `accountname/reponame`.
6. Klicke auf **I understand, make this repository internal** (Ich habe verstanden und möchte das Repository intern machen).
{% endif %}

{% endif %}

### Weiterführende Informationen
- „[Über Sichtbarkeit von Repositorys](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)"
