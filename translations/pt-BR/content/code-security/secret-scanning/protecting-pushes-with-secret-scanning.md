---
title: Como proteger pushes com a verificação de segredos
intro: 'Você pode usar a {% data variables.product.prodname_secret_scanning %} para impedir que segredos com suporte sejam enviados por push à {% ifversion secret-scanning-enterprise-level %}empresa,{% endif %} organização{% ifversion secret-scanning-enterprise-level %},{% endif %} ou ao repositório habilitando a proteção contra push.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable push protection
ms.openlocfilehash: 518013033ac5d87fd8428d1c99d5f633a3bc2e65
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184493'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %} {% data reusables.secret-scanning.push-protection-beta %}

## Sobre a proteção por push para segredos

Até agora, o {% data variables.product.prodname_secret_scanning_GHAS %} verifica se há segredos _após_ um push e alerta os usuários sobre os segredos expostos. {% data reusables.secret-scanning.push-protection-overview %}

Se um colaborador ignorar um bloco de proteção por push para um segredo, {% data variables.product.prodname_dotcom %}:
- cria um alerta na guia "Segurança" do repositório no estado descrito na tabela abaixo.
- adicionará o evento bypass ao log de auditoria.{% ifversion secret-scanning-push-protection-email %}
- enviará um alerta por email para proprietários da organização, gerentes de segurança e administradores de repositório que estiverem vendo o repositório, com um link para o segredo e o motivo pelo qual ele foi permitido.{% endif %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

Para obter informações sobre segredos e provedores de serviços compatíveis com a proteção por push, confira "[Padrões de {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)".

## Como habilitar a {% data variables.product.prodname_secret_scanning %} como uma proteção por push

Para que você use a {% data variables.product.prodname_secret_scanning %} como uma proteção contra push, {% ifversion secret-scanning-enterprise-level %}a empresa,{% endif %} a organização{% ifversion secret-scanning-enterprise-level %},{% endif %} ou o repositório precisa ter o {% data variables.product.prodname_GH_advanced_security %} e a {% data variables.product.prodname_secret_scanning %} habilitado. Para obter mais informações, confira {% ifversion secret-scanning-enterprise-level %}"[Como gerenciar as configurações de segurança e análise da empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)",{% endif %} "[Como gerenciar as configurações de segurança e análise da organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)", "[Como gerenciar as configurações de segurança e análise do repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" e "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."

Os proprietários da organização, os gerentes de segurança e os administradores de repositório podem habilitar a proteção por push na {% data variables.product.prodname_secret_scanning %} por meio da interface do usuário e da API. Para obter mais informações, confira "[Repositórios](/rest/reference/repos#update-a-repository)" e expanda a seção "Propriedades do objeto `security_and_analysis`" na documentação da API REST.

{% ifversion secret-scanning-enterprise-level %}
### Como habilitar a {% data variables.product.prodname_secret_scanning %} como uma proteção contra push na empresa
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Segurança e análise de código**. {% data reusables.advanced-security.secret-scanning-push-protection-enterprise %} {% endif %}

### Como habilitar a {% data variables.product.prodname_secret_scanning %} como uma proteção por push para uma organização

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Como habilitar a {% data variables.product.prodname_secret_scanning %} como uma proteção por push para um repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Usar a verificação de segredos como uma proteção por push da linha de comando

{% data reusables.secret-scanning.push-protection-command-line-choice %}

Até cinco segredos detectados serão exibidos por vez na linha de comando. Se um segredo específico já tiver sido detectado no repositório e um alerta já existir, o {% data variables.product.prodname_dotcom %} não bloqueará esse segredo. 

{% ifversion push-protection-custom-link-orgs %} 

Os administradores da organização podem fornecer um link personalizado que será exibido quando um push for bloqueado. Esse link personalizado pode conter recursos e conselhos específicos da organização, como instruções sobre como usar um cofre de segredos recomendado ou para quem entrar em contato para perguntas relacionadas ao segredo bloqueado.

![Captura de tela que mostra que um push é bloqueado quando um usuário tenta efetuar push de um segredo para um repositório](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![Captura de tela que mostra que um push é bloqueado quando um usuário tenta efetuar push de um segredo para um repositório](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} Para obter mais informações sobre como corrigir segredos bloqueados, confira "[Efetuar push de um branch bloqueado pela proteção por push](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)".

Se você confirmar que um segredo é real e que pretende corrigi-lo mais tarde, tente corrigi-lo o mais rápido possível. Por exemplo, você pode revogar o segredo e removê-lo do histórico de commits do repositório. Segredos reais que foram expostos devem ser revogados para evitar acesso não autorizado. Você pode considerar primeiro rotacionar o segredo antes de revogá-lo. Para obter mais informações, confira "[Como remover dados confidenciais de um repositório](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

{% ifversion ghes < 3.6 or ghae < 3.6 %}

{% tip %}

**Dica:** Você pode usar {% data variables.product.prodname_secret_scanning %} como uma proteção por push da interface do usuário da web, bem como a linha de comando, em {% data variables.product.product_name %} versão 3.6 ou posterior.

{% endtip %}

{% endif %}

### Como permitir o push de um segredo bloqueado

Se o {% data variables.product.prodname_dotcom %} bloquear um segredo que você acredita ser seguro para push, permita o segredo e especifique o motivo pelo qual ele deve ser permitido.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Acesse a URL retornada pelo {% data variables.product.prodname_dotcom %} quando o push foi bloqueado.
  ![Captura de tela mostrando o formulário com opções para desbloquear o push de um segredo](/assets/images/help/repository/secret-scanning-unblock-form.png) {% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Clique em **Permitir que eu efetue push deste segredo**.
2. Tente efetuar push novamente na linha de comando em até três horas. Se você não efetuar push em até três horas, precisará repetir esse processo.

{% ifversion secret-scanning-push-protection-web-ui %}
## Como usar a verificação de segredos como uma proteção de push da interface do usuário da Web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

O {% data variables.product.prodname_dotcom %} exibirá apenas um segredo detectado por vez na interface do usuário da Web. Se um segredo específico já tiver sido detectado no repositório e um alerta já existir, o {% data variables.product.prodname_dotcom %} não bloqueará esse segredo.

{% ifversion push-protection-custom-link-orgs %} 

Os administradores da organização podem fornecer um link personalizado que será exibido quando um push for bloqueado. Esse link personalizado pode conter recursos e conselhos específicos para sua organização. Por exemplo, o link personalizado pode apontar para um arquivo README com informações sobre o cofre secreto da organização, para quais equipes e indivíduos escalar perguntas ou a política aprovada pela organização para trabalhar com segredos e reescrever o histórico de confirmação.
{% endif %}

Você pode remover o segredo do arquivo usando a interface do usuário da Web. Depois de remover o segredo, a faixa na parte superior da página será alterada e informará que agora você pode fazer commit das suas alterações.

  ![Captura de tela mostrando o commit na interface do usuário da Web permitida após a correção do segredo](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Ignorando a proteção por push em um segredo

{% data reusables.secret-scanning.push-protection-remove-secret %} Para obter mais informações sobre como corrigir segredos bloqueados, confira "[Efetuar push de um branch bloqueado pela proteção por push](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)". 

Se você confirmar que um segredo é real e que pretende corrigi-lo mais tarde, tente corrigi-lo o mais rápido possível. Para obter mais informações, confira "[Como remover dados confidenciais de um repositório](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)".

Se o {% data variables.product.prodname_dotcom %} bloquear um segredo que você acredita ser seguro para push, permita o segredo e especifique o motivo pelo qual ele deve ser permitido.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

Se você confirmar que um segredo é real e que pretende corrigi-lo mais tarde, tente corrigi-lo o mais rápido possível.

1. Na faixa que apareceu na parte superior da página quando o {% data variables.product.prodname_dotcom %} bloqueou seu commit, clique em **Ignorar proteção**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Captura de tela que mostra o formulário com opções para desbloquear o push de um segredo](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Clique em **Permitir segredo**.


{% endif %}
