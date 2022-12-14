---
title: Sobre arquivos grandes no GitHub
intro: '{% data variables.product.product_name %} limita o tamanho dos arquivos que você pode rastrear em repositórios do Git regulares. Aprenda a rastrear ou remover arquivos que estão além do limite.'
redirect_from:
  - /articles/distributing-large-binaries
  - /github/managing-large-files/distributing-large-binaries
  - /github/managing-large-files/working-with-large-files/distributing-large-binaries
  - /articles/removing-files-from-a-repository-s-history
  - /articles/removing-files-from-a-repositorys-history
  - /github/managing-large-files/removing-files-from-a-repositorys-history
  - /github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
  - /articles/conditions-for-large-files
  - /github/managing-large-files/conditions-for-large-files
  - /github/managing-large-files/working-with-large-files/conditions-for-large-files
  - /articles/what-is-the-size-limit-for-a-repository
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
  - /github/managing-large-files/working-with-large-files/what-is-my-disk-quota
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Large files
ms.openlocfilehash: c9910f669b13c0c2bc4a8517ac6b33476b23b475
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331645'
---
## Sobre limites de tamanho em {% data variables.product.product_name %}

{% ifversion fpt or ghec %} O {% data variables.product.product_name %} tenta fornecer amplo armazenamento para todos os repositórios Git, embora existam limites rígidos para tamanhos de arquivo e de repositório. Para garantir o desempenho e confiabilidade aos nossos usuários, monitoramos ativamente os sinais da saúde geral do repositório. A saúde do repositório é uma função de vários fatores de interação, incluindo tamanho, frequência de commit, conteúdo e estrutura.

### Limites de tamanho de arquivo
{% endif %}

{% data variables.product.product_name %} limita o tamanho dos arquivos permitidos nos repositórios. Se você tentar adicionar ou atualizar um arquivo maior do que {% data variables.large_files.warning_size %}, você receberá um aviso do Git. As alterações ainda serão carregadas no seu repositório com sucesso, mas você pode considerar remover o commit para minimizar o impacto no desempenho. Para obter mais informações, confira "[Como remover arquivos do histórico de um repositório](#removing-files-from-a-repositorys-history)".

{% note %}

**Observação:** se você adicionar um arquivo a um repositório por meio de um navegador, o arquivo não poderá ser maior que {% data variables.large_files.max_github_browser_size %}. Para obter mais informações, confira "[Como adicionar um arquivo a um repositório](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)".

{% endnote %}

{% ifversion ghes %}Por padrão, o {% endif %}{% data variables.product.product_name %} bloqueia os pushes que excedem {% data variables.large_files.max_github_size %}. {% ifversion ghes %}No entanto, um administrador do site pode configurar um limite diferente para o {% data variables.product.product_location %}.  Para obter mais informações, confira "[Como definir limites de push do Git](/enterprise/admin/guides/installation/setting-git-push-limits)".{% endif %}

Para rastrear arquivos além desse limite, você deverá usar {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Para obter mais informações, confira "[Sobre o {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)".

Se precisar distribuir arquivos grandes dentro do seu repositório, você poderá criar versões no {% data variables.product.product_location %} em vez de rastrear os arquivos. Para obter mais informações, confira "[Como distribuir binários grandes](#distributing-large-binaries)".

O Git não é projetado para lidar com arquivos SQL grandes. Para compartilhar bancos de dados grandes com outros desenvolvedores, recomendamos usar o [Dropbox](https://www.dropbox.com/).

{% ifversion fpt or ghec %}
### Limites de tamanho do repositório

Recomendamos que repositórios permaneçam pequenos, idealmente inferior a 1 GB, e o tamanho inferior a 1 GB é altamente recomendado. Os repositórios menores são mais rápidos de clonar e são mais fáceis de trabalhar com e manter. Se o seu repositório impactar excessivamente a nossa infraestrutura, você pode receber um e-mail do {% data variables.contact.github_support %} pedindo para tomar medidas corretivas. Tentamos ser flexíveis, especialmente com grandes projetos que têm muitos colaboradores e trabalharemos com você para encontrar uma resolução sempre que possível. Você pode impedir que seu repositório afete nossa infraestrutura gerenciando efetivamente o tamanho e a saúde geral do seu repositório. Encontre orientações e uma ferramenta para análise de repositório no repositório [`github/git-sizer`](https://github.com/github/git-sizer).

As dependências externas podem fazer com que os repositórios do Git se tornem muito grandes. Para evitar o preenchimento de um repositório com dependências externas, recomendamos o uso de um gerenciador de pacotes. Entre os gerenciadores de pacotes populares para linguagens comuns estão o [Bundler](http://bundler.io/), o [Gerenciador de Pacotes do Node](http://npmjs.org/) e o [Maven](http://maven.apache.org/). Estes gerenciadores de pacotes são compatíveis com o uso direto dos repositórios do Git. Portanto, você não precisa de fontes pré-empacotadas.

O Git não foi projetado para servir como ferramenta de backup. No entanto, há muitas soluções especificamente projetadas para executar backups, como o [Arq](https://www.arqbackup.com/), o [Carbonite](http://www.carbonite.com/) e o [CrashPlan](https://www.crashplan.com/en-us/).
{% endif %}

## Remover arquivos do histórico do repositório

{% warning %}

**Aviso**: estes procedimentos removem definitivamente os arquivos do repositório no computador e no {% data variables.product.product_location %}. Se o arquivo for importante, faça uma cópia de backup local em um diretório fora do repositório.

{% endwarning %}

### Remover um arquivo adicionado ao commit não processado mais recente

Se o arquivo foi adicionado ao commit mais recente e ainda não foi processado no {% data variables.product.product_location %}, você poderá excluir o arquivo e corrigir o commit:

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. Para remover o arquivo, insira `git rm --cached`:
  ```shell
  $ git rm --cached <em>giant_file</em>
  # Stage our giant file for removal, but leave it on disk
  ```
4. Faça commit dessa alteração usando `--amend -CHEAD`:
  ```shell
  $ git commit --amend -CHEAD
  # Amend the previous commit with your change
  # Simply making a new commit won't work, as you need
  # to remove the file from the unpushed history as well
  ```
5. Faça push dos commits para {% data variables.product.product_location %}:
  ```shell
  $ git push
  # Push our rewritten, smaller commit
  ```

### Remover um arquivo adicionado em um commit anterior

Se você adicionou um arquivo em um commit anterior, você deverá removê-lo do histórico do repositório. Para remover arquivos do histórico do repositório, use o BFG Repo-Cleaner ou o comando `git filter-branch`. Para obter mais informações, confira "[Como remover dados confidenciais de um repositório](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)".

## Distribuir binários grandes

Se você precisar distribuir arquivos grandes dentro do seu repositório, você poderá criar versões no {% data variables.product.product_location %}. As versões permitem que você empacote software, notas de versão e links para arquivos binários para que outras pessoas possam usar. Para obter mais informações, acesse "[Sobre as versões](/github/administering-a-repository/about-releases)".

{% ifversion fpt or ghec %}

Não limitamos o tamanho total dos arquivos binários na versão ou a banda larga usada para entregá-los. No entanto, cada arquivo deve ser menor que {% data variables.large_files.max_lfs_size %}.

{% endif %}

