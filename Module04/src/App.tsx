import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from "react-router";
import Home from "./pages/Home";
import { IonApp, IonRouterOutlet,} from "@ionic/react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";


/* User Red */
import BmiCalc from "./pages/BmiCalc";
import BmrCalc from "./pages/BmrCalc";

const App: React.FC = () => {
  return(
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home}/>
          <Redirect exact from="/" to="/home"/>
          <Route exact path="/bmi" component={BmiCalc}/>
          <Route exact path="/bmr" component={BmrCalc}/>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
 };

export default App