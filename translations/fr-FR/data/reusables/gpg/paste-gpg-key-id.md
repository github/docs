---
ms.openlocfilehash: 36346b397ec99040cea0b0ebd45a65d22352c865
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147614198"
---
1. Pour définir votre clé de signature primaire GPG dans Git, collez le texte ci-dessous en spécifiant l’ID de clé primaire GPG que vous souhaitez utiliser. Dans cet exemple, l’ID de clé GPG est `3AA5C34371567BD2` :
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```
   
   Sinon, lors de la définition d’une sous-clé, incluez le suffixe `!`. Dans cet exemple, l’ID de sous-clé GPG est `4BB6D45482678BE3` :
   ```shell
   $ git config --global user.signingkey <em>4BB6D45482678BE3</em>!
   ```
