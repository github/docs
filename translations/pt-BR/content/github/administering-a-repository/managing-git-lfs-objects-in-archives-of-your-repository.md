---
title: Gerenciando objetos LFS do Git em arquivos do seu repositório
shortTitle: 'Gerenciando objetos {{ site.data.variables.large_files.product_name_short }} nos arquivos'
intro: 'Você pode escolher se os objetos {{ site.data.variables.large_files.product_name_long }} ({{ site.data.variables.large_files.product_name_short }}) estão incluídos nos arquivos de código-fonte, como arquivos ZIP e tarballs que {{ site.data.variables.product.product_name }} cria para seu repositório.'
permissions: 'Pessoas com permissões de administrador para um repositório podem gerenciar se os objetos {{ site.data.variables.large_files.product_name_short }} estão incluídos nos arquivos do repositório.'
versions:
  free-pro-team: '*'
  enterprise-server: '=>2.23'
---

### Sobre os objetos {{ site.data.variables.large_files.product_name_short }} nos arquivos

O {{ site.data.variables.product.product_name }} cria arquivos de código-fonte do seu repositório na forma de arquivos ZIP e tarballs. As pessoas podem baixar esses arquivos na página principal do seu repositório ou como ativos de versão. Por padrão, os objetos {{ site.data.variables.large_files.product_name_short }} não estão incluídos nesses arquivos, apenas os arquivos de ponteiro para esses objetos. Para melhorar a usabilidade dos arquivos no seu repositório, você pode optar por incluir os objetos do {{ site.data.variables.large_files.product_name_short }}.

Sevocê optar por incluir os objetos {{ site.data.variables.large_files.product_name_short }}  nos arquivos de seu repositório, cada download desses arquivos contará para o uso de largura de banda de sua conta. Cada conta recebe {{ site.data.variables.large_files.initial_bandwidth_quota }} por mês de largura de banda gratuitamente, e você pode pagar pelo uso adicional. Para obter mais informações, consulte "[Sobre armazenamento e uso de largura de banda](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)" e "[Gerenciamento de cobrança para {{ site.data.variables.large_files.product_name_long }}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage)".

### Gerenciando objetos {{ site.data.variables.large_files.product_name_short }} nos arquivos

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
3. Em "Arquivos", selecione ou desmarque **Incluir objetos {{ site.data.variables.large_files.product_name_short }} nos arquivos**. ![Caixa de seleção para incluir os objetos {{ site.data.variables.large_files.product_name_short }} nos arquivos](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
