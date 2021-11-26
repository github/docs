{% ifversion ghae %}

{% warning %}

{% ifversion ghae-next %} <!-- Remove elsif condition below when toggling -->

**Aviso:** Os executores auto-hospedados são habilitados por padrão para {% data variables.product.prodname_ghe_managed %}. Os executores auto-hospedados tem uma vida longa e qualquer compromisso na máquina de hospedagem pode vazar segredos ou credenciais ou permitir outros ataques. Se você quiser desabilitar os executores auto-hospedados para a sua empresa, você pode entrar em contato com o suporte de {% data variables.product.prodname_dotcom %}. Para obter mais informações sobre os riscos de usar executores auto-hospedados, consulte "[Enrijecimento de segurança para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)".

{% elsif ghae %} <!-- Remove this condition when toggling above flag -->

**Aviso:** Os executores auto-hospedados estão atualmente desabilitados para {% data variables.product.prodname_ghe_managed %}. Isso porque {% data variables.product.prodname_ghe_managed %} oferece garantias para as fronteiras de segurança que são incompatíveis com a forma como os executores hospedados funcionam. No entanto, se você precisar usar executores auto-hospedados com {% data variables.product.prodname_ghe_managed %} e entender as implicações de segurança, você poderá entrar em contato com o suporte de {% data variables.product.prodname_dotcom %} para uma exceção de segurança que irá habilitar executores auto-hospedados.

Se você não precisar de executores auto-hospedados, você poderá usar {% data variables.actions.hosted_runner %}s para executar seus fluxos de trabalho. Para obter mais informações, consulte "[Sobre {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)".

{% endif %}

{% endwarning %}

{% endif %}
