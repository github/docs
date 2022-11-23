---
title: Résolution des problèmes de transfert de port pour GitHub Codespaces
intro: Étapes de dépannage pour les problèmes courants relatifs au transfert de port.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Port forwarding
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-port-forwarding-for-codespaces
ms.openlocfilehash: 828150ca05c18cb1106f5a3c883331785b6bce2e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159148'
---
Quand une application s’exécutant à l’intérieur d’un codespace génère un port vers la console, {% data variables.product.prodname_github_codespaces %} détecte le modèle d’URL localhost et transfère automatiquement le port. Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».

Si un port n’est pas automatiquement transféré, vous pouvez le transférer manuellement. Pour plus d’informations, consultez « [Transfert d’un port](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port) ».

Si le transfert de port est configuré, vérifiez ce qui suit :

- Utilisez le lien dans le message de notification « toast » qui s’affiche en bas à droite de {% data variables.product.prodname_vscode_shortname %} ou cliquez sur l’URL dans Terminal pour ouvrir le port transféré. Par exemple, la saisie de `localhost:8000` sur votre ordinateur local ne fonctionnera pas si vous êtes connecté au codespace via le navigateur.
- Veillez à vérifier que votre application est toujours en cours d’exécution à partir de votre codespace. Si votre codespace s’est arrêté après une période d’inactivité, vous devez veiller à redémarrer votre application une fois que le codespace a redémarré.

En règle générale, vous pouvez rendre un port transféré accessible publiquement, ou au sein de l’organisation propriétaire d’un dépôt. Pour plus d’informations, consultez « [Transfert de ports dans votre codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ». Si une ou les deux options de visibilité publique ou de l’organisation ne sont pas disponible, cela indique qu’une stratégie au niveau de l’organisation a été configurée. Pour plus d’informations, consultez « [Restriction de la visibilité des ports transférés](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports) ».

{% data reusables.codespaces.forwarded-ports-environment-variable %}
