---
title: Gerenciar pull requests para atualizações de dependências
intro: 'Você gerencia pull requests criadas por {% data variables.product.prodname_dependabot %} da mesma forma que outras pull requests, mas existem algumas opções extras.'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
---

### Sobre pull requests {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Quando o {% data variables.product.prodname_dependabot %} cria uma pull request, você é notificado pelo método escolhido para o repositório. Cada pull request contém informações detalhadas sobre a mudança proposta, retirada do gerenciador de pacotes. Essas pull requests seguem as verificações e testes normais definidas no seu repositório. Além disso, onde informações suficientes estão disponíveis, você verá uma pontuação de compatibilidade. Isso também pode ajudá-lo a decidir se deve ou não mesclar a alteração. Para obter informações sobre essa pontuação, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

Se você tem muitas dependências para gerenciar, você pode querer personalizar a configuração para cada gerenciador de pacotes para que as pull requests tenham revisores, responsáveis e etiquetas específicos. Para obter mais informações, consulte "[Personalizar atualizações de dependência](/github/administering-a-repository/customizing-dependency-updates)".

### Visualizando pull requests {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Quaisquer pull requests de atualização de segurança e versão são fáceis de identificar.
    - O autor é [dependabot](https://github.com/dependabot), a conta de bot usada por {% data variables.product.prodname_dependabot %}.
    - Por padrão, eles têm as etiquetas das `dependências`.

### Alterando a estratégia de rebase para pull requests {% data variables.product.prodname_dependabot %}

Por padrão, o {% data variables.product.prodname_dependabot %} faz o rebasamento automaticamente das pull requests para resolver quaisquer conflitos. Se você preferir lidar com conflitos de merge manualmente, pode desativar isso usando a opção `rebase-strategy`. Para obter detalhes, consulte "[Opções de configuração para atualizações de dependências](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)".

### Gerenciando pull requests {% data variables.product.prodname_dependabot %} com comandos de comentário

O {% data variables.product.prodname_dependabot %} responde a comandos simples nos comentários. Each pull request contains details of the commands you can use to process the pull request (for example: to merge, squash, reopen, close, or rebase the pull request) under the "{% data variables.product.prodname_dependabot %} commands and options" section. O objetivo é facilitar ao máximo a triagem dessas pull requests geradas automaticamente.

You can use any of the following commands on a {% data variables.product.prodname_dependabot %} pull request.

- `@dependabot cancel merge` cancels a previously requested merge.
- `@dependabot close` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from recreating that pull request. You can achieve the same result by closing the pull request manually.
- `@dependabot ignore this dependency` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this dependency (unless you reopen the pull request or upgrade to the suggested version of the dependency yourself).
- `@dependabot ignore this major version` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this major version (unless you reopen the pull request or upgrade to this major version yourself).
- `@dependabot ignore this minor version` closes the pull request and prevents {% data variables.product.prodname_dependabot %} from creating any more pull requests for this minor version (unless you reopen the pull request or upgrade to this minor version yourself).
- `@dependabot merge` merges the pull request once your CI tests have passed.
- `@dependabot rebase` rebases the pull request.
- `@dependabot recreate` recreates the pull request, overwriting any edits that have been made to the pull request.
- `@dependabot reopen` reopens the pull request if the pull request is closed.
- `@dependabot squash and merge` squashes and merges the pull request once your CI tests have passed.

{% data variables.product.prodname_dependabot %} will react with a "thumbs up" emoji to acknowledge the command, and may respond with a comment on the pull request. While {% data variables.product.prodname_dependabot %} usually responds quickly, some commands may take several minutes to complete if {% data variables.product.prodname_dependabot %} is busy processing other updates or commands.

Se você executar algum comando para ignorar dependências ou versões, o {% data variables.product.prodname_dependabot %} armazena centralmente as preferências para o repositório. Embora esta seja uma solução rápida, para repositórios com mais de um colaborador é melhor definir explicitamente as dependências e versões para ignorar no arquivo de configuração. Isso facilita que todos os colaboradores vejam por que uma determinada dependência não está sendo atualizada automaticamente. Para obter mais informações, consulte "[Opções de configuração para atualizações de dependências](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
