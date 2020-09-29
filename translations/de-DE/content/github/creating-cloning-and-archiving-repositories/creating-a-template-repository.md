---
title: Eine Repository-Vorlage erstellen
intro: 'Du kannst ein vorhandenes Repository zu einer Vorlage machen, sodass Du wie auch andere Personen neue Repositorys mit derselben Verzeichnisstruktur{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}, Branches{% endif %} und Dateien generieren können.'
redirect_from:
  - /articles/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.18'
---

Jeder, der über Administratorberechtigungen für ein Repository verfügt, kann das Repository zu einer Vorlage machen.

Um eine Repository-Vorlage zu erstellen, musst Du ein Repository erstellen und es anschließend zu einer Vorlage machen. Weitere Informationen zum Erstellen eines Repositorys findest Du unter „[Ein neues Repository erstellen](/articles/creating-a-new-repository).“

Nachdem Du Dein Repository zu einer Vorlage gemacht hast, kann jeder Benutzer mit Zugriff auf das Repository ein neues Repository mit derselben Verzeichnisstruktur und Dateien wie Dein Standardbranch generieren.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} Sie können auch alle anderen Branches Deines Repositorys einbinden.{% endif %} Weitere Informationen findest Du unter "[Erstellen eines Repositorys aus einer Vorlage](/articles/creating-a-repository-from-a-template)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Wähle **Template repository** (Repository-Vorlage) aus. ![Kontrollkästchen zum Umwandeln eines Repositorys in eine Vorlage](/assets/images/help/repository/template-repository-checkbox.png)
