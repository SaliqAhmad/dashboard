"use client"

import { useState } from "react"
import { Select, SelectTrigger, SelectContent } from "@/components/ui/select"

export default function CustomDropDown() {
    const [open, setOpen] = useState<{ [key: string]: boolean }>({
        option1: false,
        option2: false,
        option3: false,
        hello1: false,
        hello2: false,
    })
    const toggleOpen = (key: string) => {
        setOpen((prev) => ({ ...prev, [key]: !prev[key] }))
    }
    return (
        <div className="w-64">
            <Select>
                <SelectTrigger className="flex justify-between items-center border p-2 rounded-md">
                    <span>Options</span>
                </SelectTrigger>
                <SelectContent className="border rounded mt-2 p-2">
                    <div className="space-y-2">
                        <div>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen("option1")}>
                                <span>Option 1</span>
                                {open.option1 ? <div /> : <div />}
                            </div>
                            {open.option1 && (
                                <div className="ml-4 border-t mt-2 pt-2 space-y-2">
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => toggleOpen("hello1")}
                                    >
                                        <span>Hello</span>
                                        {open.hello1 ? <div /> : <div />}
                                    </div>
                                    {open.hello1 && (
                                        <div className="ml-4 border-t mt-2 pt-2">
                                            <div>Hello</div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="border-t pt-2">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen("option2")}>
                                <span>Option 1</span>
                                {open.option2 ? <div /> : <div />}
                            </div>
                        </div>
                        <div className="border-t pt-2">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen("option3")}>
                                <span>Option 1</span>
                                {open.option3 ? <div /> : <div />}
                            </div>
                            {open.option3 && (
                                <div className="ml-4 border-t mt-2 pt-2 space-y-2">
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => toggleOpen("hello2")}
                                    >
                                        <span>Hello</span>
                                        {open.hello2 ? <div /> : <div />}
                                    </div>
                                    {open.hello2 && (
                                        <div className="ml-4 border-t mt-2 pt-2">
                                            <div>Hello</div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="border-t pt-2">
                            <div className="flex justify-between items-center cursor-pointer">
                                <span>Option 1</span>
                                <div />
                            </div>
                        </div>
                        <div className="border-t pt-2">
                            <div className="flex justify-between items-center cursor-pointer">
                                <span>Option 1</span>
                                <div />
                            </div>
                        </div>
                    </div>
                </SelectContent>
            </Select>
        </div>
    )
}