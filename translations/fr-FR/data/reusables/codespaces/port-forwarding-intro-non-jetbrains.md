---
ms.openlocfilehash: 9523f75cde4298a6e1cd4335127a1dfb5bb342b5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159687"
---
Lorsqu’une application s’exécutant à l’intérieur d’un codespace imprime la sortie vers le terminal qui contient une URL localhost, par exemple `http://localhost:PORT` ou `http://127.0.0.1:PORT`, le port est automatiquement transféré. Si vous utilisez {% data variables.product.prodname_github_codespaces %} dans le navigateur ou dans {% data variables.product.prodname_vscode %}, la chaîne d’URL du terminal est convertie en un lien sur lequel vous pouvez cliquer pour afficher la page web sur votre ordinateur local. Par défaut, {% data variables.product.prodname_github_codespaces %} transfère les ports à l’aide de HTTP.

![Transfert automatique de ports](/assets/images/help/codespaces/automatic-port-forwarding.png)

Vous pouvez également transférer un port manuellement, étiqueter les ports transférés, partager des ports transférés avec des membres de votre organisation, partager des ports transférés publiquement et ajouter des ports transférés à la configuration du codespace.

{% note %}

**Remarque** : {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## Transfert d’un port

Vous pouvez transférer manuellement un port qui n’a pas été transféré automatiquement.