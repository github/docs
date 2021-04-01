---
title: Informationen zu gemeinschaftlichen Entwicklungsmodellen
intro: Die Art und Weise, wie Du Pull Requests verwendest, hängt von der Art des Entwicklungsmodells in Deinem Projekt ab.
redirect_from:
  - /articles/types-of-collaborative-development-models/
  - /articles/about-collaborative-development-models
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

Es gibt zwei Hauptarten von Entwicklungsmodellen, mit denen Du Pull Requests verwenden würdest. Mit dem *fork and pull model* (forken und abrufen Modell) kann jeder ein bestehendes Repository forken und Veränderungen an seine persönlichen Forks übertragen. Du benötigst keine Berechtigungen zum Quell-Repository, um an eine benutzereigene Fork zu übertragen. Die Änderungen können vom Projektbetreuer in das Quell-Repository gezogen werden. Wenn Du einen Pull Request öffnest, der Änderungen von Deiner benutzereigenen Fork zu einem Branch im Quell- (vorgelagerten) Repository vorschlägt, kannst Du allen Personen mit Push Zugriff auf das vorgelagerte Repository erlauben, Änderungen an Deinen Pull Requests zu machen.  Dieses Modell ist bei Open-Source-Projekten beliebt, da es Probleme für neue Mitarbeiter reduziert und Benutzern ermöglicht, unabhängig und ohne vorherige Koordination zu arbeiten.

{% tip %}

**Tipp:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning-lab %}

{% endtip %}

Beim *shared repository model* (Modell mit gemeinsamen Repositorys) erhalten Mitarbeiter Push-Zugriff auf ein einzelnes gemeinsames Repository, und Themen-Branches werden erstellt, wenn Änderungen vorgenommen werden müssen. Pull Requests sind in diesem Modell nützlich, da sie einen Code-Review und eine allgemeine Diskussion über eine Reihe von Änderungen initiieren, bevor die Änderungen in den Hauptentwicklungs-Branch integriert werden. Dieses Modell kommt häufiger bei kleinen Teams und Organisationen zur Anwendung, die an privaten Projekten zusammenarbeiten.

### Weiterführende Informationen

- „[Informationen zu Pull Requests](/articles/about-pull-requests)“
- „[Einen Pull Request von einem Fork erstellen](/articles/creating-a-pull-request-from-a-fork)“
- „[Änderungen an einem Pull-Request-Branch zulassen, der von einem Fork erstellt wurde](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)“
