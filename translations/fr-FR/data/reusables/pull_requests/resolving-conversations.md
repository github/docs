---
ms.openlocfilehash: 1447b6a0f63bcfd6e54954545541808debcb3091
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062369"
---
### Résolution des conversations

Vous pouvez résoudre une conversation dans une demande de tirage si vous avez ouverte celle-ci ou si vous avez un accès en écriture au dépôt où la demande de tirage a été ouverte.

Pour indiquer qu’une conversation sous l’onglet **Fichiers modifiés** est terminée, cliquez sur **Résoudre la conversation**.

![Conversation de demande de tirage avec le bouton Résoudre la conversation](/assets/images/help/pull_requests/conversation-with-resolve-button.png)

Toute la conversation sera réduite et marquée comme résolue, ce qui facilite la recherche de conversations qui doivent encore être traitées.

![Conversation résolue](/assets/images/help/pull_requests/resolved-conversation.png)

Si la suggestion dans un commentaire sort du cadre de votre demande de tirage, vous pouvez ouvrir un nouveau problème qui suit les commentaires et renvoie au commentaire d’origine. Pour plus d’informations, consultez « [Ouverture d’un problème à partir d’un commentaire](/github/managing-your-work-on-github/opening-an-issue-from-a-comment) ».

{% ifversion fpt or ghes or ghae-issue-4382 or ghec %}
#### Découverte et navigation dans les conversations

Vous pouvez découvrir et accéder à toutes les conversations de votre demande de tirage à l’aide du menu **Conversations** affiché en haut de l’onglet **Fichiers modifiés** .

Dans cette vue, vous pouvez voir quelles conversations ne sont pas résolues, résolues et obsolètes. Cela facilite la découverte et la résolution des conversations.

![Affichage du menu des conversations](/assets/images/help/pull_requests/conversations-menu.png) {% endif %}
