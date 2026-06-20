If a cutover fails partway through, the source repository may remain locked or archived. This prevents developers from pushing to the source while the destination may still be incomplete.

To unlock the source repository, a site administrator must unlock it from the {% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %}. 

After the source is unlocked, you can either retry cutover using `elm migration cutover-to-destination --migration-id MIGRATION-ID`, or abort the migration with `elm migration cancel --migration-id MIGRATION-ID` and start a new migration when you're ready.
