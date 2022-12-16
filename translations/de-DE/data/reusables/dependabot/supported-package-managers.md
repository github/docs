---
ms.openlocfilehash: f37c93394be7f73c417b5cd040696b453c82e42d
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/17/2022
ms.locfileid: "148169240"
---
Die folgende Tabelle zeigt für jeden Paket-Manager:
- Den YAML-Wert, der in der Datei *dependabot.yml* verwendet werden soll
- Die unterstützten Versionen des Paket-Managers
- Ob Abhängigkeiten in privaten Repositorys oder Registrierungen von {% data variables.product.prodname_dotcom %} unterstützt werden
- Ob anbieterseitige Abhängigkeiten unterstützt werden

Paket-Manager | YAML-Wert      | Unterstützte Versionen | Private Repositorys | Private Registrierungen | Vendoring
---------------|------------------|------------------|:---:|:---:|:---:
Bundler        | `bundler`        | v1, v2           | | **✓** | **✓** |
Cargo          | `cargo`          | v1               | **✓** | **✓** | |
Composer       | `composer`       | v1, v2           | **✓** | **✓** | |
Docker {% ifversion dependabot-version-updates-enhanced-docker-support %}<sup>[1]</sup>{% endif %}         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
Git-Submodul  | `gitsubmodule`   | Keine Angabe (Keine Version) | **✓** | **✓** | |
GitHub-Aktionen | `github-actions` | Keine Angabe (Keine Version) | **✓** | **✓** | |
Go-Module     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | Keine Angabe (Keine Version)<sup>[2]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | Keine Angabe (Keine Version)<sup>[3]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6, v7, v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4,8<sup>[4]</sup> | **✓** | **✓** | |
pip{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}          | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}   | `pip`            | 6.1.0            | | **✓** | |
Poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
Kneipe            | `pub`            | v2 <sup>[6]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13, <= 1.2.x  | **✓** | **✓** | |
{% ifversion dependabot-yarn-v3-update %}yarn           | `npm`            | v1, v2, v3       | **✓** | **✓** | **✓**<sup>[7]</sup> |{% else %}yarn           | `npm`            | v1               | **✓** | **✓** |  |
{% endif %}

{% tip %}

**Tipp:** Für Paket-Manager wie `pipenv` und `poetry` musst du den YAML-Wert `pip` verwenden. Wenn du deine Python-Abhängigkeiten z. B. mit `poetry` verwaltest und mit {% data variables.product.prodname_dependabot %} deine Abhängigkeitsmanifestdatei für neue Versionen überwachen möchtest, nutze `package-ecosystem: "pip"` in deiner *dependabot.yml*-Datei.

{% endtip %}

{% ifversion dependabot-version-updates-enhanced-docker-support %} [1] {% data variables.product.prodname_dependabot %} kann Docker-Imagetags in Kubernetes-Manifesten aktualisieren. Füge dem Docker-Element `package-ecosystem` deiner Datei vom Typ _dependabot.yml_ für jedes Verzeichnis, das ein Kubernetes-Manifest enthält, das auf Docker-Imagetags verweist, einen Eintrag hinzu. Kubernetes-Manifeste können YAML-Dateien oder Helm-Diagramme für die Kubernetes-Bereitstellung sein. Informationen zum Konfigurieren der Datei _dependabot.yml_ für `docker` findest du unter `package-ecosystem` in [Konfigurationsoptionen für die Datei „dependabot.yml“](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem).

   {% data variables.product.prodname_dependabot %} unterstützt sowohl öffentliche als auch private Docker-Registrierungen. Eine Liste der unterstützten Registrierungen findest du unter `docker-registry` in [Konfigurationsoptionen für die Datei „dependabot.yml“](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry).
{% endif %}

[2] {% data variables.product.prodname_dependabot %} führt Gradle nicht aus, unterstützt jedoch Updates auf die folgenden Dateien: `build.gradle`, `build.gradle.kts` (für Kotlin-Projekte) sowie auf über die `apply`-Deklaration eingeschlossene Dateien, die `dependencies` im Dateinamen enthalten. Beachte, dass `apply` weder `apply to`, Rekursion noch erweiterte Syntax – z. B. `apply` mit `mapOf` bei Kotlin oder durch Eigenschaften definierte Dateinamen – unterstützt.

[3] {% data variables.product.prodname_dependabot %} führt Maven nicht aus, unterstützt jedoch Updates auf `pom.xml`-Dateien.

[4] {% data variables.product.prodname_dependabot %} führt die NuGet-CLI nicht aus, unterstützt jedoch die meisten Features bis Version 4.8.

{% ifversion dependabot-PEP621-support %} [5] Zusätzlich zur Unterstützung von Updates auf `requirements.txt`-Dateien unterstützt {% data variables.product.prodname_dependabot %} Updates auf `pyproject.toml` Dateien, wenn sie dem PEP 621-Standard entsprechen. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %}[6] {% ifversion ghes = 3.5 %}Die `pub`-Unterstützung befindet sich derzeit in der Betaversion. Bei allen bekannten Einschränkungen sind Änderungen vorbehalten. Beachte, dass {% data variables.product.prodname_dependabot %}:
   - das Aktualisieren von Git-Abhängigkeiten für `pub` nicht unterstützt. 
   - kein Update ausführt, wenn die Version, auf die aktualisiert werden soll, ignoriert wird, auch wenn eine frühere Version verfügbar ist.

   Informationen zum Konfigurieren deiner _dependabot.yml_-Datei für `pub` findest du unter [Aktivieren der Unterstützung für Ökosysteme auf Betaebene](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems).
   {%- else %}{% data variables.product.prodname_dependabot %} kein Update ausgeführt, wenn die Version, für die `pub` ein Update durchzuführen versucht, ignoriert wird. Dies gilt auch dann, wenn eine frühere Version verfügbar ist.{% endif %} {% endif %} 

{% ifversion dependabot-yarn-v3-update %} [7] Dependabot unterstützt anbieterbezogene Abhängigkeiten ab v2.{% endif %}

