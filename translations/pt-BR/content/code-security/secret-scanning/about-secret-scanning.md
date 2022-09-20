---
title: Sobre a verificação de segredo
intro: 'O {% data variables.product.product_name %} verifica repositórios em busca de tipos de segredos conhecidos a fim de impedir o uso fraudulento de segredos que sofreram commit acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
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
ms.openlocfilehash: e7df4f378a88346d323e0a959261f7fe08ad4ec5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147683693'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Sobre a {% data variables.product.prodname_secret_scanning %}

Se o seu projeto se comunicar com um serviço externo, você pode usar um token ou uma chave privada para autenticação. Tokens e chaves privadas são exemplos de segredos que um provedor de serviços pode publicar. Se você marcar um segredo em um repositório, qualquer pessoa que tenha acesso de leitura ao repositório pode usar o segredo para acessar o serviço externo com seus privilégios. Recomendamos que você armazene segredos em um local dedicado e seguro fora do repositório do seu projeto.

O {% data variables.product.prodname_secret_scanning_caps %} verificará todo o histórico do Git em todos os branches presentes no seu repositório do {% data variables.product.prodname_dotcom %} em busca de segredos{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %}}, mesmo que o repositório esteja arquivado{% endif %}.

{% ifversion fpt or ghec %} O {% data variables.product.prodname_secret_scanning_caps %} está disponível no {% data variables.product.prodname_dotcom_the_website %} em duas formas:

1. **{% data variables.product.prodname_secret_scanning_partner_caps %}.** É executado automaticamente em todos os repositórios públicos. As cadeias de caracteres que correspondem aos padrões fornecidos por parceiros da verificação de segredos são relatadas diretamente ao parceiro relevante.

2. **{% data variables.product.prodname_secret_scanning_GHAS_caps %}.** {% ifversion fpt %}As organizações que usam {% data variables.product.prodname_ghe_cloud %} com uma licença para {% data variables.product.prodname_GH_advanced_security %} podem habilitar e configurar a verificação adicional de repositórios pertencentes à organização. {% elsif ghec %}Você pode habilitar e configurar a verificação adicional de repositórios pertencentes a organizações que usam {% data variables.product.prodname_ghe_cloud %} e ter uma licença para {% data variables.product.prodname_GH_advanced_security %}. {% endif %}Todas as cadeias de caracteres que correspondem aos padrões fornecidos por parceiros de verificação secretos, por outros provedores de serviços ou definidas por sua organização, são relatadas como alertas na guia "Segurança" dos repositórios. Se uma cadeia de caracteres em um repositório público corresponder a um padrão de parceiro, ela também será relatada ao parceiro.{% endif %} {% ifversion fpt %} Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security).{% endif %}

