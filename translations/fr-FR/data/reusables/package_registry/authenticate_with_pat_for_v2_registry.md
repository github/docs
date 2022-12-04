---
ms.openlocfilehash: 902af6bdbe3c48fe8b5930bdf1041151f343b60b
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113864"
---
Si votre workflow utilise un {% data variables.product.pat_generic %} pour s’authentifier auprès d’un registre, nous vous recommandons vivement de mettre à jour votre workflow pour utiliser `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}Pour obtenir des conseils sur la mise à jour de vos workflows qui s’authentifient auprès d’un registre avec un {% data variables.product.pat_generic %}, consultez « [Mise à niveau d’un workflow qui accède à un registre à l’aide d’un PAT {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token). »{% endif %}

Pour plus d’informations sur le secret `GITHUB_TOKEN`, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow) ».

Pour plus d’informations sur les meilleures pratiques d’utilisation d’un registre dans des actions, consultez « [Durcissement de la sécurité pour GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access) ».
