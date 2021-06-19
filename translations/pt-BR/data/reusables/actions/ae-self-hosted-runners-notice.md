{% if currentVersion == "github-ae@latest" %}
{% warning %}

** Aviso:** Os executores auto-hospedados estão desabilitados para {% data variables.product.prodname_ghe_managed %}. Isso porque {% data variables.product.prodname_ghe_managed %} oferece garantias para as fronteiras de segurança que são incompatíveis com a forma como os executores hospedados funcionam. No entanto, se você precisar usar executores auto-hospedados com {% data variables.product.prodname_ghe_managed %} e entender as implicações de segurança, você poderá entrar em contato com o suporte de {% data variables.product.prodname_dotcom %} para uma exceção de segurança que irá habilitar executores auto-hospedados.

Se você não precisar de executores auto-hospedados, você poderá usar {% data variables.actions.hosted_runner %}s para executar seus fluxos de trabalho. Para obter mais informações, consulte "[Sobre {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)".

{% endwarning %}
{% endif %}
