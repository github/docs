When operating in a high availability configuration, running `ghe-repl-promote` on a replica node will fail if the original primary cannot be reached by the replica node. This is because the `ghe-repl-promote` script attempts to decommission all Elasticsearch nodes other than the promoted node, however these requests are made to the original primary node which is no longer reachable. The error message written to the terminal will be similar to:

```shell
Maintenance mode has been enabled for active replica <REPLICA_HOSTNAME>
{"message": "No server is currently available to service your request. Sorry about that. Please try resubmitting your request and contact your local GitHub Enterprise site administrator if the problem persists."}
jq: error (at :3): Cannot index string with string "node"
```

If this occurs, workaround this issue by running the following command — this changes the `ghe-repl-promote` script in place:

```shell
sudo sed -i.bak -e '/for node_hostname in/i if ! $forced; then' -e '/^  done/a fi' /usr/local/bin/ghe-repl-promote
```

Then re-run the updated `ghe-repl-promote` script.
