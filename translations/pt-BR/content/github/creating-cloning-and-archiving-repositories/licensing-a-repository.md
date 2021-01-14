---
title: Licenciar um repositório
intro: 'Os repositórios públicos no GitHub são usados frequentemente para compartilhar softwares de código aberto. Para que seu repositório seja realmente de código aberto, você precisará licenciá-lo para que outros tenham a liberdade de usar, alterar e distribuir o software.'
redirect_from:
  - /articles/open-source-licensing/
  - /articles/licensing-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Escolher a licença ideal

Nós criamos o [choosealicense.com](http://choosealicense.com), para ajudá-lo a compreender como licenciar seu código. Uma licença de software descreve o que pode e não pode ser feito com seu código-fonte, assim é importante tomar uma decisão fundamentada.

Você não tem qualquer obrigação de escolher uma licença. Entretanto, sem uma licença, são aplicadas as leis padrão de copyright, o que significa que você detém todos os direitos de seu código-fonte e ninguém poderá reproduzir, distribuir ou criar derivativos de seu trabalho. Se você está criando um projeto de código aberto, incentivamos fortemente que você contemple uma licença de código aberto. O [Open Source Guide](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project) (Guia de código aberto) apresenta orientações adicionais para a escolha da licença correta para seu projeto.

{% note %}

**Observação:** Se você publicar seu código-fonte em um repositório público em {% data variables.product.product_name %}, {% if currentVersion == "free-pro-team@latest" %}de acordo com os [Termos de Serviço](/articles/github-terms-of-service), {% endif %}outros usuários de {% data variables.product.product_location %} terão o direito de visualizar e bifurcar o seu repositório. Se você já criou um repositório e não quer mais que os usuários tenham acesso a ele, você pode torná-lo privado. Ao alterar a visibilidade de um repositório para privado, as bifurcações existentes ou cópias locais criadas por outros usuários continuarão existindo. Para obter mais informações, consulte "[Configurar visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)".

{% endnote %}

### Identificar a localização da sua licença

A maioria das pessoas indere o texto da licença em um arquivo denominado `LICENSE.txt` (ou `LICENSE.md`) na raiz do repositório. [Veja aqui um exemplo do Hubot](https://github.com/github/hubot/blob/master/LICENSE.md).

Alguns projetos incluem as informações sobre a licença no LEIAME. Por exemplo, um LEIAME de um projeto pode incluir uma observação declarando "Este projeto está licenciado nos termos da licença MIT".

Como uma prática recomendada, incentivamos que você inclua o arquivo da licença no seu projeto.

### Pesquisar no GitHub por tipo de licença

É possível filtrar repositórios com base nas licenças ou família de licenças deles usando o qualificador `license` (licença) e a palavra-chave exata da licença:

| Licença | Palavra-chave da licença                                         |
| ------- | ---------------------------------------------------------------- |
|         | Licença Academic Free v3.0 | `afl-3.0`                           |
|         | Licença Apache 2.0 | `apache-2.0`                                |
|         | Licença Artistic 2.0 | `artistic-2.0`                            |
|         | Licença Boost Software 1.0 | `bsl-1.0`                           |
|         | Licença "simplificada" BSD 2-clause | `bsd-2-clause`             |
|         | Licença "nova" ou "revisada" BSD 3-clause | `bsd-3-clause`       |
|         | Licença BSD 3-clause Clear | `bsd-3-clause-clear`                |
|         | Família de licenças Creative Commons | `cc`                      |
|         | Creative Commons Zero v1.0 Universal | `cc0-1.0`                 |
|         | Creative Commons Attribution 4.0 | `cc-by-4.0`                   |
|         | Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0`    |
|         | Licença Do What The F*ck You Want To Public | `wtfpl`            |
|         | Licença Educational Community v2.0 | `ecl-2.0`                   |
|         | Licença Pública Eclipse 1.0 | `epl-1.0`                          |
|         | Licença Pública Eclipse 2.0 | `epl-2.0`                          |
|         | Licença Pública da União Europeia 1.1 | `eupl-1.1`               |
|         | Licença Pública Geral Affero GNU v3.0 | `agpl-3.0`               |
|         | Família de Licença Pública Geral GNU | `gpl`                     |
|         | Licença Pública Geral GNU v2.0 | `gpl-2.0`                       |
|         | Licença Pública Geral GNU v3.0 | `gpl-3.0`                       |
|         | Família de Licença Pública Geral Menor GNU | `lgpl`              |
|         | Licença Pública Geral Menor GNU v2.1 | `lgpl-2.1`                |
|         | Licença Pública Geral Menor GNU v3.0 | `lgpl-3.0`                |
|         | ISC | `isc`                                                      |
|         | Licença Pública do Projeto LaTeX v1.3c | `lppl-1.3c`             |
|         | Licença Pública Microsoft | `ms-pl`                              |
|         | MIT | `mit`                                                      |
|         | Licença Pública Mozilla 2.0 | `mpl-2.0`                          |
|         | Licença Open Software 3.0 | `osl-3.0`                            |
|         | Licença PostgreSQL | `postgresql`                                |
|         | Licença de fonte Aberta do SIL 1.1 | `ofl-1.1`                   |
|         | Licença de Código Aberto da University of Illinois/NCSA | `ncsa` |
|         | The Unlicense | `unlicense`                                      |
|         | Licença zLib | `zlib`                                            |

Quando você pesquisar uma família de licenças, os resultados incluirão todas as licenças daquela família. Por exemplo, quando você usa a consulta `license:gpl`, seus resultados incluirão repositórios licenciados sob a Licença Pública Geral GNU v2.0 e Licença Pública Geral GNU v3.0. Para obter mais informações, consulte "[Pesquisar repositórios](/articles/searching-for-repositories/#search-by-license)".

### Identificar uma licença

[A licenciada de código aberto Ruby gem ](https://github.com/benbalter/licensee) compara o arquivo *LICENSE* do repositório com uma lista curta de licenças conhecidas. A licenciada também fornece as [APIs de licenças](/rest/reference/licenses) e [dá informações sobre como os repositórios no {% data variables.product.product_name %} são licenciados](https://github.com/blog/1964-open-source-license-usage-on-github-com). Se o seu repositório usa uma licença que não está listada no [site Choose a License](http://choosealicense.com/appendix/), você pode [solicitar a inclusão da licença](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license).

Caso o seu repositório use uma licença listada no site Choose a License que não aparece na parte superior da página do repositório, ele pode conter licenças múltiplas ou outras complexidades. Para que sua licença seja detectada, simplifique o arquivo *LICENSE* e anote a complexidade em algum outro local, como no arquivo *LEIAME* do repositório.

### Aplicar uma licença em um repositório com uma licença existente

O selecionador de licenças somente está disponível quando você cria um novo projeto no GitHub. Você pode adicionar uma licença manualmente usando o navegador. Para obter mais informações sobre adicionar uma licença em um repositório, consulte "[Adicionar uma licença em um repositório](/articles/adding-a-license-to-a-repository)".

![Captura de tela do selecionador de licenças no GitHub.com](/assets/images/help/repository/repository-license-picker.png)

### Isenção de responsabilidade

O objetivo das iniciativas de licenciamento de código aberto do GitHub é oferecer um ponto de partida para ajudar você a tomar uma decisão fundamentada. O GitHub apresenta informações sobre licenças para ajudar os usuários a conseguir informações sobre licenças de código aberto e sobre os projetos que as usam. Esperamos que seja útil, mas esteja ciente de que não somos advogados e que cometemos erros como qualquer pessoa. Por esse motivo, o GitHub fornece as informações com base "na condição em que se encontram" e não oferece nenhuma garantia com relação a qualquer informação ou licenças fornecidas nele ou por intermédio dele, e não se responsabiliza por danos decorrentes do uso das informações de licenças. Se você tiver quaisquer dúvidas com relação à licença ideal para seu código ou quaisquer outras questões legais relacionadas a ele, sempre é melhor consultar um profissional.

### Leia mais

- A seção "Guias de código aberto"[O lado Jurídico de código aberto](https://opensource.guide/legal/)"{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
