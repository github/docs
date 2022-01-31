---
title: Sobre a varredura de segredo
intro: 'O {% data variables.product.product_name %} verifica repositórios em busca de tipos de segredos conhecidos a fim de impedir o uso fraudulento de segredos que sofreram commit acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Sobre o {% data variables.product.prodname_secret_scanning %}

Se o seu projeto se comunicar com um serviço externo, você pode usar um token ou uma chave privada para autenticação. Tokens e chaves privadas são exemplos de segredos que um provedor de serviços pode publicar. Se você marcar um segredo em um repositório, qualquer pessoa que tenha acesso de leitura ao repositório pode usar o segredo para acessar o serviço externo com seus privilégios. Recomendamos que você armazene segredos em um local dedicado e seguro fora do repositório do seu projeto.

{% data variables.product.prodname_secret_scanning_caps %} irá fazer a varredura de todo o seu histórico do Git em todos os branches presentes no seu repositório {% data variables.product.prodname_dotcom %} para obter quaisquer segredos. Os provedores de serviço podem fazer parceria com o {% data variables.product.company_short %} para fornecer os respectivos formatos de segredo para verificação. Para obter detalhes dos segredos e provedores de serviço compatíveis, consulte "[ Parceiros de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-partners)".

{% data reusables.secret-scanning.partner-program-link %}

{% ifversion fpt or ghec %}
## Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios públicos

{% data variables.product.prodname_secret_scanning_caps %} é automaticamente habilitado nos repositórios públicos. Quando você faz push para um repositório público, o {% data variables.product.product_name %} verifica segredos no conteúdo dos commits.

Quando {% data variables.product.prodname_secret_scanning %} detectar um segredo potencial, nós iremos notificar o prestador de serviço que emitiu o segredo. O prestador do serviço irá validar a string e, em seguida, decidirá se deve revogar o segredo, emitir um novo segredo ou entrar em contato com você diretamente. A sua ação dependerá dos riscos que associados a você ou a eles.

Você não pode alterar a configuração de {% data variables.product.prodname_secret_scanning %} em repositórios públicos.

{% ifversion fpt %}
As organizações que usam {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_GH_advanced_security %} podem configurar o {% data variables.product.prodname_secret_scanning %} para execução em repositórios privados. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning).
{% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios privados
{% elsif ghes or ghae %}
## Sobre {% data variables.product.prodname_secret_scanning %} em {% data variables.product.product_name %}

{% data variables.product.prodname_secret_scanning_caps %} está disponível em todos os repositórios de propriedade da organização como parte de {% data variables.product.prodname_GH_advanced_security %}. Não está disponível em repositórios pertencentes a usuários.
{% endif %}

Se você é um administrador de repositório ou um proprietário de uma organização, você pode habilitar {% data variables.product.prodname_secret_scanning %} para {% ifversion ghec %} repositórios privados{% endif %} pertencentes a organizações. Você pode habilitar {% data variables.product.prodname_secret_scanning %} para todos os repositórios da sua organização ou para todos os novos repositórios dentro da sua organização.{% ifversion ghec %} {% data variables.product.prodname_secret_scanning_caps %} não está disponível para repositórios privados pertencentes a contas de usuários.{% endif %} Para obter mais informações, consulte "[Gerenciando as configurações de segurança e análise para o seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" e "[Gerenciando as configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% ifversion ghes > 3.1 or ghae or ghec %}Também é possível definir padrões personalizados de {% data variables.product.prodname_secret_scanning %} para um repositório, organização ou empresa. Para obter mais informações, consulte "[Definir padrões personalizados para {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".
{% elsif ghes < 3.2 %}
As versões 3.1 ou inferior a {% data variables.product.product_name %} não permitem que você defina seus próprios padrões para detecção de segredos.
{% endif %}

### Sobre alertas de {% data variables.product.prodname_secret_scanning %}

Quando você faz push dos commits para um repositório{% ifversion ghec %} privado{% endif %} com {% data variables.product.prodname_secret_scanning %} habilitado, {% data variables.product.prodname_dotcom %} verifica o conteúdo dos segredos dos commits.

Quando {% data variables.product.prodname_secret_scanning %} detectar um segredo em um{% ifversion ghec %} repositório{% endif %} privado, {% data variables.product.prodname_dotcom %} gera um alerta.

- O {% data variables.product.prodname_dotcom %} envia um alerta de email para os administradores do repositório e proprietários da organização.
{% ifversion ghes > 3.0 or ghae or ghec %}
- {% data variables.product.prodname_dotcom %} envia um alerta de e-mail para o contribuidor que fez o commit do segredo no repositório com um link para o alerta de {% data variables.product.prodname_secret_scanning %} relacionado. O autor do commit pode visualizar o alerta no repositório e resolver o alerta.
{% endif %}
- {% data variables.product.prodname_dotcom %} exibe um alerta no repositório.{% ifversion ghes = 3.0 %} Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

{% ifversion ghes > 3.0 or ghae or ghec %}
Para obter mais informações sobre a visualização e resolução de alertas de {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

Os administradores do repositório e proprietários da organização podem conceder acesso aos usuários aos alertas de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% ifversion ghec or ghes > 3.1 %}
É possível usar a visão geral de segurança para ver uma visualização no nível de organização de quais repositórios habilitaram {% data variables.product.prodname_secret_scanning %} e os alertas encontrados. Para obter mais informações, consulte "[Visualizando a visão geral de segurança](/code-security/security-overview/viewing-the-security-overview)".
{% endif %}

{%- ifversion ghec or ghes > 3.1 %}Você também pode usar a API REST para {% elsif ghes = 3.1 %}Você pode usar a API REST para {% endif %}
{%- ifversion ghec or ghes > 3.0 %}monitorar resultados de {% data variables.product.prodname_secret_scanning %} nos repositórios {% ifversion ghec %}{% endif %}privados{% ifversion ghes > 3.1 %} ou na sua organização{% endif %}. Para obter mais informações sobre pontos de extremidade da API, consulte "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)".{% endif %}

{% endif %}

## Leia mais

- "[Protegendo o seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Manter a conta e os dados seguros](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[Gerenciar segredos criptografados nos seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
- "[Gerenciando segredos criptografados para o Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)"{% endif %}
- "[Segredos criptografados](/actions/security-guides/encrypted-secrets)"
