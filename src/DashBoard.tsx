import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer, ChartConfig } from "@/components/ui/chart"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "./components/mode-toggle"
import { EditPopover } from "./components/Popover"
import { useState } from "react"
import { ActivityIcon, ArrowUpDownIcon, CreditCardIcon, DollarSignIcon, RefreshCcw, TrendingUp, Users2 } from "lucide-react"
import CustomDropDown from "./components/CustomDropDown"
import { DatePickerWithRange } from "./components/DataRangePicker"
import { Popup } from "./components/Popup"

export default function Component() {
    const [sales, setSales] = useState("12,234")
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className="flex flex-col w-full min-h-screen bg-background">
            <Popup isOpen={isPopupOpen} onClose={closePopup} />
            <header className="flex items-center justify-between h-16 px-6 border-b bg-card">
                <div className="flex items-center gap-4">
                    <DatePickerWithRange />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" className="flex items-center gap-2">
                                <ArrowUpDownIcon className="w-4 h-4" />
                                <span>Result Actions</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Export</DropdownMenuItem>
                            <DropdownMenuItem>Print</DropdownMenuItem>
                            <DropdownMenuItem>Share</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" className="flex items-center gap-2">
                                <ArrowUpDownIcon className="w-4 h-4" />
                                <span>Cost Estimation</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuRadioGroup value="actual">
                                <DropdownMenuRadioItem value="actual">Actual</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="projected">Projected</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* <CustomDropDown /> */}
                </div>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <div className="flex items-center gap-2 p-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-0.5 leading-none">
                                    <div className="font-semibold">John Doe</div>
                                    <div className="text-sm text-muted-foreground">john@example.com</div>
                                </div>
                            </div>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                    <div className="h-4 w-4" />
                                    <span>Profile</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                    <div className="h-4 w-4" />
                                    <span>Settings</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                    <div className="h-4 w-4" />
                                    <span>Sign out</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex-1 grid gap-6 p-6 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader className="flex items-start justify-start gap-2">
                            <div className="flex gap-2">
                                <CardTitle>Total Revenue</CardTitle>
                                <DollarSignIcon className="w-5 h-5 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">$45,231.89</div>
                            <p className="text-sm text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex items-start justify-start gap-2">
                            <div className="flex gap-2">
                                <CardTitle>Subscriptions</CardTitle>
                                <Users2 className="w-5 h-5 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">+2350</div>
                            <p className="text-sm text-muted-foreground">+180.1% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex items-start justify-start gap-2">
                            <div className="w-full flex justify-end">
                                <EditPopover sales={sales} />
                            </div>
                            <div className="flex absolute gap-2">
                                <CardTitle>Sales</CardTitle>
                                <CreditCardIcon className="w-5 h-5 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">+{sales}</div>
                            <p className="text-sm text-muted-foreground">+19% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex items-start justify-start gap-2">
                            <div className="w-full flex justify-end">
                                <Button variant="outline" size={"icon"}>
                                    <RefreshCcw className="w-5 h-5" />
                                </Button>
                            </div>
                            <div className="flex gap-2 absolute">
                                <CardTitle>Active Now</CardTitle>
                                <ActivityIcon className="w-5 h-5 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">+573</div>
                            <p className="text-sm text-muted-foreground">+201 since last hour</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <LinechartChart className="aspect-[9/4]" />
                    <LinechartdotsChart className="aspect-[9/4]" />
                </div>
            </main>
        </div>
    )
}

const chartData = [
    { month: "January", desktop: 200 },
    { month: "February", desktop: 405 },
    { month: "March", desktop: 80 },
    { month: "April", desktop: 273 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 314 },
]

const chartProjectionData = [
    { month: "January", desktop: 186, },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73, mobile: 73 },
    { month: "May", mobile: 209 },
    { month: "June", mobile: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig



function LinechartChart(props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="desktop"
                            type="linear"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Sales are up by 12.5% this month
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total sales for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}


function LinechartdotsChart(props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Revenue Projections</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartProjectionData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="desktop"
                            type="linear"

                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-desktop)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                        <Line
                            dataKey="mobile"
                            type="linear"
                            stroke="var(--color-desktop)"
                            strokeDasharray={"3 3"}
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-desktop)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Revenue is projected to increase by 5.2% this month
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total revenue projections for the next 6 months
                </div>
            </CardFooter>
        </Card>
    )
}