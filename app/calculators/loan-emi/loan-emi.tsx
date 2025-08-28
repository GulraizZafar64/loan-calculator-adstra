"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, ArrowLeft, TrendingUp, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"

interface EMIResult {
  emi: number
  totalInterest: number
  totalAmount: number
  monthlyBreakdown: Array<{
    month: number
    emi: number
    principal: number
    interest: number
    balance: number
  }>
}

export default function LoanEMICalculatorMain() {
  const [loanAmount, setLoanAmount] = useState<string>("")
  const [interestRate, setInterestRate] = useState<string>("")
  const [tenure, setTenure] = useState<string>("")
  const [tenureType, setTenureType] = useState<string>("years")
  const [result, setResult] = useState<EMIResult | null>(null)

  const calculateEMI = () => {
    const principal = Number.parseFloat(loanAmount)
    const annualRate = Number.parseFloat(interestRate)
    const tenureValue = Number.parseFloat(tenure)

    if (!principal || !annualRate || !tenureValue) {
      alert("Please fill in all fields with valid numbers")
      return
    }

    // Convert annual rate to monthly rate
    const monthlyRate = annualRate / 12 / 100

    // Convert tenure to months
    const tenureInMonths = tenureType === "years" ? tenureValue * 12 : tenureValue

    // EMI calculation: [P x R x (1+R)^N] / [(1+R)^N-1]
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
      (Math.pow(1 + monthlyRate, tenureInMonths) - 1)

    const totalAmount = emi * tenureInMonths
    const totalInterest = totalAmount - principal

    // Generate monthly breakdown
    const monthlyBreakdown = []
    let remainingBalance = principal

    for (let month = 1; month <= tenureInMonths; month++) {
      const interestPayment = remainingBalance * monthlyRate
      const principalPayment = emi - interestPayment
      remainingBalance -= principalPayment

      monthlyBreakdown.push({
        month,
        emi: emi,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, remainingBalance),
      })
    }

    setResult({
      emi,
      totalInterest,
      totalAmount,
      monthlyBreakdown,
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}


      <div className="container max-w-6xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Loan EMI Calculator</h1>
          <p className="text-muted-foreground text-lg">
            Calculate your monthly loan installments (EMI) with detailed breakdown and amortization schedule
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle>Loan Details</CardTitle>
              <CardDescription>Enter your loan information to calculate monthly EMI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  placeholder="Enter loan amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.01"
                  placeholder="Enter interest rate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tenure">Loan Tenure</Label>
                <div className="flex gap-2">
                  <Input
                    id="tenure"
                    type="number"
                    placeholder="Enter tenure"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="flex-1"
                  />
                  <Select value={tenureType} onValueChange={setTenureType}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="years">Years</SelectItem>
                      <SelectItem value="months">Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={calculateEMI} className="w-full" size="lg">
                Calculate EMI
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <Card>
              <CardHeader>
                <CardTitle>EMI Calculation Results</CardTitle>
                <CardDescription>Your loan payment breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span className="font-medium">Monthly EMI</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">{formatCurrency(result.emi)}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                      <span className="font-medium">Total Interest</span>
                    </div>
                    <span className="text-xl font-semibold text-secondary">{formatCurrency(result.totalInterest)}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">Total Amount</span>
                    </div>
                    <span className="text-xl font-semibold">{formatCurrency(result.totalAmount)}</span>
                  </div>
                </div>

                {/* Payment Breakdown Chart */}
                <div className="mt-6">
                  <h4 className="font-semibold mb-4">Payment Breakdown</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Principal Amount</span>
                      <span>{formatCurrency(Number.parseFloat(loanAmount))}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Interest</span>
                      <span>{formatCurrency(result.totalInterest)}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{
                          width: `${(Number.parseFloat(loanAmount) / result.totalAmount) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Principal: {((Number.parseFloat(loanAmount) / result.totalAmount) * 100).toFixed(1)}%</span>
                      <span>Interest: {((result.totalInterest / result.totalAmount) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Amortization Schedule */}
        {result && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Amortization Schedule</CardTitle>
              <CardDescription>Monthly payment breakdown for the first 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Month</th>
                      <th className="text-right p-2">EMI</th>
                      <th className="text-right p-2">Principal</th>
                      <th className="text-right p-2">Interest</th>
                      <th className="text-right p-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.monthlyBreakdown.slice(0, 12).map((month) => (
                      <tr key={month.month} className="border-b">
                        <td className="p-2">{month.month}</td>
                        <td className="text-right p-2">{formatCurrency(month.emi)}</td>
                        <td className="text-right p-2">{formatCurrency(month.principal)}</td>
                        <td className="text-right p-2">{formatCurrency(month.interest)}</td>
                        <td className="text-right p-2">{formatCurrency(month.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {result.monthlyBreakdown.length > 12 && (
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Showing first 12 months of {result.monthlyBreakdown.length} total payments
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Information Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How EMI is Calculated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <p>
                <strong>EMI (Equated Monthly Installment)</strong> is calculated using the formula:
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-center">EMI = [P × R × (1+R)^N] / [(1+R)^N-1]</div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <strong>P</strong> = Principal loan amount
                </div>
                <div>
                  <strong>R</strong> = Monthly interest rate (Annual rate ÷ 12 ÷ 100)
                </div>
                <div>
                  <strong>N</strong> = Number of monthly installments
                </div>
              </div>
              <p className="text-muted-foreground">
                This calculator provides accurate EMI calculations for personal loans, home loans, car loans, and other
                types of loans. The amortization schedule shows how your payments are split between principal and
                interest over time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
