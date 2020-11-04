---
title: Ein Repository anhand einer Vorlage erstellen
intro: Du kannst ein neues Repository mit derselben Verzeichnisstruktur und denselben Dateien erstellen, die ein vorhandenes Repository aufweist.
redirect_from:
  - /articles/creating-a-repository-from-a-template
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About repository templates

Jeder, der über Leseberechtigung auf eine Repository-Vorlage verfügt, kann ein Repository anhand dieser Vorlage erstellen. Weitere Informationen findest Du unter „[Repository-Vorlage erstellen](/articles/creating-a-template-repository).“

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create a repository from a template using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
Du kannst die Verzeichnisstruktur und die Dateien nur aus dem Standard-Branch des Vorlagen-Repositorys einbinden oder alle Branches einbinden.
{% endif %}

Das Erstellen eines Repositorys anhand einer Vorlage ähnelt dem Vorgang zum Forken eines Repositorys, aber es gibt entscheidende Unterschiede:
- Ein neuer Fork enthält den gesamten Commit-Verlauf des übergeordneten Repositorys, wohingegen ein Repository, das anhand einer Vorlage erstellt wurde, mit einem einzigen Commit beginnt.
- Commits für einen Fork erscheinen nicht im Beteiligungsdiagramm, während Commits für ein Repository, das anhand einer Vorlage erstellt wurde, im Beteiligungsdiagramm angezeigt werden.
- Ein Fork kann eine temporäre Möglichkeit sein, um Code zu einem vorhandenen Projekt beizutragen. Beim Erstellen eines Repositorys anhand einer Vorlage wird dagegen schnell ein neues Projekt gestartet.

Weitere Informationen zu Forks findest Du unter „[Informationen zu Forks](/articles/about-forks).“

### Ein Repository anhand einer Vorlage erstellen

{% data reusables.repositories.navigate-to-repo %}
2. Klicke oberhalb der Dateiliste auf **Use this template** (Diese Vorlage verwenden). ![Schaltfläche „Use this template“ (Diese Vorlage verwenden)](/assets/images/help/repository/use-this-template-button.png)
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
6. Um optional die Verzeichnisstruktur und die Dateien aller Branches der Vorlage und nicht nur aus dem Standard-Branch einzubinden, wähle **Include all branches** (Alle Branches einbinden). ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
{% data reusables.repositories.select-marketplace-apps %}
8. Klicke auf **Create repository from template** (Repository anhand der Vorlage erstellen).
