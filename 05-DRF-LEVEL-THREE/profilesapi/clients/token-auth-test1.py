import requests


def client():
    # credentials = {"username": "admin", "password": "123456"}

    # response = requests.post("http://127.0.0.1:8000/api/rest-auth/login/",
    #                          data=credentials)
    token_h = "Token 3743152f9ef57a3d45133ed9e113d5d66e7f3bad"
    headers = {
        "Authorization": token_h
    }

    response = requests.get("http://127.0.0.1:8000/api/profiles/", headers=headers)
    print(f"Status code: {response.status_code}")
    response_data = response.json()
    print(response_data)


if __name__ == "__main__":
    client()



