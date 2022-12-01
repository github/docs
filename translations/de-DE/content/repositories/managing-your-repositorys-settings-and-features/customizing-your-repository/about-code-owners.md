---
title: Informationen zu Codeinhabern
intro: 'Du kannst eine CODEOWNERS-Datei verwenden, um Personen oder Teams zu definieren, die für den Code in einem Repository verantwortlich sind.'
redirect_from:
  - /articles/about-codeowners
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 12265f0627ca6d0feb34244aab1c021b5ae6cc10
ms.sourcegitcommit: 9315c7dae9a673a2f8958df7632bf1af206a0bed
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188238'
---
Personen mit Administrator- oder Inhaberberechtigungen können eine CODEOWNERS-Datei in einem Repository einrichten.

Die Personen, die du als Codeinhaber auswählst, müssen Schreibberechtigungen für das Repository haben. Wenn der Codebesitzer ein Team ist, muss das Team sichtbar sein und über Schreibberechtigungen verfügen. Dies gilt auch, wenn alle einzelnen Teammitglieder über die Organisations- oder eine andere Teammitgliedschaft bereits Schreibberechtigung besitzen.

## Informationen zu Codeinhabern

Code-Besitzer werden automatisch zur Überprüfung aufgefordert, wenn jemand einen Pull Request öffnet, der den Code ändert, den sie besitzen. Code-Besitzer werden nicht automatisch aufgefordert, Entwürfe für Pull Requests zu überprüfen. Weitere Informationen zum Entwerfen von Pull Requests findest du unter [Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests). Code-Besitzer werden nicht automatisch aufgefordert, Entwürfe für Pull Requests zu überprüfen. Wenn du einen Pull Request in einen Entwurf konvertierst, werden Personen, die bereits Benachrichtigungen abonniert haben, nicht automatisch abgemeldet. Weitere Informationen findest du unter [Ändern der Stage eines Pull Requests](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request).

Wenn ein Benutzer mit Administrator- oder Inhaberberechtigungen die erforderlichen Reviews aktiviert hat, kann er optional auch die Genehmigung von einem Codeinhaber anfordern, bevor der Autor einen Pull Request im Repository zusammenführen kann. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging).

Wenn eine Datei eine*n Codebesitzer*in hat, kannst du sehen, wer dies ist, bevor du einen Pull Request öffnest. Du kannst im Repository zur Datei navigieren und den Mauszeiger über {% octicon "shield-lock" aria-label="The edit icon" %} bewegen.

![Codeinhaber für eine Datei in einem Repository](/assets/images/help/repository/code-owner-for-a-file.png)

## Speicherort der CODEOWNERS-Datei

Um eine CODEOWNERS-Datei zu verwenden, erstellst du eine neue Datei namens `CODEOWNERS` im Stammverzeichnis oder im Verzeichnis `docs/` oder `.github/` des Repositorys in dem Branch, in dem du die Codebesitzer hinzufügen möchtest.

Jede CODEOWNERS-Datei ordnet die Codeinhaber für einen einzelnen Branch im Repository zu. So kannst du verschiedenen Codebesitzer für unterschiedliche Branches zuweisen, z. B. `@octo-org/codeowners-team` für eine Codebasis im Standardbranch und `@octocat` für eine {% data variables.product.prodname_pages %}-Website im Branch `gh-pages`.

Damit Codeinhaber Review-Anfragen erhalten können, muss sich die CODEOWNERS-Datei auf dem Basis-Branch des Pull Requests befinden. Wenn du z. B. `@octocat` als Codebesitzer für *.js*-Dateien im Branch `gh-pages` deines Repositorys zuweist, erhält `@octocat` Überprüfungsanforderungen, wenn ein Pull Request mit Änderungen an *.js*-Dateien zwischen Headbranch und `gh-pages` erstellt wird.

## Größe von CODEOWNERS-Dateien

CODEOWNERS-Dateien müssen kleiner als 3 MB sein. Eine CODEOWNERS-Datei über diesen Grenzwert wird nicht geladen. Das bedeutet, dass keine Informationen zum Codebesitzer angezeigt und die entsprechenden Codebesitzer nicht aufgefordert werden, Änderungen in einem Pull Request zu überprüfen.

