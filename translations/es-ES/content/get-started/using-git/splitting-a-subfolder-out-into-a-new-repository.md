---
title: Dividir una subcarpeta en un nuevo repositorio
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository
intro: Puedes convertir una carpeta dentro de un repositorio de Git en un nuevo repositorio.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Splitting a subfolder
ms.openlocfilehash: e99c1c1411b335837b478b32f085596ec4f5fc0f
ms.sourcegitcommit: 46eac8c63f52669996a9c832f2abf04864dc89ba
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172913'
---
Si creas un nuevo clon del repositorio, no perderás ninguno de tus historiales o cambios de Git cuando divides una carpeta en un repositorio separado.

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Cambia el directorio de trabajo actual a la ubicación donde deseas crear tu nuevo repositorio.

4. Clona el repositorio que contiene la subcarpeta.
   ```shell
   $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME
   ```

4. Cambia el directorio de trabajo actual por tu repositorio clonado.
   ```shell
   $ cd REPOSITORY-NAME
   ```

5. Para aplicar un filtro que excluya la subcarpeta del resto de archivos del repositorio, instala [`git-filter-repo`](https://github.com/newren/git-filter-repo) y ejecuta `git filter-repo` con los siguientes argumentos.
   - `FOLDER-NAME`: la carpeta dentro del proyecto en la que quiere crear un repositorio independiente.

   {% windows %}

   {% tip %}

   **Sugerencia:** Los usuarios de Windows deben utilizar `/` para delimitar carpetas.

   {% endtip %}

   {% endwindows %}
  
   ```shell
   $ git filter-repo --path FOLDER-NAME1/ --path FOLDER-NAME2/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/BRANCH-NAME' was rewritten
   ```
   
   El repositorio debería ahora únicamente contener archivos que estuvieron en tu(s) subcarpeta(s)

6. [Cree un repositorio](/articles/creating-a-new-repository/) en {% data variables.product.product_name %}.

7. En la parte superior del nuevo repositorio, en la página Configuración rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar la dirección URL del repositorio remoto.
    
   ![Copia el campo de URL de repositorio remoto](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   {% tip %}

   **Sugerencia:** Para obtener información sobre la diferencia entre las direcciones URL HTTPS y SSH, consulte ["Acerca de los repositorios remotos](/github/getting-started-with-github/about-remote-repositories)".

   {% endtip %}

8. Verifica el nombre remoto existente para tu repositorio. Por ejemplo, `origin` o `upstream` son dos opciones comunes.
   ```shell
   $ git remote -v
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (fetch)
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (push)
   ```

9. Configura una URL remota nueva para tu nuevo repositorio utilizando el nombre remoto existente y la URL del repositorio remoto que copiaste en el paso 7.
   ```shell
   git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git
   ```

10. Verifica que la URL remota haya cambiado con el nombre de tu nuevo repositorio.
    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

11. Sube tus cambios al nuevo repositorio en {% data variables.product.product_name %}.
    ```shell
    git push -u origin BRANCH-NAME
    ```
