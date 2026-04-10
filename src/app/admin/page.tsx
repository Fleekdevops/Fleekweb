'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Users, MessageSquare, FileText, BarChart3, Settings, Bot,
  X, Send, Plus, Edit, Trash2, Save, LogOut, Lock
} from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  budget: string
  timeline: string
  status: string
  createdAt: string
}

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  category: string
  published: boolean
  createdAt: string
}

interface Analytics {
  consultations: number
  blogPosts: number
  contacts: number
  visitors: number
}

const tabs = [
  { id: 'contacts', label: 'Contacts', icon: Users },
  { id: 'blog', label: 'Blog', icon: FileText },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'chatbot', label: 'Chatbot Config', icon: Bot },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('contacts')
  const [contacts, setContacts] = useState<Contact[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [chatMessages, setChatMessages] = useState<{role: string, content: string}[]>([])
  const [chatInput, setChatInput] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [systemPrompt, setSystemPrompt] = useState(
    'You are Freezer, an AI assistant created by Fleek AI. Always be helpful and promote our services.'
  )

  useEffect(() => {
    const isAuth = localStorage.getItem('admin_auth')
    if (!isAuth) {
      router.push('/admin/login')
      return
    }
    fetchData()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    router.push('/admin/login')
  }

  const fetchData = async () => {
    try {
      const [contactsRes, blogRes, analyticsRes] = await Promise.all([
        fetch('/api/contact'),
        fetch('/api/blog'),
        fetch('/api/analytics'),
      ])

      if (contactsRes.ok) {
        const data = await contactsRes.json()
        setContacts(data.data || [])
      }
      if (blogRes.ok) {
        const data = await blogRes.json()
        setBlogPosts(data.data || [])
      }
      if (analyticsRes.ok) {
        const data = await analyticsRes.json()
        setAnalytics(data.data)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleChat = async () => {
    if (!chatInput.trim()) return

    const userMessage = { role: 'user', content: chatInput }
    setChatMessages(prev => [...prev, userMessage])
    setChatInput('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: chatInput, history: chatMessages }),
      })

      if (response.ok) {
        const data = await response.json()
        setChatMessages(prev => [...prev, { role: 'assistant', content: data.response }])
      }
    } catch (error) {
      toast.error('Failed to send message')
    }
  }

  const handleDeleteContact = async (id: string) => {
    toast.success('Contact deleted (demo only)')
  }

  return (
    <div className="min-h-screen bg-darker p-6">
      <Toaster position="top-right" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 animate-fade-in flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black gradient-text mb-2">Fleek AI Admin</h1>
            <p className="text-gray">Manage your AI platform from one dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-gray hover:text-light text-sm">View Site</Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <aside className="w-64 shrink-0">
            <div className="card-bg rounded-2xl p-4 sticky top-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'gradient-bg text-white'
                        : 'hover:bg-white/5 text-gray'
                    }`}
                  >
                    <tab.icon size={20} />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1">
            {activeTab === 'contacts' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Contact Requests</h2>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                    {contacts.length} total
                  </span>
                </div>

                <div className="card-bg rounded-2xl p-6">
                  {contacts.length === 0 ? (
                    <div className="text-center py-12 text-gray">
                      No contact requests yet
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {contacts.map((contact) => (
                        <div
                          key={contact.id}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                          onClick={() => setSelectedContact(contact)}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                              {contact.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-bold">{contact.name}</div>
                              <div className="text-sm text-gray">{contact.email}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              contact.status === 'new' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray'
                            }`}>
                              {contact.status}
                            </span>
                            <span className="text-sm text-gray">
                              {new Date(contact.createdAt).toLocaleDateString()}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleDeleteContact(contact.id)
                              }}
                              className="p-2 hover:bg-red-500/20 rounded-lg text-red-400"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {selectedContact && (
                  <div className="card-bg rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold">Contact Details</h3>
                      <button
                        onClick={() => setSelectedContact(null)}
                        className="p-2 hover:bg-white/10 rounded-lg"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray">Name</label>
                        <div className="font-semibold">{selectedContact.name}</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray">Email</label>
                        <div className="font-semibold">{selectedContact.email}</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray">Phone</label>
                        <div className="font-semibold">{selectedContact.phone || 'N/A'}</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray">Company</label>
                        <div className="font-semibold">{selectedContact.company || 'N/A'}</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray">Service</label>
                        <div className="font-semibold text-primary">{selectedContact.service}</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray">Budget</label>
                        <div className="font-semibold">{selectedContact.budget || 'Not specified'}</div>
                      </div>
                      <div className="col-span-2">
                        <label className="text-sm text-gray">Message</label>
                        <div className="mt-1 p-4 bg-white/5 rounded-xl">
                          {selectedContact.message || 'No message provided'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'blog' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Blog Posts</h2>
                  <button className="btn-primary px-4 py-2 rounded-xl flex items-center gap-2">
                    <Plus size={18} />
                    New Post
                  </button>
                </div>

                <div className="card-bg rounded-2xl p-6">
                  {blogPosts.length === 0 ? (
                    <div className="text-center py-12 text-gray">
                      No blog posts yet. Create your first post!
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {blogPosts.map((post) => (
                        <div
                          key={post.id}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                        >
                          <div>
                            <div className="font-bold">{post.title}</div>
                            <div className="text-sm text-gray">{post.category}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              post.published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {post.published ? 'Published' : 'Draft'}
                            </span>
                            <button className="p-2 hover:bg-white/10 rounded-lg">
                              <Edit size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold">Analytics Dashboard</h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Visitors', value: analytics?.visitors || 0, color: 'from-blue-500 to-cyan-500' },
                    { label: 'Consultations', value: analytics?.consultations || 0, color: 'from-purple-500 to-pink-500' },
                    { label: 'Blog Posts', value: analytics?.blogPosts || 0, color: 'from-green-500 to-emerald-500' },
                    { label: 'Contact Requests', value: analytics?.contacts || 0, color: 'from-orange-500 to-amber-500' },
                  ].map((stat, index) => (
                    <div key={index} className="card-bg rounded-2xl p-6">
                      <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-gray">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="card-bg rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Real-time Activity</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-green-400">12</div>
                      <div className="text-sm text-gray">Active Users</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-primary">3.2%</div>
                      <div className="text-sm text-gray">Conversion Rate</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-secondary">4m 32s</div>
                      <div className="text-sm text-gray">Avg Session</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-2xl font-bold text-accent">42%</div>
                      <div className="text-sm text-gray">Bounce Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'chatbot' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold">Freezer AI Configuration</h2>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="card-bg rounded-2xl p-6">
                    <h3 className="text-lg font-bold mb-4">API Configuration</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">OpenRouter API Key</label>
                        <input
                          type="password"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          placeholder="sk-or-..."
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none"
                        />
                        <p className="text-xs text-gray mt-2">Get your API key from openrouter.ai</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">AI Model</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none">
                          <option>meta-llama/llama-3.2-3b-instruct:free</option>
                          <option>openai/gpt-3.5-turbo</option>
                          <option>anthropic/claude-3-haiku</option>
                        </select>
                      </div>
                      <button className="btn-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                        <Save size={18} />
                        Save Configuration
                      </button>
                    </div>
                  </div>

                  <div className="card-bg rounded-2xl p-6">
                    <h3 className="text-lg font-bold mb-4">System Prompt</h3>
                    <textarea
                      value={systemPrompt}
                      onChange={(e) => setSystemPrompt(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="card-bg rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">Test Chat</h3>
                  <div className="h-64 bg-white/5 rounded-xl p-4 overflow-y-auto mb-4 space-y-3">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] px-4 py-2 rounded-xl ${
                          msg.role === 'user' ? 'gradient-bg text-white' : 'bg-white/10'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleChat()}
                      placeholder="Test your chatbot..."
                      className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none"
                    />
                    <button
                      onClick={handleChat}
                      className="btn-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2"
                    >
                      <Send size={18} />
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold">Site Settings</h2>

                <div className="card-bg rounded-2xl p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Site Title</label>
                    <input
                      type="text"
                      defaultValue="Fleek AI | AI-Powered Technology Solutions"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Contact Email</label>
                    <input
                      type="email"
                      defaultValue="Fleektechinc@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+254 758 175 057"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none"
                    />
                  </div>

                  <button className="btn-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <Save size={18} />
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
