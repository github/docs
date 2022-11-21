---
ms.openlocfilehash: 74a6541cfbd0ad87d45a316cb46da45c227c9925
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: "145133479"
---
Lors de l’exécution de mises à jour de sécurité ou de version, certains écosystèmes doivent être capables de résoudre toutes les dépendances de leur source pour vérifier que les mises à jour ont réussi. Si vos fichiers manifeste ou de verrouillage contiennent des dépendances privées, {% data variables.product.prodname_dependabot %} doit être capable d’accéder à l’emplacement auquel ces dépendances sont hébergées. Les propriétaires de l’organisation peuvent octroyer à {% data variables.product.prodname_dependabot %} un accès aux dépôts privés contenant des dépendances pour un projet au sein de cette même organisation. Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies) ». Vous pouvez configurer un accès aux registres privés dans le fichier de configuration _dependabot.yml_ d’un dépôt. Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries) ».
