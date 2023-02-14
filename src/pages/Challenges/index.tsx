import ChallengeCard, { ChallengeCardProps } from "./components/ChallengeCard";
import { challenges } from "./listOfChallenges.js";
import { ChallengesContainer } from "./styled";


export default function Challenges() {
  return (
    <ChallengesContainer>
      {
        challenges.map((challenge: ChallengeCardProps) => {
          return (
            <ChallengeCard
              key={challenge.challengeLink}
              challengeLink={challenge.challengeLink}
              imgPath={challenge.imgPath}
              title={challenge.title}
              description={challenge.description}
            />
          )
        })
      }
    </ChallengesContainer>
  )
}