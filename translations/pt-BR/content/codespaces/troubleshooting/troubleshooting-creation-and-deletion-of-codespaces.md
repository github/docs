---
title: Solucionar problemas de criação e exclusão de codespaces
intro: 'Este artigo fornece etapas de solução de problemas para problemas comuns que você pode ter ao criar ou excluir um codespace, incluindo problemas de armazenamento e configuração.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Creation and deletion
ms.openlocfilehash: 4a12c848fa7400ec336f5ad086eb4d2858a431f0
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180816'
---
## Criando codespaces

### Sem acesso para criar um codespace
{% data variables.product.prodname_github_codespaces %} não está disponível para todos os repositórios. Se as opções para criar um codespace não forem exibidas, {% data variables.product.prodname_github_codespaces %} talvez não esteja disponível para esse repositório. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#access-to-codespaces)".

Desde que você tenha o uso mensal restante de {% data variables.product.prodname_github_codespaces %} em sua conta pessoal ou que tenha configurado uma forma de pagamento e um limite de gastos, você poderá criar codespaces para repositórios públicos. No entanto, você só poderá criar um codespace para um repositório privado se puder enviar alterações por push para o repositório ou bifurcar o repositório.

Para obter mais informações sobre o uso incluído para contas pessoais e como definir um limite de gastos, confira "[Sobre a cobrança de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)" e "[Como gerenciar limites de gastos para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

### O codespace não abre quando criado

Se você criar um codespace e ele não abrir:

1. Tente atualizar a página no caso de haver um problema de cache ou comunicação.
2. Acesse sua página do {% data variables.product.prodname_github_codespaces %}: https://github.com/codespaces e verifique se o novo codespace está listado nela. O processo pode ter criado com sucesso o codespace, mas não foi possível reportar ao seu navegador. Se o novo codespace estiver listado, você poderá abri-lo diretamente a partir daquela página.
3. Tente criar o código novamente para que o repositório exclua uma falha de comunicação temporária.

Se você ainda não puder criar um codespace para um repositório em que {% data variables.product.prodname_github_codespaces %} estão disponíveis, {% data reusables.codespaces.contact-support %}

### Falha na criação do codespace

Se a criação de um codespace falhar, provavelmente será devido a um problema temporário de infraestrutura na nuvem, por exemplo, um problema ao provisionar uma máquina virtual para o codespace. Um motivo menos comum para a falha é se leva mais de uma hora para compilar o contêiner. Nesse caso, o build será cancelado e a criação do codespace falhará.

{% note %}

**Observação:** Um codespace que não foi criado com êxito nunca será utilizável e deve ser excluído. Para obter mais informações, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

{% endnote %}

Se você criar um codespace e a criação falhar:

1. Verifique a [página Status](https://githubstatus.com) do {% data variables.product.prodname_dotcom %} em busca de incidentes ativos.
1. Acesse [a página do {% data variables.product.prodname_github_codespaces %}](https://github.com/codespaces), exclua o codespace existente e crie outro.
1. Se o contêiner está sendo compilado, examine os logs que estão sendo transmitidos e verifique se o build não está travado. Um build de contêiner que leva mais de uma hora será cancelado, resultando em falha na criação.

   Um cenário comum em que isso pode acontecer é se você tem um script em execução que está solicitando a entrada do usuário e aguardando uma resposta. Se esse for o caso, remova o prompt interativo para que o build possa ser concluído de maneira não interativa.

   {% note %}

   **Observação**: para exibir os logs durante um build:
   * No navegador, clique em **Exibir logs.** 

   ![Captura de tela da interface do usuário da Web de Codespaces com o link Exibir logs realçado](/assets/images/help/codespaces/web-ui-view-logs.png)

   * No aplicativo da área de trabalho do VS Code, clique em **Compilar codespace** na mensagem "Configurar a conexão remota" exibida. 

   ![Captura de tela do VS Code com o link Compilar codespace realçado](/assets/images/help/codespaces/vs-code-building-codespace.png)

    {% endnote %}
2. Se você tiver um contêiner que leva muito tempo para ser compilado, considere o uso de pré-compilações para acelerar as criações de codespace. Para obter mais informações, confira "[Como configurar pré-compilações](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)".

## Excluindo codespaces

Um codespace só pode ser excluído:
* Pela pessoa que criou o codespace.
* Por um proprietário da organização para um codespace de propriedade da organização.
* Por exclusão automática ao término de um período de retenção. 

Para obter mais informações, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)" e "[Como configurar a exclusão automática de codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".

## Armazenamento do contêiner

Ao criar um codespace, ele terá uma quantidade limitada de armazenamento e, após um tempo, poderá ser necessário que você libere espaço. Tente executar qualquer um dos comandos a seguir no terminal de {% data variables.product.prodname_github_codespaces %} para liberar espaço de armazenamento.

- Remova os pacotes que não são mais usados com `sudo apt autoremove`.
- Limpe o cache apt usando `sudo apt clean`.
- Veja os dez maiores arquivos no codespace com `sudo find / -printf '%s %p\n'| sort -nr | head -10`.
- Exclua arquivos desnecessários, como artefatos e registros de criação.

Algumas opções mais destrutivas:

- Remova imagens, redes e contêineres do Docker não utilizados usando `docker system prune` (acrescente `-a` se quiser remover todas as imagens e `--volumes` se quiser remover todos os volumes).
- Remova os arquivos sem controle de alterações da árvore de trabalho: `git clean -i`.

## Configuração

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```
Examine os logs de criação e atualize a configuração do contêiner de desenvolvimento conforme necessário. Para ver mais informações, confira "[Logs do {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)."

Em seguida, você pode tentar reiniciar o codespace ou recompilar o contêiner. Para obter mais informações sobre o recompilamento do contêiner, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)".
