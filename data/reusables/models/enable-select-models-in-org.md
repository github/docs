{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.models-development %}
1. Under "Models", in the "Models in your organization" section, click {% octicon "chevron-down" aria-label="the down arrow" %} beside **Disabled** and select **Enabled** from the dropdown.

   > [!NOTE]
   > If {% data variables.product.prodname_github_models %} is already enabled for the organization, the dropdown will show **Enabled**, and you can skip the step above.

1. Under "Models permissions", select one or more options.
   * **All publishers** is the default option and indicates that models from all the current and future publishers available on the {% data variables.product.prodname_github_models %} catalog from the {% data variables.product.prodname_marketplace %} can be used in the organization.
   * **Only select models** allows you to define a list of models and publishers:
        * Available to the organization (**Enabled list**)
        * Restricted for use in the organization (**Disabled list**)

   Depending on your requirements, you can specify an enabled list, a disabled list, or both.
   Once you've added a publisher to a list, you can fine-tune the list by removing individual models from it.
