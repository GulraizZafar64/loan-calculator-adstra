"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car, ArrowLeft, Shield, DollarSign, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

interface InsuranceResult {
  annualPremium: number
  monthlyPremium: number
  coverageDetails: {
    liability: number
    collision: number
    comprehensive: number
    personalInjury: number
  }
  factors: {
    basePremium: number
    ageAdjustment: number
    locationAdjustment: number
    driverAdjustment: number
    coverageMultiplier: number
  }
}

export default function CarInsuranceCalculatorMain() {
  const [carValue, setCarValue] = useState<string>("")
  const [carAge, setCarAge] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [coverageType, setCoverageType] = useState<string>("")
  const [driverAge, setDriverAge] = useState<string>("")
  const [drivingExperience, setDrivingExperience] = useState<string>("")
  const [previousClaims, setPreviousClaims] = useState<string>("")
  const [result, setResult] = useState<InsuranceResult | null>(null)

  const calculatePremium = () => {
    const vehicleValue = Number.parseFloat(carValue)
    const vehicleAge = Number.parseInt(carAge)
    const driverAgeNum = Number.parseInt(driverAge)
    const experienceYears = Number.parseInt(drivingExperience)
    const claimsCount = Number.parseInt(previousClaims)

    if (!vehicleValue || !vehicleAge || !location || !coverageType || !driverAgeNum || !experienceYears) {
      alert("Please fill in all required fields")
      return
    }

    // Base premium calculation (simplified model)
    const basePremium = vehicleValue * 0.03 // 3% of car value as base

    // Age adjustment
    let ageMultiplier = 1.0
    if (vehicleAge <= 2)
      ageMultiplier = 1.3 // New cars cost more
    else if (vehicleAge <= 5) ageMultiplier = 1.1
    else if (vehicleAge <= 10) ageMultiplier = 1.0
    else ageMultiplier = 0.8 // Older cars cost less

    // Location adjustment
    const locationMultipliers: { [key: string]: number } = {
      urban: 1.4,
      suburban: 1.0,
      rural: 0.8,
    }
    const locationMultiplier = locationMultipliers[location] || 1.0

    // Driver profile adjustment
    let driverMultiplier = 1.0
    if (driverAgeNum < 25)
      driverMultiplier += 0.5 // Young drivers
    else if (driverAgeNum > 65) driverMultiplier += 0.2 // Senior drivers

    if (experienceYears < 3)
      driverMultiplier += 0.3 // Inexperienced
    else if (experienceYears > 10) driverMultiplier -= 0.1 // Experienced discount

    if (claimsCount > 0) driverMultiplier += claimsCount * 0.2 // Claims penalty

    // Coverage type multiplier
    const coverageMultipliers: { [key: string]: number } = {
      basic: 0.6,
      standard: 1.0,
      comprehensive: 1.5,
      premium: 2.0,
    }
    const coverageMultiplier = coverageMultipliers[coverageType] || 1.0

    // Calculate final premium
    const annualPremium = basePremium * ageMultiplier * locationMultiplier * driverMultiplier * coverageMultiplier
    const monthlyPremium = annualPremium / 12

    // Coverage breakdown (simplified)
    const coverageDetails = {
      liability: annualPremium * 0.4,
      collision: annualPremium * 0.3,
      comprehensive: annualPremium * 0.2,
      personalInjury: annualPremium * 0.1,
    }

    setResult({
      annualPremium,
      monthlyPremium,
      coverageDetails,
      factors: {
        basePremium,
        ageAdjustment: ageMultiplier,
        locationAdjustment: locationMultiplier,
        driverAdjustment: driverMultiplier,
        coverageMultiplier,
      },
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <div className="container max-w-6xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Car Insurance Premium Calculator</h1>
          <p className="text-muted-foreground text-lg">
            Get an estimated premium for your vehicle insurance based on your car details and driving profile
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
                <CardDescription>Tell us about your car</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="carValue">Car Value (USD)</Label>
                  <Input
                    id="carValue"
                    type="number"
                    placeholder="Enter current market value"
                    value={carValue}
                    onChange={(e) => setCarValue(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carAge">Car Age (Years)</Label>
                  <Input
                    id="carAge"
                    type="number"
                    placeholder="How old is your car?"
                    value={carAge}
                    onChange={(e) => setCarAge(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location Type</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urban">Urban (City)</SelectItem>
                      <SelectItem value="suburban">Suburban</SelectItem>
                      <SelectItem value="rural">Rural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Driver Profile</CardTitle>
                <CardDescription>Your driving information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="driverAge">Driver Age</Label>
                  <Input
                    id="driverAge"
                    type="number"
                    placeholder="Your age"
                    value={driverAge}
                    onChange={(e) => setDriverAge(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="drivingExperience">Driving Experience (Years)</Label>
                  <Input
                    id="drivingExperience"
                    type="number"
                    placeholder="Years of driving experience"
                    value={drivingExperience}
                    onChange={(e) => setDrivingExperience(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previousClaims">Previous Claims (Last 5 Years)</Label>
                  <Select value={previousClaims} onValueChange={setPreviousClaims}>
                    <SelectTrigger>
                      <SelectValue placeholder="Number of claims" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0 Claims</SelectItem>
                      <SelectItem value="1">1 Claim</SelectItem>
                      <SelectItem value="2">2 Claims</SelectItem>
                      <SelectItem value="3">3+ Claims</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Coverage Type</CardTitle>
                <CardDescription>Choose your insurance coverage level</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={coverageType} onValueChange={setCoverageType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select coverage type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Coverage</SelectItem>
                    <SelectItem value="standard">Standard Coverage</SelectItem>
                    <SelectItem value="comprehensive">Comprehensive Coverage</SelectItem>
                    <SelectItem value="premium">Premium Coverage</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Button onClick={calculatePremium} className="w-full" size="lg">
              Calculate Premium
            </Button>
          </div>

          {/* Results */}
          {result && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Insurance Premium Estimate</CardTitle>
                  <CardDescription>Your estimated insurance costs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-secondary" />
                        <span className="font-medium">Monthly Premium</span>
                      </div>
                      <span className="text-2xl font-bold text-secondary">{formatCurrency(result.monthlyPremium)}</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <span className="font-medium">Annual Premium</span>
                      </div>
                      <span className="text-xl font-semibold text-primary">{formatCurrency(result.annualPremium)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Coverage Breakdown</CardTitle>
                  <CardDescription>How your premium is allocated</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Liability Coverage</span>
                      <span className="font-medium">{formatCurrency(result.coverageDetails.liability)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Collision Coverage</span>
                      <span className="font-medium">{formatCurrency(result.coverageDetails.collision)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Comprehensive Coverage</span>
                      <span className="font-medium">{formatCurrency(result.coverageDetails.comprehensive)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Personal Injury Protection</span>
                      <span className="font-medium">{formatCurrency(result.coverageDetails.personalInjury)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium Factors</CardTitle>
                  <CardDescription>What affects your insurance rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Base Premium</span>
                      <span>{formatCurrency(result.factors.basePremium)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Vehicle Age Factor</span>
                      <span className={result.factors.ageAdjustment > 1 ? "text-red-600" : "text-green-600"}>
                        {result.factors.ageAdjustment > 1 ? "+" : ""}
                        {((result.factors.ageAdjustment - 1) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Location Factor</span>
                      <span className={result.factors.locationAdjustment > 1 ? "text-red-600" : "text-green-600"}>
                        {result.factors.locationAdjustment > 1 ? "+" : ""}
                        {((result.factors.locationAdjustment - 1) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Driver Profile Factor</span>
                      <span className={result.factors.driverAdjustment > 1 ? "text-red-600" : "text-green-600"}>
                        {result.factors.driverAdjustment > 1 ? "+" : ""}
                        {((result.factors.driverAdjustment - 1) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Coverage Level Factor</span>
                      <span className={result.factors.coverageMultiplier > 1 ? "text-red-600" : "text-green-600"}>
                        {result.factors.coverageMultiplier > 1 ? "+" : ""}
                        {((result.factors.coverageMultiplier - 1) * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Tips to Lower Your Premium</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Maintain a Clean Driving Record</h4>
                    <p className="text-sm text-muted-foreground">
                      Avoid accidents and traffic violations to keep rates low
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Choose Higher Deductibles</h4>
                    <p className="text-sm text-muted-foreground">
                      Higher deductibles can significantly lower your premium
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Bundle Policies</h4>
                    <p className="text-sm text-muted-foreground">Combine auto and home insurance for discounts</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Consider Your Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Urban areas typically have higher rates due to traffic and theft
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Vehicle Safety Features</h4>
                    <p className="text-sm text-muted-foreground">
                      Cars with advanced safety features often qualify for discounts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Shop Around Annually</h4>
                    <p className="text-sm text-muted-foreground">Compare quotes from multiple insurers each year</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mt-8 border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-orange-800 mb-1">Important Disclaimer</p>
                <p className="text-orange-700">
                  This calculator provides estimates only and should not be considered as an official quote. Actual
                  premiums may vary significantly based on additional factors not included in this calculation. Please
                  contact licensed insurance agents for accurate quotes and coverage details.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
