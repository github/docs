---
title: Descobrir sua cota em disco
redirect_from:
  - /articles/what-is-the-size-limit-for-a-repository/
  - /articles/what-is-my-disk-quota
  - /github/managing-large-files/what-is-my-disk-quota
intro: 'O {% data variables.product.product_name %} tenta fornecer armazenamento abundante para todos os repositórios do Git, embora existam limites rígidos para tamanhos de arquivo e repositório.'
versions:
  free-pro-team: '*'
---
{% data reusables.large_files.use_lfs_tip %}

### Limites para tamanhos de arquivo e repositório

Para garantir o desempenho e confiabilidade aos nossos usuários, monitoramos ativamente os sinais da saúde geral do repositório. A saúde do repositório é uma função de vários fatores de interação, incluindo tamanho, frequência de commit, conteúdo e estrutura.

Recomendamos que repositórios permaneçam pequenos, idealmente inferior a 1 GB, e o tamanho inferior a 1 GB é altamente recomendado. Os repositórios menores são mais rápidos de clonar e são mais fáceis de trabalhar com e manter. Os arquivos individuais em um repositório são estritamente limitados a um limite máximo de tamanho de {% data variables.large_files.max_github_size %}. Para obter mais informações, consulte "[Trabalhar com arquivos grandes](/github/managing-large-files/working-with-large-files)".

Se o seu repositório impactar excessivamente a nossa infraestrutura, você pode receber um e-mail do {% data variables.contact.github_support %} pedindo para tomar medidas corretivas. Tentamos ser flexíveis, especialmente com grandes projetos que têm muitos colaboradores e trabalharemos com você para encontrar uma resolução sempre que possível. Você pode impedir que seu repositório afete nossa infraestrutura gerenciando efetivamente o tamanho e a saúde geral do seu repositório. É possível encontrar aconselhamento e uma ferramenta para análise de repositórios no repositório [`github/git-sizer`](https://github.com/github/git-sizer).

{% note %}

**Observação:** se você adicionar um arquivo a um repositório por meio de um navegador, o arquivo não poderá ser maior que {% data variables.large_files.max_github_browser_size %}. Para obter mais informações, consulte "[Adicionar um arquivo a um repositório](/github/managing-files-in-a-repository/adding-a-file-to-a-repository)."

{% endnote %}

### Backups

O Git não foi projetado para servir como ferramenta de backup. No entanto, existem muitas soluções especificamente projetadas para executar backups, como [Arq](https://www.arqbackup.com/), [Carbonite](http://www.carbonite.com/) e [CrashPlan](https://www.crashplan.com/en-us/).

### Descartes de banco de dados

Os sistemas de controle de versão, como o Git, não são projetados para gerenciar grandes arquivos de SQL. Para compartilhar bancos de dados grandes com outros desenvolvedores, recomendamos usar o [Dropbox](https://www.dropbox.com/).

O Git não deve ser usado para fazer backup de seus servidores de produção. Para obter mais informações, consulte "[Backups](/github/managing-large-files/what-is-my-disk-quota#backups)".

### Dependências externas

As dependências externas podem fazer com que os repositórios do Git se tornem muito grandes. Para evitar o preenchimento de um repositório com dependências externas, recomendamos o uso de um gerenciador de pacotes. Os gerenciados de pacote populares para linguagens comuns incluem [Bundler](http://bundler.io/), [Node's Package Manager](http://npmjs.org/) e [Maven](http://maven.apache.org/). Estes gerenciadores de pacotes são compatíveis com o uso direto dos repositórios do Git. Portanto, você não precisa de fontes pré-empacotadas.

### Versões de lançamento incluídas

Não recomendamos distribuir código compilado e versões predefinidas no repositório. Para obter mais informações, consulte "[Distribuir grandes arquivos binários](/github/managing-large-files/distributing-large-binaries)".

### Alterar o histórico de um repositório

Se você já tem um repositório bastante grande, você pode reduzir o tamanho de um repositório removendo arquivos grandes da história do repositório. Para obter mais informações, consulte "[Remover arquivos do histórico de um repositório](/github/managing-large-files/removing-files-from-a-repositorys-history)".
