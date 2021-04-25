---
title: Criar rodapé ou barra lateral no wiki
intro: Você pode adicionar uma barra lateral ou um footer personalizado para seu wiki a fim de fornecer aos leitores informações mais contextuais.
redirect_from:
  - /articles/creating-a-footer/
  - /articles/creating-a-sidebar/
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidade
---

### Criar um footer

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Na parte inferior da página, clique em **Add a custom footer** (Adicionar um footer personalizado). ![Seção wiki e footer](/assets/images/help/wiki/wiki_add_footer.png)
4. Use o editor de texto para digitar o conteúdo que deseja ter no footer. ![WYSIWYG do wiki](/assets/images/help/wiki/wiki-footer.png)
5. Insira uma mensagem do commit descrevendo o footer que você está adicionando. ![Mensagem do commit do wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Para fazer commit das alterações no wiki, clique em **Save Page** (Salvar página).

### Criar uma barra lateral

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Clique em **Add a custom sidebar** (Adicionar uma barra lateral personalizada). ![Seção de adição da barra lateral do wiki](/assets/images/help/wiki/wiki_add_sidebar.png)
4. Use o editor de texto para adicionar o conteúdo da página. ![WYSIWYG do wiki](/assets/images/help/wiki/wiki-sidebar.png)
5. Insira uma mensagem do commit descrevendo a barra lateral que você está adicionando. ![Mensagem do commit do wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Para fazer commit das alterações no wiki, clique em **Save Page** (Salvar página).

### Criar um footer ou uma barra lateral localmente

Se você criar um arquivo chamado `_Footer.<extension>` ou `_Sidebar.<extension>`, nós os usaremos para preencher o footer e a barra lateral do wiki, respectivamente. Assim como qualquer outra página do wiki, a extensão que você escolhe para esses arquivos determina como nós os renderizaremos.
