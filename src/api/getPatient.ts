const USERS = [
	{
		email: "joao@gmail.com",
		endereco: {
			bairro: "Barroso",
			cep: "12345-678",
			cidade: "Teresópolis",
			complemento: "Casa",
			estado: "Rio de Janeiro",
			numero: "349",
			pais: "Brasil",
		},
		genero: "Masculino",
		idade: 20,
		identificacao: "148.123.456-78",
		nome: "João Gabriel Pinho Da Cruz",
		numeroEmergencia: "(21) 952345-1236",
		senha: "senha123",
		telefone: "(21) 2385-1626",
	},
]

export function getPatientByName(name: string): any {
	const patientArray: any[] = []
	const patient = USERS.find((user) => user.nome === name) as any

	if (!patient) {
		return patientArray
	}

	console.log(Object.keys(patient))
	Object.keys(patient).forEach((key) => {
		if (key !== "senha") {
			if (key === "endereco") {
				Object.keys(patient[key]).forEach((addressKey) => {
					patientArray.push({
						type: addressKey[0].toUpperCase() + addressKey.slice(1),
						value: patient[key][addressKey],
					})
				})
			} else {
				patientArray.push({
					type: key[0].toUpperCase() + key.slice(1),
					value: patient[key],
				})
			}
		}
	})

	return patientArray
}
