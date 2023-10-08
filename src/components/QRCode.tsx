interface QRCodeProps {
	value: string
}

function QRCodeComponent({ value }: QRCodeProps) {
	return (
		<div>
			<img
				src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`}
				className="w-52 h-52"
			/>
		</div>
	)
}

export default QRCodeComponent
