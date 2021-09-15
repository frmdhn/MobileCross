import { IonLabel, IonCard, IonCardContent, IonSegment, IonSegmentButton } from "@ionic/react";

const BmiResults: React.FC < { onCalculatedBMI: number ; onCategoryResultBMI: string | undefined} > = (props) => {
 
    return (
  <IonCard>
    <IonCardContent className="ion-text-center">
      <h2>{props.onCalculatedBMI}</h2>
      <h3>{props.onCategoryResultBMI}</h3>
    </IonCardContent>
  </IonCard>

    );
};

export default BmiResults;

