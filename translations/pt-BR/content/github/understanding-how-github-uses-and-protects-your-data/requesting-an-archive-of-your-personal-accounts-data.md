---
title: Solicitar um arquivo dos dados da conta pessoal
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user_settings.export-data %}'
versions:
  free-pro-team: '*'
topics:
  - policy
  - legal
---

O {% data variables.product.product_name %} os metadados de repositório e de perfil da atividade da conta pessoal. Você pode exportar os dados da conta pessoal por meio das configurações do {% data variables.product.prodname_dotcom_the_website %} ou com a API de migração de usuários.

Para obter mais informações sobre os dados que {% data variables.product.product_name %} armazena e que estão disponíveis para exportação, consulte "[Fazer download do arquivo de migração de usuário](/rest/reference/migrations#download-a-user-migration-archive)" e "[Sobre o uso dos seus dados pelo {% data variables.product.product_name %}](/articles/about-github-s-use-of-your-data).

Quando você solicita a exportação dos seus dados pessoais por meio das configurações do {% data variables.product.prodname_dotcom_the_website %}, o {% data variables.product.product_name %} empacota seus dados pessoais em um arquivo `tar.gz` e envia um e-mail para seu endereço de e-mail principal com um link para download.

Por padrão, o link para download expira depois de sete dias. Você pode desabilitar o link para download a qualquer momento nas suas configurações de usuário. Para obter mais informações, consulte "[Excluir o acesso a um arquivo de dados da conta pessoal](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)".

Se seu sistema operacional não conseguir descompactar o arquivo `tar.gz`, use uma ferramenta de terceiros para extrair os arquivos compactados. Para obter mais informações, consulte "[How to unzip a tar.gz file](https://opensource.com/article/17/7/how-unzip-targz-file)" (Como descompactar um arquivo tar.gz) em Opensource.com.

O arquivo `tar.gz` gerado reflete os dados armazenados no momento que você iniciou a exportação dos dados.

### Fazer download de um arquivo dos dados da conta pessoal

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Em "Export account data" (Exportar dados da conta), clique em **Start export** (Iniciar exportação) ou **New export** (Nova exportação). ![Botão de início da exportação de dados pessoais em destaque](/assets/images/help/repository/export-personal-data.png) ![Botão de nova exportação de dados pessoais em destaque](/assets/images/help/repository/new-export.png)
4. Quando a exportação estiver pronta para download, o {% data variables.product.product_name %} enviará um link para download ao seu endereço de e-mail principal.
5. Clique no link para download no e-mail e insira novamente a senha quando solicitado.
6. Você será redirecionado para um arquivo `tar.gz` disponível para download.

### Excluir o acesso a um arquivo de dados da conta pessoal

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Para desabilitar o link para download enviado para seu e-mail antes da data da expiração, em "Export account data" (Exportar dados da conta), encontre o download de exportação de dados que deseja desabilitar e clique em **Delete** (Excluir). ![Botão de exclusão do pacote de exportação de dados pessoais em destaque](/assets/images/help/repository/delete-export-personal-account-data.png)
