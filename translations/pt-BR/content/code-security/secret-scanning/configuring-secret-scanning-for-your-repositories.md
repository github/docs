---
title: Configurar a varredura de segredo para os seus repositórios
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
shortTitle: Configurar varreduras de segredos
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Habilitar o {% data variables.product.prodname_secret_scanning_GHAS %}

Você pode habilitar {% data variables.product.prodname_secret_scanning_GHAS %} para qualquer repositório que pertença a uma organização. Uma vez habilitado, {% data reusables.secret-scanning.secret-scanning-process %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Se {% data variables.product.prodname_advanced_security %} ainda não estiver habilitado para o repositório, à direita de "{% data variables.product.prodname_GH_advanced_security %}", clique em **Habilitar**.
   {% ifversion fpt or ghec %}![Habilitar {% data variables.product.prodname_GH_advanced_security %} para o seu repositório](/assets/images/help/repository/enable-ghas-dotcom.png)
   {% elsif ghes or ghae %}![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. Revise o impacto de habilitar {% data variables.product.prodname_advanced_security %}, e clique em **Permitir {% data variables.product.prodname_GH_advanced_security %} para este repositório**.
6. Quando você habilitar {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} pode ser habilitado automaticamente para o repositório, devido às configurações da organização. Se "{% data variables.product.prodname_secret_scanning_caps %}" é exibido com um botão **habilitar**. Você ainda precisa habilitar {% data variables.product.prodname_secret_scanning %} clicando em **Habilitar**. Se você vir um botão **Desabilitar**, significa que {% data variables.product.prodname_secret_scanning %} já está habilitado. ![Habilitar {% data variables.product.prodname_secret_scanning %} para o seu repositório](/assets/images/help/repository/enable-secret-scanning-dotcom.png)
{% ifversion secret-scanning-push-protection %}
7. Opcionalmente, se você quiser habilitar a proteção push, clique em **Habilitar** à direita de "Proteção push". {% data reusables.secret-scanning.push-protection-overview %} Para obter mais informações, consulte "[Protegendo pushes com {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)". ![Habilitar proteção push para o seu repositório](/assets/images/help/repository/secret-scanning-enable-push-protection.png)
{% endif %}
{% ifversion ghae %}
1. Antes de habilitar {% data variables.product.prodname_secret_scanning %}, você precisa habilitar {% data variables.product.prodname_GH_advanced_security %} primeiro. À direita de "{% data variables.product.prodname_GH_advanced_security %}", clique em **Habilitar**. ![Habilitar {% data variables.product.prodname_GH_advanced_security %} para o seu repositório](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Clique **Habilitar {% data variables.product.prodname_GH_advanced_security %} para este repositório** para confirmar a ação. ![Confirme a habilitação de {% data variables.product.prodname_GH_advanced_security %} para o seu repositório](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. À direita de "{% data variables.product.prodname_secret_scanning_caps %}", clique em **Habilitar**. ![Habilitar {% data variables.product.prodname_secret_scanning %} para o seu repositório](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png)
{% endif %}

## Excluindo diretórios de {% data variables.product.prodname_secret_scanning_GHAS %}

Você pode usar um arquivo *secret_scanning.yml* para excluir diretórios do {% data variables.product.prodname_secret_scanning %}. Por exemplo, você pode excluir diretórios que contenham testes ou conteúdo gerado aleatoriamente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo do nome de arquivo, digite *.github/secret_scanning.yml*. .
4. Em **Editar o novo arquivo**, digite `paths-ignore:` seguido pelos paths que você deseja excluir do {% data variables.product.prodname_secret_scanning %}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    Você pode usar caracteres especiais, como `*` para filtrar paths. Para obter mais informações sobre padrões de filtro, consulte "[Sintaxe do fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

    {% note %}

    **Notas:**
    - Se houver mais de 1.000 entradas em `paths-ignore`, {% data variables.product.prodname_secret_scanning %} excluirá apenas os primeiros 1.000 diretórios das verificações.
    - Se *secret_scanning.yml* for maior que 1 MB, {% data variables.product.prodname_secret_scanning %} ignorará todo o arquivo.

    {% endnote %}

Você também pode ignorar alertas individuais de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, consulte "[Gerenciando alertas do {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)."

## Leia mais

- "[Gerenciando configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
- "[Definindo padrões personalizados para {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)"
