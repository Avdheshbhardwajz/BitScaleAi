'use client'


import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Share2, Trash2 } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { DeleteDialog } from "./dialogs/delete-dialog"
import { ShareDialog } from "./dialogs/share-dialog"

export function TableHeader() {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)

  const handleDelete = () => {
    // Handle delete logic here
    setShowDeleteDialog(false)
  }

  const handleDownload = () => {
    // Implement download logic here
    const dummyData = "Sample data for download"
    const blob = new Blob([dummyData], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'data.txt'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b gap-4">
      <div className="flex items-center gap-4">
        <Link href="#" className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-medium">Name of the file</h1>
      </div>
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <span className="text-sm">Auto Save</span>
          <Switch />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setShowShareDialog(true)}>
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleDownload}>
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setShowDeleteDialog(true)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <DeleteDialog 
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirm={handleDelete}
      />
      <ShareDialog
        open={showShareDialog}
        onOpenChange={setShowShareDialog}
      />
    </div>
  )
}

