1. Under "Branch protections", select **Require {% data variables.product.prodname_code_scanning %} results**.
1. Under "Required tools and alert thresholds", click **{% octicon "plus" aria-label="Add tool" %} Add tool** and select a {% data variables.product.prodname_code_scanning %} tool with the dropdown. For example, "{% data variables.product.prodname_codeql %}".
1. Next to the name of a {% data variables.product.prodname_code_scanning %} tool:
    - Click **Alerts** and select one of: **None**, **Errors**, **Errors and Warnings** or **All**.
    - Click **Security alerts** and select one of: **None**, **Critical**, **High or higher**, **Medium or higher**, or **All**.

    ![Screenshot of the "Required tools and alert thresholds" section of "Rulesets" settings.](/assets/images/help/repository/rulesets-require-code-scanning.png)

For more information about alert severity and security severity levels, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels)."
