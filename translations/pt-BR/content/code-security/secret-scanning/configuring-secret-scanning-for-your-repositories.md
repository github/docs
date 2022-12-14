---
title: Configurar a verificação de segredo para seus repositórios
intro: 'Você pode configurar como {% data variables.product.prodname_dotcom %} digitaliza os seus repositórios vom relação a segredos que correspondem a padrões avançados de segurança.'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configure secret scans
ms.openlocfilehash: 7739cca195f46043945f39f48aad8bf88aa97fed
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192934'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Como habilitar a {% data variables.product.prodname_secret_scanning_GHAS %}

Você pode habilitar a {% data variables.product.prodname_secret_scanning_GHAS %} em qualquer repositório pertencente a uma organização. Depois de habilitado, {% data reusables.secret-scanning.secret-scanning-process %} {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}

{% note %}

**Nota:** {% data variables.product.prodname_secret_scanning_caps %} para descrições de problemas e comentários está em beta público e sujeito a alterações.

{% endnote %} {% endif %}

{% ifversion secret-scanning-enterprise-level %} {% note %}

**Note:** se sua organização pertence a uma conta corporativa, um proprietário corporativo também pode habilitar {% data variables.product.prodname_secret_scanning %} no nível de empresa. Para obter mais informações, confira "[Como gerenciar os recursos do {% data variables.product.prodname_GH_advanced_security %} na empresa](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)".

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Se o {% data variables.product.prodname_advanced_security %} ainda não estiver habilitado no repositório, à direita de "{% data variables.product.prodname_GH_advanced_security %}", clique em **Habilitar**.
   {% ifversion fpt or ghec %}![Habilitar o {% data variables.product.prodname_GH_advanced_security %} no seu repositório](/assets/images/help/repository/enable-ghas-dotcom.png) {% elsif ghes or ghae %}![Habilitar o {% data variables.product.prodname_GH_advanced_security %} no seu repositório](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
2. Revise o impacto da habilitação do {% data variables.product.prodname_advanced_security %} e clique em **Habilitar o {% data variables.product.prodname_GH_advanced_security %} neste repositório**.
3. Quando você habilitar {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} pode ser habilitado automaticamente para o repositório, devido às configurações da organização. Se "{% data variables.product.prodname_secret_scanning_caps %}" for mostrado com um botão **Habilitar**, você ainda precisará habilitar a {% data variables.product.prodname_secret_scanning %} clicando em **Habilitar**. Se um botão **Desabilitar** for exibido, a {% data variables.product.prodname_secret_scanning %} já estará habilitada. 
   ![Habilitar a {% data variables.product.prodname_secret_scanning %} no repositório](/assets/images/help/repository/enable-secret-scanning-dotcom.png) {% ifversion secret-scanning-push-protection %}
1. Opcionalmente, caso deseje habilitar a proteção por push, clique em **Habilitar** à direita de "Proteção por push". {% data reusables.secret-scanning.push-protection-overview %} Para obter mais informações, confira "[Como proteger pushes com a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
   ![Habilitar a proteção por push no seu repositório](/assets/images/help/repository/secret-scanning-enable-push-protection.png) {% endif %} {% ifversion ghae %}
1. Antes de habilitar {% data variables.product.prodname_secret_scanning %}, você precisa habilitar {% data variables.product.prodname_GH_advanced_security %} primeiro. À direita de "{% data variables.product.prodname_GH_advanced_security %}", clique em **Habilitar**.
   ![Habilitar o {% data variables.product.prodname_GH_advanced_security %} no seu repositório](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Clique em **Habilitar o {% data variables.product.prodname_GH_advanced_security %} neste repositório** para confirmar a ação.
   ![Confirmar a habilitação do {% data variables.product.prodname_GH_advanced_security %} no seu repositório](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. À direita de "{% data variables.product.prodname_secret_scanning_caps %}", clique em **Habilitar**.
   ![Habilitar a {% data variables.product.prodname_secret_scanning %} no seu repositório](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png) {% endif %}

## Excluindo diretórios de {% data variables.product.prodname_secret_scanning_GHAS %}

Use um arquivo *secret_scanning.yml* para excluir diretórios da {% data variables.product.prodname_secret_scanning %}. Por exemplo, você pode excluir diretórios que contenham testes ou conteúdo gerado aleatoriamente.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite *.github/secret_scanning.yml*.
4. Em **Editar novo arquivo**, digite `paths-ignore:` seguido dos caminhos que deseja excluir da {% data variables.product.prodname_secret_scanning %}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```
    
    Você pode usar caracteres especiais, como `*` para filtrar caminhos. Para obter mais informações sobre os padrões de filtro, confira "[Sintaxe de fluxo de trabalho do GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

    {% note %}
    
    **Observações:**
    - Se houver mais de mil entradas em `paths-ignore`, a {% data variables.product.prodname_secret_scanning %} excluirá apenas os primeiros mil diretórios das verificações.
    - Se *secret_scanning.yml* for maior que 1 MB, a {% data variables.product.prodname_secret_scanning %} vai ignorar todo o arquivo.
    
    {% endnote %}

Você também pode ignorar alertas individuais de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, confira "[Como gerenciar alertas da {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)".

## Leitura adicional

- "[Como gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
- "[Como definir padrões personalizados para {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)"
