---
ms.openlocfilehash: 714bd89ad6e55900871cc7622d922495b8c09a9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114410"
---
### Ejecución en un sistema operativo diferente

El flujo de trabajo de inicio configura trabajos para que se ejecuten en Linux, mediante los ejecutores `ubuntu-latest` hospedados en {% data variables.product.prodname_dotcom %}. Puede cambiar la clave `runs-on` para ejecutar los trabajos en otro sistema operativo. Por ejemplo, puedes utilizar los ejecutores de Windows hospedados en {% data variables.product.prodname_dotcom %}.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

O puedes utilizar los ejecutores de macOS hospedados en {% data variables.product.prodname_dotcom %}.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

También puedes ejecutar jobs en contenedores de Docker, o puedes proporcionar un ejecutor auto-hospedado que se ejecute en tu propia infraestructura. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)".
