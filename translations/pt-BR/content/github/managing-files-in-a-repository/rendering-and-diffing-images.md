---
title: Renderizar e comparar imagens
intro: 'O {% data variables.product.product_name %} pode exibir diversos formatos comuns de imagem, incluindo PNG, JPG, GIF, PSD e SVG. Além de exibir as imagens, existem diversas formas de comparara as diferenças entre as versões desses formatos de imagem.'
redirect_from:
  - /articles/rendering-and-diffing-images
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% note %}

**Observação:** os arquivos SVGs no {% data variables.product.prodname_dotcom %} podem não renderizar no navegador Firefox.

{% endnote %}

### Exibir imagens

Você pode procurar e exibir imagens diretamente no repositório do {% data variables.product.product_name %}:

![imagem inline](/assets/images/help/images/view.png)

No momento, os arquivos SVGs não são compatíveis com animação ou scripts inline.

### Exibir diferenças

Você pode comparar visualmente as imagens em três modos diferentes: [2-up](#2-up), [deslizar](#swipe) e [exibição em camadas](#onion-skin).

#### 2-up

**2-up** é o modo padrão. Ele fornece uma visão rápida das duas imagens. Além disso, se a imagem tiver mudado de tamanho entre as versões, a alteração real da dimensão será exibida. Isso facilita identificar quando as imagens foram redimensionadas, como quando ativos são atualizados em resoluções mais altas.

![2-up](/assets/images/help/repository/images-2up-view.png)

#### Deslizar

O modo **deslizar** permite ver partes da imagem lado a lado. Não sabe se houve mudança de cor nas versões? Posicione o controle deslizante sobre a área em questão e compare os pixels.

![Deslizar](/assets/images/help/repository/images-swipe-view.png)

#### Exibição em camadas

A **exibição em camadas** é muito útil para identificar movimentações sutis dos elementos. Um ícone foi movimentado dois pixels para a esquerda? Arraste o controle deslizante de opacidade um pouco e observe se as coisas se movem.

![Exibição em camadas](/assets/images/help/repository/images-onion-view.gif)
