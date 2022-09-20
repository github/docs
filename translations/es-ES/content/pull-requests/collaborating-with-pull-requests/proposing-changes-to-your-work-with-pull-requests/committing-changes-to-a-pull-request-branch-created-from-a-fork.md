---
title: Confirmar cambios a una rama de solicitud de extracción desde una bifurcación
intro: Puedes confirmar cambios en una rama de solicitud de extracción que se creó desde una bifurcación de tu repositorio con permiso del creador de la solicitud de extracción.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Commit to PR branch from fork
ms.openlocfilehash: 123775ecbcc199382fe2082f22ad04db21fb9661
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137746'
---
Solo puedes realizar confirmaciones en las ramas de la solicitud de extracción que:
- están abiertas en un repositorio al que tienes acceso de escritura y que se crearon a partir de una bifurcación de ese repositorio
- se encuentren en una bifurcación propiedad del usuario
- tienes permiso otorgado por parte del creador de la solicitud de extracción
- no tengan [restricciones de rama](/github/administering-a-repository/about-protected-branches#restrict-who-can-push-to-matching-branches) que te impidan la confirmación

Solo el usuario que creó la solicitud de extracción puede darte permiso para subir confirmaciones de cambios en la bifurcación de la cual es dueño. Para más información, vea "[Permiso para realizar cambios en una rama de solicitud de incorporación de cambios creada a partir de una bifurcación](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

{% note %}

**Nota:** También puedes realizar confirmaciones a una rama de solicitud de incorporación de cambios desde una bifurcación de tu repositorio a través de {% data variables.product.product_location %} al crear tu propia copia (o bifurcación) de la bifurcación de tu repositorio y confirmar los cambios en la misma rama de encabezado en la que se crearon los cambios de la solicitud de incorporación de cambios original. Para ver algunas instrucciones generales, consulta "[Crear una solicitud de incorporación de cambios desde una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)".

{% endnote %}

1. En {% data variables.product.product_name %}, desplázate hasta la página principal de la bifurcación (o copia de tu repositorio) donde se creó la rama de la solicitud de extracción.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% tip %}

 **Sugerencia:** Si prefieres clonar la bifurcación mediante {% data variables.product.prodname_desktop %}, consulta "[Clonar un repositorio en {% data variables.product.prodname_desktop %}](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop)".

 {% endtip %}
4. Cambia el directorio de trabajo actual a la ubicación donde deseas descargar el directorio clonado.
  ```shell
  $ cd open-source-projects
  ```
5. Escribe `git clone` y pega la dirección URL que has copiado en el paso 3.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. Presione **ENTRAR**. Se creará tu clon local.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **Sugerencia:** El mensaje de error "fatal: destination path 'REPOSITORY-NAME' already exists and is not an empty directory" significa que tu directorio de trabajo actual ya contiene un repositorio con el mismo nombre. Para resolver el error, debes clonar la bifurcación en un directorio diferente.

 {% endtip %}
7. Desplázate hasta el nuevo repositorio clonado.
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. Alterna las ramas para comparar la rama de la solicitud de extracción donde se realizaron los cambios originales. Si te desplazas hasta la solicitud de extracción original, verás la rama de comparación en la parte superior de la solicitud de extracción.
![compare-branch-example](/assets/images/help/pull_requests/compare-branch-example.png) En este ejemplo, la rama de comparación es `test-branch`:
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **Sugerencia:** Para obtener más información sobre las ramas de solicitudes de incorporación de cambios, con ejemplos incluidos, consulta "[Creación de una solicitud de incorporación de cambios](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository)".

 {% endtip %}
8. En este punto, puedes hacer lo que desees con esta rama. Puedes subir confirmaciones nuevas a ella, ejecutar algunas pruebas locales, o fusionar otras ramas en esta rama. Realiza las modificaciones que desees.
9. Una vez que confirmas tus cambios en la rama de encabezado de la solicitud de extracción, puedes subir los cambios a la solicitud original directamente. En este ejemplo, la rama de encabezado es `test-branch`:
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

Tus nuevas confirmaciones se reflejarán en la solicitud de extracción original en {% data variables.product.product_location %}.

## Lecturas adicionales

- "[Acerca de las bifurcaciones](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
