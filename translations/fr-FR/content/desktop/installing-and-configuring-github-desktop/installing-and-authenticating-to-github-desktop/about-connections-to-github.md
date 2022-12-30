---
title: À propos des connexions à GitHub
intro: '{% data variables.product.prodname_desktop %} utilise HTTPS pour échanger de façon sécurisée des données avec {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
  - /desktop/installing-and-configuring-github-desktop/about-connections-to-github
versions:
  fpt: '*'
shortTitle: About connections
ms.openlocfilehash: 94f1e7db78504a115b233f17485f1b12299a1e11
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105289'
---
{% data variables.product.prodname_desktop %} se connecte à {% data variables.product.prodname_dotcom %} quand vous effectuez des opérations de tirage, de poussée, de clonage ou de duplication sur des dépôts distants. Pour vous connecter à {% data variables.product.prodname_dotcom %} à partir de {% data variables.product.prodname_desktop %}, vous devez authentifier votre compte. Pour plus d’informations, consultez « [Authentification auprès de {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github) ».

Une fois que vous vous êtes authentifié auprès de {% data variables.product.prodname_dotcom %}, vous pouvez vous connecter aux dépôts distants avec {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} met en cache vos informations d’identification (nom d’utilisateur et mot de passe ou jeton d’accès personnel), et les utilise pour s’authentifier à chaque connexion au dépôt distant.

{% data variables.product.prodname_desktop %} se connecte à {% data variables.product.prodname_dotcom %} à l’aide du protocole HTTPS. Si vous utilisez {% data variables.product.prodname_desktop %} pour accéder aux dépôts clonés à l’aide de SSH, vous pouvez rencontrer des erreurs. Pour vous connecter à un dépôt cloné à l’aide de SSH, changez les URL du dépôt distant. Pour plus d’informations, consultez « [Gestion des dépôts distants](/github/getting-started-with-github/managing-remote-repositories) ».

## Pour aller plus loin
- « [Clonage et duplication (fork) de dépôts à partir de GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop) »
