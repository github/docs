---
title: Importar un repositorio de Git usando la línea de comando
intro: '{% ifversion fpt %}Si [Importador de GitHub](/articles/importing-a-repository-with-github-importer) no es adecuado para tus propósitos, como cuando tu código existente está hospedado en una red privada, se recomienda importar mediante la línea de comando.{% else %}Importar proyectos de Git mediante la línea de comando es adecuado cuando tu código existente está hospedado en una red privada.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Import repo locally
ms.openlocfilehash: bd3a5e5ffca38250a74851444f6cac4cbb06eb53
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135792'
---
Antes de comenzar, asegúrate de saber lo siguiente:

- Tu nombre de usuario {% data variables.product.product_name %}
- La dirección URL de clonación del repositorio externo, como `https://external-host.com/user/repo.git` o `git://external-host.com/user/repo.git` (quizás con un elemento `user@` delante del nombre de dominio `external-host.com`)

{% tip %}

A los fines de demostración, usaremos lo siguiente:

- Una cuenta externa denominada **extuser**
- Un host de Git externo denominado `https://external-host.com`
- Una cuenta personal de {% data variables.product.product_name %} denominada **ghuser**
- Un repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} denominado **repo.git**

{% endtip %}

1. [Creación de un repositorio en {% data variables.product.product_name %}](/articles/creating-a-new-repository). Importarás tu repositorio de Git externo a este repositorio nuevo.
2. En la línea de comando, haz un clon "en blanco" del repositorio usando la URL del clon externo. Esto crea una copia completa de los datos, pero sin un directorio de trabajo para editar archivos, y asegura una exportación limpia y nueva de todos los datos antiguos.
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # Makes a bare clone of the external repository in a local directory
  ```
3. Sube el repositorio clonado de forma local a {% data variables.product.product_name %} usando la opción "espejo", que asegura que todas las referencias, como ramas y etiquetas, se copien en el repositorio importado.
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}
  ```
4. Elimina el repositorio local temporal.
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
