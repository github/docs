---
title: Visualizador de arquivos 3D
redirect_from:
  - /articles/stl-file-viewer/
  - /articles/3d-file-viewer
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

O {% data variables.product.product_name %} pode hospedar e renderizar arquivos 3D com a extensão *.stl*.

Diretamente em um arquivo STL no {% data variables.product.product_name %}, você pode:

* Clicar e arrastar para girar o modelo.
* Clicar com o botão direito do mouse e arrastar para converter a exibição.
* Rolar para ampliar e reduzir.
* Clicar nos diferentes modos de exibição para alterar a exibição.

### Diffs

Em um commit ou conjunto de alterações que inclui um arquivo STL, você poderá ver um diff antes e depois do arquivo.

Por padrão, você obterá uma exibição em que tudo que permanecer inalterado estará em wireframe. As adições recebem a cor verde e as partes removidas ficam em vermelho.

![wireframe](/assets/images/help/repository/stl_wireframe.png)

Também é possível selecionar a opção **Revision Slider (Controle deslizante de revisão)**, que permite usar um controle deslizante na parte superior do arquivo para fazer a transição entre as revisões atuais e anteriores.

### Corrigir desempenho lento

Caso você veja este ícone no canto do visualizador, isso significa que a tecnologia WebGL não está disponível no seu navegador:

![Erro exibido para WebGL](/assets/images/help/repository/render_webgl_error.png)

A WebGL é necessária para o aproveitamento completo do hardware do computador. Sugerimos testar os navegadores [Chrome](https://www.google.com/intl/en/chrome/browser/) ou [Firefox](https://www.mozilla.org/en-US/firefox/new/), que já vêm com a WebGL habilitada.

### Erro: "Não é possível exibir"

Se o seu modelo não for válido, o GitHub talvez não consiga exibir o arquivo. Além disso, os arquivos com mais de 10 MB são grandes demais para exibição no GitHub.

### Incorporar o modelo em outro lugar

Para exibir o arquivo 3D em outro lugar na Internet, modifique esse modelo e coloque-o em qualquer página HTML que aceite JavaScript:

```html
<script src="https://embed.github.com/view/3d/<username>/<repo>/<ref>/<path_to_file>"></script>
```

Por exemplo, se a URL do modelo fosse [github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl), seu código de incorporação seria:

```html
<script src="https://embed.github.com/view/3d/skalnik/secret-bear-clip/master/stl/clip.stl"></script>
```

Por padrão, o renderizador incorporado tem 420 pixels de largura por 620 pixels de altura, mas você pode personalizar a saída passando as variáveis de altura e largura como parâmetros no fim da URL, como `height=300&width=500`.

{% tip %}

**Observação**: `ref` pode ser um branch ou o hash para um commit individual (como `2391ae`).

{% endtip %}
