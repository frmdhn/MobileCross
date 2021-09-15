import { IonButton, IonCol, IonRow, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BmrControls : React.FC<{onCalculate: () => void; onReset: () => void}> = (props) => {
    return(
        <IonRow>
            <IonCol className="ion-text-center">
                <IonButton onClick={props.onCalculate} className="text-center">
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Calculate
                </IonButton>
            </IonCol>
            <IonCol onClick={props.onReset} className="ion-text-center">
                <IonButton>
                <IonIcon slot="start" icon={refreshOutline}></IonIcon>
                Reset
                </IonButton>
            </IonCol>
        </IonRow>
    )
}

export default BmrControls;
