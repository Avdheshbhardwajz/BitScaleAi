'use client'

import { Button } from "@/components/ui/button"
import { LayoutGrid, Clock, Settings, Menu } from 'lucide-react'
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Sidebar() {
  const [open, setOpen] = useState(false)

  const SidebarContent = () => (
    <div className="flex flex-col items-center py-4 gap-4">
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

  return (
    <>
      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-2">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-16 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-16 border-r h-screen">
        <SidebarContent />
      </div>
    </>
  )
}

