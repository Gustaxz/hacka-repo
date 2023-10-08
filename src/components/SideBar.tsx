import { Heading } from "@chakra-ui/react"
import { QrCode, User } from "phosphor-react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

function SideBar() {
	return (
		<div className="flex flex-col gap-16 h-screen py-16 px-2 bg-[#957fef] text-center">
			<Link to="/">
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
				<div className="flex gap-2 items-center">
					<QrCode size={24} className="text-white" weight="fill" />
					<Link to="/qr-code" className="text-white">
						QR Code
					</Link>
				</div>
				<div className="flex gap-2 items-center">
					<User size={24} className="text-white" weight="fill" />
					<Link to="/patient" className="text-white">
						Lista Pacientes
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SideBar
