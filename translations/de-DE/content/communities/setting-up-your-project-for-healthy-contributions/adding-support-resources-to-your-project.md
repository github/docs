---
title: Support-Ressourcen zu Ihrem Projekt hinzufügen
intro: 'Du kannst eine SUPPORT-Datei erstellen, um anderen mitzuteilen, wie sie Unterstützung in Deinem Projekt erhalten.'
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add support resources
ms.openlocfilehash: 12819511ac3784720398175ef2d313eca7d03afe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145090205'
---
Um Personen auf bestimmte Supportressourcen zu verweisen, kannst du im Stammverzeichnis im Ordner `docs` oder `.github` deines Repositorys eine SUPPORT-Datei hinzufügen. Wenn jemand einen Issue in Deinem Repository erstellt, wird ihm ein Link zur SUPPORT-Datei Deines Projekts angezeigt.

![Support-Richtlinien](/assets/images/help/issues/support_guidelines_in_issue.png)

{% ifversion fpt or ghes or ghec %}

Du kannst Standardsupportressourcen für deine Organisation oder dein persönliches Konto erstellen. Weitere Informationen findest du unter [Erstellen einer Standard-Communityintegritätsdatei](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

{% endif %}

{% tip %}

**Tipp:** Um Benutzer*innen das Auffinden der Supportrichtlinie zu vereinfachen, kannst du an anderen Stellen in deinem Repository, z. B. in der Datei [README-Datei](/articles/about-readmes/) auf die SUPPORT-Datei verweisen.

{% endtip %}

## Support-Ressourcen zu Ihrem Projekt hinzufügen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib im Feld für den Dateinamen *SUPPORT.md* (in Großbuchstaben) ein.
4. Füge auf der Registerkarte **Neue Datei bearbeiten** Informationen zu den Supportmöglichkeiten bei deinem Projekt hinzu.
5. Um deine SUPPORT-Datei zu überprüfen, klickest du auf **Vorschau**.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
