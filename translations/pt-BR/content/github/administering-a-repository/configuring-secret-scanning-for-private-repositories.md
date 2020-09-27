---
title: Configurando escaneamento secreto de repositórios privados
intro: 'Você pode configurar como o {{ site.data.variables.product.product_name }} verifica seus repositórios privados em busca de segredos.'
permissions: 'Pessoas com permissões de administrador em um repositório privado podem habilitar o {{ site.data.variables.product.prodname_secret_scanning }} para o repositório.'
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.secret-scanning.beta }}

### Habilitando o {{ site.data.variables.product.prodname_secret_scanning }} para repositórios privados

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.navigate-to-security-and-analysis }}
4. À direita de "Escaneamento secreto", clique em **Enable** (Habilitar). ![Habilitar o escaneamento secreto do seu repositório](/assets/images/help/repository/enable-secret-scanning.png)

### Excluindo alertas do {{ site.data.variables.product.prodname_secret_scanning }} em repositórios privados

Você pode usar um arquivo *secret_scanning.yml* para excluir diretórios do {{ site.data.variables.product.prodname_secret_scanning }}. Por exemplo, você pode excluir diretórios que contenham testes ou conteúdo gerado aleatoriamente.

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.files.add-file }}
3. No campo do nome de arquivo, digite *.github/secret_scanning.yml*. .
4. Em **Editar o novo arquivo**, digite `paths-ignore:` seguido pelos paths que você deseja excluir do {{ site.data.variables.product.prodname_secret_scanning }}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```

    Você pode usar caracteres especiais, como `*` para filtrar paths. Para obter mais informações sobre padrões de filtro, consulte "[Sintaxe do fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

    {% note %}

    **Notas:**
    - Se houver mais de 1.000 entradas em `paths-ignore`, {{ site.data.variables.product.prodname_secret_scanning }} excluirá apenas os primeiros 1.000 diretórios das verificações.
    - Se *secret_scanning.yml* for maior que 1 MB, {{ site.data.variables.product.prodname_secret_scanning }} ignorará todo o arquivo.

    {% endnote %}

Você também pode ignorar alertas individuais de {{ site.data.variables.product.prodname_secret_scanning }}. Para obter mais informações, consulte "[Gerenciando alertas do {{ site.data.variables.product.prodname_secret_scanning }}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-alerts)."

### Leia mais

- "[Gerenciando {{ site.data.variables.product.prodname_secret_scanning }} para sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization)"
