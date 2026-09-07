import { describe, expect, test } from 'vitest'
import { shouldFilterMetadataPermission, calculateAdditionalPermissions } from '../scripts/sync'

type PermissionSet = Record<string, string>

interface Operation {
  operationId: string
  permissionSets: PermissionSet[]
}

interface ProgAccessData {
  userToServerRest: boolean
  serverToServer: boolean
  permissions: PermissionSet[]
}

interface ActorResource {
  title: string
  visibility: string
}

interface FilteredOperation {
  operationId: string
  permission: string
  additionalPermissions: boolean
}

interface MetadataPermission {
  operationId: string
  additionalPermissions: boolean
}

describe('metadata permissions filtering', () => {
  // Mock data structure representing operations with metadata permissions
  const mockOperationsWithMetadata: Operation[] = [
    {
      operationId: 'repos/enable-automated-security-fixes',
      permissionSets: [{ metadata: 'read', administration: 'write' }],
    },
    {
      operationId: 'repos/get-readme',
      permissionSets: [{ metadata: 'read' }],
    },
    {
      operationId: 'orgs/update-webhook',
      permissionSets: [{ metadata: 'read', organization_administration: 'write' }],
    },
    {
      operationId: 'repos/get-content',
      permissionSets: [{ contents: 'read' }],
    },
  ]

  // Mock programmatic access data
  const mockProgAccessData: Record<string, ProgAccessData> = {
    'repos/enable-automated-security-fixes': {
      userToServerRest: true,
      serverToServer: true,
      permissions: [{ metadata: 'read', administration: 'write' }],
    },
    'repos/get-readme': {
      userToServerRest: true,
      serverToServer: true,
      permissions: [{ metadata: 'read' }],
    },
    'orgs/update-webhook': {
      userToServerRest: true,
      serverToServer: true,
      permissions: [{ metadata: 'read', organization_administration: 'write' }],
    },
    'repos/get-content': {
      userToServerRest: true,
      serverToServer: true,
      permissions: [{ contents: 'read' }],
    },
  }

  // Mock actor resources
  const mockProgActorResources: Record<string, ActorResource> = {
    metadata: {
      title: 'Metadata',
      visibility: 'public',
    },
    administration: {
      title: 'Administration',
      visibility: 'public',
    },
    organization_administration: {
      title: 'Organization administration',
      visibility: 'public',
    },
    contents: {
      title: 'Contents',
      visibility: 'public',
    },
  }

  test('calculateAdditionalPermissions works correctly', () => {
    // Single permission set with multiple permissions
    expect(calculateAdditionalPermissions([{ metadata: 'read', admin: 'write' }])).toBe(true)

    // Single permission set with single permission
    expect(calculateAdditionalPermissions([{ metadata: 'read' }])).toBe(false)

    // Multiple permission sets
    expect(calculateAdditionalPermissions([{ metadata: 'read' }, { admin: 'write' }])).toBe(true)

    // Empty permission sets
    expect(calculateAdditionalPermissions([])).toBe(false)
  })

  test('identifies metadata with additional permissions correctly', () => {
    // Case 1: metadata + administration (should be filtered)
    const metadataWithAdmin = [{ metadata: 'read', administration: 'write' }]
    expect(shouldFilterMetadataPermission('metadata', metadataWithAdmin)).toBe(true)

    // Case 2: metadata only (should NOT be filtered)
    const metadataOnly = [{ metadata: 'read' }]
    expect(shouldFilterMetadataPermission('metadata', metadataOnly)).toBe(false)

    // Case 3: non-metadata permission (should NOT be filtered)
    const nonMetadata = [{ contents: 'read' }]
    expect(shouldFilterMetadataPermission('contents', nonMetadata)).toBe(false)
  })

  test('filters metadata operations with additional permissions', () => {
    const filteredOperations: FilteredOperation[] = []
    const metadataPermissions: MetadataPermission[] = []

    for (const operation of mockOperationsWithMetadata) {
      const progData = mockProgAccessData[operation.operationId]

      for (const permissionSet of progData.permissions) {
        for (const [permissionName] of Object.entries(permissionSet)) {
          if (mockProgActorResources[permissionName]?.visibility === 'private') continue

          const additionalPermissions = calculateAdditionalPermissions(progData.permissions)

          // Apply metadata filtering logic
          if (shouldFilterMetadataPermission(permissionName, progData.permissions)) {
            // Skip this metadata permission as it has additional permissions
            continue
          }

          if (permissionName === 'metadata') {
            metadataPermissions.push({
              operationId: operation.operationId,
              additionalPermissions,
            })
          } else {
            filteredOperations.push({
              operationId: operation.operationId,
              permission: permissionName,
              additionalPermissions,
            })
          }
        }
      }
    }

    // Should only have metadata permission from the metadata-only operation
    expect(metadataPermissions).toHaveLength(1)
    expect(metadataPermissions[0].operationId).toBe('repos/get-readme')
    expect(metadataPermissions[0].additionalPermissions).toBe(false)

    // Should have other permissions from operations with additional permissions
    const adminPermission = filteredOperations.find((op) => op.permission === 'administration')
    expect(adminPermission).toBeDefined()
    expect(adminPermission!.operationId).toBe('repos/enable-automated-security-fixes')
    expect(adminPermission!.additionalPermissions).toBe(true)

    const orgAdminPermission = filteredOperations.find(
      (op) => op.permission === 'organization_administration',
    )
    expect(orgAdminPermission).toBeDefined()
    expect(orgAdminPermission!.operationId).toBe('orgs/update-webhook')
    expect(orgAdminPermission!.additionalPermissions).toBe(true)
  })

  test('preserves non-metadata permissions regardless of additional permissions', () => {
    const nonMetadataOperations = mockOperationsWithMetadata.filter(
      (op) =>
        !mockProgAccessData[op.operationId].permissions.some((permSet) => 'metadata' in permSet),
    )

    expect(nonMetadataOperations).toHaveLength(1)
    expect(nonMetadataOperations[0].operationId).toBe('repos/get-content')

    // Verify contents permission would be preserved
    const contentsPermissionSet = mockProgAccessData['repos/get-content'].permissions[0]
    expect('contents' in contentsPermissionSet).toBe(true)
    expect('metadata' in contentsPermissionSet).toBe(false)
  })

  test('handles edge cases in permission sets', () => {
    // Empty permission set
    expect(shouldFilterMetadataPermission('metadata', [])).toBe(false)

    // Permission set with empty object (edge case)
    const edgeCase1: Record<string, string>[] = [{ metadata: 'read' }, {}]
    expect(shouldFilterMetadataPermission('metadata', edgeCase1)).toBe(true)

    // Multiple permission sets with metadata in different sets
    const edgeCase2: Record<string, string>[] = [{ metadata: 'read' }, { admin: 'write' }]
    expect(shouldFilterMetadataPermission('metadata', edgeCase2)).toBe(true)
  })

  test('filters metadata permissions that match the GitHub issue examples', () => {
    // These are examples from the GitHub issue that should be filtered out
    // PUT /orgs/{org}/actions/permissions/repositories/{repository_id}
    const putActionsPermissions = [{ metadata: 'read', organization_administration: 'write' }]

    // DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}
    const deleteActionsPermissions = [{ metadata: 'read', organization_administration: 'write' }]

    // These should be filtered out because they have metadata + additional permissions
    expect(shouldFilterMetadataPermission('metadata', putActionsPermissions)).toBe(true)
    expect(shouldFilterMetadataPermission('metadata', deleteActionsPermissions)).toBe(true)

    // But the organization_administration permissions should NOT be filtered
    expect(
      shouldFilterMetadataPermission('organization_administration', putActionsPermissions),
    ).toBe(false)
    expect(
      shouldFilterMetadataPermission('organization_administration', deleteActionsPermissions),
    ).toBe(false)
  })

  test('preserves metadata permissions that are standalone', () => {
    // Example of a metadata-only permission that should be preserved
    const metadataOnlyPermissions = [{ metadata: 'read' }]

    // This should NOT be filtered out
    expect(shouldFilterMetadataPermission('metadata', metadataOnlyPermissions)).toBe(false)
  })

  test('handles complex permission structures from real data', () => {
    // Multiple permission sets (should filter metadata)
    const multiplePermissionSets: Record<string, string>[] = [
      { metadata: 'read' },
      { administration: 'write' },
    ]
    expect(shouldFilterMetadataPermission('metadata', multiplePermissionSets)).toBe(true)

    // Single permission set with multiple permissions (should filter metadata)
    const multiplePermissionsInSet: Record<string, string>[] = [
      { metadata: 'read', contents: 'write', pull_requests: 'write' },
    ]
    expect(shouldFilterMetadataPermission('metadata', multiplePermissionsInSet)).toBe(true)

    // Multiple permission sets where metadata is not in the first set
    const metadataInSecondSet: Record<string, string>[] = [
      { administration: 'write' },
      { metadata: 'read' },
    ]
    expect(shouldFilterMetadataPermission('metadata', metadataInSecondSet)).toBe(true)
  })

  test('validates filtering logic against known problematic endpoints', () => {
    // Based on the issue description, these types of operations should have
    // their metadata permissions filtered out:

    // Runner group operations
    const runnerGroupPermissions = [{ metadata: 'read', organization_administration: 'write' }]

    // Organization secrets operations
    const orgSecretsPermissions = [{ metadata: 'read', organization_secrets: 'write' }]

    // Repository operations with admin permissions
    const repoAdminPermissions = [{ metadata: 'read', administration: 'write' }]

    // All of these should filter out metadata
    expect(shouldFilterMetadataPermission('metadata', runnerGroupPermissions)).toBe(true)
    expect(shouldFilterMetadataPermission('metadata', orgSecretsPermissions)).toBe(true)
    expect(shouldFilterMetadataPermission('metadata', repoAdminPermissions)).toBe(true)

    // But should preserve the actual required permissions
    expect(
      shouldFilterMetadataPermission('organization_administration', runnerGroupPermissions),
    ).toBe(false)
    expect(shouldFilterMetadataPermission('organization_secrets', orgSecretsPermissions)).toBe(
      false,
    )
    expect(shouldFilterMetadataPermission('administration', repoAdminPermissions)).toBe(false)
  })

  test('verifies consistency with additional-permissions flag calculation', () => {
    const testCases: Array<{ permissionSets: Record<string, string>[]; expected: boolean }> = [
      // Single permission, single set - no additional permissions
      { permissionSets: [{ metadata: 'read' }], expected: false },

      // Multiple permissions, single set - has additional permissions
      { permissionSets: [{ metadata: 'read', admin: 'write' }], expected: true },

      // Single permission, multiple sets - has additional permissions
      { permissionSets: [{ metadata: 'read' }, { admin: 'write' }], expected: true },

      // Multiple permissions, multiple sets - has additional permissions
      {
        permissionSets: [{ metadata: 'read', contents: 'read' }, { admin: 'write' }],
        expected: true,
      },
    ]

    for (const testCase of testCases) {
      const additionalPermissions = calculateAdditionalPermissions(testCase.permissionSets)
      const shouldFilter = shouldFilterMetadataPermission('metadata', testCase.permissionSets)

      // The filtering logic should match the additional permissions calculation
      expect(shouldFilter).toBe(additionalPermissions)
      expect(additionalPermissions).toBe(testCase.expected)
    }
  })

  test('validates filtering logic matches expected behavior from issue', () => {
    // Based on the GitHub issue, these operations should be filtered out from metadata:
    // - PUT /orgs/{org}/actions/permissions/repositories/{repository_id}
    // - DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}
    // Because they have metadata + organization_administration permissions

    const progData: ProgAccessData = {
      userToServerRest: true,
      serverToServer: true,
      permissions: [{ metadata: 'read', organization_administration: 'write' }],
    }

    // This should be filtered out from metadata permissions
    expect(shouldFilterMetadataPermission('metadata', progData.permissions)).toBe(true)

    // But organization_administration permission should still be included
    expect(
      shouldFilterMetadataPermission('organization_administration', progData.permissions),
    ).toBe(false)

    // Verify additional permissions flag is set correctly
    expect(calculateAdditionalPermissions(progData.permissions)).toBe(true)
  })
})
