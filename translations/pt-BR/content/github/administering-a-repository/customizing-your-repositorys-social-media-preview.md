---
title: Personalizar a visualização de mídia social do seu repositório
intro: Você pode personalizar a imagem exibida nas plataformas de mídia social quando alguém vincula-se ao seu repositório.
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Até você adicionar uma imagem, os links de repositório se expandem para mostrar informações básicas sobre o repositório e o avatar do proprietário. Adicionar uma imagem ao repositório ajuda a identificar seu projeto em várias plataformas sociais.

{% if currentVersion != "github-ae@latest" %}Você pode fazer o upload de uma imagem para um repositório privado, mas sua imagem só pode ser compartilhada a partir de um repositório público.{% endif %}

{% tip %}
Dica: a imagem deve ser um arquivo PNG, JPG ou GIF com menos de 1 MB. Para renderização de melhor qualidade, é recomendável manter a imagem em 640 x 320 pixels.
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Social preview" (Visualização social), clique em **Edit** (Editar)
    - Para adicionar uma nova imagem, clique em **Upload an image...** (Fazer upload de uma imagem...).
    - Para remover uma imagem, clique em **Remove image** (Remover imagem)

    ![Menu suspenso Social preview (Visualização social)](/assets/images/help/repository/social-preview.png)
