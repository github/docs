A API de {% data variables.product.prodname_pages %} recupera informações sobre a sua configuração do {% data variables.product.prodname_pages %} e os status das suas criações. Informações sobre o site e as criações só podem ser acessadas pelos proprietários autenticados{% ifversion not ghae %}, mesmo que os sites sejam públicos{% endif %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)".

Nos pontos de extremidade da API de {% data variables.product.prodname_pages %} com uma chave de `status` na sua resposta, o valor pode ser:
* `null`: O site ainda não foi criado.
* `queued`: A criação foi solicitada, mas ainda não começou.
* `building`:A criaçãoestá em andamento.
* `built`: O site foi criado.
* `errored`: Indica que ocorreu um erro durante a criação.

Nos pontos de extremidade da API de {% data variables.product.prodname_pages %} que devolvem as informações do site do GitHub Pages, as respostas do JSON incluem esses campos:
* `html_url`: A URL absoluta (incluindo o esquema) do site de páginas interpretadas. Por exemplo, `https://username.github.io`.
* `source`: Um objeto que contém o branch de origem e o diretório do site de páginas interpretadas. Isto inclui:
   - `branch`: O branch do repositório utilizado para publicar os [arquivos de origem do site](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Por exemplo, _principal_ ou _gh-pages_.
   - `path`: O diretório do repositório a partir do qual o site é publicado. Será `/` ou `/docs`.