---
title: Informationen zu Berechtigungen für GitHub-Pakete
intro: 'Hier erfährst du, wie du Berechtigungen für deine Pakete verwalten kannst.'
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About permissions
ms.openlocfilehash: 1663fa3bfc8fd6149e43fd9cf09a8362739c7341
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147704939'
---
{% ifversion fpt or ghec %} Die Berechtigungen für Pakete beziehen sich entweder auf Repositorys oder auf Benutzer/Organisationen.
{% endif %}

## Berechtigungen für repositorybezogene Pakete

Ein repositorybezogenes Paket erbt die Berechtigungen und Sichtbarkeit des Repositorys, in dessen Besitz es sich befindet. Du kannst ein auf ein Repository ausgerichtetes Paket finden, indem du zur Hauptseite des Repositorys wechselst und rechts auf der Seite auf den Link **Pakete** klickst. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Verbinden eines Repositorys mit einem Paket](/packages/learn-github-packages/connecting-a-repository-to-a-package).{% endif %}

Die folgenden {% data variables.product.prodname_registry %}-Registrierungen verwenden **nur** repositorybezogene Berechtigungen:

  {% ifversion not fpt or ghec %}- Docker-Registrierung (`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}- npm-Registrierung{% endif %}
  - RubyGems-Registrierung
  - Apache Maven-Registrierung
  - NuGet-Registrierung

{% ifversion packages-npm-v2 %}Für {% data variables.product.prodname_ghcr_and_npm_registry %} kannst du auswählen, dass Pakete für einen Benutzer oder eine Organisation zulässig oder mit einem Repository verknüpft sind.{% endif %}

{% ifversion fpt or ghec %}
## Differenzierte Berechtigungen für benutzer-/organisationsbezogene Pakete

Für Pakete mit differenzierten Berechtigungen wird ein persönliches Benutzerkonto oder ein Organisationskonto als Gültigkeitsbereich festgelegt. Du kannst die Zugriffssteuerung und Sichtbarkeit eines Pakets getrennt von einem Repository ändern, mit dem es verbunden (oder verknüpft) ist.

Derzeit bietet die {% data variables.product.prodname_ghcr_and_npm_registry %} differenzierte Berechtigungen für deine Containerimagepakete.

## Sichtbarkeit und Zugriffsberechtigungen für Containerimages

{% data reusables.package_registry.visibility-and-access-permissions %}

Weitere Informationen findest du unter [Konfigurieren der Zugriffssteuerung und Sichtbarkeit eines Pakets](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

{% endif %}

## Informationen zu Bereichen und Berechtigungen für Paketregistrierungen

Um ein Paket zu verwenden oder zu verwalten, das von einer Paketregistrierung gehostet wird, musst du ein Token mit dem entsprechenden Gültigkeitsbereich verwenden, und dein persönliches Konto muss über entsprechende Berechtigungen verfügen.

Beispiel:
-  Um Pakete aus einem Repository herunterzuladen und zu installieren, muss dein Token den `read:packages`-Gültigkeitsbereich aufweisen, und dein Benutzerkonto muss über eine Leseberechtigung verfügen.
- {% ifversion fpt or ghes or ghec %}Um ein Paket auf {% data variables.product.product_name %} zu löschen, muss dein Token mindestens über die Gültigkeitsbereiche `delete:packages` und `read:packages` verfügen. Der `repo`-Umfang ist auch für repositorybezogene Pakete erforderlich. Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).{% elsif ghae %}Um eine angegebene Version eines Pakets auf {% data variables.product.product_name %} zu löschen, muss dein Token über den Gültigkeitsbereich `delete:packages` und `repo` verfügen. Weitere Informationen findest du unter [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}

| `Scope` | BESCHREIBUNG | Erforderliche Berechtigung |
| --- | --- | --- |
|`read:packages`| Herunterladen und Installieren von Paketen aus {% data variables.product.prodname_registry %} | Lesen |
|`write:packages`| Hochladen und Veröffentlichen von Paketen in {% data variables.product.prodname_registry %} | Schreiben |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} Löschen von Paketen aus {% data variables.product.prodname_registry %} {% elsif ghae %} Löschen der angegebenen Versionen von Paketen aus {% data variables.product.prodname_registry %} {% endif %} | admin |
| `repo` | Hochladen und Löschen von Paketen (zusammen mit `write:packages`oder `delete:packages`) | Schreib- oder Administratorberechtigung |

Wenn du einen {% data variables.product.prodname_actions %}-Workflow erstellst, kannst du das `GITHUB_TOKEN` zum Veröffentlichen und Installieren von Paketen in {% data variables.product.prodname_registry %} verwenden, ohne ein persönliches Zugriffstoken zu speichern und zu verwalten.

Weitere Informationen findest du hier:{% ifversion fpt or ghec %}
- [Konfigurieren der Zugriffssteuerung und Sichtbarkeit von Paketen](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility){% endif %}
- [Veröffentlichen und Installieren eines Pakets mit {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions)
- [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token/)
- [Verfügbare Bereiche](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)

## Verwalten des Zugriffs auf Pakete in {% data variables.product.prodname_actions %}-Workflows

Um sicherzustellen, dass deine Workflows Zugriff auf deine Pakete erhalten, stelle sicher, dass du das richtige Zugriffstoken in deinem Workflow verwendest und dass du den {% data variables.product.prodname_actions %}-Zugriff auf dein Paket aktiviert hast.

Weitere konzeptionelle Hintergründe zu {% data variables.product.prodname_actions %} oder Beispiele für die Verwendung von Paketen in Workflows findest du unter [Verwalten von GitHub-Paketen mit GitHub Actions-Workflows](/packages/managing-github-packages-using-github-actions-workflows).

### Zugriffstoken  

- Um Pakete zu veröffentlichen, die dem Workflowrepository zugeordnet sind, verwende `GITHUB_TOKEN`.
- Zum Installieren von Paketen, die anderen privaten Repositorys zugeordnet sind, auf die `GITHUB_TOKEN` nicht zugreifen kann, verwende ein persönliches Zugriffstoken.

Weitere Informationen zum `GITHUB_TOKEN`, das in {% data variables.product.prodname_actions %}-Workflows verwendet wird, findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

{% ifversion fpt or ghec %}
### {% data variables.product.prodname_actions %}-Zugriff für Containerimages

Um sicherzustellen, dass deine Workflows auf dein Containerimage zugreifen können, musst du den {% data variables.product.prodname_actions %}-Zugriff auf die Repositorys ermöglichen, in denen dein Workflow ausgeführt wird. Du kannst diese Einstellung auf der Seite mit den Einstellungen für dein Paket finden. Weitere Informationen findest du unter [Sicherstellen des Workflowzugriffs auf dein Paket](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).

{% endif %}
