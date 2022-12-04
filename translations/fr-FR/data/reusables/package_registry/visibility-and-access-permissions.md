---
ms.openlocfilehash: 42d6bbb15a1f147d9eea0c908b17ec30790a54c3
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: "145107485"
---
Si vous disposez d’autorisations d’administrateur sur une image conteneur, vous pouvez définir les autorisations d’accès pour celle-ci sur privée ou publique. Les images publiques autorisent l’accès anonyme et peuvent être tirées sans authentification ni connexion via l’interface CLI.

En tant qu’administrateur, vous pouvez également accorder des autorisations d’accès sur une image conteneur qui sont distinctes des autorisations que vous avez définies aux niveaux de l’organisation et du dépôt.

Pour des images conteneur publiées et détenues par un compte personnel, vous pouvez donner un rôle d’accès à tout le monde. Pour des images conteneur publiées et détenues par une organisation, vous pouvez donner un rôle d’accès à toute personne ou équipe de l’organisation.

| Autorisation | Description de l’accès |
|------------|--------------------|
| Lire       | Peut télécharger le package. <br> Peut lire les métadonnées du package. |
| Write      | Peut charger et télécharger ce package. <br> Peut lire et écrire des métadonnées de package. |
| Admin      | Peut charger, télécharger, supprimer et gérer ce package. <br> Peut lire et écrire des métadonnées de package. <br> Peut accorder des autorisations sur le package.
