---
title: Proteger o site GitHub Pages com HTTPS
intro: 'O HTTPS adiciona uma camada de criptografia que impede outras pessoas de interceptar ou adulterar o tráfego do seu site. Você pode exigir HTTPS para seu site do {% data variables.product.prodname_pages %} para redirecionar de forma transparente todas as solicitações HTTP para HTTPS.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  free-pro-team: '*'
topics:
  - Páginas
---

Pessoas com permissões de administrador para um repositório podem exigir HTTPS para um site do {% data variables.product.prodname_pages %}.

### Sobre HTTPS e o {% data variables.product.prodname_pages %}

Todos os sites do {% data variables.product.prodname_pages %}, incluindo os sites corretamente configurados com um domínio personalizado, permitem exigir HTTPS e HTTPS. Para obter mais informações sobre domínios personalizados, consulte "[Sobre domínios personalizados e o {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)" e "[Solucionar problemas de domínios personalizados e do {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)".

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

### Exigir HTTPS para o site do {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. No "{% data variables.product.prodname_pages %}," selecione **Enforce HTTPS** (Exigir HTTPS). ![Caixa de seleção Enforce HTTPS (Exigir HTTPS)](/assets/images/help/pages/enforce-https-checkbox.png)

### Resolver problemas com conteúdo misto

Se você habilitar HTTPS para seu site do {% data variables.product.prodname_pages %}, mas o HTML do site ainda fizer referência a imagens, CSS ou JavaScript por HTTP, significa que seu site está fornecendo *conteúdo misto*. O fornecimento de conteúdo misto pode tornar o site menos seguro e causar problemas no carregamento de arquivos.

Para remover conteúdo misto do site, verifique se todos os arquivos são entregues via HTTPS alterando `http://` para `https://` no HTML do site.

Os ativos geralmente são encontrados nos seguintes locais:
- Caso seu site utilize o Jekyll, provavelmente os arquivos HTML estarão na pasta *_layouts*.
- O CSS fica na seção `<head>` do arquivo HTML.
- O JavaScript geralmente está na seção `<head>` ou um pouco antes da tag de encerramento `</body>`.
- As imagens geralmente estão na seção `<body>`.

{% tip %}

**Dica:** se você não conseguir encontrar seus ativos nos arquivos de origem do site, tente pesquisar neles por `http` no editor de texto ou no {% data variables.product.product_name %}.

{% endtip %}

#### Exemplos de ativos referenciados em um arquivo HTML

| Tipo de ativo |                                                         HTTP                                                         |                                                         HTTPS                                                          |
|:-------------:|:--------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------:|
|      CSS      |                        `<link rel="stylesheet" href="http://example.com/css/main.css">`                        |                        `<link rel="stylesheet" href="https://example.com/css/main.css">`                         |
|  JavaScript   |              `<script type="text/javascript" src="http://example.com/js/main.js"></script>`              |              `<script type="text/javascript" src="https://example.com/js/main.js"></script>`               |
|    Imagem     | `<A HREF="http://www.somesite.com"><IMG SRC="http://www.example.com/logo.jpg" alt="Logotipo"></a>` | `<A HREF="https://www.somesite.com"><IMG SRC="https://www.example.com/logo.jpg" alt="Logotipo"></a>` |  
