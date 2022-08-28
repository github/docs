{% ifversion ghae %}

{% warning %}

{% ifversion ghae-next %} <!-- Remove elsif condition below when toggling -->

**Warning:** Self-hosted runners are enabled by default for {% data variables.product.prodname_ghe_managed %}. Self-hosted runners are long-lived, and any compromise to the host machine could leak secrets or credentials or enable other attacks. If you'd like to disable self-hosted runners for your enterprise, you can contact {% data variables.product.prodname_dotcom %} support. For more information about the risks of using self-hosted runners, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)."

{% elsif ghae %} <!-- Remove this condition when toggling above flag -->

**Warning:** Self-hosted runners are currently disabled for {% data variables.product.prodname_ghe_managed %}. Isso porque {% data variables.product.prodname_ghe_managed %} oferece garantias para as fronteiras de segurança que são incompatíveis com a forma como os executores hospedados funcionam. No entanto, se você precisar usar executores auto-hospedados com {% data variables.product.prodname_ghe_managed %} e entender as implicações de segurança, você poderá entrar em contato com o suporte de {% data variables.product.prodname_dotcom %} para uma exceção de segurança que irá habilitar executores auto-hospedados.

Se você não precisar de executores auto-hospedados, você poderá usar {% data variables.actions.hosted_runner %}s para executar seus fluxos de trabalho. Para obter mais informações, consulte "[Sobre {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)".

{% endif %}

{% endwarning %}

{% endif %}
