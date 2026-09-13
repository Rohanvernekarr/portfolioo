"use client"

import { useState, useEffect } from "react"
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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
          size="icon"
          className="absolute top-3 left-3 z-10 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm border border-white/20 text-foreground shadow-md hover:bg-background hover:text-foreground transition"
          style={{
            opacity: isScrolled ? 0 : 1,
            pointerEvents: isScrolled ? "none" : "auto",
            transition: "opacity 0.3s ease"
          }}
        >
          <Mail className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="z-100">
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