Os provedores de serviço podem fazer parceria com o {% data variables.product.company_short %} para fornecer os respectivos formatos de segredo para verificação. {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

Você também pode habilitar a {% data variables.product.prodname_secret_scanning %} como uma proteção por push para um repositório ou uma organização. Quando você habilita esse recurso, a {% data variables.product.prodname_secret_scanning %} impede que os colaboradores efetuem push de um código com um segredo detectado. Para continuar, os colaboradores precisam remover os segredos do push ou, se necessário, ignorar a proteção. {% ifversion push-protection-custom-link-orgs %} Os administradores também podem especificar um link personalizado que é exibido para o colaborador quando um push é bloqueado; o link pode conter recursos específicos da organização para ajudar os colaboradores. {% endif %}Para obter mais informações, confira "[Como proteger pushes com {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".

{% endif %}

{% ifversion fpt or ghec %}
## Sobre o {% data variables.product.prodname_secret_scanning_partner %}

Ao tornar público um repositório ou enviar por push de alterações em um repositório público, {% data variables.product.product_name %} sempre digitaliza o código para segredos que correspondem a padrões de parceiros. Se {% data variables.product.prodname_secret_scanning %} detectar um segredo potencial, nós iremos notificar o prestador de serviço que emitiu o segredo. O prestador do serviço irá validar a string e, em seguida, decidirá se deve revogar o segredo, emitir um novo segredo ou entrar em contato com você diretamente. A sua ação dependerá dos riscos que associados a você ou a eles. Para obter mais informações, confira "[Segredos compatíveis para padrões de parceiro](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)".

Você não pode alterar a configuração de {% data variables.product.prodname_secret_scanning %} em repositórios públicos.

{% ifversion fpt %} {% note %}

{% data reusables.secret-scanning.fpt-GHAS-scans %}

{% endnote %} {% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## Sobre a {% data variables.product.prodname_secret_scanning_GHAS %}
{% elsif ghes or ghae %}
## Sobre {% data variables.product.prodname_secret_scanning %} em {% data variables.product.product_name %}
{% endif %}

O {% data variables.product.prodname_secret_scanning_GHAS_caps %} está disponível em todos os repositórios pertencentes à organização como parte do {% data variables.product.prodname_GH_advanced_security %}. Não está disponível em repositórios pertencentes a usuários. Ao habilitar {% data variables.product.prodname_secret_scanning %} para um repositório, {% data variables.product.prodname_dotcom %} digitaliza o código para padrões que correspondem a segredos usados por muitos provedores de serviços. Para obter mais informações, confira "{% ifversion ghec %}[Segredos compatíveis para segurança avançada](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security){% else %}[Padrões do {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns) {% endif %}".

Se você for um administrador de repositório, poderá habilitar o {% data variables.product.prodname_secret_scanning_GHAS %} para qualquer repositório{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %}, incluindo os repositórios arquivados{% endif %}. Os proprietários da organização também podem habilitar {% data variables.product.prodname_secret_scanning_GHAS %} para todos os repositórios ou para todos os novos repositórios dentro de uma organização. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise para seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" e "[Como gerenciar as configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% ifversion ghes or ghae or ghec %}Você também pode definir padrões personalizados de {% data variables.product.prodname_secret_scanning %} para um repositório, uma organização ou uma empresa. Para obter mais informações, confira "[Como definir padrões personalizados para a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".
{% endif %}
### Sobre alertas de {% data variables.product.prodname_secret_scanning %}

Quando você efetua push de commits para um repositório com a {% data variables.product.prodname_secret_scanning %} habilitada, o {% data variables.product.prodname_dotcom %} verifica o conteúdo desses commits em busca de segredos que correspondem aos padrões definidos pelos provedores de serviço{% ifversion ghes or ghae or ghec %} e a todos os padrões personalizados definidos na empresa, na organização ou no repositório{% endif %}. 

Se {% data variables.product.prodname_secret_scanning %} detectar um segredo, {% data variables.product.prodname_dotcom %} gera um alerta.

- O {% data variables.product.prodname_dotcom %} envia um alerta de email para os administradores do repositório e proprietários da organização.
{% ifversion ghes or ghae or ghec %}
- {% data variables.product.prodname_dotcom %} envia um alerta de e-mail para o contribuidor que fez o commit do segredo no repositório com um link para o alerta de {% data variables.product.prodname_secret_scanning %} relacionado. O autor do commit pode visualizar o alerta no repositório e resolver o alerta.
{% endif %}
- {% data variables.product.prodname_dotcom %} exibe um alerta na guia "Segurança" do repositório.

{% ifversion ghes or ghae or ghec %} Para obter mais informações sobre como ver e resolver alertas da {% data variables.product.prodname_secret_scanning %}, confira "[Como gerenciar alertas da {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

Os administradores do repositório e proprietários da organização podem conceder acesso aos usuários aos alertas de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% ifversion ghec or ghes or ghae-issue-5503 %} Use a visão geral de segurança para ver uma exibição no nível da organização dos repositórios que habilitaram a {% data variables.product.prodname_secret_scanning %} e os alertas encontrados. Para obter mais informações, confira "[Como exibir a visão geral de segurança](/code-security/security-overview/viewing-the-security-overview)".
{% endif %}

{%- ifversion ghec or ghes %}Use também a API REST para {% endif %} monitorar os resultados da {% data variables.product.prodname_secret_scanning %} nos seus {% ifversion ghec %}repositórios {% endif %}privados{% ifversion ghes %} ou na sua organização{% endif %}. Para obter mais informações sobre pontos de extremidade de API, confira "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)".

{% endif %}

## Leitura adicional

- "[Como proteger seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Como manter sua conta e dados seguros](/github/authenticating-to-github/keeping-your-account-and-data-secure)" {%- ifversion fpt or ghec %}
- "[Como gerenciar segredos criptografados dos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %} {%- ifversion fpt or ghec or ghes > 3.2 %}
- "[Como gerenciar segredos criptografados do Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)"{% endif %}
- "[Segredos criptografados](/actions/security-guides/encrypted-secrets)"
