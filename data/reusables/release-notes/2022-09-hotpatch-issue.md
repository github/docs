Hotpatch upgrades to GitHub Enterprise Server  may fail. Upgrades with the full `.pkg` are unaffected. If the upgrade fails for your instance, workaround this issue by connecting to the administrative shell (ssh) and running the following non-interactive command:

```shell
echo "grub-pc grub-pc/install_devices_empty boolean true" | sudo debconf-set-selections
```

If you're unable to upgrade, or if you need further assistance, contact GitHub Support. For more information, see "[AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket)."
