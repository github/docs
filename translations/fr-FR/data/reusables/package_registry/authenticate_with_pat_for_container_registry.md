---
ms.openlocfilehash: 0957d7c909250bfccb51681eac05e3f3196bb6d5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145107597"
---
{% ifversion fpt or ghec or ghes > 3.4 %}

Pour vous authentifier auprès du {% data variables.product.prodname_container_registry %} dans un workflow {% data variables.product.prodname_actions %}, utilisez `GITHUB_TOKEN` pour avoir la meilleure sécurité et la meilleure expérience. Si votre workflow utilise un jeton d’accès personnel (PAT) pour l’authentification auprès de `{% data reusables.package_registry.container-registry-hostname %}`, nous vous recommandons vivement de mettre à jour votre workflow pour utiliser `GITHUB_TOKEN`.

{% ifversion fpt or ghec %}Pour obtenir des conseils sur la mise à jour de vos workflows qui s’authentifient auprès de `{% data reusables.package_registry.container-registry-hostname %}` avec un jeton d’accès personnel, consultez « [Mise à niveau d’un workflow qui accède à `ghcr.io`](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-ghcrio) ».{% endif %}

Pour plus d’informations sur `GITHUB_TOKEN`, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow) ».

Si vous utilisez le {% data variables.product.prodname_container_registry %} dans les actions, suivez nos bonnes pratiques de sécurité dans « [Durcissement de la sécurité pour GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access) ».

{% endif %}
