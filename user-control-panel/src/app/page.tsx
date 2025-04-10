'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types/User'

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data: User[] = await res.json()
      setUsers(data)
    }

    fetchUsers()
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Finder</h1>

      <input
        type="text"
        placeholder="Search users..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id} className="border-b py-2">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}