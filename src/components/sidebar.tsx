import { Button } from "@/components/ui/button"
import { LayoutGrid, Clock, Settings } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-16 border-r h-screen flex flex-col items-center py-4 gap-4">
      <Button variant="ghost" size="icon" className="rounded-lg">
        <LayoutGrid className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-lg">
        <Clock className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-lg">
        <Settings className="h-5 w-5" />
      </Button>
    </div>
  )
}

