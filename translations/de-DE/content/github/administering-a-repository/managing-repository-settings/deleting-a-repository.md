---
title: Repository löschen
intro: 'Du kannst ein Repository oder einen Fork löschen, wenn Du Organisationsinhaber bist oder über Administratorberechtigungen für das Repository oder den Fork verfügst. Durch das Löschen eines geforkten Repositorys wird das vorgelagerte Repository nicht gelöscht.'
redirect_from:
  - /delete-a-repo/
  - /deleting-a-repo/
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% data reusables.organizations.owners-and-admins-can %} ein Organisations-Repository löschen. Wenn **Allow members to delete or transfer repositories for this organization** (Mitgliedern das Löschen oder Übertragen von Repositorys für diese Organisation erlauben) deaktiviert wurde, können nur Organisationsinhaber Repositorys der Organisation löschen. {% data reusables.organizations.new-repo-permissions-more-info %}

{% if currentVersion != "github-ae@latest" %}Deleting a public repository will not delete any forks of the repository.{% endif %}

{% warning %}

**Warnings**:

- Deleting a repository will **permanently** delete release attachments and team permissions. Diese Aktion **kann nicht** rückgängig gemacht werden.
- Deleting a private {% if currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}or internal {% endif %}repository will delete all forks of the repository.

{% endwarning %}

{% if currentVersion == "free-pro-team@latest" %}
Bestimmte gelöschte Repositorys können innerhalb von 90 Tagen wiederhergestellt werden. Weitere Informationen findest Du unter „[Ein gelöschtes Repository wiederherstellen](/articles/restoring-a-deleted-repository).“
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. Klicke unter „Danger Zone“ (Gefahrenzone) auf **Delete this repository** (Dieses Repository löschen). ![Schaltfläche „Repository deletion" (Repository Löschung)](/assets/images/help/repository/repo-delete.png)
3. **Lies die Warnungen.**.
4. Um sicherzustellen, dass Du das richtige Repository löschst, gib den Namen des Repositorys ein, das Du löschen möchtest. ![Lösch-Kennzeichnung](/assets/images/help/repository/repo-delete-confirmation.png)
5. Klicke auf **I understand the consequences, delete this repository** (Mir sind die Folgen bekannt, lösche dieses Repository).
