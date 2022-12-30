---
ms.openlocfilehash: 50e7f623d6585c8697d0b1c6c827a855df26c571
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145122009"
---
1. Crea un token de acceso personal nuevo (PAT) con los alcances adecuados para las tareas que quieres realizar. Si tu organización requiere SSO, debes hablitarlo para tu token nuevo.
  {% warning %}

  **Nota:** De manera predeterminada, cuando selecciona el ámbito `write:packages` de tu token de acceso personal (PAT) en la interfaz de usuario, también se seleccionará el ámbito `repo`. El ámbito `repo` ofrece un acceso amplio e innecesario, el cual te recomendamos no utilices para los flujos de trabajo de Acciones de GitHub en particular. Si quieres obtener más información, consulta [Fortalecimiento de seguridad para GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access). Como solución alternativa, puedes seleccionar solo el ámbito `write:packages` de tu PAT en la interfaz de usuario con esta URL: `https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages`. 

  {% endwarning %}

    - Selecciona el ámbito `read:packages` para descargar imágenes de contenedor y leer sus metadatos.
    - Selecciona el ámbito `write:packages` para descargar y cargar imágenes de contenedor, así como para leer y escribir sus metadatos.
    - Selecciona el ámbito `delete:packages` para eliminar imágenes de contenedor.

  Para obtener más información, consulta [Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

2. Guarda tu PAT. Te recomendamos guardar tu PAT como una variable de ambiente.
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. Utilizando el CLI de tu tipo de contenedor, inicia sesión en el servicio de {% data variables.product.prodname_container_registry %} en `{% data reusables.package_registry.container-registry-hostname %}`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
