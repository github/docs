---
title: Gerenciar pull requests para atualizações de dependências
intro: 'Você gerencia pull requests criadas por {% data variables.product.prodname_dependabot %} da mesma forma que outras pull requests, mas existem algumas opções extras.'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### Sobre pull requests {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Quando o {% data variables.product.prodname_dependabot %} cria uma pull request, você é notificado pelo método escolhido para o repositório. Each pull request contains detailed information about the proposed change, taken from the package manager. Essas pull requests seguem as verificações e testes normais definidas no seu repositório. Além disso, onde informações suficientes estão disponíveis, você verá uma pontuação de compatibilidade. Isso também pode ajudá-lo a decidir se deve ou não mesclar a alteração. For information about this score, see "[About {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."

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

O {% data variables.product.prodname_dependabot %} responde a comandos simples nos comentários. Cada pull request contém detalhes dos comandos que você pode usar para processar a pull request, por exemplo: para mesclar, combinar por squash, reabrir, fechar ou rebasear a pull request. O objetivo é facilitar ao máximo a triagem dessas pull requests geradas automaticamente.

Se você executar algum comando para ignorar dependências ou versões, o {% data variables.product.prodname_dependabot %} armazena centralmente as preferências para o repositório. Embora esta seja uma solução rápida, para repositórios com mais de um colaborador é melhor definir explicitamente as dependências e versões para ignorar no arquivo de configuração. Isso facilita que todos os colaboradores vejam por que uma determinada dependência não está sendo atualizada automaticamente. Para obter mais informações, consulte "[Opções de configuração para atualizações de dependências](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
