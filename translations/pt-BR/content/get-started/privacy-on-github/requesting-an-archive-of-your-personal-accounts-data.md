---
title: Solicitar arquivo dos dados pessoais da sua conta
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
  - /github/understanding-how-github-uses-and-protects-your-data/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user-settings.export-data %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Request account archive
ms.openlocfilehash: f296796810978f6d884fabc699c01fbc3eabf5eb
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147875645'
---
O {% data variables.product.product_name %} os metadados de repositório e de perfil da atividade da conta pessoal. Você pode exportar os dados da conta pessoal por meio das configurações do {% data variables.product.prodname_dotcom_the_website %} ou com a API de migração de usuários.

Para obter mais informações sobre os dados armazenados pelo {% data variables.product.product_name %} que estão disponíveis para exportação, confira "[Baixar um arquivo de migração de usuário](/rest/reference/migrations#download-a-user-migration-archive)" e "[Sobre o uso dos seus dados pelo {% data variables.product.product_name %}](/articles/about-github-s-use-of-your-data).

Quando você solicita uma exportação dos seus dados pessoais por meio das configurações do {% data variables.product.prodname_dotcom_the_website %}, o {% data variables.product.product_name %} empacota seus dados pessoais em um arquivo `tar.gz` e envia um email para seu endereço de email principal com um link de download.

Por padrão, o link para download expira depois de sete dias. Você pode desabilitar o link para download a qualquer momento nas suas configurações de usuário. Para obter mais informações, confira "[Como excluir o acesso a um arquivo de dados da sua conta pessoal](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)".

Se o sistema operacional não puder desempacotar o arquivo `tar.gz` nativamente, use uma ferramenta de terceiros para extrair os arquivos arquivados. Para obter mais informações, confira "[Como descompactar um arquivo tar.gz](https://opensource.com/article/17/7/how-unzip-targz-file)" em Opensource.com.

O arquivo `tar.gz` gerado reflete os dados armazenados no momento em que você iniciou a exportação de dados.

## Fazer download de um arquivo dos dados da conta pessoal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Em "Exportar dados da conta", clique em **Iniciar exportação** ou **Nova exportação**.
![Botão Iniciar exportação de dados pessoais realçado](/assets/images/help/repository/export-personal-data.png)
![Botão Nova exportação de dados pessoais realçado](/assets/images/help/repository/new-export.png)
4. Quando a exportação estiver pronta para download, o {% data variables.product.product_name %} enviará um link para download ao seu endereço de e-mail principal.
5. Clique no link para download no e-mail e insira novamente a senha quando solicitado.
6. Você será redirecionado para um arquivo `tar.gz` que poderá baixar.

## Excluir o acesso a um arquivo de dados da conta pessoal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Para desabilitar o link de download enviado para seu email antes de ele vencer, em "Exportar dados da conta", localize o download de exportação de dados que deseja desabilitar e clique em **Excluir**.
![Botão Excluir pacote de exportação de dados pessoais realçado](/assets/images/help/repository/delete-export-personal-account-data.png)
