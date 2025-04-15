For appliances in a high availability configuration, Elasticsearch indices are deleted in two situations:

* On failover
* When running `ghe-repl-teardown <REPLICA_HOSTNAME>` from the primary instance

All indices are recoverable, except for Audit Log indices. Since Elasticsearch itself is the source of truth for these logs, they may only be recoverable from a backup. If you need assistance, visit {% data variables.contact.contact_ent_support %}.
