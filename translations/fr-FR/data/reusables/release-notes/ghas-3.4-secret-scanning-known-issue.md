---
ms.openlocfilehash: 432a33a54f6568b889f8089173f3787a960410fe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147763739"
---
{% ifversion ghes < 3.5 %}

Dans certains cas, les clients GitHub Advanced Security qui effectuent une mise à niveau vers GitHub Enterprise Server 3.5 ou version ultérieure peuvent remarquer que les alertes de l’analyse secrète sont manquantes dans l’interface utilisateur web et l’API REST. Pour vous assurer que les alertes restent visibles, n’ignorez pas la version 3.4 lorsque vous effectuez une mise à niveau d’une version antérieure vers la version 3.5 ou ultérieure. Un correctif est disponible dans les versions de patch [3.5.5](/enterprise-server@3.5/admin/release-notes#3.5.5) et [3.6.1](/enterprise-server@3.6/admin/release-notes#3.6.1).

Pour planifier une mise à niveau via la version 3.4, consultez [l’Assistant Mise à niveau](https://support.github.com/enterprise/server-upgrade). [Mise à jour : 01/09/2022]

{% elsif ghes = 3.5 or ghes = 3.6 %}

Dans certains cas, les clients GitHub Advanced Security qui effectuent une mise à niveau vers GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} peuvent remarquer que les alertes issues de l’analyse des secrets sont absentes de l’interface utilisateur web et l’API REST. Pour vous assurer que les alertes restent visibles, n’ignorez pas la version 3.4 lorsque vous effectuez une mise à niveau vers la dernière version. Pour planifier une mise à niveau via la version 3.4, consultez [l’Assistant Mise à niveau](https://support.github.com/enterprise/server-upgrade).

- Pour afficher les alertes manquantes pour tous les référentiels appartenant à une organisation, les propriétaires d’une organisation peuvent accéder aux paramètres **Sécurité et analyse du code** de l’organisation, puis cliquer sur **Activer tout** pour l’analyse secrète. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories) ».
- Pour afficher les alertes manquantes pour un référentiel individuel, les personnes disposant d’un accès administrateur au référentiel peuvent désactiver, puis activer l’analyse secrète pour le référentiel. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) ».

Un correctif est disponible dans la version de patch {% ifversion ghes = 3.5 %}[3.5.5](/admin/release-notes#3.5.5){% elsif ghes = 3.6 %}[3.6.1](/admin/release-notes#3.6.1){% endif %}. [Mise à jour : 01/09/2022]

{% endif %}
