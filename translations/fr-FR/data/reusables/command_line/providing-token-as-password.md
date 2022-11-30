---
ms.openlocfilehash: 680371419da47612c4035e166640fa3102ba0cda
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145133615"
---
Une fois que vous avez un jeton, vous pouvez l’entrer à la place de votre mot de passe quand vous effectuez des opérations Git sur HTTPS.

Par exemple, sur la ligne de commande, vous pouvez entrer ceci :

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>repo</em>.git
Username: <em>your_username</em>
Password: <em>your_token</em>
```
