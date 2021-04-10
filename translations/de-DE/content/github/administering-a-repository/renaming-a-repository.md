---
title: Repository umbenennen
intro: Du kannst ein Repository umbenennen, wenn Du Organisationsinhaber bist oder über Administratorberechtigungen für das Repository verfügst.
redirect_from:
  - /articles/renaming-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

Wenn Du ein Repository umbenennst, werden mit Ausnahme von Projektwebsite-URLs alle vorhandenen Informationen automatisch auf den neuen Namen umgeleitet, einschließlich:

* Issues
* Wikis
* Sterne
* Follower

For more information on project sites, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

Zusätzlich zur Umleitung des Web-Traffic werden auch alle `git clone`, `git fetch`, oder `git push` Operationen, welche auf den vorherigen Standort zielen, weiter funktionieren, wie wenn sie für den neuen Standort gemacht worden wären. Um jedoch Verwirrung zu vermeiden, empfehlen wir ausdrücklich, alle bestehenden lokalen Klone zu aktualisieren, sodass sie auf die neue Repository-URL verweisen. Du kannst dies mit dem Befehl  `git remote`  auf der Befehlszeile durchführen:

```shell
$ git remote set-url origin <em>new_url</em>
```

For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

{% if currentVersion == "free-pro-team@latest" %}

Wenn Du vorhast, ein Repository mit einer {% data variables.product.prodname_pages %}-Website umzubenennen, empfehlen wir Dir, eine benutzerdefinierte Domäne für Deine Website zu verwenden. Dadurch wird sichergestellt, dass die URL der Website nicht durch Umbenennung des Repository beeinträchtigt wird. Weitere Informationen findest Du unter „[Über benutzerdefinierte Domänen und {% data variables.product.prodname_pages %}-Websites](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)."

{% endif %}

{% tip %}

**Tipp:** {% data reusables.organizations.owners-and-admins-can %} ein Repository umbenennen. {% data reusables.organizations.new-repo-permissions-more-info %}

{% endtip %}

{% warning %}

**Warnung**: Wenn Du in der Zukunft ein neues Repository unter Deinem Konto erstellst, darfst Du den ursprünglichen Namen des umbenannten Repository nicht wiederverwenden. Wenn Du das tust, werden Umleitungen zum umbenannten Repository fehlschlagen.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Gib unter der Überschrift **Repository Name** (Repository-Name) den neuen Namen für das Repository ein. ![Repository umbenennen](/assets/images/help/repository/repository-name-change.png)
4. Klicke auf **Rename** (Umbenennen). Fertig!
