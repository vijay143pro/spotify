import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./global.css";

let persistor = persistStore(store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<App />
					<ToastContainer
						position="bottom-center"
						autoClose={2000}
						hideProgressBar={true}
						closeButton={false}
						theme="colored"
						icon={false}
					/>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);



// REACT_APP_FIREBASE_APIKEY="AIzaSyDSEmBfHU0m6Nh8muqh-A6rqS30dhs0rPM"
// REACT_APP_FIREBASE_AUTH_DOMAIN="musicapp-dc120.firebaseapp.com"
// REACT_APP_FIREBASE_PROJECT_ID="musicapp-dc120"
// REACT_APP_FIREBASE_STORAGE_BUCKET="musicapp-dc120.appspot.com"
// REACT_APP_FIREBASE_MESSENG_ID="929767924753"
// REACT_APP_FIREBASE_APP_ID="1:929767924753:web:38cbb10f9d0e35ecebbdb0"