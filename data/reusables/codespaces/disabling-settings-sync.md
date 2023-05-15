You can turn off Settings Sync to stop syncing settings to and from an instance of {% data variables.product.prodname_vscode_shortname %}.

When you turn off Settings Sync in a codespace, new codespaces continue to use the settings cached from the last time your settings were pushed to the cloud. If you use the {% data variables.product.prodname_vscode_shortname %} web client for codespaces, and want codespaces to use the default settings instead of your cached settings, you can disable Settings Sync. For more information, see "[Managing your preferences for Settings Sync](#managing-your-preferences-for-settings-sync)."

If you want to return to using the default {% data variables.product.prodname_vscode_shortname %} settings in all instances of {% data variables.product.prodname_vscode_shortname %}, including the desktop application, you can clear the cache in the cloud when you turn off Settings Sync.

1. If Settings Sync is currently turned off in your instance of {% data variables.product.prodname_vscode_shortname %}, and you want to clear your cached settings, you must first turn it on. For instructions, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#turning-on-settings-sync-in-a-codespace)."
1. At the bottom of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Settings Sync is On**.
1. In the dropdown, click **Settings Sync: Turn Off**.

   ![Screenshot of the dropdown menu with the "Settings Sync: Turn Off" option highlighted with a dark orange outline.](/assets/images/help/codespaces/settings-sync-turn-off.png)

1. To clear your cached settings, in the dialog, select **Turn off sync on all your devices and clear the data from the cloud**.

   ![Screenshot of the "Do you want to turn off sync?" dialog, with the option to clear data from the cloud selected.](/assets/images/help/codespaces/turn-off-sync-dialog.png)

1. Click **Turn off**.
