---
title: Habilitar e desabilitar as atualizações da versão
intro: 'Você pode configurar seu repositório para que o {% data variables.product.prodname_dependabot %} atualize automaticamente os pacotes que você usa.'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/enabling-and-disabling-version-updates
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->

### Sobre atualizações de versão para dependências

Você habilita {% data variables.product.prodname_dependabot_version_updates %}, verificando um arquivo de configuração *dependabot.yml* no diretório do seu repositório `.github`. Em seguida, o {% data variables.product.prodname_dependabot %} cria um pull request para manter as dependências que você configura atualizadas. Para cada dependência do gerenciador de pacotes que você deseja atualizar, você deve especificar a localização dos arquivos de manifesto do pacote e a frequência de busca por atualizações nas dependências listadas nesses arquivos. Para obter mais informações sobre habilitar atualizações de segurança, consulte "[Configurar {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."

{% data reusables.dependabot.initial-updates %} Para obter mais informações, consulte "[Personalizar atualizações de dependência](/github/administering-a-repository/customizing-dependency-updates)".

{% data reusables.dependabot.private-dependencies-note %} Adicionalmente, {% data variables.product.prodname_dependabot %} não é compatível com dependências privadas {% data variables.product.prodname_dotcom %} para todos os gerenciadores de pacote. Para obter mais informações, consulte "[Sobre atualizações de versão do Dependabot](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)" e "[{% data variables.product.prodname_dotcom %} suporte a idiomas](/github/getting-started-with-github/github-language-support)".

### Habilitar {% data variables.product.prodname_dependabot_version_updates %}

{% data reusables.dependabot.create-dependabot-yml %} Para obter informações, consulte "[Opções de configuração para atualizações de dependência](/github/administering-a-repository/configuration-options-for-dependency-updates)."
1. Adicione uma `versão`.
1. Opcionalmente, se você tiver dependências em um registro privado, adicione uma seção de `registros` que contém detalhes de autenticação.
1. Adicione uma seção de `atualizações` com uma entrada para cada gerenciador de pacotes que você deseja que {% data variables.product.prodname_dependabot %} monitore.
1. Para cada gerenciador de pacotes, use:
    - `package-ecosystem` para especificar o gerenciador de pacote.
    - `directory` para especificar o local do manifesto ou de outros arquivos de definição.
    - `schedule.interval` para especificar com que frequência verificar novas versões.
{% data reusables.dependabot.check-in-dependabot-yml %}

#### Exemplo: arquivo *dependabot.yml*

O exemplo do arquivo *dependabot.yml* configura atualizações da versão para dois gerentes de pacotes: npm e Docker. Quando este arquivo é marcado, o {% data variables.product.prodname_dependabot %} verifica os arquivos de manifesto no branch padrão buscando dependências desatualizadas. Se encontrar dependências desatualizadas, irá gerar pull requests em relação ao branch padrão para atualizar as dependências.

```yaml
# Arquivo básico dependabot.yml com
# configuração mínima para dois gerenciadores de pacotes

version: 2
updates:
  # Permitir atualizações de versão para npm
  - package-ecosystem: "npm"
    # Procurar arquivos "package.json" e "lock" no diretório "root"
    directory: "/"
    # Verificar o registro npm para atualizações diárias (dias de semana)
    schedule:
      interval: "daily"

  # Habilitar atualizações da versão para Docker
  - package-ecosystem: "docker"
    # Buscar um "Dockerfile" no diretório "root"
    directory: "/"
    # Verificar atualizações uma vez na semana
    schedule:
      interval: "weekly"
```

No exemplo acima, se as dependências do Docker estivessem muito desatualizadas, você poderia optar por começar com um cronograma `diário` até que as dependências estivessem atualizadas, e depois voltar para uma programação semanal.

#### Habilitando atualizações da versão em bifurcações

Se você quiser habilitar atualizações de versão nas bifurcações, há um passo extra. Atualizações de versão não são habilitadas automaticamente nas bifurcações quando um arquivo de configuração *dependabot.yml* estiver presente. Isso garante que os proprietários de bifurcação não habilitarão intencionalmente as atualizações de versão quando eles promoverem pull das alterações, incluindo um arquivo de configuração *dependabot.yml* do repositório original.

Em uma bifurcação, você também precisa habilitar explicitamente {% data variables.product.prodname_dependabot %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
5. Em "Enable Dependabot" (Habilitar Dependabot), clique em **Habilitar Dependabot**.

### Verificando o status das atualizações da versão

Depois que você habilitar as atualizações da versão, você verá uma nova aba **Dependabot** no gráfico de dependências para o repositório. Esta aba mostra quais gerentes de pacote de {% data variables.product.prodname_dependabot %} estão configurados para monitorar e quando {% data variables.product.prodname_dependabot %} fez a última verificação com relação a novas versões.

![Aba de Insights do Repositório, gráfico de dependências, aba Dependabot](/assets/images/help/dependabot/dependabot-tab-view-beta.png)

Para obter mais informações, consulte "[Listando dependências configuradas para atualizações da versão](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)".

### Desabilitar {% data variables.product.prodname_dependabot_version_updates %}

Você pode desabilitar as atualizações da versão inteiramente excluindo o arquivo *dependabot.yml* do seu repositório. Mais usualmente, você deseja desabilitar as atualizações temporariamente para uma ou mais dependências, ou gerenciadores de pacotes.

- Gerenciadores de pacotes: desabilite configurando `open-pull-requests-limit: 0` ou comentando o `package-ecosystem` relevante no arquivo de configuração.
- Dependências específicas: desabilite ao adicionar atributos `ignore` para pacotes ou aplicativos que você deseja excluir das atualizações.

Quando você desabilita dependências, você pode usar cartões curingas para corresponder a um conjunto de bibliotecas relacionadas. Você também pode especificar quais versões excluir. Isso é particularmente útil se você precisa bloquear atualizações de uma biblioteca, deixando pendente trabalho para suportar uma alteração quebrada na sua API, mas quer obter qualquer correção de segurança para a versão que você usa.

#### Exemplo de desabilitação de atualizações de versão para algumas dependências

O exemplo de arquivo *dependabot.yml* abaixo inclui exemplos das diferentes maneiras de desabilitar atualizações para algumas dependências, ao mesmo tempo que permite que outras atualizações continuem.

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

Para obter mais informações sobre as verificações para preferências de ignore existentes, consulte "[Opções de configuração para atualizações de dependências](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
