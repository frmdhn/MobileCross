import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h2>00000032872 - Muhammad Faiz Ramdhani</h2>
        <IonButton expand="block" routerLink="/bmi">BMI Calculator</IonButton>
        <IonButton expand="block" routerLink="/bmr">BMR Calculator</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;