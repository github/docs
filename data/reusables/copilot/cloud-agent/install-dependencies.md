```yaml
# ...

jobs:
  copilot-setup-steps:
    # ...

    # You can define any steps you want, and they will run before the agent starts.
    # If you do not check out your code, Copilot will do this for you.
    steps:
      - name: Checkout code
        uses: {% data reusables.actions.action-checkout %}

      - name: Set up Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: "20"
          cache: "npm"

      - name: Install JavaScript dependencies
        run: npm ci
```
