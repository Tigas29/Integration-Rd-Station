<body>
    <script>
		// pode ser um redirect
</script>
</body>

</html>

<?php

// $name = isset($_GET['name']) ? $_GET['name'] : '';


$email = isset($_GET['email']) ? $_GET['email'] : '';
$phone = isset($_GET['phone']) ? $_GET['phone'] : '';

$curl = curl_init();
$data =
    '
{
		"token": "___coloque seu token aqui___",
			"name": "___nome que vai ser como titulo___",
			"organization": {
				"name": "___Nome do seu crm vai aqui___",
		
				"user": {
					"name": "___Nome do responsavel___",
					"email": "___E-mail do responsavel___"
				},
				"organization_segments": []
			},
			"contacts": [
				{
					"name": "___aqui eu coloquei um nome padrão, mas é possivel colocar via formulario a info___",
					"emails": [
									{ "email": "' . $email . '"}
					],
					"phones": [
						{
							"phone": "' . $phone .'",
							"type": "work"
						}
					]
				}
			],

	
			"deal_custom_fields": [],
			"deal_products": []
		}

';

curl_setopt_array($curl, array(
    CURLOPT_URL => 'API DA RD STATION',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => $data,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json'
    ),
));

$response = curl_exec($curl);

curl_close($curl);

 ?>

