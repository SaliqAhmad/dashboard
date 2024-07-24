import './App.css'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function App() {

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-background'>
        <Card className="w-full max-w-sm text-center">
          <CardHeader>
            <CardTitle className="text-2xl">
              Welcome to our platform
            </CardTitle>
            <CardDescription>
              Enter your details below to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              {/* <Label htmlFor="email">Select Account</Label> */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                    <SelectItem value="west">
                      Western European Summer Time (WEST)
                    </SelectItem>
                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                    <SelectItem value="ist_indonesia">
                      Indonesia Central Standard Time (WITA)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Australia & Pacific</SelectLabel>
                    <SelectItem value="awst">
                      Australian Western Standard Time (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                      Australian Central Standard Time (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                      Australian Eastern Standard Time (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>South America</SelectLabel>
                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                    <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              {/* <Label htmlFor="password">Select Campaign</Label> */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Campaign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                    <SelectItem value="west">
                      Western European Summer Time (WEST)
                    </SelectItem>
                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                    <SelectItem value="ist_indonesia">
                      Indonesia Central Standard Time (WITA)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Australia & Pacific</SelectLabel>
                    <SelectItem value="awst">
                      Australian Western Standard Time (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                      Australian Central Standard Time (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                      Australian Eastern Standard Time (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>South America</SelectLabel>
                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                    <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Continue</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default App