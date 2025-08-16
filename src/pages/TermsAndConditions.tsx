import { GameButton } from "@/components/ui/game-button"
import { Link } from "react-router-dom"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen gradient-game-bg p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">📋 Terms & Conditions</h1>
          <p className="text-muted-foreground">Bunchit Catch Game Rules & Policies</p>
        </div>

        {/* Terms Card */}
        <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
          <div className="space-y-6">
            {/* Term 1 */}
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Daily Discount</h3>
                <p className="text-sm text-muted-foreground">
                  Every player gets a ₹10 discount after playing their first game, valid only on the day of play. 
                  You can claim it at the store.
                </p>
              </div>
            </div>

            {/* Term 2 */}
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Multiple Plays</h3>
                <p className="text-sm text-muted-foreground">
                  You can play the game as many times as you want, but only the leader of the leaderboard 
                  will get the ₹500 Bunchit coupon.
                </p>
              </div>
            </div>

            {/* Term 3 */}
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Coupon Validity</h3>
                <p className="text-sm text-muted-foreground">
                  The Bunchit coupon is valid for 24 hours only and cannot be reused for the next week.
                </p>
              </div>
            </div>

            {/* Term 4 */}
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Order Verification</h3>
                <p className="text-sm text-muted-foreground">
                  You have to order from the same number as your registered play number to avail the discount.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prize Info */}
        <div className="gradient-accent rounded-xl p-6 text-center shadow-special mb-6">
          <h3 className="text-lg font-bold text-accent-foreground mb-2">
            🎁 Win Bunchit Coupon of ₹500!
          </h3>
          <p className="text-sm text-accent-foreground/80">
            Top the leaderboard by 3 PM to claim your prize!
          </p>
        </div>

        {/* Back Button */}
        <Link to="/">
          <GameButton variant="outline" size="lg" className="w-full">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Game
          </GameButton>
        </Link>
      </div>
    </div>
  )
}