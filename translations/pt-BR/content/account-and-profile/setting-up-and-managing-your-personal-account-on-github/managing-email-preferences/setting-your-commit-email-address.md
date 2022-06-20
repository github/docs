---
title: Configurar o endereço de e-mail do commit
intro: 'Você pode definir o endereço de e-mail que é usado para criar commits em {% data variables.product.product_location %} e no seu computador.'
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
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Definir endereço de e-mail do commit
---

## Sobre os endereços de e-mail do commit

{% data variables.product.prodname_dotcom %} utiliza seu endereço de e-mail de commit para associar commits à sua conta em {% data variables.product.product_location %}. Você pode escolher o endereço de e-mail que será associado aos commits cujo push é feito usando a linha de comando e às operações do Git baseadas na web executadas.

Para operações com base na web do Git, você pode definir seu endereço de e-mail de commit em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Para commits cujo push é feito usando a linha de comando, você pode configurar o endereço de e-mail do commmit no Git.

{% ifversion fpt or ghec %}Os commits feitos antes da alteração do endereço de e-mail do commit continuarão associados ao endereço de e-mail anterior.{% else %}Depois de alterar o endereço de e-mail do commit no {% data variables.product.product_name %}, o novo endereço de e-mail ficará visível por padrão em todas as próximas operações do Git baseadas na web. Os commits feitos antes da alteração do endereço de e-mail do commit continuarão associados ao endereço de e-mail anterior.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Observação**: {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}Se você quiser manter seu endereço de e-mail pessoal, você poderá usar um endereço de e-mail `noreply` de {% data variables.product.product_name %} como seu endereço de e-mail de commit. Para usar o endereço de e-mail `noreply` para commits cujo push é feito usando a linha de comando, use esse endereço de e-mail ao configurar o endereço de e-mail do commit no Git. Para usar o endereço `noreply` para operações do Git baseadas na web, configure o endereço de e-mail do commit no GitHub e selecione **Keep my email address private** (Manter meu endereço de e-mail privado).

Você também pode optar por bloquear os commits cujo push é feito usando a linha de comando que expõem seu endereço de e-mail pessoal. Para obter mais informações, consulte "[Bloquear pushes de linha de comando que mostrem endereços de e-mail pessoais](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)".{% endif %}

Para garantir que os commits sejam atribuídos a você e que apareçam no gráfico de contribuição, use um endereço de e-mail conectado à sua conta em {% data variables.product.product_location %}{% ifversion fpt or ghec %} ou o endereço de e-mail `noreply` fornecido a você nas suas configurações de e-mail{% endif %}. {% ifversion not ghae %}Para obter mais informações, consulte "[Adicionar um endereço de e-mail à sua conta de {% data variables.product.prodname_dotcom %}](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account){% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Observação:** Se você criou a sua conta em {% data variables.product.product_location %} _após_ julho de 2017, seu endereço de e-mail `noreply` para {% data variables.product.product_name %} será um número de ID de 7 dígitos e seu nome de usuário no seguinte formato: <code><em>ID+nome de usuário</em>@users.noreply.github.com</code>. Se você criou sua conta em {% data variables.product.product_location %} _antes de_ 18 de julho de 2017, o seu endereço de e-mail `noreply` de {% data variables.product.product_name %} será <code><em>nome de usuário</em>@users.noreply.github.com</code>. Você pode obter um endereço de e-mail `noreply` baseado no ID para {% data variables.product.product_name %}, selecionando (ou desmarcando e selecionando) **Mantenha meu endereço de e-mail privado** nas suas configurações de e-mail.

{% endnote %}

Se você usar o seu endereço de e-mail `noreply` para {% data variables.product.product_name %} fazer commits e, em seguida, [mudar seu nome de usuário](/articles/changing-your-github-username), esses commits não serão associados à sua conta no {% data variables.product.product_location %}. Isso não se aplica se você estiver usando o endereço `noreply` baseado no ID de {% data variables.product.product_name %}. Para obter mais informações, consulte "[Alterar seu nome de usuário do {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username)".{% endif %}

## Configurar o endereço de e-mail do commit no {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
{% data reusables.user-settings.add_and_verify_email %}
{% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %}
{% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## Configurar o endereço de e-mail do commit no Git

Você pode usar o comando `git config` para alterar o endereço de e-mail associado aos commits do Git. O novo endereço de e-mail configurado ficará visível em todos os commits cujo push é feito para o {% data variables.product.product_location %} usando a linha de comando. Os commits feitos antes da alteração do endereço de e-mail do commit continuarão associados ao endereço de e-mail anterior.

### Configurar o endereço de e-mail para todos os repositórios no computador

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

### Configurar o endereço de e-mail para um repositório específico

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
