---
title: Configurar o endereço de e-mail do commit
intro: You can set the email address that is used to author commits on {% data variables.product.product_location %} and on your computer.
redirect_from:
- /articles/keeping-your-email-address-private
- /articles/setting-your-commit-email-address-on-github
- /articles/about-commit-email-addresses
- /articles/git-email-settings
- /articles/setting-your-email-in-git
- /articles/set-your-user-name-email-and-github-token
- /articles/setting-your-commit-email-address-in-git
- /articles/setting-your-commit-email-address
- /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Set commit email address
ms.openlocfilehash: da47c240cc53e18d5f5537f20dd8c1eb2f4127bf
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145084048"
---
## <a name="about-commit-email-addresses"></a>Sobre os endereços de e-mail do commit

{% data variables.product.prodname_dotcom %} utiliza seu endereço de e-mail de commit para associar commits à sua conta em {% data variables.product.product_location %}. Você pode escolher o endereço de e-mail que será associado aos commits cujo push é feito usando a linha de comando e às operações do Git baseadas na web executadas.

Para operações com base na web do Git, você pode definir seu endereço de e-mail de commit em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Para commits cujo push é feito usando a linha de comando, você pode configurar o endereço de e-mail do commmit no Git.

{% ifversion fpt or ghec %} Todos os commits feitos antes da alteração do endereço de email de commit ainda estão associadas ao seu endereço de email anterior.{% else %}Depois de alterar o endereço de email de commit no {% data variables.product.product_name %}, por padrão, o novo endereço de email ficará visível em todas as suas futuras operações do Git baseadas na Web. Os commits feitos antes da alteração do endereço de e-mail do commit continuarão associados ao endereço de e-mail anterior.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Observação**: {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}Caso deseje manter seu endereço de email pessoal privado, use um endereço de email `no-reply` do {% data variables.product.product_name %} como seu endereço de email de commit. Para usar seu endereço de email `noreply` para os commits enviados por push na linha de comando, use esse endereço de email ao definir seu endereço de email de commit no Git. Para usar seu endereço `noreply` para operações do Git baseadas na Web, defina seu endereço de email de commit no GitHub e escolha **manter meu endereço de email privado**.

Você também pode optar por bloquear os commits cujo push é feito usando a linha de comando que expõem seu endereço de e-mail pessoal. Para obter mais informações, confira "[Como bloquear pushes da linha de comando que expõem seu email pessoal](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)".{% endif %}

Para garantir que os commits sejam atribuídos a você e apareçam no seu grafo de contribuições, use um endereço de email conectado à sua conta do {% data variables.product.product_location %}{% ifversion fpt or ghec %} ou o endereço de email `noreply` fornecido para você nas configurações de email{% endif %}. {% ifversion not ghae %}Para obter mais informações, confira "[Como adicionar um endereço de email à sua conta do {% data variables.product.prodname_dotcom %}](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)".{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Observação:** se você criou sua conta no {% data variables.product.product_location %} _após_ 18 de julho de 2017, seu endereço de email `no-reply` para o {% data variables.product.product_name %} é um número de ID de sete dígitos e seu nome de usuário está no formato <code><em>ID+username</em>@users.noreply.github.com</code>. Se você criou sua conta no {% data variables.product.product_location %} _antes_ de 18 de julho de 2017, seu endereço de email `no-reply` do {% data variables.product.product_name %} é <code><em>username</em>@users.noreply.github.com</code>. Você pode obter um endereço de email `no-reply` baseado em ID do {% data variables.product.product_name %} selecionando (ou desmarcando e selecionando de novo) **Manter meu endereço de email privado** nas configurações de email.

{% endnote %}

Se você usar seu endereço de email `noreply` do {% data variables.product.product_name %} para fazer commits e [alterar seu nome de usuário](/articles/changing-your-github-username), esses commits não serão associados à sua conta do {% data variables.product.product_location %}. Isso não se aplicará se você estiver usando o endereço `noreply` baseado em ID do {% data variables.product.product_name %}. Para obter mais informações, confira "[Como alterar seu nome de usuário do {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username)".{% endif %}

## <a name="setting-your-commit-email-address-on--data-variablesproductprodname_dotcom-"></a>Configurar o endereço de e-mail do commit no {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %} {% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## <a name="setting-your-commit-email-address-in-git"></a>Configurar o endereço de e-mail do commit no Git

Use o comando `git config` para alterar o endereço de email associado aos commits do Git. O novo endereço de email definido ficará visível nos commits futuros que você enviar por push para o {% data variables.product.product_location %} na linha de comando. Os commits feitos antes da alteração do endereço de e-mail do commit continuarão associados ao endereço de e-mail anterior.

### <a name="setting-your-email-address-for-every-repository-on-your-computer"></a>Configurar o endereço de e-mail para todos os repositórios no computador

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user-settings.link_email_with_your_account %}

### <a name="setting-your-email-address-for-a-single-repository"></a>Configurar o endereço de e-mail para um repositório específico

{% data variables.product.product_name %} usa o endereço de e-mail definido na sua configuração local do Git para associar commits enviados por push a partir da linha de comando para sua conta em {% data variables.product.product_location %}.

Você pode alterar o endereço de e-mail associado aos commits feitos em um repositório específico. Isso sobrescreverá as definições de configuração global do Git no repositório em questão, mas não afetará nenhum outro repositório.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual para o repositório local no qual deseja configurar o endereço de e-mail associado aos commits do Git.
3. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user-settings.link_email_with_your_account %}
