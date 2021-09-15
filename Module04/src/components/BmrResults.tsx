import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

type BMR = {
    sendetary: number,
    exercise1: number,
    exercise2: number,
    dailyExrecise: number,
    intenseExercise: number
}

const BmrResults : React.FC<{ onCalculatedBMI: number; bmrValue: BMR }> = (props) => {
    return(
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent className="ion-text-center">
                    <h3>BMR = {props.onCalculatedBMI} calories/day</h3>
                    <h3>Daily calories need base on activity level</h3>
                    <IonRow class="ion-justify-content-between">
                        <IonCol>
                            <p>Activity Level</p>
                        </IonCol>
                        <IonCol>
                            <p>Calories</p>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-justify-content-between">
                        <IonCol>
                            <p>Sendentary: little or no exercise</p>
                        </IonCol>
                        <IonCol>
                            <p>{props.bmrValue.sendetary}</p>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-justify-content-between">
                        <IonCol>
                            <p>Exercise 1-3 times/week</p>
                        </IonCol>
                        <IonCol>
                            <p>{props.bmrValue.exercise1}</p>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-justify-content-between">
                        <IonCol>
                            <p>Exercise 4-5 times/week</p>
                        </IonCol>
                        <IonCol>
                            <p>{props.bmrValue.exercise2}</p>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-justify-content-between">
                        <IonCol>
                            <p>Daily Exercise</p>
                        </IonCol>
                        <IonCol>
                            <p>{props.bmrValue.dailyExrecise}</p>
                        </IonCol>
                    </IonRow>
                    <IonRow class="ion-justify-content-between">
                        <IonCol>
                            <p>Intense Exercise</p>
                        </IonCol>
                        <IonCol>
                            <p>{props.bmrValue.intenseExercise}</p>
                        </IonCol>
                    </IonRow>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}

export default BmrResults;