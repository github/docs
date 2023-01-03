---
ms.openlocfilehash: f37c93394be7f73c417b5cd040696b453c82e42d
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/17/2022
ms.locfileid: "148169239"
---
Pour chaque gestionnaire de package, le tableau suivant montre ce qui suit :
- Valeur YAML à utiliser dans le fichier *dependabot.yml*
- Versions prises en charge du gestionnaire de package
- Indique si les dépendances des référentiels et registres privés {% data variables.product.prodname_dotcom %} sont pris en charge
- Indique si les dépendances fournisseur sont prises en charge

Gestionnaire de package | Valeur YAML      | Versions prises en charge | Référentiels privés | Registres privés | Vendoring
---------------|------------------|------------------|:---:|:---:|:---:
Bundler        | `bundler`        | v1, v2           | | **✓** | **✓** |
Cargo          | `cargo`          | v1               | **✓** | **✓** | |
Composer       | `composer`       | v1, v2           | **✓** | **✓** | |
Docker {% ifversion dependabot-version-updates-enhanced-docker-support %}<sup>[1]</sup>{% endif %}         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
sous-module git  | `gitsubmodule`   | N/A (aucune version) | **✓** | **✓** | |
GitHub Actions | `github-actions` | N/A (aucune version) | **✓** | **✓** | |
Modules Go     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | N/A (aucune version)<sup>[2]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | N/A (aucune version)<sup>[3]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6, v7, v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[4]</sup> | **✓** | **✓** | |
pip{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}          | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}   | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
bistrot            | `pub`            | v2 <sup>[6]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13, <= 1.2.x  | **✓** | **✓** | |
{% ifversion dependabot-yarn-v3-update %}yarn           | `npm`            | v1, v2, v3       | **✓** | **✓** | **✓**<sup>[7]</sup> |{% else %}yarn           | `npm`            | v1               | **✓** | **✓** |  |
{% endif %}

{% tip %}

**Conseil :** pour les gestionnaires de package tels que `pipenv` et `poetry`, vous devez utiliser la valeur YAML `pip`. Par exemple, si vous utilisez `poetry` pour gérer vos dépendances Python et que vous souhaitez que {% data variables.product.prodname_dependabot %} surveille votre fichier manifeste de dépendance pour les nouvelles versions, utilisez `package-ecosystem: "pip"` dans votre fichier *dependabot.yml*.

{% endtip %}

{% ifversion dependabot-version-updates-enhanced-docker-support %} [1] {% data variables.product.prodname_dependabot %} peut mettre à jour les étiquettes d’images Docker dans les manifestes Kubernetes. Ajoutez une entrée à l’élément Docker `package-ecosystem` de votre fichier _dependabot.yml_ pour chaque répertoire contenant un manifeste Kubernetes qui fait référence à des étiquettes d’images Docker. Les manifestes Kubernetes peuvent être des fichiers YAML de déploiement Kubernetes ou des graphiques Helm. Pour plus d’informations sur la configuration de votre fichier _dependabot.yml_ pour `docker`, consultez « `package-ecosystem` » dans « [Options de configuration pour le fichier dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem) ».

   {% data variables.product.prodname_dependabot %} prend en charge les registres Docker publics et privés. Pour obtenir la liste des registres pris en charge, consultez « `docker-registry` » dans « [Options de configuration pour le fichier dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry) ».
{% endif %}

[2] {% data variables.product.prodname_dependabot %} n’exécute pas Gradle mais prend en charge les mises à jour des fichiers suivants : `build.gradle`, `build.gradle.kts` (pour les projets Kotlin) et les fichiers inclus via la déclaration `apply` avec `dependencies` dans le nom de fichier. Notez que `apply` ne prend pas en charge `apply to`, la récursivité ou les syntaxes avancées (par exemple, les noms de fichier `apply` avec `mapOf` Kotlin définis par propriété).

[3] {% data variables.product.prodname_dependabot %} n’exécute pas Maven, mais prend en charge les mises à jour des fichiers `pom.xml`.

[4] {% data variables.product.prodname_dependabot %} n’exécute pas l’interface CLI NuGet, mais prend en charge la plupart des fonctionnalités jusqu’à la version 4.8.

{% ifversion dependabot-PEP621-support %} [5] En plus de prendre en charge les mises à jour des fichiers `requirements.txt`, {% data variables.product.prodname_dependabot %} prend en charge les mises à jour des fichiers `pyproject.toml` s’ils respectent le standard PEP 621. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} [6] {% ifversion ghes = 3.5 %}La prise en charge de `pub` est actuellement en version bêta. Toutes les limitations connues sont sujettes à modification. Notez que {% data variables.product.prodname_dependabot %} :
   - Ne prend pas en charge la mise à jour des dépendances Git pour `pub`. 
   - N’effectue pas de mise à jour lorsque la version qu’elle tente de mettre à jour est ignorée, même si une version antérieure est disponible.

   Pour plus d’informations sur la configuration de votre fichier _dependabot.yml_ pour `pub`, consultez « [Activation de la prise en charge des écosystèmes au niveau bêta](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems) ».
   {%- else %}{% data variables.product.prodname_dependabot %} n’effectue pas de mise à jour pour `pub` quand la version vers laquelle il tente d’opérer la mise à jour est ignorée, même si une version antérieure est disponible.{% endif %} {% endif %} 

{% ifversion dependabot-yarn-v3-update %} [7] Dependabot prend en charge les dépendances fournisseur pour les versions v2 et ultérieures.{% endif %}

