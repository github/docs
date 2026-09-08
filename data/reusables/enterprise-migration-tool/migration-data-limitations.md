## Limitations on migrated data

There are limits to what {% data variables.product.prodname_importer_proper_name %} can migrate. Some are due to limitations of {% data variables.product.prodname_dotcom %}, while others are limitations of {% data variables.product.prodname_importer_proper_name %} itself.

### Limitations of {% data variables.product.prodname_dotcom %}

* **2 GiB size limit for a single Git commit:** No single commit in your Git repository can be larger than 2 GiB. If any of your commits are larger than 2 GiB, you will need to split the commit into smaller commits that are each 2 GiB or smaller.
* **2 GiB size limit for a single push:** No single push can be larger than 2 GiB. Larger pushes fail with a `pack exceeds maximum allowed size` error.
* **255 byte limit for Git references:** No single Git reference, commonly known as a "ref", can have a name larger than 255 bytes. Usually, this means that your references cannot be more than 255 characters long, but any non-ASCII characters, such as emojis, may consume more than one byte. If any of your Git references are too large, we'll return a clear error message.
* **100 MiB file size limit:** After you complete your migration, no single file in your Git repository can be larger than 100 MiB. During repository migration this limit is increased to 400 MiB. Consider using {% data variables.large_files.product_name_short %} to store large files.

### Limitations of {% data variables.product.prodname_importer_proper_name %}

* {% data reusables.enterprise-migration-tool.git-repo-size-limit %}
* **400 MiB file size limit:** When migrating a repository with {% data variables.product.prodname_importer_proper_name %}, no single file in your Git repository can be larger than 400 MiB. Consider using {% data variables.large_files.product_name_short %} for storing large files.
* **{% data variables.large_files.product_name_short %} objects not migrated:** The {% data variables.product.prodname_importer_secondary_name %} can migrate repositories that use {% data variables.large_files.product_name_short %}, but the LFS objects themselves will not be migrated. They can be pushed to your migration destination as a follow-up task after the migration is complete.
* **Delayed code search functionality:** Re-indexing the search index can take a few hours after a repository is migrated, and code searches may return unexpected results until re-indexing is complete.
* **Rulesets configured for your organization can cause migrations to fail:** For example, if you configured a rule that requires email addresses for commit authors to end with `@monalisa.cat`, and the repository you're migrating contains commits that don't comply with this rule, your migration will fail.
* **Mannequin content might not be searchable:** Mannequins are placeholder users to which imported content (such as issues, pull requests, comments, etc.) is associated. When you search for content associated with a mannequin, such as assigned issues, the issues may not be found. Once a mannequin is reclaimed, the content should be found via the new owner.
