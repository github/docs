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
ms.openlocfilehash: 18c77c929bcbe770fd44bfe5bec7e32143a2e604
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192942'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Sobre a {% data variables.product.prodname_secret_scanning %}

Se o seu projeto se comunicar com um serviço externo, você pode usar um token ou uma chave privada para autenticação. Tokens e chaves privadas são exemplos de segredos que um provedor de serviços pode publicar. Se você marcar um segredo em um repositório, qualquer pessoa que tenha acesso de leitura ao repositório pode usar o segredo para acessar o serviço externo com seus privilégios. Recomendamos que você armazene segredos em um local dedicado e seguro fora do repositório do seu projeto.

A {% data variables.product.prodname_secret_scanning_caps %} verificará todo o histórico do Git em todos os branches presentes no repositório do {% data variables.product.prodname_dotcom %} em busca de segredos{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, mesmo que o repositório esteja arquivado{% endif %}. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %}

{% ifversion fpt or ghec %} O {% data variables.product.prodname_secret_scanning_caps %} está disponível no {% data variables.product.prodname_dotcom_the_website %} em duas formas:

1. **{% data variables.product.prodname_secret_scanning_partner_caps %}.** É executado automaticamente em todos os repositórios públicos. As cadeias de caracteres que correspondem aos padrões fornecidos por parceiros da verificação de segredos são relatadas diretamente ao parceiro relevante.

2. **{% data variables.product.prodname_secret_scanning_GHAS_caps %}.** {% ifversion fpt %}As organizações que usam {% data variables.product.prodname_ghe_cloud %} com uma licença para {% data variables.product.prodname_GH_advanced_security %} podem habilitar e configurar a verificação adicional de repositórios pertencentes à organização. {% elsif ghec %}Você pode habilitar e configurar a verificação adicional de repositórios pertencentes a organizações que usam {% data variables.product.prodname_ghe_cloud %} e ter uma licença para {% data variables.product.prodname_GH_advanced_security %}. {% endif %}Todas as cadeias de caracteres que correspondem aos padrões fornecidos por parceiros de verificação secretos, por outros provedores de serviços ou definidas por sua organização, são relatadas como alertas na guia "Segurança" dos repositórios. Se uma cadeia de caracteres em um repositório público corresponder a um padrão de parceiro, ela também será relatada ao parceiro.{% endif %} {% ifversion fpt %} Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security).{% endif %}

Os provedores de serviço podem fazer parceria com o {% data variables.product.company_short %} para fornecer os respectivos formatos de segredo para verificação. {% data reusables.secret-scanning.partner-program-link %}

{% ifversion secret-scanning-push-protection %}

Você também pode habilitar a {% data variables.product.prodname_secret_scanning %} como uma proteção por push para um repositório ou uma organização. Quando você habilita esse recurso, a {% data variables.product.prodname_secret_scanning %} impede que os colaboradores efetuem push de um código com um segredo detectado. Para continuar, os colaboradores precisam remover os segredos do push ou, se necessário, ignorar a proteção. {% ifversion push-protection-custom-link-orgs %} Os administradores também podem especificar um link personalizado que é exibido para o colaborador quando um push é bloqueado; o link pode conter recursos específicos da organização para ajudar os colaboradores. {% endif %}Para obter mais informações, confira "[Como proteger pushes com {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".

{% endif %}

{% ifversion fpt or ghec %}
## Sobre o {% data variables.product.prodname_secret_scanning_partner %}

Ao tornar público um repositório ou enviar por push de alterações em um repositório público, {% data variables.product.product_name %} sempre digitaliza o código para segredos que correspondem a padrões de parceiros. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} Se {% data variables.product.prodname_secret_scanning %} detecta um segredo em potencial, notificamos o provedor de serviços que emitiu o segredo. O prestador do serviço irá validar a string e, em seguida, decidirá se deve revogar o segredo, emitir um novo segredo ou entrar em contato com você diretamente. A sua ação dependerá dos riscos que associados a você ou a eles. Para obter mais informações, confira "[Segredos compatíveis para padrões de parceiro](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)".

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

O {% data variables.product.prodname_secret_scanning_GHAS_caps %} está disponível em todos os repositórios pertencentes à organização como parte do {% data variables.product.prodname_GH_advanced_security %}. Não está disponível em repositórios pertencentes a usuários. Ao habilitar {% data variables.product.prodname_secret_scanning %} para um repositório, {% data variables.product.prodname_dotcom %} digitaliza o código para padrões que correspondem a segredos usados por muitos provedores de serviços. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} também executará periodicamente uma verificação completa do histórico git do conteúdo existente em repositórios {% data variables.product.prodname_GH_advanced_security %}, em que {% data variables.product.prodname_secret_scanning %} está habilitado e enviar notificações de alerta seguindo as configurações de notificação de alerta do {% data variables.product.prodname_secret_scanning %}. {% endif %}Para obter mais informações, confira "{% ifversion ghec %}[Segredos compatíveis com a segurança avançada](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security){% else %}[Padrões de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns){% endif %}".

