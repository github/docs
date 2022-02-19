---
title: Managing self-hosted runners for Dependabot updates on your enterprise
intro: 'Você pode criar executores dedicados para {% data variables.product.product_location %} que {% data variables.product.prodname_dependabot %} usa para criar pull requests a fim de ajudar a proteger e manter as dependências usadas em repositórios da sua empresa.'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
---

{% data reusables.dependabot.beta-security-and-version-updates %}

## About self-hosted runners for {% data variables.product.prodname_dependabot_updates %}

You can help users of {% data variables.product.product_location %} to create and maintain secure code by setting up {% data variables.product.prodname_dependabot %} security and version updates. With {% data variables.product.prodname_dependabot_updates %}, developers can configure repositories so that their dependencies are updated and kept secure automatically. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

To use {% data variables.product.prodname_dependabot_updates %} on {% data variables.product.product_location %}, you must configure self-hosted runners to create the pull requests that will update dependencies.

## Pré-requisitos

{% if dependabot-updates-github-connect %}
Configuring self-hosted runners is only one step in the middle of the process for enabling {% data variables.product.prodname_dependabot_updates %}. There are several steps you must follow before these steps, including configuring {% data variables.product.product_location %} to use {% data variables.product.prodname_actions %} with self-hosted runners. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% else %}
Before you configure self-hosted runners for {% data variables.product.prodname_dependabot_updates %}, you must:

- Configure {% data variables.product.product_location %} to use {% data variables.product.prodname_actions %} with self-hosted runners. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} para o GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."
- Enable {% data variables.product.prodname_dependabot_alerts %} for your enterprise. Para obter mais informações, consulte "[Habilitar {% data variables.product.prodname_dependabot %} para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% endif %}

## Configuring self-hosted runners for {% data variables.product.prodname_dependabot_updates %}

After you configure {% data variables.product.product_location %} to use {% data variables.product.prodname_actions %}, you need to add self-hosted runners for {% data variables.product.prodname_dependabot_updates %}.

### Requisitos do sistema para executores de {% data variables.product.prodname_dependabot %}

Qualquer VM que você usar para executores de {% data variables.product.prodname_dependabot %} deve atender aos requisitos para executores auto-hospedados. Além disso, eles têm de cumprir os seguintes requisitos.

- Sistema operacional Linux
- Git instalado
- Docker instalado com acesso para os usuários do executor:
  - Recomendamos instalar o Docker no modo sem rootless e configurar os executores para acessar o Docker sem privilégios do `root`.
  - Como alternativa, instale o Docker e dê aos usuários do executor privilégios elevados para executar o Docker.

Os requisitos de CPU e memória dependerão do número de executores simultâneos que você implanta em uma determinada VM. Como orientação, criamos de forma bem-sucedida 20 executores em uma única máquina CPU de 8 GB, mas, em última análise, seus requisitos de CPU e memória dependerão fortemente da atualização dos repositórios. Alguns ecossistemas exigirão mais recursos do que outros.

Se você especificar mais de 14 runners simultâneos em uma VM, você também deve atualizar o a configuração do Docker `/etc/docker/daemon.json` para aumentar o número padrão de redes que o Docker pode criar.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Requisitos da rede para executores de {% data variables.product.prodname_dependabot %}

Os executores de {% data variables.product.prodname_dependabot %} exigem acesso à internet pública, {% data variables.product.prodname_dotcom_the_website %} e a todos os registros internos que serão usados nas atualizações de {% data variables.product.prodname_dependabot %}. Para minimizar o risco para sua rede interna, você deve limitar o acesso da Máquina Virtual (VM) à sua rede interna. Isto reduz o potencial de danos nos sistemas internos se um executor fizer o download de uma dependência capturada.

### Adicionando executores auto-hospedados para atualizações de {% data variables.product.prodname_dependabot %}

1. Provisionamento de executores auto-hospedados no nível da conta do repositório, organização ou empresa. Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)" e "[Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

2. Configure os executores auto-hospedados com os requisitos descritos acima. Por exemplo, em uma VM que executa o Ubuntu 20.04 você:

   - Verificaria se o Git está instalado: `command -v git`
   - Instale o Docker e certifique-se de que os usuários do executor tenham acesso ao Docker. Para obter mais informações, consulte a documentação do Docker.
     - [Instalar o mecanismo do Docker no Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     - Abordagem recomendada: [Executar o daemon do Docker como um usuário que não é root (modo Rootless)](https://docs.docker.com/engine/security/rootless/)
     - Abordagem alternativa: [Gerenciar Docker como um usuário que não é do root](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - Verifique se os executores têm acesso à internet pública e só podem acessar as redes internas de que {% data variables.product.prodname_dependabot %} precisa.

3. Atribua uma etiqueta do `debendabot` para cada executor que você deseja que {% data variables.product.prodname_dependabot %} use. Para obter mais informações, consulte "["Usar etiquetas com executores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)".

4. Opcionalmente, habilite os fluxos de trabalho acionados por {% data variables.product.prodname_dependabot %} para usar permissões além das permissões somente leitura e ter acesso a todos os segredos que estão normalmente disponíveis. Para obter mais informações, consulte "[Solucionar problemas de {% data variables.product.prodname_actions %} para a sua empresa](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)."
