---
ms.openlocfilehash: 1b3e7f64c7507fde4a126cddaca3c4a97247d967
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108603"
---
Les validations de commits obligatoires ne s’appliquent qu’aux commits effectués avec l’interface web. Pour les commits effectués avec l’interface de ligne de commande Git, l’auteur du commit doit valider le commit avec l’option `--signoff`. Pour plus d’informations, consultez la [documentation Git](https://git-scm.com/docs/git-commit).


Pour déterminer si les validations de commits obligatoires sont activées sur un dépôt auquel vous contribuez, examinez l’en-tête du formulaire de commit au bas du fichier que vous modifiez. Si la validation de commits obligatoire est activée, l’en-tête indique « Valider et commiter les changements ».

![Capture d’écran du formulaire de commit avec la validation obligatoire activée](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

Avant de valider un commit, vous devez vérifier qu’il est conforme aux règles et licences régissant le dépôt où vous effectuez vos commits. Le dépôt peut utiliser un accord de validation, tel que le certificat d’origine du développeur de la fondation Linux. Pour plus d’informations, consultez le [certificat d’origine du développeur](https://developercertificate.org/).

La validation d’un commit et la signature d’un commit sont deux choses différentes. Pour plus d’informations sur la signature d’un commit, consultez « [À propos de la vérification des signatures de commit](/authentication/managing-commit-signature-verification/about-commit-signature-verification) ».
