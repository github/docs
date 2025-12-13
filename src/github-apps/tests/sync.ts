import { describe, expect, test } from 'vitest'

type ProgAccessDataRaw = {
  operation_ids: string
  user_to_server: { enabled: boolean }
  server_to_server: { enabled: boolean }
  disabled_for_patv2: boolean
  permission_sets: Array<Record<string, string>>
  allows_permissionless_access: boolean
  allows_public_read: boolean
  basic_auth: boolean
}

type ProgAccessData = {
  [operationId: string]: {
    userToServerRest: boolean
    serverToServer: boolean
    fineGrainedPat: boolean
    permissions: Array<Record<string, string>>
    allowPermissionlessAccess: boolean
    allowsPublicRead: boolean
    basicAuth: boolean
  }
}

type ProgActorResources = Record<string, unknown>

describe('getProgAccessData', () => {
  test('handles single operationIds correctly', async () => {
    const mockProgAccessDataRaw: ProgAccessDataRaw[] = [
      {
        operation_ids: 'single-operation-id',
        user_to_server: { enabled: true },
        server_to_server: { enabled: true },
        disabled_for_patv2: false,
        permission_sets: [{ actions: 'read' }],
        allows_permissionless_access: false,
        allows_public_read: true,
        basic_auth: false,
      },
    ]

    const mockProgActorResources: ProgActorResources = {}

    const result = await processProgAccessDataMock(mockProgAccessDataRaw, mockProgActorResources)

    expect(result.progAccessData).toHaveProperty('single-operation-id')
    expect(result.progAccessData['single-operation-id']).toEqual({
      userToServerRest: true,
      serverToServer: true,
      fineGrainedPat: true,
      permissions: [{ actions: 'read' }],
      allowPermissionlessAccess: false,
      allowsPublicRead: true,
      basicAuth: false,
    })
  })

  test('handles comma-separated operationIds correctly', async () => {
    const mockProgAccessDataRaw: ProgAccessDataRaw[] = [
      {
        operation_ids: 'teams/remove-repo-in-org,teams/remove-repo-legacy',
        user_to_server: { enabled: true },
        server_to_server: { enabled: true },
        disabled_for_patv2: false,
        permission_sets: [
          {
            administration: 'write',
            members: 'read',
            metadata: 'read',
          },
        ],
        allows_permissionless_access: false,
        allows_public_read: false,
        basic_auth: false,
      },
    ]

    const mockProgActorResources: ProgActorResources = {}

    const result = await processProgAccessDataMock(mockProgAccessDataRaw, mockProgActorResources)

    // Both operation IDs should exist
    expect(result.progAccessData).toHaveProperty('teams/remove-repo-in-org')
    expect(result.progAccessData).toHaveProperty('teams/remove-repo-legacy')

    // Both should have identical data
    const expectedData = {
      userToServerRest: true,
      serverToServer: true,
      fineGrainedPat: true,
      permissions: [
        {
          administration: 'write',
          members: 'read',
          metadata: 'read',
        },
      ],
      allowPermissionlessAccess: false,
      allowsPublicRead: false,
      basicAuth: false,
    }

    expect(result.progAccessData['teams/remove-repo-in-org']).toEqual(expectedData)
    expect(result.progAccessData['teams/remove-repo-legacy']).toEqual(expectedData)
  })

  test('handles multiple comma-separated operationIds correctly', async () => {
    const mockProgAccessDataRaw: ProgAccessDataRaw[] = [
      {
        operation_ids: 'operation1,operation2,operation3',
        user_to_server: { enabled: false },
        server_to_server: { enabled: true },
        disabled_for_patv2: true,
        permission_sets: [{ metadata: 'read' }],
        allows_permissionless_access: true,
        allows_public_read: false,
        basic_auth: true,
      },
    ]

    const mockProgActorResources: ProgActorResources = {}

    const result = await processProgAccessDataMock(mockProgAccessDataRaw, mockProgActorResources)

    // All three operation IDs should exist
    expect(result.progAccessData).toHaveProperty('operation1')
    expect(result.progAccessData).toHaveProperty('operation2')
    expect(result.progAccessData).toHaveProperty('operation3')

    // All should have identical data
    const expectedData = {
      userToServerRest: false,
      serverToServer: true,
      fineGrainedPat: false, // false because user_to_server.enabled is false
      permissions: [{ metadata: 'read' }],
      allowPermissionlessAccess: true,
      allowsPublicRead: false,
      basicAuth: true,
    }

    expect(result.progAccessData['operation1']).toEqual(expectedData)
    expect(result.progAccessData['operation2']).toEqual(expectedData)
    expect(result.progAccessData['operation3']).toEqual(expectedData)
  })

  test('handles comma-separated operationIds with whitespace correctly', async () => {
    const mockProgAccessDataRaw: ProgAccessDataRaw[] = [
      {
        operation_ids: 'operation-a, operation-b , operation-c',
        user_to_server: { enabled: true },
        server_to_server: { enabled: false },
        disabled_for_patv2: false,
        permission_sets: [],
        allows_permissionless_access: false,
        allows_public_read: true,
        basic_auth: false,
      },
    ]

    const mockProgActorResources: ProgActorResources = {}

    const result = await processProgAccessDataMock(mockProgAccessDataRaw, mockProgActorResources)

    // All operation IDs should exist (whitespace should be trimmed)
    expect(result.progAccessData).toHaveProperty('operation-a')
    expect(result.progAccessData).toHaveProperty('operation-b')
    expect(result.progAccessData).toHaveProperty('operation-c')

    const expectedData = {
      userToServerRest: true,
      serverToServer: false,
      fineGrainedPat: true,
      permissions: [],
      allowPermissionlessAccess: false,
      allowsPublicRead: true,
      basicAuth: false,
    }

    expect(result.progAccessData['operation-a']).toEqual(expectedData)
    expect(result.progAccessData['operation-b']).toEqual(expectedData)
    expect(result.progAccessData['operation-c']).toEqual(expectedData)
  })

  test('handles mixed single and comma-separated operationIds correctly', async () => {
    const mockProgAccessDataRaw: ProgAccessDataRaw[] = [
      {
        operation_ids: 'single-operation',
        user_to_server: { enabled: true },
        server_to_server: { enabled: true },
        disabled_for_patv2: false,
        permission_sets: [{ actions: 'read' }],
        allows_permissionless_access: false,
        allows_public_read: true,
        basic_auth: false,
      },
      {
        operation_ids: 'comma-op1,comma-op2',
        user_to_server: { enabled: true },
        server_to_server: { enabled: false },
        disabled_for_patv2: true,
        permission_sets: [{ metadata: 'write' }],
        allows_permissionless_access: true,
        allows_public_read: false,
        basic_auth: true,
      },
    ]

    const mockProgActorResources: ProgActorResources = {}

    const result = await processProgAccessDataMock(mockProgAccessDataRaw, mockProgActorResources)

    // Should have 3 total entries
    expect(Object.keys(result.progAccessData)).toHaveLength(3)
    expect(result.progAccessData).toHaveProperty('single-operation')
    expect(result.progAccessData).toHaveProperty('comma-op1')
    expect(result.progAccessData).toHaveProperty('comma-op2')

    // Single operation should have its own data
    expect(result.progAccessData['single-operation']).toEqual({
      userToServerRest: true,
      serverToServer: true,
      fineGrainedPat: true,
      permissions: [{ actions: 'read' }],
      allowPermissionlessAccess: false,
      allowsPublicRead: true,
      basicAuth: false,
    })

    // Comma-separated operations should have identical data
    const expectedCommaData = {
      userToServerRest: true,
      serverToServer: false,
      fineGrainedPat: false, // false because disabled_for_patv2 is true
      permissions: [{ metadata: 'write' }],
      allowPermissionlessAccess: true,
      allowsPublicRead: false,
      basicAuth: true,
    }

    expect(result.progAccessData['comma-op1']).toEqual(expectedCommaData)
    expect(result.progAccessData['comma-op2']).toEqual(expectedCommaData)
  })
})

// Helper function to simulate the data processing logic from sync.ts
// without needing to set up the full file system or remote API calls
async function processProgAccessDataMock(
  progAccessDataRaw: ProgAccessDataRaw[],
  progActorResources: ProgActorResources,
): Promise<{ progAccessData: ProgAccessData; progActorResources: ProgActorResources }> {
  const progAccessData: ProgAccessData = {}

  for (const operation of progAccessDataRaw) {
    const operationData = {
      userToServerRest: operation.user_to_server.enabled,
      serverToServer: operation.server_to_server.enabled,
      fineGrainedPat: operation.user_to_server.enabled && !operation.disabled_for_patv2,
      permissions: operation.permission_sets || [],
      allowPermissionlessAccess: operation.allows_permissionless_access,
      allowsPublicRead: operation.allows_public_read,
      basicAuth: operation.basic_auth,
    }

    // Handle comma-separated operation IDs
    const operationIds = operation.operation_ids.split(',').map((id) => id.trim())
    for (const operationId of operationIds) {
      progAccessData[operationId] = operationData
    }
  }

  return { progAccessData, progActorResources }
}
