# from coinbase.wallet.client import Client
# import os

# from coinbase_commerce.client import Client

# API_KEY = os.environ.get("API_KEY")

# client = Client(api_key=API_KEY)

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

# charge = client.charge.create(**charge_info)
# id=charge["id"]

# print(charge)
# print(charge["id"])


string = "charge:created"
string2 = "0.01"

print(float(string2))
