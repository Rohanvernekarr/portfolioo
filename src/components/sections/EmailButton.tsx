"use client"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export function EmailButton() {
  const [open, setOpen] = useState(false)

  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=rohanrv2004@gmail.com",
      "_blank"
    )
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="fixed top-8 left-6 z-50 rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition"
        >
          <Mail className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-sm">My email address:</p>
        <p className="font-semibold text-base mt-1">rohanrv2004@gmail.com</p>
        <DialogFooter className="mt-4">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleEmailClick}>Open in Gmail</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
