1. To set your SSH signing key in Git, paste the text below, substituting the contents of your clipboard for the key you'd like to use. Since the key contains spaces, you must wrap it in quotes:
  ```bash
  $ git config --global user.signingkey 'ssh-ed25519 AAAAC3(...) user@example.com'
  ```

Alternatively, you can add the direct path to your public key if your system does not properly handle adding the content of the key directly.
  ```bash
  $ git config --global user.signingkey=/path/to/.ssh/pubkey_filename.pub
  ```