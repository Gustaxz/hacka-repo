import axios from "axios"

export async function getPatientByName(name: string): Promise<any> {
	const patientArray: any[] = []
	const patientResponse = await axios.get(
		`https://unisaude-36591e8b57bc.herokuapp.com/api/pacientes?nome=${name}`
	)
	const patient = patientResponse.data["content"].filter((p: any) => p.nome === name)[0]

	if (!patient) {
		return patientArray
	}

	console.log(patient)

	console.log(Object.keys(patient))
	Object.keys(patient).forEach((key) => {
		if (key !== "senha" && key !== "endereco" && key !== "id") {
			patientArray.push({
				type: key[0].toUpperCase() + key.slice(1),
				value: patient[key],
			})
		}
	})

	return patientArray
}
