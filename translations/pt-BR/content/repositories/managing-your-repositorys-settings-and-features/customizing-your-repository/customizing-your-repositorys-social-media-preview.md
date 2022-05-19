---
title: Personalizar a visualização de mídia social do seu repositório
intro: Você pode personalizar a imagem exibida nas plataformas de mídia social quando alguém vincula-se ao seu repositório.
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/managing-repository-settings/customizing-your-repositorys-social-media-preview
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Pré-visualização de mídias sociais
---

Até você adicionar uma imagem, os links de repositório se expandem para mostrar informações básicas sobre o repositório e o avatar do proprietário. Adicionar uma imagem ao repositório ajuda a identificar seu projeto em várias plataformas sociais.

## Adding an image to customize the social media preview of your repository

{% ifversion not ghae %}Você pode fazer o upload de uma imagem para um repositório privado, mas sua imagem só pode ser compartilhada a partir de um repositório público.{% endif %}

{% tip %}

**Tip:** Your image should be a PNG, JPG, or GIF file under 1 MB in size. Para renderização de melhor qualidade, é recomendável manter a imagem em 640 x 320 pixels.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Social preview" (Visualização social), clique em **Edit** (Editar)
    - Para adicionar uma nova imagem, clique em **Upload an image...** (Fazer upload de uma imagem...).
    - Para remover uma imagem, clique em **Remove image** (Remover imagem)

    ![Menu suspenso Social preview (Visualização social)](/assets/images/help/repository/social-preview.png)

## About transparency

We support PNG images with transparency. Many communication platforms support a dark mode, so using a transparent social preview may be beneficial. The transparent image below is acceptable on a dark background; however, this may not always be the case.

When using an image with transparency, keep in mind how it may look on different color backgrounds or platforms that don't support transparency.

{% tip %}

**Tip:** If you aren't sure, we recommend using an image with a solid background.
{% endtip %}

![Social preview transparency](/assets/images/help/repository/social-preview-transparency.png)
