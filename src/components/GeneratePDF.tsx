import { Button } from "@chakra-ui/react"
import jsPDF from "jspdf"

interface GeneratePDFProps {
	value: string
}

function GeneratePDF({ value }: GeneratePDFProps) {
	function generate() {
		const doc = new jsPDF()

		const htmlString = `
			<div style="display:flex; justify-content: center; text-align: center; flex-direction: column; gap: 3rem">
				<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}"/>
				<h1 style="text-align: center;">Baixe o aplicativo UniSaúde e escaneie esse QR Code !</h1>
			</div>
		`

		doc.html(htmlString, {
			callback: function (doc) {
				// Save the PDF
				doc.save("sample-document.pdf")
			},
			x: 50,
			y: 40,
			width: 120, //target width in the PDF document
			windowWidth: 180, //window width in CSS pixels
		})
	}

	return (
		<>
			<Button colorScheme="purple" onClick={generate}>
				Gerar e baixar PDF
			</Button>
		</>
	)
}

export default GeneratePDF
