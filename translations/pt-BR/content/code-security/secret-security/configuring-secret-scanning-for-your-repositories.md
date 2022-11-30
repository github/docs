---
title: Configurar a varredura de segredo para os seus repositórios
intro: 'Você pode configurar como {% data variables.product.prodname_dotcom %} faz a varredura de segredos dos seus repositórios.'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Observação:** {% data variables.product.prodname_secret_scanning_caps %} está habilitado por padrão em repositórios públicos e não pode ser desativado. Você pode configurar {% data variables.product.prodname_secret_scanning %} apenas para seus repositórios privados.

{% endnote %}
{% endif %}

### Habilitar {% data variables.product.prodname_secret_scanning %} para repositórios {% if currentVersion == "free-pro-team@latest" %}privados {% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@next" %}
Você pode habilitar {% data variables.product.prodname_secret_scanning %} para qualquer repositório que pertença a uma organização.
{% endif %} Once enabled, {% data reusables.secret-scanning.secret-scanning-process %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next"%}
4. Se {% data variables.product.prodname_advanced_security %} ainda não estiver habilitado para o repositório, à direita de "{% data variables.product.prodname_GH_advanced_security %}", clique em **Habilitar**.
   {% if currentVersion == "free-pro-team@latest" %}![Habilitar {% data variables.product.prodname_GH_advanced_security %} para o seu repositório](/assets/images/help/repository/enable-ghas-dotcom.png)
   {% elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}![Enable {% data variables.product.prodname_GH_advanced_security %} for your repository](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
5. Revise o impacto de habilitar {% data variables.product.prodname_advanced_security %}, e clique em **Permitir {% data variables.product.prodname_GH_advanced_security %} para este repositório**.
6. Quando você habilitar {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} pode ser habilitado automaticamente para o repositório, devido às configurações da organização. Se "{% data variables.product.prodname_secret_scanning_caps %}" é exibido com um botão **habilitar**. Você ainda precisa habilitar {% data variables.product.prodname_secret_scanning %} clicando em **Habilitar**. Se você vir um botão **Desabilitar**, significa que {% data variables.product.prodname_secret_scanning %} já está habilitado. ![Habilitar {% data variables.product.prodname_secret_scanning %} para o seu repositório](/assets/images/help/repository/enable-secret-scanning-dotcom.png)
   {% elsif currentVersion == "enterprise-server@3.0" %}
7. À direita de "{% data variables.product.prodname_secret_scanning_caps %}", clique em **Habilitar**. ![Habilitar {% data variables.product.prodname_secret_scanning %} para o seu repositório](/assets/images/help/repository/enable-secret-scanning-ghe.png)
   {% endif %}
{% if currentVersion == "github-ae@latest" %}
1. Antes de habilitar {% data variables.product.prodname_secret_scanning %}, você precisa habilitar {% data variables.product.prodname_GH_advanced_security %} primeiro. À direita de "{% data variables.product.prodname_GH_advanced_security %}", clique em **Habilitar**. ![Habilitar {% data variables.product.prodname_GH_advanced_security %} para o seu repositório](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Clique **Habilitar {% data variables.product.prodname_GH_advanced_security %} para este repositório** para confirmar a ação. ![Confirme a habilitação de {% data variables.product.prodname_GH_advanced_security %} para o seu repositório](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. À direita de "{% data variables.product.prodname_secret_scanning_caps %}", clique em **Habilitar**. ![Habilitar {% data variables.product.prodname_secret_scanning %} para o seu repositório](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png)
{% endif %}

### Excluir alertas de {% data variables.product.prodname_secret_scanning %} em repositórios {% if currentVersion == "free-pro-team@latest" %}privados {% endif %}

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

### Leia mais

- "[Gerenciando configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}- "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)"{% endif %}
