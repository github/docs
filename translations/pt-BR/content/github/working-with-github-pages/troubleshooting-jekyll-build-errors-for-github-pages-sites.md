---
title: Solucionar problemas de erros de criação do Jekyll para sites do GitHub Pages
intro: 'Você pode usar mensagens de erro de criação do Jekyll para solucionar problemas com seu site do {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder/
  - /articles/page-build-failed-invalid-submodule/
  - /articles/page-build-failed-missing-submodule/
  - /articles/page-build-failed-markdown-errors/
  - /articles/page-build-failed-config-file-error/
  - /articles/page-build-failed-unknown-tag-error/
  - /articles/page-build-failed-tag-not-properly-terminated/
  - /articles/page-build-failed-tag-not-properly-closed/
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory/
  - /articles/page-build-failed-file-is-a-symlink/
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository/
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded/
  - /articles/page-build-failed-invalid-post-date/
  - /articles/page-build-failed-invalid-sass-or-scss/
  - /articles/page-build-failed-invalid-highlighter-language/
  - /articles/page-build-failed-relative-permalinks-configured/
  - /articles/page-build-failed-syntax-error-in-for-loop/
  - /articles/page-build-failed-invalid-yaml-in-data-file/
  - /articles/page-build-failed-date-is-not-a-valid-datetime/
  - /articles/troubleshooting-github-pages-builds/
  - /articles/troubleshooting-jekyll-builds/
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Solucionar problemas de erros de criação

Se o Jekyll encontrar um erro ao criar seu site do {% data variables.product.prodname_pages %} localmente ou no {% data variables.product.product_name %}, você poderá usar mensagens de erro para solucionar problemas. Para obter mais informações sobre mensagens de erro e como visualizá-las, consulte "[Sobre erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/about-jekyll-build-errors-for-github-pages-sites)".

