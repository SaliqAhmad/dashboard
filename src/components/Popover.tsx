import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Edit2 } from "lucide-react"

export function EditPopover(props: { sales: string }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <Edit2 className="w-4 h-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                            Edit Sales Layer
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Change the sales layer
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="">
                            {/* <Label htmlFor="width">Sales</Label> */}
                            <Input
                                id="width"
                                defaultValue={props.sales}
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Button variant="default" className="col-span-3">
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
