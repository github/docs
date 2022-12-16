---
ms.openlocfilehash: 4cf4347384a6be2cadb240a15bc78efea0097799
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192752"
---
Certains registres {% data variables.product.prodname_registry %} prennent en charge les autorisations granulaires. Cela signifie que vous pouvez choisir de permettre aux packages d’appartenir à un utilisateur ou une organisation, ou d’être lié à un dépôt. Pour obtenir la liste des registres qui prennent en charge les autorisations granulaires, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages) ».

Pour les registres prenant en charge les autorisations granulaires, si votre workflow utilise un {% data variables.product.pat_generic %} pour s’authentifier auprès d’un registre, nous vous recommandons vivement de mettre à jour votre workflow pour utiliser `GITHUB_TOKEN`.

Pour obtenir des conseils sur la mise à jour de vos workflows qui s’authentifient auprès d’un registre avec un {% data variables.product.pat_generic %}, consultez « [Mise à niveau d’un workflow qui accède à un registre à l’aide d’un {% data variables.product.pat_generic %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token) ».

Pour plus d’informations sur le secret `GITHUB_TOKEN`, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow) ».

Pour plus d’informations sur les meilleures pratiques d’utilisation d’un registre dans des actions, consultez « [Durcissement de la sécurité pour GitHub Actions](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access) ».
