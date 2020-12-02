---
title: Classificar repositório com tópicos
intro: 'Para ajudar outras pessoas a encontrar seu projeto e a contribuir com ele, você pode adicionar tópicos ao repositório relacionados à intenção do projeto, área de assunto, grupos de afinidade ou outras características importantes.'
redirect_from:
  - /articles/about-topics/
  - /articles/classifying-your-repository-with-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre tópicos

Com tópicos, você pode explorar repositórios em uma área de assunto específica, encontrar projetos com os quais contribuir e descobrir novas soluções para um problema específico. Os tópicos aparecem na página principal de um repositório. Você pode clicar em um nome de tópico para {% if currentVersion == "free-pro-team@latest" %}ver tópicos relacionados e uma lista de outros repositórios classificados com esse tópico{% else %}buscar outros repositórios com esse tópico{% endif %}.

![Página principal do repositório de teste mostrando tópicos](/assets/images/help/repository/os-repo-with-topics.png)

Para procurar os tópicos mais usados, vá para https://github.com/topics/.

{% if currentVersion == "free-pro-team@latest" %}Você pode contribuir para o conjunto de tópicos em destaque de {% data variables.product.product_name %}no repositório [github/explore](https://github.com/github/explore). {% endif %}

Os administradores de repositório podem adicionar qualquer tópico que desejarem a um repositório. Tópicos úteis para classificar um repositório incluem o propósito pretendido, área de assunto, comunidade ou linguagem.{% if currentVersion == "free-pro-team@latest" %} Adicionalmente, {% data variables.product.product_name %} analisa o conteúdo do repositório público e gera tópicos sugeridos que os administradores do repositório podem aceitar ou rejeitar. O conteúdo do repositório privado não é analisado e não recebe sugestões de tópico.{% endif %}

{% if currentVersion == "github-ae@latest" %}Interno {% else %}Público, interna, {% endif %}e repositórios privados podem ter tópicos, embora você veja apenas repositórios privados aos quais você tem acesso nos resultados de pesquisa de tópicos.

Você pode pesquisar repositórios que são associados a um tópico específico. Para obter mais informações, consulte "[Pesquisar repositórios](/articles/searching-for-repositories#search-by-topic)". Também é possível pesquisar uma lista de tópicos no {% data variables.product.product_name %}. Para obter mais informações, consulte "[Pesquisar tópicos](/articles/searching-topics)".

### Adicionar tópicos ao repositório

{% data reusables.repositories.navigate-to-repo %}{% if currentVersion ver_lt "enterprise-server@2.22" %}
2. Abaixo da descrição do repositório, clique em **Add topics** (Adicionar tópicos). ![Adicionar link de tópicos na página principal de um repositório](/assets/images/help/repository/add-topics-link.png)
3. Digite o tópico que deseja adicionar ao repositório e digite um espaço. ![Formulário para inserir tópicos](/assets/images/help/repository/add-topic-form.png)
4. Depois que acabar de adicionar tópicos, clique em **Done** (Concluído). ![Formulário com uma lista de tópicos e botão Done (Concluído)](/assets/images/help/repository/add-topics-done-button.png)
{% else %}
2. À direita de "Sobre", clique em {% octicon "gear" aria-label="The Gear icon" %}. ![Ícone de engrenagem na página principal de um repositório](/assets/images/help/repository/edit-repository-details-gear.png)
3. Em "Tópicos", digite o tópico que você deseja adicionar ao seu repositório e, em seguida, digite um espaço. ![Formulário para inserir tópicos](/assets/images/help/repository/add-topic-form.png)
4. Depois que acabar de adicionar tópicos, clique em **Salvar alterações**. ![Botão de "Salvar alterações" em "Editar detalhes do repositório"](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
{% endif %}