Se você recebeu uma mensagem de erro genérica, verifique os problemas comuns.
- Você está usando plugins incompatíveis. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_pages %} e o Jekyll](/articles/about-github-pages-and-jekyll#plugins)".{% if currentVersion == "free-pro-team@latest" %}
- Seu repositório excedeu os limites de tamanho. Para obter mais informações, consulte "[Qual é a minha quota de disco?](/articles/what-is-my-disk-quota)"{% endif %}
- Você alterou a configuração `source` no arquivo *_config.yml*. {% data variables.product.prodname_pages %} substitui essa configuração durante o processo de criação.
- Um nome de arquivo na fonte de publicação contém dois pontos (`:`), o que não é permitido.

Se você recebeu uma mensagem de erro específica, revise abaixo as informações de solução de problemas relativas à mensagem de erro.

Depois que tiver corrigido os possíveis erros, faça push das alterações para a fonte de publicação do seu site para ativar outra criação no {% data variables.product.product_name %}.

### Erro no arquivo de configuração

Este erro significa que ocorreu falha na criação do seu site porque o arquivo *_config.yml* contém erros de sintaxe.

Para solucionar problemas, verifique se o arquivo *_config.yml* segue estas regras:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

### Esta é uma data/hora inválida

Este erro significa que uma das páginas do seu site inclui uma data/hora inválida.

Para solucionar problemas, pesquise o arquivo na mensagem de erro e os layouts do arquivo para as exigências de qualquer filtro de data do Liquid. Verifique se alguma variável passada em filtros de data do Liquid tem valores em todos os casos e nunca passa `nil` ou `""`. Para obter mais informações, consulte "[Filtros do Liquid](https://help.shopify.com/en/themes/liquid/filters)" na documentação do Liquid.

### O arquivo não existe no diretório includes

Este erro significa que o código faz referência a um arquivo que não existe no diretório *_includes*.

{% data reusables.pages.search-for-includes %} Se algum dos arquivos a que você fez referência não estiver no diretório *_includes*, copie ou mova os arquivos para o diretório *_includes*.

### O arquivo é um link simbólico

Este erro significa que o código faz referência a um arquivo com link simbólico que não existe na fonte de publicação do seu site.

{% data reusables.pages.search-for-includes %} Se algum dos arquivos a que você fez referência for com link simbólico, copie ou mova os arquivos para o diretório *_includes*.

### Arquivo codificado por UTF-8 incorretamente

Este erro significa que você usou caracteres não latinos, como `日本語`, sem avisar ao computador que esperava esses símbolos.

Para solucionar problemas, force a codificação UTF-8 adicionando a seguinte linha ao arquivo *_config.yml*:
```
encoding: UTF-8
```

### Linguagem inválida do realçador

Este erro significa que você especificou algum realçador de sintaxe diferente de [Rouge](https://github.com/jneen/rouge) ou [Pygments](http://pygments.org/) no arquivo de configuração.

Para solucionar problemas, atualize o arquivo *_config.yml* para especificar [Rouge](https://github.com/jneen/rouge) ou [Pigmentos](http://pygments.org/). Para obter mais informações, consulte "[Sobre o {% data variables.product.product_name %} e o Jekyll](/articles/about-github-pages-and-jekyll#syntax-highlighting)".

### Data de postagem inválida

Este erro significa que uma postagem no seu site contém uma data inválida no nome de arquivo ou na página inicial YAML.

Para solucionar problemas, verifique se todas as datas estão no formato YYYY-MM-DD HH:MM:SS para UTC e se são datas reais do calendário. Para especificar um fuso horário com um intervalo de tempo UTC, use o formato YYYY-MM-DD HH:MM:SS +/-TTTT (ano-mês-dia horas:minutos:segundos +/-TTTT), como `2014-04-18 11:30:00 +0800`.

Se você especificar um formato de data no arquivo *_config.yml*, verifique se o formato está correto.

### SCSS ou Sass inválido

Este erro significa que seu repositório contém um arquivo Sass ou SCSS com conteúdo inválido.

Para solucionar problemas, revise o número de linha incluído na mensagem de erro referente a Sass ou SCSS inválido. Para ajudar a prevenir erros no futuro, instale um linter Sass ou SCSS para seu editor de texto favorito.

### Submódulo inválido

Este erro significa que seu repositório inclui um submódulo que não foi inicializado corretamente.

{% data reusables.pages.remove-submodule %}

Caso queira utilizar o submódulo, lembre-se de usar `https://` quando fizer referência ao submódulo (a não `http://`) e de que o submódulo está em um repositório público.

### YAML inválido no arquivo de dados

Este erro significa que um ou mais arquivos na pasta *_data* contém YAML inválido.

Para solucionar problemas, verifique se os arquivos YAML na pasta *_data* seguem estas regras:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

Para obter mais informações sobre arquivos de dados do Jekyll, consulte ""[Arquivos de dados](https://jekyllrb.com/docs/datafiles/)" na documentação do Jekyll.

### Erros de markdown

Este erro significa que seu repositório contém erros de markdown.

Para solucionar problemas, verifique se você está usando um processador markdown compatível. Para obter mais informações, consulte "[Definir um processador markdown para seu site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll)".

Em seguida, verifique se o arquivo na mensagem de erro usa uma sintaxe markdown válida. Para obter mais informações, consulte "[Markdown: sintaxe](https://daringfireball.net/projects/markdown/syntax)" no Daring Fireball.

### Pasta docs ausente

Este erro significa que você escolheu a pasta `docs` em um branch como a sua fonte de publicação, mas não há nenhuma pasta de `docs` na raiz do seu repositório naquele branch.

Para solucionar esse problema, se a pasta `documentação` foi movida acidentalmente, tente mover a pasta `docs` de volta para a raiz do repositório no branch que você escolheu para a sua fonte de publicação. Se a pasta `docs` tiver sido excluída acidentalmente, siga um destes procedimentos:
- Use o Git para reverter ou desfazer a exclusão. Para obter mais informações, consulte "[git-revert](https://git-scm.com/docs/git-revert.html)" na documentação do Git.
- Crie uma nova pasta de `documentação` na raiz do repositório no branch que você escolheu para a sua fonte de publicação e adicione os arquivos de origem do site à pasta. Para obter mais informações, consulte "[Criar arquivos](/articles/creating-new-files)".
- Altere a fonte de publicação. Para obter mais informações, consulte "[Configurar uma fonte de publicação do {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages)".

### Submódulo ausente

Este erro significa que seu repositório inclui um submódulo que não existe ou não foi inicializado corretamente.

{% data reusables.pages.remove-submodule %}

Se você quiser usar um submódulo, inicialize-o. Para obter mais informações, consulte "[Ferramentas Git - Submódulos](https://git-scm.com/book/en/v2/Git-Tools-Submodules)" no livro _Pro Git_.

### Permalinks relativos configurados

Este erro significa que você tem permalinks relativos, que não são compatíveis com o {% data variables.product.prodname_pages %} no arquivo *_config.yml*.

Permalinks são URLs permanentes que fazem referência a uma determinada página no seu site. Os permalinks absolutos iniciam com a raiz do site, enquanto os permalinks relativos iniciam com a pasta que contém a página referenciada. O {% data variables.product.prodname_pages %} e o Jekyll não são mais compatíveis com permalinks relativos. Para obter mais informações sobre permalinks, consulte "[Permalinks](https://jekyllrb.com/docs/permalinks/)" na documentação do Jekyll.

Para solucionar problemas, remova a linha `relative_permalinks` do arquivo *_config.yml* e reformate os permalinks relativos no site com permalinks absolutos. Para obter mais informações, consulte "[Editar arquivos no repositório](/articles/editing-files-in-your-repository)".

### O link simbólico não existe no repositório do site

Este erro significa que seu site inclui um link simbólico que não existe na fonte de publicação do site. Para obter mais informações sobre links simbólicos, consulte "[Link simbólico](https://en.wikipedia.org/wiki/Symbolic_link)" na Wikipédia.

Para solucionar problemas, determine se o arquivo na mensagem de erro é usado para criar o site. Se ele não for ou se você não quiser que o arquivo seja um link simbólico, exclua o arquivo. Se o arquivo de link simbólico for necessário para criar seu site, verifique se o arquivo ou o diretório a que ele faz referência está na fonte de publicação do site. Para incluir ativos externos, considere usar {% if currentVersion == "free-pro-team@latest" %}`submódulo do Git` ou {% endif %}um gerenciador de pacotes terceirizado como o [Bower](https://bower.io/).{% if currentVersion == "free-pro-team@latest" %} Para obter mais informações, consulte "[Usar submódulos com o {% data variables.product.prodname_pages %}](/articles/using-submodules-with-github-pages)".{% endif %}

### Erro de sintaxe no loop 'for'

Este erro significa que o código inclui sintaxe inválida em uma declaração de loop `for` do Liquid.

Para solucionar problemas, verifique se todos os loops `for` no arquivo da mensagem de erro têm sintaxe adequada. Para obter mais informações sobre a sintaxe adequada para loops `for`, consulte "[Tags de Iteração](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for)" na documentação do Liquid.

### Tag fechada incorretamente

Esta mensagem de erro significa que o código inclui uma tag lógica que foi fechada incorretamente. Por exemplo, {% raw %}`{% capture example_variable %}` deve ser fechada por `{% endcapture %}`{% endraw %}.

Para solucionar problemas, verifique se todas as tags lógicas no arquivo da mensagem de erro estão fechadas corretamente. Para obter mais informações, consulte "[Tags do Liquid](https://help.shopify.com/en/themes/liquid/tags)" na documentação do Liquid.

### Tag terminada incorretamente

Este erro significa que o código inclui uma tag de saída que não foi terminada corretamente. Por exemplo, {% raw %}`{{ page.title }` em vez de `{{ page.title }}`{% endraw %}.

Para solucionar problemas, verifique se todas as tags de saída no arquivo da mensagem de erro estão terminadas com `}}`. Para obter mais informações, consulte "[Objetos do Liquid](https://help.shopify.com/en/themes/liquid/objects)" na documentação do Liquid.

### Erro de tag desconhecida

Este erro significa que o código contém uma tag do Liquid não reconhecida.

Para solucionar problemas, verifique se todas as tags do Liquid no arquivo da mensagem de erro correspondem a variáveis padrão do Jekyll e se não há erros de digitação nos nomes das tags. Para obter uma lista de variáveis padrão, consulte "[Variáveis](https://jekyllrb.com/docs/variables/)" na documentação do Jekyll.

Plugins incompatíveis são uma fonte comum de tags não reconhecidas. Se você usar um plugin incompatível ao gerar seu site localmente e fazer push dos arquivos estáticos para o {% data variables.product.product_name %}, verifique se o plugin não está inserindo tags que não estão nas variáveis padrão do Jekyll. Para obter uma lista de plugins compatíveis, consulte "[Sobre o {% data variables.product.prodname_pages %} e o Jekyll](/articles/about-github-pages-and-jekyll#plugins)".
