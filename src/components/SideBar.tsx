import { Heading } from "@chakra-ui/react"
import { QrCode, User } from "phosphor-react"
import { Link } from "react-router-dom"
import { useWindowSize } from "@uidotdev/usehooks"

function SideBar() {
	const size = useWindowSize()

	return (
		<div className="flex flex-col gap-16 h-screen py-16 px-2 bg-[#957fef] items-center">
			<Link to="/" className="md:flex hidden">
				<Heading
					size="xl"
					className="text-white italic text-left px-10"
					style={{
						fontFamily: "Gochi Hand",
					}}
				>
					UniSaúde
				</Heading>
			</Link>
			<div className="flex flex-col gap-6 items-start px-10">
				<Link to="/qr-code" className="text-white flex gap-2 items-center">
					<QrCode size={size.width ? (size.width < 720 ? 36 : 24) : 24} weight="fill" />
					<span className="md:flex hidden">QR Code</span>
				</Link>
				<Link to="/patient" className="text-white flex gap-2 items-center">
					<User size={size.width ? (size.width < 720 ? 36 : 24) : 24} weight="fill" />
					<span className="md:flex hidden">Lista Pacientes</span>
				</Link>
			</div>
		</div>
	)
}

export default SideBar
