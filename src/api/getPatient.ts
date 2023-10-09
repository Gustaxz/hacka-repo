const patients = [
	{
		nome: "Gustavo",
		senha: "123456",
		email: "gustavo@gmail.com",
		idade: "20",
		cpf: "12345678910",
		telefone: "123456789",
		cidade: "São Paulo",
		estado: "SP",
		cep: "12345678",
	},
	{
		nome: "João",
		senha: "123456",
		email: "joao@gmail.com",
		idade: "19",
		cpf: "1267868689",
		telefone: "123456789",
		cidade: "Rio de Janeiro",
		estado: "RJ",
		cep: "12345678",
	},
]

export async function getPatientByName(name: string): Promise<any> {
	const patientArray: any[] = []
	const patient = patients.filter((p: any) => p.nome === name)[0]

	if (!patient) {
		return patientArray
	}

	console.log(patient)

	console.log(Object.keys(patient))
	Object.keys(patient).forEach((key) => {
		if (key !== "senha" && key !== "endereco" && key !== "id") {
			patientArray.push({
				type: key[0].toUpperCase() + key.slice(1),
				value: patient[key as keyof typeof patient],
			})
		}
	})

	return patientArray
}
