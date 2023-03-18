You can disable Settings Sync to stop syncing settings to and from an instance of {% data variables.product.prodname_vscode_shortname %}.

By default, when you disable Settings Sync, new codespaces continue to use the settings cached from the last time your settings were pushed to the cloud. If your codespaces are still being created with cached settings, and you want to return to using the default {% data variables.product.prodname_vscode_shortname %} settings in your codespaces, you can clear the cache in the cloud when you disable Settings Sync.

1. If Settings Sync is currently disabled in your instance of {% data variables.product.prodname_vscode_shortname %}, you must first enable it. For instructions, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#enabling-settings-sync)."
1. At the bottom of the Activity Bar, select {% octicon "gear" aria-label="The gear icon" %} and click **Settings Sync is On**.
1. In the dropdown, click **Settings Sync: Turn Off**.

   ![Screenshot of the dropdown menu with the "Settings Sync: Turn Off" option highlighted with a dark orange outline.](/assets/images/help/codespaces/settings-sync-turn-off.png)

1. To clear your cached settings, in the dialog, select **Turn off sync on all your devices and clear the data from the cloud**.

   ![Screenshot of the "Do you want to turn off sync?" dialog, with the option to clear data from the cloud selected.](/assets/images/help/codespaces/turn-off-sync-dialog.png)

1. Click **Turn off**.
