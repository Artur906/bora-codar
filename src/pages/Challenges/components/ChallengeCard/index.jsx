import { Card, CardDescrition, CardImg } from "./styled";

export default function ChallengeCard({ imgPath, title, description, challengeLink }) {
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