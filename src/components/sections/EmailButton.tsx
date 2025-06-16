"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmailButton() {
  return (
    <Button
      variant="outline"
      className="fixed top-8 left-6 z-50 rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition"
      onClick={() =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=rohanrv2004@gmail.com",
          "_blank"
        )
      }
    >
      <Mail className="h-5 w-5" />
    </Button>
  )
}
