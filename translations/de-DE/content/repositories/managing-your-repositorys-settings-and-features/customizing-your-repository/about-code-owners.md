---
title: Informationen zu Codeinhabern
intro: 'Du kannst eine CODEOWNERS-Datei verwenden, um Personen oder Teams zu definieren, die für den Code in einem Repository verantwortlich sind.'
redirect_from:
  - /articles/about-codeowners/
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

Personen mit Administrator- oder Inhaberberechtigungen können eine CODEOWNERS-Datei in einem Repository einrichten.

Die Personen, die Du als Codeinhaber auswählst, müssen Schreibberechtigung für das Repository haben. When the code owner is a team, that team must be visible and it must have write permissions, even if all the individual members of the team already have write permissions directly, through organization membership, or through another team membership.

## Informationen zu Codeinhabern

Code-Besitzer werden automatisch zur Überprüfung aufgefordert, wenn jemand einen Pull Request öffnet, der den Code ändert, den sie besitzen. Code-Besitzer werden nicht automatisch aufgefordert, Entwürfe für Pull Requests zu überprüfen. Weitere Informationen zu Entwürfen von Pull Requests finden Sie unter „[Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)“. Code-Besitzer werden nicht automatisch aufgefordert, Entwürfe für Pull Requests zu überprüfen. Wenn Du einen Pull Request in einen Entwurf konvertierst, werden Personen, die bereits Benachrichtigungen abonniert haben, nicht automatisch abgemeldet. Weitere Informationen findest Du unter „[Den Zustand eines Pull Requests ändern](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request).“

Wenn ein Benutzer mit Administrator- oder Inhaberberechtigungen die erforderlichen Reviews aktiviert hat, kann er optional auch die Genehmigung von einem Codeinhaber anfordern, bevor der Autor einen Pull Request im Repository zusammenführen kann. Weitere Informationen findest Du unter „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging).“

{% ifversion fpt or ghae or ghes %}Wenn ein Team die Zuweisung zur Code-Überprüfung aktiviert hat, werden die individuellen Genehmigungen alleine nicht die Anforderung für die Genehmigung des Codeinhabers in einem geschützten Zweig erfüllen. Weitere Informationen findest Du unter „[Code Review-Zuweisung für Dein Team verwalten](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)."{% endif %}

{% ifversion fpt or ghae or ghes > 2.22 %}
Wenn eine Datei einen Codeinhaber hat, kannst Du sehen, wer der Codeinhaber ist, bevor Du einen Pull Request öffnest. Im Repository kannst Du zur Datei navigieren und den Mauszeiger über {% octicon "shield-lock" aria-label="The edit icon" %} bewegen.

![Codeinhaber für eine Datei in einem Repository](/assets/images/help/repository/code-owner-for-a-file.png)
{% endif %}

## Speicherort der CODEOWNERS-Datei

Um eine CODEINHABER-Datei zu verwenden, erstellen Sie eine neue Datei mit dem Namen `CODEOWNERS` im Stammverzeichnis `docs/` oder im Verzeichnis `.github/` des Repositorys, in dem Branch, in dem Sie die Codeinhaber hinzufügen möchten.

Jede CODEINHABER-Datei ordnet die Codeinhaber für einen einzelnen Branch im Repository zu. Thus, you can assign different code owners for different branches, such as `@octo-org/codeowners-team` for a code base on the default branch and `@octocat` for a {% data variables.product.prodname_pages %} site on the `gh-pages` branch.

Damit Codeinhaber Review-Anfragen erhalten können, muss sich die CODEINHABER-Datei auf dem Basis-Branch des Pull Requests befinden. Wenn Sie beispielsweise `@octocat` als Codeinhaber für *.js*-Dateien auf dem Branch `gh-pages` Ihres Repositorys festlegen, erhält `@octocat` Review-Anforderungen, wenn ein Pull Request mit Änderungen für die *.js*-Dateien zwischen dem Head-Branch und dem Branch `gh-pages` geöffnet wird.

{% ifversion fpt or ghae or ghes > 3.2 %}
## CODEOWNERS file size

CODEOWNERS files must be under 3 MB in size. A CODEOWNERS file over this limit will not be loaded, which means that code owner information not to be shown and the appropriate code owners will not be requested to review changes in a pull request.

