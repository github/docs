---
title: Utilisation de Codespaces pour les demandes de tirage
shortTitle: Pull requests
intro: Vous pouvez utiliser {% data variables.product.prodname_codespaces %} dans votre workflow de développement pour créer des demandes de tirage, passer en revue les demandes de tirage et traiter les commentaires de révision.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Visual Studio Code
- Developer
ms.openlocfilehash: f3c0a007f1f9d53796e5969102bc8b6622702a96
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145109294"
---
## <a name="about-pull-requests-in--data-variablesproductprodname_codespaces-"></a>À propos des demandes de tirage dans {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} vous offre un grand nombre des fonctionnalités que vous devrez peut-être utiliser avec les demandes de tirage :

- [Créer une demande de tirage](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) – À l’aide des commandes Terminal et Git ou de la vue Contrôle de code source, vous pouvez créer des demandes de tirage comme vous le feriez sur {% data variables.product.prodname_dotcom_the_website %}. Si le dépôt utilise un modèle de demande de tirage, vous pouvez l’utiliser dans la vue Contrôle de code source.
- [Ouvrir une demande de tirage](#opening-a-pull-request-in-codespaces) – Vous pouvez ouvrir une demande de tirage existante dans un espace de code, à condition d’avoir accès à la branche qui est fusionnée.
- [Passer en revue une demande de tirage](#reviewing-a-pull-request-in-codespaces) – Une fois que vous avez ouvert une demande de tirage dans un espace de code, vous pouvez utiliser la vue « Demande de tirage GitHub » pour ajouter des commentaires de révision et approuver les demandes de tirage. Vous pouvez également utiliser {% data variables.product.prodname_codespaces %} pour [afficher les commentaires de révision](#view-comments-from-a-review-in-codespaces).

## <a name="opening-a-pull-request-in--data-variablesproductprodname_codespaces-"></a>Ouverture d’une demande de tirage dans {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

2. Dans la liste des demandes de tirage, cliquez sur celle que vous souhaitez ouvrir dans {% data variables.product.prodname_codespaces %}.
3. Sur le côté droit de votre écran, cliquez sur **{% octicon "code" aria-label="The code icon" %} Code**. 
4. Dans l’onglet {% data variables.product.prodname_codespaces %}, cliquez sur **Créer un espace de code sur BRANCHE**.
  ![Option d’ouverture d’une demande de tirage dans un espace de code](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## <a name="reviewing-a-pull-request-in--data-variablesproductprodname_codespaces-"></a>Examen d’une demande de tirage dans {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.review-pr %}

Pour plus d’informations sur l’examen d’une demande de tirage, consultez « [Révision des changements proposés dans une demande de tirage](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) ».

## <a name="view-comments-from-a-review-in--data-variablesproductprodname_codespaces-"></a>Afficher les commentaires d’une révision dans {% data variables.product.prodname_codespaces %}

Une fois que vous avez reçu des commentaires sur une demande de tirage, vous pouvez [l’ouvrir dans un espace de code](#opening-a-pull-request-in-codespaces) pour afficher les [commentaires de révision](#reviewing-a-pull-request-in-codespaces). À partir de là, vous pouvez répondre aux commentaires, ajouter des réactions ou ignorer la révision. 

  ![Option d’ouverture d’une demande de tirage dans un espace de code](/assets/images/help/codespaces/incorporating-codespaces.png)
