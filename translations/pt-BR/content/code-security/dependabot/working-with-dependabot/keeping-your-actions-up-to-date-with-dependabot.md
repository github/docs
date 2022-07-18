---
title: Manter as suas ações atualizadas com o Dependabot
intro: 'Você pode usar o {% data variables.product.prodname_dependabot %} para manter as ações que você utiliza atualizadas para as versões mais recentes.'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Atualização automática de ações
---

{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Sobre {% data variables.product.prodname_dependabot_version_updates %} para ações

Ações são frequentemente atualizadas com correções de bugs e novos recursos para tornar os processos automatizados mais confiáveis, mais rápidos e mais seguros. Quando você habilitar {% data variables.product.prodname_dependabot_version_updates %} para {% data variables.product.prodname_actions %}, o {% data variables.product.prodname_dependabot %} ajudará a garantir que referências a ações em um arquivo *workflow.yml* de um repositório são mantidas atualizadas. Para cada ação no arquivo, {% data variables.product.prodname_dependabot %} verifica a referência da ação (tipicamente, um número de versão ou identificador de commit associado à ação) em relação à versão mais recente. Se uma versão mais recente da ação estiver disponível, o {% data variables.product.prodname_dependabot %} enviará para você uma pull request que atualizará a referência no arquivo de fluxo de trabalho para a versão mais recente. Para obter mais informações sobre o {% data variables.product.prodname_dependabot_version_updates %}, consulte "[Sobre {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)". Para obter mais informações sobre a configuração dos fluxos de trabalho para {% data variables.product.prodname_actions %}, consulte "[Aprender {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

{% data reusables.actions.workflow-runs-dependabot-note %}

## Habilitando {% data variables.product.prodname_dependabot_version_updates %} para ações

Você pode configurar {% data variables.product.prodname_dependabot_version_updates %} para manter suas ações, bem como as bibliotecas e pacotes dos quais você depende.

1. Se você já habilitou {% data variables.product.prodname_dependabot_version_updates %} para outros ecossistemas ou gerentes de pacotes, basta abrir o arquivo *dependabot.yml* existente. Caso contrário, crie um arquivo de configuração *dependabot.yml* no diretório `.github` do seu repositório. Para obter mais informações, consulte "[Configurando as atualizações da versão do Dependabot](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)".
1. Especifique `"github-actions"` como um `package-ecosystem` para monitorar.
1. Defina o `directory` como `"/"` para verificar os arquivos de fluxo de trabalho em `.github/workflows`.
1. Defina um `schedule.interval` para especificar quantas vezes procurar por novas versões.
{% data reusables.dependabot.check-in-dependabot-yml %} Se você tiver editado um arquivo existente, salve suas alterações.

Você também pode habilitar o {% data variables.product.prodname_dependabot_version_updates %} em bifurcações. Para obter mais informações, consulte "[Configurando as atualizações da versão de {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks)".

### Exemplo de arquivo *dependabot.yml* para {% data variables.product.prodname_actions %}

O exemplo de arquivo *dependabot.yml* abaixo configura atualizações de versão para {% data variables.product.prodname_actions %}. O `directory` deve ser definido como `"/"` para verificar os arquivos de fluxo de trabalho em `.github/workflows`. O `schedule.interval` está definido como `"diariamente"`. Após este arquivo ter sido verificado ou atualizado, {% data variables.product.prodname_dependabot %} verifica novas versões de suas ações. O {% data variables.product.prodname_dependabot %} irá criar as pull request para atualizações da versão para quaisquer ações desatualizadas que ele encontre. Após as atualizações iniciais da versão, {% data variables.product.prodname_dependabot %} continuará a verificar se há versões desatualizadas de ações uma vez por dia.

```yaml
# Configurar calendário de atualização para GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Verificar atualizações do GitHub Actions todos os dias de semana
      interval: "daily"
```

## Configurando o {% data variables.product.prodname_dependabot_version_updates %} para ações

Ao habilitar {% data variables.product.prodname_dependabot_version_updates %} para ações, você deve especificar valores para `package-ecosystem`, `directory` e `schedule.interval`. Há muitas propriedades opcionais adicionais que você pode definir para personalizar ainda mais suas atualizações de versão. Para obter mais informações, consulte "[Opções de configuração para o arquivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates)".

## Leia mais

- "[Sobre o GitHub Actions](/actions/getting-started-with-github-actions/about-github-actions)"
