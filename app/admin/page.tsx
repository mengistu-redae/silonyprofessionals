"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CMSService, type CMSContent } from "@/lib/cms"
import { Edit, Trash2, Plus } from "lucide-react"

export default function AdminPage() {
  const [content, setContent] = useState<CMSContent[]>([])
  const [editingContent, setEditingContent] = useState<CMSContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadContent()
  }, [])

  const loadContent = async () => {
    setIsLoading(true)
    try {
      const allContent = await CMSService.getAllContent()
      setContent(allContent)
    } catch (error) {
      console.error("Failed to load content:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (item: CMSContent) => {
    setEditingContent(item)
  }

  const handleSave = async () => {
    if (!editingContent) return

    try {
      await CMSService.updateContent(editingContent.id, editingContent)
      await loadContent()
      setEditingContent(null)
    } catch (error) {
      console.error("Failed to save content:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this content?")) {
      try {
        await CMSService.deleteContent(id)
        await loadContent()
      } catch (error) {
        console.error("Failed to delete content:", error)
      }
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-silony-primary"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-silony-primary">Manage Content</h1>
          <Button className="bg-silony-primary hover:bg-silony-dark">
            <Plus className="h-4 w-4 mr-2" />
            Add New Content
          </Button>
        </div>

        {editingContent ? (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Edit Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={editingContent.title}
                  onChange={(e) => setEditingContent({ ...editingContent, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={editingContent.slug}
                  onChange={(e) => setEditingContent({ ...editingContent, slug: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={editingContent.content}
                  onChange={(e) => setEditingContent({ ...editingContent, content: e.target.value })}
                  className="min-h-[200px]"
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleSave} className="bg-silony-primary hover:bg-silony-dark">
                  Save Changes
                </Button>
                <Button variant="outline" onClick={() => setEditingContent(null)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item) => (
            <Card key={item.id} className="neumorphic">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">Type: {item.type}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{item.content}</p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(item)} className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
