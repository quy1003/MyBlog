import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, BadgeCheck, Trophy } from 'lucide-react'

export default function Rewards() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Certificates and Achievements
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <BadgeCheck className="mr-2" /> Certificates
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>TOEIC Certification 2 skills: 705 pts (2021)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Trophy className="mr-2" /> Rewards and Achievements
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Top 10 in TOEIC Trial Test organized by HUB University (2022)
            </li>
            <li>Achieve 6 Academic Incentive Scholarships (2021 - present)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
