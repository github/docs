{% note %}

**Note:** The `--apple-use-keychain` option stores the passphrase in your keychain for you when you add an SSH key to the ssh-agent. If you chose not to add a passphrase to your key, run the command without the `--apple-use-keychain` option.

The `--apple-use-keychain` option is in Apple's standard version of `ssh-add`. In MacOS versions prior to Monterey (12.0), the `--apple-use-keychain` and `--apple-load-keychain` flags used the syntax `-K` and `-A`, respectively.

If you don't have Apple's standard version of `ssh-add` installed, you may receive an error. For more information, see "[AUTOTITLE](/authentication/troubleshooting-ssh/error-ssh-add-illegal-option----apple-use-keychain)."

If you continue to be prompted for your passphrase, you may need to add the command to your `~/.zshrc` file (or your `~/.bashrc` file for bash).

{% endnote %}
