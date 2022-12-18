---
ms.openlocfilehash: 714bd89ad6e55900871cc7622d922495b8c09a9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145103801"
---
### Exécution sur un autre système d’exploitation

Le workflow de démarrage configure les travaux à exécuter sur Linux, à l’aide d’exécuteurs `ubuntu-latest` hébergés par {% data variables.product.prodname_dotcom %}. Vous pouvez modifier la clé `runs-on` pour exécuter vos travaux sur un autre système d’exploitation. Par exemple, vous pouvez utiliser des exécuteurs Windows hébergés par {% data variables.product.prodname_dotcom %}.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

Vous pouvez également exécuter sur les exécuteurs de données macOS hébergés par {% data variables.product.prodname_dotcom %}.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

Vous pouvez également exécuter des travaux dans des conteneurs Docker, ou vous pouvez fournir un exécuteur auto-hébergé qui s’exécute sur votre propre infrastructure. Pour plus d’informations, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) ».
