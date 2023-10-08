import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./screens/login.tsx"
import { ChakraProvider } from "@chakra-ui/react"
import GenerateQRCode from "./screens/GenerateQRCode.tsx"
import PatientInfos from "./screens/PatientInfos.tsx"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/qr-code",
		element: <GenerateQRCode />,
	},
	{
		path: "/patient",
		element: <PatientInfos />,
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider>
			<ToastContainer />
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
)
