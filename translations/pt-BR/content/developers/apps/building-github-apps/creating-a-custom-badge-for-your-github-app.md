---
title: Criar um selo personalizado para o seu aplicativo GitHub
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
  - /developers/apps/creating-a-custom-badge-for-your-github-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

Por padrão, um aplicativo GitHub novo terá um [identicon](https://github.com/blog/1586-identicons) gerado automaticamente. O selo do identicon assemelha-se a isso:

![Identicon](/assets/images/identicon.png)

Após criar um aplicativo GitHub, você poderá personalizar o selo do seu aplicativo fazendo o upload de um logotipo e selecionando uma cor de fundo. Um selo é uma imagem de logotipo quadrado dentro de um distintivo circular. Você pode escolher uma cor de fundo para o selo, que poderá distinguir seu aplicativo visualmente.

Seu logotipo deve ser um arquivo PNG, JPG ou GIF com tamanho inferior a 1 MB. Para obter a melhor qualidade de renderização, recomendamos um tamanho de imagem de, pelo menos, 200px x 200px. {% if currentVersion == "free-pro-team@latest" %}Veja "[Dicas para imagens de logotipo e selos](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)" para obter mais orientações sobre a personalização dos selos.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Você pode alterar um selo personalizado para um aplicativo GitHub que já possui uma listagem aprovada do Marketplace acessando https://github.com/marketplace/manage.

{% endif %}

Para criar um selo personalizado:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. Em "Exibir informações", arraste e solte uma imagem de uma pasta local ou clique em **Fazer upload de um logotipo** para selecionar uma imagem do seu computador. ![Faça o upload de um logotipo](/assets/images/github-apps/github_apps_upload_logo.png)
6. Recorte sua imagem. Ao terminar, clique em **Definir novo avatar**. ![Corte e defina o logotipo ](/assets/images/github-apps/github_apps_crop_and_set_avatar.png)
7. Em "Cor de fundo do selo", digite o [código de cor hexadecimal](http://www.color-hex.com/) da cor de fundo para o seu selo. {% if currentVersion == "free-pro-team@latest" %}**Observação:** O campo de entrada "Cor de fundo do selo" só aparecerá depois que você enviar um logotipo do aplicativo.{% endif %} ![Cor de fundo do selo](/assets/images/github-apps/github_apps_badge_background_color.png)

{% if currentVersion == "free-pro-team@latest" %}

### Próximas etapas

Para obter mais informações sobre a criação de uma listagem do Marketplace para esse aplicativo, consulte "[Listagem no GitHub Marketplace](/marketplace/listing-on-github-marketplace/)".

{% endif %}
