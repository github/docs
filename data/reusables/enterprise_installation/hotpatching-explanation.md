You can upgrade {% data variables.product.prodname_ghe_server %} to the latest patch release using a hotpatch.

You can use hotpatching to upgrade to a newer patch release, but not a feature release. For example, you can upgrade from 2.10.1 to 2.10.5 because they are in the same feature series, but not from 2.10.9 to 2.11.0 because they are in a different feature series.

Hotpatches do not generally require a reboot. If a hotpatch does require a reboot, the {% data variables.product.product_name %} release notes will indicate the requirement.

Hotpatches require a configuration run, which can cause a brief period of errors or unresponsiveness for some or all services on {% data variables.location.product_location %}. You are not required to enable maintenance mode during installation of a hotpatch, but doing so will guarantee that users see a maintenance page instead of errors or timeouts. See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
