---
ms.openlocfilehash: dcca3d0170e92663336865f43ddc4e7ac5204702
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147060313"
---
Le secret `GITHUB_TOKEN` a la valeur d’un jeton d’accès pour le dépôt chaque fois qu’un travail d’un workflow démarre. Vous devez définir les autorisations de ce jeton d’accès dans le fichier de workflow afin d’octroyer l’accès en lecture pour l’étendue `contents` et l’accès en écriture pour l’étendue `packages`. Pour plus d’informations, consultez « [Authentification avec GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) ».
