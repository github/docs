---
title: Colaboração com o Git Large File Storage
intro: 'Com o {% data variables.large_files.product_name_short %} habilitado, você poderá fazer fetch, modificar e fazer push de arquivos grandes, assim como em qualquer arquivo gerenciado pelo Git. No entanto, um usuário que não tem o {% data variables.large_files.product_name_short %} verá um fluxo de trabalho diferente.'
redirect_from:
  - /articles/collaboration-with-large-file-storage/
  - /articles/collaboration-with-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Se os colaboradores no seu repositório não tiverem o {% data variables.large_files.product_name_short %} instalado, eles não terão acesso ao arquivo grande original. Se tentarem clonar o repositório, eles farão fetch apenas dos arquivos de ponteiro e não terão acesso aos dados reais.

{% tip %}

**Dica:** para ajudar os usuários sem o {% data variables.large_files.product_name_short %} habilitado, é recomendável definir diretrizes para contribuidores do repositório que descrevam como trabalhar com arquivos grandes. Por exemplo, você pode pedir que os contribuidores não modifiquem arquivos grandes nem façam upload das alterações em um serviço de compartilhamento de arquivos, como [Dropbox](http://www.dropbox.com/) ou <a href="https://drive.google.com/" data-proofer-ignore>Google Drive</a>. Para obter mais informações, consulte "[Configurar diretrizes para contribuidores de repositório](/github/building-a-strong-community/setting-guidelines-for-repository-contributors)".

{% endtip %}

### Exibir arquivos grandes em pull requests

O {% data variables.product.product_name %} não renderiza objetos do {% data variables.large_files.product_name_short %} em pull requests. Apenas o arquivo de ponteiro é mostrado:

![Amostra de PR para arquivos grandes](/assets/images/help/large_files/large_files_pr.png)

Para obter mais informações sobre arquivos de ponteiro, consulte "[Sobre o {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format)".

Para ver as alterações feitas em arquivos grandes, confira o pull request localmente para revisar a diferença. Para obter mais informações, consulte "[Fazer checkout de pull requests localmente](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)".

{% if currentVersion == "free-pro-team@latest" %}

### Fazer push de arquivos grandes em bifurcações

Fazer push de arquivos grandes em bifurcações de um repositório conta nas cotas de armazenamento e na largura de banda do repositório principal, e não nas cotas do proprietário da bifurcação.

É possível fazer push de objetos do {% data variables.large_files.product_name_short %} em bifurcações públicas se a rede do repositório já tiver objetos do {% data variables.large_files.product_name_short %} ou se você tiver acesso de gravação à raiz da rede do repositório.

{% endif %}

### Leia mais

- "[Duplicar um repositório com objetos do Git Large File Storage](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)"
