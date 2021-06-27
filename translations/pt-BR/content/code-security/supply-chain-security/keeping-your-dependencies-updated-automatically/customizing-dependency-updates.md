---
title: Personalizando atualizações de dependências
intro: 'Você pode personalizar como {% data variables.product.prodname_dependabot %} mantém suas dependências.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
---

### Sobre a personalização de atualizações de dependências

Depois que você habilitou as atualizações de versão, você pode personalizar a forma como o {% data variables.product.prodname_dependabot %} mantém suas dependências adicionando mais opções ao arquivo *dependabot.yml*. Por exemplo, você pode:

- Especificar qual dia da semana abrirá pull requests para atualizações de versão: `schedule.day`
- Definir revisores, responsáveis e etiquetas para cada gerente de pacote: `revisores`, `responsáveis`e `etiquetas`
- Definir uma estratégia de versão para mudanças em cada arquivo de manifesto: `versioning-strategy`
- Alterar o número máximo de pull requests abertos para atualizações de versão a partir do padrão de 5: `open-pull-requests-limit`
- Abrir pull requests para atualizações de versão para atingir um branch específico, em vez do branch padrão: `target-branch`

Para obter mais informações sobre as opções de configuração, consulte "[Opções de configuração para atualizações de dependências](/github/administering-a-repository/configuration-options-for-dependency-updates)".

Ao atualizar o arquivo *dependabot.yml* no seu repositório, o {% data variables.product.prodname_dependabot %} executa uma verificação imediata com a nova configuração. Dentro de minutos você verá uma lista atualizada de dependências na aba **{% data variables.product.prodname_dependabot %}**. Isso pode demorar mais se o repositório tiver muitas dependências. Você também pode ver novas pull requests para atualizações de versão. Para obter mais informações, consulte "[Listando dependências configuradas para atualizações da versão](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)".

### Impacto das alterações de configuração nas atualizações de segurança

Se você personalizar o arquivo *dependabot.yml*, você poderá notar algumas alterações nas pull requests criadas por atualizações de segurança. Essas pull requests são sempre acionadas por uma consultoria de segurança para uma dependência, ao invés da agenda {% data variables.product.prodname_dependabot %}. No entanto, eles herdam configurações relevantes do arquivo *dependabot.yml* a menos que você especifique um branch de destino diferente para atualizações de versão.

Por exemplo, consulte "[Definindo etiquetas personalizadas](#setting-custom-labels)" abaixo.

### Modificando o agendamento

Ao definir um agendamento de atualização `diário`, por padrão, {% data variables.product.prodname_dependabot %} verifica novas versões às 05:00 UTC. Você pode usar `schedule.time` para especificar um horário alternativo do dia para verificar atualizações (formato: `hh:mm`).

O exemplo de arquivo *dependabot.yml* abaixo expande a configuração npm para especificar quando o {% data variables.product.prodname_dependabot %} deve procurar por atualizações de versão em dependências.

```yaml
# arquivo dependabot.yml com
# agenda personalizada para atualizações de versão

version: 2
updates:
  # Manter dependências npm atualizadas
  - package-ecosystem: "npm"
    directory: "/"
    # Verificar o registro npm para atualizações às 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

### Configurando revisores e responsáveis

Por padrão, {% data variables.product.prodname_dependabot %} levanta todas as pull requests sem revisores ou responsáveis.

Você pode usar `revisores` e `responsáveis`  para especificar revisores e responsáveis para todas as pull requests criadas para um gerenciador de pacotes. Quando especificar uma equipe, você deve usar o nome completo da equipe, como se estivesse @mencionando a equipe (incluindo a organização).

O exemplo de arquivo *depabot.yml* abaixo altera a configuração npm para que todas as pull requests abertas com versão e atualizações de segurança para npm tenham dois revisores e um responsável.

```yaml
# arquivo dependabot.yml com
# revisores e um responsável por todas as pull requests npm

version: 2
updates:
  # Manter dependências npm atualizadas
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Levantar todas as pull requests npm com revisores
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Levantar todas as pull requests npm com um responsável
    assignees:
      - "user-name"
```

### Definindo etiquetas personalizadas

{% data reusables.dependabot.default-labels %}

Você pode usar `etiquetas` para substituir as etiquetas padrão e especificar etiquetas alternativas para todas as pull requests criadas para um gerenciador de pacotes. Você não pode criar novas etiquetas no arquivo *dependabot.yml* , então as etiquetas alternativas já existem no repositório.

O exemplo de arquivo *dependabot.yml* abaixo altera a configuração npm para que todas as pull requests abertas com atualizações de segurança e versão para npm tenham etiquetas personalizadas. Ele também altera a configuração do Docker para verificar as atualizações de versão em relação a um branch personalizado e levantar as pull request com etiquetas personalizadas em relação ao branch personalizado. As alterações no Docker não afetarão as pull request de atualização de segurança porque as atualizações de segurança sempre são feitas em relação ao branch padrão.

{% note %}

**Nota:** O novo `target-branch` deve conter um arquivo Docker para atualizar, caso contrário, esta alteração terá o efeito de desabilitar as atualizações da versão do Docker.

{% endnote %}

```yaml
# arquivo dependabot.yml com
# configuração npm personalizada

version: 2
updates:
  # Manter dependências npm dependencies atualizadas
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Levantar todas as pull requests npm com etiquetas personalizadas
    labels:
      - "npm dependencies"
      - "triage-board"

    # Manter dependências Docker atualizadas
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "daily"
    # Levantar pull requests para atualizações da versão Docker 
    # em relação ao branch "develop". Configuração Docker 
    # não afeta mais as pull requests de atualizações de segurança.
    target-branch: "develop"
    # Usar etiquetas padronizadas em pull requests para atualizações de versão Docker 
    labels:
      - "Docker dependencies"
      - "triage-board"
```

### Mais exemplos

Para obter mais exemplos, consulte "[Opções de configuração para atualizações de dependências](/github/administering-a-repository/configuration-options-for-dependency-updates)".
