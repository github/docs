- name: Generate artifact attestation
  uses: actions/attest-build-provenance@v1
  with:
    subject-name: {% raw %}${{ env.REGISTRY }}/${{ env.IMAGE_NAME}}{% endraw %}
    subject-digest: {% raw %}${{ steps.push.outputs.digest }}{% endraw %}
    push-to-registry: true
