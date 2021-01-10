import requests


def client():
    data = {
        "username": "resttest",
        "email": "test@rest.com",
        "password1": "passww123",
        "password2": "passww123"
    }

    response = requests.post("http://127.0.0.1:8000/api/rest-auth/registration/",
                             data=data)
    print(f"Code: {response.status_code}")
    response_data = response.json()
    print(response_data)


if __name__ == "__main__":
    client()
