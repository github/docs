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
ms.openlocfilehash: 00983398e326997b6472da319d342ab0758018d3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061999'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Como habilitar a {% data variables.product.prodname_secret_scanning_GHAS %}

Você pode habilitar a {% data variables.product.prodname_secret_scanning_GHAS %} em qualquer repositório pertencente a uma organização. Uma vez habilitado, {% data reusables.secret-scanning.secret-scanning-process %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Se o {% data variables.product.prodname_advanced_security %} ainda não estiver habilitado no repositório, à direita de "{% data variables.product.prodname_GH_advanced_security %}", clique em **Habilitar**.
   {% ifversion fpt or ghec %}![Habilitar o {% data variables.product.prodname_GH_advanced_security %} no seu repositório](/assets/images/help/repository/enable-ghas-dotcom.png) {% elsif ghes or ghae %}![Habilitar o {% data variables.product.prodname_GH_advanced_security %} no seu repositório](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. Revise o impacto da habilitação do {% data variables.product.prodname_advanced_security %} e clique em **Habilitar o {% data variables.product.prodname_GH_advanced_security %} neste repositório**.
6. Quando você habilitar {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} pode ser habilitado automaticamente para o repositório, devido às configurações da organização. Se "{% data variables.product.prodname_secret_scanning_caps %}" for mostrado com um botão **Habilitar**, você ainda precisará habilitar a {% data variables.product.prodname_secret_scanning %} clicando em **Habilitar**. Se um botão **Desabilitar** for exibido, a {% data variables.product.prodname_secret_scanning %} já estará habilitada. 
   ![Habilitar a {% data variables.product.prodname_secret_scanning %} no repositório](/assets/images/help/repository/enable-secret-scanning-dotcom.png) {% ifversion secret-scanning-push-protection %}
7. Opcionalmente, caso deseje habilitar a proteção por push, clique em **Habilitar** à direita de "Proteção por push". {% data reusables.secret-scanning.push-protection-overview %} Para obter mais informações, confira "[Como proteger pushes com a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".
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
