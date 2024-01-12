You can stop a codespace at any time. When you stop a codespace, any running processes are stopped. Any saved changes in your codespace will still be available when you next start it. The terminal history is preserved, but the visible contents of the terminal window are not preserved between codespace sessions.

If you do not explicitly stop a codespace, it will continue to run until it times out from inactivity. Closing a codespace does not stop the codespace. For example, if you're using a codespace in the {% data variables.product.prodname_vscode_shortname %} web client and you close the browser tab, the codespace remains running on the remote machine. For information about timeouts, see "[AUTOTITLE](/codespaces/getting-started/the-codespace-lifecycle#timeouts-for-github-codespaces)."

Only running codespaces incur CPU charges. A stopped codespace incurs only storage costs.

You may want to stop and restart a codespace to apply changes to it. For example, if you change the machine type used for your codespace, you will need to stop and restart it for the change to take effect. You can also stop your codespace and choose to restart or delete it if you encounter an error or something unexpected.
