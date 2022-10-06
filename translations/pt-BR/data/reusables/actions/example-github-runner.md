---
ms.openlocfilehash: 714bd89ad6e55900871cc7622d922495b8c09a9d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145094401"
---
### Executando em um sistema operacional diferente

O fluxo de trabalho inicial configura os trabalhos a serem executados no Linux usando os executores `ubuntu-latest` hospedados no {% data variables.product.prodname_dotcom %}. Você pode alterar a chave `runs-on` para executar seus trabalhos em outro sistema operacional. Por exemplo, você pode usar os {% data variables.product.prodname_dotcom %}-executores Windows hospedados.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

Ou, você pode executar nos {% data variables.product.prodname_dotcom %}-executores do macOS.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

Você também pode executar tarefas em contêineres Docker, ou você pode fornecer um executor auto-hospedado que funciona na sua própria infraestrutura. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)".
