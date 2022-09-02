---
title: Proteger o site GitHub Pages com HTTPS
intro: 'O HTTPS adiciona uma camada de criptografia que impede outras pessoas de interceptar ou adulterar o tráfego do seu site. Você pode exigir HTTPS para seu site do {% data variables.product.prodname_pages %} para redirecionar de forma transparente todas as solicitações HTTP para HTTPS.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Site seguro com HTTPS
---

Pessoas com permissões de administrador para um repositório podem exigir HTTPS para um site do {% data variables.product.prodname_pages %}.

## Sobre HTTPS e o {% data variables.product.prodname_pages %}

Todos os sites do {% data variables.product.prodname_pages %}, incluindo os sites corretamente configurados com um domínio personalizado, permitem exigir HTTPS e HTTPS. Para obter mais informações sobre domínios personalizados, consulte "[Sobre domínios personalizados e o {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)" e "[Solucionar problemas de domínios personalizados e do {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)".

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% note %}

**Observação:** RFC3280 indica que o comprimento máximo do nome comum deve ter 64 caracteres. Portanto, todo o nome de domínio do seu site {% data variables.product.prodname_pages %} deve ter menos de 64 caracteres de comprimento para que um certificado seja criado com sucesso.

{% endnote %}

## Exigir HTTPS para o site do {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. No "{% data variables.product.prodname_pages %}," selecione **Enforce HTTPS** (Exigir HTTPS). ![Caixa de seleção Enforce HTTPS (Exigir HTTPS)](/assets/images/help/pages/enforce-https-checkbox.png)

## Solucionar problemas de provisionamento de certificado (Erro "Certificado ainda não criado"")

Ao definir ou alterar o seu domínio personalizado nas configurações de páginas, uma verificação automática de DNS será iniciada. Esta verificação determina se as suas configurações de DNS estão configuradas para permitir que {% data variables.product.prodname_dotcom %} obtenha um certificado automaticamente. Se a verificação for bem-sucedida, {% data variables.product.prodname_dotcom %} coloca um trabalho em uma fila para solicitar um certificado TLS de [Let's Encrypt](https://letsencrypt.org/). Ao receber um certificado válido, {% data variables.product.prodname_dotcom %} faz o upload automaticamente para os servidores que administram o o cancelamento do TLS para o Pages. Quando este processo é concluído com sucesso, uma nota de seleção é exibida ao lado do seu nome de domínio personalizado.

O processo pode demorar um tempo. Se o processo não foi concluído vários minutos depois de você clicar em **Salvar**, tente clicar em **Remover** ao lado do seu domínio personalizado. Digite novamente o nome de domínio e clique novamente em **Salvar**. Isso irá cancelar e reiniciar o processo de provisionamento.

## Resolver problemas com conteúdo misto

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

### Exemplos de ativos referenciados em um arquivo HTML

| Tipo de ativo |                                                         HTTP                                                         |                                                         HTTPS                                                          |
|:-------------:|:--------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------:|
|      CSS      |                        `<link rel="stylesheet" href="http://example.com/css/main.css">`                        |                        `<link rel="stylesheet" href="https://example.com/css/main.css">`                         |
|  JavaScript   |              `<script type="text/javascript" src="http://example.com/js/main.js"></script>`              |              `<script type="text/javascript" src="https://example.com/js/main.js"></script>`               |
|    Imagem     | `<a href="http://www.somesite.com"><img src="http://www.example.com/logo.jpg" alt="Logotipo"></a>` | `<a href="https://www.somesite.com"><img src="https://www.example.com/logo.jpg" alt="Logotipo"></a>` |  
