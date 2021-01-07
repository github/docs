---
title: Sobre a varredura de segredo
intro: 'O {% data variables.product.product_name %} verifica repositórios em busca de tipos de segredos conhecidos a fim de impedir o uso fraudulento de segredos que sofreram commit acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
versions:
  free-pro-team: '*'
---

Se o seu projeto se comunicar com um serviço externo, você pode usar um token ou uma chave privada para autenticação. Tokens e chaves privadas são exemplos de segredos que um provedor de serviços pode publicar. Se você marcar um segredo em um repositório, qualquer pessoa que tenha acesso de leitura ao repositório pode usar o segredo para acessar o serviço externo com seus privilégios. Recomendamos que você armazene segredos em um local dedicado e seguro fora do repositório do seu projeto.

Se alguém verificar um segredo de um parceiro {% data variables.product.company_short %} em um repositório público ou privado, {% data variables.product.prodname_secret_scanning %} pode detectar o segredo e ajudar você a mitigar o impacto do vazamento.

Os provedores de serviço podem fazer parceria com o {% data variables.product.company_short %} para fornecer os respectivos formatos de segredo para verificação. Para obter mais informações, consulte "[Verificação de segredo](/partnerships/secret-scanning)".

### Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios públicos

 {% data variables.product.prodname_secret_scanning_caps %} é automaticamente habilitado em repositórios públicos, em que faz a varredura de código para saber se há segredos, para verificar os formatos de segredos conhecidos. Quando uma correspondência do seu formato de segredo é encontrada em um repositório público, {% data variables.product.company_short %} não divulga publicamente as informações como um alerta, mas envia uma carga para um ponto de extremidade de HTTP da sua escolha. Para uma visão geral de como a varredura de segredo funciona em repositórios públicos, consulte "[Varredura de segredo](/developers/overview/secret-scanning)".

Quando você faz push para um repositório público, o {% data variables.product.product_name %} verifica segredos no conteúdo dos commits. Se você alternar um repositório privado para público, o {% data variables.product.product_name %} verifica segredos em todo o repositório.

Quando o {% data variables.product.prodname_secret_scanning %} detecta um conjunto de credenciais, notificamos o provedor de serviço que emitiu o segredo. O provedor de serviço valida a credencial e decide se deve revogar o segredo, emitir um novo segredo ou entrar em contato com você diretamente, o que dependerá dos riscos associados a você ou ao provedor de serviço.

O {% data variables.product.product_name %} atualmente verifica repositórios públicos para encontrar segredos emitidos pelos seguintes provedores de serviços.

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Datadog
- Discord
- Doppler
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- MessageBird
- npm
- NuGet
- Palantir
- Plivo
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

### Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios privados

{% data reusables.secret-scanning.beta %}

Se você for um administrador de repositório ou um proprietário da organização, você poderá habilitar {% data variables.product.prodname_secret_scanning %} para repositórios privados que pertençam a organizações. Você pode habilitar {% data variables.product.prodname_secret_scanning %} para todos os seus repositórios ou para todos os novos repositórios da organização. {% data variables.product.prodname_secret_scanning_caps %} não está disponível para repositórios privados de contas de usuário. Para mais informações consulte "[Gerenciar as configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" e "[Gerenciar as configurações de segurança e análise da sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)".

Quando você faz push de commits em um repositório privado com o {% data variables.product.prodname_secret_scanning %} habilitado, o {% data variables.product.product_name %} verifica o conteúdo dos commits em busca de segredos.

Quando o {% data variables.product.prodname_secret_scanning %} detecta um segredo em um repositório privado, o {% data variables.product.prodname_dotcom %} envia alertas.

- O {% data variables.product.prodname_dotcom %} envia um alerta de email para os administradores do repositório e proprietários da organização.

- O {% data variables.product.prodname_dotcom %} exibe um alerta no repositório. Para obter mais informações, consulte "[Gerenciando alertas do {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."

Os administradores do repositório e proprietários da organização podem conceder acesso a alertas de {% data variables.product.prodname_secret_scanning %} aos usuários e à equipe. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

Para monitorar os resultados de {% data variables.product.prodname_secret_scanning %} nos seus repositórios privados ou na sua organização, você pode usar a API de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações sobre pontos de extremidade da API, consulte "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)".

O {% data variables.product.product_name %} atualmente verifica repositórios públicos para encontrar segredos emitidos pelos seguintes provedores de serviços.

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Discord
- Doppler
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- npm
- NuGet
- Palantir
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

{% note %}

**Nota: o ** {% data variables.product.prodname_secret_scanning_caps %} atualmente não permite que você defina seus próprios padrões para detecção de segredos.

{% endnote %}

### Leia mais

- "[Sobre proteger seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[Manter a conta e os dados seguros](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
