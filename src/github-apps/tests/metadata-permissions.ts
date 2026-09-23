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
    expect(calculateAdditionalPermissions([{ metadata: 'read', admin: 'write' }])).toBe(true)

    expect(calculateAdditionalPermissions([{ metadata: 'read' }])).toBe(false)

    expect(calculateAdditionalPermissions([{ metadata: 'read' }, { admin: 'write' }])).toBe(true)

    expect(calculateAdditionalPermissions([])).toBe(false)
  })

  test('identifies metadata with additional permissions correctly', () => {
    const metadataWithAdmin = [{ metadata: 'read', administration: 'write' }]
    expect(shouldFilterMetadataPermission('metadata', metadataWithAdmin)).toBe(true)

    const metadataOnly = [{ metadata: 'read' }]
    expect(shouldFilterMetadataPermission('metadata', metadataOnly)).toBe(false)

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

          if (shouldFilterMetadataPermission(permissionName, progData.permissions)) {
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

    const contentsPermissionSet = mockProgAccessData['repos/get-content'].permissions[0]
    expect('contents' in contentsPermissionSet).toBe(true)
    expect('metadata' in contentsPermissionSet).toBe(false)
  })

  test('handles edge cases in permission sets', () => {
    expect(shouldFilterMetadataPermission('metadata', [])).toBe(false)

    const metadataWithEmptySet: Record<string, string>[] = [{ metadata: 'read' }, {}]
    expect(shouldFilterMetadataPermission('metadata', metadataWithEmptySet)).toBe(true)

    const metadataInSeparateSet: Record<string, string>[] = [
      { metadata: 'read' },
      { admin: 'write' },
    ]
    expect(shouldFilterMetadataPermission('metadata', metadataInSeparateSet)).toBe(true)
  })

  test('filters metadata permissions that match the GitHub issue examples', () => {
    // These are examples from the GitHub issue that should be filtered out
    // PUT /orgs/{org}/actions/permissions/repositories/{repository_id}
    const putActionsPermissions = [{ metadata: 'read', organization_administration: 'write' }]

    // DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}
    const deleteActionsPermissions = [{ metadata: 'read', organization_administration: 'write' }]

    expect(shouldFilterMetadataPermission('metadata', putActionsPermissions)).toBe(true)
    expect(shouldFilterMetadataPermission('metadata', deleteActionsPermissions)).toBe(true)

    expect(
      shouldFilterMetadataPermission('organization_administration', putActionsPermissions),
    ).toBe(false)
    expect(
      shouldFilterMetadataPermission('organization_administration', deleteActionsPermissions),
    ).toBe(false)
  })

  test('preserves metadata permissions that are standalone', () => {
    const metadataOnlyPermissions = [{ metadata: 'read' }]

    expect(shouldFilterMetadataPermission('metadata', metadataOnlyPermissions)).toBe(false)
  })

  test('handles complex permission structures from real data', () => {
    const multiplePermissionSets: Record<string, string>[] = [
      { metadata: 'read' },
      { administration: 'write' },
    ]
    expect(shouldFilterMetadataPermission('metadata', multiplePermissionSets)).toBe(true)

    const multiplePermissionsInSet: Record<string, string>[] = [
      { metadata: 'read', contents: 'write', pull_requests: 'write' },
    ]
    expect(shouldFilterMetadataPermission('metadata', multiplePermissionsInSet)).toBe(true)

    const metadataInSecondSet: Record<string, string>[] = [
      { administration: 'write' },
      { metadata: 'read' },
    ]
    expect(shouldFilterMetadataPermission('metadata', metadataInSecondSet)).toBe(true)
  })

  test('validates filtering logic against known problematic endpoints', () => {
    const runnerGroupPermissions = [{ metadata: 'read', organization_administration: 'write' }]

    const orgSecretsPermissions = [{ metadata: 'read', organization_secrets: 'write' }]

    const repoAdminPermissions = [{ metadata: 'read', administration: 'write' }]

    expect(shouldFilterMetadataPermission('metadata', runnerGroupPermissions)).toBe(true)
    expect(shouldFilterMetadataPermission('metadata', orgSecretsPermissions)).toBe(true)
    expect(shouldFilterMetadataPermission('metadata', repoAdminPermissions)).toBe(true)

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
      { permissionSets: [{ metadata: 'read' }], expected: false },

      { permissionSets: [{ metadata: 'read', admin: 'write' }], expected: true },

      { permissionSets: [{ metadata: 'read' }, { admin: 'write' }], expected: true },

      {
        permissionSets: [{ metadata: 'read', contents: 'read' }, { admin: 'write' }],
        expected: true,
      },
    ]

    for (const testCase of testCases) {
      const additionalPermissions = calculateAdditionalPermissions(testCase.permissionSets)
      const shouldFilter = shouldFilterMetadataPermission('metadata', testCase.permissionSets)

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

    expect(shouldFilterMetadataPermission('metadata', progData.permissions)).toBe(true)

    expect(
      shouldFilterMetadataPermission('organization_administration', progData.permissions),
    ).toBe(false)

    expect(calculateAdditionalPermissions(progData.permissions)).toBe(true)
  })
})
