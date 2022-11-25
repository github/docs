---
title: Fractionnement d’un sous-dossier en un nouveau dépôt
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository
intro: Vous pouvez convertir un dossier d’un dépôt Git en tout nouveau dépôt.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Splitting a subfolder
ms.openlocfilehash: e99c1c1411b335837b478b32f085596ec4f5fc0f
ms.sourcegitcommit: 46eac8c63f52669996a9c832f2abf04864dc89ba
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172908'
---
Si vous créez un clone du dépôt, vous ne perdez pas vos modifications ni historique Git quand vous fractionnez un dossier en un dépôt distinct.

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Remplacez le répertoire de travail actuel par l’emplacement où vous souhaitez créer votre dépôt.

4. Clonez le dépôt qui contient le sous-dossier.
   ```shell
   $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME
   ```

4. Remplacez le répertoire de travail actuel par votre dépôt cloné.
   ```shell
   $ cd REPOSITORY-NAME
   ```

5. Pour filtrer le sous-dossier par rapport au reste des fichiers du référentiel, installez [`git-filter-repo`](https://github.com/newren/git-filter-repo), puis exécutez `git filter-repo` avec les arguments suivants.
   - `FOLDER-NAME` : dossier dans votre projet dans lequel vous souhaitez créer un dépôt distinct.

   {% windows %}

   {% tip %}

   **Conseil :** Les utilisateurs Windows doivent utiliser `/` pour délimiter les dossiers.

   {% endtip %}

   {% endwindows %}
  
   ```shell
   $ git filter-repo --path FOLDER-NAME1/ --path FOLDER-NAME2/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/BRANCH-NAME' was rewritten
   ```
   
   Le dépôt ne doit maintenant contenir que les fichiers qui se trouvaient dans vos sous-dossiers.

6. [Créez un dépôt](/articles/creating-a-new-repository/) sur {% data variables.product.product_name %}.

7. En haut de votre nouveau référentiel dans la page Configuration rapide de l’instance de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, cliquez sur {% octicon "clippy" aria-label="The copy to clipboard icon" %} pour copier l’URL du référentiel distant.
    
   ![Champ Copier l’URL du dépôt distant](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   {% tip %}

   **Conseil :** Pour plus d’informations sur la différence entre les URL HTTPS et SSH, consultez « [À propos des dépôts distants](/github/getting-started-with-github/about-remote-repositories) ».

   {% endtip %}

8. Vérifiez le nom de dépôt distant existant pour votre dépôt. Par exemple, `origin` ou `upstream` sont deux choix courants.
   ```shell
   $ git remote -v
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (fetch)
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (push)
   ```

9. Configurez une nouvelle URL distante pour votre nouveau dépôt à l’aide du nom de dépôt distant existant et de l’URL de dépôt distant que vous avez copiée à l’étape 7.
   ```shell
   git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git
   ```

10. Vérifiez que l’URL distante a changé avec le nom de votre nouveau dépôt.
    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

11. Poussez vos modifications vers le nouveau dépôt sur {% data variables.product.product_name %}.
    ```shell
    git push -u origin BRANCH-NAME
    ```