{% ifversion secret-scanning-issue-body-comments %} {% note %}

**Nota:** {% data variables.product.prodname_secret_scanning_caps %} para descrições de problemas e comentários está em versão beta pública e sujeita a alterações.

{% endnote %} {% endif %}

Se você é administrador de repositório, pode habilitar o {% data variables.product.prodname_secret_scanning_GHAS %} para qualquer repositório{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}, incluindo os repositórios arquivados{% endif %}. Os proprietários da organização também podem habilitar {% data variables.product.prodname_secret_scanning_GHAS %} para todos os repositórios ou para todos os novos repositórios dentro de uma organização. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise para seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" e "[Como gerenciar as configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% ifversion ghes or ghae or ghec %}Você também pode definir padrões personalizados de {% data variables.product.prodname_secret_scanning %} para um repositório, uma organização ou uma empresa. Para obter mais informações, confira "[Como definir padrões personalizados para a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".
{% endif %}

{% ifversion secret-scanning-ghas-store-tokens %} O {% data variables.product.company_short %} armazena segredos detectados usando criptografia simétrica, tanto em dados em trânsito quanto em inativos.{% endif %}{% ifversion ghes > 3.7 %} Para fazer a rotação das chaves de criptografia usadas para armazenar os segredos detectados, você pode entrar em contato com o {% data variables.contact.contact_ent_support %}.{% endif %}

### Sobre alertas de {% data variables.product.prodname_secret_scanning %}

Quando você habilita {% data variables.product.prodname_secret_scanning %} para um repositório ou envia commits por push a um repositório com a {% data variables.product.prodname_secret_scanning %} habilitada, o {% data variables.product.prodname_dotcom %} verifica o conteúdo desses commits em busca de segredos que correspondam aos padrões definidos pelos provedores de serviço {% ifversion ghes or ghae or ghec %} e aos padrões personalizados definidos na empresa, na organização ou no repositório{% endif %}. {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}{% endif %} {% ifversion secret-scanning-backfills %}{% data variables.product.prodname_dotcom %} também executa periodicamente uma varredura de todo o conteúdo histórico em repositórios com {% data variables.product.prodname_secret_scanning %} habilitado.{% endif%}

Se {% data variables.product.prodname_secret_scanning %} detectar um segredo, {% data variables.product.prodname_dotcom %} gera um alerta.

- O {% data variables.product.prodname_dotcom %} envia um alerta de email para os administradores do repositório e proprietários da organização. Você receberá um alerta se estiver monitorando o repositório e se tiver ativado notificações para alertas de segurança ou para todas as atividades no repositório.
{% ifversion ghes or ghae or ghec %}
- Se o colaborador que cometeu o segredo não estiver ignorando o repositório, {% data variables.product.prodname_dotcom %} também enviará um alerta por email ao contribuidor. Os emails contêm um link para o alerta {% data variables.product.prodname_secret_scanning %} relacionado. O autor do commit pode visualizar o alerta no repositório e resolver o alerta.
{% endif %}
- {% data variables.product.prodname_dotcom %} exibe um alerta na guia "Segurança" do repositório.

{% ifversion ghes or ghae or ghec %} Para obter mais informações sobre como ver e resolver alertas da {% data variables.product.prodname_secret_scanning %}, confira "[Como gerenciar alertas da {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

Os administradores do repositório e proprietários da organização podem conceder acesso aos usuários aos alertas de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% ifversion ghec or ghes or ghae > 3.4 %} Use a visão geral de segurança para ver uma exibição no nível da organização dos repositórios em que a {% data variables.product.prodname_secret_scanning %} está habilitada e em que alertas foram encontrados. Para obter mais informações, confira "[Como exibir a visão geral de segurança](/code-security/security-overview/viewing-the-security-overview)".
{% endif %}

{%- ifversion ghec or ghes or ghae %} Use também a API REST para monitorar os resultados da {% data variables.product.prodname_secret_scanning %} nos {% ifversion ghec %}repositórios {% endif %}privados{% ifversion ghes %} ou na organização{% endif %}. Para obter mais informações sobre pontos de extremidade de API, confira "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)".{% endif %}

{% endif %}

## Leitura adicional

- "[Como proteger seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Como manter sua conta e dados seguros](/github/authenticating-to-github/keeping-your-account-and-data-secure)" {%- ifversion fpt or ghec %}
- "[Como gerenciar os segredos criptografados dos codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %} {%- ifversion fpt or ghec or ghes %}
- "[Como gerenciar segredos criptografados do Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)"{% endif %}
- "[Segredos criptografados](/actions/security-guides/encrypted-secrets)"
