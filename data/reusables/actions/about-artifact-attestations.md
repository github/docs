Artifact attestations enable you to create unfalsifiable provenance and integrity guarantees for the software you build. In turn, people who consume your software can verify where and how your software was built.

When you generate artifact attestations with your software, you create cryptographically signed claims that establish your build's provenance and include the following information:

- A link to the workflow associated with the artifact.
- The repository, organization, environment, commit SHA, and triggering event for the artifact.
- Other information from the OIDC token used to establish provenance. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)."

You can also generate artifact attestations that include an associated software bill of materials (SBOM). Associating your builds with a list of the open source dependencies used in them provides transparency and enables consumers to comply with data protection standards.
