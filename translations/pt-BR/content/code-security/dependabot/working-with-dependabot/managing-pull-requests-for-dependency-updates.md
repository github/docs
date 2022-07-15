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
shortTitle: Gerenciar PRs do Dependabot
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre pull requests {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Quando o {% data variables.product.prodname_dependabot %} cria uma pull request, você é notificado pelo método escolhido para o repositório. Cada pull request contém informações detalhadas sobre a mudança proposta, retirada do gerenciador de pacotes. Essas pull requests seguem as verificações e testes normais definidas no seu repositório.
{% ifversion fpt or ghec %}Além disso, quando informações suficientes estiverem disponíveis, você verá uma pontuação de compatibilidade. Isso também pode ajudá-lo a decidir se deve ou não mesclar a alteração. Para obter informações sobre essa pontuação, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."{% endif %}

Se você tem muitas dependências para gerenciar, você pode querer personalizar a configuração para cada gerenciador de pacotes para que as pull requests tenham revisores, responsáveis e etiquetas específicos. Para obter mais informações, consulte "[Personalizar atualizações de dependência](/github/administering-a-repository/customizing-dependency-updates)".

## Visualizando pull requests {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Todos os pull requests de atualização de segurança ou versão são fáceis de identificar.
    - O autor é {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}, e a conta do bot é usada por {% data variables.product.prodname_dependabot %}.
    - Por padrão, eles têm as etiquetas das `dependências`.

## Alterando a estratégia de rebase para pull requests {% data variables.product.prodname_dependabot %}

Por padrão, o {% data variables.product.prodname_dependabot %} faz o rebasamento automaticamente das pull requests para resolver quaisquer conflitos. Se você preferir lidar com conflitos de merge manualmente, pode desativar isso usando a opção `rebase-strategy`. Para obter detalhes, consulte "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy). ".

## Allowing {% data variables.product.prodname_dependabot %} to rebase and force push over extra commits

By default, {% data variables.product.prodname_dependabot %} will stop rebasing a pull request once extra commits have been pushed to it. To allow {% data variables.product.prodname_dependabot %} to force push over commits added to its branches, include any of the following strings: `[dependabot skip]` , `[skip dependabot]`, `[dependabot-skip]`, or `[skip-dependabot]`, in either lower or uppercase, to the commit message.

## Gerenciando pull requests {% data variables.product.prodname_dependabot %} com comandos de comentário

O {% data variables.product.prodname_dependabot %} responde a comandos simples nos comentários. Cada pull request contém detalhes dos comandos que você pode usar para processar o pull request (por exemplo: fazer merge, combinação por squash, abrir, fechar ou rebasear o pull request) na seção "comandos e opções de {% data variables.product.prodname_dependabot %}". O objetivo é facilitar ao máximo a triagem dessas pull requests geradas automaticamente.

Você pode usar qualquer um dos seguintes comandos em um pull request de {% data variables.product.prodname_dependabot %}.

- `@dependabot cancel merge` cancela um merge solicitado anteriormente.
- `@dependabot close` fecha o pull request e impede que {% data variables.product.prodname_dependabot %} recrie esse pull request. Você pode obter o mesmo resultado fechando o pull request manualmente.
- `@dependabot ignore this dependency` fecha o pull request e impede {% data variables.product.prodname_dependabot %} de criar outros pull requests para essa dependência (a menos que você reabra o pull request ou atualize para a versão sugerida da própria dependência).
- `@dependabot ignore this major version` fecha o pull request e impede {% data variables.product.prodname_dependabot %} de criar mais pull requests para esta versão principal (a menos que você mesmo reabra o pull request ou atualize para esta versão principal).
- `@dependabot ignore this minor version` fecha o pull request e impede {% data variables.product.prodname_dependabot %} de criar mais pull requests para esta versão menor (a menos que você mesmo reabra o pull request ou atualize para esta versão menor).
- `@dependabot merge` faz merge do pull request quando seus testes de CI passarem.
- `@dependabot rebase` faz rebase do pull request.
- `@dependabot recria` recria o pull request, substituindo todas as edições feitas no pull request.
- `@dependabot reopen` reabre o pull request se o este estiver fechado.
- `@dependabot squash and merge` faz combinação por squash e merge do pull request quando seus testes de CI passarem.

{% data variables.product.prodname_dependabot %} reagirá com um emoji "positivo" para reconhecer o comando e pode responder com um comentário no pull request. Embora {% data variables.product.prodname_dependabot %} normalmente responda rapidamente, alguns comandos podem levar vários minutos para serem concluídos se {% data variables.product.prodname_dependabot %} estiver ocupado processando outras atualizações ou comandos.

Se você executar algum comando para ignorar dependências ou versões, o {% data variables.product.prodname_dependabot %} armazena centralmente as preferências para o repositório. Embora esta seja uma solução rápida, para repositórios com mais de um colaborador é melhor definir explicitamente as dependências e versões para ignorar no arquivo de configuração. Isso facilita que todos os colaboradores vejam por que uma determinada dependência não está sendo atualizada automaticamente. Para obter mais informações, consulte "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
