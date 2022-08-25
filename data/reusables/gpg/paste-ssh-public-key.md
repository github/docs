1. To set your SSH signing key in Git, paste the text below, substituting the contents of your clipboard for the key you'd like to use. Since the key contains spaces, you must wrap it in quotes:
  ```bash
  $ git config --global user.signingkey 'key::ssh-ed25519 AAAAC3(...) user@example.com'
  ```
