import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Filter } from 'lucide-react'

interface FilterPopoverProps {
  column: string
  onFilterChange: (value: string) => void
}

export function FilterPopover({ column, onFilterChange }: FilterPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Filter by {column}</h4>
            <p className="text-sm text-muted-foreground">
              Select a filter criteria for this column
            </p>
          </div>
          <RadioGroup defaultValue="all" onValueChange={onFilterChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="success" id="success" />
              <Label htmlFor="success">Success</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="error" id="error" />
              <Label htmlFor="error">Error</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="loading" id="loading" />
              <Label htmlFor="loading">Loading</Label>
            </div>
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  )
}

