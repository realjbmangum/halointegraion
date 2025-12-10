"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedState, setSelectedState] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      companyName: formData.get("companyName"),
      propertyType: formData.get("propertyType"),
      city: formData.get("city"),
      state: selectedState,
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("https://formspree.io/f/xpwykanv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }

      setIsSubmitted(true)
      ;(e.target as HTMLFormElement).reset()
      setSelectedState("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="sr-only">
            First Name *
          </Label>
          <Input id="firstName" name="firstName" required placeholder="First Name" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="sr-only">
            Last Name *
          </Label>
          <Input id="lastName" name="lastName" required placeholder="Last Name" disabled={isSubmitting} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="companyName" className="sr-only">
          Company or Property Name
        </Label>
        <Input id="companyName" name="companyName" placeholder="Company or Property Name" disabled={isSubmitting} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="propertyType" className="sr-only">
          Property Type
        </Label>
        <Input id="propertyType" name="propertyType" placeholder="Property Type" disabled={isSubmitting} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="city" className="sr-only">
            City
          </Label>
          <Input id="city" name="city" placeholder="City" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state" className="sr-only">
            State
          </Label>
          <Select name="state" disabled={isSubmitting} value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger id="state">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              {US_STATES.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="sr-only">
          Email *
        </Label>
        <Input id="email" name="email" type="email" required placeholder="Email" disabled={isSubmitting} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="sr-only">
          Phone *
        </Label>
        <Input id="phone" name="phone" type="tel" required placeholder="Phone" disabled={isSubmitting} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="sr-only">
          How can we help
        </Label>
        <Textarea id="message" name="message" placeholder="How can we help" rows={5} disabled={isSubmitting} />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto bg-black hover:bg-black/90 text-white"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : isSubmitted ? (
          "Message Sent!"
        ) : (
          "Send"
        )}
      </Button>

      {isSubmitted && <p className="text-sm text-green-600">Thank you! We'll be in touch soon.</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  )
}
