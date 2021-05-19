---
title: Issue in ein anderes Repository übertragen
intro: 'Wenn Du einen offenen Issue in ein anderes, geeigneteres Repository verschieben möchtest, kannst Du ihn in das gewünschte Repository übertragen.'
redirect_from:
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Für die Übertragung eines offenen Issues in ein anderes Repository benötigst Du Schreibberechtigung sowohl für das Repository, aus dem der Issue stammt, wie auch für das Repository, in das der Issue übertragen wird. Weitere Informationen finden Sie unter„[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“.

Du kannst Issues nur zwischen Repositorys übertragen, die demselben Benutzer- oder Organisationskonto angehören. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}You can't transfer an issue from a private repository to a public repository.{% endif %}

Wenn Du einen Issue überträgst, bleiben seine Kommentare und Bearbeiter erhalten. The issue's labels and milestones are not retained. This issue will stay on any user-owned or organization-wide project boards and be removed from any repository project boards. Weitere Informationen findest Du unter „[Informationen zu Projektboards](/articles/about-project-boards).“

Im Issue erwähnte Personen und Teams werden über die Übertragung des Issues in ein neues Repository benachrichtigt. Die ursprüngliche URL wird an die neue URL des Issues weitergeleitet. Personen, die für das neue Repository über keine Leseberechtigung verfügen, wird ein Banner angezeigt, das sie darüber informiert, dass der Issue in ein Repository übertragen wurde, auf das sie keinen Zugriff haben.

### Offener Issue in ein anderes Repository übertragen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Klicke in der Liste der Issues auf den Issue, den Du übertragen möchtest.
4. Klicke in der rechten Seitenleiste auf **Transfer issue** (Issue übertragen). ![Schaltfläche zum Übertragen eines Issues](/assets/images/help/repository/transfer-issue.png)
5. Wähle im Dropdownmenü **Choose a repository** (Repository auswählen) das Repository aus, in das Du den Issue übertragen möchtest. ![Auswahl eines Repositorys](/assets/images/help/repository/choose-a-repository.png)
6. Klicke auf **Transfer issue** (Issue übertragen). ![Schaltfläche „Transfer issue“ (Issue übertragen)](/assets/images/help/repository/transfer-issue-button.png)

### Weiterführende Informationen

- „[Informationen zu Issues](/articles/about-issues)“
- „[Sicherheitsprotokoll überprüfen](/articles/reviewing-your-security-log)“
- „[Auditprotokoll Deiner Organisation überprüfen](/articles/reviewing-the-audit-log-for-your-organization)“
