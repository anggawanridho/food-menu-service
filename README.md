# Food Menu Service

## Environment Variables

- `PORT`: Port on which the server should run. Default is `3000`.
- `GET` : "http://localhost:3000/api/calculate-price"

    req.body :
            
        {
            "order": [
                {
                "menuName": "Pizza",
                "toppingName": "Chicken",
                "fillingName": "Tomato"
                },
                {
                "menuName": "Doughnut",
                "toppingName": "Blueberry",
                "fillingName": "Apple Slices"
                }
            ]
        }

    response :

        {
            "totalPrice": 123000
        }