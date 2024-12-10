import requests
from django.conf import settings  # Import settings to access API key


def fetch_legislator_info_from_api():
    api_url = F"https://www.opensecrets.org/api/?method=getLegislators&id=CA&output=json&apikey={settings.OPENSECRETS_API_KEY}"
    
    try:
        response = requests.get(api_url)
        response.raise_for_status()
        json_res = response.json()
        print(json_res)
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None
