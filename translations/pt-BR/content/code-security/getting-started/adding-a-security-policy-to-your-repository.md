---
title: Adicionar uma política de segurança a um repositório
intro: 'Você pode dar instruções sobre como relatar uma vulnerabilidade de segurança no seu projeto, adicionando uma política de segurança ao seu repositório.'
redirect_from:
  - /articles/adding-a-security-policy-to-your-repository
  - /github/managing-security-vulnerabilities/adding-a-security-policy-to-your-repository
  - /github/code-security/security-advisories/adding-a-security-policy-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Security policies
  - Vulnerabilities
  - Repositories
  - Health
shortTitle: Add a security policy
ms.openlocfilehash: ef4a256c06b9149bd9db8d7afdce974dd1d29f0d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159266'
---
## Sobre políticas de segurança

Para fornecer instruções às pessoas para relatar vulnerabilidades de segurança no seu projeto,{% ifversion fpt or ghes or ghec %} você pode adicionar um arquivo _SECURITY.md_ à raiz do repositório, a `docs` ou à pasta `.github`.{% else %} você pode adicionar um arquivo _SECURITY.md_ à raiz do repositório ou à pasta `docs`.{% endif %} Quando alguém criar um problema no seu repositório, ele verá um link para a política de segurança do projeto.

{% ifversion not ghae %}
<!-- no public repos in GHAE -->
Você pode criar uma política de segurança padrão para sua organização ou conta pessoal. Para obter mais informações, confira "[Como criar um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".
{% endif %}

{% tip %}

**Dica:** para ajudar as pessoas a encontrar sua política de segurança, crie um link para o arquivo _SECURITY.md_ de outros locais no repositório, como o arquivo LEIAME. Para obter mais informações, confira "[Sobre os arquivos LEIAME](/articles/about-readmes)".

{% endtip %}

{% ifversion fpt or ghec %} Depois que alguém relatar uma vulnerabilidade de segurança no seu projeto, use as {% data variables.product.prodname_security_advisories %} para divulgar, corrigir e publicar informações sobre a vulnerabilidade. Para obter mais informações sobre o processo de relatório e divulgação de vulnerabilidades no {% data variables.product.prodname_dotcom %}, confira "[Sobre a divulgação coordenada de vulnerabilidades de segurança](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github)". Para obter mais informações sobre avisos de segurança do repositório, confira "[Sobre os avisos de segurança do repositório](/github/managing-security-vulnerabilities/about-github-security-advisories)".

{% data reusables.repositories.github-security-lab %} {% endif %} {% ifversion ghes or ghae %}
<!-- alternative to the content about GitHub Security Advisories in the dotcom article -->
Ao disponibilizar claramente instruções de relatório de segurança, você torna mais fácil para os usuários relatar quaisquer vulnerabilidades de segurança que encontrem no repositório usando seu canal de comunicação preferido.
{% endif %}

## Adicionar uma política de segurança a um repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
3. Na barra lateral esquerda, clique em **Política de segurança**.
  ![Guia Política de segurança](/assets/images/help/security/security-policy-tab.png)
4. Clique em **Iniciar instalação**.
  ![Botão Iniciar configuração](/assets/images/help/security/start-setup-security-policy-button.png)
5. No novo arquivo _SECURITY.md_, adicione informações sobre as versões compatíveis com seu projeto e como relatar uma vulnerabilidade.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## Leitura adicional

- "[Como proteger seu repositório](/code-security/getting-started/securing-your-repository)"{% ifversion not ghae %}
- "[Como configurar seu projeto para contribuições úteis](/communities/setting-up-your-project-for-healthy-contributions)"{% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_security %}]({% data variables.product.prodname_security_link %}){% endif %}
