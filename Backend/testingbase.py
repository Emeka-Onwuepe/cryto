from coinbase.wallet.client import Client

from coinbase_commerce.client import Client

client = Client(api_key=API_KEY)

# checkout_info = {
#     "name": 'The Sovereign Individual',
#     "description": 'Mastering the Transition to the Information Age',
#     "pricing_type": 'fixed_price',
#     "local_price": {
#         "amount": "1.00",
#         "currency": "USD"
#     },
#     "requested_info": ["name", "email"]
# }
# checkout = client.checkout.create(**checkout_info)

# print(checkout)

# checkouts = client.charge.list()

# print(checkouts)

charge_info = {
    "name": "The Sovereign",
    "metadata":{"name":"emeka Onwuepe","email":"pascalemy2010@gmail.com"},
    "description": "Mastering the Transition to the Information Age",
    "local_price": {
        "amount": "1.00",
        "currency": "USD"
    },
    "pricing_type": "fixed_price"

}

charge_info= {'name': 'FutexInvest', 
'metadata': {'name': 'EMEKA ONWUEPE', 'email': 'pascalemy2000@gmail.com'}, 
'description': 'Payment for BASIC package', 
'local_price': {'amount': '1', 'currency': 'USD'}, 
'pricing_type': 'fixed_price'}
charge = client.charge.create(**charge_info)
print(charge["hosted_url"])
