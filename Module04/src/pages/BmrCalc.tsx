import { useRef, useState } from "react";
import BmrResults from "../components/BmrResults";
import BmrControls from "../components/BmrControls";
import InputControl from "../components/InputControl";
import {
    IonAlert,
    IonBackButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonRadio,
    IonRadioGroup,
    IonRow,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";

type BMR = {
    sendetary: number,
    exercise1: number,
    exercise2: number,
    dailyExrecise: number,
    intenseExercise: number
}

const BmrCalc: React.FC = () => {
    const [calculatedBMR, setCalculatedBMR] = useState<number>();
    const [BMRValues, setBMRValues] = useState<BMR>();
    const [error, setError] = useState<string>();
    const [calUnits, setCalUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');

    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);
    const ageInputRef = useRef<HTMLIonInputElement>(null);
    const [gender, setGender] = useState<string>('male');

    const calculateBMR = () => {
        const enterHeight = heightInputRef.current!.value;
        const enterWeight= weightInputRef.current!.value;
        const enterAge = ageInputRef.current!.value;
        let bmr: number = 0;
    
        if (!enterHeight || !enterWeight || !enterAge || +enterHeight <= 0 || +enterWeight <= 0 || +enterAge <= 0) {
          setError('Please enter a number (Positive Only)');
          return;
        }
    
        const feet = calUnits === 'ftlbs' ? 0.0328 : 1;
        const lbs = calUnits === 'ftlbs' ? 2.2 : 1;
    
        const realWeight = +enterWeight / lbs;
        const realHeight = +enterHeight / feet;
    
        console.log(realWeight);
        console.log(realHeight);
    
       if(gender === 'male'){
            bmr = 66 + (13.7 * +enterWeight) + (5 * +enterHeight) - (6.8 * +enterAge);
       }else{
            bmr = 655 + (9.6 * +enterWeight) + (1.8 * +enterHeight) - (4.7 * +enterAge);
       }

       const bmrValueObject = {
           sendetary : bmr * 1.2,
           exercise1 : bmr * 1.375,
           exercise2 : bmr * 1.55,
           dailyExrecise : bmr * 1.725,
           intenseExercise : bmr * 1.9,
       }
    
        setCalculatedBMR(bmr);
        setBMRValues(bmrValueObject);
    };
    

    const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') =>{
        setCalUnits(selectedValue);
    }
    
    const resetInputs = () => {
        heightInputRef.current!.value = "";
        weightInputRef.current!.value = "";
        if(ageInputRef.current!.value){
            ageInputRef.current!.value = "";
        }
    };
    
    
    return (
        <>
          <IonAlert
            isOpen={!!error}
            message={error}
            buttons={[
              {
                text: 'Okay', 
                handler: setError
              }
            ]}
          />
          <IonPage>
            <IonHeader>
              <IonToolbar>
                  <IonButtons slot="start">
                      <IonBackButton defaultHref="/home" />
                  </IonButtons>
                <IonTitle>BMR Calculator</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <InputControl selectedValue={calUnits} onSelectValue={selectCalcUnitHandler} />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Age</IonLabel>
                      <IonInput ref={ageInputRef}></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                  <IonList>
                        <IonRadioGroup value={gender} onIonChange={e => setGender(e.detail.value)}>
                            <IonListHeader>
                                <IonLabel>Gender</IonLabel>
                            </IonListHeader>

                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <IonItem>
                                            <IonLabel>Male</IonLabel>
                                            <IonRadio slot="start" value="male" />
                                        </IonItem>
                                    </IonCol>
                                    <IonCol>
                                        <IonItem>
                                            <IonLabel>Female</IonLabel>
                                            <IonRadio slot="start" value="female" />
                                        </IonItem>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonRadioGroup>
                    </IonList>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="stacked">Tinggi Badan ({ calUnits === 'cmkg' ? 'cm' : 'ft' })</IonLabel>
                      <IonInput ref={heightInputRef}></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="stacked">Berat Badan ({ calUnits === 'cmkg' ? 'kg' : 'lbs' })</IonLabel>
                      <IonInput ref={weightInputRef}></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <BmrControls onCalculate={calculateBMR} onReset={resetInputs} />
                {calculatedBMR && BMRValues && (
                  <BmrResults onCalculatedBMI={calculatedBMR} bmrValue={BMRValues} />
                )} 
              </IonGrid>
            </IonContent>
          </IonPage>
        </>
    );
}

export default BmrCalc;