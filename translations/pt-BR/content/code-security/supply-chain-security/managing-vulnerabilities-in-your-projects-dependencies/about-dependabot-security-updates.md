---
title: Sobre as atualizações de segurança do Dependabot
intro: '{% data variables.product.prodname_dependabot %} pode corrigir dependências vulneráveis para você, levantando pull requests com atualizações de segurança.'
shortTitle: Sobre as atualizações de segurança do Dependabot
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/about-dependabot-security-updates
  - /code-security/supply-chain-security/about-dependabot-security-updates
versions:
  free-pro-team: '*'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Repositories
  - Dependencies
  - Pull requests
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About Dependabot security updates".-->

### Sobre o {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot_security_updates %} torna mais fácil para você corrigir dependências vulneráveis no seu repositório. Se você habilitar este recurso, quando um alerta de {% data variables.product.prodname_dependabot %} for criado para uma dependência vulnerável no gráfico de dependências do seu repositório, {% data variables.product.prodname_dependabot %} tenta corrigir isso automaticamente. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis de](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)" e "[Configurar {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)".

{% data variables.product.prodname_dotcom %} pode enviar alertas de {% data variables.product.prodname_dependabot %} a repositórios afetados por uma vulnerabilidade revelada por uma consultoria de segurança publicada recentemente em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories#dependabot-alerts-for-published-security-advisories)".


{% data variables.product.prodname_dependabot %} verifica se é possível atualizar a dependência vulnerável para uma versão fixa sem comprometer o gráfico de dependências para o repositório. Em seguida, {% data variables.product.prodname_dependabot %} levanta um pull request para atualizar a dependência para a versão mínima que inclui o patch e os links do pull request para o alerta de {% data variables.product.prodname_dependabot %} ou relata um erro no alerta. Para obter mais informações, consulte "[Solução de problemas de erros de {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)".

{% note %}

**Observação**

O recurso de {% data variables.product.prodname_dependabot_security_updates %} está disponível para repositórios nos quais você habilitou o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %}. Você verá um alerta de {% data variables.product.prodname_dependabot %} para cada dependência vulnerável identificada no seu gráfico de dependências completas. No entanto, atualizações de segurança são acionadas apenas para dependências especificadas em um manifesto ou arquivo de bloqueio. {% data variables.product.prodname_dependabot %} não consegue atualizar uma dependência indireta ou transitória que não esteja explicitamente definida. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included)".

{% endnote %}

Você pode habilitar um recurso relacionado, {% data variables.product.prodname_dependabot_version_updates %}, para que {% data variables.product.prodname_dependabot %} abra pull requests para atualizar o manifesto para a última versão da dependência, sempre que detectar uma dependência desatualizada. Para obter mais informações, consulte "[Sobre atualizações da versão de {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates)".

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

### Sobre os pull requests para atualizações de segurança

Cada pull request contém tudo o que você precisa para revisar mesclar, de forma rápida e segura, uma correção proposta em seu projeto. Isto inclui informações sobre a vulnerabilidade como, por exemplo, notas de lançamento, entradas de registros de mudanças e detalhes do commit. Detalhes de quais vulnerabilidades são resolvidas por um pull request de qualquer pessoa que não tem acesso a {% data variables.product.prodname_dependabot_alerts %} para o repositório.

Ao fazer merge de um pull request que contém uma atualização de segurança, o alerta de {% data variables.product.prodname_dependabot %} correspondente é marcado como resolvido no seu repositório. Para obter mais informações sobre pull requests de {% data variables.product.prodname_dependabot %}, consulte "[Gerenciar pull requests para atualizações de dependências](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)".

{% data reusables.dependabot.automated-tests-note %}

### Sobre pontuações de compatibilidade

O {% data variables.product.prodname_dependabot_security_updates %} pode inclui uma pontuação de compatibilidade para que você saiba se atualizar uma vulnerabilidade pode causar alterações significativas no seu projeto. Estes são calculados a partir de testes de CI em outros repositórios públicos onde a mesma atualização de segurança foi gerada. Uma pontuação de compatibilidade da atualização é a porcentagem de execuções de CI que foram aprovadas durante a atualização entre versões específicas da dependência.

### Sobre notificações para atualizações de segurança de {% data variables.product.prodname_dependabot %}

Você pode filtrar suas notificações em {% data variables.product.company_short %} para mostrar as atualizações de segurança de {% data variables.product.prodname_dependabot %}. Para obter mais informações, consulte "[Gerenciando notificações de sua caixa de entrada](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)".
