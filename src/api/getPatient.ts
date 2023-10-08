const USERS = [
	{
		email: "usuario1@example.com",
		endereco: {
			bairro: "Bairro 1",
			cep: "12345-678",
			cidade: "Cidade 1",
			complemento: "Complemento 1",
			estado: "Estado 1",
			numero: "123",
			pais: "País 1",
		},
		genero: "Masculino",
		idade: 30,
		identificacao: "ID123",
		nome: "Usuário 1",
		numeroEmergencia: "999999999",
		senha: "senha123",
		telefone: "111-222-333",
	},
	{
		email: "usuario2@example.com",
		endereco: {
			bairro: "Bairro 2",
			cep: "98765-432",
			cidade: "Cidade 2",
			complemento: "Complemento 2",
			estado: "Estado 2",
			numero: "456",
			pais: "País 2",
		},
		genero: "Feminino",
		idade: 25,
		identificacao: "ID456",
		nome: "Usuário 2",
		numeroEmergencia: "888888888",
		senha: "senha456",
		telefone: "444-555-666",
	},
	{
		email: "usuario3@example.com",
		endereco: {
			bairro: "Bairro 3",
			cep: "55555-555",
			cidade: "Cidade 3",
			complemento: "Complemento 3",
			estado: "Estado 3",
			numero: "789",
			pais: "País 3",
		},
		genero: "Outro",
		idade: 35,
		identificacao: "ID789",
		nome: "Usuário 3",
		numeroEmergencia: "777777777",
		senha: "senha789",
		telefone: "777-888-999",
	},
	{
		email: "usuario4@example.com",
		endereco: {
			bairro: "Bairro 4",
			cep: "44444-444",
			cidade: "Cidade 4",
			complemento: "Complemento 4",
			estado: "Estado 4",
			numero: "101",
			pais: "País 4",
		},
		genero: "Masculino",
		idade: 28,
		identificacao: "ID101",
		nome: "Usuário 4",
		numeroEmergencia: "666666666",
		senha: "senha101",
		telefone: "666-777-888",
	},
	{
		email: "usuario5@example.com",
		endereco: {
			bairro: "Bairro 5",
			cep: "98765-123",
			cidade: "Cidade 5",
			complemento: "Complemento 5",
			estado: "Estado 5",
			numero: "505",
			pais: "País 5",
		},
		genero: "Feminino",
		idade: 22,
		identificacao: "ID505",
		nome: "Usuário 5",
		numeroEmergencia: "555555555",
		senha: "senha505",
		telefone: "555-444-333",
	},
	{
		email: "usuario6@example.com",
		endereco: {
			bairro: "Bairro 6",
			cep: "11111-111",
			cidade: "Cidade 6",
			complemento: "Complemento 6",
			estado: "Estado 6",
			numero: "303",
			pais: "País 6",
		},
		genero: "Masculino",
		idade: 32,
		identificacao: "ID303",
		nome: "Usuário 6",
		numeroEmergencia: "333333333",
		senha: "senha303",
		telefone: "333-222-111",
	},
	{
		email: "usuario7@example.com",
		endereco: {
			bairro: "Bairro 7",
			cep: "77777-777",
			cidade: "Cidade 7",
			complemento: "Complemento 7",
			estado: "Estado 7",
			numero: "202",
			pais: "País 7",
		},
		genero: "Feminino",
		idade: 29,
		identificacao: "ID202",
		nome: "Usuário 7",
		numeroEmergencia: "222222222",
		senha: "senha202",
		telefone: "222-333-444",
	},
	{
		email: "usuario8@example.com",
		endereco: {
			bairro: "Bairro 8",
			cep: "33333-333",
			cidade: "Cidade 8",
			complemento: "Complemento 8",
			estado: "Estado 8",
			numero: "404",
			pais: "País 8",
		},
		genero: "Outro",
		idade: 26,
		identificacao: "ID404",
		nome: "Usuário 8",
		numeroEmergencia: "444444444",
		senha: "senha404",
		telefone: "444-555-666",
	},
	{
		email: "usuario9@example.com",
		endereco: {
			bairro: "Bairro 9",
			cep: "22222-222",
			cidade: "Cidade 9",
			complemento: "Complemento 9",
			estado: "Estado 9",
			numero: "606",
			pais: "País 9",
		},
		genero: "Masculino",
		idade: 24,
		identificacao: "ID606",
		nome: "Usuário 9",
		numeroEmergencia: "666666666",
		senha: "senha606",
		telefone: "666-777-888",
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
