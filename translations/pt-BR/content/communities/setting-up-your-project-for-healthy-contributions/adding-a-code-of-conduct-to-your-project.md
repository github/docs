---
title: Adicionar um código de conduta ao seu projeto
intro: 'Adote um código de conduta para definir padrões de comunidade, sinalizar um projeto receptivo e inclusivo, bem como descrever procedimentos para tratamento de abuso.'
redirect_from:
  - /articles/adding-a-code-of-conduct-to-your-project
  - /github/building-a-strong-community/adding-a-code-of-conduct-to-your-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Adicionar um código de conduta
---

Um *código de conduta* define padrões de como se engajar em uma comunidade. Ele sinaliza um ambiente inclusivo que respeita todas as contribuições. Ele também descreve procedimentos para solucionar problemas entre integrantes da comunidade do projeto. Para obter mais informações sobre por que um código de conduta define padrões e expectativas de como se engajar em uma comunidade, consulte [Open Source Guide](https://opensource.guide/code-of-conduct/) (Guia de código aberto).

Antes de adotar um código de conduta para seu projeto:

* Pesquise diferentes códigos de conduta desenvolvidos para projetos de código aberto. Escolha um que reflita os padrões da comunidade.
* Considere cuidadosamente se você está disposto e apto a aplicá-lo.

Você pode adicionar um código de conduta ao seu projeto usando um modelo ou criando manualmente um código de conduta personalizado. O seu código de conduta estará disponível de qualquer forma, mas o "Código de Conduta" só será marcado como completo no perfil da comunidade do seu repositório se você usar um modelo. Se você usar um código de conduta escrito por outra pessoa ou organização, certifique-se de seguir as diretrizes de atribuição da fonte. Para obter mais informações sobre os perfis da comunidade, consulte "[Sobre os perfis da comunidade para repositórios públicos](//communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)".

Você pode criar um código de conduta padrão para sua organização ou conta pessoal. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

## Adicionar um código de conduta usando um modelo

O {% data variables.product.product_name %} fornece modelos para códigos de conduta comuns de modo a ajudar você a adicionar rapidamente um código de conduta ao seu projeto.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite *CODE_OF_CONDUCT.md*.
4. Clique em **Choose a code of conduct template** (Escolher um modelo de código de conduta). ![Botão para escolher um modelo de código de conduta](/assets/images/help/repository/code-of-conduct-tool.png)
5. No lado esquerdo da página, selecione um código de conduta a ser visualizado e adicionado ao seu projeto. ![Seleção de um modelo de código de conduta](/assets/images/help/repository/code-of-conduct-tool-picker.png)
6. No lado direito da página, complete os campos para preencher o código de conduta selecionado com as informações apropriadas.
7. Clique em **Review and submit** (Revisar e enviar). ![Revisar e enviar código de conduta ao projeto](/assets/images/help/repository/code-of-conduct-tool-review.png)
8. Revise o conteúdo do código de conduta que está na área de texto.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Adicionar um código de conduta manualmente

Se o código de conduta que você deseja usar não estiver disponível nos modelos fornecidos, você pode adicionar um código de conduta manualmente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo do nome de arquivo, digite o nome e a extensão do arquivo. ![Nome do arquivo do novo código de conduta](/assets/images/help/repository/new-code-of-conduct-file-name.png)
    - Para tornar seu código de conduta visível no diretório raiz do repositório, digite *CODE_OF_CONDUCT* no campo do nome do arquivo.
    - Para tornar seu código de conduta visível no diretório `docs` do repositório, digite *docs/CODE_OF_CONDUCT*.
    - Para tornar seu código de conduta visível no diretório `.github` do repositório, digite *.github/CODE_OF_CONDUCT*.
4. No novo arquivo, adicione seu código de conduta personalizado.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
