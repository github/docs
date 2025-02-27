You can upgrade {% data variables.product.prodname_ghe_server %} to the latest patch release using a hotpatch.

You can use hotpatching to upgrade to a newer patch release, but not a feature release. For example, you can upgrade from 2.10.1 to 2.10.5 because they are in the same feature series, but not from 2.10.9 to 2.11.0 because they are in a different feature series.

Hotpatches do not always require a reboot. When you install the hotpatch, you'll see a message in the terminal if any of the packages need a reboot to complete the update. You can schedule this reboot at a convenient time but we recommend rebooting as soon as practical, especially if there are any security fixes.

Hotpatches require a configuration run, which can cause a brief period of errors or unresponsiveness for some or all services on {% data variables.location.product_location %}. You are not required to enable maintenance mode during installation of a hotpatch, but doing so will guarantee that users see a maintenance page instead of errors or timeouts. See [AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode).