Um die Größe deiner CODEOWNERS-Datei zu verringern, kannst du Platzhaltermustern verwenden, um mehrere Einträge in einem zusammenzufassen.

## CODEOWNERS-Syntax

{% warning %}

**Warnung:** Es gibt einige Syntaxregeln für GITIGNORE-Dateien, die in CODEOWNERS-Dateien *nicht* funktionieren:
- Auskommentieren eines Musters, das mit `#` beginnt und `\` enthält, sodass es als Muster behandelt wird und nicht als Kommentar
- Verwenden von `!` zum Negieren eines Musters
- Verwenden von `[ ]` zum Definieren eines Zeichenbereichs

{% endwarning %}

Eine CODEOWNERS-Datei verwendet ein Muster, das den meisten Regeln folgt, die auch für [gitignore](https://git-scm.com/docs/gitignore#_pattern_format)-Dateien gelten. Dem Muster folgen ein oder mehrere {% data variables.product.prodname_dotcom %}-Benutzernamen oder -Teamnamen im Standardformat `@username` oder `@org/team-name`. Benutzer*innen und Teams müssen expliziten `write`-Zugriff auf das Repository haben, auch wenn die Teammitglieder bereits Zugriff haben.

{% ifversion fpt or ghec%}In den meisten Fällen kannst du {% else %}Du kannst{% endif %} auch mithilfe einer E-Mail-Adresse auf Benutzer verweisen, die in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} deren Konto hinzugefügt wurde, z. B. `user@example.com`. {% ifversion fpt or ghec %} Du kannst nicht mit einer E-Mail-Adresse auf einen {% data variables.enterprise.prodname_managed_user %} verweisen. Weitere Informationen zu {% data variables.enterprise.prodname_managed_users %} findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users){% ifversion fpt %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}{% endif %}

Bei CODEOWNERS-Pfaden wird die Groß- und Kleinschreibung berücksichtigt, da {% data variables.product.prodname_dotcom %} ein Dateisystem mit Beachtung von Groß- und Kleinschreibung verwendet. Da CODEOWNERS von {% data variables.product.prodname_dotcom %} ausgewertet werden, muss auch bei Systemen mit Beachtung der Groß- und Kleinschreibung (z. B. macOS) bei den Pfaden und Dateien die richtige Groß- und Kleinschreibung in der CODEOWNERS-Datei verwendet werden.

{% ifversion codeowners-errors %} Wenn eine Zeile in deiner CODEOWNERS-Datei ungültige Syntax enthält, wird diese Zeile übersprungen. Wenn du zur CODEOWNERS-Datei in deinem Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} navigierst, werden Fehler hervorgehoben. Auf eine Liste der Fehler in der CODEOWNERS-Datei eines Repositorys kannst du über die API zugreifen. Weitere Informationen findest du in der REST-API-Dokumentation unter [Repositorys](/rest/reference/repos#list-codeowners-errors).
{% else %} Wenn eine Zeile in deiner CODEOWNERS-Datei ungültige Syntax enthält, wird die Datei nicht erkannt und nicht verwendet, um Rezensionen anzufordern.
{% endif %}

### Beispiel für eine CODEOWNERS-Datei
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner #This is an inline comment.

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
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

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat

# In this example, any change inside the `/scripts` directory
# will require approval from @doctocat or @octocat.
/scripts/ @doctocat @octocat

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github
```

## CODEOWNERS und Branchschutz
Repositorybesitzer können Branchschutzregeln hinzufügen, um sicherzustellen, dass geänderter Code von den Besitzer*innen der geänderten Dateien überprüft wird. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches).

## Weiterführende Themen

- [Erstellen neuer Dateien](/articles/creating-new-files)
- [Einladen von Projektmitarbeiter*innen in ein persönliches Repository](/articles/inviting-collaborators-to-a-personal-repository)
- [Verwalten des Zugriffs einer Person auf ein Repository einer Organisation](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [Verwalten des Teamzugriffs auf ein Organisationsrepository](/articles/managing-team-access-to-an-organization-repository).
- [Anzeigen von Pull Request-Reviews](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)
