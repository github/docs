---
title: Gerenciar pull requests para atualizações de dependências
intro: 'Você gerencia pull requests criadas por {% data variables.product.prodname_dependabot %} da mesma forma que outras pull requests, mas existem algumas opções extras.'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
shortTitle: Manage Dependabot PRs
ms.openlocfilehash: e33b176ced7d10ed70f4c521ce2c18be776a7f8e
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147112315'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre pull requests {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Quando o {% data variables.product.prodname_dependabot %} cria uma pull request, você é notificado pelo método escolhido para o repositório. Cada pull request contém informações detalhadas sobre a mudança proposta, retirada do gerenciador de pacotes. Essas pull requests seguem as verificações e testes normais definidas no seu repositório. {% ifversion fpt or ghec %}Além disso, quando informações suficientes estiverem disponíveis, você verá uma pontuação de compatibilidade. Isso também pode ajudá-lo a decidir se deve ou não mesclar a alteração. Para obter informações sobre essa pontuação, confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".{% endif %}

Se você tem muitas dependências para gerenciar, você pode querer personalizar a configuração para cada gerenciador de pacotes para que as pull requests tenham revisores, responsáveis e etiquetas específicos. Para obter mais informações, confira "[Como personalizar as atualizações de dependência](/github/administering-a-repository/customizing-dependency-updates)".

## Visualizando pull requests {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Todos os pull requests de atualização de segurança ou versão são fáceis de identificar.
    - O autor é {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}, a conta de bot usada pelo {% data variables.product.prodname_dependabot %}.
    - Por padrão, elas têm o rótulo `dependencies`.

## Alterando a estratégia de rebase para pull requests {% data variables.product.prodname_dependabot %}

Por padrão, o {% data variables.product.prodname_dependabot %} faz o rebasamento automaticamente das pull requests para resolver quaisquer conflitos. Se você preferir lidar com os conflitos de mesclagem manualmente, desabilite isso usando a opção `rebase-strategy`. Para obter detalhes, confira "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)".

## Ao permitir que o {% data variables.product.prodname_dependabot %} troque de base e imponha o envio por push sem vez de obre confirmações adicionais

Por padrão, o {% data variables.product.prodname_dependabot %} interromperá a troca de base de uma solicitação de pull assim que as confirmações adicionais forem enviadas por push para ele. Para permitir que o {% data variables.product.prodname_dependabot %} imponha o envio por push em vez da adição de conformações às ramificações, inclua qualquer uma das seguintes cadeias de caracteres: `[dependabot skip]`, `[skip dependabot]`, `[dependabot-skip]` ou `[skip-dependabot]`, minúsculas ou maiúsculas, na a mensagem de confirmação.

## Gerenciando pull requests {% data variables.product.prodname_dependabot %} com comandos de comentário

O {% data variables.product.prodname_dependabot %} responde a comandos simples nos comentários. Cada pull request contém detalhes dos comandos que você pode usar para processar o pull request (por exemplo: fazer merge, combinação por squash, abrir, fechar ou rebasear o pull request) na seção "comandos e opções de {% data variables.product.prodname_dependabot %}". O objetivo é facilitar ao máximo a triagem dessas pull requests geradas automaticamente.

Você pode usar qualquer um dos seguintes comandos em um pull request de {% data variables.product.prodname_dependabot %}.

- `@dependabot cancel merge` cancela uma mesclagem já solicitada.
- `@dependabot close` fecha a solicitação de pull e impede que o {% data variables.product.prodname_dependabot %} recrie essa solicitação de pull. Você pode obter o mesmo resultado fechando o pull request manualmente.
- `@dependabot ignore this dependency` fecha a solicitação de pull e impede que o {% data variables.product.prodname_dependabot %} crie mais solicitações de pull para essa dependência (a menos que você reabra a solicitação de pull ou faça upgrade para a versão sugerida da dependência por conta própria).
- `@dependabot ignore this major version` fecha a solicitação de pull e impede que o {% data variables.product.prodname_dependabot %} crie mais solicitações de pull para essa versão principal (a menos que você reabra a solicitação de pull ou faça upgrade para essa versão principal por conta própria).
- `@dependabot ignore this minor version` fecha a solicitação de pull e impede que o {% data variables.product.prodname_dependabot %} crie mais solicitações de pull para essa versão secundária (a menos que você reabra a solicitação de pull ou faça upgrade para essa versão secundária por conta própria).
- `@dependabot merge` mescla a solicitação de pull depois que os testes de CI são aprovados.
- `@dependabot rebase` troca a base da solicitação de pull.
- `@dependabot recreate` recria a solicitação de pull, substituindo todas as edições feitas na solicitação de pull.
- `@dependabot reopen` reabre a solicitação de pull se ela está fechada.
- `@dependabot squash and merge` faz uma mesclagem squash e mescla a solicitação de pull depois que os testes de CI são aprovados.

{% data variables.product.prodname_dependabot %} reagirá com um emoji "positivo" para reconhecer o comando e pode responder com um comentário no pull request. Embora {% data variables.product.prodname_dependabot %} normalmente responda rapidamente, alguns comandos podem levar vários minutos para serem concluídos se {% data variables.product.prodname_dependabot %} estiver ocupado processando outras atualizações ou comandos.

Se você executar algum comando para ignorar dependências ou versões, o {% data variables.product.prodname_dependabot %} armazena centralmente as preferências para o repositório. Embora esta seja uma solução rápida, para repositórios com mais de um colaborador é melhor definir explicitamente as dependências e versões para ignorar no arquivo de configuração. Isso facilita que todos os colaboradores vejam por que uma determinada dependência não está sendo atualizada automaticamente. Para obter mais informações, confira "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
