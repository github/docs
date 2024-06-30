If you want to migrate multiple repositories to {% data variables.product.prodname_ghe_cloud %} at once, use the {% data variables.product.prodname_cli %} to generate a migration script. The resulting script will contain a list of migration commands, one per repository.

{% note %}

**Note:** Generating a script outputs a PowerShell script. If you're using Terminal, you will need to output the script with the `.ps1` file extension and install PowerShell for either [Mac](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2) or [Linux](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.2) to run it.

{% endnote %}
