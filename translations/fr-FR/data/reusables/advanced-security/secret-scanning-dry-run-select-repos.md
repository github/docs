---
ms.openlocfilehash: 55be1692eaf41dbee91aa298eeb9a969e5b91b42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147549075"
---
{%- ifversion custom-pattern-dry-run-ga %}
1. Sélectionnez les référentiels dans lesquels vous souhaitez effectuer le test.
   * Pour effectuer le test dans l’ensemble de l’organisation, sélectionnez **Tous les référentiels de l’organisation**.
   ![Capture d’écran montrant les référentiels sélectionnés pour le test](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-all-repos.png)
   * Pour spécifier les référentiels dans lesquels vous souhaitez effectuer le test, sélectionnez **Référentiels sélectionnés**, puis recherchez et sélectionnez jusqu’à 10 référentiels.
   ![Capture d’écran montrant les référentiels sélectionnés pour le test](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repos-option.png)
1. Lorsque vous êtes prêt à tester votre nouveau modèle personnalisé, cliquez sur **Exécuter**.
{%- else %}
1. Recherchez et sélectionnez jusqu’à 10 référentiels dans lesquels vous souhaitez effectuer le test.
   ![Capture d’écran montrant les référentiels sélectionnés pour le test](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repo.png)
1. Lorsque vous êtes prêt à tester votre nouveau modèle personnalisé, cliquez sur **Test**.
{%- endif %}
