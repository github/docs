---
title: Adicionar um arquivo a um repositório
intro: |-
  Você pode fazer upload e commit de um arquivo existente em um repositório
   do {% data variables.product.product_name %}. Arraste e solte um arquivo em qualquer diretório na árvore de arquivos ou faça upload de arquivos da página principal do repositório.
redirect_from:
  - /articles/adding-a-file-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Os arquivos que você adiciona a um repositório por meio do navegador são limitados a {% data variables.large_files.max_github_browser_size %} por arquivo. É possível adicionar arquivos maiores, de até {% data variables.large_files.max_github_size %} cada um, usando a linha de comando. Para obter mais informações, consulte "[Adicionar um arquivo a um repositório usando a linha de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)".

{% tip %}

**Dicas:**
- É possível fazer upload de vários arquivos no {% data variables.product.product_name %} ao mesmo tempo.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
2. Abaixo do nome do repositório, clique em **Upload files** (Fazer upload de arquivos). ![Butão Upload files (Fazer upload de arquivos)](/assets/images/help/repository/upload-files-button.png)
{% else %}
2. Acima da lista de arquivos, usando o menu suspenso **Adicionar arquivo** clique em **Fazer upload de arquivos**. !["Fazer upload de arquivos" no menu suspenso "Adicionar arquivo"](/assets/images/help/repository/upload-files-button.png)
{% endif %}
3. Arraste e solte o arquivo ou a pasta que deseja fazer upload no repositório na árvore de arquivos. ![Área arrastar e soltar](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. Clique em **Commit changes** (Fazer commit das alterações). ![Botão Commit changes (Fazer commit de alterações)](/assets/images/help/repository/commit-changes-button.png)