To reduce the size of your CODEOWNERS file, consider using wildcard patterns to consolidate multiple entries into a single entry.
{% endif %}

## CODEOWNERS-Syntax

A CODEOWNERS file uses a pattern that follows most of the same rules used in [gitignore](https://git-scm.com/docs/gitignore#_pattern_format) files, with [some exceptions](#syntax-exceptions). Dem Muster folgen ein oder mehrere {% data variables.product.prodname_dotcom %}-Benutzernamen oder Teamnamen im Standardformat `@benutzername` oder `@org/teamname`. Users must have `read` access to the repository and teams must have explicit `write` access, even if the team's members already have access. Du kannst auf einen Benutzer auch über eine E-Mail-Adresse verweisen, die zu dessen {% data variables.product.product_name %}-Konto hinzugefügt wurde, z. B. `benutzer@beispiel.com`.

If any line in your CODEOWNERS file contains invalid syntax, the file will not be detected and will not be used to request reviews.
### Beispiel für eine CODEOWNERS-Datei
```
# Dies ist ein Kommentar.
# Jede Zeile ist ein Dateimuster, dem ein oder mehrere Inhaber folgen.

# Diese Inhaber sind die Standardinhaber für alles im
# Repository. Sofern keine spätere Entsprechung Vorrang hat,
# erhalten @global-owner1 und @global-owner2 eine
# Review-Anfrage, wenn jemand einen Pull Request öffnet.
*       @global-owner1 @global-owner2

# Die Reihenfolge ist wichtig; das letzte Entsprechungsmuster
# hat höchste Priorität. Wenn jemand einen Pull Request öffnet,
# der nur JS-Dateien ändert, erhält nur @js-owner und nicht
# der/die globale(n) Inhaber eine Review-Anfrage.
*.js    @js-owner

# Bei Bedarf kannst Du auch E-Mail-Adressen verwenden. Sie werden
# verwendet, um Benutzer nachzuschlagen, genau wie bei
# Commit-Autoren-E-Mails.
*.go docs@example.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the octocats team in the octo-org organization owns all .txt files.
*.txt @octo-org/octocats

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# Das Muster `docs/*` entspricht Dateien wie
# `docs/getting-started.md`, aber nicht weiter verschachtelten
# Dateien wie `docs/build-app/troubleshooting.md`.
docs/*  docs@beispiel.com

# In diesem Beispiel ist @octocat Inhaber irgendeiner Datei
# in einem Apps-Verzeichnis irgendwo in Ihrem Repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat

# In this example, @octocat owns any file in the `/apps` 
# directory in the root of your repository except for the `/apps/github` 
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github 
```
### Syntax exceptions
There are some syntax rules for gitignore files that do not work in CODEOWNERS files:
- Escaping a pattern starting with `#` using `\` so it is treated as a pattern and not a comment
- Using `!` to negate a pattern
- Using `[ ]` to define a character range

## CODEOWNERS and branch protection
Repository owners can add branch protection rules to ensure that changed code is reviewed by the owners of the changed files. Weitere Informationen findest Du unter „[Informationen zu geschützten Branches](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches).“


### Beispiel für eine CODEOWNERS-Datei
```
# In this example, any change inside the `/apps` directory
# will require approval from @doctocat.
/apps/ @doctocat

# In this example, any change inside the `/apps` directory
# will require approval from @doctocat or @octocat.
/apps/ @doctocat @octocat

# In this example, any change inside the `/apps` directory
# will require approval from a member of the @example-org/content team.
# If a member of @example-org/content opens a pull request 
# with a change inside the `/apps` directory, their approval is implicit.
# The team is still added as a reviewer but not a required reviewer.
# Anyone can approve the changes.
/apps/ @example-org/content-team
```



## Weiterführende Informationen

- „[Neue Dateien erstellen](/articles/creating-new-files)“
- „[Mitarbeiter in ein persönliches Repository einladen](/articles/inviting-collaborators-to-a-personal-repository)“
- „[Den Zugriff einer Person auf ein Repository einer Organisation verwalten](/articles/managing-an-individual-s-access-to-an-organization-repository)“
- „[Den Teamzugriff auf ein Repository einer Organisation verwalten](/articles/managing-team-access-to-an-organization-repository)“
- „[Einen Pull-Request-Review anzeigen](/articles/viewing-a-pull-request-review)“
