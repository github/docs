---
title: Efetuar push de um branch bloqueado pela proteção por push
intro: 'O recurso de proteção por push de {% data variables.product.prodname_secret_scanning %} protege proativamente contra segredos vazados em seus repositórios. Você pode resolver pushes bloqueados e, depois que o segredo detectado for removido, poderá enviar alterações por push para o branch de trabalho pela linha de comando ou interface do usuário da Web.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
ms.openlocfilehash: debabaab43bae680f43cdbe2bd6be6826b5748de
ms.sourcegitcommit: 96af28d597b411664d9bfd106dfa1e6b90788f7a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/16/2022
ms.locfileid: '147578685'
---
## <a name="about-push-protection-for--data-variablesproductprodname_secret_scanning-"></a>Sobre a proteção por push para {% data variables.product.prodname_secret_scanning %}

O recurso de proteção por push de {% data variables.product.prodname_secret_scanning %} ajuda a evitar vazamentos de segurança examinando os segredos antes de enviar alterações por push para o repositório. {% data reusables.secret-scanning.push-protection-overview %} Para obter informações sobre segredos e provedores de serviços compatíveis com a proteção por push, confira "[Padrões de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)".

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**Dica** Se o {% data variables.product.prodname_dotcom %} bloquear um segredo que você acredita ser seguro para push, permita o segredo e especifique o motivo pelo qual ele deve ser permitido. Para obter mais informações sobre como ignorar a proteção por push para um segredo, confira "[Permitir que um segredo bloqueado seja enviado por push](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed)" e "[Ignorar a proteção por push para um segredo](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)" para a linha de comando e a interface do usuário da Web, respectivamente. 

{% endtip %}

## <a name="resolving-a-blocked-push-on-the-command-line"></a>Resolver um push bloqueado na linha de comando

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

Se o segredo bloqueado tiver sido introduzido pelo commit mais recente em seu branch, você poderá seguir as diretrizes abaixo.

1. Remova o segredo do código.
1. Confirme as alterações usando `git commit --amend`.
1. Efetue o push das alterações com `git push`.

Você também poderá remover o segredo se ele aparecer em uma confirmação anterior no histórico do Git.

1. Use `git log` para determinar qual commit exibido no erro de push veio primeiro no histórico.
1. Inicie uma troca de base interativa com `git rebase -i <commit-id>~1`. <commit-id> é a ID do commit da etapa 1.
1. Identifique seu commit para editar alterando `pick` para `edit` na primeira linha do texto que aparece no editor.
1. Remova o segredo do código.
1. Faça o commit da alteração com `git commit --amend`.
1. Execute `git rebase --continue` para concluir a troca de base.

## <a name="resolving-a-blocked-commit-in-the-web-ui"></a>Resolver um commit bloqueado na interface do usuário da Web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

Para resolver um commit bloqueado na interface do usuário da Web, você precisará remover o segredo do arquivo ou usar a lista suspensa **Proteção contra bypass** para permitir o segredo. Para obter mais informações sobre como ignorar a proteção por push pela interface do usuário da Web, confira "[Proteger pushes com verificação secreta](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)".

Se você confirmar que um segredo é real, precisará remover o segredo do arquivo. Depois de remover o segredo, a faixa na parte superior da página será alterada e informará que agora você pode fazer commit das suas alterações.
