---
ms.openlocfilehash: 52ba84fdbfdaa4150aff2b1e1bba858bf1ab7d41
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145102250"
---
1. Passez en revue le fichier CSV (séparé par des virgules) dans `/PATH/REPO-NAME.git/git-import/raw-authors.csv`. Il doit contenir ces colonnes :
    - `ID` : l’auteur tel qu’il est stocké dans le référentiel d’origine, suivi d’un identificateur unique
    - `NAME` : l’auteur tel qu’il est stocké dans le référentiel d’origine

  Pour mapper les auteurs du référentiel d’origine à une adresse e-mail et un nom, créez un fichier CSV avec les colonnes `ID,(ignored),GIT_EMAIL,GIT_NAME`, qui remplace les informations de l’auteur pour tout ce qui contient « ID » par « GIT_EMAIL » et « GIT_NAME ».

  #### Exemple :

   - ID d’auteur d’origine : `octocat@111111-2222-3333-4444-55555555555`
   - Nouvelle adresse e-mail : `octocat@github.com`
   - Nouveau nom : `The Octocat`

   Pour mapper l’auteur d’origine au nouvel utilisateur Git, le fichier CSV doit inclure la ligne :

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
