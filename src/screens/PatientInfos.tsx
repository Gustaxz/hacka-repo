import { CircleNotch, MagnifyingGlass } from "phosphor-react"
import SideBar from "../components/SideBar"
import { useState } from "react"
import PatientInfoField from "../components/PatientInfoField"
import { Button } from "@chakra-ui/react"
import { toast } from "react-toastify"
import { extractPatientInfosFromArray } from "../utils/extractPatientInfosFromArray"
import { getPatientByName } from "../api/getPatient"

interface PatientInfo {
	type: string
	value: string
}

function PatientInfos() {
	const [loading, setLoading] = useState(false)
	const [patientName, setPatientName] = useState("")
	const [patientInfos, setPatientInfos] = useState<PatientInfo[]>([])

	async function submitPatientName() {
		setLoading(true)
		const patient = await getPatientByName(patientName)
		setPatientInfos(patient)
		setLoading(false)
	}

	async function copyAllToClipboard() {
		const infos = extractPatientInfosFromArray(patientInfos)
		await navigator.clipboard.writeText(infos)

		toast("Copiado para a área de transferência!", {
			type: "success",
			position: "top-left",
			autoClose: 300,
		})
	}

	return (
		<div className="flex">
			<div className="w-[20vw]">
				<SideBar />
			</div>
			<div className="flex flex-1 px-12 py-6 flex-col gap-24">
				<div className="flex gap-6 items-center">
					<input
						className="px-2 py-1 border-2 border-slate-400 rounded-md w-1/2 focus:border-[#7161ef] outline-none"
						onChange={(ev) => {
							setPatientName(ev.target.value)
						}}
						placeholder="João Gabriel Pinho da Cruz"
					/>
					{loading ? (
						<CircleNotch size={32} className="text-[#7161ef] animate-spin" />
					) : (
						<MagnifyingGlass
							size={32}
							className="cursor-pointer text-[#7161ef]"
							weight="fill"
							onClick={submitPatientName}
						/>
					)}
				</div>
				<div className="flex flex-col gap-6">
					<div
						className={`flex flex-col ${
							patientInfos.length === 0 ? "justify-center" : ""
						} h-[60vh] bg-gray-100 rounded-md px-8 py-8 w-[60vw] overflow-y-scroll`}
					>
						{patientInfos.length === 0 ? (
							<p className="text-center">Os dados do paciente aparecerão aqui!</p>
						) : (
							<div className="flex flex-col gap-3">
								{patientInfos.map((patientInfo) => (
									<PatientInfoField
										type={patientInfo.type}
										value={patientInfo.value}
									/>
								))}
							</div>
						)}
					</div>
					<Button
						style={{
							display: patientInfos.length === 0 ? "none" : "block",
						}}
						colorScheme="purple"
						className="w-min"
						onClick={copyAllToClipboard}
					>
						Copiar tudo
					</Button>
				</div>
			</div>
		</div>
	)
}

export default PatientInfos
