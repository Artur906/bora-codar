import { Card, CardDescrition, CardImg } from "./styled";

export interface ChallengeCardProps {
  imgPath: string,
  title: string,
  description: string,
  challengeLink: string,
}

export default function ChallengeCard({ imgPath, title, description, challengeLink }: ChallengeCardProps) {
  return (
    <Card to={challengeLink}>
      <CardImg src={imgPath} />
      <CardDescrition>
        <h1>{title}</h1>
        <p>{description}</p>
      </CardDescrition>
    </Card>
  )
}