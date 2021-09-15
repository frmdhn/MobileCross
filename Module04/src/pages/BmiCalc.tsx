
  import { useRef, useState } from "react";
  import BmiControls from "../components/BmiControls";
  import BmiResults from "../components/BmiResults";
  import InputControl from "../components/InputControl";

  import "@ionic/react/css/core.css";

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
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
 
  import "@ionic/react/css/normalize.css";
  import "@ionic/react/css/structure.css";
  import "@ionic/react/css/typography.css";
  
  import "@ionic/react/css/padding.css";
  import "@ionic/react/css/float-elements.css";
  import "@ionic/react/css/text-alignment.css";
  import "@ionic/react/css/text-transformation.css";
  import "@ionic/react/css/flex-utils.css";
  import "@ionic/react/css/display.css";
  
  
  const BmiCalc: React.FC = () => {
    const [calculatedBMI, setCalculatedBMI] = useState<number>();
    const [BMIType, setBMIType] = useState<string>();
    const [error, setError] = useState<string>();
    const [calUnits, setCalUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
  
    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);
  
    const calculateBMI = () => {
      const enterHeight = heightInputRef.current!.value;
      const enterWeight = weightInputRef.current!.value;
      let typeOfBMI: string = "";
  
      if (!enterHeight || !enterWeight || +enterHeight <= 0 || +enterWeight <= 0) {
        setError('Please enter a number (Positive Only)');
        return;
      }
  
      const feet = calUnits === 'ftlbs' ? 0.0328 : 1;
      const lbs = calUnits === 'ftlbs' ? 2.2 : 1;
  
      const realWeight = +enterWeight / lbs;
      const realHeight = +enterHeight / feet;
  
      console.log(realWeight);
      console.log(realHeight);
  
      const bmi =
        realWeight / ((realHeight / 100) * (realHeight / 100));
  
      if (bmi < 18.5) {
        typeOfBMI = "Kurus";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        typeOfBMI = "Normal";
      } else if (bmi >= 25 && bmi <= 29.9) {
        typeOfBMI = "Gemuk";
      } else if (bmi >= 30) {
        typeOfBMI = "Obesitas";
      }
      setCalculatedBMI(bmi);
      setBMIType(typeOfBMI);
      console.log(bmi);
    };
  
    const resetInputs = () => {
      heightInputRef.current!.value = "";
      weightInputRef.current!.value = "";
    };
  
    const selectedCalsUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') =>{
      setCalUnits(selectedValue);
    }
  
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
              <IonTitle>BMI Calculator</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <InputControl selectedValue={calUnits} onSelectValue={selectedCalsUnitHandler} />
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
              <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
              {calculatedBMI && BMIType && (
                <BmiResults onCalculatedBMI={calculatedBMI} onCategoryResultBMI={BMIType} />
              )}
            </IonGrid>
          </IonContent>
        </IonPage>
      </>
    );
  };
  
  export default BmiCalc;
