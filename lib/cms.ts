// Simple CMS functionality for content management
export interface CMSContent {
  id: string
  title: string
  content: string
  type: "page" | "blog" | "service"
  slug: string
  published: boolean
  createdAt: Date
  updatedAt: Date
}

// Mock CMS data - in a real application, this would come from a database
const mockContent: CMSContent[] = [
  {
    id: "1",
    title: "About Us",
    content: "We are a leading professional IT services company...",
    type: "page",
    slug: "about",
    published: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    title: "Our Services",
    content: "Comprehensive IT infrastructure services...",
    type: "page",
    slug: "services",
    published: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
]

export class CMSService {
  static async getContent(slug: string): Promise<CMSContent | null> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockContent.find((content) => content.slug === slug) || null
  }

  static async getAllContent(): Promise<CMSContent[]> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 100))
    return mockContent.filter((content) => content.published)
  }

  static async updateContent(id: string, updates: Partial<CMSContent>): Promise<CMSContent | null> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 200))
    const index = mockContent.findIndex((content) => content.id === id)
    if (index !== -1) {
      mockContent[index] = { ...mockContent[index], ...updates, updatedAt: new Date() }
      return mockContent[index]
    }
    return null
  }

  static async createContent(content: Omit<CMSContent, "id" | "createdAt" | "updatedAt">): Promise<CMSContent> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 200))
    const newContent: CMSContent = {
      ...content,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    mockContent.push(newContent)
    return newContent
  }

  static async deleteContent(id: string): Promise<boolean> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 200))
    const index = mockContent.findIndex((content) => content.id === id)
    if (index !== -1) {
      mockContent.splice(index, 1)
      return true
    }
    return false
  }
}
