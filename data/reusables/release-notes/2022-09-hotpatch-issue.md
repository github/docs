Hotpatch upgrades to GitHub Enterprise Server {% ifversion ghes = 3.4 %}3.4.9{% elsif ghes = 3.5 %}3.5.6{% elsif ghes = 3.6 %}3.6.2{% endif %} may fail. Upgrades with the full `.pkg` are unaffected. If the upgrade fails for your instance, either run the full `.pkg` upgrade, or work around the issue by performing the following steps.

1. SSH into the affected node.
1. To launch GRUB, run the following command.

   ```
   sudo dpkg --configure -a
   ```
1. In the first GRUB window, you will see a list of devices. Do not modify the selection. Press the <kbd>Tab</kbd> key to highlight `<Ok>`, then press <kbd>Return/Enter</kbd> to accept.
1. In the second GRUB window, to continue without installing GRUB, use the arrow keys to highlight `<Yes>`, then press <kbd>Return/Enter</kbd> to accept.
1. After you are returned to the prompt, use `ghe-upgrade` to start the hotpatch installation again.

If you're unable to upgrade, or if you need further assistance, contact GitHub Support. For more information, see "[Creating a support ticket](/support/contacting-github-support/creating-a-support-ticket)." [Updated: 2022-09-27]
