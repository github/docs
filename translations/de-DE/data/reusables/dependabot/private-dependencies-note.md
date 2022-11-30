---
ms.openlocfilehash: 74a6541cfbd0ad87d45a316cb46da45c227c9925
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145133478"
---
Bei der Durchführung von Sicherheits- oder Versionsupdates müssen einige Ökosysteme in der Lage sein, alle Abhängigkeiten von der jeweiligen Quelle aufzulösen, um zu überprüfen, ob die Updates erfolgreich waren. Wenn deine Manifest- oder Sperrdateien private Abhängigkeiten enthalten, muss {% data variables.product.prodname_dependabot %} auf den Speicherort zugreifen können, an dem diese Abhängigkeiten gehostet werden. Organisationsbesitzer können {% data variables.product.prodname_dependabot %} Zugriff auf private Repositorys gewähren, die Abhängigkeiten für ein Projekt innerhalb derselben Organisation enthalten. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies). Du kannst den Zugriff auf private Registrierungen in der Konfigurationsdatei _dependabot.yml_ eines Repositorys konfigurieren. Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries).
