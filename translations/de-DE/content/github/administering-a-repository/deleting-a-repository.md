---
title: Repository löschen
intro: Du kannst ein Repository oder einen Fork löschen, wenn Du Organisationsinhaber bist oder über Administratorberechtigungen für das Repository oder den Fork verfügst. Durch das Löschen eines geforkten Repositorys wird das vorgelagerte Repository nicht gelöscht.
redirect_from:
  - /delete-a-repo/
  - /deleting-a-repo/
  - /articles/deleting-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.organizations.owners-and-admins-can %} ein Organisations-Repository löschen. Wenn **Allow members to delete or transfer repositories for this organization** (Mitgliedern das Löschen oder Übertragen von Repositorys für diese Organisation erlauben) deaktiviert wurde, können nur Organisationsinhaber Repositorys der Organisation löschen. {% data reusables.organizations.new-repo-permissions-more-info %}

{% if currentVersion == "free-pro-team@latest" %}
{% warning %}

**Warnung**: Wenn Du ein Repository löschst, werden die Releaseanhänge und Teamberechtigungen **dauerhaft** gelöscht. Diese Aktion **kann nicht** rückgängig gemacht werden.

{% endwarning %}
{% endif %}

Beachte auch Folgendes:
- Beim Löschen eines privaten Repositorys werden all seine Forks ebenfalls gelöscht.
- Beim Löschen eines öffentlichen Repositorys werden seine Forks nicht gelöscht.

{% if currentVersion == "free-pro-team@latest" %}
Bestimmte gelöschte Repositorys können innerhalb von 90 Tagen wiederhergestellt werden. Weitere Informationen findest Du unter „[Ein gelöschtes Repository wiederherstellen](/articles/restoring-a-deleted-repository).“
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. Klicke unter „Danger Zone“ (Gefahrenzone) auf **Delete this repository** (Dieses Repository löschen). ![Schaltfläche „Repository deletion" (Repository Löschung)](/assets/images/help/repository/repo-delete.png)
3. **Lies die Warnungen.**.
4. Um sicherzustellen, dass Du das richtige Repository löschst, gib den Namen des Repositorys ein, das Du löschen möchtest. ![Lösch-Kennzeichnung](/assets/images/help/repository/repo-delete-confirmation.png)
5. Klicke auf **I understand the consequences, delete this repository** (Mir sind die Folgen bekannt, lösche dieses Repository).
