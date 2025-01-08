import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SortAsc } from 'lucide-react'

interface SortPopoverProps {
  onSortChange: (value: string) => void
}

export function SortPopover({ onSortChange }: SortPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <SortAsc className="h-4 w-4 mr-2" />
          Sort
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Sort by</h4>
            <p className="text-sm text-muted-foreground">
              Choose the sorting order
            </p>
          </div>
          <RadioGroup defaultValue="none" onValueChange={onSortChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="none" />
              <Label htmlFor="none">None</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="asc" id="asc" />
              <Label htmlFor="asc">Ascending</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="desc" id="desc" />
              <Label htmlFor="desc">Descending</Label>
            </div>
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  )
}

