---
title: Résolution des problèmes de transfert de port pour Codespaces
intro: Étapes de dépannage pour les problèmes courants relatifs au transfert de port.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Port forwarding
ms.openlocfilehash: 3b4a8af53b7c4ab28f30ed3c8b4b73c45c6a47e6
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145086642"
---
Quand une application s’exécutant à l’intérieur d’un codespace génère un port vers la console, {% data variables.product.prodname_codespaces %} détecte le modèle d’URL localhost et transfère automatiquement le port. Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».

Si un port n’est pas automatiquement transféré, vous pouvez le transférer manuellement. Pour plus d’informations, consultez « [Transfert d’un port](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port) ».

Si le transfert de port est configuré, vérifiez ce qui suit :

- Utilisez le toast de notification, ou cliquez sur l’URL dans Terminal pour ouvrir le port transféré. Par exemple, la saisie de `localhost:8000` sur votre ordinateur local ne fonctionnera pas si vous êtes connecté au codespace via le navigateur.
- Veillez à vérifier que votre application est toujours en cours d’exécution à partir de votre codespace. Si votre codespace s’est arrêté après une période d’inactivité, vous devez veiller à redémarrer votre application une fois que le codespace a redémarré.

En règle générale, vous pouvez rendre un port transféré accessible publiquement, ou au sein de l’organisation propriétaire d’un dépôt. Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ». Si une ou les deux options de visibilité publique ou de l’organisation ne sont pas disponible, cela indique qu’une stratégie au niveau de l’organisation a été configurée. Pour plus d’informations, consultez « [Restriction de la visibilité des ports transférés](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports) ».
