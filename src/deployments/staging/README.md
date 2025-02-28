# Staging Servers

> [!NOTE]
> For internal documentation, please see the `Moda` directory in the internal Docs Engineering repo.

When you make a code change and want to review it in a live environment, you can use a staging server. If your change only touches content files e.g. `content/` and `data/` directories, please use the [review server](../../review-server/README.md) instead.

To review code changes on a staging server:

1. If your changes aren't already in remote, push your branch to `docs-internal` .
2. Open a draft PR with your changes.
3. Wait until all of the `docs-internal Moda CI` checks pass.
4. In the `#docs-ops` Slack channel, enter the following command to begin a staging deploy:

```
.deploy docs-internal/<your-branch> to staging-<your-username>
```

If the command was accepted, you will see a reply from `Hubot`, notifying you if your deploy request is valid.

5. After the deploy is completed, you can view your changes at `https://docs-staging-<your-username>.service.iad.github.net` if you are behind the [Developer VPN](https://thehub.github.com/security/security-operations/developer-vpn-access/).
