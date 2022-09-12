---
title: Solucionar problemas de criação e exclusão de codespaces
intro: 'Este artigo fornece etapas de solução de problemas para problemas comuns que você pode ter ao criar ou excluir um codespace, incluindo problemas de armazenamento e configuração.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 0a93ef45affe3f19e3e679d909db432ddd6b3e97
ms.sourcegitcommit: 3a16368cd8beb8b8487eb77d3e597cf49f4c4335
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/14/2022
ms.locfileid: '147110831'
---
## <a name="creating-codespaces"></a>Criando codespaces

### <a name="no-access-to-create-a-codespace"></a>Sem acesso para criar um codespace
{% data variables.product.prodname_codespaces %} não estão disponíveis para todos os repositórios. Se o botão "Abrir com o Codespaces" estiver ausente, é possível que o {% data variables.product.prodname_github_codespaces %} não esteja disponível para o repositório. Para obter mais informações, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces)".

Se você acredita que a sua organização [habilitou o {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#about-enabling-codespaces-for-your-organization), verifique se um proprietário ou um gerente de cobrança da organização definiu o limite de gastos do {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como gerenciar limites de gastos do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

### <a name="codespace-does-not-open-when-created"></a>O codespace não abre quando criado

Se você criar um codespace e ele não abrir:

1. Tente atualizar a página no caso de haver um problema de cache ou comunicação.
2. Acesse sua página do {% data variables.product.prodname_github_codespaces %}: https://github.com/codespaces e verifique se o novo codespace está listado nela. O processo pode ter criado com sucesso o codespace, mas não foi possível reportar ao seu navegador. Se o novo codespace estiver listado, você poderá abri-lo diretamente a partir daquela página.
3. Tente criar o código novamente para que o repositório exclua uma falha de comunicação temporária.

Se você ainda não puder criar um codespace para um repositório em que {% data variables.product.prodname_codespaces %} estão disponíveis, {% data reusables.codespaces.contact-support %}

## <a name="deleting-codespaces"></a>Excluindo codespaces

O proprietário de um codespace tem controle total sobre ele e apenas o proprietário pode excluir seus codespaces. Você não pode excluir um codespace criado por outro usuário.

Você pode excluir seus codespaces no navegador, no {% data variables.product.prodname_vscode %}, ou usando a {% data variables.product.prodname_cli %}. A {% data variables.product.prodname_cli %} também permite que você exclua codespaces em massa. Para obter mais informações, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

## <a name="container-storage"></a>Armazenamento do contêiner

Ao criar um codespace, ele terá uma quantidade limitada de armazenamento e, após um tempo, poderá ser necessário que você libere espaço. Tente executar qualquer um dos comandos a seguir no terminal de {% data variables.product.prodname_codespaces %} para liberar espaço de armazenamento.

- Remova os pacotes que não são mais usados com `sudo apt autoremove`.
- Limpe o cache apt usando `sudo apt clean`.
- Veja os dez maiores arquivos no codespace com `sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Exclua arquivos desnecessários, como artefatos e registros de criação.

Algumas opções mais destrutivas:

- Remova imagens, redes e contêineres do Docker não utilizados usando `docker system prune` (acrescente `-a` se quiser remover todas as imagens e `--volumes` se quiser remover todos os volumes).
- Remova os arquivos sem controle de alterações da árvore de trabalho: `git clean -i`.

## <a name="configuration"></a>Configuração

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```

Revise os logs de criação, atualize a configuração do contêiner de desenvolvimento conforme necessário e execute **Codespaces: Recompilar Contêiner** na {% data variables.product.prodname_vscode_command_palette %} para tentar novamente. Para obter mais informações, confira "[Logs do Codespaces](/codespaces/troubleshooting/codespaces-logs)" e "[Como configurar o {% data variables.product.prodname_codespaces %} para seu projeto](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)".
