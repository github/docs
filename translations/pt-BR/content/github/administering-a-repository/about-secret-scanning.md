---
title: Sobre a varredura de segredo
intro: 'O {% data variables.product.product_name %} verifica repositórios em busca de tipos de segredos conhecidos a fim de impedir o uso fraudulento de segredos que sofreram commit acidentalmente.'
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

Quando você faz push de commits em um repositório privado com o {% data variables.product.prodname_secret_scanning %} habilitado, o {% data variables.product.product_name %} verifica o conteúdo dos commits em busca de segredos.

Quando o {% data variables.product.prodname_secret_scanning %} detecta um segredo em um repositório privado, o {% data variables.product.prodname_dotcom %} envia alertas.

- O {% data variables.product.prodname_dotcom %} envia um alerta de email para os administradores do repositório e proprietários da organização.

- O {% data variables.product.prodname_dotcom %} exibe um alerta no repositório. Para obter mais informações, consulte "[Gerenciando alertas do {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."

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
