interface PatientInfos {
	type: string
	value: string
}

export function extractPatientInfosFromArray(patientInfos: PatientInfos[]): string {
	let infos = ""

	patientInfos.forEach((info) => {
		infos += `${info.value}\n`
	})

	return infos
}
