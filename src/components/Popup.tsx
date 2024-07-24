import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "./ui/input"

export function Popup({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Manual Data Form
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Please fill in the form below to manually enter the data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <Input placeholder="Enter Data 1" />
                <Input placeholder="Enter Data 2" />
                <AlertDialogFooter>
                    {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
