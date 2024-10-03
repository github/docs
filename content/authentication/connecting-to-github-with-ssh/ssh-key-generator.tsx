import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function SSHKeyGenerator() {
  const [title, setTitle] = useState('id_rsa')
  const [keyType, setKeyType] = useState('Authentication Key')
  const [sshKey, setSSHKey] = useState('')
  const [username, setUsername] = useState('user')

  const generateSSHKey = () => {
    // This is a simplified representation of an SSH key
    // In a real application, you would use a proper cryptographic library
    const key = 'AAAAB3NzaC1yc2EAAAADAQABAAABAQC' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const formattedKey = `ssh-rsa ${key} ${username}@github.com`
    setSSHKey(formattedKey)
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-900 text-white">
      <CardHeader>
        <CardTitle className="text-2xl">Add new SSH Key</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="keyType">Key type</Label>
          <Select value={keyType} onValueChange={setKeyType}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select key type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Authentication Key">Authentication Key</SelectItem>
              <SelectItem value="Signing Key">Signing Key</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="key">Key</Label>
          <Textarea
            id="key"
            value={sshKey}
            readOnly
            className="h-24 bg-gray-800 border-gray-700 text-white"
            placeholder="Your SSH key will appear here"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>

        <Button onClick={generateSSHKey} className="w-full bg-green-600 hover:bg-green-700">
          Generate SSH key
        </Button>
      </CardContent>
    </Card>
  )
}
