import GeneratePDF from "../components/GeneratePDF"
import QRCode from "../components/QRCode"
import SideBar from "../components/SideBar"

let QR_CODE_VALUE = "3be46cf63a63f454fcd64c3dbcd8b88c9decf342"

function GenerateQRCode() {
	return (
		<div className="flex">
			<div className="w-[20vw]">
				<SideBar />
			</div>
			<div className="flex flex-col gap-12 items-center justify-center flex-1">
				{QR_CODE_VALUE === "" ? (
					<p>Não foi encontrado código para geração de QR Code</p>
				) : (
					<>
						<QRCode value={QR_CODE_VALUE} />
						<GeneratePDF value={QR_CODE_VALUE} />
					</>
				)}
			</div>
		</div>
	)
}

export default GenerateQRCode
