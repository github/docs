---
title: Habilitar e desabilitar as atualizações da versão
intro: 'Você pode configurar seu repositório para que o {% data variables.product.prodname_dependabot %} atualize automaticamente os pacotes que você usa.'
permissions: 'Pessoas com permissões de gravação para um repositório podem habilitar ou desabilitar {% data variables.product.prodname_dependabot_version_updates %} para o repositório.'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note-no-link %}

### Sobre atualizações de versão para dependências

Você habilita {% data variables.product.prodname_dependabot_version_updates %}, verificando um arquivo de configuração *dependabot.yml* no diretório do seu repositório `.github`. {% data variables.product.prodname_dependabot %} then raises pull requests to keep the dependencies you configure up-to-date. Para cada dependência do gerenciador de pacotes que você deseja atualizar, você deve especificar a localização dos arquivos de manifesto do pacote e a frequência de busca por atualizações nas dependências listadas nesses arquivos. For information about enabling security updates, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."

{% data reusables.dependabot.initial-updates %} Para obter mais informações, consulte "[Personalizar atualizações de dependência](/github/administering-a-repository/customizing-dependency-updates)".

### Habilitar {% data variables.product.prodname_dependabot_version_updates %}

{% note %}

{% data reusables.dependabot.private-dependencies %}

{% endnote %}

{% data reusables.dependabot.create-dependabot-yml %}
1. Use `package-ecosystem` para especificar os gerenciadores de pacote a monitorar.
1. Para cada gerenciador de pacotes, use:
    - `directory` para especificar o local do manifesto ou de outros arquivos de definição.
    - `schedule.interval` para especificar com que frequência verificar novas versões.
{% data reusables.dependabot.check-in-dependabot-yml %}

#### Exemplo: arquivo *dependabot.yml*

O arquivo de exemplo *dependabot.yml* abaixo configura atualizações de versão para dois gerenciadores de pacotes: npm e Docker. Quando este arquivo é marcado, o {% data variables.product.prodname_dependabot %} verifica os arquivos de manifesto no branch padrão buscando dependências desatualizadas. Se encontrar dependências desatualizadas, irá gerar pull requests em relação ao branch padrão para atualizar as dependências.

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

Depois que você habilitar as atualizações da versão, você verá uma nova aba **Dependabot** no gráfico de dependências para o repositório. This tab shows which package managers {% data variables.product.prodname_dependabot %} is configured to monitor and when {% data variables.product.prodname_dependabot %} last checked for new versions.

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
# arquivo dependabot.yml file com atualizações
# desabilitado para Docker e limitado para npm

version: 2
updates:
  # Configuração para Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Desabilitar todas as pull requests para dependências Docker
    open-pull-requests-limit: 0

  # Configuração para npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Substituir quaisquer ignores criados usando os comandos "@dependabot ignore"
    ignore:
      # Ignorar atualizações de pacotes que comecem com "aws"
      # Curingas correspondentes a zero ou outros caracteres arbitrários
      - dependency-name: "aws*"
      # Ignorar algumas atualizações do pacote "express"
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
```

{% data reusables.dependabot.warning-ignore-option %}

Para obter mais informações sobre as verificações para preferências de ignore existentes, consulte "[Opções de configuração para atualizações de dependências](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)".
