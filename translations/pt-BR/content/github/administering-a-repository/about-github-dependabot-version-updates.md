---
title: Sobre as atualizações de versão do GitHub Dependabot
intro: 'Você pode usar o {{ site.data.variables.product.prodname_dependabot }} para manter os pacotes que usa atualizados para as versões mais recentes.'
redirect_from:
  - /github/administering-a-repository/about-github-dependabot
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.dependabot.beta-note }}

### Sobre o {{ site.data.variables.product.prodname_dependabot_version_updates }}

O {{ site.data.variables.product.prodname_dependabot }} facilita a manutenção de suas dependências. Você pode usá-lo para garantir que seu repositório se mantenha atualizado automaticamente com as versões mais recentes dos pacotes e aplicações do qual ele depende.

Você habilita o {{ site.data.variables.product.prodname_dependabot_version_updates }} verificando um arquivo de configuração no seu repositório. O arquivo de configuração especifica a localização do manifesto ou outros arquivos de definição de pacote, armazenados no seu repositório. O {{ site.data.variables.product.prodname_dependabot_short }} usa essas informações para verificar pacotes e aplicativos desatualizados. {{ site.data.variables.product.prodname_dependabot_short }} determina se há uma nova versão de uma dependência observando a versão semântica ([semver](https://semver.org/)) da dependência para decidir se deve atualizar para essa versão. Quando {{ site.data.variables.product.prodname_dependabot_short }} identifica uma dependência desatualizada, ele cria uma pull request para atualizar o manifesto para a última versão da dependência. Você verifica se os seus testes passam, revisa o changelog e lança observações incluídas no resumo do pull request e, em seguida, faz a mesclagem. Para obter detalhes, consulte "[Habilitando e desabilitando atualizações da versão](/github/administering-a-repository/enabling-and-disabling-version-updates)."

Se você habilitar atualizações de segurança, {{ site.data.variables.product.prodname_dependabot }} também promove pull requests para atualizar dependências vulneráveis. Para obter mais informações, consulte "[Configurando {{ site.data.variables.product.prodname_dependabot_security_updates }}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)."

{{ site.data.reusables.dependabot.dependabot-tos }}

### Frequência de {{ site.data.variables.product.prodname_dependabot }} pull requests

Você especifica com que frequência verifica cada ecossistema para novas versões no arquivo de configuração: diariamente, semanalmente ou mensalmente.

{{ site.data.reusables.dependabot.initial-updates }}

Se tiver habilitado atualizações de segurança, às vezes você verá atualizações de segurança extras de pull requests. Elas são acionadas por um alerta de {{ site.data.variables.product.prodname_dependabot_short }} para uma dependência de seu branch padrão. {{ site.data.variables.product.prodname_dependabot }} gera automaticamente um pull request para atualizar a dependência vulnerável.

### Repositórios e ecossistemas suportados

{% note %}

{{ site.data.reusables.dependabot.private-dependencies }}

{% endnote %}

É possível configurar atualizações de versão para repositórios que contenham um manifesto de dependência ou arquivo de bloqueio para um dos gerentes de pacotes suportados.

{{ site.data.reusables.dependabot.supported-package-managers }}

Se o seu repositório já usa uma integração para gerenciamento de dependências, você precisará desativar isso antes de habilitar o {{ site.data.variables.product.prodname_dependabot }}. Para obter mais informações, consulte "[Sobre integrações](/github/customizing-your-github-workflow/about-integrations)".
