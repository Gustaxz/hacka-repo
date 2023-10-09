import {
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react"
import { useRef, useState } from "react"

import MedV from "../assets/MedV.svg"
import { toast } from "react-toastify"
import { CircleNotch } from "phosphor-react"

interface LoginInfos {
	email: string
	password: string
}

function Login() {
	const [show, setShow] = useState(false)
	const [loginInfos, setLoginInfos] = useState<LoginInfos | null>(null)
	const [loading, setLoading] = useState(false)
	const formRef = useRef<HTMLFormElement>(null)
	const handleClick = () => setShow(!show)

	async function submitForm() {
		setLoading(true)
		try {
			if (formRef.current) {
				const formData = new FormData(formRef.current)
				const email = formData.get("email") as string
				const password = formData.get("password") as string

				setLoginInfos({
					email,
					password,
				})
			}

			// await api.post(
			// 	"/login",
			// 	{
			// 		email: loginInfos?.email,
			// 		password: loginInfos?.password,
			// 	},
			// 	{
			// 		timeout: 5000,
			// 	}
			// )

			localStorage.setItem("loginInfos", JSON.stringify(loginInfos))
			toast("Login efetuado com sucesso!", {
				type: "success",
				position: "top-left",
				autoClose: 1000,
			})
			setTimeout(() => {
				window.location.href = "/patient"
			}, 1000)
		} catch (err: any) {
			toast(`Erro ao efetuar login! Erro: ${err.message}`, {
				type: "error",
				position: "top-left",
				autoClose: 4000,
			})
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="md:grid flex items-center justify-center grid-cols-2 h-screen">
			<Heading
				size="2xl"
				className="absolute left-6 top-4 text-[#7161ef] italic"
				style={{
					fontFamily: "Gochi Hand",
				}}
			>
				UniSaúde
			</Heading>
			<div className="md:flex hidden justify-center items-center">
				<img src={MedV} alt="MedV" className="w-2/3" />
			</div>
			<div className="flex items-center justify-center flex-1">
				<form className="flex flex-col gap-6 w-2/3" ref={formRef}>
					<Heading size="lg" textAlign="center">
						Faça seu login!
					</Heading>
					<FormControl>
						<Input
							name="email"
							type="email"
							placeholder="email@email.com"
							focusBorderColor="#7161ef"
						></Input>
					</FormControl>
					<InputGroup size="md">
						<Input
							name="password"
							pr="4.5rem"
							type={show ? "text" : "password"}
							placeholder="Coloque sua senha"
							focusBorderColor="#7161ef"
						/>
						<InputRightElement width="4.5rem" marginRight="2">
							<Button h="1.75rem" size="sm" onClick={handleClick}>
								{show ? "Mostrar" : "Ocultar"}
							</Button>
						</InputRightElement>
					</InputGroup>
					<Button colorScheme="purple" onClick={submitForm}>
						{loading ? (
							<CircleNotch size={24} className="text-white animate-spin" />
						) : (
							"Entrar"
						)}
					</Button>
				</form>
			</div>
		</div>
	)
}

export default Login
