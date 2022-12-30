---
ms.openlocfilehash: 1b3e7f64c7507fde4a126cddaca3c4a97247d967
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107968"
---
As aprovações de commit obrigatórias só se aplicam a commits feitos por meio da interface da Web. Paro commits feitos por meio da interface de linha de comando Git, o autor do commit precisa aprovar o commit usando a opção `--signoff`. Para obter mais informações, confira a [documentação do Git](https://git-scm.com/docs/git-commit).


Você pode determinar se um repositório com o qual você está contribuindo tem as aprovações de commit obrigatórias habilitadas verificando o cabeçalho do formulário de commit na parte inferior do arquivo que você está editando. Depois que a aprovação de commit obrigatória tiver sido habilitada, aparecerá no cabeçalho "Aprovar e fazer commit de alterações".

![Captura de tela do formulário de commit de com a aprovação obrigatória habilitada](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

Antes de aprovar um commit, você deve garantir que seu commit esteja em conformidade com as regras e o licenciamento que regem o repositório para o qual você está fazendo commit. O repositório pode usar um contrato de aprovação, como o Certificado de Origem do Desenvolvedor da Linux Foundation. Para obter mais informações, confira o [Certificado de Origem do Desenvolvedor](https://developercertificate.org/).

A aprovação de um commit é diferente da assinatura de um commit. Para obter mais informações sobre como assinar um commit, confira "[Sobre a verificação de assinatura de commit](/authentication/managing-commit-signature-verification/about-commit-signature-verification)".
