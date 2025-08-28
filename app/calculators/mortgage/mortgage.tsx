"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, ArrowLeft, DollarSign, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

interface MortgageResult {
  monthlyPayment: number
  principalAndInterest: number
  propertyTaxes: number
  homeInsurance: number
  pmi: number
  totalMonthlyPayment: number
  totalInterest: number
  totalAmount: number
  loanAmount: number
  loanToValue: number
  amortizationSchedule: Array<{
    month: number
    payment: number
    principal: number
    interest: number
    balance: number
    cumulativeInterest: number
  }>
}

export default function MortgageCalculatorMain() {
  const [homePrice, setHomePrice] = useState<string>("")
  const [downPayment, setDownPayment] = useState<string>("")
  const [downPaymentType, setDownPaymentType] = useState<string>("amount")
  const [interestRate, setInterestRate] = useState<string>("")
  const [loanTerm, setLoanTerm] = useState<string>("")
  const [propertyTaxRate, setPropertyTaxRate] = useState<string>("")
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState<string>("")
  const [result, setResult] = useState<MortgageResult | null>(null)

  const calculateMortgage = () => {
    const price = Number.parseFloat(homePrice)
    const rate = Number.parseFloat(interestRate)
    const term = Number.parseFloat(loanTerm)

    if (!price || !rate || !term) {
      alert("Please fill in the required fields (Home Price, Interest Rate, Loan Term)")
      return
    }

    // Calculate down payment
    let downPaymentAmount = 0
    if (downPayment) {
      if (downPaymentType === "percentage") {
        downPaymentAmount = (price * Number.parseFloat(downPayment)) / 100
      } else {
        downPaymentAmount = Number.parseFloat(downPayment)
      }
    }

    const loanAmount = price - downPaymentAmount
    const monthlyRate = rate / 12 / 100
    const numberOfPayments = term * 12

    // Calculate monthly principal and interest
    const monthlyPI =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    // Calculate additional monthly costs
    const monthlyPropertyTax = propertyTaxRate ? (price * Number.parseFloat(propertyTaxRate)) / 100 / 12 : 0
    const monthlyInsurance = homeInsuranceAnnual ? Number.parseFloat(homeInsuranceAnnual) / 12 : 0

    // PMI calculation (typically 0.3% to 1.5% annually if down payment < 20%)
    const loanToValue = (loanAmount / price) * 100
    const monthlyPMI = loanToValue > 80 ? (loanAmount * 0.005) / 12 : 0 // 0.5% annually

    const totalMonthlyPayment = monthlyPI + monthlyPropertyTax + monthlyInsurance + monthlyPMI
    const totalAmount = monthlyPI * numberOfPayments
    const totalInterest = totalAmount - loanAmount

    // Generate amortization schedule
    const amortizationSchedule = []
    let remainingBalance = loanAmount
    let cumulativeInterest = 0

    for (let month = 1; month <= numberOfPayments; month++) {
      const interestPayment = remainingBalance * monthlyRate
      const principalPayment = monthlyPI - interestPayment
      remainingBalance -= principalPayment
      cumulativeInterest += interestPayment

      amortizationSchedule.push({
        month,
        payment: monthlyPI,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, remainingBalance),
        cumulativeInterest,
      })
    }

    setResult({
      monthlyPayment: monthlyPI,
      principalAndInterest: monthlyPI,
      propertyTaxes: monthlyPropertyTax,
      homeInsurance: monthlyInsurance,
      pmi: monthlyPMI,
      totalMonthlyPayment,
      totalInterest,
      totalAmount,
      loanAmount,
      loanToValue,
      amortizationSchedule,
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
          <h1 className="text-3xl font-bold mb-2">Mortgage Calculator</h1>
          <p className="text-muted-foreground text-lg">
            Calculate your monthly mortgage payments including principal, interest, taxes, and insurance (PITI)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
                <CardDescription>Enter your home loan information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="homePrice">Home Price</Label>
                  <Input
                    id="homePrice"
                    type="number"
                    placeholder="Enter home price"
                    value={homePrice}
                    onChange={(e) => setHomePrice(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="downPayment">Down Payment</Label>
                  <div className="flex gap-2">
                    <Input
                      id="downPayment"
                      type="number"
                      placeholder="Enter down payment"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                      className="flex-1"
                    />
                    <Select value={downPaymentType} onValueChange={setDownPaymentType}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="amount">Amount</SelectItem>
                        <SelectItem value="percentage">Percent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    placeholder="Enter annual interest rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 Years</SelectItem>
                      <SelectItem value="20">20 Years</SelectItem>
                      <SelectItem value="25">25 Years</SelectItem>
                      <SelectItem value="30">30 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Costs (Optional)</CardTitle>
                <CardDescription>Property taxes and insurance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="propertyTaxRate">Property Tax Rate (% annually)</Label>
                  <Input
                    id="propertyTaxRate"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 1.2 for 1.2%"
                    value={propertyTaxRate}
                    onChange={(e) => setPropertyTaxRate(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="homeInsurance">Home Insurance (Annual)</Label>
                  <Input
                    id="homeInsurance"
                    type="number"
                    placeholder="Annual insurance premium"
                    value={homeInsuranceAnnual}
                    onChange={(e) => setHomeInsuranceAnnual(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            <Button onClick={calculateMortgage} className="w-full" size="lg">
              Calculate Mortgage
            </Button>
          </div>

          {/* Results */}
          {result && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Payment Breakdown</CardTitle>
                  <CardDescription>Your complete monthly housing payment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="font-medium">Total Monthly Payment</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        {formatCurrency(result.totalMonthlyPayment)}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Principal & Interest</span>
                        <span className="font-medium">{formatCurrency(result.principalAndInterest)}</span>
                      </div>
                      {result.propertyTaxes > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Property Taxes</span>
                          <span className="font-medium">{formatCurrency(result.propertyTaxes)}</span>
                        </div>
                      )}
                      {result.homeInsurance > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Home Insurance</span>
                          <span className="font-medium">{formatCurrency(result.homeInsurance)}</span>
                        </div>
                      )}
                      {result.pmi > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm">PMI</span>
                          <span className="font-medium">{formatCurrency(result.pmi)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Loan Summary</CardTitle>
                  <CardDescription>Key loan information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-secondary" />
                        <span className="font-medium">Total Interest</span>
                      </div>
                      <span className="text-xl font-semibold text-secondary">
                        {formatCurrency(result.totalInterest)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <span className="font-medium">Total Amount Paid</span>
                      </div>
                      <span className="text-xl font-semibold">{formatCurrency(result.totalAmount)}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Loan Amount</span>
                        <span>{formatCurrency(result.loanAmount)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Loan-to-Value Ratio</span>
                        <span>{result.loanToValue.toFixed(1)}%</span>
                      </div>
                      {result.loanToValue > 80 && (
                        <div className="text-sm text-orange-600 bg-orange-50 p-2 rounded">
                          PMI required (LTV &gt; 80%)
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Distribution</CardTitle>
                  <CardDescription>How your payment is allocated</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Principal</span>
                        <span>{formatCurrency(result.loanAmount)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Interest</span>
                        <span>{formatCurrency(result.totalInterest)}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: `${(result.loanAmount / result.totalAmount) * 100}%`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Principal: {((result.loanAmount / result.totalAmount) * 100).toFixed(1)}%</span>
                        <span>Interest: {((result.totalInterest / result.totalAmount) * 100).toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Amortization Schedule */}
        {result && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Amortization Schedule</CardTitle>
              <CardDescription>Payment breakdown for the first 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Month</th>
                      <th className="text-right p-2">Payment</th>
                      <th className="text-right p-2">Principal</th>
                      <th className="text-right p-2">Interest</th>
                      <th className="text-right p-2">Balance</th>
                      <th className="text-right p-2">Total Interest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.amortizationSchedule.slice(0, 12).map((month) => (
                      <tr key={month.month} className="border-b">
                        <td className="p-2">{month.month}</td>
                        <td className="text-right p-2">{formatCurrency(month.payment)}</td>
                        <td className="text-right p-2">{formatCurrency(month.principal)}</td>
                        <td className="text-right p-2">{formatCurrency(month.interest)}</td>
                        <td className="text-right p-2">{formatCurrency(month.balance)}</td>
                        <td className="text-right p-2">{formatCurrency(month.cumulativeInterest)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {result.amortizationSchedule.length > 12 && (
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Showing first 12 months of {result.amortizationSchedule.length} total payments
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Information Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Understanding Your Mortgage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">Principal & Interest (P&I)</h4>
                  <p className="text-muted-foreground">
                    The portion of your payment that goes toward the loan amount and interest charges.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Property Taxes</h4>
                  <p className="text-muted-foreground">
                    Annual taxes on your property, typically collected monthly with your mortgage payment.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Home Insurance</h4>
                  <p className="text-muted-foreground">
                    Required insurance to protect your home and belongings, paid monthly through escrow.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-1">PMI (Private Mortgage Insurance)</h4>
                  <p className="text-muted-foreground">
                    Required when your down payment is less than 20% of the home's value.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Loan-to-Value (LTV)</h4>
                  <p className="text-muted-foreground">
                    The ratio of your loan amount to the home's value. Lower LTV typically means better rates.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Amortization</h4>
                  <p className="text-muted-foreground">
                    Early payments go mostly to interest, while later payments go mostly to principal.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
