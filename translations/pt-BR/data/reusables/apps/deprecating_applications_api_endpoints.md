{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Aviso de método obsoleto:** {% data variables.product.prodname_dotcom %} irá substituir e descontinuar os pontos de extremidade OAuth contendo `access_token` no parâmetro de caminho. Estamos introduzindo novos pontos de extremidade que permitem gerenciar de forma segura os tokens dos aplicativos OAuth usando `access_token` como um parâmetro de entrada.{% if currentVersion == "free-pro-team@latest" %} O aplicativo OAuth API será removido em 5 de maio, 2021.{% endif %} Para mais informações,{% if currentVersion == "free-pro-team@latest" %} incluindo brownouts programados,{% endif %} ver a [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

{% if currentVersion != "free-pro-team@latest" %} Pontos de extremidade usando um `access_token` no parâmetro de caminho estão atualmente disponíveis e ainda não estão obsoletos no {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} anunciará a depreciação e fornecerá um aviso antecipadamente antes de remover o suporte para este recurso.{% endif %}

{% endwarning %}
{% endif %}
