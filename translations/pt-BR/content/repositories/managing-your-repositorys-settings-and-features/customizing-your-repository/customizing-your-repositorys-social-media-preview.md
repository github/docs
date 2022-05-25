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

## Adicionar uma imagem para personalizar a visualização de mídia social do seu repositório

{% ifversion not ghae %}Você pode fazer o upload de uma imagem para um repositório privado, mas sua imagem só pode ser compartilhada a partir de um repositório público.{% endif %}

{% tip %}

**Dica:** Sua imagem deve ser um arquivo PNG, JPG ou GIF com tamanho inferiro a 1 MB. Para renderização de melhor qualidade, é recomendável manter a imagem em 640 x 320 pixels.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Social preview" (Visualização social), clique em **Edit** (Editar)
    - Para adicionar uma nova imagem, clique em **Upload an image...** (Fazer upload de uma imagem...).
    - Para remover uma imagem, clique em **Remove image** (Remover imagem)

    ![Menu suspenso Social preview (Visualização social)](/assets/images/help/repository/social-preview.png)

## Sobre transparência

Fornecemos compatibilidade para as imagens PNG com transparência. Muitas plataformas de comunicação são compatíveis com um modo escuro, por isso usar uma visualização social transparente pode ser benéfico. A imagem transparente abaixo é aceitável num fundo escuro; no entanto, é possível que nem sempre seja assim.

Ao usar uma imagem com transparência, tenha em mente como ela pode aparecer em planos de cor diferentes ou plataformas que não são compatíveis com a transparência.

{% tip %}

**Dica:** Se você não tiver certeza, recomendamos o uso de uma imagem com um fundo sólido.
{% endtip %}

![Transparência de pré-visualização social](/assets/images/help/repository/social-preview-transparency.png)
