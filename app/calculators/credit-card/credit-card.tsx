"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, TrendingUp, DollarSign, Calendar, CreditCard } from "lucide-react"
import Link from "next/link"

interface CreditCardResult {
  monthlyPayment: number
  timeToPayOff: number
  totalInterest: number
  totalAmount: number
  minimumPaymentTime: number
  minimumPaymentInterest: number
  monthlyBreakdown: Array<{
    month: number
    payment: number
    principal: number
    interest: number
    balance: number
  }>
}

export default function CreditCardCalculatorMain() {
  const [currentBalance, setCurrentBalance] = useState<string>("")
  const [interestRate, setInterestRate] = useState<string>("")
  const [monthlyPayment, setMonthlyPayment] = useState<string>("")
  const [minimumPayment, setMinimumPayment] = useState<string>("")
  const [result, setResult] = useState<CreditCardResult | null>(null)

  const calculatePayoff = () => {
    const balance = Number.parseFloat(currentBalance)
    const annualRate = Number.parseFloat(interestRate)
    const payment = Number.parseFloat(monthlyPayment)
    const minPayment = Number.parseFloat(minimumPayment) || balance * 0.02 // Default 2% minimum

    if (!balance || !annualRate || !payment) {
      alert("Please fill in all required fields with valid numbers")
      return
    }

    const monthlyRate = annualRate / 12 / 100

    if (payment <= balance * monthlyRate) {
      alert("Monthly payment must be higher than the interest charge to pay off the debt")
      return
    }

    // Calculate payoff with user's payment
    let remainingBalance = balance
    let totalInterest = 0
    let month = 0
    const monthlyBreakdown = []

    while (remainingBalance > 0.01 && month < 600) {
      // Max 50 years
      month++
      const interestPayment = remainingBalance * monthlyRate
      const principalPayment = Math.min(payment - interestPayment, remainingBalance)

      totalInterest += interestPayment
      remainingBalance -= principalPayment

      monthlyBreakdown.push({
        month,
        payment: interestPayment + principalPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, remainingBalance),
      })
    }

    // Calculate minimum payment scenario
    let minBalance = balance
    let minTotalInterest = 0
    let minMonth = 0

    while (minBalance > 0.01 && minMonth < 600) {
      minMonth++
      const minInterestPayment = minBalance * monthlyRate
      const minPrincipalPayment = Math.min(minPayment - minInterestPayment, minBalance)

      if (minPrincipalPayment <= 0) break // Can't pay off with minimum payment

      minTotalInterest += minInterestPayment
      minBalance -= minPrincipalPayment
    }

    setResult({
      monthlyPayment: payment,
      timeToPayOff: month,
      totalInterest,
      totalAmount: balance + totalInterest,
      minimumPaymentTime: minMonth,
      minimumPaymentInterest: minTotalInterest,
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

  const formatMonths = (months: number) => {
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`
    }
    return `${months} month${months !== 1 ? "s" : ""}`
  }

  return (
    <div className="min-h-screen bg-background">


      <div className="container max-w-6xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Credit Card Payoff Calculator</h1>
          <p className="text-muted-foreground text-lg">
            Calculate how long it will take to pay off your credit card debt and how much interest you'll pay
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card>
            <CardHeader>
              <CardTitle>Credit Card Details</CardTitle>
              <CardDescription>Enter your credit card information to calculate payoff time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="currentBalance">Current Balance</Label>
                <Input
                  id="currentBalance"
                  type="number"
                  placeholder="Enter current balance"
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate">Annual Interest Rate (APR %)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.01"
                  placeholder="Enter APR (e.g., 18.99)"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyPayment">Monthly Payment</Label>
                <Input
                  id="monthlyPayment"
                  type="number"
                  placeholder="Enter monthly payment amount"
                  value={monthlyPayment}
                  onChange={(e) => setMonthlyPayment(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="minimumPayment">Minimum Payment (Optional)</Label>
                <Input
                  id="minimumPayment"
                  type="number"
                  placeholder="Enter minimum payment (defaults to 2% of balance)"
                  value={minimumPayment}
                  onChange={(e) => setMinimumPayment(e.target.value)}
                />
              </div>

              <Button onClick={calculatePayoff} className="w-full" size="lg">
                Calculate Payoff
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Payoff Calculation Results</CardTitle>
                <CardDescription>Your credit card payoff breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-medium">Time to Pay Off</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{formatMonths(result.timeToPayOff)}</span>
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
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">Total Amount Paid</span>
                    </div>
                    <span className="text-xl font-semibold">{formatCurrency(result.totalAmount)}</span>
                  </div>
                </div>

                {/* Comparison with Minimum Payment */}
                {result.minimumPaymentTime < 600 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-4">Comparison: Minimum Payment vs Your Payment</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Your Payment Plan:</span>
                        <span className="font-medium">
                          {formatMonths(result.timeToPayOff)} | {formatCurrency(result.totalInterest)} interest
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Minimum Payment Plan:</span>
                        <span className="font-medium">
                          {formatMonths(result.minimumPaymentTime)} | {formatCurrency(result.minimumPaymentInterest)}{" "}
                          interest
                        </span>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-sm font-medium text-green-800 dark:text-green-200">
                          You'll save: {formatCurrency(result.minimumPaymentInterest - result.totalInterest)} in
                          interest
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-300">
                          Pay off {result.minimumPaymentTime - result.timeToPayOff} months earlier
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Breakdown Chart */}
                <div className="mt-6">
                  <h4 className="font-semibold mb-4">Payment Breakdown</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Principal Amount</span>
                      <span>{formatCurrency(Number.parseFloat(currentBalance))}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Interest</span>
                      <span>{formatCurrency(result.totalInterest)}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{
                          width: `${(Number.parseFloat(currentBalance) / result.totalAmount) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        Principal: {((Number.parseFloat(currentBalance) / result.totalAmount) * 100).toFixed(1)}%
                      </span>
                      <span>Interest: {((result.totalInterest / result.totalAmount) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Payment Schedule */}
        {result && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Payment Schedule</CardTitle>
              <CardDescription>Monthly payment breakdown for the first 12 months</CardDescription>
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
                    </tr>
                  </thead>
                  <tbody>
                    {result.monthlyBreakdown.slice(0, 12).map((month) => (
                      <tr key={month.month} className="border-b">
                        <td className="p-2">{month.month}</td>
                        <td className="text-right p-2">{formatCurrency(month.payment)}</td>
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
            <CardTitle>Credit Card Payoff Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Strategies to Pay Off Faster:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Pay more than the minimum payment</li>
                    <li>• Make bi-weekly payments instead of monthly</li>
                    <li>• Use windfalls (tax refunds, bonuses) for payments</li>
                    <li>• Consider balance transfer to lower APR card</li>
                    <li>• Stop using the card for new purchases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Understanding Credit Card Interest:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Interest is calculated daily on your balance</li>
                    <li>• Minimum payments mostly go toward interest</li>
                    <li>• Higher payments reduce principal faster</li>
                    <li>• APR is the annual percentage rate</li>
                    <li>• Pay before due date to avoid late fees</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground">
                This calculator helps you understand the true cost of credit card debt and motivates you to pay more
                than the minimum. Even small increases in your monthly payment can save significant money in interest
                and reduce payoff time dramatically.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
