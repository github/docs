#!/usr/bin/env node
// This schema is used to validate
// src/github-apps/data/fine-grained-pat-permissions.json
// and src/github-apps/data/server-to-server-permissions.json

const permissionObjects = {
  type: 'object',
  required: ['access', 'category', 'subcategory', 'slug', 'verb', 'requestPath'],
  properties: {
    access: {
      type: 'string',
      enum: ['read', 'write', 'admin'],
    },
    category: {
      type: 'string',
    },
    subcategory: {
      type: 'string',
    },
    slug: {
      type: 'string',
    },
    verb: {
      type: 'string',
      enum: ['get', 'patch', 'post', 'put', 'delete'],
    },
    requestPath: {
      type: 'string',
    },
    'additional-permissions': {
      type: 'array',
    },
  },
}

export default {
  type: 'object',
  required: ['title', 'displayTitle', 'permissions'],
  properties: {
    // Properties from the source OpenAPI schema that this module depends on
    title: {
      description: 'The name of the permission.',
      type: 'string',
    },
    displayTitle: {
      description: 'The display title, which includes the resource group and permission name',
      type: 'string',
    },
    permissions: {
      description: 'An oject with keys for read and write, each with an array of objects.',
      type: 'array',
      items: permissionObjects,
    },
  },
}
