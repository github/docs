Cada licença de {% data variables.product.prodname_GH_advanced_security %} especifica um número máximo de contas, ou estações, que podem usar essas funcionalidades. Cada committer ativo para, pelo menos, um repositório com o recurso habilitado utiliza uma estação. Um committer é considerado ativo se um de seus commits tiver sido enviado por push para o repositório nos últimos 90 dias, independentemente de quando foi originalmente criado.

{% note %}

**Observação:** Os committers ativos são calculados usando tanto as informações do autor do commit quanto o registro de hora para quando o código foi enviado por push para {% data variables.product.product_name %}.

- Quando um usuário faz push do código para {% data variables.product.prodname_dotcom %}, todos os usuários que criaram código nesse push serão contabilizados para as estações de {% data variables.product.prodname_GH_advanced_security %}, mesmo que o código não seja novo em {% data variables.product.prodname_dotcom %}.

- Os usuários sempre devem criar branches a partir de uma base recente, ou rebaseá-los antes de fazer o push. Isso garantirá que os usuários que não tenham criado o commit nos últimos 90 dias não ocupem estações de {% data variables.product.prodname_GH_advanced_security %}.

{% endnote %}

