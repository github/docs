---
title: Repository übertragen
intro: Du kannst Repositorys auf andere Benutzer oder auf Organisationskonten übertragen.
redirect_from:
  - /articles/about-repository-transfers/
  - /move-a-repo/
  - /moving-a-repo/
  - /articles/what-is-transferred-with-a-repository/
  - /articles/what-is-transferred-with-a-repo/
  - /articles/how-to-transfer-a-repo/
  - /articles/how-to-transfer-a-repository/
  - /articles/transferring-a-repository-owned-by-your-personal-account/
  - /articles/transferring-a-repository-owned-by-your-organization/
  - /articles/transferring-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

### Informationen zur Übertragung von Repositorys

Wenn Du ein Repository auf einen neuen Inhaber überträgst, kann dieser die Inhalte, Issues, Pull Requests, Releases, Projektboards und Einstellungen des Repositorys sofort verwalten.

Prerequisites for repository transfers: {% if currentVersion == "free-pro-team@latest" %}
- Wenn Du ein Dir gehörendes Repository auf ein anderes Benutzerkonto überträgst, erhält der neue Inhaber eine Bestätigungs-E-Mail. Die Bestätigungs-E-Mail enthält Anweisungen zum Annehmen dieser Übertragung. Nimmt der neue Inhaber die Übertragung nicht innerhalb eines Tages an, läuft die Einladung ab.{% endif %}
- Wenn Du ein Dir gehörendes Repository einer Organisation überträgst, musst Du die Berechtigung besitzen, ein Repository in der Zielorganisation zu erstellen.
- Unter dem Zielkonto darf kein Repository mit gleichem Namen und kein Fork im gleichen Netzwerk vorhanden sein.
- Der ursprüngliche Inhaber des Repositorys wird dem übertragenen Repository als Mitarbeiter hinzugefügt. Andere Mitarbeiter des übertragenen Repositorys bleiben unverändert.
- Private Forks können nicht übertragen werden.

{% if currentVersion == "free-pro-team@latest" %}If you transfer a private repository to a {% data variables.product.prodname_free_user %} user or organization account, the repository will lose access to features like protected branches and {% data variables.product.prodname_pages %}. {% data reusables.gated-features.more-info %}{% endif %}

#### Was wird mit einem Repository übertragen?

Bei der Übertragung eines Repositorys werden auch seine Issues, Pull Requests, Wikis, Sterne und Watcher (Beobachter) übertragen. Enthält das übertragene Repository Webhooks, Dienste, Geheimnisse oder Deployment-Schlüssel, bleiben diese nach Abschluss der Übertragung verknüpft. Git-Informationen zu Commits, einschließlich Beiträgen, bleiben erhalten. Zudem gilt Folgendes:

- Wenn das übertragene Repository ein Fork ist, bleibt es mit dem vorgelagerten Repository verknüpft.
- Wenn zu dem übertragenen Repository Forks gehören, bleiben diese Forks auch nach der Übertragung mit dem Repository verknüpft.
- Wenn das übertragene Repository {% data variables.large_files.product_name_long %} verwendet, werden alle {% data variables.large_files.product_name_short %}-Objekte automatisch verschoben. This transfer occurs in the background, so if you have a large number of {% data variables.large_files.product_name_short %} objects or if the {% data variables.large_files.product_name_short %} objects themselves are large, it may take some time for the transfer to occur.{% if currentVersion == "free-pro-team@latest" %} Before you transfer a repository that uses {% data variables.large_files.product_name_short %}, make sure the receiving account has enough data packs to store the {% data variables.large_files.product_name_short %} objects you'll be moving over. Informationen zum Hinzufügen von Speicher zu Benutzerkonten findest Du unter „[Upgrade von {% data variables.large_files.product_name_long %}](/articles/upgrading-git-large-file-storage).“{% endif %}
- Bei der Übertragung eines Repositorys zwischen zwei Benutzerkonten bleiben die Issuezuweisungen erhalten. Bei der Übertragung eines Repositorys von einem Benutzerkonto zu einer Organisation bleiben Issues, die Organisationsmitgliedern zugewiesen sind, erhalten, während alle anderen Issuebearbeiter entfernt werden. Nur die Inhaber der Organisation dürfen neue Issuezuweisungen erstellen. Bei der Übertragung eines Repositorys von einer Organisation auf ein Benutzerkonto bleiben nur die dem Repository-Inhaber zugewiesenen Issues erhalten, während alle anderen Issuebearbeiter entfernt werden.
- Wenn das übertragene Repository eine {% data variables.product.prodname_pages %}-Website enthält, werden Links zum Git-Repository im Web und Links über Git-Aktivitäten weitergeleitet. Mit dem Repository verknüpfte {% data variables.product.prodname_pages %} werden hingegen nicht weitergeleitet.
- Alle Links zum früheren Repository-Standort werden automatisch zum neuen Standort weitergeleitet. Wenn Du die Befehle `git clone`, `git fetch` oder `git push` für ein übertragenes Repository ausführst, werden diese Befehle an den neuen Standort oder die neue URL des Repositorys weitergeleitet. Um Verwirrung zu vermeiden, empfehlen wir jedoch, alle bestehenden lokalen Klone entsprechend zu aktualisieren, so dass sie auf die neue Repository-URL verweisen. Hierzu verwendest Du den Befehl `git remote` in der Befehlszeile:

  ```shell
  $ git remote set-url origin <em>new_url</em>
  ```

For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

#### Repository-Übertragungen und Organisationen

Für die Übertragung von Repositorys auf eine Organisation benötigst Du für diese Organisation die Berechtigung zur Erstellung von Repositorys. Wenn ein Organisationsinhaber die Berechtigung zur Erstellung von Repositorys durch Organisationsmitglieder deaktiviert hat, können nur Organisationsinhaber Repositorys in die und aus der Organisation übertragen.

Für ein in eine Organisation übertragenes Repository gelten die in der Organisation eingestellten Standardberechtigungen für Repositorys und Mitglieder.

### Ein Repository Deines Benutzerkontos übertragen

Du kannst Dein Repository an jedes Benutzerkonto übertragen, das die Übertragung annimmt. Wenn ein Repository zwischen zwei Benutzerkonten übertragen wird, werden der bisherige Inhaber und die Mitarbeiter des Repositorys dem neuen Repository automatisch als Mitarbeiter hinzugefügt.

{% if currentVersion == "free-pro-team@latest" %}If you published a {% data variables.product.prodname_pages %} site in a private repository and added a custom domain, before transferring the repository, you may want to remove or update your DNS records to avoid the risk of a domain takeover. Weitere Informationen findest Du unter „[Eine benutzerdefinierte Domäne für Deine {% data variables.product.prodname_pages %}-Website verwalten](/articles/managing-a-custom-domain-for-your-github-pages-site)“.{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}

### Ein Repository Deiner Organisation übertragen

Wenn Du in einer Organisation über Inhaberberechtigungen oder über Administratorberechtigungen für deren Repositorys verfügst, kannst Du Repositorys Deiner Organisation an Dein Benutzerkonto oder eine andere Organisation übertragen.

1. Melde Dich bei Deinem Benutzerkonto an, das über Inhaber- oder Administratorberechtigungen innerhalb der Organisation verfügt, der das Repository gehört.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.transfer-repository-steps %}
