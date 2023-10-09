import { CopySimple } from "phosphor-react"
import { toast } from "react-toastify"

interface PatientInfoFieldProps {
	type: string
	value: string
}

function PatientInfoField({ type, value }: PatientInfoFieldProps) {
	async function copyToClipboard() {
		await navigator.clipboard.writeText(value)
		toast("Copiado para a área de transferência!", {
			type: "success",
			position: "top-left",
			autoClose: 300,
		})
	}

	return (
		<span className="flex gap-3 items-center bg-[#b79ced] text-white justify-between rounded-sm w-[45rem]">
			<div className="flex gap-3 items-center">
				<span className="py-2 px-2 w-60 bg-[#957fef] rounded-sm">{type}</span>
				<span className="py-2 line-clamp-1 w-60">{value}</span>
			</div>
			<span title="Copiar!" onClick={copyToClipboard}>
				<CopySimple size={32} weight="fill" className="cursor-pointer mr-4" />
			</span>
		</span>
	)
}

export default PatientInfoField
