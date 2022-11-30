---
title: Fehlerbehebung Deines Codespace
intro: Use this guide to help you troubleshoot common issues with your codespace.
redirect_from:
  - /github/developing-online-with-github-codespaces/troubleshooting-your-codespace
  - /github/developing-online-with-codespaces/troubleshooting-your-codespace
  - /codespaces/working-with-your-codespace/troubleshooting-your-codespace
versions:
  free-pro-team: '*'
type: reference
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Known Limitations

{% data reusables.codespaces.beta-functionality-limited %}

{% data reusables.codespaces.unsupported-repos %}

### {% data variables.product.prodname_vscode %} troubleshooting

Use **Issues** in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) repository to check for known issues or to log issues about the {% data variables.product.prodname_vscode %} experience.


### Configuration troubleshooting

{% data reusables.codespaces.recovery-mode %}

```
This codespace is currently running in recovery mode due to a container error.
```

Review the creation logs, update the configuration as needed, and run **Codespaces: Rebuild Container** in the command palette to retry. Weitere Informationen findest Du unter „[{% data variables.product.prodname_codespaces %} für Dein Projekt konfigurieren](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)."

### dotfiles troubleshooting

- Make sure your dotfiles repository is public. If you have secrets or sensitive data you want to use in your codespace, use [Codespace secrets](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) instead of private dotfiles.
- Check `/workspaces/.codespaces/.persistedshare/dotfiles` to see if your dotfiles were cloned.
  - If your dotfiles were cloned, try manually re-running your install script to verify it's executable.
  - If your dotfiles weren't cloned, check `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` to see if there was a problem cloning them.
- Check `/workspaces/.codespaces/.persistedshare/creation.log` for possible issues. Alternatively, you can view the `creation.log` by navigating to the command palette and entering **Codespaces: View Creation Log**.


### Browser troubleshooting

Wenn Du bei der Verwendung eines nicht Chromium-basierten Browsers auf Probleme stößt, versuche auf einen Chromium-basierenden Browser zu wechseln oder suche nach bekannten Issues für Deinen Browser im `microsoft/vscode`-Repository, indem Du nach Problemen suchst, die mit dem Namen Deines Browsers gekennzeichnet sind, wie etwa [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) oder [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Wenn Du bei der Verwendung eines Chromium-basierten Browsers auf Probleme stößt, kannst Du im [`microsoft/vscode`](https://github.com/microsoft/vscode/issues)-Repository.prüfen, ob du ein anderes bekanntes Problem mit {% data variables.product.prodname_vscode %} erlebst.

### Container storage troubleshooting

When you create a codespace, it has a finite amount of storage and over time it may be necessary for you to free up space. Try any of the following items to free up storage space.

- Remove packages that are no longer by using `sudo apt autoremove`
- Clean the apt cache by using `sudo apt clean`
- Delete unneeded files like build artifacts and logs (these are very project-dependent)
- See the top 10 largest files in the codespace: `sudo find / -printf '%s %p\n'| sort -nr | head -10`

More destructive options:
- Remove unused Docker images, networks, and containers by using `docker system prune` (append `-a` if you want to remove all images, and `--volumes` if you want to remove all volumes)
- Remove untracked files from working tree: `git clean -i`

### Kontakt

Wenn Du immer noch Hilfe benötigst, kannst Du uns kontaktieren. Weitere Informationen findest Du unter „[Über {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#contacting-us-about-codespaces)."
